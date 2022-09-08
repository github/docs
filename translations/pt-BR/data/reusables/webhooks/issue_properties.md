---
ms.openlocfilehash: 905d4497bb48d1c5bfab91a1bb06389e5cd197e1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145065145"
---
`issue`|`object` | O próprio [problema](/rest/reference/issues).
`changes`|`object`| As alterações no problema se a ação foi `edited`.
`changes[title][from]`|`string` | A versão anterior do título se a ação foi `edited`.
`changes[body][from]`|`string` | A versão anterior do corpo se a ação foi `edited`.
`assignee`|`object` | O usuário opcional que foi atribuído ou teve a atribuição cancelada ao problema.
`label`|`object` | O rótulo opcional que foi adicionado ou removido do problema.
