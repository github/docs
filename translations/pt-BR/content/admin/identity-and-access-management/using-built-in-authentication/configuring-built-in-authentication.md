---
title: Configurar a autenticação integrada
intro: 'Quando você usa o método de autenticação padrão, todos os detalhes de autenticação são armazenados no {% data variables.product.product_location %}.'
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
shortTitle: Configure built-in authentication
ms.openlocfilehash: 6fbcd68efc953b5a32139a6907975e6918976860
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717810'
---
## Sobre a autenticação integrada

Por padrão, {% data variables.product.product_name %} usa autenticação integrada. Cada pessoa cria uma conta de usuário em {% data variables.product.product_location %} a partir de um convite ou inscrevendo-se e autentica com as credenciais da conta para acessar sua instância. Sua instância de {% data variables.product.product_name %} armazena as informações de autenticação da conta.

Você pode impedir que pessoas não autenticadas criem novas contas de usuário em sua instância. Para obter mais informações, confira "[Desativar inscrições não autenticadas](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups)".

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## Configurar a autenticação integrada

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. Selecione **Autenticação interna**.
![Opção Selecionar autenticação interna](/assets/images/enterprise/management-console/built-in-auth-select.png)

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## Criando a sua conta

Uma vez que sua instância foi criada, você deverá criar a sua própria conta de administrador.

1. Na página "Criar Conta de Administrador" em `http(s)://[hostname]/join`, escolha seu nome de usuário, a senha e o endereço de email e clique em **Criar uma conta**.
![Criar Conta de Administrador](/assets/images/enterprise/site-admin-settings/create-first-admin-acct.png) {% data reusables.enterprise_site_admin_settings.sign-in %}

## Próximas etapas

<a name="inviting-users"></a>

Depois de configurar a autenticação integrada e criar sua conta administrativa, você pode convidar pessoas para criar contas e usar sua instância. Para obter mais informações, confira "[Convidar pessoas para usar sua instância](/admin/identity-and-access-management/using-built-in-authentication/inviting-people-to-use-your-instance)".

## Leitura adicional

- "[Como configurar notificações por email](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)"
