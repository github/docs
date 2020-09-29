---
title: Exibir pessoas com acesso ao seu repositório
intro: 'Os proprietários da organização podem ver o acesso das pessoas a um repositório dentro de uma organização. Os proprietários de organizações que usam o {% data variables.product.prodname_ghe_cloud %} ou o {% data variables.product.prodname_ghe_server %} também podem exportar uma lista CSV de pessoas que têm acesso a um repositório.'
redirect_from:
  - /articles/viewing-people-with-access-to-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Os administradores podem usar essas informações para ajudar pessoas fora do quadro, coletar dados para conformidade e outras verificações gerais de segurança.

![Lista de permissões para pessoas no repositório](/assets/images/help/repository/repository-permissions-list.png)

### Exibir pessoas com acesso ao seu repositório

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Observação**: Você também pode ver uma visão geral combinada das equipes e pessoas com acesso ao seu repositório. Para obter mais informações, consulte "[Gerenciar equipes e pessoas com acesso ao seu repositório](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository). "

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}

### Exportar uma lista de pessoas com acesso a um repositório

Os proprietários de organizações no {% data variables.product.prodname_ghe_cloud %} ou no {% data variables.product.prodname_ghe_server %} podem exportar uma lista CSV de pessoas que têm acesso a um repositório.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
4. Clique em **Export CSV** (Exportar CSV). ![Guia People (Pessoas) na barra lateral do repositório](/assets/images/help/repository/export-repository-permissions.png)
