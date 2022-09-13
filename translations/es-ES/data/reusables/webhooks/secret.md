---
ms.openlocfilehash: 3dcfb143f7ac70db7c1a197304c83a5b75642749
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878531"
---
Configurar un secreto de webhook permite garantizar que las solicitudes `POST` que se enviaron a la URL de la carga útil sean de {% data variables.product.product_name %}. Al establecer un secreto, recibirá los encabezados {% ifversion fpt or ghes or ghec %}`X-Hub-Signature` y `X-Hub-Signature-256`, y el encabezado {% elsif ghae %}`X-Hub-Signature-256` {% endif %} en la solicitud `POST` de webhook. Para obtener más información sobre cómo utilizar un secreto con un encabezado de firma para proteger sus cárgas útiles de webhook, vea la sección "[Proteger los webhooks](/webhooks/securing/)".
