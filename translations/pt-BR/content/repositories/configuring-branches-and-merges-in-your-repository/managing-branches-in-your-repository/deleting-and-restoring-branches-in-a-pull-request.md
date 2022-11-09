---
title: Excluir e restaurar branches em uma pull request
intro: 'Se você tem acesso de gravação em um repositório, pode excluir os branches que estão associados a pull requests fechadas ou mescladas. Não é possível excluir branches associados a pull requests abertas.'
redirect_from:
  - /articles/tidying-up-pull-requests
  - /articles/restoring-branches-in-a-pull-request
  - /articles/deleting-unused-branches
  - /articles/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Delete & restore branches
ms.openlocfilehash: 48007869ae43d39553e0f8948f90e89b7fb73af0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127105'
---
## Excluindo um branch usado para uma pull request

Você pode excluir um branch que esteja associado a uma pull request se a pull request tiver sofrido merge ou estiver encerrada e não houver outras pull requests abertas que referenciem o branch. Para obter informações sobre como fechar os branches que não estão associados às solicitações de pull, confira "[Como criar e excluir branches no seu repositório](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.list-closed-pull-requests %}
4. Na lista de pull requests, clique naquela associada ao branch que você deseja excluir.
5. Próximo à parte inferior da solicitação de pull, clique em **Excluir branch**.
   ![Botão Excluir branch](/assets/images/help/pull_requests/delete_branch_button.png)

   Este botão não é exibido se houver atualmente uma pull request aberta para este branch.

## Restaurar um branch excluído

É possível restaurar um head branch de uma pull request fechada.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.list-closed-pull-requests %}
4. Na lista de pull requests, clique naquela associada ao branch que você deseja restaurar.
5. Próximo à parte inferior da solicitação de pull, clique em **Restaurar branch**.
   ![Botão Restaurar branch excluído](/assets/images/help/branches/branches-restore-deleted.png)

## Leitura adicional

- "[Como criar e excluir branches no seu repositório](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)"
- "[Como gerenciar a exclusão automática de branches](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)"
