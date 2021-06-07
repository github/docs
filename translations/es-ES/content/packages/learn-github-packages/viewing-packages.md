---
title: Visualizar paquetes
intro: Puedes ver los detalles de los paquetes que se publican en un repositorio y filtrar los resultados por organización o usuario.
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
  - /packages/publishing-and-managing-packages/viewing-packages
  - /packages/manage-packages/viewing-packages
permissions: You must have at least read permissions to view a package.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

### Ver paquetes de un repositorio

Your ability to view a package depends on several factors. By default, you can view all packages you have published.

{% data reusables.package_registry.repo-scoped-and-granular-permissions-packages %}

{% data reusables.package_registry.package-page-info %}

### Visualizar los paquetes de un repositorio

You can find and view a package located in a particular repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

### Visualizar los paquetes de una organización

You can find and view a package located in the repositories of an organization you belong to.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
3. Debajo del nombre de tu organización, haz clic en {% octicon "package" aria-label="The package icon" %} **Packages (Paquetes)**.
{% data reusables.package_registry.navigate-to-packages %}

### Visualizar tus paquetes

You can find and view any package you've published across all organizations and repositories.

{% data reusables.profile.access_profile %}
2. En la zona de navegación principal, sobre la página de perfil, da clic en **Paquetes**. ![Pestaña Project (Proyecto)](/assets/images/help/package-registry/user-packages-tab.png)
{% data reusables.package_registry.navigate-to-packages %}

### Leer más

- "[Buscar paquetes](/github/searching-for-information-on-github/searching-for-packages)"
