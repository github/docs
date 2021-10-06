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

### Utilizar la gráfica de visualización

Cada ejecución de flujo de trabajo genera una gráfica en tiempo real que ilustra el progreso de la misma. Puedes utilizar esta gráfica para monitorear y depurar los flujos de trabajo. Por ejemplo:

   ![Gráfica del flujo de trabajo](/assets/images/help/images/workflow-graph.png)

For more information, see "[Using the visualization graph](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)."

{% endif %}

### Agregar una insignia de estado de flujo de trabajo

{% data reusables.repositories.actions-workflow-status-badge-intro %}

Para obtener más información, consulta la sección "[Agregar una insignia de estado de flujo de trabajo](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)".

{% ifversion fpt %}
### Visualizar el tiempo de ejecución de un job

To identify how long a job took to run, you can view its execution time. Por ejemplo:

   ![Enlace para los detalles de tiempo facturable y de ejecución](/assets/images/help/repository/view-run-billable-time.png)

Para obtener más información, consulta la sección "[Visualizar el tiempo de ejecución del job](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time)".
{% endif %}

### Visualizar el historial de ejecución del flujo de trabajo

You can view the status of each job and step in a workflow. Por ejemplo:

   ![Nombre de la ejecución de flujo de trabajo](/assets/images/help/repository/run-name.png)

Para obtener más información, consulta la sección "[Visualizar el historial de ejecuciones de un flujo de trabajo](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)".

## Troubleshooting your workflows

### Utilizar bitácoras de ejecución de flujo de trabajo

Each workflow run generates activity logs that you can view, search, and download. Por ejemplo:

   ![Resultados del flujo de trabajo de Super linter](/assets/images/help/repository/super-linter-workflow-results-updated-2.png)

Para obtener más información, consulta la sección "[Utilizar bitácoras de ejecución de flujos de trabajo](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)".

### Habilitar registro de depuración

Si los registros de flujo de trabajo no proporcionan suficiente detalle para diagnosticar por qué un flujo de trabajo o paso no funciona como se espera, puedes habilitar más registros de depuración. Para obtener más información, consulta la sección "[Habilitar el registro de depuración](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)."

## Monitorear y solucionar problemas para los ejecutores auto-hospedados

If you use self-hosted runners, you can view their activity and diagnose common issues.

Para obtener más información, consulta la sección "[Monitorear y solucionar problemas de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)".
