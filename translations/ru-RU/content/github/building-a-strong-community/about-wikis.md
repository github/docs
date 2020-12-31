---
title: About wikis
intro: 'You can host documentation for your repository in a wiki, so that others can use and contribute to your project.'
redirect_from:
  - /articles/about-github-wikis/
  - /articles/about-wikis
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Every {% data variables.product.product_name %} repository comes equipped with a section for hosting documentation, called a wiki. You can use your repository's wiki to  share long-form content about your project, such as how to use it, how you designed it, or its core principles. A README file quickly tells what your project can do, while you can use a wiki to provide additional documentation. For more information, see "[About READMEs](/articles/about-readmes)."

With wikis, you can write content just like everywhere else on {% data variables.product.product_name %}. For more information, see "[Getting started with writing and formatting on {% data variables.product.prodname_dotcom %}](/articles/getting-started-with-writing-and-formatting-on-github)." We use [our open-source Markup library](https://github.com/github/markup) to convert different formats into HTML, so you can choose to write in Markdown or any other supported format.

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}If you create a wiki in a public repository, the wiki is available to {% if enterpriseServerVersions contains currentVersion %}anyone with access to {% data variables.product.product_location %}{% else %}the public{% endif %}. {% endif %}If you create a wiki in an internal or private repository, {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}people{% elsif currentVersion == "github-ae@latest" %}enterprise members{% endif %} with access to the repository can also access the wiki. For more information, see "[Setting repository visibility](/articles/setting-repository-visibility)."

You can edit wikis directly on {% data variables.product.product_name %}, or you can edit wiki files locally. By default, only people with write access to your repository can make changes to wikis, although you can allow everyone on {% data variables.product.product_location %} to contribute to a wiki in {% if currentVersion == "github-ae@latest" %}an internal{% else %}a public{% endif %} repository. For more information, see "[Changing access permissions for wikis](/articles/changing-access-permissions-for-wikis)".

### Дополнительная литература

- "[Adding or editing wiki pages](/articles/adding-or-editing-wiki-pages)"
- "[Creating a footer or sidebar for your wiki](/articles/creating-a-footer-or-sidebar-for-your-wiki)"
- "[Editing wiki content](/articles/editing-wiki-content)"
- "[Viewing a wiki's history of changes](/articles/viewing-a-wiki-s-history-of-changes)"
- "[Searching wikis](/articles/searching-wikis)"
