---
title: Convidar pessoas para gerenciar sua empresa
intro: É possível convidar pessoas para se tornarem proprietários ou gerentes de cobrança em sua conta corporativa. Também é possível remover proprietários ou gerentes de cobrança corporativos que não precisam mais acessar a conta corporativa.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account/
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Enterprise
---
### Sobre convidar pessoas para gerenciar sua conta corporativa

{% data reusables.enterprise-accounts.enterprise-administrators %} Para obter mais informações, consulte "[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise).

{% tip %}

**Dica:** para obter mais informações sobre como gerenciar usuários em uma organização de sua conta corporativa, consulte "[Gerenciar integrantes em sua organização](/articles/managing-membership-in-your-organization)" e "[Gerenciar acessos de pessoas à sua organização com funções](/articles/managing-peoples-access-to-your-organization-with-roles)".

{% endtip %}

### Convidar um administrador para sua conta corporativa

Somente proprietários corporativos podem convidar outras pessoas para se tornarem administradores corporativos.

Depois que você convidou alguém para participar da conta corporativa, a pessoa deve aceitar o convite enviado por e-mail antes de acessar a conta corporativa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
3. Na barra lateral esquerda, clique em **Administrators** (Administradores). ![Aba Administrators (Administradores) na barra lateral esquerda](/assets/images/help/business-accounts/administrators-tab.png)
4. Acima da lista de administradores, clique em **Invite admin** (Convidar administrador). ![Botão Invite admin (Convidar administrador) acima da lista de enterprise owners (proprietários corporativos)](/assets/images/help/business-accounts/invite-admin-button.png)
5. Digite o nome de usuário, nome completo ou endereço de e-mail da pessoa que você quer convidar para ser um administrador corporativo e depois selecione a pessoa adequada a partir dos resultados. ![Caixa de diálogo modal com campo para digitar o nome de usuário da pessoa, nome completo ou endereço de e-mail e botão Invite (Convidar)](/assets/images/help/business-accounts/invite-admins-modal-button.png)
6. Selecione **Owner** (Proprietário) ou **Billing Manager** (Gerente de cobrança). ![Caixa de diálogo modal com opções de funções](/assets/images/help/business-accounts/invite-admins-roles.png)
7. Clique em **Send Invitation** (Enviar convite). ![Botão Send invitation (Enviar convite)](/assets/images/help/business-accounts/invite-admins-send-invitation.png)

### Remover um administrador de sua conta corporativa

Somente proprietários corporativos podem remover outros administradores corporativos da conta corporativa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
3. Ao lado do nome de usuário da pessoa que você deseja remover, clique em {% octicon "gear" aria-label="The Settings gear" %} e depois em **Remove owner** (Remover proprietário) ou **Remove billing manager** (Remover gerente de cobrança). ![Ajuste de configurações com menu option (opções) para remover um administrador corporativo](/assets/images/help/business-accounts/remove-admin.png)
