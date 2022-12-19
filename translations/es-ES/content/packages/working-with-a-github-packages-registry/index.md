---
title: Trabajar con un registro de Paquetes de GitHub
shortTitle: Working with a GitHub Packages registry
intro: 'Aprende a utilizar el registro compatible del {% data variables.product.prodname_registry %}.'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-your-projects-ecosystem
  - /packages/using-github-packages-with-your-projects-ecosystem
  - /packages/guides
  - /packages/guides/package-client-guides-for-github-packages
  - /packages/guides/container-guides-for-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
children:
  - /working-with-the-container-registry
  - /working-with-the-docker-registry
  - /working-with-the-rubygems-registry
  - /working-with-the-npm-registry
  - /working-with-the-apache-maven-registry
  - /working-with-the-gradle-registry
  - /working-with-the-nuget-registry
  - /migrating-to-the-container-registry-from-the-docker-registry
ms.openlocfilehash: 69cfbe84b6c443a29066a4234ae29f557c305d38
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145140445'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %} {% ifversion fpt or ghec %} ![Diagrama en el que se muestra la compatibilidad de paquetes con Docker, el registro de contenedor, RubyGems, npm, Apache Maven, NuGet y Gradle](/assets/images/help/package-registry/packages-diagram-with-container-registry.png) {% else %} ![Diagrama en el que se muestra la compatibilidad de paquetes con Docker, RubyGems, npm, Apache Maven, Gradle, NuGet y Docker](/assets/images/help/package-registry/packages-diagram-without-container-registry.png) {% endif %}
