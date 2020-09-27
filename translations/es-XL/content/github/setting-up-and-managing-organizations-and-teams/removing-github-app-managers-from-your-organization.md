---
title: Eliminar administradores de App GitHub de tu organización
intro: 'Los propietarios de la organización pueden revocar los permisos de administrador {{ site.data.variables.product.prodname_github_app }} que se le hayan concedido a un miembro de la organización.'
redirect_from:
  - /articles/removing-github-app-managers-from-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Para más información sobre los permisos de administrador de {{ site.data.variables.product.prodname_github_app }}, consulta "[Niveles de permiso para una organización](/articles/permission-levels-for-an-organization#github-app-managers)".

### Eliminar los {{ site.data.variables.product.prodname_github_app }} permisos de un administrador para toda la organización

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.github-apps-settings-sidebar }}
1. En "Management" (Administración), encuentra el nombre de usuario de la persona para la que quieres eliminar {{ site.data.variables.product.prodname_github_app }} los permisos de administrador, luego haz clic en **Revoke** (Revocar). ![Revocar {{ site.data.variables.product.prodname_github_app }} permisos de administrador](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

### Eliminar los {{ site.data.variables.product.prodname_github_app }} permisos de administrador para una persona {{ site.data.variables.product.prodname_github_app }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.github-apps-settings-sidebar }}
1. Debajo de "{{ site.data.variables.product.prodname_github_app }}s", haz clic en el avatar de la app de la que quieres eliminar un administrador {{ site.data.variables.product.prodname_github_app }}. ![Seleccionar {{ site.data.variables.product.prodname_github_app }}](/assets/images/help/organizations/select-github-app.png)
{{ site.data.reusables.organizations.app-managers-settings-sidebar }}
1. En "App managers" (Administradores de app), encuentra el nombre de usuario de la persona para la que quieres eliminar {{ site.data.variables.product.prodname_github_app }} los permisos de administrador, luego haz clic en **Revoke** (Revocar). ![Revocar {{ site.data.variables.product.prodname_github_app }} permisos de administrador](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% if currentVersion == "free-pro-team@latest" %}
### Leer más

- "[Acerca de {{ site.data.variables.product.prodname_dotcom }} Mercado](/articles/about-github-marketplace/)"
{% endif %}
