# QueryBee

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20774354.svg)](https://doi.org/10.5281/zenodo.20774354)

A single static HTML file that helps a researcher turn a topic into correctly fielded,
fully parenthesized Boolean search strings for **ten databases**: Scopus, Web of Science,
PubMed, and Google Scholar, plus the specialist engines IEEE Xplore, ACM Digital Library,
ERIC, Ovid (Embase, PsycINFO, MEDLINE, CAB Abstracts), EBSCOhost (CINAHL, Business Source,
SocINDEX, MLA, CAB), and Engineering Village (Compendex, Inspec, GeoRef). For PubMed it can
also add MeSH headings from the NLM service. It includes discovery link-outs to open-access,
thesis, and book sources, and runs entirely in the browser. No account, API key, or server is
required.

The tool separates two jobs that are usually mixed together:

1. **Expanding a concept into terms.** This draws on judgement and the literature, so it is
   delegated either to whatever AI assistant the user already has (through a copy-paste
   prompt, no API key) or to a built-in miner that pulls candidate terms from the OpenAlex
   scholarly database.
2. **Assembling correct database syntax.** This is deterministic and rule-based, so the tool
   does it locally and identically every time, with each concept in its own field code and
   blocks joined only with `AND` so operator precedence cannot regroup the logic.

A third step closes the build-and-validate loop. After building a query you can paste papers you
already know are relevant (by DOI, OpenAlex ID, or title); the tool fetches each from OpenAlex,
tests your concept blocks against its title and abstract in the browser, and reports which papers
the query would miss and which concept block to fix. When OpenAlex lacks an abstract, it falls
back to Europe PMC, then Crossref, then Semantic Scholar, and labels which source supplied each
abstract (or notes when only the title was available). Mined term suggestions are ranked by
**keyness** (how over-represented a term is in the topic versus all English works in OpenAlex,
via a log-likelihood-gated relative-frequency ratio), not raw frequency, so generically common
words are demoted in favour of terms that are distinctive to the topic.

## What this tool is, and is not

It is a low-barrier scaffold for building a first search, suitable for teaching, scoping, and
getting a non-specialist to a structurally correct multi-database query quickly. The
deterministic query assembly is field-agnostic and works the same in any discipline.

It is **not** a replacement for an information specialist's search strategy, and it is not a
complete systematic-review system. It builds only the front-end query. It does nothing about
deduplication, screening, full-text retrieval, or export of results, and it does not record
the search for reporting. The mined terms are unverified candidates that the user must screen.
The literature term suggestions are most reliable in well-indexed, English-language fields
(strongest in biomedicine and the physical sciences, weaker in the social sciences and
humanities); an effectiveness evaluation is in progress.

## Quick start

Open `index.html` in any modern browser, or host it on any static web server.
There is nothing to install and nothing to configure.

1. Describe your topic and set the year range, document types, and which databases to build for.
2. Either copy the generated prompt into a free chatbot and paste its reply back, or add
   concept blocks by hand and use **find terms in literature** on any block to mine candidate
   synonyms from OpenAlex.
3. Copy the query for each database, or follow the Google Scholar and PubMed links directly.
4. Optionally pick a narrower angle to run another pass.

## Documentation

- `User-Manual.pdf` (also `.md` and `.html`): the full manual, covering the workflow, every
  database, MeSH, privacy, troubleshooting, and how to cite.
- `Effective-Searching.pdf`: a short guide to building a good search, with a worked example.
- `Subject-Playbooks.pdf`: per-field recipes (which databases to combine, the controlled
  vocabulary to add, term tips, and common mistakes) for medicine, plant and agricultural
  science, ecology, engineering and computer science, education, psychology, business, and
  chemistry.

## What is genuinely new here, and what is not

This is an integration and packaging contribution, not a new method. Stated plainly so that
no reviewer has to point it out:

- Separating a search's logical concept structure from database syntax is established work,
  for example 2Dsearch and the study of form-based versus visual query builders
  (Russell-Rose and colleagues).
- Translating or generating queries across multiple databases exists, for example the
  Polyglot Search Translator (Clark et al., *J Med Libr Assoc*, 2020) and litsearchr
  (Grames et al., *Methods Ecol Evol*, 2019).
- Mining candidate terms by frequency from titles and abstracts exists, for example
  PubReMiner (PubMed only) and litsearchr (which ranks by keyword co-occurrence networks).
- Using a large language model to expand concepts or draft Boolean queries is an active
  research area (for example Wang, Scells, Koopman, and Zuccon, *SIGIR* 2023, and later
  reassessments).

What this tool combines that, to our knowledge, is not available in one place: a zero-install
single file, with no account or API key, that (a) bridges to whatever chatbot the user
already has through copy-paste rather than a paid API, (b) mines OpenAlex live in the browser
for any field, and (c) assembles correctly fielded queries for ten databases through their
platforms, with per-engine date and document-type translation and optional MeSH headings for
PubMed. The contribution is the low-barrier combination, not any single component.

## Development

The single file is the source of truth. The query-assembly and term-scoring functions are
exposed at the end of the inline script as `window.__QB_CORE__` purely so the tests can
exercise them; this does not change the in-page behaviour. Tests load the HTML, run its script
in a DOM stub, and call those functions, so there is no second copy of the logic to drift.

Requirements: Node.js 18 or newer (the tests use only the standard library; there are no
runtime dependencies).

```
npm test                 # run the automated test suite (test/*.test.js)
npm run benchmark        # query-validity benchmark over 32 topics across 32 fields
```

The benchmark live-executes PubMed (free E-utilities) and, if a key is present, Scopus:

```
SCOPUS_API_KEY=your_key npm run benchmark
```

Web of Science and Google Scholar are validated structurally only, because neither offers an
API suitable for automated query validation (Scholar's terms of service forbid it).

### Repository layout

```
index.html                          the tool (the single distributed file)
User-Manual.(md|html|pdf)           the full user manual
Effective-Searching.(md|html|pdf)   short guide to building a good search
Subject-Playbooks.(md|html|pdf)     per-field database recipes
test/query-builder.test.js          automated tests
test/load-core.js                   test harness: extracts and runs the tool's core
benchmark/topics.json               32 benchmark topics across 32 fields
benchmark/run-benchmark.js          validity benchmark runner
benchmark/RESULTS.md                latest benchmark output
```

The effectiveness evaluation (protocol, scoring code, gold-standard data) and the paper draft
are developed in a separate manuscript workspace and are not part of this release.

## Validity benchmark (current)

Across 32 topics in 32 fields (128 generated queries), every query passed structural
validation for all four engines, and every query that could be executed live ran without a
syntax error (PubMed 32/32, Scopus 32/32). The six specialist-database builders (IEEE Xplore,
ACM, ERIC, Ovid, EBSCOhost, and Engineering Village) were added after this benchmark and are
covered by the unit test suite. This supports only the claim that the tool produces valid,
executable, correctly fielded queries. It does not measure retrieval
effectiveness; that is the subject of a separate effectiveness evaluation, in progress. See
`benchmark/RESULTS.md` for the full report.

## Limitations

- Builds only the front-end query. No deduplication, screening, full-text retrieval, result
  export, or search documentation for reporting.
- Mined terms are unverified candidates ranked by weighted frequency, not confirmed synonyms.
  Screen each one.
- The term miner is field-sensitive: useful in biomedicine and the physical sciences, weaker
  in the social sciences and humanities, where a concept's synonyms are often method names or
  multi-word phrases that do not recur verbatim in titles and abstracts.
- The chatbot step is non-deterministic. Different models and versions return different terms,
  so a search built this way is not reproducible unless the exact model, date, and output are
  recorded.
- The Google Scholar query is for scoping, not a search of record. Results cannot be exported,
  Boolean handling is limited, and stem truncation is not supported (the tool removes the
  asterisk for that panel).
- The specialist-database queries are free-text title and abstract only and do not include each
  platform's controlled vocabulary (Emtree, the APA Thesaurus, the CAB or CINAHL headings). The
  exception is PubMed, where MeSH headings can be added from the NLM service. PubMed itself
  covers only biomedicine and the life sciences.
- The tool depends on external services (OpenAlex, with a Datamuse fallback) and on database
  syntaxes that change over time, which is a maintenance burden.

## License and citation

MIT (see `LICENSE`). If you use the tool, please cite it using `CITATION.cff`.
