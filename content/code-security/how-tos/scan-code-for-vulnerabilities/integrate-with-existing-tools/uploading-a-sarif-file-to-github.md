---
title: Uploading a SARIF file to GitHub
shortTitle: Upload a SARIF file
intro: '{% data reusables.code-scanning.you-can-upload-third-party-analysis %}'
permissions: '{% data reusables.permissions.code-scanning-all-alerts %}'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/uploading-a-code-scanning-analysis-to-github
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/integrating-with-code-scanning/uploading-a-sarif-file-to-github
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/integrating-with-code-scanning/uploading-a-sarif-file-to-github
  - /code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Code Security
  - Code scanning
  - Integration
  - Actions
  - Repositories
  - CI
  - SARIF
contentType: how-tos
---

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

If you use a third-party analysis tool or CI/CD system to scan code for vulnerabilities, you can generate SARIF file and upload it to {% data variables.product.github %}. The best upload method depends on how you generate the SARIF file.

For example, if you use:

* {% data variables.product.prodname_actions %} to run the {% data variables.product.prodname_codeql %} action, there is no further action required. The {% data variables.product.prodname_codeql %} action uploads the SARIF file automatically when it completes analysis.
* {% data variables.product.prodname_actions %} to run a SARIF-compatible analysis tool, you could update the workflow to include a final step that uploads the results. See [Uploading a {% data variables.product.prodname_code_scanning %} analysis with {% data variables.product.prodname_actions %}](#uploading-a-code-scanning-analysis-with-github-actions).
* The {% data variables.product.prodname_codeql_cli %} to run {% data variables.product.prodname_code_scanning %} in your CI system, you can use the CLI to upload results to {% data variables.product.prodname_dotcom %}. See [AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system).
* A tool that generates results as an artifact outside of your repository, you can use the {% data variables.product.prodname_code_scanning %} API to upload the file. See [AUTOTITLE](/rest/code-scanning/code-scanning#upload-an-analysis-as-sarif-data).

By default, {% data variables.product.prodname_code_scanning %} expects one SARIF results file per analysis for a repository. If you want to upload more than one set of results for a commit in a repository, you must identify each set of results as a unique set.

{% ifversion fpt or ghec %}

> [!NOTE]
> For private and internal repositories, {% data variables.product.prodname_code_scanning %} is available when {% data variables.product.prodname_GH_code_security %} features are enabled for the repository. If you see the error `{% data variables.product.prodname_GHAS_or_code_security %} must be enabled for this repository to use code scanning`, check that {% data variables.product.prodname_GH_code_security %} is enabled. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository).

{% endif %}

## Uploading a {% data variables.product.prodname_code_scanning %} analysis with {% data variables.product.prodname_actions %}

To use {% data variables.product.prodname_actions %} to upload a third-party SARIF file to a repository, you'll need a workflow. For more information, see [AUTOTITLE](/actions/learn-github-actions).

Your workflow will need to use the `upload-sarif` action, which is part of the `github/codeql-action` repository. It has input parameters that you can use to configure the upload. The main input parameters you'll use are:

* `sarif_file`, which configures the file or directory of SARIF files to be uploaded. The directory or file path is relative to the root of the repository.
* `category` (optional), which assigns a category for results in the SARIF file. This enables you to analyze the same commit in multiple ways and review the results using the {% data variables.product.prodname_code_scanning %} views in {% data variables.product.prodname_dotcom %}. For example, you can analyze using multiple tools, and in mono-repos, you can analyze different slices of the repository based on the subset of changed files.

For more information, see the [`upload-sarif` action](https://github.com/github/codeql-action/tree/v4/upload-sarif).

The `upload-sarif` action can be configured to run when the `push` and `scheduled` event occur. For more information about {% data variables.product.prodname_actions %} events, see [AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows).

If your SARIF file doesn't include `partialFingerprints`, the `upload-sarif` action will calculate the `partialFingerprints` field for you and attempt to prevent duplicate alerts. {% data variables.product.prodname_dotcom %} can only create `partialFingerprints` when the repository contains both the SARIF file and the source code used in the static analysis. For more information about preventing duplicate alerts, see [AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#data-for-preventing-duplicated-alerts).

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Example workflow for SARIF files generated outside of a repository

You can create a new workflow that uploads SARIF files after you commit them to your repository. This is useful when the SARIF file is generated as an artifact outside of your repository.

This example workflow runs anytime commits are pushed to the repository. The action uses the `partialFingerprints` property to determine if changes have occurred. In addition to running when commits are pushed, the workflow is scheduled to run once per week. For more information, see [AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows).

This workflow uploads the `results.sarif` file located in the root of the repository. For more information about creating a workflow file, see [AUTOTITLE](/actions/learn-github-actions).

Alternatively, you could modify this workflow to upload a directory of SARIF files. For example, you could place all SARIF files in a directory in the root of your repository called `sarif-output` and set the action's input parameter `sarif_file` to `sarif-output`. Note that if you upload a directory, each SARIF file must include a unique `runAutomationDetails.id` to define the category for the results. For more information, see [AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#runautomationdetails-object).

```yaml
name: "Upload SARIF"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Thursday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 4'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      # This step checks out a copy of your repository.
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Upload SARIF file
        uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
          # Optional category for the results
          # Used to differentiate multiple results for one commit
          category: my-analysis-tool
```

### Example workflow that runs the ESLint analysis tool

If you generate your third-party SARIF file as part of a continuous integration (CI) workflow, you can add the `upload-sarif` action as a step after running your CI tests. If you don't already have a CI workflow, you can create one using a {% data variables.product.prodname_actions %} template. For more information, see the [AUTOTITLE](/actions/quickstart).

This example workflow runs anytime commits are pushed to the repository. The action uses the `partialFingerprints` property to determine if changes have occurred. In addition to running when commits are pushed, the workflow is scheduled to run once per week. For more information, see [AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows).

The workflow shows an example of running the ESLint static analysis tool as a step in a workflow. The `Run ESLint` step runs the ESLint tool and outputs the `results.sarif` file. The workflow then uploads the `results.sarif` file to {% data variables.product.prodname_dotcom %} using the `upload-sarif` action. For more information about creating a workflow file, see [AUTOTITLE](/actions/learn-github-actions/understanding-github-actions).

```yaml
name: "ESLint analysis"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Wednesday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 3'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run npm install
        run: npm install
      # Runs the ESlint code analysis
      - name: Run ESLint
        # eslint exits 1 if it finds anything to report
        run: node_modules/.bin/eslint build docs lib script spec-main -f node_modules/@microsoft/eslint-formatter-sarif/sarif.js -o results.sarif || true
      # Uploads results.sarif to GitHub repository using the upload-sarif action
      - uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
```

## Uploading more than one SARIF file for a commit

By default, {% data variables.product.prodname_code_scanning %} expects one SARIF results file per analysis for a repository. Consequently, when you upload a second SARIF results file for a commit, it is treated as a replacement for the original set of data. You may want to upload two different SARIF files for one analysis if, for example, your analysis tool generates a different SARIF file for each language it analyzes or each set of rules it uses. If you want to upload more than one set of results for a commit in a repository, you must identify each set of results as a unique set.

When you upload multiple SARIF files for a commit, you must indicate a "category" for each analysis. The way to specify a category varies according to the analysis method:
* Using the {% data variables.product.prodname_codeql_cli %} directly, pass the `--sarif-category` argument to the `codeql database analyze` command when you generate SARIF files. For more information, see [AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/about-the-codeql-cli#about-generating-code-scanning-results-with-the-codeql-cli).
* Using {% data variables.product.prodname_actions %} with `codeql-action/analyze`, the category is set automatically from the workflow name and any matrix variables (typically, `language`). You can override this by specifying a `category` input for the action, which is useful when you analyze different sections of a monorepo in a single workflow.
* Using {% data variables.product.prodname_actions %} to upload results from other static analysis tools, then you must specify a `category` input if you upload more than one file of results for the same tool in one workflow. For more information, see [AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions).
* If you are not using either of these approaches, you must specify a unique `runAutomationDetails.id` in each SARIF file to upload. For more information about this property, see [`runAutomationDetails` object](#runautomationdetails-object).

If you upload a second SARIF file for a commit with the same category and from the same tool, the earlier results are overwritten. However, if you try to upload multiple SARIF files for the same tool and category in a single {% data variables.product.prodname_actions %} workflow run, the misconfiguration is detected and the run will fail.

## Further reading

* [AUTOTITLE](/code-security/how-tos/scan-code-for-vulnerabilities/troubleshooting/troubleshooting-sarif-uploads)
* [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions)
* [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)
* [AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system)
* [AUTOTITLE](/rest/code-scanning/code-scanning#upload-an-analysis-as-sarif-data)
