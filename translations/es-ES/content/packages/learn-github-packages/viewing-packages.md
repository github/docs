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
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4fe01f80ec64f8029b1b2bce1d776da4eddfbd75
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192845'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## Ver paquetes de un repositorio

Tu capacidad de ver un paquete depende de varios factores. Predeterminadamente, puedes ver todos los paquetes que hayas publicado.

{% ifversion packages-registries-v2 %} Los paquetes con ámbito de repositorio heredan sus permisos y visibilidad del repositorio que posee el paquete. Algunos registros **solo** admiten paquetes con ámbito de repositorio. Para obtener una lista de estos registros, consulta "[Acerca de los permisos de {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)".

Los demás registros te ofrecen la opción de contar con permisos detallados y configuraciones de visibilidad que se pueden personalizar para cada paquete que pertenezca a un usuario personal o a una cuenta de organización. Puedes elegir utilizar permisos detallados o conectar el paquete a un repositorio y heredar los permisos del repositorio. Para obtener más información, consulta "[Conexión de un repositorio a un paquete](/packages/learn-github-packages/connecting-a-repository-to-a-package)" y "[Configuración del control de acceso y la visibilidad de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".

{% else %}

Los paquetes heredan sus permisos y visibilidad del repositorio en el que se hospedan. Para más información, vea "[Acerca de los permisos para {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)".

{% endif %}

{% data reusables.package_registry.package-page-info %}

## Visualizar los paquetes de un repositorio

Puedes encontrar y ver un paquete que se ubique en un repositorio particular.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.navigate-to-packages %}

## Visualizar los paquetes de una organización

Puedes ver y encontrar un paquete que se ubique en los repositorios de una organización a la cual pertenezcas.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. En el nombre de la organización, haga clic en {% octicon "package" aria-label="The package icon" %} **Packages**.
{% data reusables.package_registry.navigate-to-packages %}

## Visualizar tus paquetes

Puedes encontrar y ver cualquier paquete que hayas publicado en cualquier organización y repositorio. 

{% data reusables.profile.access_profile %}
2. En la parte superior de la página del perfil, en el panel de navegación principal, haga clic en **Packages**.
  ![Pestaña Project](/assets/images/help/package-registry/user-packages-tab.png) {% data reusables.package_registry.navigate-to-packages %}

## Información adicional

- "[Búsqueda de paquetes](/search-github/searching-on-github/searching-for-packages)"
