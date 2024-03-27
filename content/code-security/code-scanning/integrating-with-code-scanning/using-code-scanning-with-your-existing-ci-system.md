---
title: Using code scanning with your existing CI system
intro: 'You can analyze your code with the {% data variables.product.prodname_codeql_cli %} or another tool in a third-party continuous integration system and upload the results to {% data variables.location.product_location %}. The resulting {% data variables.product.prodname_code_scanning %} alerts are shown alongside any alerts generated within {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/using-codeql-code-scanning-with-your-existing-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system
  - /code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
---

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## About using {% data variables.product.prodname_code_scanning %} with your existing CI system

As an alternative to running {% data variables.product.prodname_code_scanning %} within {% data variables.product.prodname_dotcom %} using {% data variables.product.prodname_actions %}, you can analyze code in an external continuous integration or continuous delivery/deployment (CI/CD) system, then upload the results to {% data variables.product.product_name %}.

You can add the {% data variables.product.prodname_codeql_cli %} to your third-party system, or use another third-party static analysis tool that can produce results as Static Analysis Results Interchange Format (SARIF) 2.1.0 data. For more information about the supported SARIF format, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning)."

The {% data variables.product.prodname_codeql_cli %} is a standalone, command-line tool that you can use to analyze code. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/about-the-codeql-cli)."

Alerts for {% data variables.product.prodname_code_scanning %} that you generate externally are displayed in the same way as those for  {% data variables.product.prodname_code_scanning %} that you generate within {% data variables.product.prodname_dotcom %}. {% data reusables.code-scanning.about-multiple-configurations-link %}

{% data reusables.code-scanning.upload-sarif-ghas %}

## Setting up your analysis tool

You will first need to download your analysis tool of choice and set it up with your CI system.

If you are using the {% data variables.product.prodname_codeql_cli %}, you need to make the full contents of the {% data variables.product.prodname_codeql_cli %} bundle available to every CI server that you want to run {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} analysis on.  For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/setting-up-the-codeql-cli)."

Once you've made your analysis tool available to servers in your CI system, you're ready to generate data.

## Analyzing code

To analyze code with the {% data variables.product.prodname_codeql_cli %} or another analysis tool, you will want to check out the code you want to analyze and set up the codebase environment, making sure that any dependencies are available. You may also want to find the build command for the codebase, typically available in your CI system's configuration file.

You can then complete the steps to analyze your codebase and produce results, which will differ based on the static analysis tool you are using.

If you are using the {% data variables.product.prodname_codeql_cli %}, you will first need to create a {% data variables.product.prodname_codeql %} database from your code, then analyze the database to produce SARIF results. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/preparing-your-code-for-codeql-analysis)" and "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/analyzing-your-code-with-codeql-queries)."

## Generating a token for authentication with {% data variables.product.product_name %}

Each CI server needs a {% data variables.product.prodname_github_app %} or {% data variables.product.pat_generic %} to use to upload results to {% data variables.product.product_name %}, whether you are using the {% data variables.product.prodname_codeql_cli %}, the REST API, or another method. You must use an access token or a {% data variables.product.prodname_github_app %} with the `security_events` write permission. If CI servers already use a token with this scope to checkout repositories from {% data variables.product.product_name %}, you could potentially use the same token. Otherwise, you should create a new token with the `security_events` write permission and add this to the CI system's secret store. For information, see "[AUTOTITLE](/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps)" and "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

For more information on the different methods for uploading results to {% data variables.product.product_name %}, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github)."

## Uploading your results to {% data variables.product.product_name %}

Once you have analyzed your code, produced SARIF results, and ensured you can authenticate with {% data variables.product.product_name %}, you can upload the results to {% data variables.product.product_name %}. For more information on the different methods you can use to upload your results, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github)."

For specific details on uploading your results to {% data variables.product.product_name %} using the {% data variables.product.prodname_codeql_cli %}, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/uploading-codeql-analysis-results-to-github)."

By default, {% data variables.product.prodname_code_scanning %} expects one SARIF results file per analysis for a repository. Consequently, when you upload a second SARIF results file for a commit, it is treated as a replacement for the original set of data. You may want to upload two different SARIF files for one analysis if, for example, your analysis tool generates a different SARIF file for each language it analyzes or each set of rules it uses. If you want to upload more than one set of results for a commit in a repository, you must identify each set of results as a unique set. The way to specify a category for a SARIF upload varies according to the analysis method. For more information, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#uploading-more-than-one-sarif-file-for-a-commit)."
