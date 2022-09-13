---
title: Trabalhar com um registro do GitHub Packages
shortTitle: Working with a GitHub Packages registry
intro: 'Aprenda a usar um registro compatível de {% data variables.product.prodname_registry %}.'
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
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145128255'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %} {% ifversion fpt or ghec %} ![Diagrama que mostra o suporte a pacotes para Docker, Registro de Contêiner, RubyGems, npm, Apache Maven, NuGet e Gradle](/assets/images/help/package-registry/packages-diagram-with-container-registry.png) {% else %} ![Diagrama que mostra o suporte a pacotes para Docker, RubyGems, npm, Apache Maven, Gradle e NuGet](/assets/images/help/package-registry/packages-diagram-without-container-registry.png) {% endif %}
