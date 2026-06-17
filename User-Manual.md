---
title: "QueryBee User Manual"
subtitle: "A browser-based builder for fielded Boolean literature searches"
date: "Version 1.2.0, June 2026"
---

# 1. What QueryBee does

QueryBee turns a research topic into a correct, ready-to-run search for the major literature databases and several specialist ones. It keeps two jobs separate. You choose the right words for each idea in your topic. QueryBee writes those words in the exact format each database expects. You stay in control of the vocabulary; the tool guarantees the syntax.

It is free, needs no account or login, and runs entirely in your web browser. Your search is never uploaded to a server.

QueryBee builds for ten engines: Scopus, Web of Science, PubMed, and Google Scholar, plus IEEE Xplore, ACM Digital Library, ERIC, Ovid, EBSCOhost, and Engineering Village. The four general engines are the default; turn on the specialist ones when your field needs them.

What it does not do: it builds the front-end query only. It does not remove duplicates, screen results, retrieve full text, or write the search section of your paper for you. It is a scaffold for building a correct first search, suitable for teaching, scoping, and reaching a structurally correct multi-database query quickly.

# 2. Before you start

There is nothing to install. Open index.html by double-clicking it, or use the hosted web link if one has been provided. Everything works offline except three optional features that look things up online: finding terms, the recall check, and the MeSH heading suggestions for PubMed. Each needs an internet connection; the rest of the tool does not.

# 3. Quick start

1. Type your topic in plain words, then set the years, document types, and databases.
2. Copy the generated prompt into any free AI assistant and paste its reply back, or add concept blocks by hand.
3. Copy the finished query for each database into that database's Advanced Search.
4. Optionally paste a few papers you know are relevant and run the recall check to find gaps.
5. Save the search as a link or file, or export a record for your methods section.

# 4. The workflow in detail

## 4.1 Describe your search

Type your topic in plain language. Set the publication year range, the document types, and which databases you want queries for. The four general engines (Scopus, Web of Science, Google Scholar, PubMed) come first; the six specialist engines are off until you turn them on. A database stays hidden in step 4 until you select it, so you see only the engines you asked for. PubMed is off by default because it covers biomedicine and the life sciences; turn it on when your topic fits that scope.

## 4.2 Get terms with an AI assistant (optional)

QueryBee shows a ready-made prompt. Copy it into any free assistant (for example Claude, ChatGPT, or Gemini). The assistant replies with concept blocks and candidate terms for your topic. This step uses no API key and no paid service; it borrows whatever assistant you already have for the one task that needs judgement, the choice of vocabulary. Keep the CONCEPT and TERMS lines if you edit the prompt, because the tool reads those lines to rebuild your blocks.

## 4.3 Build concept blocks

Paste the assistant's reply and press "Build from reply", or click a starter block and edit it, or add blocks by hand. Each block is one idea. The words inside a block are alternatives for that idea, joined with OR. The blocks are joined with AND, so each idea must appear for a record to match. On any block, "find terms in literature" suggests further candidate terms drawn from real papers.

## 4.4 Copy your queries

QueryBee shows a finished query for each selected database. Press "Copy", then paste it into that database's Advanced Search. Scopus and Web of Science take the query in their Advanced Search forms. The Google Scholar and PubMed links run the search directly. Each specialist card names the search mode to use and where to set the field, because the platforms differ; section 6 lists them.

## 4.5 Narrow the topic (optional)

If your search is too broad, pick a sharper angle and run another pass with your assistant.

## 4.6 Add MeSH headings for PubMed (optional)

When PubMed is on, its card has a "Suggest MeSH headings" button. QueryBee sends each of your free-text terms to the public NLM MeSH service and offers the matching headings as chips, grouped by concept. Click a heading to add it to that concept as "Heading"[MeSH] beside your free-text terms; click again to remove it. This pairs each idea's everyday words with PubMed's controlled vocabulary, which is how a thorough PubMed search is built. MeSH is biomedical, so many agriculture, engineering, and education terms have no heading; the free-text terms still cover those. The lookup needs an internet connection, but the query itself still builds offline.

## 4.7 Check recall against known papers

Paste a few papers you already know should be found, one per line, as a DOI, an OpenAlex ID, or a title. Press "Check recall". The tool fetches each paper's title and abstract and tests your concept blocks against them. For any paper your search would miss, it names the concept block responsible, so you know exactly where to add a synonym.

