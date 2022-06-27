---
title: Volver a ejecutar flujos de trabajo y jobs
intro: 'Puedes volver a ejecutar una ejecución de flujo de trabajo{% ifversion re-run-jobs %}, todos los jobs que fallaron en ella o aquellos jobs específicos en este{% endif %} dentro de los siguientes 30 días después de su ejecución inicial.'
permissions: People with write permissions to a repository can re-run workflows in the repository.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/managing-workflow-runs/re-running-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de volver a ejecutar flujos de trabajo y jobs

Volver a ejecutar un flujo de tabajo{% ifversion re-run-jobs %} o los jobs dentro de este{% endif %} utiliza los mismos `GITHUB_SHA` (SHA de confirmación) y `GITHUB_REF` (Git ref) del evento original que activó la ejecución de flujo de trabajo. Puedes volver a ejecutar un flujo de trabajo{% ifversion re-run-jobs %} o jobs en un flujo de trabajo{% endif %} por hasta 30 días después de su ejecución inicial.{% ifversion re-run-jobs %} No puedes volver a ejecutar jobs en un flujo de trabajo una vez que hayan pasado sus límites de retención. Para obtener más información, consulta la sección "[Límites de uso, facturación y adminsitración](/actions/learn-github-actions/usage-limits-billing-and-administration#artifact-and-log-retention-policy)".{% endif %}{% ifversion debug-reruns %} Cuando vuelves a ejecutar un flujo de trabajo o jobs en alguno de ellos, puedes habilitar el registro de depuración para la re-ejecución. Esto habilitará el registro de diagnóstico del ejecutor y el registro de depuración de pasos para la re-ejecución. Para obtener más información sobre el registro de depuración, consulta la sección "[Habilitar el registro de depuración](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)".{% endif %}

## Volver a ejecutar todos los jobs en un flujo de trabajo

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
1. En la esquina superior derecha del flujo de trabajo, utiliza el menú desplegable **Volver a ejecutar jobs** y selecciona **Volver a ejecutar todos los jobs**.

   Si no hubieron jobs fallidos, no verás el menú desplegable **Volver a ejecutar jobs**. En vez de esto, haz clic en **Volver a ejecutar todos los jobs**. ![Menú desplegable de verificaciones de re-ejecución](/assets/images/help/repository/rerun-checks-drop-down.png)
{% endif %}
{% ifversion ghes < 3.5 or ghae %}
1. En la esquina superior derecha del flujo de trabajo, utiliza el menú desplegable **Volver a ejecutar jobs** y selecciona **Volver a ejecutar todos los jobs**. ![Volver a ejecutar el menú desplegable de verificaciones](/assets/images/help/repository/rerun-checks-drop-down-updated.png)
{% endif %}
{% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para volver a ejecutar una ejecución de flujo de trabajo fallida, utiliza el subcomando `run rerun`. Reemplaza a `run-id` con la ID de la ejecución fallida que quieres volver a ejecutar.  Si no especificas una `run-id`, {% data variables.product.prodname_cli %} devolverá un menú interactivo para que elijas una ejecución fallida reciente.

```shell
gh run rerun <em>run-id</em>
```

{% ifversion debug-reruns %}
{% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --debug
```

{% endif %}

Para ver el progreso de la ejecución del flujo de trabajo, utiliza el subcomando `run watch` y selecciona la ejecución de la lista interactiva.

```shell
gh run watch
```

{% endcli %}

{% ifversion re-run-jobs %}
## Volver a ejecutar todos los jobs fallidos en un flujo de trabajo

Si cualquier job en una ejecución de flujo de trabajo falla, puedes volver a ejecutar solo los fallidos. Cuando vuelves a ejecutar jobs en un flujo de trabajo, comenzará una ejecución de flujo de trabajo nueva para todos los jobs fallidos y sus dependientes. Cualquier salida de cualquier job exitoso en la ejecución de flujo de trabajo previa se utilizará para volverla a ejecutar. Cualquier artefacto que se haya creado en la ejecución inicial estará disponible en la nueva ejecución. Cualquier regla de protección de ambiente que haya pasado en la ejecución previa pasará automáticamente en la nueva ejecución.

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. En la esquina superior derecha del flujo de trabajo, utiliza el menú desplegable de **Volver a ejecutar jobs** y selecciona **Volver a ejecutar los jobs fallidos**. ![Menú desplegable de volver a ejecutar los jobs fallidos](/assets/images/help/repository/rerun-failed-jobs-drop-down.png)
{% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

Para volver a ejecutar los jobs fallidos en una ejecución de flujo de trabajo, utiliza el subcomando `run rerun` con el marcador `--failed`. Remplaza `run-id` con la ID de la ejecución para la cual quieres volver a ejecutar los jobs fallidos. Si no especificas una `run-id`, {% data variables.product.prodname_cli %} devolverá un menú interactivo para que elijas una ejecución fallida reciente.

```shell
gh run rerun <em>run-id</em> --failed
```

{% ifversion debug-reruns %}
{% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --failed --debug
```

{% endif %}
{% endcli %}

## Volver a ejecutar un job específico en un flujo de trabajo

Cuando vuelves a ejecutar un job específico en un flujo de trabajo, una ejecución de flujo de trabajo nueva iniciará para el job y para cualquier dependiente. Cualquier salida de cualquier otro job en la ejecución de flujo de trabajo previa se utilizará para la ejecución nueva. Cualquier artefacto que se haya creado en la ejecución inicial estará disponible en la nueva ejecución. Cualquier regla de protección de ambiente que haya pasado en la ejecución previa pasará automáticamente en la nueva ejecución.

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Junto al job que quieras volver a ejecutar, haz clic en {% octicon "sync" aria-label="The re-run icon" %}. ![Volver a ejecutar el job seleccionado](/assets/images/help/repository/re-run-selected-job.png)

   Como alternativa, haz clic en un job para ver la bitácora. En la bitácora, haz clic en {% octicon "sync" aria-label="The re-run icon" %}. ![Volver a ejecutar el job seleccionado](/assets/images/help/repository/re-run-single-job-from-log.png)
{% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

Para volver a ejecutar un job específico en una ejecución de flujo de trabajo, utiliza el subcomando `run rerun` con el marcador `--job`. Reemplaza `job-id` con la ID del job que quieras volver a ejecutar.

```shell
gh run rerun --job <em>job-id</em>
```

{% ifversion debug-reruns %}
{% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun --job <em>job-id</em> --debug
```

{% endif %}
{% endcli %}

{% endif %}

{% ifversion partial-reruns-with-reusable %}

## Volver a ejecutar los flujos de trabajo y los jobs con flujos de trabajo reutilizables

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
## Revisar las ejecuciones de flujo de trabajo anteriores

Puedes ver los resultados desde tus intentos anteriores para ejecutar un flujo de trabajo. También puedes ver las ejecuciones de flujo de trabajo anteriores utilizando la API. Para obtener más información, consulta la sección "[Obtener una ejecución de flujo de trabajo](/rest/reference/actions#get-a-workflow-run)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{%- ifversion re-run-jobs %}
1. Cualquier intento de ejecución previo se muestra en el menú desplegable de **Más recientes**. ![Intentos previos](/assets/images/help/repository/previous-run-attempts.png)
{%- else %}
1. Cualquier intento de ejecución anterior se muestra en el panel izquierdo. ![Volver a ejecutar un flujo de trabajo](/assets/images/help/settings/actions-review-workflow-rerun.png)
{%- endif %}
1. Haz clic en una entrada para ver sus resultados.

{% endif %}
