---
title: Volver a ejecutar un flujo de trabajo
intro: Puedes volver a ejecutar una instancia de un flujo de trabajo. Volver a ejecutar un flujo de trabajo utiliza el mismo `GITHUB_SHA`(SHA de confirmación) y `GITHUB_REF` (referencia de Git) que el evento original que activó la ejecución de flujo de trabajo.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Vuelve a ejecutar un flujo de trabajo utilizando la IU de {% data variables.product.prodname_dotcom %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. En la esquina superior derecha del flujo de trabajo, utiliza el menú desplegable de **Volver a ejecutar los jobs** y selecciona **Volver a ejecutar todos los jobs**.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down-updated.png){% else %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png){% endif %}

### Volver a ejecutar un flujo de trabajo utilizando {% data variables.product.prodname_cli %}

{% data reusables.actions.actions-cli %}

Para volver a ejecutar una ejecución de flujo de trabajo fallida, utiliza el subcomando `run rerun`. Reemplaza a `run-id` con la ID de la ejecución fallida que quieres volver a ejecutar.  Si no especificas una `run-id`, {% data variables.product.prodname_cli %} devolverá un menú interactivo para que elijas una ejecución fallida reciente.

```shell
gh run rerun <em>run-id</em>
```

Para ver el progreso de la ejecución del flujo de trabajo, utiliza el subcomando `run watch` y selecciona la ejecución de la lista interactiva.

```shell
gh run watch
```
