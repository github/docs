---
title: GitHub Packages documentation
shortTitle: GitHub Packages
intro: 'Learn to safely publish and consume packages, store your packages alongside your code, and share your packages privately with your team or publicly with the open source community. You can also automate your packages with {% data variables.product.prodname_actions %}.'
introLinks:
  quickstart: /packages/quickstart
  reference: /packages/manage-packages
featuredLinks:
  startHere:
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
    - /packages/working-with-a-github-packages-registry/working-with-the-container-registry
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
---
<!--This section is needed to determine the order of the left sidebar for now-->
