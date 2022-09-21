---
title: Como permitir a autenticação interna para usuários de fora do seu provedor
intro: 'Você pode configurar a autenticação de fallback para permitir a autenticação interna para pessoas que não têm uma conta no provedor de autenticação CAS, LDAP ou SAML.'
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
ms.openlocfilehash: d011a710898e19dfdfa3591cbba2cbf7ae629885
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064431'
---
## Sobre a autenticação interna para usuários de fora do seu provedor

Por padrão, quando você habilita a autenticação externa para o {% data variables.product.product_name %}, a autenticação interna é desabilitada para sua instância. Para obter mais informações, consulte "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication)".

Se não for possível adicionar contas específicas ao seu provedor de autenticação externa, como contas para prestadores de serviços ou usuários de computador, você poderá configurar a autenticação de fallback. A autenticação de fallback permite a autenticação interna para usuários externos e o acesso a uma conta de fallback se o provedor de autenticação não estiver disponível.

Se você configurar a autenticação interna e uma pessoa se autenticar com êxito com SAML ou CAS, ela não terá mais a opção de se autenticar com nome de usuário e senha. Se o usuário se autenticar com êxito via LDAP, as credenciais não serão mais consideradas internas.

{% warning %}

**Aviso:** se você desabilitar a autenticação interna, precisará suspender individualmente os usuários que não precisam mais ter acesso à instância. Para obter mais informações, confira "[Como suspender usuários e cancelar a suspensão deles](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)".

{% endwarning %}

## Configurar a autenticação interna para usuários de fora do provedor de identidade

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. Selecione seu provedor de identidade.
  ![Opção Selecionar provedor de identidade](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. Selecione **Permitir a criação de contas com a autenticação interna**.
  ![Opção Selecionar autenticação interna](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. Leia o aviso e clique em **OK**.

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## Convidar usuários de fora do provedor de identidade para autenticação na sua instância

Quando aceitar o convite, o usuário poderá fazer login com seu próprio nome de usuário e senha, em vez de fazer login via IdP.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %} {% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

## Leitura adicional

- "[Usar o CAS para IAM empresarial](/admin/identity-and-access-management/using-cas-for-enterprise-iam)"
- "[Usar LDAP para IAM empresarial](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)"
- "[Usar SAML para IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam)"
