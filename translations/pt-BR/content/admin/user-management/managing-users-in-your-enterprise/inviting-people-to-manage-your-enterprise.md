---
title: Convidar pessoas para gerenciar sua empresa
intro: 'Você pode {% ifversion ghec %}convidar pessoas para se tornarem proprietários corporativos ou gerentes de cobrança para{% elsif ghes %}adicionar proprietários corporativos à conta corporativa{% endif %}. Você também pode remover proprietários corporativos {% ifversion ghec %}ou gerentes de cobrança {% endif %}que não precisam mais de acesso à conta corporativa.'
permissions: 'Enterprise owners can {% ifversion ghec %}invite other people to become{% elsif ghes %}add{% endif %} additional enterprise administrators.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Convidar pessoas para gerenciar
---

## Sobre os usuários que podem gerenciar a sua conta corporativa

{% data reusables.enterprise-accounts.enterprise-administrators %} Para obter mais informações, consulte "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)."

{% ifversion ghes %}

Se você deseja gerenciar os proprietários e gerentes de cobrança para uma conta corporativa em {% data variables.product.prodname_dotcom_the_website %}, consulte "[Convidando pessoas para gerenciar sua empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)" na documentação do {% data variables.product.prodname_ghe_cloud %}.

{% endif %}

{% ifversion ghec %}

Se sua empresa usa {% data variables.product.prodname_emus %}, os proprietários da empresa só poderão ser adicionados ou removidos por meio do seu provedor de identidade. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."

{% endif %}

{% tip %}

**Dica:** para obter mais informações sobre como gerenciar usuários em uma organização de sua conta corporativa, consulte "[Gerenciar integrantes em sua organização](/articles/managing-membership-in-your-organization)" e "[Gerenciar acessos de pessoas à sua organização com funções](/articles/managing-peoples-access-to-your-organization-with-roles)".

{% endtip %}

## {% ifversion ghec %}Convidando{% elsif ghes %}adicionando{% endif %} um administrador corporativo à sua conta corporativa

{% ifversion ghec %}Depois de convidar alguém para juntar-se à conta corporativa, a pessoa deverá aceitar o convite por e-mail antes que possa acessar a conta corporativa. Convites pendentes vencem após 7 dias.{% endif %}

{% ifversion enterprise-membership-view-improvements %}
É possível ver todos os convites pendentes para se tornar um administrador da sua conta corporativa. Para obter mais informações, consulte "[Visualizar pessoas na sua empresa](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-pending-invitations)".
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
1. Acima da lista de administradores, clique em {% ifversion ghec %}**Convidar administrador**{% elsif ghes %}**Add proprietário**{% endif %}.
  {% ifversion ghec %}
  ![Botão "Convidar administrador" acima da lista de proprietários corporativos](/assets/images/help/business-accounts/invite-admin-button.png)
  {% elsif ghes %}
  ![Botão "Adicionar o proprietário" acima da lista de proprietários corporativos](/assets/images/help/business-accounts/add-owner-button.png)
  {% endif %}
1. Digite o nome de usuário, nome completo ou endereço de e-mail da pessoa que você quer convidar para ser um administrador corporativo e depois selecione a pessoa adequada a partir dos resultados. ![Modal box with field to type a person's username, full name, or email address, and Invite button](/assets/images/help/business-accounts/invite-admins-modal-button.png){% ifversion ghec %}
1. Selecione **Owner** (Proprietário) ou **Billing Manager** (Gerente de cobrança). ![Caixa de diálogo modal com opções de funções](/assets/images/help/business-accounts/invite-admins-roles.png)
1. Clique em **Send Invitation** (Enviar convite). ![Send invitation button](/assets/images/help/business-accounts/invite-admins-send-invitation.png){% endif %}{% ifversion ghes %}
1. Clique em **Salvar**. !["Add" button](/assets/images/help/business-accounts/add-administrator-add-button.png){% endif %}

## Remover um administrador de sua conta corporativa

Somente proprietários corporativos podem remover outros administradores corporativos da conta corporativa.

{% ifversion ghec %}
Se o administrador que você deseja remover for integrante de quaisquer organizações pertencentes à empresa, você poderá escolher **Converter em integrante**, que eliminará a sua função administrativa, mas manterá os integrantes da sua organização ou **Remover da empresa**, o que removerá suas funções administrativas e associações à organização.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
1. Ao lado do nome de usuário da pessoa que você deseja remover, clique em {% octicon "gear" aria-label="The Settings gear" %}, em seguida, clique em {% ifversion ghes %}**Remover dono**{% elsif ghec %}**Converter em integrante** ou **Remover da empresa**.{% endif %}.
  {% ifversion ghec %}
  ![Ajuste de configurações com menu option (opções) para remover um administrador corporativo](/assets/images/help/business-accounts/remove-admin.png)
  {% elsif ghes %}
  ![Ajuste de configurações com menu option (opções) para remover um administrador corporativo](/assets/images/help/business-accounts/ghes-remove-owner.png)
  {% endif %}
1. Leia a confirmação e, em seguida, clique em {% ifversion ghes %}**Remover o proprietário**{% elsif ghec %}**Sim, converter nome de usuário em integrante**{% endif %}.
