---
title: "QueryBee User Manual"
subtitle: "A browser-based builder for fielded Boolean literature searches"
author: "Mafatlal M. Kher · Department of Chemical Engineering, Ariel University, Israel · ORCID 0000-0001-5600-0040"
date: "Version 1.2.3, June 2026"
---

# 1. What QueryBee does

QueryBee turns a research topic into a correct, ready-to-run search for the major literature databases and several specialist ones. It keeps two jobs separate. You choose the right words for each idea in your topic. QueryBee writes those words in the exact format each database expects. You stay in control of the vocabulary; the tool guarantees the syntax.

It is free, needs no account or login, and runs entirely in your web browser. Your search is never uploaded to a server.

QueryBee builds for ten engines: Scopus, Web of Science, PubMed, and Google Scholar, plus IEEE Xplore, ACM Digital Library, ERIC, Ovid, EBSCOhost, and Engineering Village. The four general engines are the default; turn on the specialist ones when your field needs them.

What it does not do: it builds the front-end query only. It does not remove duplicates, screen results, retrieve full text, or write the search section of your paper for you. It is a scaffold for building a correct first search, suitable for teaching, scoping, and reaching a structurally correct multi-database query quickly.

# 2. How QueryBee saves you time

Writing correct fielded Boolean for several databases by hand is slow and error-prone, and a single wrong bracket or field tag silently changes what you retrieve. QueryBee removes that work. You enter the concept terms once, and it returns every selected database's query in seconds, correctly fielded and fully parenthesized, so you never have to learn or remember that Scopus uses TITLE-ABS-KEY, Web of Science uses TS=, and PubMed uses [tiab].

Three further savings matter for real projects. The recall check tests your query against papers you already know are relevant and tells you which concept block would miss them, so you fix a gap before running the search rather than after screening hundreds of records. The exportable search record gives you the PRISMA-S documentation (databases, date, full strings, limits, counts) that a methods section needs, without separate note-keeping. And because the tool is a single file with no install, account, or cost, a student or a researcher without library support can still build a defensible multi-database search.

# 3. Before you start

There is nothing to install. Open `index.html` by double-clicking it, or use the hosted web link if one has been provided.

Use a current browser. QueryBee works in any modern browser, but Google Chrome gives the most reliable experience, especially for the optional online features (finding terms, the recall check, and the MeSH lookup) and for opening the database links. Keep the browser updated.

Log in to your subscription databases first. For Scopus, Web of Science, Embase, and similar paid databases, sign in through your institution or connect to the campus network before you open them, so the Advanced Search page loads for you instead of a paywall.

Three features need an internet connection: finding terms, the recall check, and the MeSH heading suggestions. Everything else works offline.

# 4. Quick start

1. Type your topic in plain words, then set the years, document types, and databases.
2. Copy the generated prompt into any free AI assistant and paste its reply back, or add concept blocks by hand.
3. Copy the finished query for each database into that database's Advanced Search.
4. Optionally paste a few papers you know are relevant and run the recall check to find gaps.
5. Save the search as a link or file, or export a record for your methods section.

# 5. The workflow, control by control

Each control below is described the same way: what it does, why it matters, how to use it, and short examples of what to use and what to avoid, drawn from several fields. Work down the page in order; that order is the build flow.

## 5.1 Describe your search

**What it does.** The topic box and the three filters below it (publication years, document types, databases) set the scope of every query QueryBee builds. The topic text seeds the AI prompt and the term miner. The filters are written into each database's query or its own limit fields.

**Why it matters.** Scope decisions made here reach all ten engines at once. Setting them correctly once saves correcting ten queries later, and a filter set too tight here hides relevant papers in every database at the same time.

**How to use it.** Write the topic in plain words, the way you would say it to a colleague, not as Boolean. Name the main ideas and, if you have them, the population or the setting. Then set the filters.

Examples of what to put in the topic box:

