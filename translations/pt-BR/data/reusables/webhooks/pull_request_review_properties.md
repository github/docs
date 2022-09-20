---
ms.openlocfilehash: 6b8d3bb77c6a40a43ab22ffd0e60e61cd049fa61
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147875662"
---
Chave | Tipo | Descrição
----|------|------------
`action` | `string` | A ação que foi executada. Pode ser uma das ações a seguir:<ul><li>`submitted` – Uma revisão de solicitação de pull é enviada em um estado não pendente.</li><li>`edited` – O corpo de uma revisão foi editado.</li><li>`dismissed` – Uma revisão foi descartada.</li></ul>
`pull_request` | `object` | A [solicitação de pull](/rest/reference/pulls) à qual a revisão pertence.
`review` | `object` | A revisão que foi afetada.
`changes[body][from]`|`string` | A versão anterior do corpo se a ação foi `edited`.
