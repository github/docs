---
title: Remover a si mesmo de um repositório de colaborador
intro: 'Se não desejar mais ser um colaborador no repositório de outro usuário, você poderá remover a si mesmo.'
redirect_from:
  - /leave-a-collaborative-repo
  - /leave-a-repo
  - /articles/removing-yourself-from-a-collaborator-s-repo
  - /articles/removing-yourself-from-a-collaborator-s-repository
  - /articles/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
shortTitle: Remove yourself
ms.openlocfilehash: 3b760d7947d734d8fa6e1e366795ce698f9c0b7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164583'
---
{% data reusables.user-settings.access_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
2. Na seção "Código, planejamento e automação" da barra lateral, clique em **{% octicon "repo" aria-label="The repo icon" %} Repositórios**.
{% else %}
2. Na barra lateral esquerda, clique em **Repositórios**.
  ![Guia Repositórios](/assets/images/help/settings/settings-sidebar-repositories.png) {% endif %}
3. Ao lado do repositório do qual deseja sair, clique em **Sair**.
  ![Botão Sair](/assets/images/help/repository/repo-leave.png)
4. Leia o aviso com atenção, depois clique em "I understand, leave this repository" (Eu compreendo, sair deste repositório).
  ![Caixa de diálogo com aviso de saída](/assets/images/help/repository/repo-leave-confirmation.png)
