# scrimba

A personal record of working through Scrimba's **[Frontend Developer Career
Path](https://scrimba.com/the-frontend-developer-career-path-c0j)** — one
folder per lesson/exercise, nested under `Frontend Career Path/Module
NN-<name>/`. The 12 top-level modules and their lesson counts are listed in
[`Frontend Career Path/README.md`](Frontend%20Career%20Path/README.md)
(Scrimba's own course export, kept as-is).

## Architecture style

Not an application — a course-exercise archive. Each lesson folder is
self-contained (its own `index.html`/`.css`/`.js`, occasionally its own
`README.md`/`package.json`). No shared build system, router, or shared
source tree ties the folders together; nothing here is meant to be deployed
as one cohesive app. Three shapes recur:

- **Plain static** (the large majority): `index.html` + `.css` + `.js`,
  open directly in a browser, no build step.
- **Vite-scaffolded** (3 folders — `Module 03.1-Accessible development`,
  `Module 02/06.Solo Project_ Hometown Homepage`,
  `Module 08/01.Intro to APIs & BoredBot`): each has its own
  `package.json`/`vite.config.js`; run `npm install && npm start` inside
  that specific folder.
- **React, not wired up** (`Module 01/02.Your own personalized web app`):
  see the disclosed-not-fixed finding below — this one does not run as
  committed.

## Running a lesson

```bash
cd "Frontend Career Path/Module <NN>/<lesson>"
# plain-static folders: just open index.html in a browser
# vite folders (the 3 named above):
npm install
npm start        # vite dev server
```

## Deployment

[`.github/workflows/static.yml`](.github/workflows/static.yml) deploys the
entire repository tree as-is to GitHub Pages on every push to `master`,
live at <https://rasimaghayev.github.io/scrimba/>. Verified via the GitHub
API: Pages reports `status: "built"`, with one recorded deployment
(2024-07-10T06:45:28Z) whose commit SHA matches `master`'s current HEAD
exactly — the live site does reflect the current tree. One thing left
unexplained rather than asserted: the workflow itself shows **zero** runs
under `gh run list`/the Actions API for that workflow ID, despite the
successful deployment record — most likely the original July 2024 run
simply aged out of GitHub's default ~90-day Actions log retention while
the separate, longer-retained Pages-deployments record survived; not
independently confirmed.

## Disclosed findings (documentation pass only — no source changed)

- **`Module 01/02.Your own personalized web app` does not run as
  committed.** `package.json` declares `react`/`react-dom`, and `index.js`
  uses JSX directly (`<div className="box">...`), but `index.html` loads
  `index.js` as a plain `<script>` with no Babel/React CDN tags and no
  bundler config in this folder (unlike the three Vite folders above) —
  JSX is not valid browser JavaScript, so this throws a syntax error as-is.
  Verified by reading the files directly, not by asserting from the
  folder name.
- **Hardcoded API credentials in `index.js`** in that same folder — an
  Unsplash `client_id` and a second `API_KEY` constant (unused by the
  code, dead). Not escalated as a live-secret finding: Unsplash's public
  Demo API tier is explicitly designed for client-side-embedded,
  rate-limited (50 req/hr) access keys, not server secrets — same class
  of "meant to be public" credential as a Firebase client config, not
  TASK-011's mern-bt-style server secret.
- **A tracked `.env`** in `Module 03/08.Build a Mobile App` containing a
  Firebase Realtime Database URL only (no API key alongside it). Firebase
  database URLs are routinely embedded in public client-side code by
  design — access control is enforced via Firebase Security Rules, not
  URL secrecy — so this was documented, not treated as a credential leak
  requiring rotation.
- **Dependency audit (real, not assumed):** exactly one `package-lock.json`
  exists in the whole repo (`Module 01/02.Your own personalized web app`).
  Ran `npm audit` for real against it inside a throwaway `node:20`
  container — **0 vulnerabilities** (6 prod deps: react/react-dom and
  their transitive tree). The other three Vite folders pin
  `"vite": "latest"` with no lockfile at all — unpinned by design, not a
  reproducible build.
- **Accessibility hints are explicitly disabled** in the repo's own
  `.hintrc` (`axe/text-alternatives.image-alt: off`, `axe/forms.label:
  off`, `axe/language.html-has-lang: off`) — notable given one of the
  course modules (`Module 03.1-Accessible development`) is specifically
  about accessibility.
- **Same misleading-push-date pattern as the rest of this portfolio:**
  GitHub reports this repo pushed 2026-08-15T07:37:51Z, but `master`'s
  real last commit is 2024-07-10. Checked all 8 remote branches
  individually via `git merge-base --is-ancestor` (none merged, all are
  open Renovate PRs — Actions/Pages tooling bumps and two 2024-vintage
  `react`/`react-dom` v19 bumps); `renovate/font-awesome-7.x`'s own commit
  timestamp (2026-08-15T07:37:33Z) matches GitHub's reported push date to
  within 18 seconds, confirming that unmerged branch — not `master` — is
  what GitHub's push-date banner reflects.
- GitHub's own per-language byte breakdown (CSS 43,178 / JS 34,665 / HTML
  34,103) does support this portfolio's "CSS" primary-language tag for
  this repo — unlike some other repos in this queue, the language
  classification checks out.
