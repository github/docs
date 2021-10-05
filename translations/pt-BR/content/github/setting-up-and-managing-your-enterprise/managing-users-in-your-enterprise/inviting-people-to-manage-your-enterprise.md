---
title: Convidar pessoas para gerenciar sua empresa
intro: 'You can {% ifversion fpt %}invite people to become enterprise owners or billing managers for{% elsif ghes %}add enterprise owners to{% endif %} your enterprise account. You can also remove enterprise owners {% ifversion fpt %}or billing managers {% endif %}who no longer need access to the enterprise account.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: 'Enterprise owners can {% ifversion fpt %}invite other people to become{% elsif ghes %}add{% endif %} additional enterprise administrators.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account/
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Convidar pessoas para gerenciar
---

## About users who can manage your enterprise account

{% data reusables.enterprise-accounts.enterprise-administrators %} Para obter mais informações, consulte "[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)."

{% ifversion ghes %}

If you want to manage owners and billing managers for an enterprise account on {% data variables.product.prodname_dotcom_the_website %}, see "[Inviting people to manage your enterprise](/free-pro-team@latest/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)" in the {% data variables.product.prodname_dotcom_the_website %} documentation.

{% endif %}

{% tip %}

**Dica:** para obter mais informações sobre como gerenciar usuários em uma organização de sua conta corporativa, consulte "[Gerenciar integrantes em sua organização](/articles/managing-membership-in-your-organization)" e "[Gerenciar acessos de pessoas à sua organização com funções](/articles/managing-peoples-access-to-your-organization-with-roles)".

{% endtip %}

## {% ifversion fpt %}Inviting{% elsif ghes %}Adding{% endif %} an enterprise administrator to your enterprise account

{% ifversion fpt %}After you invite someone to join the enterprise account, they must accept the emailed invitation before they can access the enterprise account.{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Na barra lateral esquerda, clique em **Administrators** (Administradores). ![Aba Administrators (Administradores) na barra lateral esquerda](/assets/images/help/business-accounts/administrators-tab.png)
1. Above the list of administrators, click {% ifversion fpt %}**Invite admin**{% elsif ghes %}**Add owner**{% endif %}.
  {% ifversion fpt %}
  !["Invite admin" button above the list of enterprise owners](/assets/images/help/business-accounts/invite-admin-button.png)
  {% elsif ghes %}
  !["Add owner" button above the list of enterprise owners](/assets/images/help/business-accounts/add-owner-button.png)
  {% endif %}
1. Digite o nome de usuário, nome completo ou endereço de e-mail da pessoa que você quer convidar para ser um administrador corporativo e depois selecione a pessoa adequada a partir dos resultados. ![Modal box with field to type a person's username, full name, or email address, and Invite button](/assets/images/help/business-accounts/invite-admins-modal-button.png){% ifversion fpt %}
1. Selecione **Owner** (Proprietário) ou **Billing Manager** (Gerente de cobrança). ![Caixa de diálogo modal com opções de funções](/assets/images/help/business-accounts/invite-admins-roles.png)
1. Clique em **Send Invitation** (Enviar convite). ![Send invitation button](/assets/images/help/business-accounts/invite-admins-send-invitation.png){% endif %}{% ifversion ghes %}
1. Clique em **Salvar**. !["Add" button](/assets/images/help/business-accounts/add-administrator-add-button.png){% endif %}

## Remover um administrador de sua conta corporativa

Somente proprietários corporativos podem remover outros administradores corporativos da conta corporativa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Next to the username of the person you'd like to remove, click {% octicon "gear" aria-label="The Settings gear" %}, then click **Remove owner**{% ifversion fpt %} or **Remove billing manager**{% endif %}.
  {% ifversion fpt %}
  ![Ajuste de configurações com menu option (opções) para remover um administrador corporativo](/assets/images/help/business-accounts/remove-admin.png)
  {% elsif ghes %}
  ![Ajuste de configurações com menu option (opções) para remover um administrador corporativo](/assets/images/help/business-accounts/ghes-remove-owner.png)
  {% endif %}
1. Read the confirmation, then click **Remove owner**{% ifversion fpt %} or **Remove billing manager**{% endif %}.
