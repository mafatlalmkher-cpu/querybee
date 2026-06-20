---
title: "QueryBee Subject Playbooks"
subtitle: "Which databases to combine, what to add, and what to avoid, field by field"
author: "Mafatlal M. Kher and Elyashiv Drori · Department of Chemical Engineering, Ariel University, Israel"
date: "For QueryBee 1.2.3"
---

QueryBee builds the query; this companion tells you, for your field, which databases to combine, which controlled vocabulary to add by hand, how to phrase concepts, and the mistakes that quietly cost recall. No single database covers a field completely, so each recipe names a combination. After building a query, run the recall check against a few papers you already know to confirm the combination is catching them.

How to read a recipe. "Turn on in QueryBee" are the engines QueryBee writes a query for directly. "Add separately" are databases you reach through Ovid or EBSCO using QueryBee's platform query, or that you search on their own. "Controlled vocabulary" is the thesaurus you add inside that database, because it is proprietary and not embedded in the tool.

# Medicine and clinical research

**Turn on in QueryBee:** PubMed, Scopus, Web of Science.
**Add separately:** Embase through Ovid (use QueryBee's Ovid query). Embase is expected for clinical and drug reviews. Search trial registries (ClinicalTrials.gov) on their own.
**Controlled vocabulary:** MeSH in PubMed (the Suggest MeSH headings button), Emtree in Embase.
**Term tips:** build population, intervention, and outcome as separate concepts. Pair MeSH with free-text in PubMed, because recent papers are not yet indexed with MeSH. Include drug generic and brand names, and both British and American spellings.
**Common mistakes:** searching MeSH alone (misses the newest papers) or free-text alone (misses well-indexed older ones); skipping Embase; adding study-design words to the query instead of using the database's filters.
**Effective use:** build free-text in QueryBee, add MeSH in the PubMed panel, paste the Ovid query into Embase and add Emtree. Two databases minimum, three for a systematic review.

# Plant science, agriculture, and plant pathology

**Turn on in QueryBee:** Scopus, Web of Science, PubMed.
**Add separately:** CAB Abstracts through Ovid or EBSCO (the core applied-agriculture database), and AGRIS or AGRICOLA where available.
**Controlled vocabulary:** the CAB Thesaurus in CAB Abstracts; MeSH covers part of plant molecular biology in PubMed.
**Term tips:** include the crop's common name and its Latin binomial (grapevine and *Vitis vinifera*), the pathogen's current and former names (*Erysiphe necator* and *Uncinula necator*), and abbreviations with their full form (GLRaV-3 and grapevine leafroll-associated virus 3). Add method names (RT-qPCR, ELISA, high-throughput sequencing).
**Common mistakes:** using only the common crop name and missing Latin-name papers; using only the current pathogen name and missing older synonyms; skipping CAB Abstracts, where much applied agronomy sits and PubMed does not reach; over-truncating a genus name.
**Effective use:** run Scopus, Web of Science, and PubMed in QueryBee, run the Ovid or EBSCO query in CAB Abstracts and add CAB Thesaurus terms, then use the recall check with five known papers to surface missing Latin or synonym terms.

# Ecology and environmental science

**Turn on in QueryBee:** Scopus, Web of Science.
**Add separately:** CAB Abstracts (applied ecology) through Ovid or EBSCO; GeoRef through Engineering Village for earth-science overlap; a grey-literature source on its own, because environmental evidence guidance expects it.
**Controlled vocabulary:** CAB Thesaurus where used.
**Term tips:** ecology reviews need broad synonym sets, taxon names at the right rank, and often geographic terms. The Web of Science Core Collection is strong here.
**Common mistakes:** taxon terms that are too narrow; ignoring grey literature (against CEE guidance); a single database.
**Effective use:** follow Collaboration for Environmental Evidence guidance: at least two bibliographic databases plus a grey-literature search.

# Computer science and engineering

**Turn on in QueryBee:** IEEE Xplore, ACM Digital Library, Scopus, Engineering Village (Compendex and Inspec).
**Controlled vocabulary:** the Inspec Thesaurus in Engineering Village.
**Term tips:** include each acronym with its expansion (CNN and convolutional neural network). Conference papers carry primary results in this field, so include conference papers in the Scopus document-type filter. Terminology shifts fast, so mine recent terms with the find-terms button.
**Common mistakes:** excluding conference papers; searching only IEEE and missing ACM, or the reverse; not capturing acronym variants.
**Effective use:** IEEE Command Search, ACM with the field set to Abstract, and Compendex with Inspec, with conference papers kept in the document-type filter.

# Education

**Turn on in QueryBee:** ERIC, Scopus, Web of Science.
**Add separately:** PsycINFO through Ovid or EBSCO for educational-psychology overlap; the British Education Index through EBSCO for UK coverage.
**Controlled vocabulary:** ERIC Thesaurus descriptors in ERIC.
**Term tips:** education terms are often phrases and policy labels. Include US and UK terminology and spelling (math and maths; K-12 and key stage).
**Common mistakes:** ERIC alone; missing the PsycINFO overlap; ignoring UK or US terminology.
**Effective use:** ERIC plus one multidisciplinary database, adding PsycINFO when the topic is psychological.

# Psychology and behavioural science

**Turn on in QueryBee:** Scopus, Web of Science, PubMed (for clinical topics).
**Add separately:** PsycINFO through Ovid or EBSCO is the primary database; use QueryBee's platform query.
**Controlled vocabulary:** the APA Thesaurus of Psychological Index Terms in PsycINFO.
**Term tips:** include construct synonyms and the names of measures and scales. PsycINFO indexing is rich, so pair free-text with APA descriptors.
**Common mistakes:** free-text only, which misses APA-indexed records; a single database.
**Effective use:** PsycINFO with APA descriptors, plus Scopus and Web of Science.

# Business, management, and economics

**Turn on in QueryBee:** Scopus, Web of Science.
**Add separately:** Business Source and EconLit through EBSCO (use QueryBee's EBSCO query).
**Controlled vocabulary:** EconLit and Business Source subject terms in EBSCO.
**Term tips:** include both academic and practitioner synonyms, because the literature splits between them. Journal-quality scoping (for example ABS or AJG lists) is done separately if your review needs it.
**Common mistakes:** academic-only terms that miss the practitioner literature; a single database.
**Effective use:** Scopus and Web of Science plus the EBSCO query in Business Source and EconLit.

# Chemistry, materials, and physical sciences

**Turn on in QueryBee:** Scopus, Web of Science.
**Add separately:** Compendex and Inspec through Engineering Village. Structure and reaction searches use specialist tools (SciFinder, Reaxys) on their own.
**Controlled vocabulary:** the Inspec Thesaurus in Engineering Village.
**Term tips:** include compound names, formulae, and abbreviations. Term mining works well here, because physical-science vocabulary is distinctive, so the keyness ranking is reliable.
**Common mistakes:** missing formula or abbreviation variants; ignoring Inspec for applied physics.
**Effective use:** Scopus and Web of Science with Inspec, and lean on the term miner, which is strongest in the physical sciences.

# One habit for every field

Whatever your field, the fastest quality check is the same: paste three to ten papers you know should be found into the recall check, and add a synonym to whichever concept block it names as missing. This catches the field-specific term you forgot (a Latin name, an acronym, a measure name) before you run the search for real, which is where the tool saves you the most time.
