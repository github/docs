---
title: Fazendo o download dos códigos de recuperação do logon único da conta corporativa
shortTitle: Download dos códigos de recuperação
intro: 'Para garantir que você possa acessar {% data variables.product.product_name %} se o seu provedor de identidade (IdP) estiver indisponível, você deverá fazer o download dos códigos de recuperação do logon único (SSO) da sua conta corporativa.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
redirect_from:
  - /admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-saml-single-sign-on-recovery-codes
permissions: Enterprise owners can download the SSO recovery codes for the enterprise account.
---

Caso seu IdP esteja indisponível, você pode usar um código de recuperação para efetuar o login e acessar seu negócio em {% data variables.product.product_location %}. Para obter mais informações, consulte "[Acessar a sua conta corporativa se seu provedor de identidade estiver indisponível](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)".

Se você não salvou seus códigos de recuperação ao configurar SSO, você ainda poderá acessá-los nas configurações da sua empresa.



{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}

1. Under{% ifversion oidc-for-emu %} either{% endif %} "Exigir autenticação do SAML"{% ifversion oidc-for-emu %} ou "Exigir autenticação do OIDC"{% endif %}, clique em **Salvar os seus códigos de recuperação**.{% ifversion oidc-for-emu %}
  {% note %}

  **Observação:** O SSO do OIDC só está disponível para {% data variables.product.prodname_emus %}. Para obter mais informações, consulte[Sobre usuários gerenciados pela empresa](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)".

  {% endnote %}{% endif %}

  ![Captura de tela do botão para testar a configuração do SAML antes de aplicar](/assets/images/help/enterprises/saml-recovery-codes-link.png)
1. Para salvar seus códigos de recuperação, clique em **Download**, **Imprimir**ou **Copiar**. ![Captura de tela dos botões para fazer o download, imprimir ou copiar seus códigos de recuperação](/assets/images/help/saml/saml_recovery_code_options.png)
