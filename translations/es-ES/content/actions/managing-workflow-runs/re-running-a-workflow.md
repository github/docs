---
title: Volver a ejecutar un flujo de trabajo
intro: Puedes volver a ejecutar una instancia de un flujo de trabajo. Volver a ejecutar un flujo de trabajo utiliza el mismo `GITHUB_SHA`(SHA de confirmación) y `GITHUB_REF` (referencia de Git) que el evento original que activó la ejecución de flujo de trabajo.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. En la esquina superior derecha del flujo de trabajo, utiliza el menú desplegable de **volver a ejecutar los jobs** y selecciona **volver a ejecutar todos los jobs**.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down-updated.png){% else %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png){% endif %}
