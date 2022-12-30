---
title: Eventos y cargas de webhook
intro: Aprende sobre cuándo se produce cada evento de webhook y qué contiene la carga.
product: '{% data reusables.gated-features.enterprise_account_webhooks %}'
redirect_from:
  - /early-access/integrations/webhooks
  - /v3/activity/events/types
  - /webhooks/event-payloads
  - /developers/webhooks-and-events/webhook-events-and-payloads
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
shortTitle: Webhook events & payloads
ms.openlocfilehash: 0592f191b463354b92c3953880c7a7a435e0b07a
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165542'
---
{% data reusables.webhooks.webhooks_intro %}

Puedes crear webhooks que se suscriban a los eventos listados en esta página. Cada evento de webhook incluye una descripción de las propiedades de dicho webhook y un ejemplo de carga útil. Para más información, vea "[Creación de webhooks](/webhooks/creating/)".

## Propuiedades comunes del objeto de la carga útil del webhook

Cada carga útil del evento del webhook contiene propiedades únicas de dicho evento. Puedes encontrar estas propiedades únicas en las secciones individuales de tipo de evento.

Clave | Tipo | Descripción
----|------|-------------
`action` | `string` | La mayoría de las cargas de webhook contienen una propiedad `action` que contiene la actividad específica que ha desencadenado el evento.
{% data reusables.webhooks.sender_desc %} Esta propiedad se incluye en cada carga útil del webhook.
{% data reusables.webhooks.repo_desc %} Las cargas de webhook contienen la propiedad `repository` cuando el evento se produce desde una actividad en un repositorio.
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} Para más información, vea "[Creación de {% data variables.product.prodname_github_app %}](/apps/building-github-apps/)".

Las propiedades únicas de un evento de webhook son las mismas que encontrará en la propiedad `payload` al usar [Events API](/rest/reference/activity#events). Una excepción es el [evento `push`](#push). Las propiedades únicas de la carga de webhook de eventos `push` y la propiedad `payload` de Events API difieren. La carga útil del webhook contiene información más detallada.

{% tip %}

**Nota:** Las cargas se limitan a 25 MB. Si tu evento genera una carga útil mayor, el webhook no se lanzará. Esto puede pasar, por ejemplo, en un evento `create` si se insertan muchas ramas o etiquetas al mismo tiempo. Te sugerimos monitorear el tamaño de tu carga útil para garantizar la entrega.

{% endtip %}

### Encabezados de entrega

Las cargas útiles de HTTP POST que se entregan a la terminal URL configurada para tu webhook contendrán varios encabezados especiales:

Encabezado | Descripción
-------|-------------|
`X-GitHub-Event`| Nombre del evento que desencadenó la entrega.
`X-GitHub-Delivery`| [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier) para identificar la entrega.{% ifversion ghes or ghae %}
`X-GitHub-Enterprise-Version` | La versión de la instancia de {% data variables.product.prodname_ghe_server %} que envía la carga útil del HTTP POST.
`X-GitHub-Enterprise-Host` | El nombre de host para la instancia de {% data variables.product.prodname_ghe_server %} que ha enviado la carga HTTP POST.{% endif %}{% ifversion not ghae %}
`X-Hub-Signature`| Este encabezado se envía si el webhook está configurado con [`secret`](/rest/reference/repos#create-hook-config-params). Este es el resumen hexadecimal de HMAC del cuerpo de la solicitud y se genera mediante la función de hash SHA-1 y `secret` como `key`de HMAC.{% ifversion fpt or ghes or ghec %} `X-Hub-Signature` se proporciona para compatibilidad con las integraciones existentes y, en su lugar, se recomienda usar `X-Hub-Signature-256`, que es más seguro.{% endif %}{% endif %}
`X-Hub-Signature-256`| Este encabezado se envía si el webhook está configurado con [`secret`](/rest/reference/repos#create-hook-config-params). Este es el resumen hexadecimal de HMAC para el cuerpo de la solicitud y se genera mediante la función de hash SHA-256 y `secret` como `key` de HMAC.

Además, `User-Agent` para las solicitudes tendrá el prefijo `GitHub-Hookshot/`.

### Ejemplo de entrega

```shell
> POST /payload HTTP/2

> Host: localhost:4567
> X-GitHub-Delivery: 72d3162e-cc78-11e3-81ab-4c9367dc0958{% ifversion ghes or ghae %}
> X-GitHub-Enterprise-Version: 2.15.0
> X-GitHub-Enterprise-Host: example.com{% endif %}{% ifversion not ghae %}
> X-Hub-Signature: sha1=7d38cdd689735b008b3c702edd92eea23791c5f6{% endif %}
> X-Hub-Signature-256: sha256=d57c68ca6f92289e6987922ff26938930f6e66a2d161ef06abdf1859230aa23c
> User-Agent: GitHub-Hookshot/044aadd
> Content-Type: application/json
> Content-Length: 6615
> X-GitHub-Event: issues

> {
>   "action": "opened",
>   "issue": {
>     "url": "{% data variables.product.api_url_pre %}/repos/octocat/Hello-World/issues/1347",
>     "number": 1347,
>     ...
>   },
>   "repository" : {
>     "id": 1296269,
>     "full_name": "octocat/Hello-World",
>     "owner": {
>       "login": "octocat",
>       "id": 1,
>       ...
>     },
>     ...
>   },
>   "sender": {
>     "login": "octocat",
>     "id": 1,
>     ...
>   }
> }
```

<!-- Content after this section is automatically generated -->
