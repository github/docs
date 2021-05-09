---
title: Uploading a SARIF file to GitHub
shortTitle: Uploading a SARIF file
intro: '{% data reusables.code-scanning.you-can-upload-third-party-analysis %}'
permissions: 'People with write permissions to a repository can upload {% data variables.product.prodname_code_scanning %} data generated outside {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  enterprise-server: '2.22'
topics:
  - Security
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### About SARIF file uploads for {% data variables.product.prodname_code_scanning %}

If your SARIF file doesn't include `partialFingerprints`, the `upload-sarif` action will calculate the `partialFingerprints` field for you and attempt to prevent duplicate alerts. {% data variables.product.prodname_dotcom %} can only create `partialFingerprints` when the repository contains both the SARIF file and the source code used in the static analysis. For more information, see "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)."

You can generate SARIF files using many static analysis security testing tools, including {% data variables.product.prodname_codeql %}. To upload results from third-party tools, you must use the Static Analysis Results Interchange Format (SARIF) 2.1.0 format. For more information, see "[SARIF support for {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning)."

You can upload the results using {% data variables.product.prodname_actions %}{% if currentVersion == "enterprise-server@2.22" %} (available if your organization is taking part in the beta program){% endif %}, the {% data variables.product.prodname_code_scanning %} API, or the {% data variables.product.prodname_codeql_runner %}. The best upload method will depend on how you generate the SARIF file, for example, if you use:

- {% data variables.product.prodname_actions %} to run the {% data variables.product.prodname_codeql %} action, there is no further action required. The {% data variables.product.prodname_codeql %} action uploads the SARIF file automatically when it completes analysis.
- „[Einen Workflow-Lauf verwalten](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-your-workflow-history)“
- {% data variables.product.prodname_dotcom %} will display {% data variables.product.prodname_code_scanning %} alerts from the uploaded SARIF file in your repository. If you block the automatic upload, when you are ready to upload results you can use the `upload` command (for more information, see "[Running {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)").
- A tool that generates results as an artifact outside of your repository, you can use the {% data variables.product.prodname_code_scanning %} API to upload the file (for more information, see "[Upload an analysis as SARIF data](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)").

{% data reusables.code-scanning.not-available %}

### Uploading a {% data variables.product.prodname_code_scanning %} analysis with {% data variables.product.prodname_actions %}

To upload a third-party SARIF file to {% data variables.product.prodname_dotcom %}, you'll need a {% data variables.product.prodname_actions %} workflow. For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)" and "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

Your workflow will need to use the `upload-sarif` action, which has input parameters that you can use to configure the upload. It has input parameters that you can use to configure the upload. The main input parameter you'll use is `sarif-file`, which configures the file or directory of SARIF files to be uploaded. The directory or file path is relative to the root of the repository. For more information see the [`upload-sarif` action](https://github.com/github/codeql-action/tree/HEAD/upload-sarif).

The `upload-sarif` action can be configured to run when the `push` and `scheduled` event occur. For more information about {% data variables.product.prodname_actions %}  events, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows)."

If your SARIF file doesn't include `partialFingerprints`, the `upload-sarif` action will calculate the `partialFingerprints` field for you and attempt to prevent duplicate alerts. {% data variables.product.prodname_dotcom %} can only create `partialFingerprints` when the repository contains both the SARIF file and the source code used in the static analysis. For more information about preventing duplicate alerts, see "[SARIF support for {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning#preventing-duplicate-alerts-using-fingerprints)."

{% data reusables.code-scanning.upload-sarif-alert-limit %}

#### Example workflow for SARIF files generated outside of a repository

You can create a new workflow that uploads SARIF files after you commit them to your repository. This is useful when the SARIF file is generated as an artifact outside of your repository.

This example workflow runs anytime commits are pushed to the repository. The action uses the `partialFingerprints` property to determine if changes have occurred. In addition to running when commits are pushed, the workflow is scheduled to run once per week. Weitere Informationen findest Du unter "[Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows)."

This workflow uploads the `results.sarif` file located in the root of the repository. For more information about creating a workflow file, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

Alternatively, you could modify this workflow to upload a directory of SARIF files. For example, you could place all SARIF files in a directory in the root of your repository called `sarif-output` and set the action's input parameter `sarif_file` to `sarif-output`.

```yaml
name: "Upload SARIF"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Friday at 15:45 UTC.
on:
  push:
  schedule:
  - cron: '45 15 * * 5'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    # This step checks out a copy of your repository.
    - name: Checkout repository
      uses: actions/checkout@v2
    - name: Upload SARIF file
      uses: github/codeql-action/upload-sarif@v1
      with:
        # Path to SARIF file relative to the root of the repository
        sarif_file: results.sarif
```

#### Example workflow that runs the ESLint analysis tool

If you generate your third-party SARIF file as part of a continuous integration (CI) workflow, you can add the `upload-sarif` action as a step after running your CI tests. If you don't already have a CI workflow, you can create one using a {% data variables.product.prodname_actions %} template. For more information, see the "[{% data variables.product.prodname_actions %} quickstart](/actions/quickstart)."

This example workflow runs anytime commits are pushed to the repository. The action uses the `partialFingerprints` property to determine if changes have occurred. In addition to running when commits are pushed, the workflow is scheduled to run once per week. Weitere Informationen findest Du unter "[Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows)."

The workflow shows an example of running the ESLint static analysis tool as a step in a workflow. The `Run ESLint` step runs the ESLint tool and outputs the `results.sarif` file. The workflow then uploads the `results.sarif` file to {% data variables.product.prodname_dotcom %} using the `upload-sarif` action. For more information about creating a workflow file, see "[Introduction to GitHub Actions](/actions/learn-github-actions/introduction-to-github-actions)."

```yml
name: "ESLint analysis"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Monday at 15:45 UTC.
on:
  push:
  schedule:
  - cron: '45 15 * * 1'

jobs:
  build:
    steps:
    - uses: actions/checkout@v2
    - name: Run npm install
      run: npm install
    # Runs the ESlint code analysis
    - name: Run ESLint
      # eslint exits 1 if it finds anything to report
      run: node_modules/.bin/eslint build docs lib script spec-main -f node_modules/@microsoft/eslint-formatter-sarif/sarif.js -o results.sarif || true
    # Uploads results.sarif to GitHub repository using the upload-sarif action
    - uses: github/codeql-action/upload-sarif@v1
      with:
        # Path to SARIF file relative to the root of the repository
        sarif_file: results.sarif
```

### Weiterführende Informationen

- „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)“
- "[Viewing your workflow history](/actions/managing-workflow-runs/viewing-workflow-run-history)"
- "[Running {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)"
- "[Upload an analysis as SARIF data](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)"
