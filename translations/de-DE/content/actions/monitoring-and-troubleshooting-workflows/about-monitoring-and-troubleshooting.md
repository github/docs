---
title: About monitoring and troubleshooting
intro: 'You can use the tools in {% data variables.product.prodname_actions %} to monitor and debug your workflows.'
product: '{% data reusables.gated-features.actions %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: About monitoring and troubleshooting
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Monitoring your workflows

{% ifversion fpt or ghae or ghes > 3.0 %}

### Using the visualization graph

Every workflow run generates a real-time graph that illustrates the run progress. You can use this graph to monitor and debug workflows. Ein Beispiel:

   ![Workflow graph](/assets/images/help/images/workflow-graph.png)

For more information, see "[Using the visualization graph](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)."

{% endif %}

### Adding a workflow status badge

{% data reusables.repositories.actions-workflow-status-badge-intro %}

For more information, see "[Adding a workflow status badge](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)."

{% ifversion fpt %}
### Viewing job execution time

To identify how long a job took to run, you can view its execution time. Ein Beispiel:

   ![Link zu Den Ausführungs- und Abrechnungsdetails](/assets/images/help/repository/view-run-billable-time.png)

For more information, see "[Viewing job execution time](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time)."
{% endif %}

### Viewing workflow run history

You can view the status of each job and step in a workflow. Ein Beispiel:

   ![Name der Workflow-Ausführung](/assets/images/help/repository/run-name.png)

For more information, see "[Viewing workflow run history](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)."

## Troubleshooting your workflows

### Using workflow run logs

Each workflow run generates activity logs that you can view, search, and download. Ein Beispiel:

   ![Super linter workflow results](/assets/images/help/repository/super-linter-workflow-results-updated-2.png)

For more information, see "[Using workflow run logs](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)."

### Debug-Protokollierung aktivieren

Wenn die Workflow-Logs nicht genügend Details zur Diagnose enthalten, warum ein Workflow, ein Job oder ein Schritt nicht wie erwartet abläuft, können Sie die zusätzliche Debug-Protokollierung aktivieren. For more information, see "[Enabling debug logging](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)."

## Überwachung und Fehlerbehebung selbst-gehosteter Runner

If you use self-hosted runners, you can view their activity and diagnose common issues.

Weitere Informationen findest Du unter "[Überwachung und Fehlerbehebung selbst-gehosteter Läufer ](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)."
