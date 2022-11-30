---
ms.openlocfilehash: 968dfe7ff0b233872e2085462d1bb1e661f37d31
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069093"
---
`effective_date` | `string` | Die Ereignistypen `pending_cancellation` und `pending_tier_change` enthalten das Datum, an dem die Abbruch- oder Ebenenänderung wirksam wird.
`changes[tier][from]` | `object` | `tier_changed` und `pending_tier_change` umfassen die ursprüngliche Ebene vor der Änderung oder der anstehenden Änderung. Weitere Informationen findest du unter [Payload der ausstehenden Ebenenänderung](/webhooks/event-payloads#webhook-payload-example-when-someone-downgrades-a-sponsorship).
`changes[privacy_level][from]` | `string` | Der Ereignistyp `edited` enthält die Details zur Änderung, wenn jemand ein Sponsoring bearbeitet, um den Datenschutz zu ändern.
