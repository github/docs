---
title: Visualizar paquetes
intro: 'Puedes ver los detalles de los paquetes que se publican en un repositorio y filtrar los resultados por organización o usuario.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
  - /packages/publishing-and-managing-packages/viewing-packages
permissions: Cualquiera con permisos de lectura en un repositorio puede ver los paquetes del mismo.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

### Ver paquetes de un repositorio

Los paquetes deben estar instalados al nivel del repositorio, pero puedes ver todos los paquetes de una organización y todos los paquetes que has publicado. {% data reusables.package_registry.package-page-info %}

### Visualizar los paquetes de un repositorio

Puedes ver todos los paquetes en un repositorio y buscar paquetes específicos en el mismo.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

### Visualizar los paquetes de una organización

Puedes ver todos los paquetes instalados en una organización y buscar un paquete específico instalado en los repositorios de una organización.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
3. Debajo del nombre de tu organización, da clic en
{% octicon "package" aria-label="The package icon" %} **Paquetes**.
{% data reusables.package_registry.navigate-to-packages %}

### Visualizar tus paquetes

Puedes ver todos los paquetes que has instalado y buscar uno específico en todas las organizaciones y repositorios.

{% data reusables.profile.access_profile %}
2. En la zona de navegación principal, sobre la página de perfil, da clic en **Paquetes**. ![Pestaña Project (Proyecto)](/assets/images/help/package-registry/user-packages-tab.png)
{% data reusables.package_registry.navigate-to-packages %}

### Leer más

- "[Buscar paquetes](/github/searching-for-information-on-github/searching-for-packages)"
