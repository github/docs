---
title: Alterando os métodos de autenticação
intro: 'A qualquer momento, você pode alterar a forma como o {% data variables.product.prodname_ghe_server %} se autentica com as contas existentes.'
redirect_from:
  - /enterprise/admin/user-management/changing-authentication-methods
  - /enterprise/admin/authentication/changing-authentication-methods
  - /admin/authentication/changing-authentication-methods
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
versions:
  ghes: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Change authentication methods
ms.openlocfilehash: 074c4fe8784d3ea7b8ada6b532e680384571facf
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882688'
---
As contas de usuário do {% data variables.product.product_location %} são preservadas quando você altera o método de autenticação, e os usuários continuarão fazendo logon na mesma conta, desde que não haja alteração nos nomes de usuários.

Se o novo método de autenticação alterar nomes de usuários, serão criadas novas contas. Como administrador, você pode renomear os usuários por meio das configurações de administração do site ou usando [a API de Administração do Usuário](/rest/reference/enterprise-admin#update-the-username-for-a-user).

Veja outras questões que você deve manter em mente:

* **Senhas:** se você mudar para usar a autenticação interna na sua instância, os usuários precisarão [definir uma senha](/enterprise/user/articles/how-can-i-reset-my-password/) após a conclusão da alteração.

* **Administradores do site:** os privilégios administrativos são [controlados pelo provedor de identidade quando você usa o SAML](/enterprise/admin/guides/user-management/using-saml/#saml-attributes) e pode ser [controlado pela associação a um grupo ao usar o LDAP](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance).

* **Associação a uma equipe:** somente o LDAP permite [controlar a associação a uma equipe](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance) no servidor de diretório.

* **Suspensão do usuário:** quando você usa o LDAP para se autenticar, o acesso ao {% data variables.product.prodname_ghe_server %} pode ser controlado por meio de _grupos restritos_. Depois de alternar para o LDAP, se os grupos restritos estiverem configurados, os usuários que não estiverem nesses grupos serão suspensos. A suspensão ocorrerá quando eles fizerem login ou durante a próxima sincronização LDAP.

* **Associação a um grupo:** quando você usa o LDAP para se autenticar, os [usuários são suspensos e têm a suspensão cancelada automaticamente](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users) com base na associação a um grupo restrita e no status da conta com o Active Directory.

* **Autenticação do Git:** o SAML e o CAS só dão suporte à autenticação do Git via HTTP ou HTTPS com um [token de acesso pessoal](/articles/creating-an-access-token-for-command-line-use). Não há suporte para a autenticação de senha em HTTP ou HTTPS. O LDAP dá suporte à autenticação do Git baseada em senha por padrão, mas recomendamos [desabilitar esse método](/enterprise/admin/authentication/using-ldap#disabling-password-authentication-for-git-operations) e forçar a autenticação por meio de um token de acesso pessoal ou de uma chave SSH.

* **Autenticação de API:** o SAML e o CAS só dão suporte à autenticação de API com um [token de acesso pessoal](/articles/creating-an-access-token-for-command-line-use). Não há suporte para a autenticação básica.

* **Autenticação de dois fatores:** {% data reusables.enterprise_user_management.external_auth_disables_2fa %}

* **Autenticação de fallback para usuários sem conta em seu provedor de autenticação externo:** você pode convidar usuários a se autenticar em {% data variables.product.product_location %} sem adicioná-los ao seu provedor de identidade. Para obter mais informações, confira "[Como permitir a autenticação interna para usuários fora do seu provedor](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)".
