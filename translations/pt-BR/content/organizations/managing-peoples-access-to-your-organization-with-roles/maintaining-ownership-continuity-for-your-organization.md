---
title: Manter a continuidade da propriedade para sua organização
intro: As organizações podem ter mais de um proprietário para evitar intermitências de propriedade.
redirect_from:
  - /articles/changing-a-person-s-role-to-owner
  - /articles/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/managing-ownership-continuity-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization
permissions: Organization owners can promote any member of an organization to an organization owner.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manter continuidade da propriedade
---

## Sobre a manutenção da continuidade da propriedade da sua organização

{% data reusables.organizations.org-ownership-recommendation %}

Os proprietários da organização têm pleno acesso administrativo à organização. {% data reusables.organizations.new-org-permissions-more-info %}

{% note %}

**Observação**: Como proprietário de uma organização, você pode alterar a função dos outros integrantes e proprietários da organização. Você não pode mudar a sua própria função.

{% endnote %}

{% ifversion enterprise-owner-join-org %}
Se sua organização é propriedade de uma conta corporativa, qualquer proprietário corporativo pode fazer de si mesmo um proprietário de sua organização. Para obter mais informações, consulte "[Gerenciando sua função em uma organização pertencente à sua empresa](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)".
{% endif %}

## Designar um proprietário da organização

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
4. Selecione a(s) pessoa(s) que deseja promover a proprietário. ![Lista de integrantes com dois integrantes selecionados](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Acesse o menu suspenso que está acima da lista de integrantes e clique em **Change role** (Alterar função). ![Menu suspenso com opção de remover integrantes](/assets/images/help/teams/user-bulk-management-options.png)
6. Selecione uma nova função para a(s) pessoa(s) e clique em **Change role** (Alterar função). ![Botões de opção com funções de proprietário e integrante e botão Change role (Alterar função)](/assets/images/help/teams/select-and-confirm-new-role-bulk.png)
