---
title: Acerca del monitoreo y solución de problemas
intro: 'Puedes utilizar las herramientas en las {% data variables.product.prodname_actions %} para monitorear y depurar tus flujos de trabajo.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Acerca del monitoreo y solución de problemas
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Monitorear tus flujos de trabajo

{% ifversion github-runner-dashboard %}
### Monitorear tus jobs actuales en tu organización o empresa

{% data reusables.actions.github-hosted-runners-check-concurrency %}

{% endif %}

### Utilizar la gráfica de visualización

Cada ejecución de flujo de trabajo genera una gráfica en tiempo real que ilustra el progreso de la misma. Puedes utilizar esta gráfica para monitorear y depurar los flujos de trabajo. Por ejemplo:

   ![Gráfica del flujo de trabajo](/assets/images/help/images/workflow-graph.png)

Para obtener más información, consulta la sección "[Utilizar el gráfico de visualización](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)".

### Agregar una insignia de estado de flujo de trabajo

{% data reusables.repositories.actions-workflow-status-badge-intro %}

Para obtener más información, consulta la sección "[Agregar una insignia de estado de flujo de trabajo](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)".

{% ifversion fpt or ghec %}
### Visualizar el tiempo de ejecución de un job

Para identificar qué tanto tomará un job en ejecutarse, puedes ver su tiempo de ejecución. Por ejemplo:

   ![Enlace para los detalles de tiempo facturable y de ejecución](/assets/images/help/repository/view-run-billable-time.png)

Para obtener más información, consulta la sección "[Visualizar el tiempo de ejecución del job](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time)".
{% endif %}

### Visualizar el historial de ejecución del flujo de trabajo

Puedes ver el estado de cada job y paso en un flujo de trabajo. Por ejemplo:

   ![Nombre de la ejecución de flujo de trabajo](/assets/images/help/repository/run-name.png)

Para obtener más información, consulta la sección "[Visualizar el historial de ejecuciones de un flujo de trabajo](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)".

## Solucionar los problemas de tus flujos de trabajo

### Utilizar bitácoras de ejecución de flujo de trabajo

Cada ejecución de flujo de trabajo genera bitácoras de actividad que puedes ver, buscar y descargar. Por ejemplo:

   ![Resultados del flujo de trabajo de Super linter](/assets/images/help/repository/super-linter-workflow-results-updated-2.png)

Para obtener más información, consulta la sección "[Utilizar bitácoras de ejecución de flujos de trabajo](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)".

### Habilitar registro de depuración

Si los registros de flujo de trabajo no proporcionan suficiente detalle para diagnosticar por qué un flujo de trabajo o paso no funciona como se espera, puedes habilitar más registros de depuración. Para obtener más información, consulta la sección "[Habilitar el registro de depuración](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)."

## Monitorear y solucionar problemas para los ejecutores auto-hospedados

Si utilizas ejecutores auto-hospedados, puedes ver su actividad y diagnosticar problemas comunes.

Para obtener más información, consulta la sección "[Monitorear y solucionar problemas de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)".
