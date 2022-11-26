---
ms.openlocfilehash: 33034d7d2f00ba494e16629a57ab07ec9d34810b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148007652"
---
`number`|`integer` | O número da solicitação de pull.
`changes`|`object`| As alterações no comentário se a ação foi `edited`.
`changes[title][from]`|`string` | A versão anterior do título se a ação foi `edited`.
`changes[body][from]`|`string` | A versão anterior do corpo se a ação foi `edited`.
`pull_request`|`object` | A [solicitação de pull](/rest/reference/pulls) em si. {% ifversion fpt or ghec %} `reason`|`string` | O motivo pelo qual a solicitação de pull foi removida de uma fila de mesclagem se a ação foi `dequeued`.{% endif %}
