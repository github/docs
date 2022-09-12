---
title: Volver a ejecutar flujos de trabajo y jobs
intro: "Puedes volver a ejecutar una ejecución de flujo de trabajo{% ifversion re-run-jobs %}, todos los trabajos que fallaron en ella o aquellos trabajos específicos en una ejecución de flujo de trabajo{% endif %} en un plazo de 30\_días después de su ejecución inicial."
permissions: People with write permissions to a repository can re-run workflows in the repository.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/managing-workflow-runs/re-running-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 086a57b238b4a11e38013997dfcb85418a6961bd
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147419725'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de volver a ejecutar flujos de trabajo y jobs

Al volver a ejecutar un flujo de trabajo{% ifversion re-run-jobs %} o trabajos en un flujo de trabajo{% endif %} se usa el mismo `GITHUB_SHA` (SHA de confirmación) y `GITHUB_REF` (referencia de Git) del evento original que ha desencadenado la ejecución de flujo de trabajo. {% ifversion actions-stable-actor-ids %}El flujo de trabajo usará los privilegios del actor que ha desencadenado inicialmente el flujo de trabajo, no los del actor que ha iniciado la repetición de la ejecución. {% endif %}Puedes volver a ejecutar un flujo de trabajo{% ifversion re-run-jobs %} o trabajos en un flujo de trabajo{% endif %} durante un máximo de 30 días después de la ejecución inicial.{% ifversion re-run-jobs %} No puedes volver a ejecutar trabajos en un flujo de trabajo una vez que sus registros hayan superado sus límites de retención. Para obtener más información, consulta "[Límites de uso, facturación y administración](/actions/learn-github-actions/usage-limits-billing-and-administration#artifact-and-log-retention-policy)".{% endif %}{% ifversion debug-reruns %} Al volver a ejecutar un flujo de trabajo o trabajos en un flujo de trabajo, puedes habilitar el registro de depuración para la nueva ejecución. Esto habilitará el registro de diagnóstico del ejecutor y el registro de depuración de pasos para la nueva ejecución. Para obtener más información sobre el registro de depuración, consulta "[Habilitación del registro de depuración](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)".{% endif %}

## Volver a ejecutar todos los jobs en un flujo de trabajo

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
1. En la esquina superior derecha del flujo de trabajo, use el menú desplegable **Volver a ejecutar trabajos** y seleccione **Volver a ejecutar todos los trabajos**.

   Si no se produce un error en ningún trabajo, no verá el menú desplegable **Volver a ejecutar trabajos**. En su lugar, haga clic en **Volver a ejecutar todos los trabajos**.
    ![Menú desplegable Volver a ejecutar comprobaciones](/assets/images/help/repository/rerun-checks-drop-down.png) {% endif %} {% ifversion ghes < 3.5 or ghae %}