## 4.8 Save, share, and document

Save the whole search as a link or a file to reopen later, or export a search record for the methods section of your paper. The record lists each concept's terms and any MeSH headings you added. The shareable link carries the entire search inside the link itself, so nothing is stored on any server.

# 5. Reading the outputs

## 5.1 Term suggestions (keyness)

Suggested terms are ranked by keyness: how much more often a word appears in papers about your topic than in the literature as a whole. This pushes distinctive terms to the top and demotes generic words such as "patients" or "treatment". Each suggestion's tooltip shows its keyness score and how many sampled papers used it. These are candidates, not confirmed synonyms; read each one before adding it.

## 5.2 The recall check

For each paper you paste, "Retrieved" means every concept block has at least one matching term in the title or abstract. "Missed" names the block where no term matched; add a synonym there and check again. The test uses title and abstract only, so a subscription database that also searches keyword fields may catch a few more records. When a paper has no freely available abstract, the tool tests on the title alone and tells you so.

## 5.3 The strategy review

The review panel checks your search against common peer-review-of-search criteria: enough concept blocks, more than one term per block, truncation for word stems, spelling and abbreviation variants, more than one database, and so on. Warnings are worth acting on; information notes are gentle suggestions. The panel also lists what to record when you report the search.

# 6. Database notes

Scopus and Web of Science receive a fully fielded Boolean query for their Advanced Search. PubMed receives field-tagged terms, plus any MeSH headings you add, and covers biomedicine and the life sciences, so on a general topic the multidisciplinary engines are the better choice. Google Scholar receives a plain full-text query for scoping only; it cannot truncate word stems, so the tool removes the asterisk for that panel, and Scholar should not be used as the search of record.

The six specialist engines are reached through their platforms, so the syntax follows the platform, not the database:

- IEEE Xplore: Command Search. Set the year in IEEE's own filter.
- ACM Digital Library: paste into Advanced Search and set the field to Abstract in the "Search Within" menu.
- ERIC (eric.ed.gov): the fielded query runs in the search box.
- Ovid: one query that runs on Embase, PsycINFO, MEDLINE, and CAB Abstracts when you reach them through Ovid.
- EBSCOhost: one query for CINAHL, Business Source, EconLit, SocINDEX, SPORTDiscus, GreenFILE, MLA, and CAB on EBSCO.
- Engineering Village: Expert Search across Compendex, Inspec, GeoRef, and GeoBase.

Two things hold for all six. They build a free-text title-and-abstract query only and do not add controlled-vocabulary terms (Emtree, the APA Thesaurus, the CAB or CINAHL headings), which are proprietary, so add those in the database for the most complete search. And the publication-year range is set in each database's own filter, not in the query string, because these engines do not take the year reliably inline.

# 7. Privacy

Everything runs in your browser. The only outside requests are the optional lookups: the term finder and recall check query the free OpenAlex database (and, for abstracts, Europe PMC, Crossref, or Semantic Scholar), and the MeSH suggestions query the public NLM service. The shareable link encodes the search in the link itself, so nothing is uploaded to any server.

# 8. Honest limits

The tool builds the search and nothing downstream of it. Term suggestions are most reliable in well-indexed, English-language fields, strongest in biomedicine and the physical sciences and weaker in the social sciences and humanities. The specialist queries are free text only and do not include each database's controlled vocabulary; the exception is PubMed, where you can add MeSH headings. If you use an AI assistant for terms, that step is not reproducible, because different assistants return different words; the final search you build is reproducible, so record it. Google Scholar is for quick scoping, not a search of record.

# 9. Troubleshooting

A lookup is slow or shows "busy or offline": the free services are occasionally rate-limited. Wait a moment and try again; the rest of the tool keeps working.

No terms come back: add another concept block so the suggestions can lock onto your domain, broaden the concept name, or add terms by hand.

No MeSH headings appear: MeSH is biomedical, so a non-biomedical term may have no heading, which is expected, and the free-text terms still cover it. If nothing loads at all, check your internet connection.

A known paper shows "missed": read which block it names, then add a synonym to that block taken from the paper's own wording, and check again.

# 10. How to cite

Cite QueryBee using the CITATION.cff file in the repository, or the published paper and its DOI once available.
