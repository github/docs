---
title: About CITATION files
intro: You can add a CITATION file to your repository to help users correctly cite your software.
redirect_from:
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files
versions:
  fpt: '*'
  ghes: '>=3.3'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
## About CITATION files

You can add a `CITATION.cff` file to the root of a repository to let others know how you would like them to cite your work. The citation file format is plain text with human- and machine-readable citation information.

Example `CITATION.cff` file:

```
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
url: "https://github.com/github/linguist"
```

The GitHub citation prompt on your repository will show the example `CITATION.cff` content in these formats:

**APA**

```
Lisa, M., & Bot, H. (2017). My Research Software (Version 2.0.4) [Computer software]. https://doi.org/10.5281/zenodo.1234
```

**BibTeX**

{% raw %}
```
@software{Lisa_My_Research_Software_2017,
  author = {Lisa, Mona and Bot, Hew},
  doi = {10.5281/zenodo.1234},
  month = {12},
  title = {{My Research Software}},
  url = {https://github.com/github/linguist},
  version = {2.0.4},
  year = {2017}
}
```
{% endraw %}

Note the example above produces a _software_ citation (i.e., `@software` type in BibTeX rather than `@article`).

For more information, see the [Citation File Format](https://citation-file-format.github.io/) website.

When you add a `CITATION.cff` file to the default branch of your repository, it is automatically linked from the repository landing page. This makes it easy for other users to cite your software project, using the information you've provided.

![Citation link on repository landing page](/assets/images/help/repository/citation-link.png)

## Citing something other than software

If you would prefer the {% data variables.product.prodname_dotcom %} citation information to link to another resource such as a research article, then you can use the `preferred-citation` override in CFF with the following types.

| Resource | CFF type | BibTeX type | APA annotation |
|----------|----------|-------------|----------------|
| Journal article/paper | `article` | `@article` | |
| Book | `book` | `@book` | |
| Booklet (bound but not published) | `pamphlet` | `@booklet` | |
| Conference article/paper | `conference-paper` | `@inproceedings` | [Conference paper] |
| Conference proceedings | `conference`, `proceedings` | `@proceedings` | |
| Data set | `data`, `database` | `@misc` | [Data set] |
| Magazine article | `magazine-article` | `@article` | |
| Manual | `manual` | `@manual` | |
| Misc/generic/other | `generic`, any other CFF type | `@misc` | |
| Newspaper article | `newspaper-article` | `@article` | |
| Software |  `software`, `software-code`, `software-container`, `software-executable`, `software-virtual-machine` | `@software` | [Computer software] |
| Report/technical report | `report` | `@techreport` | |
| Unpublished | `unpublished` | `@unpublished` | |

Extended CITATION.cff file describing the software, but linking to a research article as the preferred citation:

```
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
url: "https://github.com/github/linguist"
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

The example `CITATION.cff` file above will produce the following outputs in the GitHub citation prompt:

**APA**

```
Lisa, M., & Bot, H. (2021). My awesome research software. Journal Title, 1(1), 1. https://doi.org/10.0000/00000
```

**BibTeX**

{% raw %}
```
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

The GitHub citation feature will also detect a small number of additional files that are often used by communities and projects to describe how they would like their work to be cited.

GitHub will link to these files in the _Cite this repository_ prompt, but will not attempt to parse them into other citation formats.

```
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

Are you looking for additional citation formats? GitHub uses a Ruby library, to parse the `CITATION.cff` files. You can request additional formats in the [ruby-cff](https://github.com/citation-file-format/ruby-cff) repository, or contribute them yourself.
