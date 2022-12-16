---
ms.openlocfilehash: 968dfe7ff0b233872e2085462d1bb1e661f37d31
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145067084"
---
`effective_date` | `string` | Les types d’événements `pending_cancellation` et `pending_tier_change` incluent la date à laquelle l’annulation ou le changement de niveau prend effet.
`changes[tier][from]` | `object` | `tier_changed` et `pending_tier_change` incluent le niveau d’origine avant le changement ou le changement en attente. Pour plus d’informations, consultez la [charge utile du changement de niveau en attente](/webhooks/event-payloads#webhook-payload-example-when-someone-downgrades-a-sponsorship).
`changes[privacy_level][from]` | `string` | Les types d’événements `edited` incluent les détails du changement lorsque quelqu’un modifie un parrainage pour changer la confidentialité.
