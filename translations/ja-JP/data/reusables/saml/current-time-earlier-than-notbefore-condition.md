---
ms.openlocfilehash: a9ba68f182b48a4186a4ae63909ef4e146d7c392
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109133"
---
## エラー: "Current time is earlier than NotBefore condition" (現在の時刻は NotBefore 条件より前です)

このエラーは、IdP と {% data variables.product.product_name %} の間の時間差が大きすぎる場合に発生することがあります。これはセルフホステッド IdP でよく発生します。

{% ifversion ghes %}この問題を防ぐには、可能であれば、IdP と同じネットワーク タイム プロトコル (NTP) ソースを指すようにアプライアンスを設定することをお勧めします。 {% endif %}このエラーが発生した場合は、{% ifversion ghes %}アプライアンス{% else %}IdP {% endif %}の時刻が NTP サーバーと適切に同期していることを確認します。

IdP の立場で ADFS を使っている場合は、{% data variables.product.prodname_dotcom %} のために ADFS の `NotBeforeSkew` も 1 分に設定します。 `NotBeforeSkew` を 0 に設定すると、ミリ秒などの非常に短い時間差でも認証の問題が発生する可能性があります。
