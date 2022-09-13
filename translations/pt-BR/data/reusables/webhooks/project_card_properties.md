---
ms.openlocfilehash: 4c9dffae916ec9dd367a0d8b92a3a1831a6e9b41
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145083762"
---
Chave | Tipo | Descrição
----|------|-------------
`action`|`string` | A ação realizada no cartão do projeto. Pode ser `created`, `edited`, `moved`, `converted` ou `deleted`.
`changes`|`object` | As alterações no cartão de projeto se a ação foi `edited` ou `converted`.
`changes[note][from]` |`string` | A versão anterior da anotação se a ação foi `edited` ou `converted`.
`after_id`|`integer` | O ID do cartão que este cartão agora segue se a ação foi "movida". Será `null` se ele for o primeiro cartão de uma coluna.
`project_card`|`object` | O próprio [cartão do projeto](/rest/reference/projects#cards).
