---
title: Exportando alterações para um branch
intro: Este artigo fornece etapas para exportar suas alterações de codespace para um branch.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Exporting changes
ms.openlocfilehash: 676a94ae33b7dba4990014d472cbf28992437a2c
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147110999'
---
## Exportando alterações para um branch

Ao usar o {% data variables.product.prodname_github_codespaces %}, você deverá exportar suas alterações para uma ramificação sem iniciar o seu codespace.

Isso pode ser útil quando você atinge um [limite de gastos](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces) ou tem um problema geral ao acessar seu codespace.

Para exportar suas alterações:

1. Navegue até a página "Seus Codespaces" em [github.com/codespaces](https://github.com/codespaces) ou, para ver um repositório individual, clique no menu **{% octicon "code" aria-label="The code icon" %} Código**.
2. Clique nas reticências ( **…** ) à direita do codespace do qual deseja fazer a exportação.
3. Selecione **{% octicon "git-branch" aria-label="The git branch icon" %} Exportar alterações para o branch**.

  ![Exportar alterações para um branch](/assets/images/help/codespaces/export-changes-to-a-branch.png)

4. No pop-over, selecione **Criar branch**.
