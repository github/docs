---
title: GitHub 包文档
shortTitle: GitHub Packages
intro: '了解如何安全地发布和使用包，将包与代码存储在一起，以及与您的团队私下分享或与开源社区公开分享您的包。 还可以使用 {% data variables.product.prodname_actions %} 自动执行您的包。'
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
---

<!--This section is needed to determine the order of the left sidebar for now-->
