---
title: Como gerenciar o acesso aos quadros de projetos da sua conta pessoal
intro: 'Como proprietário de quadro de projeto, você pode adicionar ou remover um colaborador e personalizar as permissões dele em um quadro de projeto.'
redirect_from:
  - /articles/managing-project-boards-in-your-repository-or-organization
  - /articles/managing-access-to-your-user-account-s-project-boards
  - /articles/managing-access-to-your-user-accounts-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-user-accounts-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Manage access project boards
ms.openlocfilehash: 4cbf968cee79ac8e4aafbc5eea8220949cf80a30
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164606'
---
Um colaborador é uma pessoa com permissões em um quadro de projeto pertencente a você. A permissão padrão de um colaborador é acesso de leitura. Para obter mais informações, confira "[Níveis de permissão para quadros de projetos pertencentes ao usuário](/articles/permission-levels-for-user-owned-project-boards)".

## Convidar colaboradores a um quadro de projeto de propriedade de um usuário

1. Navegue até o quadro de projeto onde você quer adicionar um colaborador.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
5. Em "Search by username, full name or email address" (Pesquisar por nome de usuário, nome completo ou endereço de e-mail), digite o nome, o nome de usuário ou o e-mail do colaborador no {% data variables.product.prodname_dotcom %}.
   ![A seção Colaboradores com o nome de usuário do Octocat inserido no campo de pesquisa](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %}
7. O novo colaborador tem acessos de leitura por padrão. Como opção, ao lado do nome do novo colaborador, use o menu suspenso e escolha um nível de permissão diferente.
  ![A seção Colaboradores com o menu suspenso Permissões selecionado](/assets/images/help/projects/user-project-collaborators-edit-permissions.png)

## Remover um colaborador de um quadro de projeto de propriedade de um usuário

{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}
