---
ms.openlocfilehash: 968dfe7ff0b233872e2085462d1bb1e661f37d31
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145070157"
---
`effective_date` | `string` | Типы событий `pending_cancellation` и `pending_tier_change` будут включать дату, когда отмена или изменение уровня вступают в силу.
`changes[tier][from]` | `object` | В события `tier_changed` и `pending_tier_change` включается исходный уровень, который был до изменения или смены состояния на "ожидающее изменение". Дополнительные сведения см. в разделе о [полезных данных, ожидающих изменения уровня](/webhooks/event-payloads#webhook-payload-example-when-someone-downgrades-a-sponsorship).
`changes[privacy_level][from]` | `string` | Типы событий `edited` включают сведения об изменении спонсорства для редактирования параметров конфиденциальности.
