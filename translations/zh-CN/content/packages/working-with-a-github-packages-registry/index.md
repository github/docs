---
title: 使用 GitHub Packages 注册表
shortTitle: Working with a GitHub Packages registry
intro: '了解如何使用受支持的 {% data variables.product.prodname_registry %} 注册表。'
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
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130303'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %} {% ifversion fpt or ghec %} ![显示对 Docker、容器注册表、RubyGems、npm、Apache Maven、NuGet 和 Gradle 的包支持的图表](/assets/images/help/package-registry/packages-diagram-with-container-registry.png) {% else %} ![显示对 Docker、RubyGems、npm、Apache Maven、Gradle、NuGet 和 Docker 的包支持的图表](/assets/images/help/package-registry/packages-diagram-without-container-registry.png) {% endif %}
