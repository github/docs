---
ms.openlocfilehash: 3dcfb143f7ac70db7c1a197304c83a5b75642749
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145164773"
---
通过设置 Webhook 机密，可以确保发送到有效负载 URL 的 `POST` 请求来自 {% data variables.product.product_name %}。 设置机密时，你将在 Webhook `POST` 请求中收到 {% ifversion fpt or ghes or ghec %}`X-Hub-Signature` 和 `X-Hub-Signature-256` 标头{% elsif ghae %}`X-Hub-Signature-256` 标头{% endif %}。 有关如何使用带有签名标头的机密来保护 Webhook 有效负载的详细信息，请参阅“[保护 Webhook](/webhooks/securing/)”。