- Plant science: "elimination of grapevine leafroll-associated virus 3 from *Vitis vinifera* by meristem tip culture and thermotherapy" (it names the virus, the host, and the two methods).
- Medicine: "metformin for weight management in adults with type 2 diabetes".
- Engineering: "lithium-ion battery thermal runaway early detection".
- Education: "worked-example instruction and cognitive load in secondary mathematics".

Avoid a one-word topic ("grapevine", "batteries"), which gives the term miner nothing to lock onto, and avoid a full sentence with Boolean operators already in it ("Vitis AND virus NOT rootstock"), because the operators belong in the concept blocks, not the description.

**Publication years.** Set a start year only when older literature is genuinely out of scope (a method that did not exist before a date, a policy era, a cultivar release). For a review aiming at completeness, leave it open; missing the founding papers of a field is a worse error than a few extra hits. For CRISPR work in crops, 2013 onward is defensible; for the history of a disease, leave it open.

**Document types.** Choose the publication forms that answer your question. Eleven types are available (article, review, conference paper, book chapter, book, editorial, letter, note, short survey, data paper, erratum). QueryBee maps each to the correct code in each database (Scopus DOCTYPE, Web of Science DT, PubMed publication type) and quietly drops a type a given database does not have, so the query never breaks. Use review for an overview of a mature topic, conference paper in computer science and engineering where the main results appear at conferences, and data paper when you want reusable datasets. Avoid restricting to review at the start of a systematic search, because primary studies are what you need, and avoid excluding conference papers in computer science, where they carry the field.

**Databases.** Select the engines you will actually search. The four general engines come first; the six specialist ones stay hidden until you turn them on, so step 4 shows only what you asked for. PubMed is off by default because it is biomedical. Match engines to your field using section 7.

## 5.2 Get terms with an AI assistant (optional, recommended first step)

**What it does.** QueryBee writes a ready-made prompt describing your topic. You copy it into any chatbot you already use (Claude, ChatGPT, Gemini, and similar), and the assistant returns concept blocks with candidate synonyms. "Build from reply" reads that answer back into blocks.

**Why it matters.** Choosing the alternative words for each idea is the one step that needs human or model judgement, and it is where most recall is won or lost. A language model is fast at proposing synonyms, spelling variants, and related terms you might forget.

**Why it is optional, not compulsory.** Three reasons. The tool runs fully offline and with no account; a required chatbot step would break that for anyone offline or without one. Domain experts often already know their terms and should not be forced through an extra step. And the chatbot step is not reproducible, because different models return different words, so keeping the deterministic core independent of it protects the part that guarantees a repeatable query. It is set as the recommended first step because for most users it is the quickest route to a strong term list; you screen the output, and the final assembled query is what you record.

**How to use it.** Press copy on the prompt, paste it into the assistant, copy the whole reply, paste it back, and press "Build from reply". If you edit the prompt, keep the CONCEPT and TERMS lines, because the tool reads those to rebuild your blocks. Screen the returned terms before you keep them.

Use it when you are entering a topic outside your specialty, or want spelling and regional variants quickly (tumour and tumor, oviposition and egg-laying, maize and corn). Be careful with ambiguous words: a model may return "culture" for both tissue culture and bacterial culture, so delete the wrong sense.

## 5.3 Build concept blocks

**What it does.** A concept block holds one idea and all the words that mean that idea. Inside a block the terms are joined with OR, so any one of them counts. The blocks are joined with AND, so every idea must appear. This AND-of-ORs structure is the logical core of a Boolean search, and QueryBee builds it for every database from the blocks you fill.

**Why the block structure matters.** Separating ideas into blocks is what makes a search both sensitive and precise. OR inside a block widens each idea to all its synonyms, so you do not miss a paper that used a different word. AND between blocks requires every idea to be present, so you do not drown in papers that mention only one. Putting two different ideas in one block, or splitting one idea across two blocks, breaks this logic and is the most common beginner mistake.

**How to use it.** Aim for two to four blocks. Give each block a short name (the idea) and fill it with that idea's synonyms, spelling variants, abbreviations with their full forms, and sensible truncations. Type a term and press enter to add it; remove a term with its "×".

