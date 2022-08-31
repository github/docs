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

## Sobre a adição de organizações à conta corporativa

Sua conta corporativa pode ser proprietária de organizações. Os integrantes da sua empresa podem colaborar em projetos relacionados dentro de uma organização. Para obter mais informações, consulte "[Sobre organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

É possível adicionar novas organizações à conta corporativa. Se você não usar {% data variables.product.prodname_emus %}, você poderá adicionar organizações existentes em {% data variables.product.product_location %} à sua empresa. Não é possível adicionar uma organização existente a partir de um {% data variables.product.prodname_emu_enterprise %} a uma empresa diferente.

{% data reusables.enterprise.create-an-enterprise-account %} Para obter mais informações, consulte "[Criando uma conta corporativa](/admin/overview/creating-an-enterprise-account)".

Após adicionar uma organização existente à sua empresa, os recursos da organização permanecerão acessíveis aos integrantes nas mesmas URLs e serão aplicadas as seguintes alterações.

- Os integrantes da organização irão tornar-se integrantes da empresa e {% data variables.product.company_short %} cobrarão à conta corporativa o uso da organização. Você deve garantir que a conta corporativa tenha licenças suficientes para acomodar todos os novos integrantes. Para obter mais informações, consulte "[Sobre a cobrança para a sua empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".
- Os proprietários das empresas podem gerenciar a sua função na organização. Para obter mais informações, consulte "[Gerenciando sua função em uma organização pertencente à sua empresa](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)".
- Todazs as políticas aplicadas à empresa irão aplicar-se à organização. Para obter mais informações, consulte "[Sobre as políticas corporativas](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)".
- Se o SSO SAML estiver configurado para a conta corporativa, a configuração SAML da empresa será aplicada à organização. Se a organização usou o SSO SAML, a configuração da conta corporativa substituirá a configuração da organização. O SCIM não está disponível para contas corporativas, portanto, o SCIM será desabilitado para a organização. Para obter mais informações, consulte "[Configurando logon único SAML para a sua empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)" e "[Alterando a configuração do SAML de uma organização para uma conta corporativa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".
- Se o SAML SSO foi configurado para a organização, tokens de acesso pessoal existentes dos integrantes (PATs) ou chaves SSH autorizadas a acessar os recursos da organização terão a autorização para acessar os mesmos recursos. Para acessar outras organizações pertencentes à empresa, os integrantes devem autorizar o PAT ou a chave. Para mais informações consulte "[Autorizar um token de acesso pessoal para usar com o logon único SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" e "[Autorizar uma chave SSH para uso com o logon único SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."
- Se a organização foi conectada a {% data variables.product.prodname_ghe_server %} ou {% data variables.product.prodname_ghe_managed %} usando {% data variables.product.prodname_github_connect %}, a adição da organização a uma empresa não atualizará a conexão. As funcionalidades de {% data variables.product.prodname_github_connect %} não funcionarão mais para a organização. Para continuar usando {% data variables.product.prodname_github_connect %}, você deve desabilitar e reabilitar o recurso. Para obter mais informações, consulte os seguintes artigos.

  - "[Gerenciando {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/managing-github-connect)" na documentação de {% data variables.product.prodname_ghe_server %}
  - "[Gerenciando {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/managing-github-connect)" na documentação de {% data variables.product.prodname_ghe_managed %}
- Se a organização usou aplicativos de {% data variables.product.prodname_marketplace %} cobrados, a organização pode continuar usando os aplicativos, mas deve pagar o fornecedor diretamente. Para mais informações, entre em contato com o fornecedor do aplicativo.

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
