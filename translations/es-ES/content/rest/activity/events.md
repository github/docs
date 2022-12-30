---
title: Eventos
intro: 'La API de eventos es una API de solo lectura para los eventos de {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 09ad462fe00e84344bd1f0a33f97380a3f03e656
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064310'
---
Estos eventos alimentan a los diversos flujos de actividad en el sitio.

La API de eventos puede devolver tipos diferentes de eventos que se activan por actividad en {% data variables.product.product_name %}. Para más información sobre los eventos específicos que puede recibir de la API de eventos, vea "[Tipos de eventos de {% data variables.product.prodname_dotcom %}](/developers/webhooks-and-events/github-event-types)". También hay disponible una API de eventos para problemas de repositorio. Para vea más información, vea "[Issue Events API](/rest/reference/issues#events)".

Los eventos se optimizan para el sondeo con el encabezado "ETag". Si no se han desencadenado eventos nuevos, verás la respuesta "304 Sin Modificar", y tu límite de tasa actual permanecerá intacto. También hay un encabezado de "X-Poll-Interval" que especifica la frecuencia (en segundos) en la que se te permite hacer sondeos. Este tiempo podría incrementarse durante los periodos de carga fuerte en el servidor. Por favor obedece al encabezado.

``` shell
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events
> HTTP/2 200
> X-Poll-Interval: 60
> ETag: "a18c3bded88eb5dbb5c849a489412bf3"

# The quotes around the ETag value are important
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events \
$    -H 'If-None-Match: "a18c3bded88eb5dbb5c849a489412bf3"'
> HTTP/2 304
> X-Poll-Interval: 60
```

Solo los eventos creados en los últimos 90 días se incluirán en las líneas de tiempo. Los eventos de más de 90 días de antigüedad no se incluirán (aún si la cantidad total de eventos en la línea de tiempo es de 300).
