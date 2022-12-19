---
ms.openlocfilehash: c29755014aac40c0ab7e96f879d19a3fb06d79fb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145083761"
---
Chave | Tipo | Descrição
----|------|-------------
`action`|`string` | A ação que foi executada na coluna do projeto. Pode ser `created`, `edited`, `moved` ou `deleted`.
`changes`|`object` | As alterações na coluna do projeto se a ação foi `edited`.
`changes[name][from]` |`string` | A versão anterior do nome se a ação foi `edited`.
`after_id`|`integer` | O id da coluna que esta coluna agora segue se a ação foi "movida". Será `null` se for a primeira coluna de um projeto.
`project_column`|`object` | A própria [coluna do projeto](/rest/reference/projects#columns).
