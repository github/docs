---
title: Eliminar administradores de App GitHub de tu organización
intro: 'Los propietarios de la organización pueden revocar los permisos de administrador {% data variables.product.prodname_github_app %} que se le hayan concedido a un miembro de la organización.'
redirect_from:
  - /articles/removing-github-app-managers-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-github-app-managers-from-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
Para más información sobre los permisos de administrador de {% data variables.product.prodname_github_app %}, consulta "[Niveles de permiso para una organización](/articles/permission-levels-for-an-organization#github-app-managers)".

### Eliminar los {% data variables.product.prodname_github_app %} permisos de un administrador para toda la organización

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. En "Management" (Administración), encuentra el nombre de usuario de la persona para la que quieres eliminar {% data variables.product.prodname_github_app %} los permisos de administrador, luego haz clic en **Revoke** (Revocar). ![Revocar {% data variables.product.prodname_github_app %} permisos de administrador](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

### Eliminar los {% data variables.product.prodname_github_app %} permisos de administrador para una persona {% data variables.product.prodname_github_app %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Debajo de "{% data variables.product.prodname_github_app %}s", haz clic en el avatar de la app de la que quieres eliminar un administrador {% data variables.product.prodname_github_app %}. ![Seleccionar {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. En "App managers" (Administradores de app), encuentra el nombre de usuario de la persona para la que quieres eliminar {% data variables.product.prodname_github_app %} los permisos de administrador, luego haz clic en **Revoke** (Revocar). ![Revocar {% data variables.product.prodname_github_app %} permisos de administrador](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% if currentVersion == "free-pro-team@latest" %}
### Leer más

- "[Acerca de {% data variables.product.prodname_dotcom %} Mercado](/articles/about-github-marketplace/)"
{% endif %}
