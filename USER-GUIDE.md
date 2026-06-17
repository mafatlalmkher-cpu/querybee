# User guide

A plain-language guide to QueryBee. No prior training needed.

## What it does

It helps you turn a research topic into a correct, ready-to-run search for the major literature
databases (Scopus, Web of Science, PubMed, and Google Scholar). It keeps two jobs separate:
choosing the right words for each idea in your topic, and writing those words in the exact format
each database expects. You stay in control of the words; the tool handles the formatting.

It is free, needs no account or login, and runs entirely in your web browser. Your search is never
uploaded anywhere.

## Before you start

There is nothing to install. Open `index.html` by double-clicking it, or host it on
any web page. It works offline for everything except the two optional features that look things up
in the literature (finding terms, and the recall check), which need an internet connection.

## Step by step

1. **Describe your search.** Type your topic in plain words. Set the publication years, the
   document types, and which databases you want queries for. (PubMed is off by default because it
   only covers biomedicine and the life sciences; turn it on if your topic fits.)

2. **Get terms (optional).** Copy the prompt the tool shows and paste it into any free AI assistant
   (Claude, ChatGPT, Gemini, and so on). The assistant replies with concept blocks and terms.

3. **Concepts and terms.** Paste the assistant's reply and press **Build from reply**, or click a
   starter block and edit it, or add blocks by hand. Each block is one idea; the words inside a
   block are alternatives for that idea. On any block, **find terms in literature** suggests more
   candidate terms drawn from real papers.

4. **Your queries.** The tool shows a finished query for each database. Press **Copy**, then paste
   it into that database's Advanced Search. The **Strategy review** panel checks your strategy as
   you build and flags weak spots.

5. **Narrow the topic (optional).** Pick a sharper angle to run another pass with your assistant.

6. **Check what your search misses.** Paste a few papers you already know should be found (a DOI, an
   OpenAlex ID, or a title, one per line) and press **Check recall**. The tool reports which papers
   your current search would catch and, for any it would miss, which concept block is responsible so
   you know exactly where to add a synonym.

7. **Save, share, and document.** Save the whole search as a link or a file to reopen later, or
   export a search record for the methods section of your paper.

## How to read the term suggestions

Suggested terms are ranked by **keyness**: how much more often a word appears in papers about your
topic than in the literature as a whole. This pushes distinctive terms (for example "checkpoint
blockade") to the top and pushes generic words (for example "patients", "treatment") down. The
number in each chip's tooltip is the keyness score and how many sampled papers used the term. These
are candidates, not confirmed synonyms: read each one before adding it.

## How to read the recall check

For each paper you paste, the tool fetches its title and abstract and tests your concept blocks
against them. "Retrieved" means every block has at least one matching term. "Missed" names the
block where no term matched; add a synonym there and check again. It matches on title and abstract
only, so a subscription database, which also searches keyword fields, may catch a few more. If a
paper has no freely available abstract, the tool tests on the title alone and tells you so.

## How to read the strategy review

The review panel checks your search against common peer-review-of-search criteria: enough concept
blocks, more than one term per block, truncation for word stems, spelling variants, abbreviations
together with full terms, more than one database, and so on. Warnings are worth acting on; "info"
notes are gentle suggestions. The panel also reminds you what to record when you report the search.

## Privacy

Everything runs in your browser. The only outside requests are the optional literature lookups
(finding terms and the recall check), which query the free OpenAlex database (and, for abstracts,
Europe PMC, Crossref, or Semantic Scholar). The shareable link puts the whole search inside the
link itself, so nothing is uploaded to any server.

## Honest limits

- It builds the search; it does not remove duplicates, screen results, or fetch full text.
- The term suggestions are most reliable in well-indexed, English-language fields, strongest in
  biomedicine and the physical sciences, weaker in the social sciences and humanities.
- If you use an AI assistant for terms, that step is not reproducible: different assistants give
  different words. The final search you build is reproducible; record it.
- Google Scholar is for quick scoping, not a search of record; it cannot truncate word stems, so
  the tool removes the asterisk for that panel.

## Troubleshooting

- **A lookup is slow or shows "busy or offline".** The free services are occasionally rate-limited.
  Wait a moment and try again; the rest of the tool keeps working.
- **No terms come back.** Add another concept block so the suggestions can lock onto your domain, or
  broaden the concept name, or add terms by hand.
- **A known paper shows "missed".** Read which block it names, then add a synonym to that block from
  the paper's own wording and check again.

## Databases and platforms

QueryBee builds a correctly fielded query for ten search engines, grouped by the platform syntax they use. Scopus, Web of Science and Google Scholar are on by default; turn on the others in step 1 as you need them.

- Scopus, Web of Science, PubMed, Google Scholar: the multidisciplinary engines and the biomedical standard.
- IEEE Xplore and ACM Digital Library: computer science and engineering. For ACM, paste the query into Advanced Search and set the field to Abstract in the Search Within menu.
- ERIC: education (eric.ed.gov).
- Ovid: one query that runs on Embase, PsycINFO, MEDLINE and CAB Abstracts when you reach them through Ovid.
- EBSCOhost: one query for CINAHL, Business Source, EconLit, SocINDEX, SPORTDiscus, GreenFILE, MLA and CAB on EBSCO.
- Engineering Village: Compendex, Inspec, GeoRef and GeoBase (Expert Search).

PubMed is the one engine where QueryBee can add controlled vocabulary for you: with PubMed on, the "Suggest MeSH headings" button looks up each term in the public NLM MeSH service and lets you add the matching headings as `"Heading"[MeSH]` beside your free-text terms, one click each. MeSH is biomedical, so non-biomedical terms often have no heading, and the free-text terms still cover those.

Two things to know about the specialist engines. They build a free-text title-and-abstract query only and do not add controlled-vocabulary terms (MeSH, Emtree, the CAB or CINAHL thesauri), which are proprietary, so add those yourself in the database for the most complete search. And the publication-year range is set in each database's own filter, not in the query string, because these engines do not take the year reliably inline.

## Tips

- Build at least two databases. PRESS and PRISMA-S both recommend more than one, and the strategy review panel flags it.
- Keep the prompt format if you edit it. The AI step needs the CONCEPT and TERMS lines to parse the reply back.
- Ask for distinctive terms, not generic ones. Synonyms, British and American spellings, and abbreviations with their full form help; words like "study" or "patients" hurt precision.
- Truncate carefully. A stem like therap* is useful; cell* is not, because it also matches cellular and cellphone. Google Scholar does not truncate, so the asterisk is removed there.
- Read the full paper before you cite it. The recall check and the databases work on titles and abstracts, which are for finding, not for citing.
- Record the AI model and date if you used one for terms, so the search is reportable under PRISMA-S.
- Add MeSH headings on PubMed. With PubMed selected, the "Suggest MeSH headings" button pairs your free-text terms with PubMed's controlled vocabulary, which is how a thorough PubMed search is built.
