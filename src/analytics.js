// Visitor analytics for fpcatechnologies.com
//
//  - Vercel Web Analytics (mounted in main.jsx): page views, referrers, countries, devices. No cookies.
//  - Microsoft Clarity (this file): click and scroll heatmaps, session recordings, dashboards by
//    country and device, and the custom events listed below.
//
// This module only does work in the browser. Importing it has no side effects, so the static
// pre-render (scripts/build.mjs) and the HTML that crawlers and AI agents read stay unchanged.
// Every entry point is wrapped so that analytics can never break the page or the forms.

// Clarity Project ID: clarity.microsoft.com > your project > Settings > Overview.
// While this is empty Clarity stays off and the site behaves exactly as before.
const clarityProjectId = '';

// Clarity only runs on the live site, so local development and Vercel preview links add no data.
const liveHosts = ['www.fpcatechnologies.com', 'fpcatechnologies.com'];

// Pages Clarity never runs on. The job application form promises that applicant information is
// used only for recruitment, so that page is left out entirely (Vercel still counts its visits).
const clarityExcludedPages = /^\/careers?\/apply\/?$/;

// Open any page once with ?analytics=off to stop counting your own visits in that browser,
// and ?analytics=on to start counting again. Unlike IP blocking this works on any network.
const optOutKey = 'fpca-analytics-off';
let optedOutThisPage = false;

// Query parameters removed from the address bar before any analytics runs: the switch above, so a
// copied link can never opt other people out, and the enquiry form's fields, which a browser puts
// in the address if the form is submitted before the page's scripts have loaded.
const privateParams = ['analytics', 'name', 'phone', 'email', 'address', 'website'];

// Custom events sent to Clarity. They appear as Smart events in the Clarity dashboard and in the
// Events panel of each recording.
//   <form data-form="x">   x_started  the first time a visitor focuses one of its fields
//   form submit result     x_sent / x_failed  (fired from the form component)
//   link clicks            matched by href below
const linkEvents = [
  { event: 'docking_email_click', test: (href) => href.startsWith('mailto:') && /subject=Drone%20docking/i.test(href) },
  { event: 'email_click', test: (href) => href.startsWith('mailto:') },
  { event: 'phone_click', test: (href) => href.startsWith('tel:') },
  { event: 'linkedin_click', test: (href) => href.includes('linkedin.com') },
  { event: 'apply_click', test: (href) => /^\/careers?\/apply\/?$/.test(href) },
  // Counted only from outside the careers pages, so "Back to Careers" links don't count as interest.
  { event: 'careers_click', test: (href) => /^\/careers?\/?$/.test(href) && !/^\/careers?(\/|$)/.test(window.location.pathname) },
];

function storedOptOut() {
  try {
    return window.localStorage.getItem(optOutKey) === '1';
  } catch {
    return false;
  }
}

export function isTrackingDisabled() {
  return optedOutThisPage || storedOptOut();
}

export function trackEvent(name) {
  try {
    if (typeof window.clarity !== 'function' || isTrackingDisabled()) return;
    window.clarity('event', name);
  } catch {
    // A failing analytics call must never change what the visitor sees.
  }
}

function applyTeamSwitch() {
  const choice = (new window.URLSearchParams(window.location.search).get('analytics') || '').toLowerCase();
  if (choice !== 'off' && choice !== 'on') return;
  optedOutThisPage = choice === 'off';
  try {
    if (optedOutThisPage) window.localStorage.setItem(optOutKey, '1');
    else window.localStorage.removeItem(optOutKey);
  } catch {
    // Storage can be blocked (private browsing); the switch then applies to this page only.
  }
}

function cleanAddressBar() {
  const url = new window.URL(window.location.href);
  const found = privateParams.filter((key) => url.searchParams.has(key));
  if (!found.length) return;
  found.forEach((key) => url.searchParams.delete(key));
  window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
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
  const field = event.target instanceof window.Element ? event.target : null;
  // Only real fields count; buttons and the hidden spam-trap field (tabIndex -1) are ignored.
  if (!field || !field.matches('input, textarea, select') || field.tabIndex < 0) return;
  const form = field.closest('form[data-form]');
  if (!form || startedForms.has(form)) return;
  startedForms.add(form);
  trackEvent(`${form.dataset.form}_started`);
}

// Clarity's own loader keeps a queue until its script arrives, so events fired in the first moments
// are sent once it loads (unless the visitor has already left the page by then).
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
  try {
    applyTeamSwitch();
    cleanAddressBar();
    if (!clarityProjectId || !liveHosts.includes(window.location.hostname) || isTrackingDisabled()) return;
    if (clarityExcludedPages.test(window.location.pathname)) return;

    installClarityQueue();
    document.addEventListener('click', onClick, true);
    document.addEventListener('focusin', onFocusIn, true);
    afterPageLoad(loadClarityScript);
  } catch {
    // Analytics must never stop the page from loading or the forms from working.
  }
}
