---
title: Документация по GitHub Packages
shortTitle: GitHub Packages
intro: 'Узнайте, как безопасно публиковать и использовать пакеты, хранить пакеты вместе с кодом, а также предоставлять доступ к пакетам в частном порядке вашей команде или делать их открытый код общедоступным для сообщества разработчиков. Вы также можете автоматизировать пакеты с помощью {% data variables.product.prodname_actions %}.'
introLinks:
  quickstart: /packages/quickstart
  reference: /packages/manage-packages
featuredLinks:
  guides:
    - /packages/learn-github-packages
    - /packages/managing-github-packages-using-github-actions-workflows
    - /packages/learn-github-packages/installing-a-package
  popular:
    - /packages/working-with-a-github-packages-registry/working-with-the-npm-registry
    - '{% ifversion docker-ghcr-enterprise-migration %}/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry{% endif %}'
    - /packages/learn-github-packages
    - /packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry
  guideCards:
    - '{% ifversion docker-ghcr-enterprise-migration %}/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry{% endif %}'
    - '{% ifversion fpt or ghec or ghes > 3.4 %}/packages/working-with-a-github-packages-registry/working-with-the-container-registry{% else %}/packages/working-with-a-github-packages-registry/working-with-the-docker-registry{% endif %}'
    - '{% ifversion packages-npm-v2 %}/packages/working-with-a-github-packages-registry/working-with-the-npm-registry{% endif %}'
    - /packages/working-with-a-github-packages-registry/working-with-the-rubygems-registry
changelog:
  label: packages
  prefix: 'Packages: '
redirect_from:
  - /github/managing-packages-with-github-packages
  - /categories/managing-packages-with-github-package-registry
  - /github/managing-packages-with-github-package-registry
layout: product-landing
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
children:
  - /quickstart
  - /learn-github-packages
  - /working-with-a-github-packages-registry
  - /managing-github-packages-using-github-actions-workflows
ms.openlocfilehash: 768e5ea20b7e4242afe7a8880982052ff818df63
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147704934'
---
<!--This section is needed to determine the order of the left sidebar for now-->
