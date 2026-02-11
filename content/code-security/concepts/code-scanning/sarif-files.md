---
title: About SARIF files for code scanning
shortTitle: SARIF files
intro: SARIF files convert third-party analyses into alerts on {% data variables.product.github %}.
topics:
  - Code Security
  - Code scanning
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: concepts
---

>[!NOTE] If you use default setup for {% data variables.product.prodname_code_scanning %}, or an advanced setup that involves using {% data variables.product.prodname_actions %} to run the {% data variables.product.prodname_codeql %} action, then you don't need to interact with SARIF files. Scan results are uploaded and parsed as {% data variables.product.prodname_code_scanning %} alerts automatically.

SARIF stands for _Static Analysis Results Interchange Format_. This is a JSON-based standard for storing results from static analysis tools.

If you use a **third-party analysis tool or CI/CD system** to scan code for vulnerabilities, you can generate a SARIF file and upload it to {% data variables.product.github %}. {% data variables.product.github %} will parse the SARIF file and show alerts using the results in your repository as a part of the {% data variables.product.prodname_code_scanning %} experience.

{% data variables.product.github %} uses properties in the SARIF file to display alerts. For example, the `shortDescription` and `fullDescription` appear at the top of a {% data variables.product.prodname_code_scanning %} alert. The `location` allows {% data variables.product.github %} to show annotations in your code file.

This article explains how SARIF files are used on {% data variables.product.github %}. If you're new to SARIF and want to learn more, see Microsoft's [`SARIF tutorials`](https://github.com/microsoft/sarif-tutorials) repository.

## Version requirements

{% data variables.product.prodname_code_scanning_caps %} supports a subset of the [SARIF 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html) JSON schema. Ensure that SARIF files from third-party tools use this version.

## Upload methods

You can upload a SARIF file using {% data variables.product.prodname_actions %}, the {% data variables.product.prodname_code_scanning %} API, or the {% data variables.product.prodname_codeql_cli %}. The best upload method depends on how you generate the SARIF file. For more information, see [AUTOTITLE](/code-security/how-tos/scan-code-for-vulnerabilities/integrate-with-existing-tools/uploading-a-sarif-file-to-github).
