---
ms.openlocfilehash: 3dcfb143f7ac70db7c1a197304c83a5b75642749
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876860"
---
La définition d’un secret de webhook vous permet de vous assurer que les requêtes `POST` envoyées à l’URL de charge utile proviennent de {% data variables.product.product_name %}. Lorsque vous définissez un secret, vous recevez {% ifversion fpt or ghes or ghec %}les en-têtes `X-Hub-Signature` et `X-Hub-Signature-256`{% elsif ghae %}l’en-tête`X-Hub-Signature-256`{% endif %} dans la requête `POST` du webhook. Pour plus d’informations sur l’utilisation d’un secret avec un en-tête de signature pour sécuriser vos charges utiles de webhook, consultez « [Sécurisation de vos webhooks](/webhooks/securing/) ».
