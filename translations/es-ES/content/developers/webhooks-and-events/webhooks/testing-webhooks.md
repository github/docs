---
title: Probar los webhooks
intro: 'Revisa tus entregas de webhook en {% data variables.product.prodname_dotcom %}, incluyendo la solicitud HTTP y la carga útil, así como la respuesta.'
redirect_from:
  - /webhooks/testing
  - /developers/webhooks-and-events/testing-webhooks
  - /articles/testing-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: 5b9287030169ecac751b407ad915d4fa69bf8182
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145996221'
---
Ahora que ha [configurado el servidor local](/webhooks/configuring/), es posible que le interese superar los límites del código. Para ello, la vista de webhooks de GitHub le proporciona herramientas para probar las cargas útiles implementadas.

## Listar las entregas recientes

Cada webhook tiene su propia sección de "Entregas Recientes", la cual lista rápidamente si una entrega fue exitosa (paloma verde) o fallida (x roja). También puedes identificar cuando se intentó cada entrega.

{% data variables.product.product_name %} mantiene un registro de cada entrega de webhook durante {% ifversion fpt or ghec %} 30 {% else %} 8 {% endif %} días.

![Vista de Entregas Recientes](/assets/images/webhooks_recent_deliveries.png)

## Profundizar en los resultados

Si expande una entrega individual podrá presenciar *exactamente* qué información de GitHub se está intentando enviar a su servidor. Esto incluye la solicitud de HTTP y la respuesta.

### Solicitud

La vista de entregas del webhook te proporciona información sobre qué encabezados se enviaron a través de GitHub.
También incluye detalles acerca de la carga útil de JSON.

![Visualizar la solicitud de una carga útil](/assets/images/payload_request_tab.png)

### Response

La pestaña de respuesta muestra la forma en que su servidor ha respondido una vez que ha recibido la carga útil de GitHub. Esto incluye el código de estado, los encabezados y cualquier dato adicional en el cuerpo de la respuesta.

![Visualizar la respuesta de una carga útil](/assets/images/payload_response_tab.png)
