# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/), and the project uses semantic versioning.

## [Unreleased]

### Changed
- The companion abstract-screening tool no longer bundles an in-house screener. It is now a short referral page that recommends the best free dedicated tools (Catchii first, then ASReview, then Rayyan), with a what-to-pick guide, an honest note that it does not replace dedicated software, and a citation to van de Schoot et al. (2021) for ASReview. Records still leave QueryBee and the de-duplicator as RIS or CSV, which all three tools import.

### Added
- The companion Research Toolkit is now published as a separate site (https://github.com/mafatlalmkher-cpu/research-toolkit, live at https://mafatlalmkher-cpu.github.io/research-toolkit/), including a new "Free tools for your whole review" guide: a stage-by-stage comparison of free, and a few paid, tools for protocol registration, searching, reference management, full-text finding, de-duplication, screening, citation chasing, risk-of-bias assessment, meta-analysis, and reporting. Each stage gives three to five options, a short comparison, a default pick, and advice on when to keep the tool you already use. RevMan Web is flagged as free for researchers in Research4Life countries.

### Notes
- The core query builder (`index.html`) and the test suite are unchanged from 1.2.3; these are companion-tool and toolkit changes only.

## [1.2.3] - 2026-06-18

### Fixed (accessibility and design)
- Filter clusters (publication years, document types, databases) are now labelled groups (`role="group"` with `aria-labelledby`) for screen-reader navigation.
- In-step panel headings corrected from `<h4>` to `<h3>` so the document outline has no skipped heading level.
- Each colour-coded engine card (Scopus, Web of Science, Google Scholar, PubMed) now shows a colour dot before the engine name, so engines are distinguished by shape and text, not colour alone.
- Copying a query announces "[engine] query copied to clipboard" through a visually-hidden live region.

### Changed
- Engine border tints moved to CSS tokens (`--scopus-line`, `--wos-line`, `--scholar-line`, `--pubmed-line`); two drifted copy-button tints unified.
- Dropped `background-attachment:fixed` (ignored on iOS Safari, can cause repaint jank).
- Unified the optional-step signifier: step 2's number is solid like the others, leaving the green pill as the single marker.
- Query blocks use `overflow-wrap:anywhere` instead of the non-standard `word-break:break-word`.

No change to the query-building engine or the test suite (still 21 tests).

## [1.2.2] - 2026-06-18

### Changed
- Expanded the User Manual so every control has a what-it-does, why-it-matters, how-to-use, and use-and-avoid examples treatment, with subject-specific examples (describe-your-search, concept blocks and starter blocks, the AI-terms step, copy, MeSH, recall check, send-to-more-free-sources, narrow-the-topic, and save/share/document). Documented the strategy review's basis in PRESS and PRISMA-S, and why a reproducible saved search matters.

### Fixed (accessibility and responsive design)
- Darkened the faint text colour so small captions, per-database notes, and the footer meet WCAG AA contrast.
- Added disabled-state styling for buttons during async work (term mining, recall check), so a busy control no longer looks clickable.
- Enlarged the term-chip delete target, the MeSH chips, and the concept-delete control for easier use on touch screens.
- Added a small-screen breakpoint so padding and spacing adapt on phones.
- Used the darker engine tones for the active Scopus and Google Scholar database toggles so the white label text meets contrast.

No change to the query-building engine or the test suite (still 21 tests).

## [1.2.1] - 2026-06-17

### Changed
- Added an author byline under the title and a footer credit line (name, Department of Chemical Engineering, Ariel University, ORCID, DOI, MIT). Affiliation set to "Department of Chemical Engineering, Ariel University, Israel" throughout the tool, manual, guides, and CITATION.
- Refined the heading to "QueryBee: Boolean query builder for literature search"; updated the page title, meta description, and Open Graph / Twitter tags to ten databases; replaced placeholder URLs with the live GitHub Pages URL.
- Rewrote the User Manual as a comprehensive reference (time-saving rationale, browser guidance, by-field database selection, do's and don'ts, expanded troubleshooting). Added two companion guides: "Searching effectively with QueryBee" and "Subject Playbooks" (per-field recipes). Updated the README to ten databases with a documentation list.
- Added a .nojekyll file so GitHub Pages serves the static tool directly.
- Term mining ("find terms in literature") now uses OpenAlex's polite pool by sending a contact email, which fixes intermittent mining failures caused by shared-pool rate limiting.
- Expanded the document-type filter from four to eleven types (added Book, Editorial, Letter, Note, Short survey, Data paper, and Erratum). Each maps to Scopus, Web of Science, and PubMed where that engine supports it and is dropped where it does not, with no empty filter clause left behind.
- Wired the Zenodo DOI 10.5281/zenodo.20733036 into CITATION, the README badge, and the manual.

No change to the query-building engine or the test suite (still 21 tests).

## [1.2.0] - 2026-06-16

### Changed
- PubMed now supports optional **MeSH headings**. A "Suggest MeSH headings" button on the PubMed card looks up each free-text term in the public NLM MeSH service (id.nlm.nih.gov, public domain, CORS-open) and offers the matching descriptors as clickable chips grouped by concept. A chosen heading is OR-ed into its concept group as `"Heading"[MeSH]` beside the `[tiab]` terms. Selection is a manual click, so the assembled query stays deterministic; chosen headings persist in the shareable link and the exported search record, and the core builder still works offline. Two unit tests were added (suite now 21/21).
- The tool is now named **QueryBee**. The page title, on-page heading, social metadata, README, and citation metadata were updated, and the npm package is now `querybee`. A short prompt tip was added under step 2.
- QueryBee now builds for ten search engines, not four. Added IEEE Xplore, ACM Digital Library, ERIC, Ovid (Embase/PsycINFO/MEDLINE/CAB), EBSCOhost (CINAHL/Business Source/SocINDEX/CAB/MLA), and Engineering Village (Compendex/Inspec/GeoRef), each emitting a free-text title/abstract query with controlled vocabularies left to the user. The new engines are off by default.
- The distributed file is now **index.html** (renamed from query-builder-free.html) so it loads directly when hosted on GitHub Pages or any static host. Behaviour is unchanged; all internal references and the test harness were updated and the suite still passes (19/19).
- The "get terms" prompt was rewritten for higher-precision term lists aligned with the PRESS linter: it asks for British and American spellings, abbreviation-with-full-term pairs, distinct AND-combinable facets, and forbids generic padding and unsafe truncation (for example cell*). The reply format and parser are unchanged.
- The term miner now ranks candidates by **keyness** rather than raw frequency: each
  candidate's document frequency in the topic sample is compared against its background
  frequency across all English works in OpenAlex, using a base-2 relative-frequency log ratio
  (effect size) gated by a Dunning log-likelihood significance test, a minimum document
  frequency, and a background floor. This demotes generically frequent words that frequency
  ranking surfaced. Verified live: for an immune-checkpoint sample, "patients", "treatment",
  "cell", "clinical", and "cells" drop out of the top suggestions while "PD-L1", "PD-1",
  "immunotherapy", "blockade", and "resistance" rise to the top. Ranking falls back to
  frequency order if the background counts cannot be fetched.

### Added
- **Recall check (build-and-validate loop).** A new step lets the user paste papers they already
  know are relevant (by DOI, OpenAlex ID, or title). The tool fetches each from OpenAlex and
  tests the current Boolean concept structure against the paper's title and abstract entirely in
  the browser, then reports which papers the query would miss and which concept block excluded
  each one, so the user knows exactly which block to add a synonym to. Verified live: a checkpoint
  immunotherapy resistance paper is retrieved by an adequate query, and a deliberately narrow
  query correctly names the responsible block. When OpenAlex has no abstract for a paper, the
  lookup falls back to Europe PMC, then Crossref, then Semantic Scholar (all free, no key,
  CORS-safe), strips JATS/HTML markup, and labels which source supplied each abstract or notes
  when only the title was available. On a grapevine-leafroll sample OpenAlex carried abstracts
  for about 80 percent of papers; the fallback recovers a further share, most for
  MEDLINE-indexed titles via Europe PMC.
- **Reproducible export, save, and share.** A new step serializes the entire search (topic,
  filters, concept blocks, terms) to a shareable URL that uploads nothing, downloads it as JSON
  for reload and audit, and exports a PRISMA-S style search record (date, databases, full strings
  per engine, limits, and a record-count placeholder) as Markdown for a methods section. Opening a
  shared link restores the full search.
- **Search-strategy linter (PRESS / PRISMA-S).** A panel that reviews the strategy live as it is
  built and flags: fewer than two concept blocks, single-term concepts, missing truncation,
  missing US/UK spelling variants, abbreviation-versus-full-term gaps, a single database, an
  over-long Google Scholar query, and very narrow date limits, with a PRISMA-S reporting reminder.
- `oaKeyness(a, b, c, d)`, the recall-matching functions (`rcNormalize`, `rcTermMatches`,
  `rcAbstractFromIndex`, `rcCheck`), and `lintStrategy(concepts, opts)` exposed in the testable
  core, each with unit tests.

### Fixed
- The startup "restore shared search from the URL" step is now guarded with a `typeof location`
  check so the script loads cleanly outside a browser (for example under the Node test runner);
  the behaviour in a browser is unchanged.

### Robustness and accessibility
- Accessibility: ARIA live regions announce term-mining, recall, linter, and parse results to
  screen readers; inputs have labels; database and document-type toggles expose `aria-pressed`; the
  file input is keyboard-focusable; and a visible keyboard focus outline was added.
- The term-mining and recall buttons disable and show progress while a request is in flight, and
  stale or overlapping requests are ignored, so a fast double-click cannot produce mixed results.
- Clearer messages when OpenAlex is busy or offline, instead of failing silently.
- Added an in-page "How to use" panel and a USER-GUIDE.md written for non-specialist users.
- Added Playwright end-to-end tests (`npm run test:e2e`) that load the real file in a headless
  browser and fail on any console error or uncaught exception, plus checks for the accessibility
  attributes and the button-state behaviour.

## [1.1.0] - 2026-06-11

### Fixed
- Google Scholar queries no longer carry truncation asterisks. Scholar treats `*` as a
  whole-word placeholder, not character truncation, so trailing-stem terms such as
  `transcriptom*` were degrading that query. The Scholar panel now strips wildcards and
  removes duplicates that collapse together as a result.
- Term normalization now quotes any term containing a character the database grammars treat
  as syntax (for example `> < & | : / +` or an en dash). Previously a hand-entered or
  non-conforming term such as `x>0.5` could inject a bare operator and break the query.
- PubMed phrases no longer contain wildcards. PubMed cannot truncate inside a quoted phrase,
  so the asterisk is removed from multi-word phrase terms while single-word stems keep it.
- Corrected the in-tool documentation that previously claimed the truncation asterisk
  behaves identically across all engines.

### Changed
- The OpenAlex term miner now ranks candidates by document frequency weighted by term
  co-occurrence within the sampled records (a lightweight version of the keyword
  co-occurrence approach used by litsearchr), restricts the sample to English-language works
  to stop the tokenizer from shredding non-Latin text into fragments, guards against
  too-small samples by broadening the seed once and warning the user, expands the stopword
  list with domain-general academic filler, and no longer uses truncated word stems as
  literature-search seeds.
- The query builders were refactored into pure, DOM-independent functions exposed for
  automated testing via `window.__QB_CORE__`. In-page behaviour is unchanged.
- Reframed the in-tool claims: the deterministic query assembly is field-agnostic, while the
  literature term suggestions are most reliable in well-indexed, English-language fields.

### Added
- Automated test suite (`npm test`) that loads the single-file tool and verifies query
  assembly and term scoring.
- A query-validity benchmark (`npm run benchmark`) over 32 topics across 32 fields, with
  live execution against PubMed and Scopus.

## [1.0.0]
- Initial single-file tool: concept blocks, AI-bridge prompt, OpenAlex term mining, and
  query assembly for Scopus, Web of Science, Google Scholar, and PubMed.
