---
title: About CodeQL code scanning in your CI system
shortTitle: Code scanning in your CI
intro: 'You can analyze your code with {% data variables.product.prodname_codeql %} in a third-party continuous integration system and upload the results to {% data variables.product.product_location %}. The resulting {% data variables.product.prodname_code_scanning %} alerts are shown alongside any alerts generated within {% data variables.product.product_name %}.'
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

{% data reusables.code-scanning.about-code-scanning %} For information, see "[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)."

{% data reusables.code-scanning.codeql-context-for-actions-and-third-party-tools %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
<!--Content for GitHub.com, GHAE next, and GHES 3.2 and onward. CodeQL CLI is the preferred method, and CodeQL runner is deprecated. -->

{% data reusables.code-scanning.codeql-cli-context-for-third-party-tools %}

{% data reusables.code-scanning.upload-sarif-ghas %}

## About the {% data variables.product.prodname_codeql_cli %}

{% data reusables.code-scanning.what-is-codeql-cli %}

Use the {% data variables.product.prodname_codeql_cli %} to analyze:

- Dynamic languages, for example, JavaScript and Python.
- Compiled languages, for example, C/C++, C# and Java.
- Codebases written in a mixture of languages.

For more information, see "[Installing {% data variables.product.prodname_codeql_cli %} in your CI system](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)."

{% data reusables.code-scanning.licensing-note %}

{% ifversion ghes = 3.2 %}
<!-- Content for GHES 3.2 only. CodeQL CLI 2.6.2, which introduces full feature parity between CodeQL CLI and CodeQL runner, is officially recommended for GHES 3.0+ -->

Since version 2.6.3, the {% data variables.product.prodname_codeql_cli %} has had full feature parity with the {% data variables.product.prodname_codeql_runner %}.

{% data reusables.code-scanning.deprecation-codeql-runner %}

{% endif %}

{% endif %}

<!--Content for GHES 3.1 only. Both CodeQL CLI and CodeQL runner are available -->
{% ifversion ghes < 3.2 %}
You add the {% data variables.product.prodname_codeql_cli %} or the {% data variables.product.prodname_codeql_runner %} to your third-party system, then call the tool to analyze code and upload the SARIF results to {% data variables.product.product_name %}. The resulting {% data variables.product.prodname_code_scanning %} alerts are shown alongside any alerts generated within {% data variables.product.product_name %}.

[{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-cli-binaries/releases) version 2.6.3 is available now for {% data variables.product.prodname_ghe_server %} 3.0 and later versions. For more information on migrating to the {% data variables.product.prodname_codeql_cli %}, see "[Migrating from the CodeQL runner to CodeQL CLI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)."

{% data reusables.code-scanning.upload-sarif-ghas %}

## Comparing {% data variables.product.prodname_codeql_cli %} and {% data variables.product.prodname_codeql_runner %}

{% data reusables.code-scanning.what-is-codeql-cli %}

The {% data variables.product.prodname_codeql_runner %} is a deprecated command-line tool that uses the {% data variables.product.prodname_codeql_cli %} to analyze code and upload the results to {% data variables.product.product_name %}. The tool mimics the analysis run natively within {% data variables.product.product_name %} using actions.

{% data variables.product.prodname_codeql_cli %} 2.6.3 is a complete replacement for the runner with full feature parity. Generally, it is better to use the {% data variables.product.prodname_codeql_cli %} directly. 

For more information, see "[Installing {% data variables.product.prodname_codeql_cli %} in your CI system](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)."

{% data reusables.code-scanning.deprecation-codeql-runner %}

For more information about the {% data variables.product.prodname_codeql_runner %}, see "[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)."

{% endif %}
