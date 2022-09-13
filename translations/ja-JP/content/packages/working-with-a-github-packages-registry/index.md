---
title: GitHub Packagesレジストリの利用
shortTitle: Working with a GitHub Packages registry
intro: 'サポートされている{% data variables.product.prodname_registry %}レジストリの利用方法を学んでください。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145140444'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %} {% ifversion fpt or ghec %} ![Docker、コンテナー レジストリ、RubyGems、npm、Apache Maven、NuGet、Gradle のパッケージ サポートを示した図](/assets/images/help/package-registry/packages-diagram-with-container-registry.png) {% else %} ![Docker、RubyGems、npm、Apache Maven、Gradle、NuGet、Docker のパッケージ サポートを示した図](/assets/images/help/package-registry/packages-diagram-without-container-registry.png) {% endif %}
