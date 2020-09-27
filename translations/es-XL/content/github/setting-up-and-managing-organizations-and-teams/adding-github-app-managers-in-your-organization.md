---
title: Agregar administradores de App GitHub a tu organización
intro: 'Los propietarios de la organización pueden conceder a los usuarios la capacidad para administrar alguna o todas las {{ site.data.variables.product.prodname_github_app }}s que le pertenecen a la organización.'
redirect_from:
  - /articles/adding-github-app-managers-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Para más información sobre los permisos de administrador de {{ site.data.variables.product.prodname_github_app }}, consulta "[Niveles de permiso para una organización](/articles/permission-levels-for-an-organization#github-app-managers)".

### Brindar a alguien la posibilidad de administrar todos los {{ site.data.variables.product.prodname_github_app }} que son propiedad de la organización.

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.github-apps-settings-sidebar }}
1. En "Management" (Administración), escribe el nombre de usuario de la persona a quien deseas designar como gerente de {{ site.data.variables.product.prodname_github_app }} en la organización, y haz clic en **Grant** (Conceder). ![Agregar un administrador de {{ site.data.variables.product.prodname_github_app }}](/assets/images/help/organizations/add-github-app-manager.png)

### Brindar a alguien la posibilidad de administrar un {{ site.data.variables.product.prodname_github_app }} individual

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.github-apps-settings-sidebar }}
1. Debajo de "{{ site.data.variables.product.prodname_github_app }}s", haz clic en el avatar de la app a la que quieres agregarle un administrador de {{ site.data.variables.product.prodname_github_app }}. ![Seleccionar {{ site.data.variables.product.prodname_github_app }}](/assets/images/help/organizations/select-github-app.png)
{{ site.data.reusables.organizations.app-managers-settings-sidebar }}
1. En "App managers" (Administradores de la app), escribe el nombre de usuario de la persona a quien deseas designar como administrador de la App GitHub para la app, y haz clic en **Grant** (Conceder). ![Agregar un administrador de {{ site.data.variables.product.prodname_github_app }} para una app específica](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% if currentVersion == "free-pro-team@latest" %}
### Leer más

- "[Acerca de {{ site.data.variables.product.prodname_dotcom }} Mercado](/articles/about-github-marketplace/)"
{% endif %}
