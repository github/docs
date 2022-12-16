---
title: Gerenciar a exclusão automática de branches
intro: É possível excluir branches head automaticamente após o merge de pull requests no repositório.
redirect_from:
  - /articles/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Automatic branch deletion
ms.openlocfilehash: feaeb7c2178beab4dc23a310df6924c6e1c52e0f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882454'
---
Qualquer pessoa com permissões de administrador em um repositório pode habilitar ou desabilitar a exclusão automática de branches.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Em {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}"Solicitações de pull"{% else %}"Botão Mesclar"{% endif %}, marque ou desmarque **Excluir branches principais automaticamente**.
  ![Caixa de seleção usada para habilitar ou desabilitar a exclusão automática de branches](/assets/images/help/repository/automatically-delete-branches.png)

## Leitura adicional
- "[Como mesclar uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)"
- "[Como criar e excluir branches no seu repositório](/articles/creating-and-deleting-branches-within-your-repository)"
