// Visitor analytics for fpcatechnologies.com
//
//  - Vercel Web Analytics (mounted in main.jsx): page views, referrers, countries, devices. No cookies.
//  - Microsoft Clarity (this file): click and scroll heatmaps, session recordings, dashboards by
//    country and device, and the custom events listed below.
//
// This module only does work in the browser. Importing it has no side effects, so the static
// pre-render (scripts/build.mjs) and the HTML that crawlers and AI agents read stay unchanged.

// Clarity Project ID: clarity.microsoft.com > your project > Settings > Overview.
// While this is empty Clarity stays off and the site behaves exactly as before.
const clarityProjectId = '';

// Clarity only runs on the live site, so local development and Vercel preview links add no data.
const liveHosts = ['www.fpcatechnologies.com', 'fpcatechnologies.com'];

// Open any page once with ?analytics=off to stop counting your own visits in that browser,
// and ?analytics=on to start counting again. Unlike IP blocking this works on any network.
const optOutKey = 'fpca-analytics-off';

// Custom events sent to Clarity (Clarity > Recordings / Dashboard > filter by Smart events).
//   <form data-form="x">   x_started  when a visitor first focuses a field
//   form submit result     x_sent / x_failed  (fired from the form components)
//   link clicks            matched by href below
const linkEvents = [
  { event: 'docking_email_click', test: (href) => href.startsWith('mailto:') && /subject=Drone%20docking/i.test(href) },
  { event: 'email_click', test: (href) => href.startsWith('mailto:') },
  { event: 'phone_click', test: (href) => href.startsWith('tel:') },
  { event: 'linkedin_click', test: (href) => href.includes('linkedin.com') },
  { event: 'apply_click', test: (href) => /^\/careers?\/apply\/?$/.test(href) },
  { event: 'careers_click', test: (href) => /^\/careers?\/?$/.test(href) },
];

export function isTrackingDisabled() {
  try {
    return window.localStorage.getItem(optOutKey) === '1';
  } catch {
    return false;
  }
}

export function trackEvent(name) {
  if (typeof window.clarity !== 'function' || isTrackingDisabled()) return;
  window.clarity('event', name);
}

function syncOptOutFromUrl() {
  try {
    const choice = new window.URLSearchParams(window.location.search).get('analytics');
    if (choice === 'off') window.localStorage.setItem(optOutKey, '1');
    if (choice === 'on') window.localStorage.removeItem(optOutKey);
  } catch {
    // Storage can be blocked (private browsing); counting then simply stays on.
  }
}

function closestFrom(event, selector) {
  return event.target instanceof window.Element ? event.target.closest(selector) : null;
}

function onClick(event) {
  const link = closestFrom(event, 'a[href]');
  if (!link) return;
  const href = link.getAttribute('href') || '';
  const match = linkEvents.find((rule) => rule.test(href));
  if (match) trackEvent(match.event);
}

const startedForms = new WeakSet();

function onFocusIn(event) {
  const form = closestFrom(event, 'form[data-form]');
  if (!form || startedForms.has(form)) return;
  startedForms.add(form);
  trackEvent(`${form.dataset.form}_started`);
}

// Clarity's own loader keeps a queue until its script arrives, so events fired early are not lost.
function installClarityQueue() {
  window.clarity =
    window.clarity ||
    function clarity() {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };
}

function loadClarityScript() {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${encodeURIComponent(clarityProjectId)}`;
  document.head.appendChild(script);
}

// Start Clarity after the page has finished loading so it never competes with first paint.
function afterPageLoad(callback) {
  const schedule = () => {
    if (typeof window.requestIdleCallback === 'function') window.requestIdleCallback(callback, { timeout: 2000 });
    else window.setTimeout(callback, 1500);
  };
  if (document.readyState === 'complete') schedule();
  else window.addEventListener('load', schedule, { once: true });
}

export function initAnalytics() {
  syncOptOutFromUrl();
  if (!clarityProjectId || !liveHosts.includes(window.location.hostname) || isTrackingDisabled()) return;

  installClarityQueue();
  document.addEventListener('click', onClick, true);
  document.addEventListener('focusin', onFocusIn, true);
  afterPageLoad(loadClarityScript);
}
