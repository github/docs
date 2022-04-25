---
title: Permitindo autenticação integrada para usuários fora do seu provedor
intro: 'Você pode configurar a autenticação padrão para permitir a autenticação integrada para pessoas que não têm uma conta no seu provedor de autenticação CAS, LDAP ou SAML.'
redirect_from:
  - /enterprise/admin/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Fallback authentication
---

## Sobre a autenticação integrada para usuários fora do seu provedor

Por padrão, quando você habilitar a autenticação externa para {% data variables.product.product_name %}, a autenticação integrada está desabilitada para sua instância. Para obter mais informações, consulte "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication)".

If you're unable to add specific accounts to your external authentication provider, such as accounts for contractors or machine users, you can configure fallback authentication. Fallback authentication allows built-in authentication for outside users and to access a fallback account if your authentication provider is unavailable.

Se você configurar a autenticação integrada e uma pessoa autenticada com sucesso com o SAML ou CAS, a pessoa não terá mais a opção de realizar a autenticação com um nome de usuário e senha. Se o usuário se autenticar com êxito via LDAP, as credenciais não serão mais consideradas internas.

{% warning %}

**Aviso:** se desabilitar a autenticação integrada, você terá que suspender individualmente todos os usuários que não devem mais ter acesso à instância. Para obter mais informações, consulte "[Suspender e cancelar a suspensão de usuários](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)."

{% endwarning %}

## Configurando a autenticação interna para usuários fora do seu provedor

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. Selecione seu provedor de identidade. ![Opção Select identity provider (Selecionar provedor de identidade)
](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. Selecione **Allow creation of accounts with built-in authentication** (Permitir a criação de contas com autenticação integrada). ![Opção Select built-in authentication (Selecionar autenticação integrada)](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. Leia o aviso e clique em **Ok**.

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

## Convidando usuários fora do seu provedor para efetuar a autenticação na sua instância

Quando aceitar o convite, o usuário poderá fazer login com seu próprio nome de usuário e senha, em vez de fazer login via IdP.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

## Leia mais

- "[Usando CAS para IAM corporativo](/admin/identity-and-access-management/using-cas-for-enterprise-iam)"
- "[Usando LDAP para IAM corporativo](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)"
- "[Usando SAML para IAM corporativo](/admin/identity-and-access-management/using-saml-for-enterprise-iam)"