**The "Add concept block" button.** Use it to introduce a genuinely new idea to the search. This is also how you narrow a search (section 5.8): each block you add is one more requirement every record must meet. Add a block for a population, a method, a setting, or an outcome when you want to focus the search. Do not add a block for a near-synonym of an idea you already have, because that word belongs inside the existing block, joined with OR.

**Starter blocks.** The starter blocks are one-click, pre-filled blocks for ideas that recur across searches, so you do not retype them. Click one to drop it in, then edit its terms to fit your topic. Treat them as a good first draft and an example of block design, not as a fixed vocabulary.

Examples of well-formed blocks:

- Plant virology, three blocks joined with AND: (1) grapevine, *Vitis*, "Vitis vinifera"; (2) "leafroll-associated virus", GLRaV, closterovirus; (3) elimination, eradication, "meristem culture", thermotherapy, cryotherapy.
- Medicine, two blocks: (1) metformin, biguanide; (2) "type 2 diabetes", T2DM, "non-insulin-dependent diabetes".
- Education, two blocks: (1) "worked example*", "worked-example"; (2) "cognitive load".

Avoid these patterns:

- Mixing ideas in one block: a block containing both grapevine and virus forces an OR between a host and a pathogen and matches papers about either; split them.
- Single-term blocks where synonyms exist: a "cancer" block holding only "cancer" misses carcinoma, neoplasm, and tumour.
- Over-truncation: cell* matches cellular and cellphone; prefer the specific stem or list the explicit variants.

## 5.4 Copy your queries

**What it does.** QueryBee shows one finished, correctly fielded query per selected database. Copy puts that database's query on your clipboard. The Google Scholar and PubMed cards also offer a direct link that runs the search.

**Why it matters.** Each database speaks a different dialect (Scopus TITLE-ABS-KEY, Web of Science TS=, PubMed [tiab], and the specialist platforms their own modes). Copying the right dialect into the right form is what makes the search run without a syntax error. The note on each card tells you the exact search mode and field to set, because a query pasted into the wrong mode can fail silently or over-retrieve.

**How to use it.** Press copy on a card, open that database's Advanced or Expert search (section 7 names the mode), paste, and run. For Scopus and Web of Science, paste into the Advanced Search box. For Google Scholar and PubMed, use the link. Read the small note on each specialist card; it names the mode and where to set the field and the year. For IEEE Xplore, for example, copy, open Command Search, paste, then set the year in IEEE's own filter, as the card states.

## 5.5 Add MeSH headings for PubMed (optional)

**What it does.** With PubMed on, its card shows "Suggest MeSH headings". QueryBee sends each free-text term to the public NLM MeSH service and offers the matching headings as chips, grouped by concept. Clicking a heading adds it to that concept as `"Heading"[MeSH]` beside your free-text words; clicking again removes it.

**Why it matters.** MeSH is PubMed's controlled vocabulary. Indexers tag each article with headings regardless of the words the authors used, so a MeSH term catches papers your free-text words would miss; a paper that wrote "liver cancer" is still tagged Hepatocellular Carcinoma. Pairing each idea's everyday words with its MeSH heading is how a thorough PubMed search is built. Selecting a heading is a manual click, so the assembled query stays deterministic.

**How to use it.** Press the button, read the headings offered for each concept, and click the ones that match your meaning. For a "high blood pressure" term the heading Hypertension is offered, and the same heading covers "hypertension", so one heading serves both. MeSH is biomedical, so plant, engineering, and education terms often have no heading; that is expected, and the free-text terms still cover them. The lookup needs the internet, but the query itself still builds offline.

## 5.6 Check recall against known papers

**What it does.** Paste a few papers you already know should be found, one per line, as a DOI, an OpenAlex ID, or a title, and press "Check recall". QueryBee fetches each paper's title and abstract, tests your concept blocks against them, and reports, for any paper the search would miss, which concept block is responsible.

