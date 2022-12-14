---
title: Gerenciar acessos aos quadros de projetos de sua conta de usuário
intro: As a project board owner, you can add or remove a collaborator and customize their permissions to a project board.
redirect_from:
- /articles/managing-project-boards-in-your-repository-or-organization
- /articles/managing-access-to-your-user-account-s-project-boards
- /articles/managing-access-to-your-user-accounts-project-boards
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-user-accounts-project-boards
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Manage access project boards
ms.openlocfilehash: 5a5cf08169fec04a896b05b7934c80cfe9f2eded
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145083746"
---
Um colaborador é uma pessoa com permissões em um quadro de projeto pertencente a você. A permissão padrão de um colaborador é acesso de leitura. Para obter mais informações, confira "[Níveis de permissão para quadros de projetos pertencentes ao usuário](/articles/permission-levels-for-user-owned-project-boards)".

## <a name="inviting-collaborators-to-a-user-owned-project-board"></a>Convidar colaboradores a um quadro de projeto de propriedade de um usuário

1. Navegue até o quadro de projeto onde você quer adicionar um colaborador.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
5. Em "Search by username, full name or email address" (Pesquisar por nome de usuário, nome completo ou endereço de e-mail), digite o nome, o nome de usuário ou o e-mail do colaborador no {% data variables.product.prodname_dotcom %}.
   ![A seção Colaboradores com o nome de usuário do Octocat inserido no campo de pesquisa](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %}
7. O novo colaborador tem acessos de leitura por padrão. Como opção, ao lado do nome do novo colaborador, use o menu suspenso e escolha um nível de permissão diferente.
  ![A seção Colaboradores com o menu suspenso Permissões selecionado](/assets/images/help/projects/user-project-collaborators-edit-permissions.png)

## <a name="removing-a-collaborator-from-a-user-owned-project-board"></a>Remover um colaborador de um quadro de projeto de propriedade de um usuário

{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}
