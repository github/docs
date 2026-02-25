---
title: Multi-repository variant analysis
intro: MRVA lets you test a query in {% data variables.product.prodname_vscode %} by running it against a large number of repositories.
topics:
  - Code Security
  - Code scanning
versions:
  feature: codeql-vs-code-mrva
contentType: concepts
---

## About MRVA

With multi-repository variant analysis (MRVA), you can run {% data variables.product.prodname_codeql %} queries on a list of up to 1,000 repositories on {% data variables.product.github %} from {% data variables.product.prodname_vscode %}.

When you run MRVA against a list of repositories, your query is run against each repository that has a {% data variables.product.prodname_codeql %} database available to analyze. {% data variables.product.github %} creates and stores the latest {% data variables.product.prodname_codeql %} database for the default branch of thousands of public repositories, including every repository that runs {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_codeql %}.

## How MRVA runs queries

When you run MRVA, the analysis is run entirely using {% data variables.product.prodname_actions %}. You don't need to create any workflows, but you must specify which repository the {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} extension should use as a controller repository. As the analysis of each repository completes, the results are sent to {% data variables.product.prodname_vscode_shortname %} for you to view.

The {% data variables.product.prodname_codeql %} extension builds a {% data variables.product.prodname_codeql %} pack with your library and any library dependencies. The {% data variables.product.prodname_codeql %} pack and your selected repository list are posted to an API endpoint on {% data variables.product.github %}, which triggers a {% data variables.product.prodname_actions %} dynamic workflow in your controller repository. The workflow spins up multiple parallel jobs to execute the {% data variables.product.prodname_codeql %} query against the repositories in the list, optimizing query execution. As each repository is analyzed, the results are processed and displayed in {% data variables.product.prodname_vscode_shortname %}.

## Next steps

To get started, see [AUTOTITLE](/code-security/how-tos/scan-code-for-vulnerabilities/scan-from-vs-code/running-codeql-queries-at-scale-with-multi-repository-variant-analysis).
