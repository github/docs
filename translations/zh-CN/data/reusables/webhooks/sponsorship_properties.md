---
ms.openlocfilehash: 968dfe7ff0b233872e2085462d1bb1e661f37d31
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145067083"
---
`effective_date` | `string` | `pending_cancellation` 和 `pending_tier_change` 事件类型将包括取消或层更改生效的日期。
`changes[tier][from]` | `object` | `tier_changed` 和 `pending_tier_change` 将包括更改或挂起的更改之前的原始层。 有关详细信息，请参阅[挂起的层更改有效负载](/webhooks/event-payloads#webhook-payload-example-when-someone-downgrades-a-sponsorship)。
`changes[privacy_level][from]` | `string` | `edited` 事件类型包括当有人编辑赞助以更改隐私时有关更改的详细信息。
