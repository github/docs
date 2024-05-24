---
title: About the CodeQL CLI
intro: 'You can use the {% data variables.product.prodname_codeql_cli %} to run {% data variables.product.prodname_codeql %} processes locally on software projects or to generate {% data variables.product.prodname_code_scanning %} results for upload to {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
redirect_from:
  - /code-security/codeql-cli/about-the-codeql-cli
  - /code-security/codeql-cli/using-the-codeql-cli/about-the-codeql-cli
  - /code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system
  - /code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-runner-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-codeql-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/using-codeql-code-scanning-with-your-existing-ci-system/troubleshooting-codeql-code-scanning-in-your-ci-system
  - /code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli
  - /code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system
---

Software developers and security researchers can secure their code
using {% data variables.product.prodname_codeql %} analysis. For more information about {% data variables.product.prodname_codeql %}, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql#about-codeql)."

{% data reusables.code-scanning.what-is-codeql-cli %}

You can use the {% data variables.product.prodname_codeql_cli %} to:

- Run {% data variables.product.prodname_codeql %} analyses using queries provided by {% data variables.product.prodname_dotcom %} engineers and the open source community
- Generate code scanning alerts that you can upload to display in {% data variables.product.product_name %}
- Create {% data variables.product.prodname_codeql %} databases to use in the {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} extension.
- Develop and test custom {% data variables.product.prodname_codeql %} queries to use in your own analyses

The {% data variables.product.prodname_codeql_cli %} can analyze:

- Dynamic languages, for example, JavaScript and Python.
- Compiled languages, for example, {% data variables.code-scanning.compiled_languages %}
- Codebases written in a mixture of languages.

For information about setting up the {% data variables.product.prodname_codeql_cli %}, see
"[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/setting-up-the-codeql-cli)."

## About using the {% data variables.product.prodname_codeql_cli %} for {% data variables.product.prodname_code_scanning %}

You can use the {% data variables.product.prodname_codeql_cli %} to run {% data variables.product.prodname_code_scanning %} on code that you're processing in a third-party continuous integration (CI) system. {% data reusables.code-scanning.about-code-scanning %} For an overview of using code scanning with external CI systems, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system)." For recommended specifications (RAM, CPU cores, and disk) for running {% data variables.product.prodname_codeql %} analysis, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql)."

Alternatively, you can use {% data variables.product.prodname_actions %} or Azure DevOps pipelines to scan code using the {% data variables.product.prodname_codeql_cli %}. For more information, see {% ifversion code-scanning-without-workflow %}"[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)"{% else %}"[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)"{% endif %} or [Configure {% data variables.product.prodname_ghas_azdo %}](https://learn.microsoft.com/en-us/azure/devops/repos/security/configure-github-advanced-security-features) in Microsoft Learn.

For an overview of all the options for using {% data variables.product.prodname_codeql %} analysis for code scanning, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql)."

{% data reusables.code-scanning.licensing-note %}

## About generating code scanning results with the {% data variables.product.prodname_codeql_cli %}

If you choose to run the {% data variables.product.prodname_codeql_cli %} directly, you first have to install the {% data variables.product.prodname_codeql_cli %} locally. If you are planning to use the {% data variables.product.prodname_codeql_cli %} with an external CI system, you need to make the {% data variables.product.prodname_codeql_cli %} available to servers in your CI system. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/setting-up-the-codeql-cli)."

Once the {% data variables.product.prodname_codeql_cli %} is set up, you can use three different commands to generate results and upload them to {% data variables.product.product_name %}:

1. `database create` to create a {% data variables.product.prodname_codeql %} database to represent the hierarchical structure of each supported programming language in the repository. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/preparing-your-code-for-codeql-analysis)."
1. `database analyze` to run queries to analyze each {% data variables.product.prodname_codeql %} database and summarize the results in a SARIF file. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/analyzing-your-code-with-codeql-queries)."
1. `github upload-results` to upload the resulting SARIF files to {% data variables.product.product_name %} where the results are matched to a branch or pull request and displayed as {% data variables.product.prodname_code_scanning %} alerts. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/uploading-codeql-analysis-results-to-github)."

{% data reusables.code-scanning.upload-sarif-ghas %}

### Example CI configuration for {% data variables.product.prodname_codeql %} analysis

This is an example of the full series of commands for the {% data variables.product.prodname_codeql_cli %} that you might use to analyze a codebase with two supported languages and then upload the results to {% data variables.product.product_name %}.

```shell
# Create CodeQL databases for Java and Python in the 'codeql-dbs' directory
# Call the normal build script for the codebase: 'myBuildScript'

codeql database create codeql-dbs --source-root=src \
    --db-cluster --language=java,python --command=./myBuildScript

# Analyze the CodeQL database for Java, 'codeql-dbs/java'
# Tag the data as 'java' results and store in: 'java-results.sarif'

codeql database analyze codeql-dbs/java java-code-scanning.qls \
    --format=sarif-latest --sarif-category=java --output=java-results.sarif

# Analyze the CodeQL database for Python, 'codeql-dbs/python'
# Tag the data as 'python' results and store in: 'python-results.sarif'

codeql database analyze codeql-dbs/python python-code-scanning.qls \
    --format=sarif-latest --sarif-category=python --output=python-results.sarif

# Upload the SARIF file with the Java results: 'java-results.sarif'
# The {% data variables.product.prodname_github_app %} or {% data variables.product.pat_generic %} created for authentication
# with {% data variables.product.company_short %}'s REST API is available in the `GITHUB_TOKEN` environment variable.

codeql github upload-results \
    --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=java-results.sarif

# Upload the SARIF file with the Python results: 'python-results.sarif'

codeql github upload-results \
    --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=python-results.sarif
```

{% data reusables.code-scanning.codeql-license %}