**Why it matters.** This is the fastest way to find a hole in your search before you run it, rather than discovering after screening hundreds of records that a key paper never appeared. The named block tells you exactly where to add a synonym, so you fix the cause instead of guessing.

**How to use it.** Pick three to ten papers you are certain are relevant, often the ones that prompted the project. Paste, check, and for any paper marked "missed", open it, find the word it used for the missing concept, and add that word to the named block. A grapevine paper might be missed on the "elimination" block because it wrote "sanitation"; add sanitation to that block and check again.

## 5.7 Send the same search to more free sources (optional)

**What it does.** This panel takes the concepts you already built and sends them to free, open sources beyond the subscription databases: open-access full-text search, theses and dissertations, and book search. It reuses your terms, so you do not rebuild the search for each source.

**Why it matters.** Subscription databases miss two things that can change a review. The first is grey literature: theses, reports, and conference material that journals do not index. The second is work behind paywalls you cannot reach. Searching open sources widens coverage at no cost and is part of a defensible search, especially for a non-specialist or anyone without full library access. It also surfaces recent or regional work that the large indexes are slow to add.

**When to use it.** Use it when you lack subscription access to Scopus or Web of Science, so you can still reach a broad multi-source search for free. Use it when grey literature matters: a systematic review, where theses and reports reduce publication bias; an emerging topic; or a regional question. Use it to find books and book chapters on a topic that journals cover thinly, such as history, methods texts, or foundational theory. It is less necessary when you already have full subscription access and your question is narrowly clinical or molecular, where the indexed journal literature dominates.

## 5.8 Narrow the topic (optional)

**What it does.** This control helps you tighten a search that returns too much, in a deliberate way rather than by deleting terms at random.

**Why it matters.** When a first search returns thousands of records, the temptation is to remove synonyms until the number drops. That raises precision by dropping real studies, which is exactly the wrong trade for a review. Narrowing by structure keeps recall while cutting noise.

**When to narrow.** Narrow when the result set is too large to screen and the irrelevant records share an obvious feature, for example the wrong population, the wrong setting, or the wrong study type. Do not narrow a search that is already small; widen the blocks instead.

**How to narrow, in order of preference.** Add a fourth concept that every relevant paper must share, such as a population, a setting, a method, or an outcome (for example children, *in vitro*, or randomized), using "Add concept block". Tighten the year range to the period that matters. Restrict the document type, for example to reviews, using the document-type control rather than by adding words. Replace a broad concept word with a more specific one (carcinoma instead of cancer) only when you accept the narrower scope. Re-run the recall check after each change, so you raise precision without dropping studies you need.

Worked examples:

- Plant science: a search on grapevine viruses returns too much because it includes field epidemiology you do not want. Add a method block (elimination, eradication, "meristem culture", thermotherapy) so only the sanitation literature remains.
- Medicine: a metformin and diabetes search is enormous. Add an outcome block ("weight", "body mass index", "BMI") and restrict to randomized controlled trials.
- Education: a cognitive-load search spans every age group. Add a population block ("secondary school", "high school", adolescen*).

The companion documents, *Searching effectively with QueryBee* and the *Subject Playbooks*, work this through for each field.

## 5.9 Save, share, and document (reproducibility)

**What it does.** Save writes the whole search, every concept, term, and MeSH heading, plus the filters, to a file or a shareable link you can reopen. Export produces a search record for your methods section. The link carries the entire search inside itself, so nothing is stored on a server.

**Why reproducibility matters.** A literature search is a method, and a method has to be reportable and repeatable, the same way a wet-lab protocol is. The reporting standard for searches in systematic reviews, PRISMA-S, requires the full search: each database, the date it was run, the exact query strings, the limits, and the counts. If you cannot reproduce your own search, you cannot update the review later, a co-author cannot check it, and a reviewer cannot trust it. The exported record gives you that documentation without separate note-keeping.

