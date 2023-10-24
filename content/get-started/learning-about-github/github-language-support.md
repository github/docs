---
title: GitHub language support
intro: 'An overview of the programming languages supported by {% data variables.product.prodname_dotcom %} features.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub
redirect_from:
  - /github/getting-started-with-github/github-language-support
  - /github/getting-started-with-github/learning-about-github/github-language-support
---
<!-- If you make changes to this article, also update any feature-level articles to reflect the same changes in language support. -->

## About supported languages

Most {% data variables.product.prodname_dotcom %} features work regardless of which languages your code is written in. You can search for code or enable syntax highlighting based on any language known to {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE]{% ifversion code-search-code-view %}(/search-github/github-code-search/understanding-github-code-search-syntax#language-qualifier){% else %}(/search-github/searching-on-github/searching-code#search-by-language){% endif %}" or "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks#syntax-highlighting)."

Some {% data variables.product.prodname_dotcom %} products have features that are currently only supported for a subset of programming languages.

## Core languages supported by {% data variables.product.prodname_dotcom %} features

Core languages for {% data variables.product.prodname_dotcom %} features include C, C++, C#, Go, Java, JavaScript, PHP, Python, Ruby, Scala, and TypeScript. For features that support package managers, the currently supported package managers are included in the table with their relevant languages.

Some features are supported for additional languages or package managers. If you want to know whether another language is supported for a feature or to request support for a language, visit {% data variables.contact.community_support_forum %}.

| Language {% data reusables.supported-languages.products-table-header %}
{% data reusables.supported-languages.C %}
{% data reusables.supported-languages.Cpp %}
{% data reusables.supported-languages.Cs %}
{% data reusables.supported-languages.go %}
{% data reusables.supported-languages.java %}
{% data reusables.supported-languages.javascript %}
{% data reusables.supported-languages.php %}
{% data reusables.supported-languages.python %}
{% data reusables.supported-languages.ruby %}
{% data reusables.supported-languages.scala %}
{%- ifversion codeql-swift-beta or supply-chain-features-swift-support %}
{% data reusables.supported-languages.swift %}
{%- endif %}
{% data reusables.supported-languages.typescript %}

{% note %}

{% ifversion ghae or ghes = 3.6 %}
**Note:** PHP{% ifversion ghae %}, Ruby,{% endif %} and Scala are supported for {% data variables.product.prodname_code_scanning %} by third-party actions.
{% else %}
**Notes:**
- The support of Gradle for the dependency graph and {% data variables.product.prodname_dependabot_alerts %} is limited to the upload of data obtained using the dependency submission API.
- PHP and Scala are supported for {% data variables.product.prodname_code_scanning %} by third-party actions.
{% endif %}

{% endnote %}
