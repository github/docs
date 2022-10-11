---
title: About repository languages
intro: The files and directories within a repository determine the languages that make up the repository. You can view a repository's languages to get a quick overview of the repository.
redirect_from:
  - /articles/my-repository-is-marked-as-the-wrong-language/
  - /articles/why-isn-t-my-favorite-language-recognized/
  - /articles/my-repo-is-marked-as-the-wrong-language/
  - /articles/why-isn-t-sql-recognized-as-a-language/
  - /articles/why-isn-t-my-favorite-language-recognized-by-github/
  - /articles/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/about-repository-languages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Repository languages
---
{% data variables.product.product_name %} uses the open source [Linguist library](https://github.com/github/linguist) to
determine file languages for syntax highlighting and repository statistics. Language statistics will update after you push changes to your default branch.

Some files are hard to identify, and sometimes projects contain more library and vendor files than their primary code. If you're receiving incorrect results, please consult the Linguist [troubleshooting guide](https://github.com/github/linguist/blob/master/docs/troubleshooting.md) for help.

## Markup languages

Markup languages are rendered to HTML and displayed inline using our open-source [Markup library](https://github.com/github/markup). At this time, we are not accepting new markup languages to show within {% data variables.product.product_name %}. However, we do actively maintain our current markup languages. If you see a problem, [please create an issue](https://github.com/github/markup/issues/new).
