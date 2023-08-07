---
title: About the CodeQL CLI
intro: 'You can use the {% data variables.product.prodname_codeql_cli %} to run {% data variables.product.prodname_codeql %} processes locally on software projects or to generate {% data variables.product.prodname_code_scanning %} results for upload to {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
redirect_from:
  - /code-security/codeql-cli/about-the-codeql-cli
  - /code-security/codeql-cli/using-the-codeql-cli/about-the-codeql-cli
---

## About the {% data variables.product.prodname_codeql_cli %}

Software developers and security researchers can secure their code
using {% data variables.product.prodname_codeql %} analysis. For more information about {% data variables.product.prodname_codeql %}, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql)."

{% data reusables.code-scanning.what-is-codeql-cli %}

You can use the {% data variables.product.prodname_codeql_cli %} to:

- Run {% data variables.product.prodname_codeql %} analyses using queries provided by {% data variables.product.prodname_dotcom %} engineers and the open source community
- Generate code scanning alerts that you can upload to display in {% data variables.product.product_name %}
- Create {% data variables.product.prodname_codeql %} databases to use in the {% data variables.product.prodname_codeql %} for Visual Studio Code extension. 
- Develop and test custom {% data variables.product.prodname_codeql %} queries to use in your own analyses

The {% data variables.product.prodname_codeql_cli %} can analyze:

- Dynamic languages, for example, JavaScript and Python.
- Compiled languages, for example, C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} and Java.
- Codebases written in a mixture of languages.

For information about setting up the {% data variables.product.prodname_codeql_cli %}, see
"[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/setting-up-the-codeql-cli)."

For information about using the {% data variables.product.prodname_codeql_cli %} in a third-party CI system to create results to display in {% data variables.product.prodname_dotcom %} as code scanning alerts, see [Configuring {% data variables.product.prodname_codeql_cli %} in your CI system](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system). For information about enabling {% data variables.product.prodname_codeql %} code scanning using {% data variables.product.prodname_actions %}, see {% ifversion code-scanning-without-workflow %}"[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-default-setup-for-code-scanning)" and {% endif %}"[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-advanced-setup-for-code-scanning)."

## About using the {% data variables.product.prodname_codeql_cli %} for {% data variables.product.prodname_code_scanning %}

You can use the {% data variables.product.prodname_codeql_cli %} to run {% data variables.product.prodname_code_scanning %} on code that you're processing in a third-party continuous integration (CI) system. {% data reusables.code-scanning.about-code-scanning %} For an overview of the options for CI systems, see "[AUTOTITLE](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)." For recommended specifications (RAM, CPU cores, and disk) for running {% data variables.product.prodname_codeql %} analysis, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql)."

Alternatively, you can use {% data variables.product.prodname_actions %} or Azure DevOps pipelines to scan code using the {% data variables.product.prodname_codeql_cli %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository)" or [Configure {% data variables.product.prodname_ghas_azdo %}](https://learn.microsoft.com/en-us/azure/devops/repos/security/configure-github-advanced-security-features) in Microsoft Learn.

For an overview of all the options for using {% data variables.product.prodname_codeql %} analysis for code scanning, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)."

{% data reusables.code-scanning.licensing-note %}

## About generating code scanning results with {% data variables.product.prodname_codeql_cli %}

If you choose to run the {% data variables.product.prodname_codeql_cli %} directly, you first have to install the {% data variables.product.prodname_codeql_cli %} locally. If you are planning to use the {% data variables.product.prodname_codeql_cli %} with an external CI system, you need to make the {% data variables.product.prodname_codeql_cli %} available to servers in your CI system, and ensure that they can authenticate with {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/setting-up-the-codeql-cli)."

Once the {% data variables.product.prodname_codeql_cli %} is set up, you can use three different commands to generate results and upload them to {% data variables.product.product_name %}:

1. `database create` to create a {% data variables.product.prodname_codeql %} database to represent the hierarchical structure of each supported programming language in the repository. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/preparing-your-code-for-codeql-analysis)."
2. `database analyze` to run queries to analyze each {% data variables.product.prodname_codeql %} database and summarize the results in a SARIF file. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/analyzing-your-code-with-codeql-queries)."
3. `github upload-results` to upload the resulting SARIF files to {% data variables.product.product_name %} where the results are matched to a branch or pull request and displayed as {% data variables.product.prodname_code_scanning %} alerts. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/uploading-codeql-analysis-results-to-github)."

## About the {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_codeql %} license

**License notice:** If you don’t have a {% data variables.product.prodname_enterprise %} license then, by installing this product, you are agreeing to the [{% data variables.product.prodname_dotcom %} {% data variables.product.prodname_codeql %} Terms and Conditions](https://securitylab.github.com/tools/codeql/license).

{% data variables.product.prodname_dotcom %} {% data variables.product.prodname_codeql %} is licensed on a per-user basis. Under the license restrictions, you can use {% data variables.product.prodname_codeql %} to perform the following tasks:

- To perform academic research.
- To demonstrate the software.
- To test {% data variables.product.prodname_codeql %} queries that are released under an OSI-approved License to confirm that new versions of those queries continue to find the right vulnerabilities.

Where "OSI-approved License" means an Open Source Initiative (OSI)-approved open source software license.

If you are working with an Open Source Codebase (that is, a codebase that is released under an OSI-approved License) you can also use {% data variables.product.prodname_codeql %} for the following tasks:

- To perform analysis of the Open Source Codebase.
- If the Open Source Codebase is hosted and maintained on {% data variables.product.prodname_dotcom_the_website %}, to generate {% data variables.product.prodname_codeql %} databases for or during automated analysis, continuous integration, or continuous delivery.

{% data variables.product.prodname_codeql %} can’t be used for automated analysis, continuous integration or continuous delivery, whether as part of normal software engineering processes or otherwise, except in the express cases set forth herein. For these uses, contact the [sales team](https://enterprise.github.com/contact).
