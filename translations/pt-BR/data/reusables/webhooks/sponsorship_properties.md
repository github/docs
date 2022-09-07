---
ms.openlocfilehash: 968dfe7ff0b233872e2085462d1bb1e661f37d31
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145066098"
---
`effective_date` | `string` | Os tipos de eventos `pending_cancellation` e `pending_tier_change` incluirão a data em que o cancelamento ou a alteração de camada entrarão em vigor.
`changes[tier][from]` | `object` | O `tier_changed` e o `pending_tier_change` incluirão a camada original antes da alteração ou da alteração pendente. Para obter mais informações, confira o [conteúdo de alteração de camada pendente](/webhooks/event-payloads#webhook-payload-example-when-someone-downgrades-a-sponsorship).
`changes[privacy_level][from]` | `string` | Os tipos de eventos `edited` incluem os detalhes sobre a alteração quando alguém edita um patrocínio para alterar a privacidade.
