---
title: Logs are not detailed enough
shortTitle: Logs not detailed enough
intro: 'If you''d like to increase the level of detail in your logs, try these steps.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/code-scanning/troubleshooting-code-scanning/logs-are-not-detailed-enough
---

If your logs are not detailed enough, there are several steps you can take to make them more useful.

## Enable step debug logging

You can enable step debug logging in {% data variables.product.prodname_actions %} to increase the verbosity of a job's logs during and after a job's execution. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging#enabling-step-debug-logging)."

## Creating {% data variables.product.prodname_codeql %} debugging artifacts

You can obtain artifacts to help you debug {% data variables.product.prodname_codeql %}.
The debug artifacts will be uploaded to the workflow run as an artifact named `debug-artifacts`. The data contains the {% data variables.product.prodname_codeql %} logs, {% data variables.product.prodname_codeql %} database(s), extracted source code files, and any SARIF file(s) produced by the workflow. For more information about downloading {% data variables.product.prodname_codeql %} artifacts, see "[AUTOTITLE](/actions/managing-workflow-runs/downloading-workflow-artifacts)."

These artifacts will help you debug problems with {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. If you contact GitHub support, they might ask for this data.

{% ifversion codeql-action-debug-logging %}

### Creating {% data variables.product.prodname_codeql %} debugging artifacts by re-running jobs with debug logging enabled

You can create {% data variables.product.prodname_codeql %} debugging artifacts by enabling debug logging and re-running the jobs. For more information about re-running {% data variables.product.prodname_actions %} workflows and jobs, see "[AUTOTITLE](/actions/managing-workflow-runs/re-running-workflows-and-jobs)."

You need to ensure that you select **Enable debug logging**. This option enables runner diagnostic logging and step debug logging for the run. You'll then be able to download `debug-artifacts` to investigate further. You do not need to modify the workflow file when creating {% data variables.product.prodname_codeql %} debugging artifacts by re-running jobs.

{% endif %}

### Creating {% data variables.product.prodname_codeql %} debugging artifacts using a workflow flag

You can create {% data variables.product.prodname_codeql %} debugging artifacts by using a flag in your workflow. For this, you need to modify the `init` step of your {% data variables.code-scanning.codeql_workflow %} file and set `debug: true`.

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```