**Why it matters more if you used the AI step.** The chatbot term step is not reproducible: re-running the prompt, or using a different model, returns different words. The query you assemble is reproducible. Saving the finished search, and recording the model and date if you used one, is what converts a one-off, model-dependent draft into a fixed, citable method.

**How to use it.** Save a link or file to pause and resume, or to send the exact search to a co-author. Export the record when you write the methods section, and paste the strings and counts straight in. Re-open a saved link months later to re-run the search for an update.

# 6. Reading the outputs

## 6.1 Term suggestions (keyness)

Suggested terms are ranked by keyness: how much more often a word appears in papers about your topic than in the literature as a whole. This pushes distinctive terms to the top and demotes generic words such as "patients" or "treatment". Each suggestion's tooltip shows its keyness score and how many sampled papers used it. These are candidates, not confirmed synonyms; read each one before adding it.

## 6.2 The recall check result

For each paper you paste, "Retrieved" means every concept block has at least one matching term in the title or abstract. "Missed" names the block where no term matched; add a synonym there and check again. The test uses title and abstract only, so a subscription database that also searches keyword fields may catch a few more records. When a paper has no freely available abstract, the tool tests on the title alone and tells you so.

## 6.3 The strategy review (PRESS / PRISMA-S)

**What it does.** As you build, the review panel checks your search against the criteria that peer reviewers of search strategies use, and flags gaps as you go. It is modelled on two standards: PRESS (Peer Review of Electronic Search Strategies), the checklist a librarian uses when reviewing a search, and PRISMA-S, the reporting standard for literature searches in systematic reviews.

**What it checks.** Whether you have enough concept blocks; whether each block has more than one term, since a one-term block is usually an incomplete idea; whether you used truncation for word stems; whether you included spelling and abbreviation variants; whether you are searching more than one database; and what you need to record to report the search. Warnings are worth acting on; information notes are gentle suggestions.

**Why it matters.** These are the exact points a methods reviewer or a journal editor will check. Catching them while you build, rather than at peer review, saves a revision cycle. The panel turns tacit librarian expertise into a checklist a non-specialist can follow.

**How to use it.** Read the panel as you add blocks, and clear the warnings before you run the search. If it flags "only one term" in a block, add the missing synonyms; if it flags "no truncation", add `therap*` where you meant therapy and therapeutic.

# 7. Choosing databases by field

Scopus and Web of Science receive a fully fielded Boolean query for their Advanced Search and suit any discipline; use both, because they overlap but each indexes unique sources. PubMed receives field-tagged terms plus any MeSH headings you add, and covers biomedicine and the life sciences. Google Scholar receives a plain full-text query for scoping only; it cannot truncate word stems, so the tool removes the asterisk there, and Scholar should not be the search of record.

Match the specialist databases to your subject:

- Biomedicine, clinical, and life sciences: PubMed (with MeSH), and Embase through Ovid.
- Psychology and behavioural science: PsycINFO through Ovid or EBSCO.
- Nursing and allied health: CINAHL through EBSCO.
- Education: ERIC.
- Computer science and engineering: IEEE Xplore, ACM Digital Library, and Engineering Village (Compendex and Inspec).
- Agriculture, plant science, and food: CAB Abstracts through Ovid or EBSCO, with Scopus and PubMed for the molecular and biological side.
- Earth sciences: GeoRef through Engineering Village.
- Business and economics: Business Source and EconLit through EBSCO.

Turn PubMed on when your topic is biomedical or life-science. On a general or non-biomedical topic the multidisciplinary engines are the better choice, and PubMed may return very little.

The six specialist engines are reached through their platforms, so the syntax follows the platform, not the database:

- IEEE Xplore: Command Search. Set the year in IEEE's own filter.
- ACM Digital Library: paste into Advanced Search and set the field to Abstract in the "Search Within" menu.
- ERIC (eric.ed.gov): the fielded query runs in the search box.
- Ovid: one query for Embase, PsycINFO, MEDLINE, and CAB Abstracts when you reach them through Ovid.
- EBSCOhost: one query for CINAHL, Business Source, EconLit, SocINDEX, SPORTDiscus, GreenFILE, MLA, and CAB on EBSCO.
- Engineering Village: Expert Search across Compendex, Inspec, GeoRef, and GeoBase.

