---
title: Acerca del monitoreo y solución de problemas
intro: 'Puedes utilizar las herramientas en las {% data variables.product.prodname_actions %} para monitorear y depurar tus flujos de trabajo.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About monitoring and troubleshooting
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d9158cd9bba6d003a583e78459240aa6790a1154
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062046'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Monitorear tus flujos de trabajo 

{% ifversion github-runner-dashboard %}
### Monitorear tus jobs actuales en tu organización o empresa

{% data reusables.actions.github-hosted-runners-check-concurrency %}

{% endif %}

### Utilizar la gráfica de visualización

Cada ejecución de flujo de trabajo genera una gráfica en tiempo real que ilustra el progreso de la misma. Puedes utilizar esta gráfica para monitorear y depurar los flujos de trabajo. Por ejemplo:

   ![Grafo de flujo de trabajo](/assets/images/help/images/workflow-graph.png)

Para más información, vea "[Uso del gráfico de visualizaciones](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)". 

### Adición de un distintivo de estado de flujo de trabajo

{% data reusables.repositories.actions-workflow-status-badge-intro %}

Para más información, vea "[Adición de un distintivo de estado de flujo de trabajo](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)".

{% ifversion fpt or ghec %}
### Visualizar el tiempo de ejecución de un job

Para identificar qué tanto tomará un job en ejecutarse, puedes ver su tiempo de ejecución. Por ejemplo:

   ![Enlace para los detalles de tiempo facturable y de ejecución](/assets/images/help/repository/view-run-billable-time.png)

Para más información, vea "[Visualización del tiempo de ejecución del trabajo](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time)".
{% endif %}

### Visualizar el historial de ejecución del flujo de trabajo

Puedes ver el estado de cada job y paso en un flujo de trabajo. Por ejemplo:

   ![Nombre de la ejecución de flujo de trabajo](/assets/images/help/repository/run-name.png)

Para más información, vea "[Visualización del historial de ejecución de flujos de trabajo](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)".

## Solucionar los problemas de tus flujos de trabajo

### Uso de registros de ejecución de flujo de trabajo

Cada ejecución de flujo de trabajo genera bitácoras de actividad que puedes ver, buscar y descargar. Por ejemplo:

   ![Resultados del flujo de trabajo de Super linter](/assets/images/help/repository/super-linter-workflow-results-updated-2.png)

Para más información, vea "[Uso de registros de ejecución de flujo de trabajo](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)".

### Habilitación del registro de depuración

Si los registros de flujo de trabajo no proporcionan suficiente detalle para diagnosticar por qué un flujo de trabajo o paso no funciona como se espera, puedes habilitar más registros de depuración. Para más información, vea "[Habilitación del registro de depuración](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)".

## Supervisión y solución de problemas de ejecutores autohospedados

Si utilizas ejecutores auto-hospedados, puedes ver su actividad y diagnosticar problemas comunes. 

Para más información, vea "[Supervisión y solución de problemas de ejecutores autohospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)".
