---
ms.openlocfilehash: 4c9dffae916ec9dd367a0d8b92a3a1831a6e9b41
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145083762"
---
Chave | Tipo | Descrição
----|------|-------------
`action`|`string` | A ação realizada no cartão do projeto. Pode ser `created`, `edited`, `moved`, `converted` ou `deleted`.
`changes`|`object` | As alterações no cartão de projeto se a ação foi `edited` ou `converted`.
`changes[note][from]` |`string` | A versão anterior da anotação se a ação foi `edited` ou `converted`.
`after_id`|`integer` | O ID do cartão que este cartão agora segue se a ação foi "movida". Será `null` se ele for o primeiro cartão de uma coluna.
`project_card`|`object` | O próprio [cartão do projeto](/rest/reference/projects#cards).
