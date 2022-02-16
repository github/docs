---
title: Exibir pessoas com acesso ao seu repositório
intro: 'Os proprietários da organização podem ver o acesso das pessoas a um repositório dentro de uma organização. Os proprietários de organizações que usam o {% data variables.product.prodname_ghe_cloud %} ou o {% data variables.product.prodname_ghe_server %} também podem exportar uma lista CSV de pessoas que têm acesso a um repositório.'
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
---

Os administradores podem usar essas informações para ajudar pessoas fora do quadro, coletar dados para conformidade e outras verificações gerais de segurança.
{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
![Acessar visão geral do gerenciamento ](/assets/images/help/repository/manage-access-overview.png)
{% else %}
![Lista de permissões para pessoas no repositório](/assets/images/help/repository/repository-permissions-list.png)
{% endif %}
## Exibir pessoas com acesso ao seu repositório

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
You can see a combined overview of teams and people with access to your repository in your repository settings. Para obter mais informações, consulte "[Gerenciar equipes e pessoas com acesso ao seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories). "
{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
{% endif %}
## Exportar uma lista de pessoas com acesso a um repositório

Os proprietários de organizações no {% data variables.product.prodname_ghe_cloud %} ou no {% data variables.product.prodname_ghe_server %} podem exportar uma lista CSV de pessoas que têm acesso a um repositório.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
4. Clique em **Export CSV** (Exportar CSV). ![Guia People (Pessoas) na barra lateral do repositório](/assets/images/help/repository/export-repository-permissions.png)
