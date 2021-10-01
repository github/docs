---
title: Volver a ejecutar un flujo de trabajo
intro: You can re-run an instance of a workflow up to 30 days after the initial run.
product: '{% data reusables.gated-features.actions %}'
permissions: People with write permissions to a repository can re-run workflows in the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

Re-running a workflow uses the same `GITHUB_SHA` (commit SHA) and `GITHUB_REF` (Git ref) of the original event that triggered the workflow run. You can re-run a workflow up to 30 days after the initial run.

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. En la esquina superior derecha del flujo de trabajo, utiliza el menú desplegable de **volver a ejecutar los jobs** y selecciona **volver a ejecutar todos los jobs**.{% ifversion fpt or ghes > 3.0 or ghae %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down-updated.png){% else %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png){% endif %}

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
