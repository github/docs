---
title: Logs are not detailed enough
shortTitle: Logs not detailed enough
intro: Increase log verbosity and generate debugging artifacts when logs lack diagnostic detail.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/code-scanning/troubleshooting-code-scanning/logs-are-not-detailed-enough
  - /code-security/code-scanning/troubleshooting-code-scanning/logs-not-detailed-enough
  - /code-security/how-tos/scan-code-for-vulnerabilities/troubleshooting/troubleshooting-analysis-errors/logs-not-detailed-enough
contentType: reference
---

If your logs are not detailed enough to troubleshoot a problem, there are several steps you can take to obtain extra information and make logs more useful.

## Enabling step debug logging

Step debug logging increases the verbosity of a job’s logs during and after execution.

To enable step debug logging:

1. In the repository that contains the workflow, set the following secret or variable: `ACTIONS_STEP_DEBUG` to `true`. If both the secret and variable are set, the value of the secret takes precedence over the variable.
1. Re-run the workflow or trigger a new run.

After setting the secret or variable, more debug events are shown in the step logs. See [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures).

You can also use the `runner.debug` context to conditionally run steps only when debug logging is enabled. See [AUTOTITLE](/actions/reference/workflows-and-actions/contexts#runner-context).

## Creating {% data variables.product.prodname_codeql %} debugging artifacts

> [!WARNING]
> {% data variables.product.prodname_codeql %} debugging artifacts contain a copy of the source code being analyzed by {% data variables.product.prodname_codeql %}, therefore we suggest sharing these bundles only with people who are authorized to access that source code.

You can obtain artifacts to help you debug {% data variables.product.prodname_codeql %}.
The debug artifacts will be uploaded to the workflow run as artifacts with names starting with `debug-artifacts`. If {% data variables.product.prodname_codeql %} analyzes multiple languages concurrently as part of the workflow run, there will be one such artifact for every language. The data contains the {% data variables.product.prodname_codeql %} logs, {% data variables.product.prodname_codeql %} databases, extracted source code files, and any SARIF files produced by the workflow. For more information about downloading {% data variables.product.prodname_codeql %} artifacts, see [AUTOTITLE](/actions/managing-workflow-runs/downloading-workflow-artifacts).

These artifacts will help you debug problems with {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. If you contact {% data variables.contact.github_support %}, they might ask for this data.

### Creating {% data variables.product.prodname_codeql %} debugging artifacts for {% data variables.product.prodname_codeql %} default setup

You can create {% data variables.product.prodname_codeql %} debugging artifacts by enabling step debug logging (see [Enabling step debug logging](#enabling-step-debug-logging)) and triggering a new {% data variables.product.prodname_codeql %} analysis, for example, by pushing a new commit to a pull request branch.

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

If you enable {% data variables.product.prodname_actions %} step debug logging, {% data variables.product.prodname_codeql %} will also produce debugging artifacts and upload them as part of the workflow run. For instructions, see [Enabling step debug logging](#enabling-step-debug-logging).
