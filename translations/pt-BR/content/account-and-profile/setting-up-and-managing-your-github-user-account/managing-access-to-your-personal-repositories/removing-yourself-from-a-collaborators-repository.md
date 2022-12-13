---
title: Remover a si mesmo de um repositório de colaborador
intro: If you no longer want to be a collaborator on someone else's repository, you can remove yourself.
redirect_from:
- /leave-a-collaborative-repo
- /leave-a-repo
- /articles/removing-yourself-from-a-collaborator-s-repo
- /articles/removing-yourself-from-a-collaborator-s-repository
- /articles/removing-yourself-from-a-collaborators-repository
- /github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
- Repositories
shortTitle: Remove yourself
ms.openlocfilehash: dc9739d84d1794e3111f3b61e0dfd9a7c4bec11b
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145084053"
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
