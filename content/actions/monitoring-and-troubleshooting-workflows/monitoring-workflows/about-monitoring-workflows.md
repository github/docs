---
title: About monitoring workflows
intro: 'You can use the tools in {% data variables.product.prodname_actions %} to monitor your workflows.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: About monitoring
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Monitoring your workflows

{% ifversion github-runner-dashboard %}

### Monitoring your current jobs in your organization or enterprise

{% data reusables.actions.github-hosted-runners-check-concurrency %}

{% endif %}

### Using the visualization graph

Every workflow run generates a real-time graph that illustrates the run progress. You can use this graph to monitor and debug workflows. For example:

   ![Screenshot of the visualization graph of a workflow run.](/assets/images/help/actions/workflow-graph.png)

For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)."

### Adding a workflow status badge

{% data reusables.repositories.actions-workflow-status-badge-intro %}

For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)."

{% ifversion fpt or ghec %}

### Viewing job execution time

To identify how long a job took to run, you can view its execution time. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time)."
{% endif %}

### Viewing workflow run history

You can view the status of each job and step in a workflow. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)."

## Monitoring self-hosted runners

If you use self-hosted runners, you can view their activity and diagnose common issues.

For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners)."
