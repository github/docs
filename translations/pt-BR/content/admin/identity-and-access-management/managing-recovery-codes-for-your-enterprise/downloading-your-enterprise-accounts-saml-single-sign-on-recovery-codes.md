---
title: Fazendo o download dos códigos de recuperação do logon único SAML da conta corporativa
shortTitle: Download dos códigos de recuperação
intro: 'Para garantir que você possa acessar {% data variables.product.product_name %} se o seu provedor de identidade (IdP) estiver indisponível, você deverá fazer o download dos códigos de recuperação do logon único SAML (SSO) da sua conta corporativa.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
permissions: Enterprise owners can download the SAML SSO recovery codes for the enterprise account.
---

Caso seu IdP esteja indisponível, você pode usar um código de recuperação para efetuar o login e acessar seu negócio em {% data variables.product.product_location %}. Para obter mais informações, consulte "[Acessar a sua conta corporativa se seu provedor de identidade estiver indisponível](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)".

Se você não salvou seus códigos de recuperação ao configurar SAML SSO, você ainda poderá acessá-los nas configurações da sua empresa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}

1. Em "Exigir autenticação do SAML", clique em **Salvar seus códigos de recuperação**. ![Captura de tela do botão para testar a configuração do SAML antes de aplicar](/assets/images/help/enterprises/saml-recovery-codes-link.png)

2. Para salvar seus códigos de recuperação, clique em **Download**, **Imprimir**ou **Copiar**. ![Captura de tela dos botões para fazer o download, imprimir ou copiar seus códigos de recuperação](/assets/images/help/saml/saml_recovery_code_options.png)
