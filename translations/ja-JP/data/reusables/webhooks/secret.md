---
ms.openlocfilehash: 3dcfb143f7ac70db7c1a197304c83a5b75642749
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145165326"
---
Webhook のシークレットを設定することで、ペイロードの URL に送信される `POST` 要求が、{% data variables.product.product_name %} からのものであることを保証できます。 シークレットを設定すると、Webhook の `POST` 要求で {% ifversion fpt or ghes or ghec %}`X-Hub-Signature` ヘッダーと `X-Hub-Signature-256` ヘッダー{% elsif ghae %}`X-Hub-Signature-256` ヘッダー{% endif %} が受信されます。 署名ヘッダーでシークレットを使用して Webhook のペイロードをセキュアに保つ方法について詳しくは、「[Webhook のセキュリティ保護](/webhooks/securing/)」を参照してください。
