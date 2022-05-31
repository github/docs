---
title: Revisar las integraciones instaladas de tu organización
intro: Puedes revisar los niveles de permiso para las integraciones instaladas de tu organización y configurar cada accedo de integración a los repositorios de la organización.
redirect_from:
  - /articles/reviewing-your-organization-s-installed-integrations
  - /articles/reviewing-your-organizations-installed-integrations
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-your-organizations-installed-integrations
  - /organizations/keeping-your-organization-secure/reviewing-your-organizations-installed-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Revisar las integraciones instaladas
---

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. En la sección de "Integraciones" de la barra lateral, haz clic en **{% octicon "apps" aria-label="The apps icon" %} {% data variables.product.prodname_github_apps %}**.
{% else %}
1. En la barra lateral izquierda, haz clic en **{% data variables.product.prodname_github_apps %} Instaladas**. ![Pestaña de {% data variables.product.prodname_github_apps %} instaladas en la barra lateral de parámetros de la organización](/assets/images/help/organizations/org-settings-installed-github-apps.png)
{% endif %}
2. Al lado de la {% data variables.product.prodname_github_app %} que quieras revisar, haz clic en **Configure** (Configurar). ![Botón Configure (Configurar)](/assets/images/help/organizations/configure-installed-integration-button.png)
6. Revisa el acceso al repositorio y los permisos de {% data variables.product.prodname_github_app %}. ![Opción para darle acceso a {% data variables.product.prodname_github_app %} a todos los repositorios o a repositorios específicos](/assets/images/help/organizations/toggle-integration-repo-access.png)
    - Para darle acceso a la {% data variables.product.prodname_github_app %} a todos los repositorios de tu organización, selecciona **All repositories** (Todos los repositorios).
    - Para elegir repositorios específicos para darle acceso a la aplicación, selecciona **Only select repositories** (Solo repositorios seleccionados), luego escribe el nombre de un repositorio.
7. Haz clic en **Save ** (guardar).
