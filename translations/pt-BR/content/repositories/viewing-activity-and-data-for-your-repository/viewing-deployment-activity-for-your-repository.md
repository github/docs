---
title: Exibir atividade de implantação no repositório
intro: É possível exibir informações sobre implantações do repositório inteiro ou de uma pull request específica.
redirect_from:
  - /articles/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/viewing-deployment-activity-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Visualizar atividade de implantação
---

{% note %}

**Observação:** o painel de implantações está disponível em beta e, portanto, sujeito a alterações.

{% endnote %}

Se o fluxo de trabalho de implantação de um repositório estiver integrado ao {% data variables.product.product_name %} por meio da API de implantações ou de um app do [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/category/deployment), pessoas com acesso de leitura ao repositório poderão ter uma visão geral de todas as implantações atuais e ver um log de atividades de implantação passadas. Para obter mais informações, consulte "[Implantações](/rest/reference/repos#deployments)".

Também é possível ver informações de implantação na guia "Conversation" (Conversa) de uma pull request.

## Exibir o painel de implantações

{% data reusables.repositories.navigate-to-repo %}
2. À direita da lista de arquivos, clique em **ambientes**. ![Ambientes à direita da página do repositório](/assets/images/help/repository/environments.png)

## Leia mais
 - "[Sobre pull requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
