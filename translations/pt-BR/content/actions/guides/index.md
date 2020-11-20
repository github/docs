---
title: Guias
shortTitle: Guias
intro: 'Estes guias para {% data variables.product.prodname_actions %} incluem casos de uso específicos e exemplos para ajudar você a configurar fluxos de trabalho.'
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

### Criar fluxos de trabalho personalizados de integração contínua

Você pode usar o {% data variables.product.prodname_actions %} para criar fluxos de trabalho personalizados de integração contínua (CI) que criam e testam projetos escritos em diferentes linguagens de programação.

{% link_in_list /about-continuous-integration %}
{% link_in_list /setting-up-continuous-integration-using-workflow-templates %}
{% link_in_list /building-and-testing-nodejs %}
{% link_in_list /building-and-testing-powershell %}
{% link_in_list /building-and-testing-python %}
{% link_in_list /building-and-testing-java-with-maven %}
{% link_in_list /building-and-testing-java-with-gradle %}
{% link_in_list /building-and-testing-java-with-ant %}

### Publicar pacotes de software

Você pode automatizar pacotes de software de publicação como parte do fluxo de trabalho de entrega contínua (CD). Os pacotes podem ser publicados em qualquer host de pacote e em {% data reusables.gated-features.packages %}.

{% link_in_list /about-packaging-with-github-actions %}
{% link_in_list /publishing-nodejs-packages %}
{% link_in_list /publishing-java-packages-with-maven %}
{% link_in_list /publishing-java-packages-with-gradle %}
{% link_in_list /publishing-docker-images %}

### Memorizando e armazenando os dados do fluxo de trabalho

Memorize as dependências e armazene os artefatos para fazer com que o seu fluxo de trabalho seja executado de modo mais eficiente.

{% link_in_list /storing-workflow-data-as-artifacts %}
{% link_in_list /caching-dependencies-to-speed-up-workflows %}

### Usar contêineres de serviço em um fluxo de trabalho

Conecte os serviços ao seu fluxo de trabalho usando contêineres de serviço.

{% link_in_list /about-service-containers %}
{% link_in_list /creating-redis-service-containers %}
{% link_in_list /creating-postgresql-service-containers %}
