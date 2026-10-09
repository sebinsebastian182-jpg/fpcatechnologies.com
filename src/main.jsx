import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root')
const currentPath = window.location.pathname.replace(/\/$/, '') || '/'
const prerenderedPath = container.dataset.prerenderPath

const app = (
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
)

// Pages are pre-rendered to static HTML at build time (see scripts/build.mjs).
// When the HTML on the page was rendered for this exact route, hydrate it in place;
// otherwise (unknown URL served by the SPA fallback) render from scratch.
if (prerenderedPath && prerenderedPath === currentPath && container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app)
} else {
  container.replaceChildren()
  ReactDOM.createRoot(container).render(app)
}
