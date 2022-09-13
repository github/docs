---
ms.openlocfilehash: 968dfe7ff0b233872e2085462d1bb1e661f37d31
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145066098"
---
`effective_date` | `string` | Os tipos de eventos `pending_cancellation` e `pending_tier_change` incluirão a data em que o cancelamento ou a alteração de camada entrarão em vigor.
`changes[tier][from]` | `object` | O `tier_changed` e o `pending_tier_change` incluirão a camada original antes da alteração ou da alteração pendente. Para obter mais informações, confira o [conteúdo de alteração de camada pendente](/webhooks/event-payloads#webhook-payload-example-when-someone-downgrades-a-sponsorship).
`changes[privacy_level][from]` | `string` | Os tipos de eventos `edited` incluem os detalhes sobre a alteração quando alguém edita um patrocínio para alterar a privacidade.
