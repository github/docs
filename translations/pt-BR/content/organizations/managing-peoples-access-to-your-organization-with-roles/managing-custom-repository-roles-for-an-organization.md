---
title: Gerenciando as funções de repositórios personalizados para uma organização
intro: 'Você pode criar, editar ou excluir funções de repositório personalizadas para a sua organização.'
permissions: Organization owners can manage custom repository roles.
versions:
  feature: custom-repository-roles
topics:
  - Organizations
  - Teams
shortTitle: Manage custom roles
redirect_from:
  - /early-access/github/articles/managing-custom-repository-roles-for-an-organization
ms.openlocfilehash: f7f8be4eda3ecf62a1b587a509881f9fee1a463f
ms.sourcegitcommit: ca040a1871ab5e929b596686ef955b02c5afa051
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/02/2022
ms.locfileid: '148130986'
---
{% data reusables.organizations.custom-repo-roles-ghec-only %}

## Sobre as funções personalizadas do repositório

{% data reusables.organizations.about-custom-repo-roles %} Para obter mais informações, confira "[Sobre funções de repositório personalizadas](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)."

## Criando a função de um repositório

Para criar uma nova função do repositório, você deve adicionar permissões a uma função herdada e dar um nome à função personalizada.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
5. Clique em **Criar uma Função**.
  ![Captura de tela do botão "Criar uma Função"](/assets/images/help/organizations/repository-role-create-role.png)
4. Em "Nome", digite o nome da função do seu repositório.
  ![Campo usado para digitar um nome para a função do repositório](/assets/images/help/organizations/repository-role-name.png)
5. Em "Descrição", digite uma descrição da função do repositório.
  ![Campo usado para digitar uma descrição para a função do repositório](/assets/images/help/organizations/repository-role-description.png)
6. Em "Escolha uma função para herdar", selecione a função que deseja herdar.
  ![Seleção da opção de função base da função do repositório](/assets/images/help/organizations/repository-role-base-role-option.png)
7. Em "Adicionar permissões", use o menu suspenso para selecionar as permissões que você deseja que a sua função personalizada inclua.
  ![Seleção dos níveis de permissão no menu suspenso da função do repositório](/assets/images/help/organizations/repository-role-drop-down.png)
7. Clique em **Criar função**.
  ![Confirmação da criação de uma função do repositório](/assets/images/help/organizations/repository-role-creation-confirm.png)

## Editando a função de um repositório

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. À direita da função que deseja editar, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e em **Editar**.
  ![Opção Editar no menu suspenso das funções do repositório](/assets/images/help/organizations/repository-role-edit-setting.png)
4. Edite e clique em **Atualizar função**.
  ![Edição de campos e atualização das funções do repositório](/assets/images/help/organizations/repository-role-update.png)

## Excluindo a função de um repositório

Se você excluir a função de um repositório existente, todos os convites pendentes, equipes e usuários com a função personalizada serão reatribuidos às permissões básicas da organização.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. À direita da função que deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e em **Excluir**.
  ![Opção Editar no menu suspenso das funções do repositório](/assets/images/help/organizations/repository-role-delete-setting.png)
4. Revise as alterações para a função que deseja remover e clique em **Excluir função**.
  ![Confirmação da exclusão de uma função do repositório](/assets/images/help/organizations/repository-role-delete-confirm.png)
