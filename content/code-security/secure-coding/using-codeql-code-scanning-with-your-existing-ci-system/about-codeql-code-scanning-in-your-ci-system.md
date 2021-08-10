---
title: About CodeQL code scanning in your CI system
shortTitle: Code scanning in your CI
intro: 'You can analyze your code with {% data variables.product.prodname_codeql %} in a third-party continuous integration system and upload the results to {% data variables.product.product_location %}. The resulting {% data variables.product.prodname_code_scanning %} alerts are shown alongside any alerts generated within {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
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
---
<!--UI-LINK: When GitHub Enterprise Server 3.1+ doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## About {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in your CI system

{% data reusables.code-scanning.about-code-scanning %} For information, see "[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)."

You can run {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} within {% data variables.product.product_name %} using {% data variables.product.prodname_actions %}. Alternatively, if you use a third-party continuous integration or continuous delivery/deployment (CI/CD) system, you can run {% data variables.product.prodname_codeql %} analysis in your existing system and upload the results to {% data variables.product.product_location %}.

<!--Content for GitHub.com, GHAE next, and GHES 3.2. Both CodeQL CLI and CodeQL runner are available, but CodeQL CLI preferred -->
{% ifversion fpt or ghes > 3.1 or ghae-next %}

You add the {% data variables.product.prodname_codeql_cli %} to your third-party system, then call the tool to analyze code and upload the SARIF results to {% data variables.product.product_name %}. The resulting {% data variables.product.prodname_code_scanning %} alerts are shown alongside any alerts generated within {% data variables.product.product_name %}.

{% data reusables.code-scanning.upload-sarif-ghas %}

## About the {% data variables.product.prodname_codeql_cli %}

{% data reusables.code-scanning.what-is-codeql-cli %}

Use the {% data variables.product.prodname_codeql_cli %} to analyze:

- Dynamic languages, for example, JavaScript and Python.
- Compiled languages, for example, C/C++, C# and Java.
- Codebases written in a mixture of languages.

For more information, see "[Installing {% data variables.product.prodname_codeql_cli %} in your CI system](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)."

{% data reusables.code-scanning.licensing-note %}

{% data reusables.code-scanning.use-codeql-runner-not-cli %}

{% endif %}

<!--Content for GHES 3.1 only. Both CodeQL CLI and CodeQL runner are available -->
{% ifversion ghes = 3.1 %}
You add the {% data variables.product.prodname_codeql_cli %} or the {% data variables.product.prodname_codeql_runner %} to your third-party system, then call the tool to analyze code and upload the SARIF results to {% data variables.product.product_name %}. The resulting {% data variables.product.prodname_code_scanning %} alerts are shown alongside any alerts generated within {% data variables.product.product_name %}.

{% data reusables.code-scanning.upload-sarif-ghas %}

## Comparing {% data variables.product.prodname_codeql_cli %} and {% data variables.product.prodname_codeql_runner %}

{% data reusables.code-scanning.what-is-codeql-cli %}

The {% data variables.product.prodname_codeql_runner %} is a command-line tool that uses the {% data variables.product.prodname_codeql_cli %} to analyze code and upload the results to {% data variables.product.product_name %}. The tool mimics the analysis run natively within {% data variables.product.product_name %} using actions. The runner is able to integrate with more complex build environments than the CLI, but this ability makes it more difficult and error-prone to set up. It is also more difficult to debug any problems. Generally, it is better to use the {% data variables.product.prodname_codeql_cli %} directly unless it doesn't support your use case.

Use the {% data variables.product.prodname_codeql_cli %} to analyze:

- Dynamic languages, for example, JavaScript and Python.
- Codebases with a compiled language that can be built with a single command or by running a single script.

For more information, see "[Installing {% data variables.product.prodname_codeql_cli %} in your CI system](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)."

{% data reusables.code-scanning.use-codeql-runner-not-cli %}

{% data reusables.code-scanning.beta-codeql-runner %}

For more information, see "[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)."

{% endif %}

<!--Content for GHAE and GHES 3.0 only. Only CodeQL runner is available -->
{% ifversion ghes = 3.0 or ghae %}
{% data reusables.code-scanning.upload-sarif-ghas %}

You add the {% data variables.product.prodname_codeql_runner %} to your third-party system, then call the tool to analyze code and upload the SARIF results to {% data variables.product.product_name %}. The resulting {% data variables.product.prodname_code_scanning %} alerts are shown alongside any alerts generated within {% data variables.product.product_name %}.

{% data reusables.code-scanning.beta-codeql-runner %}

To set up code scanning in your CI system, see "[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)."
{% endif %}
