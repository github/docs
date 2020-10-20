---
title: 안내서
shortTitle: 안내서
intro: 'These guides for {% data variables.product.prodname_actions %} include specific use cases and examples to help you configure workflows.'
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

### Creating custom continuous integration workflows

You can use {% data variables.product.prodname_actions %} to create custom continuous integration (CI) workflows that build and test projects written in different programming languages.

{% link_in_list /about-continuous-integration %}
{% link_in_list /setting-up-continuous-integration-using-workflow-templates %}
{% link_in_list /building-and-testing-nodejs %}
{% link_in_list /building-and-testing-python %}
{% link_in_list /building-and-testing-java-with-maven %}
{% link_in_list /building-and-testing-java-with-gradle %}
{% link_in_list /building-and-testing-java-with-ant %}

### Publishing software packages

You can automate publishing software packages as part your continuous delivery (CD) workflow. Packages can be published to any package host and to {% data reusables.gated-features.packages %}.

{% link_in_list /about-packaging-with-github-actions %}
{% link_in_list /publishing-nodejs-packages %}
{% link_in_list /publishing-java-packages-with-maven %}
{% link_in_list /publishing-java-packages-with-gradle %}
{% link_in_list /publishing-docker-images %}

### Caching and storing workflow data

Cache dependencies and store artifacts to make your workflow runs more efficient.

{% link_in_list /storing-workflow-data-as-artifacts %}
{% link_in_list /caching-dependencies-to-speed-up-workflows %}

### Using service containers in a workflow

Connect services to your workflow using service containers.

{% link_in_list /about-service-containers %}
{% link_in_list /creating-redis-service-containers %}
{% link_in_list /creating-postgresql-service-containers %}
