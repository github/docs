---
ms.openlocfilehash: 968dfe7ff0b233872e2085462d1bb1e661f37d31
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069092"
---
`effective_date` | `string`| `pending_cancellation` 및 `pending_tier_change` 이벤트 유형에는 취소 또는 계층 변경이 적용되는 날짜가 포함됩니다.
`changes[tier][from]` | `object` | `tier_changed` 및 `pending_tier_change`에는 변경 또는 보류 중인 변경 전 원래 계층이 포함됩니다. 자세한 내용은 [보류 중인 계층 변경 페이로드](/webhooks/event-payloads#webhook-payload-example-when-someone-downgrades-a-sponsorship)를 참조하세요.
`changes[privacy_level][from]` | `string` | `edited` 이벤트 유형에는 누군가가 스폰서쉽을 편집하여 개인 정보를 변경할 때 변경에 대한 세부 정보가 포함됩니다.
