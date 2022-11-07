---
title: About wikis
intro: 'You can host documentation for your repository in a wiki, so that others can use and contribute to your project.'
redirect_from:
  - /articles/about-github-wikis
  - /articles/about-wikis
  - /github/building-a-strong-community/about-wikis
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
---

Every repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} comes equipped with a section for hosting documentation, called a wiki. You can use your repository's wiki to  share long-form content about your project, such as how to use it, how you designed it, or its core principles. A README file quickly tells what your project can do, while you can use a wiki to provide additional documentation. For more information, see "[About READMEs](/articles/about-readmes)."

With wikis, you can write content just like everywhere else on {% data variables.product.product_name %}. For more information, see "[Getting started with writing and formatting on {% data variables.product.prodname_dotcom %}](/articles/getting-started-with-writing-and-formatting-on-github)." We use [our open-source Markup library](https://github.com/github/markup) to convert different formats into HTML, so you can choose to write in Markdown or any other supported format. 

{% data reusables.getting-started.math-and-diagrams %}

{% ifversion fpt or ghes or ghec %}If you create a wiki in a public repository, the wiki is available to {% ifversion ghes %}anyone with access to {% data variables.location.product_location %}{% else %}the public{% endif %}. {% endif %}If you create a wiki in a private{% ifversion ghec or ghes %} or internal{% endif %} repository, only {% ifversion fpt or ghes or ghec %}people{% elsif ghae %}enterprise members{% endif %} with access to the repository can access the wiki. For more information, see "[Setting repository visibility](/articles/setting-repository-visibility)."

You can edit wikis directly on {% data variables.product.product_name %}, or you can edit wiki files locally. By default, only people with write access to your repository can make changes to wikis, although you can allow everyone on {% data variables.location.product_location %} to contribute to a wiki in {% ifversion ghae %}an internal{% else %}a public{% endif %} repository. For more information, see "[Changing access permissions for wikis](/communities/documenting-your-project-with-wikis/changing-access-permissions-for-wikis)."

{% note %}

**Note:** Search engines will not index the contents of wikis. To have your content indexed by search engines, you can use [{% data variables.product.prodname_pages %}](/pages) in a public repository.

{% endnote %}

## Further reading

- "[Adding or editing wiki pages](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)"
- "[Creating a footer or sidebar for your wiki](/communities/documenting-your-project-with-wikis/creating-a-footer-or-sidebar-for-your-wiki)"
- "[Editing wiki content](/communities/documenting-your-project-with-wikis/editing-wiki-content)"
- "[Viewing a wiki's history of changes](/articles/viewing-a-wiki-s-history-of-changes)"
- "[Searching wikis](/search-github/searching-on-github/searching-wikis)"
