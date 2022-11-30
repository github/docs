---
title: Visualizar pessoas na sua empresa
intro: 'Para auditar o acesso à utilização de licença de usuário ou de recursos pertencentes à empresa, os proprietários corporativos podem exibir todos os administradores e integrantes da empresa.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---
### Visualizar proprietários corporativos{% if currentVersion == "free-pro-team@latest" %} e gerentes de cobrança{% endif %}

Você pode ver os proprietários corporativos {% if currentVersion == "free-pro-team@latest" %} e gerentes de cobrança, {% endif %}bem como uma lista de convites pendentes para se tornarem proprietários{% if currentVersion == "free-pro-team@latest" %} e gerentes de cobrança. Você pode filtrar a lista de administradores corporativos por função{% endif %}. ou localizar uma determinada pessoa procurando pelo nome de usuário ou o nome completo dela.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
{% if currentVersion == "free-pro-team@latest" %}1. Opcionalmente, para ver uma lista de convites pendentes, clique em **_NÚMERO_ pendente**.
  ![Botão "NÚMERO pendente" à direita das opções de pesquisa e filtro](/assets/images/help/enterprises/administrators-pending.png){% endif %}

### Exibir integrantes e colaboradores externos

Você pode ver o número de integrantes ou colaboradores externos pendentes. Você pode filtrar a lista de integrantes por {% if currentVersion == "free-pro-team@latest" %}implantação ({% data variables.product.prodname_ghe_cloud %} ou {% data variables.product.prodname_ghe_server %}),{% endif %} função{% if currentVersion == "free-pro-team@latest" %} e{% else %} ou {% endif %} organização. Também é possível filtrar a lista de colaboradores externos pela visibilidade dos repositórios aos quais o colaborador tem acesso. Ou localizar uma determinada pessoa procurando pelo nome de usuário ou o nome de exibição dela.

Você pode visualizar {% if currentVersion == "free-pro-team@latest" %}todas as organizações de {% data variables.product.prodname_ghe_cloud %} e as instâncias de {% data variables.product.prodname_ghe_server %} às quais um membro pertence e {% endif %}quais repositórios um colaborador externo tem acesso a{% if currentVersion == "free-pro-team@latest" %}, {% endif %} clicando no nome da pessoa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Como alternativa, clique em **Outside collaborators** (Colaboradores externos) para exibir uma lista deles em vez de uma lista de integrantes. ![Guia Outside collaborators (Colaboradores externos) na página Organization members (Integrantes da organização)](/assets/images/help/business-accounts/outside-collaborators-tab.png)
{% if currentVersion == "free-pro-team@latest" %}1. Opcionalmente, para ver uma lista de convites pendentes, clique em **_NÚMERO_ pendente**.
  ![Botão "NÚMERO pendente" à direita das opções de pesquisa e filtro](/assets/images/help/enterprises/members-pending.png){% endif %}

### Leia mais

- "[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)"
