---
ms.openlocfilehash: 968dfe7ff0b233872e2085462d1bb1e661f37d31
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069094"
---
`effective_date` | `string` | `pending_cancellation` および `pending_tier_change` のイベントの種類には、キャンセルまたはレベルの変更が有効になる日付が含まれます。
`changes[tier][from]` | `object` | `tier_changed` および `pending_tier_change` は、変更前または保留中の変更前の元のレベルが含まれます。 詳細については、[保留中のレベル変更ペイロード](/webhooks/event-payloads#webhook-payload-example-when-someone-downgrades-a-sponsorship)に関する記事を参照してください。
`changes[privacy_level][from]` | `string` | `edited` イベントの種類には、プライバシーを変更するためにスポンサーシップが編集された場合の変更に関する詳細が含まれます。