1. En la esquina superior derecha del flujo de trabajo, use el menú desplegable **Volver a ejecutar trabajos** y seleccione **Volver a ejecutar todos los trabajos**.
    ![Menú desplegable Volver a ejecutar comprobaciones](/assets/images/help/repository/rerun-checks-drop-down-updated.png) {% endif %} {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para volver a ejecutar una ejecución de flujo de trabajo con errores, use el subcomando `run rerun`. Reemplace `run-id` por el id. de la ejecución con errores que quiera volver a ejecutar.  Si no especifica `run-id`, {% data variables.product.prodname_cli %} devuelve un menú interactivo para que elija una ejecución con errores reciente.

```shell
gh run rerun <em>run-id</em>
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --debug
```

{% endif %}

Para ver el progreso de la ejecución del flujo de trabajo, use el subcomando `run watch` y seleccione la ejecución en la lista interactiva.

```shell
gh run watch
```

{% endcli %}

{% ifversion re-run-jobs %}
## Volver a ejecutar todos los jobs fallidos en un flujo de trabajo

Si cualquier job en una ejecución de flujo de trabajo falla, puedes volver a ejecutar solo los fallidos. Cuando vuelves a ejecutar jobs en un flujo de trabajo, comenzará una ejecución de flujo de trabajo nueva para todos los jobs fallidos y sus dependientes. Cualquier salida de cualquier job exitoso en la ejecución de flujo de trabajo previa se utilizará para volverla a ejecutar. Cualquier artefacto que se haya creado en la ejecución inicial estará disponible en la nueva ejecución. Cualquier regla de protección de ambiente que haya pasado en la ejecución previa pasará automáticamente en la nueva ejecución.

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. En la esquina superior derecha del flujo de trabajo, use el menú desplegable **Volver a ejecutar trabajos** y seleccione **Volver a ejecutar trabajos con errores**.
    ![Menú desplegable Volver a ejecutar trabajos con errores](/assets/images/help/repository/rerun-failed-jobs-drop-down.png) {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

Para volver a ejecutar los trabajos con errores en una ejecución de flujo de trabajo, use el subcomando `run rerun` con la marca `--failed`. Reemplace `run-id` por el identificador de la ejecución para la que quiera volver a ejecutar los trabajos con errores. Si no especifica `run-id`, {% data variables.product.prodname_cli %} devuelve un menú interactivo para que elija una ejecución con errores reciente.

```shell
gh run rerun <em>run-id</em> --failed
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --failed --debug
```

{% endif %} {% endcli %}

## Volver a ejecutar un job específico en un flujo de trabajo

Cuando vuelves a ejecutar un job específico en un flujo de trabajo, una ejecución de flujo de trabajo nueva iniciará para el job y para cualquier dependiente. Cualquier salida de cualquier otro job en la ejecución de flujo de trabajo previa se utilizará para la ejecución nueva. Cualquier artefacto que se haya creado en la ejecución inicial estará disponible en la nueva ejecución. Cualquier regla de protección de ambiente que haya pasado en la ejecución previa pasará automáticamente en la nueva ejecución.

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. Junto al job que quieras volver a ejecutar, haz clic en {% octicon "sync" aria-label="The re-run icon" %}.
   ![Volver a ejecutar el trabajo seleccionado](/assets/images/help/repository/re-run-selected-job.png)

   Como alternativa, haz clic en un job para ver la bitácora. En la bitácora, haz clic en {% octicon "sync" aria-label="The re-run icon" %}.
   ![Volver a ejecutar el trabajo seleccionado](/assets/images/help/repository/re-run-single-job-from-log.png) {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

Para volver a ejecutar un trabajo concreto en una ejecución de flujo de trabajo, use el subcomando `run rerun` con la marca `--job`. Reemplace `job-id` por el id. del trabajo que quiera volver a ejecutar.

```shell
gh run rerun --job <em>job-id</em>
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun --job <em>job-id</em> --debug
```

{% endif %} {% endcli %}

{% endif %}

{% ifversion partial-reruns-with-reusable %}

## Volver a ejecutar flujos de trabajo y trabajos con flujos de trabajo reutilizables

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
## Revisar las ejecuciones de flujo de trabajo anteriores

Puedes ver los resultados desde tus intentos anteriores para ejecutar un flujo de trabajo. También puedes ver las ejecuciones de flujo de trabajo anteriores utilizando la API. Para más información, vea ["Obtención de una ejecución de flujo de trabajo"](/rest/reference/actions#get-a-workflow-run).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {%- ifversion re-run-jobs %}
1. Los intentos de ejecución anteriores se muestran en el menú desplegable **Más reciente**.
   ![Intentos de ejecución anteriores](/assets/images/help/repository/previous-run-attempts.png) {%- else %}
1. Cualquier intento de ejecución anterior se muestra en el panel izquierdo.
    ![Volver a ejecutar el flujo de trabajo](/assets/images/help/settings/actions-review-workflow-rerun.png) {%- endif %}
1. Haz clic en una entrada para ver sus resultados.

{% endif %}
