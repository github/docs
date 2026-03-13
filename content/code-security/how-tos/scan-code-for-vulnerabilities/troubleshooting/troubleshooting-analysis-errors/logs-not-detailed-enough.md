---
title: Logs are not detailed enough
shortTitle: Logs not detailed enough
intro: If you'd like to increase the level of detail in your logs, try these steps.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/code-scanning/troubleshooting-code-scanning/logs-are-not-detailed-enough
  - /code-security/code-scanning/troubleshooting-code-scanning/logs-not-detailed-enough
contentType: how-tos
---

If your logs are not detailed enough to troubleshoot a problem, there are several steps you can take to obtain extra information and make logs more useful.

## Enable step debug logging

You can enable step debug logging in {% data variables.product.prodname_actions %} to increase the verbosity of a job's logs during a job's execution. For more information, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging#enabling-step-debug-logging).

## Creating {% data variables.product.prodname_codeql %} debugging artifacts

> [!WARNING]
> {% data variables.product.prodname_codeql %} debugging artifacts contain a copy of the source code being analyzed by {% data variables.product.prodname_codeql %}, therefore we suggest sharing these bundles only with people who are authorized to access that source code.

You can obtain artifacts to help you debug {% data variables.product.prodname_codeql %}.
The debug artifacts will be uploaded to the workflow run as artifacts with names starting with `debug-artifacts`. If {% data variables.product.prodname_codeql %} analyzes multiple languages concurrently as part of the workflow run, there will be one such artifact for every language. The data contains the {% data variables.product.prodname_codeql %} logs, {% data variables.product.prodname_codeql %} databases, extracted source code files, and any SARIF files produced by the workflow. For more information about downloading {% data variables.product.prodname_codeql %} artifacts, see [AUTOTITLE](/actions/managing-workflow-runs/downloading-workflow-artifacts).

These artifacts will help you debug problems with {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. If you contact GitHub support, they might ask for this data.

### Creating {% data variables.product.prodname_codeql %} debugging artifacts for {% data variables.product.prodname_codeql %} default setup

You can create {% data variables.product.prodname_codeql %} debugging artifacts by enabling {% data variables.product.prodname_actions %} step debug logging and triggering a new {% data variables.product.prodname_codeql %} analysis by, for example, pushing a new commit to a pull request branch. For information on how to enable {% data variables.product.prodname_actions %} step debug logging, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging#enabling-step-debug-logging).

{% ifversion org-private-registry %}

If you have given {% data variables.product.prodname_codeql %} access to private registries, additional artifacts whose names start with `proxy-log-file` will be available. These contain logs of the authentication proxy that is used by {% data variables.product.prodname_codeql %} default setup to authenticate requests to private registries and may be used to troubleshoot private registry configurations. To learn more, see [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/manage-usage-and-access/giving-org-access-private-registries).

{% endif %}

### Creating {% data variables.product.prodname_codeql %} debugging artifacts for {% data variables.product.prodname_codeql %} advanced setup

Debugging artifacts for {% data variables.product.prodname_codeql %} advanced setup can be obtained in several different ways.

#### Re-running jobs with debug logging enabled

The easiest option to create debugging artifacts for {% data variables.product.prodname_codeql %} advanced setup is by re-running jobs with debug logging enabled. For more information about re-running {% data variables.product.prodname_actions %} workflows and jobs, see [AUTOTITLE](/actions/managing-workflow-runs/re-running-workflows-and-jobs).

You need to ensure that you select **Enable debug logging**. This option enables runner diagnostic logging and step debug logging for the run. You'll then be able to download {% data variables.product.prodname_codeql %} debugging artifacts to investigate further. You do not need to modify the workflow file when creating {% data variables.product.prodname_codeql %} debugging artifacts by re-running jobs.

#### Using a workflow flag

You can create {% data variables.product.prodname_codeql %} debugging artifacts by using a flag in your workflow. For this, you need to modify the `init` step of your {% data variables.code-scanning.codeql_workflow %} file and set `debug: true`.

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

#### Using {% data variables.product.prodname_actions %} step debug logging

If you have enabled {% data variables.product.prodname_actions %} step debug logging, {% data variables.product.prodname_codeql %} will also produce debugging artifacts and upload them. See [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging#enabling-step-debug-logging).
