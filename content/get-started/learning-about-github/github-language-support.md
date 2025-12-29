---
title: GitHub language support
intro: 'An overview of the programming languages supported by {% data variables.product.prodname_dotcom %} features.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub
redirect_from:
  - /github/getting-started-with-github/github-language-support
  - /github/getting-started-with-github/learning-about-github/github-language-support
---
<!-- If you make changes to this article, also update any feature-level articles to reflect the same changes in language support. -->

## About supported languages

Most {% data variables.product.prodname_dotcom %} features work regardless of which languages your code is written in. You can search for code or enable syntax highlighting based on any language known to {% data variables.product.prodname_dotcom %}. For more information, see [AUTOTITLE]{% ifversion code-search-upgrade %}(/search-github/github-code-search/understanding-github-code-search-syntax#language-qualifier){% else %}(/search-github/searching-on-github/searching-code#search-by-language){% endif %} or [AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks#syntax-highlighting).

Some {% data variables.product.prodname_dotcom %} products have features that are currently only supported for a subset of programming languages.

Core languages for {% data variables.product.prodname_dotcom %} features include C, C++, C#, Go, Java, JavaScript,{% ifversion kotlin-supported-language %} Kotlin,{% endif %} PHP, Python, Ruby, Rust, Scala, and TypeScript. For features that support package managers, the currently supported package managers are included in the table with their relevant languages.

Some features are supported for additional languages or package managers. If you want to know whether another language is supported for a feature or to request support for a language, visit {% data variables.contact.community_support_forum %}.

<!-- Source for the following tables lives in data/tables/supported-code-languages.yml -->

{% ifversion fpt or ghec %}

## Core languages supported in {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_ghe_cloud %}

| Language{%- for featureEntry in tables.supported-code-languages.features %}{%- assign featureKey = featureEntry[0] %}{%- assign featureData = featureEntry[1] %}{%- if featureData.fptAndGhec %} | [{{ featureData.name }}]({{ featureData.link }}){%- endif %}{%- endfor %} |
|:----{%- for featureEntry in tables.supported-code-languages.features %}{%- assign featureData = featureEntry[1] %}{%- if featureData.fptAndGhec %}|:----:{%- endif %}{%- endfor %}|
{%- for languageEntry in tables.supported-code-languages.languages %}
{%- assign language = languageEntry[0] %}
{%- assign languageData = languageEntry[1] %}
| {{ language }}{%- for featureEntry in tables.supported-code-languages.features -%}{%- assign featureKey = featureEntry[0] -%}{%- assign featureData = featureEntry[1] -%}{%- if featureData.fptAndGhec -%}{%- assign supportLevel = languageData[featureKey] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "not-supported" %}✗{%- else %}{{ supportLevel }}{%- endcase -%}{%- endif -%}{%- endfor %} |
{%- endfor %}
{% endif %}

{% ifversion ghes %}

## Core languages supported in {% data variables.product.prodname_ghe_server %}

| Language{%- for featureEntry in tables.supported-code-languages.features %}{%- assign featureKey = featureEntry[0] %}{%- assign featureData = featureEntry[1] %}{%- if featureData.ghes %} | [{{ featureData.name }}]({{ featureData.link }}){%- endif %}{%- endfor %} |
|:----{%- for featureEntry in tables.supported-code-languages.features %}{%- assign featureData = featureEntry[1] %}{%- if featureData.ghes %}|:----:{%- endif %}{%- endfor %}|
{%- for languageEntry in tables.supported-code-languages.languages %}
{%- assign language = languageEntry[0] %}
{%- assign languageData = languageEntry[1] %}
| {{ language }}{%- for featureEntry in tables.supported-code-languages.features -%}{%- assign featureKey = featureEntry[0] -%}{%- assign featureData = featureEntry[1] -%}{%- if featureData.ghes -%}{%- assign supportLevel = languageData[featureKey] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "not-supported" %}✗{%- else %}{{ supportLevel }}{%- endcase -%}{%- endif -%}{%- endfor %} |
{%- endfor %}
{% endif %}

> [!NOTE]
> {% ifversion fpt or ghec %}The language support for {% data variables.product.prodname_copilot %} varies depending on the volume and diversity of training data for that language.{% endif %}
> The support of Gradle for the dependency graph and {% data variables.product.prodname_dependabot_alerts %} is limited to the upload of data obtained using the {% data variables.dependency-submission-api.name %}.

[^1]: {% ifversion codeql-rust-available %}PHP and Scala {% elsif codeql-rust-public-preview %}PHP and Scala {% else %}PHP, Rust, and Scala {% endif %}are supported for code scanning by third-party actions, but not by {% data variables.product.prodname_codeql %}.
