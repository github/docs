---
title: Usar a autenticação integrada
intro: 'Quando você usa o método de autenticação padrão, todos os detalhes de autenticação ficam armazenados na {% data variables.product.product_location %}. Se você ainda não tiver um provedor de autenticação estabelecido, como LDAP, SAML ou CAS, a autenticação integrada é o método padrão.'
redirect_from:
  - /enterprise/admin/user-management/using-built-in-authentication
  - /enterprise/admin/authentication/using-built-in-authentication
  - /admin/authentication/using-built-in-authentication
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
---
Você pode criar mensagens personalizadas que os usuários verão nas páginas de login e logout. Para obter mais informações, consulte "[Personalizar mensagens de usuário na instância](/enterprise/admin/user-management/customizing-user-messages-on-your-instance)".

### Configurar a autenticação integrada

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. Selecione **Built in authentication** (Autenticação integrada). ![Opção Select built-in authentication (Selecionar autenticação integrada)](/assets/images/enterprise/management-console/built-in-auth-select.png)

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

### Criar uma conta e adicionar usuários

Após a criação da sua instância, você terá que criar a sua conta de administrador e usá-la para provisionar os usuários.

1. Na página "Create Admin Account" (Criar conta de administrador) em `http(s)://[hostname]/join`, defina seu nome de usuário, senha e endereço de e-mail. Em seguida, clique em **Create an account** (Criar conta). ![Criar conta de administrador](/assets/images/enterprise/site-admin-settings/create-first-admin-acct.png)
{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}
