---
title: About CITATION files
intro: 'You can add a CITATION file to your repository to help users correctly cite your software.'
versions:
  fpt: '*'
  ghes: '>=3.3'
  ghae: 'issue-4651'
topics:
  - Repositories
---
## About CITATION files

You can add a `CITATION.cff` file to the root of a repository to let others know how you would like them to cite your work. The citation file format is plain text with human- and machine-readable citation information. 

Example CITATION.cff:
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

For more information, see the [Citation File Format](https://citation-file-format.github.io/) website.

When you add a `CITATION.cff` file to the default branch of your repository, it is automatically linked from the repository landing page. This makes it easy for other users to cite your software project, using the information you've provided.

![Citation link on repository landing page](/assets/images/help/repository/citation-link.png)

## Citation formats

We currently support APA and BibTex file formats.

Are you looking for additional citation formats? GitHub uses a Ruby library, to parse the `CITATION.cff` files. You can request additional formats in the [ruby-cff](https://github.com/citation-file-format/ruby-cff) repository, or contribute them yourself.
