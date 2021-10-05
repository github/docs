---
title: Agregar administradores de App GitHub a tu organización
intro: 'Organization owners can grant users the ability to manage some or all {% data variables.product.prodname_github_apps %} owned by the organization.'
redirect_from:
  - /articles/adding-github-app-managers-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-github-app-managers-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Agregar administradores de GitHub Apps
---

Para más información sobre los permisos del administrador de {% data variables.product.prodname_github_app %}, consulta "[Niveles de permiso para una organización](/articles/permission-levels-for-an-organization#github-app-managers)".

## Giving someone the ability to manage all {% data variables.product.prodname_github_apps %} owned by the organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. En "Management" (Administración), escribe el nombre de usuario de la persona a quien deseas designar como gerente de {% data variables.product.prodname_github_app %} en la organización, y haz clic en **Grant** (Conceder). ![Agregar un administrador de {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/add-github-app-manager.png)

## Brindar a alguien la posibilidad de administrar un {% data variables.product.prodname_github_app %} individual

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Under "{% data variables.product.prodname_github_apps %}", click on the avatar of the app you'd like to add a {% data variables.product.prodname_github_app %} manager for. ![Seleccionar {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. En "App managers" (Administradores de la app), escribe el nombre de usuario de la persona a quien deseas designar como administrador de la App GitHub para la app, y haz clic en **Grant** (Conceder). ![Agregar un administrador de {% data variables.product.prodname_github_app %} para una app específica](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% ifversion fpt %}
## Leer más

- "[Acerca de {% data variables.product.prodname_dotcom %} Mercado](/articles/about-github-marketplace/)"
{% endif %}
