---
title: "Searching effectively with QueryBee"
subtitle: "A short field guide to building searches that find the right papers"
author: "Mafatlal M. Kher · Department of Chemical Engineering, Ariel University, Israel"
date: "For QueryBee 1.2.3"
---

The User Manual tells you what each control does. This guide tells you how to build a search that actually finds the right papers. QueryBee guarantees correct syntax for you, so your effort goes into the two things it cannot decide: the words you choose, and how you group them.

# 1. Think in concepts, not sentences

A good search is two to four concepts joined with AND. Each concept is one idea in your topic. Inside a concept you list alternative words joined with OR, and QueryBee joins the concepts with AND, so a record must contain at least one word from every concept to match.

Two to four concepts is the useful range. One concept is usually too broad. Five or more is usually too narrow, because a relevant paper that happens to omit a keyword for one facet drops out. Pick the facets that genuinely define your topic and leave the rest out.

# 2. Choose terms that discriminate

Inside each concept, add every way authors write that idea. Include synonyms, British and American spellings (tumour and tumor, colour and color), and abbreviations together with their full form (PCR and "polymerase chain reaction"; GLRaV-3 and "grapevine leafroll-associated virus 3"). Missing one spelling or using only the abbreviation can hide half the literature.

Avoid generic words that match almost everything, such as "study", "analysis", "effect", or "patients". They add noise without adding the papers you want. The "find terms in literature" button on each concept harvests candidate terms from real papers and ranks them by keyness, which pushes distinctive terms to the top; keep the ones that fit and ignore the rest.

# 3. Truncate carefully

A trailing asterisk matches word stems: therap* finds therapy, therapies, and therapeutic. Use it where the stem is specific. Do not over-truncate: cell* also matches cellular, cellphone, and cellulose, and cat* matches category and catalog. A stem that is too short floods the results with junk. Google Scholar does not support stem truncation, so QueryBee removes the asterisk from the Scholar query for you.

# 4. Phrases against single words

Multi-word ideas should be phrases, for example "machine learning" or "powdery mildew". QueryBee quotes them automatically. A phrase is stricter, because the words must appear together, which raises precision but can miss spaced or reordered variants. When recall matters, add the key single words as extra alternatives in the same concept.

# 5. Use the AI step well, and record it

The prompt asks a chatbot for concept blocks and candidate terms. Any model you already use works, and no API key is needed. Treat the reply as a draft: delete the generic terms, and add the field-specific ones the model missed. Because models are not reproducible and return different words each time, record which model and which date you used. The query you finally assemble is reproducible, so export the search record and keep it with your methods.

# 6. Close the gap with the recall check

Paste three to ten papers you already know should be found, one per line, as a DOI, an OpenAlex ID, or a title. QueryBee fetches each paper's title and abstract, tests your concept blocks against them, and names the concept block that misses each paper. Add a synonym to that block and check again. Two or three rounds usually tightens the search substantially. This is the fastest way to catch a missing synonym before you run the search for real.

# 7. Pick databases by field

Search at least two databases. One is never enough for a thorough review, and the strategy review panel will flag it.

- Any field: Scopus and Web of Science. Use both, because they overlap but each indexes unique sources.
- Biomedicine and life sciences: PubMed, with MeSH headings added (see section 8).
- Computer science and engineering: IEEE Xplore, ACM Digital Library, and Engineering Village (Compendex and Inspec).
- Education: ERIC. Psychology: PsycINFO through Ovid or EBSCO. Nursing: CINAHL through EBSCO. Agriculture and plant science: CAB Abstracts through Ovid or EBSCO.

Google Scholar is for quick scoping only, not a search of record, because it offers no reproducible Boolean field search and no clean export.

# 8. When to add MeSH (PubMed)

For a thorough PubMed search, pair each idea's free-text terms with its MeSH heading. With PubMed turned on, click "Suggest MeSH headings", then click the headings that fit each concept; QueryBee adds them as "Heading"[MeSH] beside your free-text terms. MeSH is biomedical, so agriculture, engineering, and education terms often have no heading, which is expected, and the free-text terms still cover those.

# 9. A worked example, start to finish

Topic: deep learning for detecting plant leaf disease from images.

Three concepts:

- Method: "deep learning" OR "convolutional neural network" OR CNN OR "transfer learning" OR "neural network"
- Problem: "leaf disease" OR "plant disease" OR "crop disease" OR "foliar disease"
- Data: image OR imaging OR "computer vision" OR photograph*

Build the query, copy the Scopus, Web of Science, and IEEE strings, and run them. Paste two papers you know are relevant into the recall check. If one is missed on the Data concept, add "RGB image" to that block and re-check. When nothing relevant is missed, export the search record and run the final searches.

# 10. Common mistakes to avoid

- One giant concept with everything joined by OR and no AND structure. The search becomes too broad.
- Too many concepts. A relevant paper that omits one facet's keyword is lost.
- Only one spelling, or only the abbreviation. Half the literature is hidden.
- Over-truncation. The results fill with unrelated records.
- Searching a single database. The search is incomplete by construction.
- Judging a paper from its title and abstract. Always read the full text before you cite it.

The tool keeps the syntax correct and identical every time. Your job is the vocabulary and the concept structure. Spend your effort there, verify with the recall check, and record what you did so the search is reportable.
