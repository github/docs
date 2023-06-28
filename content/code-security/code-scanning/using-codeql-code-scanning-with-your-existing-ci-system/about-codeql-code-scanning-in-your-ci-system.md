---
title: About CodeQL code scanning in your CI system
shortTitle: Code scanning in your CI
intro: 'You can analyze your code with {% data variables.product.prodname_codeql %} in a third-party continuous integration system and upload the results to {% data variables.location.product_location %}. The resulting {% data variables.product.prodname_code_scanning %} alerts are shown alongside any alerts generated within {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
redirect_from:
  - /code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system
---
<!--UI-LINK: When GitHub Enterprise Server 3.1+ doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## About {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in your CI system

{% data reusables.code-scanning.about-code-scanning %} For information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)."

{% data reusables.code-scanning.codeql-context-for-actions-and-third-party-tools %}

You add the {% data variables.product.prodname_codeql_cli %} to your third-party system, then call the tool to analyze code and upload the SARIF results to {% data variables.product.product_name %}. The resulting {% data variables.product.prodname_code_scanning %} alerts are shown alongside any alerts generated within {% data variables.product.product_name %}.

{% data reusables.code-scanning.about-multiple-configurations-link %}

{% data reusables.code-scanning.upload-sarif-ghas %}

## About the {% data variables.product.prodname_codeql_cli %}

{% data reusables.code-scanning.what-is-codeql-cli %}

Use the {% data variables.product.prodname_codeql_cli %} to analyze:

- Dynamic languages, for example, JavaScript and Python.
- Compiled languages, for example, C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} and Java.
- Codebases written in a mixture of languages.

For more information, see "[AUTOTITLE](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)."

{% data reusables.code-scanning.licensing-note %}
