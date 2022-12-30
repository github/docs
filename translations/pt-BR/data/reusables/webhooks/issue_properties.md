---
ms.openlocfilehash: 905d4497bb48d1c5bfab91a1bb06389e5cd197e1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145065145"
---
`issue`|`object` | O próprio [problema](/rest/reference/issues).
`changes`|`object`| As alterações no problema se a ação foi `edited`.
`changes[title][from]`|`string` | A versão anterior do título se a ação foi `edited`.
`changes[body][from]`|`string` | A versão anterior do corpo se a ação foi `edited`.
`assignee`|`object` | O usuário opcional que foi atribuído ou teve a atribuição cancelada ao problema.
`label`|`object` | O rótulo opcional que foi adicionado ou removido do problema.
