---
title: Promover ou rebaixar administradores de site
redirect_from:
  - /enterprise/admin/articles/promoting-a-site-administrator
  - /enterprise/admin/articles/demoting-a-site-administrator
  - /enterprise/admin/user-management/promoting-or-demoting-a-site-administrator
  - /admin/user-management/promoting-or-demoting-a-site-administrator
intro: Os administradores do site podem promover qualquer conta de usuário como administrador do site e rebaixar administradores do site para usuários regulares.
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - User account
  - Enterprise
shortTitle: Manage administrators
ms.openlocfilehash: 19daa56cf7d750d69495a6ff52655784411f56ff
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: '146331693'
---
{% tip %}

**Observação:** se a [Sincronização LDAP estiver habilitada](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync) e o atributo `Administrators group` estiver definido quando o [acesso LDAP para usuários estiver sendo configurado](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance), esses usuários receberão acesso de administrador do site à sua instância automaticamente. Nesse caso, você não pode promover manualmente os usuários pelas etapas abaixo.Será preciso adicioná-los ao grupo de administradores LDAP.

{% endtip %}

Para obter informações sobre como promover um usuário a um proprietário da organização, confira a seção `ghe-org-admin-promote` de "[Utilitários de linha de comando](/enterprise/admin/guides/installation/command-line-utilities#ghe-org-admin-promote)".

## Promover usuários pelas configurações empresariais

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
5. No canto superior direito da página, clique em **proprietário**.
  ![Botão usado para adicionar um administrador](/assets/images/help/business-accounts/business-account-add-admin-button.png)
6. No campo de pesquisa, digite o nome do usuário e clique em **Adicionar**.
  ![Campo de pesquisa usado para adicionar um administrador](/assets/images/help/business-accounts/business-account-search-to-add-admin.png)

## Rebaixar administrador do site pelas configurações empresariais

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. No canto superior esquerdo da página, no campo de pesquisa "Find an administrator" (Localizar administrador), digite o nome de usuário da pessoa que você pretende rebaixar.
  ![Campo de pesquisa usado para localizar um administrador](/assets/images/help/business-accounts/business-account-search-for-admin.png)

1. Nos resultados da pesquisa, localize o nome de usuário da pessoa que você deseja rebaixar. Use o menu suspenso {% octicon "gear" %} e selecione **Remover proprietário**.
  ![Opção Remover da empresa](/assets/images/help/business-accounts/demote-admin-button.png)

## Promover usuários pela linha de comando

1. Entre no dispositivo pelo [SSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/).
2. Execute [ghe-user-promote](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-promote) com o nome de usuário a ser promovido.
  ```shell
  $ ghe-user-promote <em>username</em>
  ```

## Rebaixar administrador do site pela linha de comando

1. Entre no dispositivo pelo [SSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/).
2. Execute [ghe-user-demote](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-demote) com o nome de usuário a ser rebaixado.
  ```shell
  $ ghe-user-demote <em>username</em>
  ```
