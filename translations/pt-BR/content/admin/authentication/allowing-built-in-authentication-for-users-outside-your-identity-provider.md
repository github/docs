---
title: Permitir a autenticação integrada para usuários de fora do provedor de identidade
intro: 'Com a autenticação integrada, você pode autenticar usuários que não têm acesso ao seu provedor de identidade que usa LDAP, SAML ou CAS.'
redirect_from:
  - /enterprise/admin/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

### Sobre a autenticação integrada para usuários de fora do provedor de identidade

É possível usar a autenticação integrada para usuários externos quando você não conseguir adicionar contas específicas ao seu provedor de identidade (IdP), como contas de contratados ou usuários de máquinas. Você também pode usar a autenticação integrada para acessar uma conta de fallback se o provedor de identidade não estiver disponível.

Após a configuração da autenticação integrada, quando um usuário se autenticar com êxito via SAML ou CAS, ele não poderá se autenticar com nome de usuário e senha. Se o usuário se autenticar com êxito via LDAP, as credenciais não serão mais consideradas internas.

A autenticação integrada para um IdP específico fica desabilitada por padrão.

{% warning %}

**Aviso:** se desabilitar a autenticação integrada, você terá que suspender individualmente todos os usuários que não devem mais ter acesso à instância. Para obter mais informações, consulte "[Suspender e cancelar a suspensão de usuários](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)".

{% endwarning %}

### Configurar a autenticação integrada para usuários de fora do provedor de identidade

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. Selecione seu provedor de identidade. ![Opção Select identity provider (Selecionar provedor de identidade)
](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. Selecione **Allow creation of accounts with built-in authentication** (Permitir a criação de contas com autenticação integrada). ![Opção Select built-in authentication (Selecionar autenticação integrada)](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. Leia o aviso e clique em **Ok**.

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

### Convidar usuários de fora do provedor de identidade para autenticação na sua instância

Quando aceitar o convite, o usuário poderá fazer login com seu próprio nome de usuário e senha, em vez de fazer login via IdP.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

### Leia mais

- /enterprise/{{ page.version }}/admin/guides/user-management/using-ldap
- [Usar SAML](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-saml)
- [Usar CAS](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-cas)
