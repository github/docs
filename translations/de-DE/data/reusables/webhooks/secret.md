---
ms.openlocfilehash: 3dcfb143f7ac70db7c1a197304c83a5b75642749
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876861"
---
Durch das Festlegen eines Webhookgeheimnisses kannst du sicherstellen, dass an die Nutzlast-URL gesendete `POST`-Anforderungen von {% data variables.product.product_name %} kommen. Wenn du einen geheimen Schlüssel festlegst, erhältst du {% ifversion fpt or ghes or ghec %}die Header `X-Hub-Signature` und `X-Hub-Signature-256` {% elsif ghae %}den Header `X-Hub-Signature-256`{% endif %} in der Webhook-`POST`-Anforderung. Weitere Informationen dazu, wie du einen geheimen Schlüssel mit einem Signaturheader verwendest, um deine Webhooknutzlasten zu sichern, findest du unter [Sichern deiner Webhooks](/webhooks/securing/).
