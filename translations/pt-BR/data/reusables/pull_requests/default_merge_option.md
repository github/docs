---
ms.openlocfilehash: 592835351230fe7a5587c0212811899ab496e84d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145085137"
---
Quando você clica na opção padrão **Mesclar solicitação de pull** em uma solicitação de pull no {% data variables.product.product_location %}, todos os commits do branch de recursos são adicionados ao branch base em um commit de mesclagem. A solicitação de pull é mesclada por meio [da opção `--no-ff`](https://git-scm.com/docs/git-merge#_fast_forward_merge).

Para mesclar as solicitações de pull, você precisa ter [permissões de gravação](/articles/repository-permission-levels-for-an-organization/) no repositório.

![standard-merge-commit-diagram](/assets/images/help/pull_requests/standard-merge-commit-diagram.png)
