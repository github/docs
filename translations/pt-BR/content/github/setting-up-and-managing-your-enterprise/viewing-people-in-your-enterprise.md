---
title: Viewing people in your enterprise
intro: 'To audit access to enterprise-owned resources or user license usage, enterprise owners can view every administrator and member of the enterprise.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Viewing enterprise owners{% if currentVersion == "free-pro-team@latest" %} and billing managers{% endif %}

You can view enterprise owners {% if currentVersion == "free-pro-team@latest" %} and billing managers, {% endif %}as well as a list of pending invitations to become owners{% if currentVersion == "free-pro-team@latest" %} and billing managers. You can filter the list of enterprise administrators by role{% endif %}. ou localizar uma determinada pessoa procurando pelo nome de usuário ou o nome completo dela.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
{% if currentVersion == "free-pro-team@latest" %}1. Opcionalmente, para ver uma lista de convites pendentes, clique em **_NÚMERO_ pendente**.
  ![Botão "NÚMERO pendente" à direita das opções de pesquisa e filtro](/assets/images/help/enterprises/administrators-pending.png){% endif %}

### Exibir integrantes e colaboradores externos

Você pode ver o número de integrantes ou colaboradores externos pendentes. You can filter the list of members by {% if currentVersion == "free-pro-team@latest" %}deployment ({% data variables.product.prodname_ghe_cloud %} or {% data variables.product.prodname_ghe_server %}),{% endif %}role {% if currentVersion == "free-pro-team@latest" %}, and{% elsif currentVersion == "github-ae@latest" %}or {% endif %}organization. Também é possível filtrar a lista de colaboradores externos pela visibilidade dos repositórios aos quais o colaborador tem acesso. Ou localizar uma determinada pessoa procurando pelo nome de usuário ou o nome de exibição dela.

You can view {% if currentVersion == "free-pro-team@latest" %}all the {% data variables.product.prodname_ghe_cloud %} organizations and {% data variables.product.prodname_ghe_server %} instances that a member belongs to, and {% endif %}which repositories an outside collaborator has access to{% if currentVersion == "free-pro-team@latest" %}, {% endif %} by clicking on the person's name.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Como alternativa, clique em **Outside collaborators** (Colaboradores externos) para exibir uma lista deles em vez de uma lista de integrantes. ![Guia Outside collaborators (Colaboradores externos) na página Organization members (Integrantes da organização)](/assets/images/help/business-accounts/outside-collaborators-tab.png)
{% if currentVersion == "free-pro-team@latest" %}1. Opcionalmente, para ver uma lista de convites pendentes, clique em **_NÚMERO_ pendente**.
  ![Botão "NÚMERO pendente" à direita das opções de pesquisa e filtro](/assets/images/help/enterprises/members-pending.png){% endif %}

### Leia mais

- "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)"
