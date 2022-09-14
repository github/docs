---
ms.openlocfilehash: 3dcfb143f7ac70db7c1a197304c83a5b75642749
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878528"
---
Webhook のシークレットを設定することで、ペイロードの URL に送信される `POST` 要求が、{% data variables.product.product_name %} からのものであることを保証できます。 シークレットを設定すると、Webhook の `POST` 要求で {% ifversion fpt or ghes or ghec %}`X-Hub-Signature` ヘッダーと `X-Hub-Signature-256` ヘッダー{% elsif ghae %}`X-Hub-Signature-256` ヘッダー{% endif %} が受信されます。 署名ヘッダーでシークレットを使用して Webhook のペイロードをセキュアに保つ方法について詳しくは、「[Webhook のセキュリティ保護](/webhooks/securing/)」を参照してください。
