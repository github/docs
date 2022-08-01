---
title: Webhooks
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
---

Los webhooks de repositorio te permiten recibir cargas útiles de `POST` por HTTP cuando ciertos eventos suceden en un repositorio. {% data reusables.webhooks.webhooks-rest-api-links %}

Si te gustaría configurar un solo webhook para recibir eventos de todos los repositorios de tu organización, consulta nuestra documentación de la API para los [Webhooks de una Organización](/rest/reference/orgs#webhooks).

Adicionalmente a la API de REST, {% data variables.product.prodname_dotcom %} también puede servir como un punto de [PubSubHubbub](#pubsubhubbub) para los repositorios.

## Recibir Webhooks

Para que {% data variables.product.product_name %} envíe cargas útiles de webhooks, se necesita que se pueda acceder a tu servidor desde la internet. También sugerimos ampliamente utilizar SSL para que podamos enviar cargas útiles cifradas a través de HTTPS.

### Encabezados de Webhook

{% data variables.product.product_name %} enviará varios encabezados de HTTP para diferenciar los tipos de eventos y los identificadores de las cargas útiles. Consulta la sección de [encabezados de webhook](/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers) para encontrar más detalles.

## PubSubHubbub

GitHub también puede fungir como un centro de [PubSubHubbub](https://github.com/pubsubhubbub/PubSubHubbub) para todos los repositorios. PSHB es un proptocolo simple de publicación/suscripción que permite a los servidores registrarse para recibir actualizaciones de cuándo se actualiza un tema. Las actualizaciones se mandan con una solicitud HTTP de tipo POST a una URL de rellamado. Las URL de tema para las cargas a un repositorio de GitHub están en este formato:

`https://github.com/{owner}/{repo}/events/{event}`

El veneto puede ser cualquier evento de webhook disponible. Para obtener más información, consulta la sección "[eventos y cargas útiles de los webhooks](/developers/webhooks-and-events/webhook-events-and-payloads)".

### Formato de respuesta

El formato predeterminado es lo que [deberían esperar los ganchos de post-recepción](/post-receive-hooks/): Un cuerpo de JSON que se envía como un parámetro de `payload` en un POST.  También puedes especificar si quieres recibir el cuerpo en JSON sin procesar, ya sea un encabezado de `Accept` o una extensión `.json`.

    Accept: application/json
    https://github.com/{owner}/{repo}/events/push.json

### URL de Rellamado

Las URL de rellamado puede utilizar el protocolo `http://`.

    # Send updates to postbin.org
    http://postbin.org/123

### Suscribirse

La terminal de PubSubHubbub de GitHub es: `{% data variables.product.api_url_code %}/hub`. Una solicitud exitosa con curl se vería así:

``` shell
curl -u "user" -i \
  {% data variables.product.api_url_pre %}/hub \
  -F "hub.mode=subscribe" \
  -F "hub.topic=https://github.com/{owner}/{repo}/events/push" \
  -F "hub.callback=http://postbin.org/123"
```

Las solicitudes de PubSubHubbub pueden enviarse varias veces. Si el gancho ya existe, se modificará de acuerdo con la solicitud.

#### Parámetros

| Nombre         | Tipo        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hub.mode`     | `secuencia` | **Requerido**. Ya sea `subscribe` o `unsubscribe`.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `hub.topic`    | `secuencia` | **Requerido**.  La URI del repositorio de GitHub al cual suscribirse.  La ruta debe estar en el formato `/{owner}/{repo}/events/{event}`.                                                                                                                                                                                                                                                                                                                                                                      |
| `hub.callback` | `secuencia` | La URI para recibir las actualizaciones del tema.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `hub.secret`   | `secuencia` | Una llave de secreto compartido que genera una firma de hash del contenido saliente del cuerpo.  You can verify a push came from GitHub by comparing the raw request body with the contents of the {% ifversion fpt or ghes or ghec %}`X-Hub-Signature` or `X-Hub-Signature-256` headers{% elsif ghae %}`X-Hub-Signature-256` header{% endif %}. Puedes ver [la documentación de PubSubHubbub](https://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html#authednotify) para obtener más detalles. |
