---
title: 指南
shortTitle: 指南
intro: '{% data variables.product.prodname_actions %} 的这些指南包含具体的使用案例和示例来帮助您配置工作流程。'
redirect_from:
  - /actions/guides/caching-and-storing-workflow-data
  - /actions/automating-your-workflow-with-github-actions/using-databases-and-services
  - /actions/configuring-and-managing-workflows/using-databases-and-service-containers
  - /actions/guides/using-databases-and-service-containers
  - /actions/language-and-framework-guides
  - /actions/language-and-framework-guides/github-actions-for-docker
  - /actions/language-and-framework-guides/github-actions-for-java
  - /actions/language-and-framework-guides/github-actions-for-javascript-and-typescript
  - /actions/language-and-framework-guides/github-actions-for-python
  - /actions/publishing-packages-with-github-actions
  - /actions/building-and-testing-code-with-continuous-integration
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 创建自定义持续集成工作流程

您可以使用 {% data variables.product.prodname_actions %} 来创建自定义的持续集成 (CI) 工作流程，以构建并测试以不同编程语言编写的项目。

{% link_in_list /about-continuous-integration %}
{% link_in_list /setting-up-continuous-integration-using-workflow-templates %}
{% link_in_list /building-and-testing-nodejs %}
{% link_in_list /building-and-testing-python %}
{% link_in_list /building-and-testing-java-with-maven %}
{% link_in_list /building-and-testing-java-with-gradle %}
{% link_in_list /building-and-testing-java-with-ant %}

### 发布软件包

您可以自动发布软件包，作为持续交付 (CD) 工作流程的一部分。 软件包可以发布到任何软件包主机以及 {% data reusables.gated-features.packages %}。

{% link_in_list /about-packaging-with-github-actions %}
{% link_in_list /publishing-nodejs-packages %}
{% link_in_list /publishing-java-packages-with-maven %}
{% link_in_list /publishing-java-packages-with-gradle %}
{% link_in_list /publishing-docker-images %}

### 缓存和存储工作流程数据

缓存依赖项和存储构件以提高工作流程运行效率。

{% link_in_list /storing-workflow-data-as-artifacts %}
{% link_in_list /caching-dependencies-to-speed-up-workflows %}

### 在工作流程中使用服务容器

使用服务容器将服务连接到您的工作流程。

{% link_in_list /about-service-containers %}
{% link_in_list /creating-redis-service-containers %}
{% link_in_list /creating-postgresql-service-containers %}
