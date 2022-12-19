---
ms.openlocfilehash: f41668ecc39ec7b3efc30deaf59bdf406a60d0cb
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147875527"
---
Chave | Tipo | Descrição
----|------|-------------
`action`|`string` | A acção que foi realizada no projeto. Pode ser `created`, `edited`, `closed`, `reopened` ou `deleted`.
`changes`|`object` | As alterações no projeto se a ação foi `edited`.
`changes[name][from]` |`string` | A versão anterior do nome se a ação foi `edited`.
`changes[body][from]` |`string` | A versão anterior do corpo se a ação foi `edited`.
`project`|`object` | O próprio [projeto](/rest/reference/projects).
