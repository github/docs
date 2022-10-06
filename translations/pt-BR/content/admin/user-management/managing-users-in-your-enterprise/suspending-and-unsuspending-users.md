---
title: Suspender e cancelar a suspensão de usuários
redirect_from:
  - /enterprise/admin/articles/suspending-a-user
  - /enterprise/admin/articles/unsuspending-a-user
  - /enterprise/admin/articles/viewing-suspended-users
  - /enterprise/admin/articles/suspended-users
  - /enterprise/admin/articles/suspending-and-unsuspending-users
  - /enterprise/admin/user-management/suspending-and-unsuspending-users
  - /admin/user-management/suspending-and-unsuspending-users
intro: 'Se um usuário sair da empresa ou mudar para outro departamento, você deverá remover ou modificar a forma como ele acessa a {% data variables.product.product_location %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Security
  - User account
shortTitle: Manage user suspension
ms.openlocfilehash: d888678438f62fb585dac1cab4905ff02d8eb824
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331901'
---
Se funcionários saírem da empresa, você poderá suspender suas contas do {% data variables.product.prodname_ghe_server %} para disponibilizar licenças de usuário em sua licença {% data variables.product.prodname_enterprise %}, embora os problemas, comentários, repositórios, gists e outros dados que eles criaram continuem existindo. Usuários suspensos não podem entrar na sua instância nem fazer push ou pull de códigos.

Quando você suspende um usuário, a alteração entra em vigor na mesma hora e o usuário não recebe notificações a respeito. Se tentar fazer pull ou push em um repositório, o usuário receberá este erro:

```shell
$ git clone git@[hostname]:john-doe/test-repo.git
Cloning into 'test-repo'...
ERROR: Your account is suspended. Please check with your installation administrator.
fatal: The remote end hung up unexpectedly
```

Antes de suspender os administradores do site, você deve rebaixá-los para usuários regulares. Para obter mais informações, confira "[Como promover ou rebaixar um administrador do site](/enterprise/admin/user-management/promoting-or-demoting-a-site-administrator)".

{% tip %}

**Observação:** se a [Sincronização LDAP estiver habilitada](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync) para o {% data variables.product.product_location %}, os usuários serão suspensos automaticamente quando forem removidos do servidor de diretório LDAP. Quando a Sincronização LDAP estiver habilitada para a sua instância, os métodos normais de suspensão do usuário ficarão desabilitados.

{% endtip %}

## Suspender usuários pelo painel de administração de usuários

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Em "Suspensão da conta", na caixa vermelha Zona de Perigo, clique em **Suspender**.
![Botão Suspender](/assets/images/enterprise/site-admin-settings/suspend.png)
6. Informe um motivo para a suspensão do usuário.
![Motivo da suspensão](/assets/images/enterprise/site-admin-settings/suspend-reason.png)

## Cancelar a suspensão de usuários pelo painel de administração de usuários

Assim como na suspensão, o cancelamento da suspensão de um usuário ocorre na mesma hora. O usuário não receberá notificações.

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. Na barra lateral esquerda, clique em **Usuários suspensos**.
![Guia Usuários suspensos](/assets/images/enterprise/site-admin-settings/user/suspended-users-tab.png)
2. Clique no nome da conta de usuário que você deseja suspender.
![Usuário suspenso](/assets/images/enterprise/site-admin-settings/user/suspended-user.png) {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Em "Suspensão da conta", na caixa vermelha Zona de Perigo, clique em **Cancelar suspensão**.
![Botão Cancelar suspensão](/assets/images/enterprise/site-admin-settings/unsuspend.png)
5. Informe um motivo para o cancelamento da suspensão do usuário.
![Motivo do cancelamento da suspensão](/assets/images/enterprise/site-admin-settings/unsuspend-reason.png)

## Suspender usuários pela linha de comando

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Execute [ghe-user-suspend](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-suspend) com o nome de usuário a ser suspenso.
  ```shell
  $ ghe-user-suspend <em>username</em>
  ```

## Criar mensagem personalizada para usuários suspensos

É possível criar uma mensagem personalizada que os usuários suspensos verão ao tentar fazer login.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. Clique em **Adicionar mensagem**.
![Adicionar mensagem](/assets/images/enterprise/site-admin-settings/add-message.png)
6. Digite sua mensagem na caixa de **Mensagem para o usuário suspenso**. Você pode digitar Markdown ou usar a barra de ferramentas Markdown para estilizar a mensagem.
![Mensagem para o usuário suspenso](/assets/images/enterprise/site-admin-settings/suspended-user-message.png)
7. Clique no botão **Visualizar** no campo **Mensagem para o usuário suspenso** para ver a mensagem renderizada.
![botão Visualizar](/assets/images/enterprise/site-admin-settings/suspended-user-message-preview-button.png)
8. Revise a mensagem renderizada.
![Mensagem para o usuário suspenso renderizada](/assets/images/enterprise/site-admin-settings/suspended-user-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}

## Cancelar a suspensão de usuários pela linha de comando

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Execute [ghe-user-unsuspend](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-unsuspend) com o nome de usuário para cancelar a suspensão dele.
  ```shell
  $ ghe-user-unsuspend <em>username</em>
  ```

## Leitura adicional
- "[Suspender um usuário](/rest/reference/enterprise-admin#suspend-a-user)"
