---
title: Downloading your enterprise account's single sign-on recovery codes
shortTitle: Download dos códigos de recuperação
intro: 'To ensure that you can access {% data variables.product.product_name %} if your identity provider (IdP) is unavailable, you should download your enterprise account''s single sign-on (SSO) recovery codes.'
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

If you did not save your recovery codes when you configured SSO, you can still access the codes from your enterprise's settings.



{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}

1. Under{% if oidc-for-emu %} either{% endif %} "Require SAML authentication"{% if oidc-for-emu %} or "Require OIDC authentication"{% endif %}, click **Save your recovery codes**.{% if oidc-for-emu %}
  {% note %}

  **Note:** OIDC SSO is only available for {% data variables.product.prodname_emus %}. Para obter mais informações, consulte[Sobre usuários gerenciados pela empresa](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)".

  {% endnote %}{% endif %}

  ![Captura de tela do botão para testar a configuração do SAML antes de aplicar](/assets/images/help/enterprises/saml-recovery-codes-link.png)
1. Para salvar seus códigos de recuperação, clique em **Download**, **Imprimir**ou **Copiar**. ![Captura de tela dos botões para fazer o download, imprimir ou copiar seus códigos de recuperação](/assets/images/help/saml/saml_recovery_code_options.png)
