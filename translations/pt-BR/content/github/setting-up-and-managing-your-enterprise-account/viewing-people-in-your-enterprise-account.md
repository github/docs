---
title: Exibir pessoas na conta corporativa
intro: 'Para auditar o acesso à utilização de licença de usuário ou de recursos pertencentes à empresa, os proprietários corporativos podem exibir todos os administradores e integrantes da conta corporativa.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/viewing-people-in-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Exibir proprietários corporativos e gerentes de cobrança

Você pode exibir proprietários corporativos e gerentes de cobrança, além de uma lista de convites pendentes para quem deseja se tornar proprietário e gerente de cobrança. É possível filtrar a lista de administradores corporativos por função ou localizar uma determinada pessoa procurando pelo nome de usuário ou o nome completo dela.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
1. Opcionalmente, para ver uma lista de convites pendentes, clique em **_NÚMERO_ pendente**. ![Botão "NÚMERO pendente" à direita das opções de pesquisa e filtro](/assets/images/help/enterprises/administrators-pending.png)

### Exibir integrantes e colaboradores externos

Você pode ver o número de integrantes ou colaboradores externos pendentes. Ou pode filtrar a lista de integrantes por organização, função e ({% data variables.product.prodname_ghe_cloud %} ou {% data variables.product.prodname_ghe_server %}) de implantação. Também é possível filtrar a lista de colaboradores externos pela visibilidade dos repositórios aos quais o colaborador tem acesso. Ou localizar uma determinada pessoa procurando pelo nome de usuário ou o nome de exibição dela.

Você pode exibir todas as organizações do {% data variables.product.prodname_ghe_cloud %} e instâncias do {% data variables.product.prodname_ghe_server %} a que um integrante pertence e os repositórios aos quais um colaborador externo tem acesso, simplesmente clicando no nome da pessoa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Como alternativa, clique em **Outside collaborators** (Colaboradores externos) para exibir uma lista deles em vez de uma lista de integrantes. ![Guia Outside collaborators (Colaboradores externos) na página Organization members (Integrantes da organização)](/assets/images/help/business-accounts/outside-collaborators-tab.png)
1. Opcionalmente, para ver uma lista de convites pendentes, clique em **_NÚMERO_ pendente**. ![Botão "NÚMERO pendente" à direita das opções de pesquisa e filtro](/assets/images/help/enterprises/members-pending.png)

### Leia mais

- "[Funções em contas corporativas](/articles/roles-for-an-enterprise-account)"
