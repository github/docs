---
title: About troubleshooting workflows
intro: 'You can use the tools in {% data variables.product.prodname_actions %} to debug your workflows.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: About troubleshooting
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Troubleshooting your workflows

### Using workflow run logs

Each workflow run generates activity logs that you can view, search, and download. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)."

### Enabling debug logging

If the workflow logs do not provide enough detail to diagnose why a workflow, job, or step is not working as expected, you can enable additional debug logging. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)."

### Canceling a workflow

If you attempt to cancel a workflow and the cancellation doesn't succeed, make sure you aren't using the `always` expression. The `always` expression causes a workflow step to run even when the workflow is canceled, which results in a hanging cancellation. For more information, see "[AUTOTITLE](/actions/learn-github-actions/expressions#always)".

## Troubleshooting self-hosted runners

If you use self-hosted runners, you can view their activity and diagnose common issues.

For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners)."
