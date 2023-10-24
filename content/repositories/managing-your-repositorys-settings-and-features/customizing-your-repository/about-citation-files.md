---
title: About CITATION files
intro: You can add a CITATION file to your repository to help users correctly cite your software.
redirect_from:
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
## About CITATION files

You can add a `CITATION.cff` file to the root of a repository to let others know how you would like them to cite your work. The citation file format is plain text with human- and machine-readable citation information.

Example `CITATION.cff` file:

```text
cff-version: 1.2.0
message: "If you use this software, please cite it as below."
authors:
- family-names: "Lisa"
  given-names: "Mona"
  orcid: "https://orcid.org/0000-0000-0000-0000"
- family-names: "Bot"
  given-names: "Hew"
  orcid: "https://orcid.org/0000-0000-0000-0000"
title: "My Research Software"
version: 2.0.4
doi: 10.5281/zenodo.1234
date-released: 2017-12-18
url: "https://github.com/github-linguist/linguist"
```

The {% data variables.product.company_short %} citation prompt on your repository will show the example `CITATION.cff` content in these formats:

**APA**

```text
Lisa, M., & Bot, H. (2017). My Research Software (Version 2.0.4) [Computer software]. https://doi.org/10.5281/zenodo.1234
```

**BibTeX**

{% raw %}

```text
@software{Lisa_My_Research_Software_2017,
  author = {Lisa, Mona and Bot, Hew},
  doi = {10.5281/zenodo.1234},
  month = {12},
  title = {{My Research Software}},
  url = {https://github.com/github-linguist/linguist},
  version = {2.0.4},
  year = {2017}
}
```

{% endraw %}

Note the example above produces a _software_ citation (that is, `@software` type in BibTeX rather than `@article`).

For more information, see the [Citation File Format](https://citation-file-format.github.io/) website.

When you add a `CITATION.cff` file to the default branch of your repository, a link is automatically added to the repository landing page in the right sidebar, with the label "Cite this repository." This makes it easy for other users to cite your software project, using the information you've provided.

<!-- Screenshot taken from: https://github.com/citation-file-format/ruby-cff -->

![Screenshot showing the landing page for a repository. The "Cite this repository" link in the right sidebar is highlighted with a dark orange outline and a dropdown menu with the citation details is expanded underneath.](/assets/images/help/repository/citation-link.png)

## Citing something other than software

If you would prefer the {% data variables.product.prodname_dotcom %} citation information to link to another resource such as a research article, then you can use the `preferred-citation` override in CFF with the following types.

{% rowheaders %}

| Resource | CFF type | BibTeX type | APA annotation |
|----------|----------|-------------|----------------|
| Journal article/paper | `article` | `@article` | Not applicable |
| Book | `book` | `@book` | Not applicable |
| Booklet (bound but not published) | `pamphlet` | `@booklet` | Not applicable |
| Conference article/paper | `conference-paper` | `@inproceedings` | [Conference paper] |
| Conference proceedings | `conference`, `proceedings` | `@proceedings` | Not applicable |
| Data set | `data`, `database` | `@misc` | [Data set] |
| Magazine article | `magazine-article` | `@article` | Not applicable |
| Manual | `manual` | `@manual` | Not applicable |
| Misc/generic/other | `generic`, any other CFF type | `@misc` | Not applicable |
| Newspaper article | `newspaper-article` | `@article` | Not applicable |
| Software |  `software`, `software-code`, `software-container`, `software-executable`, `software-virtual-machine` | `@software` | [Computer software] |
| Report/technical report | `report` | `@techreport` | Not applicable |
| Unpublished | `unpublished` | `@unpublished` | Not applicable |

{% endrowheaders %}

Extended CITATION.cff file describing the software, but linking to a research article as the preferred citation:

```text
cff-version: 1.2.0
message: "If you use this software, please cite it as below."
authors:
- family-names: "Lisa"
  given-names: "Mona"
  orcid: "https://orcid.org/0000-0000-0000-0000"
- family-names: "Bot"
  given-names: "Hew"
  orcid: "https://orcid.org/0000-0000-0000-0000"
title: "My Research Software"
version: 2.0.4
doi: 10.5281/zenodo.1234
date-released: 2017-12-18
url: "https://github.com/github-linguist/linguist"
preferred-citation:
  type: article
  authors:
  - family-names: "Lisa"
    given-names: "Mona"
    orcid: "https://orcid.org/0000-0000-0000-0000"
  - family-names: "Bot"
    given-names: "Hew"
    orcid: "https://orcid.org/0000-0000-0000-0000"
  doi: "10.0000/00000"
  journal: "Journal Title"
  month: 9
  start: 1 # First page number
  end: 10 # Last page number
  title: "My awesome research software"
  issue: 1
  volume: 1
  year: 2021
```

The example `CITATION.cff` file above will produce the following outputs in the {% data variables.product.company_short %} citation prompt:

**APA**

```text
Lisa, M., & Bot, H. (2021). My awesome research software. Journal Title, 1(1), 1. https://doi.org/10.0000/00000
```

**BibTeX**

{% raw %}

```text
@article{Lisa_My_awesome_research_2021,
  author = {Lisa, Mona and Bot, Hew},
  doi = {10.0000/00000},
  journal = {Journal Title},
  month = {9},
  number = {1},
  pages = {1--10},
  title = {{My awesome research software}},
  volume = {1},
  year = {2021}
}
```

{% endraw %}

## Citing a dataset

If your repository contains a dataset, you can set `type: dataset` at the top level of your `CITATION.cff` file to produce a data citation string output in the {% data variables.product.prodname_dotcom %} citation prompt.

## Other citation files

The {% data variables.product.company_short %} citation feature will also detect a small number of additional files that are often used by communities and projects to describe how they would like their work to be cited.

{% data variables.product.company_short %} will link to these files in the _Cite this repository_ prompt, but will not attempt to parse them into other citation formats.

```text
# Note these are case-insensitive and must be in the root of the repository
CITATION
CITATIONS
CITATION.bib
CITATIONS.bib
CITATION.md
CITATIONS.md

# CITATION files for R packages are typically found at inst/CITATION
inst/CITATION
```

## Citation formats

We currently support APA and BibTex file formats.

Are you looking for additional citation formats? {% data variables.product.company_short %} uses a Ruby library, to parse the `CITATION.cff` files. You can request additional formats in the [ruby-cff](https://github.com/citation-file-format/ruby-cff) repository, or contribute them yourself.
