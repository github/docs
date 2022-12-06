---
title: Exportando alterações para um branch
intro: Este artigo fornece etapas para exportar suas alterações de codespace para um branch.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Exporting changes
ms.openlocfilehash: 2a7dee4725af31f3983e753b4202f94be1742556
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159311'
---
## Exportando alterações para um branch

Ao usar o {% data variables.product.prodname_github_codespaces %}, você deverá exportar suas alterações para uma ramificação sem iniciar o seu codespace. Isso pode ser útil quando você atinge um [limite de gastos](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces) ou tem um problema geral ao acessar seu codespace.

Se o codespace for não publicado (criado com base em um modelo e não associado a um repositório no {% data variables.product.product_name %}), você não poderá exportar alterações para um branch, mas poderá publicar o codespace em um novo repositório sem iniciar o codespace. Para saber mais, confira "[Como criar um codespace com base em um modelo](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-from-githubcom)".

Para exportar as alterações a um branch:

{% data reusables.codespaces.your-codespaces-procedure-step %} Ou, para um repositório individual, clique no menu **{% octicon "code" aria-label="The code icon" %} Código**.
1. Clique nas reticências ( **…** ) à direita do codespace do qual deseja fazer a exportação.
2. Selecione **{% octicon "git-branch" aria-label="The git branch icon" %} Exportar alterações para o branch**.

  ![Exportar alterações para um branch](/assets/images/help/codespaces/export-changes-to-a-branch.png)

1. No pop-over, selecione **Criar branch**.
