---
title: Ver paquetes
intro: Puedes ver detalles de los paquetes publicados en un repositorio y acotar los resultados por organización o por usuario.
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
permissions: Cualquier persona con permisos de lectura para un repositorio puede ver los paquetes del repositorio.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### Ver paquetes de un repositorio

Los paquetes deben estar instalados al nivel del repositorio, pero puedes ver todos los paquetes de una organización y todos los paquetes que has publicado. {% data reusables.package_registry.package-page-info %}

### Ver paquetes de un repositorio

Puedes ver todos los paquetes de un repositorio y buscar un paquete específico en el repositorio.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

### Ver los paquetes de una organización

Puedes ver todos los paquetes instalados en una organización y buscar un paquete específico instalado en los repositorios de una organización.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
3. Debajo del nombre de tu organización, da clic
{% octicon "package" aria-label="The package icon" %} **Packages**.
{% data reusables.package_registry.navigate-to-packages %}

### Ver tus paquetes

Puedes ver todos los paquetes que has instalado y buscar uno específico en todas las organizaciones y repositorios.

{% data reusables.profile.access_profile %}
2. En la parte superior de la página de perfil, en la navegación principal, haz clic en **Packages (Paquetes)**. ![Pestaña Project (Proyecto)](/assets/images/help/package-registry/user-packages-tab.png)
{% data reusables.package_registry.navigate-to-packages %}

### Leer más

- "[Buscar paquetes](/github/searching-for-information-on-github/searching-for-packages)"
