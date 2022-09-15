---
title: webhooks
intro: La API de webhooks te permite crear y administrar webhooks para tus repositorios.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
children:
  - /repo-config
  - /repo-deliveries
  - /repos
redirect_from:
  - /rest/reference/webhooks
ms.openlocfilehash: 9216b892bbc19752266cea22d88bec655363ecaf
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882347'
---
Los webhooks de repositorio le permiten recibir cargas útiles de `POST` HTTP cuando se producen determinados eventos en un repositorio. {% data reusables.webhooks.webhooks-rest-api-links %}

Si quiere configurar un solo webhook para recibir eventos de todos los repositorios de la organización, vea nuestra documentación de la API para [Webhooks de una organización](/rest/reference/orgs#webhooks).

Además de la API REST, {% data variables.product.prodname_dotcom %} también puede servir como centro de [PubSubHubbub](#pubsubhubbub) para los repositorios.

## Recibir Webhooks

Para que {% data variables.product.product_name %} envíe cargas útiles de webhooks, se necesita que se pueda acceder a tu servidor desde la internet. También sugerimos ampliamente utilizar SSL para que podamos enviar cargas útiles cifradas a través de HTTPS.

### Encabezados de Webhook

{% data variables.product.product_name %} enviará varios encabezados de HTTP para diferenciar los tipos de eventos y los identificadores de las cargas útiles. Vea [encabezados de webhook](/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers) para más información.

## PubSubHubbub

GitHub también puede servir como un centro de [PubSubHubbub](https://github.com/pubsubhubbub/PubSubHubbub) para todos los repositorios. PSHB es un proptocolo simple de publicación/suscripción que permite a los servidores registrarse para recibir actualizaciones de cuándo se actualiza un tema. Las actualizaciones se mandan con una solicitud HTTP de tipo POST a una URL de rellamado.
Las URL de tema para las cargas a un repositorio de GitHub están en este formato:

`https://github.com/{owner}/{repo}/events/{event}`

El veneto puede ser cualquier evento de webhook disponible. Para más información, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhook-events-and-payloads)".

### Formato de respuesta

El formato predeterminado es lo que [deben esperar los enlaces posteriores a la recepción existentes](/post-receive-hooks/): un cuerpo JSON enviado como parámetro `payload` en una solicitud POST.  También puede especificar que el cuerpo JSON sin formato se reciba con un encabezado `Accept` o una extensión `.json`.

    Accept: application/json
    https://github.com/{owner}/{repo}/events/push.json

### URL de Rellamado

Las URL de devolución de llamada pueden usar el protocolo `http://`.

    # Send updates to postbin.org
    http://postbin.org/123

### Suscribirse

El punto de conexión PubSubHubbub de GitHub es: `{% data variables.product.api_url_code %}/hub`. Una solicitud exitosa con curl se vería así:

``` shell
curl -u "user" -i \
  {% data variables.product.api_url_pre %}/hub \
  -F "hub.mode=subscribe" \
  -F "hub.topic=https://github.com/{owner}/{repo}/events/push" \
  -F "hub.callback=http://postbin.org/123"
```

Las solicitudes de PubSubHubbub pueden enviarse varias veces. Si el gancho ya existe, se modificará de acuerdo con la solicitud.

#### Parámetros

Nombre | Tipo | Descripción
-----|------|--------------
``hub.mode``|`string` | **Requerido**. `subscribe` o `unsubscribe`.
``hub.topic``|`string` |**Requerido**.  La URI del repositorio de GitHub al cual suscribirse.  La ruta debe tener el formato `/{owner}/{repo}/events/{event}`.
``hub.callback``|`string` | La URI para recibir las actualizaciones del tema.
``hub.secret``|`string` | Una llave de secreto compartido que genera una firma de hash del contenido saliente del cuerpo.  Para comprobar que una inserción procede de GitHub, compara el cuerpo de la solicitud sin formato con el contenido de {% ifversion fpt or ghes or ghec %}`X-Hub-Signature` o `X-Hub-Signature-256` los encabezados{% elsif ghae %}`X-Hub-Signature-256` el encabezado{% endif %}. Puede ver [la documentación de PubSubHubbub](https://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html#authednotify) para obtener más detalles.
