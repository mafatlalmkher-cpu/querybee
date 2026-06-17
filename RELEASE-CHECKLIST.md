# QueryBee release checklist (GitHub + Zenodo DOI)

This is the exact set of files to publish and the steps to mint a citable DOI. Everything in the
release is in this folder's root plus `test/` and `benchmark/`. The `manuscript/`, `_planning/`,
`archive/`, `node_modules/`, and `test-results/` folders are not part of the release and are
already listed in `.gitignore`.

## 1. What goes in the release

Tool and documentation:

- `index.html` — the tool, the single file users open
- `README.md`
- `LICENSE` (MIT)
- `CITATION.cff`
- `CHANGELOG.md`
- `USER-GUIDE.md`
- `User-Manual.md`, `User-Manual.html`, `User-Manual.pdf`
- `manual.css` — builds the manual's HTML (optional, harmless to include)

Tests and validation (optional for a minimal release, recommended for credibility):

- `package.json`, `package-lock.json`
- `playwright.config.js`
- `test/` — unit tests, the test harness, and the end-to-end tests
- `benchmark/` — the cross-field validity benchmark and its results

Do not upload: `manuscript/` (the gold-standard PDFs are third-party copyrighted articles and the
paper is unpublished), `_planning/`, `archive/`, `node_modules/`, `test-results/`.

## 2. Publish to GitHub

1. Create a public repository named `querybee` under your account
   (github.com/mafatlalmkher-cpu/querybee).
2. Upload the files listed in section 1. Easiest path without git: on the repo page choose
   "Add file" then "Upload files", and drag in the root files plus the `test/` and `benchmark/`
   folders. Do not drag `manuscript/`, `_planning/`, `archive/`, `node_modules/`, or
   `test-results/`. If you use git instead, `.gitignore` already excludes those for you.
3. Recommended: turn on GitHub Pages so the tool is live on the web. Settings then Pages, deploy
   from branch `main`, folder `/(root)`. Because the file is named `index.html`, the tool opens
   directly at https://mafatlalmkher-cpu.github.io/querybee/ within a minute.

## 3. Get a DOI from Zenodo

1. Sign in at https://zenodo.org with your GitHub account.
2. In Zenodo open Account then GitHub, find `querybee` in the list, and switch it ON. This links
   the repository so Zenodo can archive it.
3. Back on GitHub, create a release: Releases then "Draft a new release", set the tag to `v1.2.0`,
   title "QueryBee 1.2.0", and Publish.
4. Zenodo automatically archives that release and mints a DOI. Two DOIs appear: a version DOI for
   1.2.0 and a concept DOI that always points to the newest version. Use the concept DOI in the
   paper.
5. Add the DOI to `CITATION.cff` (a `doi:` line under the top-level metadata) and to the README
   badge, then commit. The version is already set to 1.2.0 in `CITATION.cff` and `package.json`.

Metadata Zenodo will read from `CITATION.cff`: author Mafatlal M. Kher, ORCID
0000-0001-5600-0040, affiliation Ariel University, license MIT, title "QueryBee: a single-file,
browser-based fielded Boolean query builder for literature search".

## 4. After the DOI

- Put the DOI badge at the top of `README.md`.
- The email signature and social posts in `_planning/Launch-Kit.md` can now carry the live URL
  and the DOI.
- Sanity check before you announce: open the GitHub Pages URL in a fresh browser, build a query,
  toggle on a specialist engine, and copy one query, to confirm the hosted copy works.

## 5. Verify the release builds cleanly (optional, for the test/ and benchmark/ folders)

From this folder, `npm test` runs the unit suite (currently 21 tests). The end-to-end tests need
`npx playwright install` first. Neither is required to publish, but a green suite is good evidence
for a methods paper.
