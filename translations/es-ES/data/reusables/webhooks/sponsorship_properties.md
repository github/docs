---
ms.openlocfilehash: 968dfe7ff0b233872e2085462d1bb1e661f37d31
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145070158"
---
`effective_date` | `string` | Los tipos de evento `pending_cancellation` y `pending_tier_change` incluirán la fecha en que surtirá efecto el cambio de nivel o la cancelación.
`changes[tier][from]` | `object` | Los eventos `tier_changed` y `pending_tier_change` incluirán el nivel original antes del cambio o del cambio pendiente. Para obtener más información, consulte el ejemplo de la [carga útil de cambio de nivel pendiente](/webhooks/event-payloads#webhook-payload-example-when-someone-downgrades-a-sponsorship).
`changes[privacy_level][from]` | `string` | Los tipos de eventos `edited` incluyen los detalles sobre el cambio cuando alguien edita un patrocinio para cambiar la privacidad.
