---
title: Re-running workflows and jobs
intro: You can re-run a workflow run up to 30 days after its initial run.
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
{% data reusables.actions.ae-beta %}

## Re-running all the jobs in a workflow

El volver a ejecutar un flujo de trabajo utiliza el mismo `GITHUB_SHA` (SHA de confirmación) y `GITHUB_REF` (ref de Git) del evento original que activó la ejecución de flujo de trabajo. You can re-run a workflow for up to 30 days after the initial run.

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% ifversion fpt or ghes > 3.2 or ghae-issue-4721 or ghec %}
1. En la esquina superior derecha del flujo de trabajo, utiliza el menú desplegable **Volver a ejecutar jobs** y selecciona **Volver a ejecutar todos los jobs** ![Rerun checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png)
{% endif %}
{% ifversion ghes < 3.3 or ghae %}
1. En la esquina superior derecha del flujo de trabajo, utiliza el menú desplegable **Volver a ejecutar jobs** y selecciona **Volver a ejecutar todos los jobs**. ![Volver a ejecutar el menú desplegable de verificaciones](/assets/images/help/repository/rerun-checks-drop-down-updated.png)
{% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para volver a ejecutar una ejecución de flujo de trabajo fallida, utiliza el subcomando `run rerun`. Reemplaza a `run-id` con la ID de la ejecución fallida que quieres volver a ejecutar.  Si no especificas una `run-id`, {% data variables.product.prodname_cli %} devolverá un menú interactivo para que elijas una ejecución fallida reciente.

```shell
gh run rerun <em>run-id</em>
```

Para ver el progreso de la ejecución del flujo de trabajo, utiliza el subcomando `run watch` y selecciona la ejecución de la lista interactiva.

```shell
gh run watch
```

{% endcli %}

{% ifversion fpt or ghes > 3.2 or ghae-issue-4721 or ghec %}
### Reviewing previous workflow runs

You can view the results from your previous attempts at running a workflow. You can also view previous workflow runs using the API. For more information, see ["Get a workflow run"](/rest/reference/actions#get-a-workflow-run).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Any previous run attempts are shown in the left pane. ![Rerun workflow](/assets/images/help/settings/actions-review-workflow-rerun.png)
1. Click an entry to view its results.

{% endif %}
