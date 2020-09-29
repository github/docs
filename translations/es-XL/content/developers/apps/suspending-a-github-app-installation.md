---
title: Suspender la instalación de una GitHub App
intro: '{% data reusables.shortdesc.suspending_a_github_app %}'
redirect_from:
  - /apps/managing-github-apps/suspending-a-github-app-installation
versions:
  free-pro-team: '*'
---

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
{% note %}

**Nota:**{% data reusables.pre-release-program.suspend-installation-beta %}

{% endnote %}
{% endif %}

### Suspender una GitHub App

Para suspender una {% data variables.product.prodname_github_app %}, debes ser el propietario de la cuenta o tener permisos en el repositorio u organización en donde está instalada la app que deseas suspender.

También puedes suspender y dejar de suspender las instalaciones de una {% data variables.product.prodname_github_app %} si utilizas la API de REST. Para obtener más información, consulta la [API de REST para las GitHub Apps](/v3/apps/).

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. Selecciona la {% data variables.product.prodname_github_app %} que quieres suspender. ![Seleccion de apps](/assets/images/github-apps/github_apps_select-app.png)
{% data reusables.user-settings.github_apps_advanced %}
6. Junto a la configuración de suspensión para la instalación, da clic en **Suspender** o en **Dejar de suspender**. ![Suspender una GitHub App](/assets/images/github-apps/suspend-a-github-app.png)
