---
title: Configurar a autenticação integrada
intro: 'Quando você usa o método de autenticação padrão, todos os detalhes de autenticação ficam armazenados em {% data variables.product.product_location %}.'
permissions: 'Site administrators can configure authentication for a {% data variables.product.product_name %} instance.'
redirect_from:
  - /enterprise/admin/user-management/using-built-in-authentication
  - /enterprise/admin/authentication/using-built-in-authentication
  - /admin/authentication/using-built-in-authentication
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Configurar autenticação integrada
---

## Sobre a autenticação integrada

Por padrão, {% data variables.product.product_name %} usa autenticação integrada. Cada pessoa cria uma conta de usuário em {% data variables.product.product_location %} a partir de um convite ou efetuando a inscrição, e, em seguida, efetua a autenticação com as credenciais para que a conta acesse sua instância. Sua instância do {% data variables.product.product_name %} armazena as informações de autenticação para a conta.

Você pode impedir que pessoas não autenticadas criem novas contas em sua instância. Para obter mais informações, consulte "[Desabilitando inscrições não autenticadas](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups)".

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## Configurar a autenticação integrada

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. Selecione **Built in authentication** (Autenticação integrada). ![Opção Select built-in authentication (Selecionar autenticação integrada)](/assets/images/enterprise/management-console/built-in-auth-select.png)

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

## Criando a sua conta

Uma vez que sua instância foi criada, você deverá criar a sua própria conta de administrador.

1. Na página "Create Admin Account" (Criar conta de administrador) em `http(s)://[hostname]/join`, defina seu nome de usuário, senha e endereço de e-mail. Em seguida, clique em **Create an account** (Criar conta). ![Criar conta de administrador](/assets/images/enterprise/site-admin-settings/create-first-admin-acct.png)
{% data reusables.enterprise_site_admin_settings.sign-in %}

## Próximas etapas

<a name="inviting-users"></a>

Após configurar a autenticação integrada e criar sua conta administrativa, você pode convidar pessoas para criar contas e usar sua instância. Para obter mais informações, consulte[Convidando pessoas para usar a sua instância](/admin/identity-and-access-management/using-built-in-authentication/inviting-people-to-use-your-instance)."

## Leia mais

- "[Configurar e-mail para notificações](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)"
