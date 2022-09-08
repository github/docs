---
ms.openlocfilehash: 563e9f384acbc3e6e243db8d2dae5eb05d833d04
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145083273"
---
Chave | Tipo | Descrição
----|------|------------
`action` | `string` | A ação que foi executada. Pode ser uma das ações a seguir:<ul><li>`resolved` – um thread de comentário em uma solicitação de pull foi marcado como resolvido.</li><li>`unresolved` – um thread de comentário resolvido anteriormente em uma solicitação de pull foi marcado como não resolvido.</li></ul>
`pull_request` | `object` | A [solicitação de pull](/rest/reference/pulls) à qual o thread pertence.
`thread` | `object` | O thread que foi afetado.
