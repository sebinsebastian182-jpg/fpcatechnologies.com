import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import react from '@vitejs/plugin-react';
import { build } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

// 1. Client build (what the browser loads and hydrates).
await build({
  configFile: false,
  plugins: [react()],
});

// 2. Server build of the render entry, used only at build time.
await build({
  configFile: false,
  plugins: [react()],
  logLevel: 'warn',
  build: {
    ssr: 'src/entry-server.jsx',
    outDir: ssrDir,
    emptyOutDir: true,
    minify: false,
  },
});

// 3. Pre-render every route into static HTML.
const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const { pages, siteUrl } = await import(pathToFileURL(path.join(root, 'src', 'seo.js')).href);

const template = await readFile(path.join(distDir, 'index.html'), 'utf8');

const escapeAttr = (value) => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeJsonForScript = (value) => JSON.stringify(value).replace(/</g, '\\u003c');

function setMeta(html, selectorAttr, name, content) {
  const pattern = new RegExp(`<meta\\s+${selectorAttr}="${name}"\\s+content="[^"]*"\\s*/?>`);
  const tag = `<meta ${selectorAttr}="${name}" content="${escapeAttr(content)}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function renderPage(page) {
  const canonicalPath = page.canonical || page.path;
  const canonicalUrl = canonicalPath === '/' ? `${siteUrl}/` : `${siteUrl}${canonicalPath}`;
  const body = render(page.path);

  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(page.title)}</title>`);
  html = setMeta(html, 'name', 'description', page.description);
  html = setMeta(html, 'property', 'og:title', page.title);
  html = setMeta(html, 'property', 'og:description', page.description);
  html = setMeta(html, 'property', 'og:url', canonicalUrl);
  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonicalUrl}" />`);

  // Remove any JSON-LD already in the template, then add this page's structured data.
  html = html.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
  const schemaTags = (page.schemas || [])
    .map((schema) => `    <script type="application/ld+json">${escapeJsonForScript(schema)}</script>`)
    .join('\n');
  html = html.replace('</head>', `${schemaTags}\n  </head>`);

  const normalizedPath = page.path === '/' ? '/' : page.path.replace(/\/$/, '');
  html = html.replace('<div id="root"></div>', `<div id="root" data-prerender-path="${escapeAttr(normalizedPath)}">${body}</div>`);
  return html;
}

for (const page of pages) {
  const html = renderPage(page);
  const outFile = page.path === '/' ? path.join(distDir, 'index.html') : path.join(distDir, page.path.replace(/^\//, ''), 'index.html');
  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, html, 'utf8');
  console.log(`prerendered ${page.path} -> ${path.relative(root, outFile)} (${(html.length / 1024).toFixed(1)} kB)`);
}

await rm(ssrDir, { recursive: true, force: true });
