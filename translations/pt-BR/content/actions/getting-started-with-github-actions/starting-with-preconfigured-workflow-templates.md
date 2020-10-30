---
title: Começando com modelos de fluxo de trabalho pré-configurados
intro: 'O {% data variables.product.prodname_dotcom %} fornece modelos de fluxo de trabalho pré-configurados para automatizar seu fluxo de trabalho ou criar um fluxo de trabalho de CI para idiomas e estruturas específicos.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre os modelos do fluxo de trabalho

O {% data variables.product.product_name %} analisa seu código e mostra os modelos de CI mais adequados para o seu repositório. Por exemplo, se o seu repositório contiver o código Node.js, você verá sugestões para projetos Node.js. Você pode usar os modelos do fluxo de trabalho como um ponto de partida para criar o fluxo de trabalho personalizado ou usá-los como se apresentam.

Você pode pesquisar a lista completa de modelos de CI no repositório [ações/fluxos de trabalho de início](https://github.com/actions/starter-workflows/tree/master/ci). Também é possível encontrar modelos para automatizar seu fluxo de trabalho. Também é possível encontrar modelos para automatizar seu fluxo de trabalho.

### Adicionar seu primeiro modelo de fluxo de trabalho

Se você ainda não adicionou um fluxo de trabalho ao seu repositório, você verá uma lista de modelos de fluxo de trabalho para escolher.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.actions-set-up-workflow-template %}

### Adicionar outros modelos do fluxo de trabalho

Se você já tiver um fluxo de trabalho e desejar adicionar um novo modelo do fluxo de trabalho, você poderá navegar até os modelos de fluxo de trabalho.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.actions-new-workflow %}
{% data reusables.repositories.actions-set-up-workflow-template %}