Two things hold for all six. They build a free-text title-and-abstract query only and do not add controlled-vocabulary terms (Emtree, the APA Thesaurus, the CAB or CINAHL headings), which are proprietary, so add those in the database itself for the most complete search. And the publication-year range is set in each database's own filter, not in the query string, because these engines do not take the year reliably inline.

# 8. Smart and effective strategies (do's and don'ts)

Do think in two to four concepts joined with AND, each concept one idea with its synonyms joined by OR. Do include synonyms, British and American spellings, and each abbreviation with its full form. Do truncate specific stems (`therap*` for therapy and therapeutic) but do not over-truncate, because `cell*` also matches cellular and cellphone. Do run the recall check with three to ten known papers and add a synonym to whichever block it names. Do search at least two databases, and do record the AI model and date if you used one, because the final query is reproducible but the AI step is not.

Do not fill a concept with generic words such as "study", "analysis", or "patients", which add noise without adding the right papers. Do not rely on a single database, or on Google Scholar, as your search of record. And do not judge a paper from its title and abstract alone; read the full text before you cite it. The companion document, *Searching effectively with QueryBee*, works one example through from topic to finished query.

# 9. Privacy

Everything runs in your browser. The only outside requests are the optional lookups: the term finder and recall check query the free OpenAlex database (and, for abstracts, Europe PMC, Crossref, or Semantic Scholar), and the MeSH suggestions query the public NLM service. The shareable link encodes the search in the link itself, so nothing is uploaded to any server.

# 10. Honest limits

The tool builds the search and nothing downstream of it. Term suggestions are most reliable in well-indexed, English-language fields, strongest in biomedicine and the physical sciences and weaker in the social sciences and humanities. The specialist queries are free text only and do not include each database's controlled vocabulary; the exception is PubMed, where you can add MeSH headings. If you use an AI assistant for terms, that step is not reproducible, because different assistants return different words; the final search you build is reproducible, so record it. Google Scholar is for quick scoping, not a search of record.

# 11. Troubleshooting

Use a current browser. Most odd behaviour comes from an outdated browser; Google Chrome is the most reliable for the links and the online lookups.

A database link does not open, or opens the wrong page. The Google Scholar and PubMed links run the search directly. Scopus and Web of Science do not accept a full Boolean query in a link, so QueryBee opens their site and you paste the copied query into Advanced Search. If a link does nothing, your browser's popup blocker may have stopped it: allow popups for the page, or right-click the link and open it in a new tab, then paste the query. If a subscription database shows a login or a paywall, sign in through your institution first, then paste the query into Advanced Search.

The Copy button seems to do nothing. Some browsers block clipboard access when the file is opened locally. The tool falls back automatically, but if a copy does not take, select the query text in the panel and copy it by hand.

A lookup is slow or shows "busy or offline". The free services (OpenAlex for terms and recall, the NLM service for MeSH) are occasionally rate-limited. Wait a moment and try again; the rest of the tool keeps working.

No terms come back. Add another concept block so the suggestions can lock onto your domain, broaden the concept name, or add terms by hand.

No MeSH headings appear. MeSH is biomedical, so a non-biomedical term may have no heading, which is expected, and the free-text terms still cover it. If nothing loads at all, check your internet connection.

A known paper shows "missed". Read the block it names, add a synonym to that block taken from the paper's own wording, and check again.

The Google Scholar query is flagged as too long. Scholar has a limit near 256 characters. Trim that panel to the core concepts; the other databases take the full query.

# 12. How to cite

Cite QueryBee using the repository's `CITATION.cff` file, or:

Kher, M. M. (2026). *QueryBee: a single-file, browser-based fielded Boolean query builder for literature search* (Version 1.2.3) [Computer software]. Zenodo. https://doi.org/10.5281/zenodo.20733036
