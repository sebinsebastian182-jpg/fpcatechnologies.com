# FPCA careers application deployment

This update replaces the external application form with an internal application page and a Vercel serverless email endpoint. Applicant information is emailed to FPCA and is not written to the repository or stored in browser storage.

## Files added and modified

- `src/App.jsx`: internal application links, application route, careers structured data, and product wording corrections.
- `src/CareerApplicationPage.jsx`: accessible, responsive application form and client-side validation.
- `api/apply.js`: Vercel endpoint, server-side validation, spam checks, reference generation, and Resend email delivery.
- `public/llms.txt`: factual company and vacancy guidance for AI systems.
- `public/jobs.json`: machine-readable active vacancy feed.
- `scripts/build.mjs` and `scripts/dev.mjs`: Vite build and development entry points.
- `eslint.config.js`: JavaScript and JSX lint configuration.
- `CAREERS_DEPLOYMENT.md`: deployment and maintenance instructions.
- `package.json` and `package-lock.json`: lint tooling.

## Required environment variables

Configure these for Production, Preview, and Development as appropriate:

```text
RESEND_API_KEY=re_xxxxxxxxx
APPLICATION_FROM_EMAIL=FPCA Careers <careers@fpcatechnologies.com>
APPLICATION_TO_EMAIL=admin@fpcatechnologies.com
```

Never prefix these names with `VITE_`; doing so would expose them to frontend code. Never commit a real API key.

## Create and verify the Resend sending domain

1. Sign in to Resend and open **Domains**.
2. Add `fpcatechnologies.com` or a dedicated sending subdomain.
3. Add the DNS records shown by Resend at the domain's DNS provider.
4. Wait for Resend to show the domain as verified.
5. Use a From address on that verified domain for `APPLICATION_FROM_EMAIL`.
6. Send a test application and confirm both the FPCA recruitment email and applicant confirmation arrive.

See the [Resend domain guide](https://resend.com/docs/dashboard/domains/introduction) and [email API reference](https://resend.com/docs/api-reference/emails/send-email).

## Configure Vercel and redeploy

1. Open the project in Vercel.
2. Go to **Settings → Environment Variables**.
3. Add all three variables above without surrounding quotes.
4. Apply them to the required environments.
5. Redeploy the feature deployment or merge the pull request and redeploy `main`.
6. Verify `/career/apply`, `/llms.txt`, and `/jobs.json` on the deployed domain.

The existing `vercel.json` catch-all rewrite preserves direct navigation and refreshes for the Vite routes. Vercel serves `api/apply.js` as a function before applying the SPA rewrite.

## Test the application endpoint

The browser form is the preferred end-to-end test because it creates the Base64 resume payload correctly.

For API-only testing, send a `POST` request to `/api/apply` with `Content-Type: application/json`. Include every required candidate field, `consent: true`, an empty `website` honeypot, a `submissionStartedAt` timestamp at least three seconds old, and:

```json
{
  "resume": {
    "filename": "resume.pdf",
    "mimeType": "application/pdf",
    "base64": "BASE64_FILE_CONTENT"
  }
}
```

Confirm:

- `GET /api/apply` returns `405`.
- Missing or invalid fields return `400` or `422`.
- Oversized application payloads return `413`.
- A valid application returns `200` and an `FPCA-CAREERS-YYYY-XXXXXX` reference.
- The recruitment email contains the submitted fields and resume attachment.
- The applicant receives the confirmation email with the same reference.

## Change or close the active vacancy

The human-readable vacancy is defined near the top of `src/App.jsx`. The selected role summary and form choices are in `src/CareerApplicationPage.jsx`. Server-side role and validation rules are in `api/apply.js`.

When changing a vacancy, update all three files together, then update the `JobPosting` object in `src/App.jsx` and the corresponding record in `public/jobs.json`.

To close the vacancy:

1. Change its `status` in `public/jobs.json` from `active` to `closed`, or remove the record.
2. Remove or disable its Apply links on the careers page.
3. Remove its `JobPosting` structured data when the job is no longer active.
4. Update `public/llms.txt` if the official careers guidance changes.
5. Build, test, and redeploy.

Do not invent `validThrough`, salary, or stipend values. Add them only after FPCA confirms them.

## Maintain machine-readable files

- Update `public/llms.txt` whenever the company positioning, official links, or AI guidance changes.
- Update `public/jobs.json` whenever a vacancy opens, changes, or closes. Keep `lastUpdated` as the actual ISO deployment date.
- Validate `public/jobs.json` as JSON before deployment.
- Confirm both files appear at the deployment root after `npm run build`.

## Change the recruitment email address

Change `APPLICATION_TO_EMAIL` in Vercel to route new applications to a different inbox. Update the careers contact address in `src/App.jsx`, `src/CareerApplicationPage.jsx`, and `public/llms.txt` only if the public contact address also changes. Redeploy after changing Vercel variables.

## Security follow-up

The endpoint includes a honeypot, minimum completion time, request-size checks, server-side field and resume validation, HTML escaping, and safe public errors. If application volume increases, add a persistent rate limiter such as Vercel KV or Upstash; do not rely on per-instance memory for rate limiting.
