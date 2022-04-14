---
title: Visualizar pessoas na sua empresa
intro: 'Para auditar o acesso à utilização de licença de usuário ou de recursos pertencentes à empresa, os proprietários corporativos podem exibir todos os administradores e integrantes da empresa.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-people-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: Visualizar as pessoas na sua empresa
---

## Visualizar proprietários corporativos{% ifversion ghec %} e gerentes de cobrança{% endif %}

Você pode ver os proprietários corporativos {% ifversion ghec %} e gerentes de cobrança, {% endif %}bem como uma lista de convites pendentes para se tornarem proprietários{% ifversion ghec %} e gerentes de cobrança. Você pode filtrar a lista de administradores corporativos por função{% endif %}. ou localizar uma determinada pessoa procurando pelo nome de usuário ou o nome completo dela.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
{% ifversion ghec %}1. Opcionalmente, para ver uma lista de convites pendentes, clique em **_NÚMERO_ pendente**.
  ![Botão "NÚMERO pendente" à direita das opções de pesquisa e filtro](/assets/images/help/enterprises/administrators-pending.png){% endif %}

## Exibir integrantes e colaboradores externos

Você pode ver o número de integrantes ou colaboradores externos pendentes. Você pode filtrar a lista de integrantes por {% ifversion ghec %}implantação ({% data variables.product.prodname_ghe_cloud %} ou {% data variables.product.prodname_ghe_server %}),{% endif %} função{% ifversion ghec %} e{% else %} ou {% endif %} organização. Também é possível filtrar a lista de colaboradores externos pela visibilidade dos repositórios aos quais o colaborador tem acesso. Ou localizar uma determinada pessoa procurando pelo nome de usuário ou o nome de exibição dela.

Você pode visualizar {% ifversion ghec %}todas as organizações de {% data variables.product.prodname_ghe_cloud %} e as instâncias de {% data variables.product.prodname_ghe_server %} às quais um membro pertence e {% endif %}quais repositórios um colaborador externo tem acesso a{% ifversion ghec %}, {% endif %} clicando no nome da pessoa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Como alternativa, clique em **Outside collaborators** (Colaboradores externos) para exibir uma lista deles em vez de uma lista de integrantes. ![Guia Outside collaborators (Colaboradores externos) na página Organization members (Integrantes da organização)](/assets/images/help/business-accounts/outside-collaborators-tab.png)
{% ifversion ghec %}1. Opcionalmente, para ver uma lista de convites pendentes, clique em **_NÚMERO_ pendente**.
  ![Botão "NÚMERO pendente" à direita das opções de pesquisa e filtro](/assets/images/help/enterprises/members-pending.png){% endif %}

{% ifversion ghec %}

## Visualizando integrantes suspensos em um {% data variables.product.prodname_emu_enterprise %}

Se sua empresa usa {% data variables.product.prodname_emus %}, você também pode visualizar usuários suspensos. Os usuários suspensos são integrantes que foram desprovisionados depois que o aplicativo de {% data variables.product.prodname_emu_idp_application %} cancelou ou excluiu sua atribuição do provedor de identidade. Para obter mais informações, consulte[Sobre usuários gerenciados pela empresa](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Para ver uma lista de integrantes suspensos, acima da lista de integrantes ativos, clique em **Suspensos**. ![Captura de tela que mostra a opção "Suspenso"](/assets/images/help/enterprises/view-suspended-members.png)

{% endif %}

## Exibir usuários inativos

Você pode ver uma lista de todos os usuários desativados {% ifversion ghes or ghae %} que não foram suspensos e {% endif %}que não são administradores do site. {% data reusables.enterprise-accounts.dormant-user-activity-threshold %} Para obter mais informações, consulte "[Gerenciar usuários inativos](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)".

## Leia mais

- "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)"
