---
title: Exibir pessoas com acesso ao seu repositório
intro: 'Você pode visualizar{% ifversion ghec or ghes or ghae %} e exportar{% endif %} uma lista de pessoas com acesso a um repositório dentro de uma organização.'
redirect_from:
  - /articles/viewing-people-with-access-to-your-repository
  - /github/setting-up-and-managing-organizations-and-teams/viewing-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Visualizar pessoas com acesso
permissions: Organization owners can view people with access to a repository.
---

## Sobre a lista de pessoas com acesso ao seu repositório

Você pode usar essas informações para ajudar pessoas fora do quadro, coletar dados para conformidade e outras verificações gerais de segurança.

{% ifversion fpt %}
As organizações que usam {% data variables.product.prodname_ghe_cloud %} também podem exportar uma lista CSV de pessoas que têm acesso a um repositório. Para obter mais informações, consulte [a documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-access-to-your-organizations-repositories/viewing-people-with-access-to-your-repository).
{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
![Acessar visão geral do gerenciamento ](/assets/images/help/repository/manage-access-overview.png)
{% else %}
![Lista de permissões para pessoas no repositório](/assets/images/help/repository/repository-permissions-list.png)
{% endif %}
## Exibir pessoas com acesso ao seu repositório

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
Você pode ver uma visão geral combinada de equipes e pessoas com acesso ao seu repositório nas configurações do repositório. Para obter mais informações, consulte "[Gerenciar equipes e pessoas com acesso ao seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories). "
{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
{% endif %}

{% ifversion ghec or ghes or ghae %}
## Exportar uma lista de pessoas com acesso a um repositório

{% ifversion ghec %}
{% note %}

**Observação:** Somente as organizações que usam {% data variables.product.prodname_ghe_cloud %} podem exportar uma lista de pessoas com acesso a um repositório. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
4. Clique em **Export CSV** (Exportar CSV). ![Guia People (Pessoas) na barra lateral do repositório](/assets/images/help/repository/export-repository-permissions.png)
{% endif %}
