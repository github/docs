---
title: Remover um colaborador de um repositório pessoal
intro: 'Quando você remove um colaborador do projeto, ele perde o acesso de leitura/gravação ao repositório. Se o repositório for privado e o colaborador tiver criado uma bifurcação, essa bifurcação também será excluída.'
redirect_from:
  - /articles/how-do-i-remove-a-collaborator
  - /articles/what-happens-when-i-remove-a-collaborator-from-my-private-repository
  - /articles/removing-a-collaborator-from-a-private-repository
  - /articles/deleting-a-private-fork-of-a-private-user-repository
  - /articles/how-do-i-delete-a-fork-of-my-private-repository
  - /articles/removing-a-collaborator-from-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/removing-a-collaborator-from-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-a-collaborator-from-a-personal-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-a-collaborator-from-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
shortTitle: Remove a collaborator
ms.openlocfilehash: 24b128b5858c695b0e559302fac05812d3218b8c
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145164588'
---
## Excluir bifurcações de repositórios privados

Apesar de as bifurcações de repositórios privados serem excluídas quando um colaborador é removido, o colaborador mantém todos os clones locais do seu repositório.

## Remover as permissões de colaborador de um usuário que está contribuindo em um repositório

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %}
4. À direita do colaborador que deseja remover, clique em {% octicon "trash" aria-label="The trash icon" %}.
  ![Botão usado para remover um colaborador](/assets/images/help/repository/collaborator-remove.png) {% else %}
3. Na barra lateral esquerda, clique em **Colaboradores e equipes**.
  ![Guia Colaboradores](/assets/images/help/repository/repo-settings-collaborators.png)
4. Ao lado do colaborador que deseja remover, clique no ícone **X**.
  ![Remover link](/assets/images/help/organizations/Collaborator-Remove.png) {% endif %}

## Leitura adicional

- "[Como remover membros da organização de uma equipe](/articles/removing-organization-members-from-a-team)"
- "[Como remover um colaborador externo de um repositório da organização](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
