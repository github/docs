---
title: Using the visualization graph
shortTitle: Visualization graph
intro: Every workflow run generates a real-time graph that illustrates the run progress. You can use this graph to monitor and debug workflows.
redirect_from:
  - /actions/managing-workflow-runs/using-the-visualization-graph
  - /actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}

1. The graph displays each job in the workflow. An icon to the left of the job name indicates the status of the job. Lines between jobs indicate dependencies.

   ![Screenshot of the visualization graph of a workflow run.](/assets/images/help/actions/workflow-graph.png)
1. To view a job's log, click the job.
