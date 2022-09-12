---
ms.openlocfilehash: f41668ecc39ec7b3efc30deaf59bdf406a60d0cb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145083760"
---
Chave | Tipo | Descrição
----|------|-------------
`action`|`string` | A acção que foi realizada no projeto. Pode ser `created`, `edited`, `closed`, `reopened` ou `deleted`.
`changes`|`object` | As alterações no projeto se a ação foi `edited`.
`changes[name][from]` |`string` | A versão anterior do nome se a ação foi `edited`.
`changes[body][from]` |`string` | A versão anterior do corpo se a ação foi `edited`.
`project`|`object` | O próprio [projeto](/rest/reference/projects).
