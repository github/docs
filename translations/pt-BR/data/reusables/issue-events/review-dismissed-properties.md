---
ms.openlocfilehash: 78d6d0b4d9cf98f834352dca2df0de06275e4db9
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: "145096674"
---
`dismissed_review` | `object` | As informações da revisão ignorada.
`dismissed_review[state]` | `string` | O estado em que a solicitação de pull estava quando foi ignorada. Pode ser `commented`, `approved` ou `changes_requested`.
`dismissed_review[review_id]` | `string` | O identificador exclusivo da revisão de solicitação de pull.
`dismissed_review[dismissal_message]` | `string` | A mensagem que o usuário incluiu quando ignorou a revisão.
`dismissed_review[dismissal_commit_id]` | `string` | O identificador exclusivo do commit que ignorou a revisão, se houver.
