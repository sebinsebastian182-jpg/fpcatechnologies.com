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
  // Blog pages bring their own share image and article dates.
  if (page.image) {
    html = setMeta(html, 'property', 'og:image', page.image);
    html = setMeta(html, 'property', 'og:image:width', '1200');
    html = setMeta(html, 'property', 'og:image:height', '630');
    html = setMeta(html, 'name', 'twitter:card', 'summary_large_image');
  }
  if (page.ogType) html = setMeta(html, 'property', 'og:type', page.ogType);
  if (page.publishedTime) html = setMeta(html, 'property', 'article:published_time', page.publishedTime);
  if (page.modifiedTime) html = setMeta(html, 'property', 'article:modified_time', page.modifiedTime);
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

// 4. Blog: add every article to sitemap.xml, llms.txt and llms-full.txt, so new posts in
//    src/blog/posts.js are listed for search engines and AI assistants without editing those files.
const { blogPath, blogPosts } = await import(pathToFileURL(path.join(root, 'src', 'blog', 'posts.js')).href);
const blogUrl = (post) => `${siteUrl}${blogPath}/${post.slug}`;
const latest = blogPosts.map((post) => post.dateModified).sort().at(-1);

const sitemapFile = path.join(distDir, 'sitemap.xml');
let sitemap = await readFile(sitemapFile, 'utf8');
const sitemapEntries = [
  { loc: `${siteUrl}${blogPath}`, lastmod: latest, priority: '0.8' },
  ...blogPosts.map((post) => ({ loc: blogUrl(post), lastmod: post.dateModified, priority: '0.7' })),
].filter((entry) => !sitemap.includes(`<loc>${entry.loc}</loc>`));
if (sitemapEntries.length) {
  const xml = sitemapEntries
    .map((entry) => `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`)
    .join('\n');
  sitemap = sitemap.replace('</urlset>', `${xml}\n</urlset>`);
  await writeFile(sitemapFile, sitemap, 'utf8');
}

// Article text as Markdown: [^source] citations become [n], with the numbered sources at the end.
function postMarkdown(post) {
  const numbers = new Map();
  const cite = (text) => text.replace(/\[\^([a-z0-9]+)\]/g, (_, key) => {
    if (!numbers.has(key)) numbers.set(key, numbers.size + 1);
    return `[${numbers.get(key)}]`;
  });
  const lines = [`# Page: ${post.title}`, `URL: ${blogUrl(post)}`, `Published: ${post.datePublished} · Updated: ${post.dateModified} · By FPCA Technologies`, '', post.description, '', '## In short'];
  post.summary.forEach((item) => lines.push(`- ${cite(item)}`));
  for (const block of post.body) {
    lines.push('');
    if (block.type === 'h2') lines.push(`## ${block.text}`);
    else if (block.type === 'h3') lines.push(`### ${block.text}`);
    else if (block.type === 'ul') block.items.forEach((item) => lines.push(`- ${cite(item)}`));
    else if (block.type === 'ol') block.items.forEach((item, index) => lines.push(`${index + 1}. ${cite(item)}`));
    else if (block.type === 'figure') lines.push(`Image: ${block.alt}${block.caption ? ` (${block.caption})` : ''}`);
    else if (block.type === 'table') {
      if (block.caption) lines.push(`Table: ${cite(block.caption)}`);
      lines.push(`| ${block.head.join(' | ')} |`, `| ${block.head.map(() => '---').join(' | ')} |`);
      block.rows.forEach((row) => lines.push(`| ${row.map(cite).join(' | ')} |`));
      if (block.note) lines.push(cite(block.note));
    } else if (block.type === 'callout') {
      if (block.title) lines.push(`> **${block.title}**`);
      (block.paragraphs || []).forEach((text) => lines.push(`> ${cite(text)}`));
      (block.items || []).forEach((item) => lines.push(`> - ${cite(item)}`));
    } else lines.push(cite(block.text));
  }
  lines.push('', '## Sources');
  [...numbers.entries()].forEach(([key, number]) => {
    const source = post.sources[key];
    lines.push(`${number}. ${source.title}. ${source.publisher}, ${source.date}. ${source.url}`);
  });
  return lines.join('\n');
}

const llmsFullFile = path.join(distDir, 'llms-full.txt');
let llmsFull = await readFile(llmsFullFile, 'utf8');
if (!llmsFull.includes('# Page: Blog')) {
  const index = ['# Page: Blog', `URL: ${siteUrl}${blogPath}`, '', ...blogPosts.map((post) => `- [${post.title}](${blogUrl(post)}): ${post.description}`)];
  llmsFull = `${llmsFull.trimEnd()}\n\n---\n\n${index.join('\n')}\n\n---\n\n${blogPosts.map(postMarkdown).join('\n\n---\n\n')}\n`;
  await writeFile(llmsFullFile, llmsFull, 'utf8');
}

const llmsFile = path.join(distDir, 'llms.txt');
let llms = await readFile(llmsFile, 'utf8');
if (!llms.includes('## Blog')) {
  const section = ['## Blog', '', 'Sourced articles for mining professionals. The full text of each is in llms-full.txt.', '', ...blogPosts.map((post) => `- [${post.title}](${blogUrl(post)}): ${post.description}`)];
  llms = `${llms.trimEnd()}\n\n${section.join('\n')}\n`;
  await writeFile(llmsFile, llms, 'utf8');
}
console.log(`blog: ${blogPosts.length} articles added to sitemap.xml, llms.txt and llms-full.txt`);
