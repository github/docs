---
title: About CodeQL code scanning in your CI system
shortTitle: Code scanning in your CI
intro: 'You can analyze your code with {% data variables.product.prodname_codeql %} in a third-party continuous integration system and upload the results to {% data variables.product.product_location %}. The resulting {% data variables.product.prodname_code_scanning %} alerts are shown alongside any alerts generated within {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Security
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### About {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in your CI system

{% data reusables.code-scanning.about-code-scanning %} Para obtener más información, consulta la sección "[Acerca del {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)".

You can run {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} within {% data variables.product.product_name %} using actions. Alternatively, if you use a third-party continuous integration or continuous delivery/deployment (CI/CD) system, you can run {% data variables.product.prodname_codeql %} analysis in your existing system and upload the results to {% data variables.product.product_location %}.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
You add the {% data variables.product.prodname_codeql_cli %} or the {% data variables.product.prodname_codeql_runner %} to your third-party system, then call the tool to analyze code and upload the SARIF results to {% data variables.product.product_name %}. The resulting {% data variables.product.prodname_code_scanning %} alerts are shown alongside any alerts generated within {% data variables.product.product_name %}.

{% data reusables.code-scanning.upload-sarif-ghas %}

### Comparing {% data variables.product.prodname_codeql_cli %} and {% data variables.product.prodname_codeql_runner %}

{% data reusables.code-scanning.what-is-codeql-cli %}

The {% data variables.product.prodname_codeql_runner %} is a command-line tool that uses the {% data variables.product.prodname_codeql_cli %} to analyze code and upload the results to {% data variables.product.product_name %}. The tool mimics the analysis run natively within {% data variables.product.product_name %} using actions. The runner is able to integrate with more complex build environments than the CLI, but this ability makes it more difficult and error-prone to set up. It is also more difficult to debug any problems. Generally, it is better to use the {% data variables.product.prodname_codeql_cli %} directly unless it doesn't support your use case.

Use the {% data variables.product.prodname_codeql_cli %} to analyze:

- Dynamic languages, for example, JavaScript and Python.
- Codebases with a compiled language that can be built with a single command or by running a single script.

Para obtener más información, consulta la sección "[Ejecutar el {% data variables.product.prodname_codeql_cli %} en tu sistema de IC](/code-security/secure-coding/running-codeql-cli-in-your-ci-system)".

{% if currentVersion == "free-pro-team@latest" %}
If you need to set up the CI system to orchestrate compiler invocations as well as running {% data variables.product.prodname_codeql %} analysis, you must use the {% data variables.product.prodname_codeql_runner %}.
{% else %}
You will need to use the {% data variables.product.prodname_codeql_runner %} if you need to:
- Set up the CI system to orchestrate compiler invocations as well as running {% data variables.product.prodname_codeql %} analysis.
- Analyze more than one language in a repository.
{% endif %}

{% data reusables.code-scanning.beta-codeql-runner %}

Para obtener más información, consulta la sección "[Ejecutar el {% data variables.product.prodname_codeql_runner %} en tu sistema de IC](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)".

{% else %}

{% data reusables.code-scanning.upload-sarif-ghas %}

You add the {% data variables.product.prodname_codeql_runner %} to your third-party system, then call the tool to analyze code and upload the SARIF results to {% data variables.product.product_name %}. The resulting {% data variables.product.prodname_code_scanning %} alerts are shown alongside any alerts generated within {% data variables.product.product_name %}.

{% data reusables.code-scanning.beta-codeql-runner %}

To set up code scanning in your CI system, see "[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)."
{% endif %}
