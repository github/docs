---
title: Exibir atividade de implantação no repositório
intro: É possível exibir informações sobre implantações do repositório inteiro ou de uma pull request específica.
redirect_from:
  - /articles/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/viewing-deployment-activity-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% note %}

**Observação:** o painel de implantações está disponível em beta e, portanto, sujeito a alterações.

{% endnote %}

Se o fluxo de trabalho de implantação de um repositório estiver integrado ao {% data variables.product.product_name %} por meio da API de implantações ou de um app do [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/category/deployment), pessoas com acesso de leitura ao repositório poderão ter uma visão geral de todas as implantações atuais e ver um log de atividades de implantação passadas. Para obter mais informações, consulte "[Implantações](/rest/reference/repos#deployments)".

Também é possível ver informações de implantação na guia "Conversation" (Conversa) de uma pull request.

### Exibir o painel de implantações

{% data reusables.repositories.navigate-to-repo %}
2. {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}To the right of the list of files, click **Environments**. ![Environments on the right of the repository page](/assets/images/help/repository/environments.png){% else %}Above the list of files, click **Environments**. ![Environments on top of repository page](/assets/images/help/repository/environments-top.png){% endif %}


### Leia mais
 - "[Sobre pull requests](/articles/about-pull-requests)"
