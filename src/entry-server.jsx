import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Called by scripts/build.mjs for each route. Returns the page body as static HTML
// that src/main.jsx hydrates in the browser.
export function render(path) {
  return renderToString(<App path={path} />);
}
