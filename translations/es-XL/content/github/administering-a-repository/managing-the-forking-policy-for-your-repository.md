---
title: Administrar la política de ramificación para tu repositorio
intro: 'Puedes permitir o prevenir la ramificación de un repositorio privado {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} o interno {% endif %} en específico que sea propiedad de una organización.'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
permissions: People with admin permissions for a repository can manage the forking policy for the repository.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

El propietario de la organización debe permitir que las ramificaciones de repositorios privados {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} e internos {% endif %} a nivel organizacional antes de que puedas permitir o impedir las ramificaciones de un repositorio específico. Para obtener más información, consulta "[Administrar la política de ramificación para tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization)."

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En "Features" (Características), selecciona **Allow forking** (Permitir bifurcación). ![Casilla de verificación para permitir o prohibir la bifurcación de un repositorio privado](/assets/images/help/repository/allow-forking-specific-org-repo.png)

### Leer más

- "[Acerca de las bifurcaciones](/articles/about-forks)"
- "[Niveles de permiso del repositorio para una organización](/articles/repository-permission-levels-for-an-organization)"
