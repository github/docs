---
ms.openlocfilehash: c7eea7975ef49a5a6e3deed2ade3cb6bb5543ac0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145095430"
---
Quando você seleciona a opção **Mesclar por squash e mesclar** em uma solicitação de pull no {% data variables.product.product_location %}, os commits da solicitação de pull são mesclados por squash em um só commit. Em vez de ver todos os commits individuais de um contribuidor de um branch de tópico, os commits são combinados em um commit e mesclados no branch-padrão. As solicitações de pull com commits mesclados por squash são mescladas com a [opção de avanço rápido](https://git-scm.com/docs/git-merge#_fast_forward_merge).

Para mesclar por squash e mesclar solicitações de pull, você precisa ter [permissões de gravação](/articles/repository-permission-levels-for-an-organization/) no repositório, e o repositório precisa [permitir a mesclagem squash](/articles/configuring-commit-squashing-for-pull-requests/).

![commit-squashing-diagram](/assets/images/help/pull_requests/commit-squashing-diagram.png)

Você pode usar combinação por squash e merge para criar um histórico de Git mais simplificado no seu repositório. Os commits de trabalho em andamento são úteis ao trabalhar em um branch de recurso, mas não são necessariamente importantes para manter no histórico do Git. Se você fizer a combinação por squash desses commits em um commit enquanto faz merge com o branch-padrão, você certamente poderá manter as alterações originais com um histórico Git.
