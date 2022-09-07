---
ms.openlocfilehash: 3dcfb143f7ac70db7c1a197304c83a5b75642749
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145165325"
---
Configurar un secreto de webhook permite garantizar que las solicitudes `POST` que se enviaron a la URL de la carga útil sean de {% data variables.product.product_name %}. Al establecer un secreto, recibirá los encabezados {% ifversion fpt or ghes or ghec %}`X-Hub-Signature` y `X-Hub-Signature-256`, y el encabezado {% elsif ghae %}`X-Hub-Signature-256` {% endif %} en la solicitud `POST` de webhook. Para obtener más información sobre cómo utilizar un secreto con un encabezado de firma para proteger sus cárgas útiles de webhook, vea la sección "[Proteger los webhooks](/webhooks/securing/)".
