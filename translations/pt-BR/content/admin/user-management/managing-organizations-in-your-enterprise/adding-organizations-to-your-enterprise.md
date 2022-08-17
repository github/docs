---
title: Adicionando organizações à sua empresa
intro: É possível criar novas organizações ou convidar organizações existentes para gerenciar dentro da sua empresa.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /articles/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account
versions:
  ghec: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Adicionar organizações
permissions: Enterprise owners can add organizations to an enterprise.
---

## About addition of organizations to your enterprise account

Sua conta corporativa pode ser proprietária de organizações. Os integrantes da sua empresa podem colaborar em projetos relacionados dentro de uma organização. Para obter mais informações, consulte "[Sobre organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

You can add new organizations to your enterprise account. If you do not use {% data variables.product.prodname_emus %}, you can add existing organizations on {% data variables.product.product_location %} to your enterprise. You cannot add an existing organization from an {% data variables.product.prodname_emu_enterprise %} to a different enterprise.

{% data reusables.enterprise.create-an-enterprise-account %} Para obter mais informações, consulte "[Criando uma conta corporativa](/admin/overview/creating-an-enterprise-account)".

After you add an existing organization to your enterprise, the organization's resources remain accessible to members at the same URLs, and the following changes will apply.

- The organization's members will become members of the enterprise, and {% data variables.product.company_short %} will bill the enterprise account for the organization's usage. You must ensure that the enterprise account has enough licenses to accommodate any new members. Para obter mais informações, consulte "[Sobre a cobrança para a sua empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".
- Enterprise owners can manage their role within the organization. Para obter mais informações, consulte "[Gerenciando sua função em uma organização pertencente à sua empresa](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)".
- Any policies applied to the enterprise will apply to the organization. For more information, see "[About enterprise policies](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)."
- If SAML SSO is configured for the enterprise account, the enterprise's SAML configuration will apply to the organization. If the organization used SAML SSO, the enterprise account's configuration will replace the organization's configuration. SCIM is not available for enterprise accounts, so SCIM will be disabled for the organization. For more information, see "[Configuring SAML single sign-on for your enterprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)" and "[Switching your SAML configuration from an organization to an enterprise account](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)."
- If SAML SSO was configured for the organization, members' existing personal access tokens (PATs) or SSH keys that were authorized to access the organization's resources will be authorized to access the same resources. To access additional organizations owned by the enterprise, members must authorize the PAT or key. Para mais informações consulte "[Autorizar um token de acesso pessoal para usar com o logon único SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" e "[Autorizar uma chave SSH para uso com o logon único SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."
- If the organization was connected to {% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_managed %} using {% data variables.product.prodname_github_connect %}, adding the organization to an enterprise will not update the connection. {% data variables.product.prodname_github_connect %} features will no longer function for the organization. To continue using {% data variables.product.prodname_github_connect %}, you must disable and re-enable the feature. Para obter mais informações, consulte os seguintes artigos.

  - "[Gerenciando {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/managing-github-connect)" na documentação de {% data variables.product.prodname_ghe_server %}
  - "[Gerenciando {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/managing-github-connect)" na documentação de {% data variables.product.prodname_ghe_managed %}
- If the organization used billed {% data variables.product.prodname_marketplace %} apps, the organization can continue to use the apps, but must pay the vendor directly. For more information, contact the app's vendor.

## Criar uma organização em sua conta corporativa

Novas organizações que você cria nas configurações de sua conta corporativa são incluídas na assinatura da conta corporativa do {% data variables.product.prodname_ghe_cloud %}.

Os proprietários da empresa que criam uma organização pertencente à conta corporativa automaticamente se tornam proprietários da organização. Para obter mais informações sobre os proprietários da organização, consulte "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

{% data reusables.enterprise-accounts.access-enterprise %}
2. Na guia **Organizations** (Organizações), acima da lista de organizações, clique em **New organization** (Nova organização). ![Botão New organization (Nova organização)](/assets/images/help/business-accounts/enterprise-account-add-org.png)
3. Em "Organization name" (Nome da organização), digite um nome para sua organização. ![Campo para digitar o nome da nova organização](/assets/images/help/business-accounts/new-organization-name-field.png)
4. Clique em **Create organization** (Criar organização).
5. Em "Invite owners" (Convidar proprietários), digite o nome de usuário de uma pessoa que deseja convidar para se tornar um proprietário da organização e clique em **Invite** (Convidar). ![Campo de pesquisa do proprietário da organização e botão Invite (Convidar)](/assets/images/help/business-accounts/invite-org-owner.png)
6. Clique em **Finalizar**.

## Convidar uma organização para se juntar-se à sua conta corporativa

Os proprietários corporativos podem convidar organizações existentes para juntar-se à sua conta corporativa. Se a organização que deseja convidar já pertence a outra empresa, você não poderá enviar um convite até que a empresa anterior desista da propriedade da organização. Para obter mais informações, consulte "[Removendo uma organização da sua empresa](/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise)."

{% data reusables.enterprise-accounts.access-enterprise %}
2. Na aba **Organizações**, acima da lista de organizações, clique em **Convidar organização**. ![Convidar organização](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. Em "Organização", comece a digitar o nome da organização que deseja convidar e selecione-a quando aparecer na lista suspensa. ![Pesquisar organização](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. Clique em **Convidar organização**.
5. Os proprietários da organização receberão um e-mail convidando-os para participar da empresa. Pelo menos um proprietário deverá aceitar o convite antes que o processo possa continuar. Você pode cancelar ou reenviar o convite a qualquer momento antes que um proprietário o aprove. ![Cancelar ou reenviar](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. Uma vez que o proprietário da organização tenha aprovado o convite, você poderá ver o seu estado na lista de convites pendentes. ![Convite pendente](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. Clique em **Aprovar** para concluir a transferência ou **Cancelar** para cancelá-la. ![Aprovar convite](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)
