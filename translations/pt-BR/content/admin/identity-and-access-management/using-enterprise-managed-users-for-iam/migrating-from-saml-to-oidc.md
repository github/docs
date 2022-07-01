---
title: Migrando do SAML para o OIDC
shortTitle: Migrando do SAML para o OIDC
intro: 'Se você estiver usando o SAML para autenticar os integrantes no seu {% data variables.product.prodname_emu_enterprise %}, você pode migrar para o OpenID Connect (OIDC) e beneficiar-se do suporte para a Política de Acesso Condicional do seu IdP.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
---

{% data reusables.enterprise-accounts.oidc-beta-notice %}

## Sobre a migração de seu {% data variables.product.prodname_emu_enterprise %} do SAML para o OIDC

Se seu {% data variables.product.prodname_emu_enterprise %} usa o SSO SAML para efetuar a autenticação com o Azure Active Directory (Azure AD), você pode migrar para o OIDC. {% data reusables.enterprise-accounts.emu-cap-validates %}

Ao migrar do SAML para OIDC, {% data variables.product.prodname_managed_users %} e os grupos que foram provisionados anteriormente para o SAML mas não são provisionados pelo aplicativo de {% data variables.product.prodname_emu_idp_oidc_application %} terão "(SAML)" anexados aos seus nomes de exibição.

Se você for novo em {% data variables.product.prodname_emus %} e ainda não configurou a autenticação para a sua empresa, você não precisa migrar e pode configurar o logon único do OIDC imediatamente. Para obter mais informações, consulte "[Configurando o OIDC para Usuários Gerenciados pela Empresa](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)."

## Realizando a migração da sua empresa

{% note %}

**Observação:** Para efetuar o login como usuário de configuração, você precisará de um código de recuperação. Se você ainda não possui seus códigos de recuperação, você pode acessar os códigos enquanto estiver conectado como um proprietário corporativo. Para obter mais informações, consulte "[Fazendo o download dos códigos de recuperação do logon único único da sua conta corporativa](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)."

{% endnote %}

1. Antes de iniciar a migração, inicie sessão no Azure e desabilite o provisionamento no aplicativo de {% data variables.product.prodname_emu_idp_application %} existente.
1.  Efetue o login em {% data variables.product.prodname_dotcom_the_website %} como usuário de configuração da sua empresa com o nome de usuário **@<em>SHORT-CODE</em>_admin**.
1. Quando solicitado para continuar com o provedor de identidade, clique em **Usar um código de recuperação** e efetue o login usando um dos códigos de recuperação da empresa.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Na parte inferior da página, ao lado de "Migrar para o logon único do OpenID Connect", clique em **Configurar com Azure**.
   {% warning %}

   **Aviso:** A migração pode levar até uma hora, e é importante que nenhum usuário seja provisionado durante a migração. Você pode confirmar se a migração ainda está em andamento retornando à página de configurações de segurança da sua empresa; se "Exigir autenticação SAML" estiver verificada, a migração ainda está em andamento.

   {% endwarning %}

   ![Captura de tela que mostra o botão "Configurar com o Azure"](/assets/images/help/enterprises/saml-to-oidc-button.png)
1. Leia as duas advertências e clique para continuar.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %}
1. Em uma nova aba ou janela, enquanto estiver conectado como o usuário de configuração em {% data variables.product.prodname_dotcom_the_website %}, cria um token de acesso pessoal com o escopo **admin:enterprise** e **sem expiração** e copie-o para a área de transferência. Para obter mais informações sobre como criar um novo token, consulte "[Criando um token de acesso pessoal](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token)."
1. Nas configurações para o aplicativo de {% data variables.product.prodname_emu_idp_oidc_application %} no Azure Portal, sob "Tenant URL", digite `https://api.github. om/scim/v2/enterprises/YOUR_ENTERPRISE`substituindo YOUR_ENTERPRISE pelo nome da sua conta corporativa.

   Por exemplo, se o URL da sua conta corporativa é `https://github.com/enterprises/octo-corp`, o nome da conta corporativa é `octo-corp`.
1. Em "Token do segredo", cole o token de acesso pessoal com o escopo **admin:enterprise** que você criou anteriormente.
1. Para testar a configuração, clique em **Testar Conexão**.
1. Para salvar suas alterações, na parte superior do formulário, clique em **Salvar**.
1. No portal do Azure, copie os usuários e grupos do aplicativo antigo de {% data variables.product.prodname_emu_idp_application %} para o novo aplicativo de {% data variables.product.prodname_emu_idp_oidc_application %}.
1. Teste sua configuração provisionando um único novo usuário.
1. Se o teste for bem-sucedido, comece a provisionar para todos os usuários clicando em **Comece a provisionar**.
