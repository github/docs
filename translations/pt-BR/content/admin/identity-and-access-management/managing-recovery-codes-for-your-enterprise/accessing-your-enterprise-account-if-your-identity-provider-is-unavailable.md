---
title: Acessando a conta corporativa se seu provedor de identidade estiver indisponível
shortTitle: Acesse sua conta corporativa
intro: 'You can sign into {% data variables.product.product_name %} even if your identity provider is unavailable by bypassing single sign-on (SSO) with a recovery code.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
permissions: Enterprise owners can use a recovery code to access an enterprise account.
---

You can use a recovery code to access your enterprise account when a authentication configuration error or an issue with your identity provider (IdP) prevents you from using SSO.

Para acessar a conta corporativa desta forma, você deve ter baixado e armazenado previamente os códigos de recuperação da sua empresa. For more information, see "[Downloading your enterprise account's single sign-on recovery codes](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)."

{% data reusables.saml.recovery-code-caveats %}

{% note %}

**Observação:** Se as suas empresas usarem {% data variables.product.prodname_emus %}, você deverá entrar como usuário de configuração para usar um código de recuperação.

{% endnote %}

{% data reusables.saml.recovery-code-access %}
