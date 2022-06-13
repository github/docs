---
title: Acessando a conta corporativa se seu provedor de identidade estiver indisponível
shortTitle: Acesse sua conta corporativa
intro: 'Você pode efetuar o login em {% data variables.product.product_name %}, mesmo que o seu provedor de identidade esteja indisponível ignorando logon único (SSO) com um código de recuperação.'
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

Você pode usar um código de recuperação para acessar a sua conta corporativa quando um erro de configuração de autenticação ou um problema com o seu provedor de identidade (IdP) impede que você use o SSO.

Para acessar a conta corporativa desta forma, você deve ter baixado e armazenado previamente os códigos de recuperação da sua empresa. Para obter mais informações, consulte "[Fazendo o download dos códigos de recuperação do logon único único da sua conta corporativa](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)."

{% data reusables.saml.recovery-code-caveats %}

{% note %}

**Observação:** Se as suas empresas usarem {% data variables.product.prodname_emus %}, você deverá entrar como usuário de configuração para usar um código de recuperação.

{% endnote %}

{% data reusables.saml.recovery-code-access %}
