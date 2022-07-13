---
title: Configurando o OIDC para usuários gerenciados por empresas
shortTitle: OIDC para usuários gerenciados
intro: 'Você pode gerenciar automaticamente o acesso à sua conta corporativa em {% data variables.product.prodname_dotcom %} configurando o Slogon único (SSO) do OpenID Connect (OIDC) e habilitar o suporte para a Política de Acesso Condicional (CAP) do seu IdP.'
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

## Sobre o OIDC para usuários gerenciados pela empresa

Com {% data variables.product.prodname_emus %}, sua empresa usa seu provedor de identidade (IdP) para autenticar todos os integrantes. Você pode usar o OpenID Connect (OIDC) para gerenciar a autenticação para o seu {% data variables.product.prodname_emu_enterprise %}. A habilitação do SSO do OIDC é um processo de configuração de um clique com certificados gerenciados por {% data variables.product.prodname_dotcom %} e seu IdP.

{% data reusables.enterprise-accounts.emu-cap-validates %} Para obter mais informações, consulte "[Sobre o suporte à política de acesso condicional do seu IdP](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)."

Você pode ajustar a vida útil de uma sessão e quantas vezes um {% data variables.product.prodname_managed_user %} precisa efetuar a autenticação novamente com seu IdP, alterando a propriedade da política vitalícia dos tokens de ID emitidos para {% data variables.product.prodname_dotcom %} a partir do seu IdP. A vida útil padrão é de uma hora. Para obter mais informações, consulte "[Vida útil do token configurável na plataforma de identidade Microsoft](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-configurable-token-lifetimes)" na documentação do Azure AD.

Se você atualmente usa SAML SSO para autenticação e prefere usar OIDC e se beneficiar do suporte ao CAP, você pode seguir um caminho de migração. Para obter mais informações, consulte "[Migrando do SAML para o OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)."

{% data reusables.enterprise-accounts.oidc-gei-warning %}

## Suporte do provedor de identidade

O suporte para OIDC está em beta público e disponível para clientes que utilizam o Azure Active Directory (Azure AD).

Cada inquilino do Azure AD pode suportar apenas uma integração do OIDC com {% data variables.product.prodname_emus %}. Se você quiser conectar Azure AD a mais de uma empresa em {% data variables.product.prodname_dotcom %}, use o SAML. Para obter mais informações, consulte "[Configurando o logon único SAML para {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users)".

## Configurando o OIDC para usuários gerenciados por empresas

1. Efetue o login em {% data variables.product.prodname_dotcom_the_website %} como usuário de configuração da sua nova empresa com o nome de usuário **@<em>SHORT-CODE</em>_admin**.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Selecione **Exigir logon único do OIDC**.  
   ![Captura de tela que mostra a caixa de seleção "Exige um logon único do OIDC"](/assets/images/help/enterprises/require-oidc.png)
1. Para continuar a configuração e ser redirecionado para O Azure AD, clique em **Salvar**.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %}
{% data reusables.enterprise-accounts.download-recovery-codes %}

## Habilitando o provisionamento

Depois que você habilitar o SSO do OIDC, habilite o provisionamento. Para obter mais informações, consulte "[Configurando o provisionamento de SCIM para usuários gerenciados pela empresa](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)".
