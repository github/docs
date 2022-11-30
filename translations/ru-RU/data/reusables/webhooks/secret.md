---
ms.openlocfilehash: 3dcfb143f7ac70db7c1a197304c83a5b75642749
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878530"
---
Настройка секрета веб-перехватчика позволяет гарантировать, что запросы `POST`, отправленные на URL-адрес полезных данных, поступают из {% data variables.product.product_name %}. При установке секрета вы будете получать {% ifversion fpt or ghes or ghec %}заголовки `X-Hub-Signature` и `X-Hub-Signature-256`{% elsif ghae %}заголовок`X-Hub-Signature-256`{% endif %} в запросе `POST` веб-перехватчика. Дополнительные сведения об использовании секрета с заголовком сигнатуры для защиты полезных данных веб-перехватчика см. в разделе [Защита веб-перехватчиков](/webhooks/securing/).
