---
title: Mejores prácticas para los integradores
intro: 'Crea una app que interactúe confiablemente con la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} y proporcione la mejor experiencia para tus usuarios.'
redirect_from:
  - /guides/best-practices-for-integrators
  - /v3/guides/best-practices-for-integrators
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Integrator best practices
ms.openlocfilehash: bdfc2449946e40b017dc028869deb7991d5a344a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193522'
---
¡Estás interesado en integrarte con la plataforma de GitHub? [Está en buena compañía](https://github.com/integrations). Esta guía le ayudará a compilar una aplicación que proporcione la mejor de las experiencias a sus usuarios *y* garantice su fiabilidad al interactuar con la API. 

## Asegura las cargas útiles que se entregen desde GitHub

Es muy importante proteger [las cargas enviadas desde GitHub][event-types]. Aunque en una carga útil jamás se transmita información personal (como las contraseñas), no es bueno filtrar *ninguna* información. Algunos de los tipos de información que pudieran ser sensibles incluyen las direcciones de correo electrónico del confirmante o los nombres de los repositorios privados.

Hya varios pasos que puedes tomar para asegurar la recepción de las cárgas útiles que GitHub entregue:

1. Asegúrate de que tu servidor receptor tenga una conexión HTTPS. De manera predeterminada, GitHub verificará los certificados SSL cuando entregue las cargas útiles.{% ifversion fpt or ghec %}
1. Puede agregar [la dirección IP que usamos al entregar enlaces](/github/authenticating-to-github/about-githubs-ip-addresses) a la lista de permitidos del servidor. Para asegurarse de que siempre esté comprobando la dirección IP correcta, puede [usar el `/meta` punto de conexión](/rest/reference/meta#meta) para encontrar la dirección que usamos.{% endif %}
1. Proporcione [un token secreto](/webhooks/securing/) para asegurarse de que las cargas procedan con seguridad de GitHub. Al requerir un token secreto, te estás asegurando de que ninguno de los datos que recibe tu servidor viene de GitHub en lo absoluto. Lo ideal es proporcionar un token secreto diferente *por usuario* del servicio. Así, si un token se pone en riesgo, nadie más se vería afectado.

## Favorece el trabajo asincrónico sobre el sincronizado

GitHub espera que las integraciones respondan dentro de los primeros {% ifversion fpt or ghec %}10{% else %}30{% endif %} segundos desde que se reciba la carga útil del webhook. Si tu servicio demora más que eso para completarse, entonces GitHub finaliza la conexión y se pierde la carga útil.

Ya que es imposible predecir qué tan rápido completará esto tu servidor, deberías hacer todo "el trabajo real" en un job que actúe en segundo plano. [Resque](https://github.com/resque/resque/) (para Ruby), [RQ](http://python-rq.org/) (para Python) o [RabbitMQ](http://www.rabbitmq.com/) (para Java) son ejemplos de bibliotecas que pueden controlar la puesta en cola y el procesamiento de trabajos en segundo plano.

Tenga en cuenta que, aunque tenga un trabajo ejecutándose en segundo plano, GitHub sigue esperando que el servidor responda en un plazo de {% ifversion fpt or ghec %}diez{% else %}treinta{% endif %} segundos. Tu servidor necesita reconocer que recibió la carga útil mediante el envío de algún tipo de respuesta. Es crítico que tu servicio realice cualquier validación de una carga útil tan pronto sea posible, para que puedas reportar con exactitud si tu servidor continuará con la solicitud o no.

## Utiliza códigos de estado de HTTP adecuados cuando respondas a GitHub

Cada webhook tiene su propia sección de "Entregas Recientes", la cual lista si los despliegues tuvieron éxito o no.

![Vista de Entregas Recientes](/assets/images/webhooks_recent_deliveries.png)

Deberías utilizar códigos de estado de HTTP adecuados para informar a los usuarios. Puede utilizar códigos como `201` o `202` para reconocer la recepción de las cargas útiles que no se van a procesar (por ejemplo, una carga útil que entregue una rama que no sea la predeterminada). Reserve el código de error `500` para errores catastróficos.

## Proporciona al usuario tanta información como sea posible

Los usuarios pueden profundizar en las respuestas del servidor que envíes de vuelta a GitHub. Asegúrate de que tus mensajes son claros e informativos.

![Visualizar la respuesta de una carga útil](/assets/images/payload_response_tab.png)

## Sigue cualquier redireccionamiento que te envíe la API

GitHub es muy explícito en decirte cuando un recurso se migró y lo hace proporcionándote un código de estado de redirección. Debes seguir estas redirecciones. Cada respuesta de redirección establece el encabezado `Location` con el nuevo identificador URI que se debe visitar. Si recibes una redirección, es mejor que actualices tu código para seguir a la nueva URI, en caso de que estés utilizando una ruta obsoleta que tal ves eliminemos.

Hemos proporcionado [una lista de códigos de estado HTTP](/rest#http-redirects) que se deben tener en cuenta al diseñar la aplicación para seguir los redireccionamientos.

## No analices las URL manualmente

A menudo, las respuestas a la API contienen datos en forma de URL. Por ejemplo, cuando solicitamos un repositorio, estamos enviando una clave denominada `clone_url` con la URL que puede utilizar para clonar el repositorio.

Para mantener la estabilidad de tu app, no deberías analizar estos datos o tratr de adivinar y construir el formato de las URL futuras. Tu app puede fallar si decidimos cambiar la URL.

Por ejemplo, al trabajar con resultados paginados, a menudo resulta tentador construir direcciones URL a las que se anexa `?page=<number>` al final. Evita esa tentación. Para obtener más información sobre los resultados paginados de seguimiento fiable, consulta [Uso de la paginación en la API de REST](/rest/guides/using-pagination-in-the-rest-api).

## Verifica el tipo de evento y de acción antes de procesar el evento

Hay varios [tipos de eventos de webhook][event-types], y cada evento puede tener varias acciones. En medida en que el conjunto de características de GitHub crece, de vez en cuando agregaremos tipos de evento para nuevas acciones a los tipos de evento existentes. Asegúrate de que tu aplicación verifique el tipo y acción de un evento explícitamente antes de que hagas cualquier procesamiento de webhook. El encabezado de solicitud de `X-GitHub-Event` puede utilizarse para saber el evento que se ha recibido, para que el procesamiento se pueda gestionar de manera adecuada. De manera similar, la carga útil tiene una clave `action` de alto nivel que puede utilizarse para saber qué acción se llevó a cabo en el objeto correspondiente.

Por ejemplo, si ha configurado un webhook de GitHub para "Enviarme **todo**", la aplicación comenzará a recibir tipos de evento y acciones nuevos conforme se agreguen. Por lo tanto,  **no se recomienda usar ningún tipo de cláusula catch-all else**. Toma como ejemplo el siguiente extracto de código:

```ruby
# Not recommended: a catch-all else clause
def receive
  event_type = request.headers["X-GitHub-Event"]
  payload    = request.body

  case event_type
  when "repository"
    process_repository(payload)
  when "issues"
    process_issues(payload)
  else
    process_pull_requests
  end
end
```

En este ejemplo de código, si se recibió un evento `repository` o `issues`, se llamará correctamente a los métodos `process_repository` y `process_issues`. Sin embargo, cualquier otro tipo de evento daría lugar a una llamada a `process_pull_requests`. A medida que se agreguen tipos de evento nuevos, se generará un comportamiento incorrecto y los tipos de evento nuevos se procesarán de la misma forma que se haría con un evento de `pull_request`.

En vez de esto, te sugerimos revisar los tipos de evento explícitamente y tomar acciones adecuadas para cada caso. En el ejemplo de código siguiente, comprobamos de manera explícita si hay un evento `pull_request` y la cláusula `else` simplemente registra que hemos recibido un nuevo tipo de evento:

```ruby
# Recommended: explicitly check each event type
def receive
  event_type = request.headers["X-GitHub-Event"]
  payload    = JSON.parse(request.body)

  case event_type
  when "repository"
    process_repository(payload)
  when "issues"
    process_issue(payload)
  when "pull_request"
    process_pull_requests(payload)
  else
    puts "Oooh, something new from GitHub: #{event_type}"
  end
end
```

Ya que cada evento puede tener acciones múltiples también, se recomienda que las acciones se verifiquen de forma similar. Por ejemplo, [`IssuesEvent`](/webhooks/event-payloads/#issues) tiene varias acciones posibles. Entre ellas se incluyen `opened` cuando se crea la incidencia, `closed` cuando se cierra la incidencia y `assigned` cuando la incidencia se asigna a alguien.

De la misma forma como agregamos tipos de evento, podemos agregar acciones nuevas a los eventos existentes. Por lo tanto,  **no se recomienda usar ningún tipo de cláusula catch-all else** al comprobar la acción de un evento. En vez de esto, te sugerimos verificar las acciones de evento explícitamente como lo hicimos con el tipo de evento. Un ejemplo de esto se ve muy similar a lo que sugerimos para los tipos de evento anteriormente:

```ruby
# Recommended: explicitly check each action
def process_issue(payload)
  case payload["action"]
  when "opened"
    process_issue_opened(payload)
  when "assigned"
    process_issue_assigned(payload)
  when "closed"
    process_issue_closed(payload)
  else
    puts "Oooh, something new from GitHub: #{payload["action"]}"
  end
end
```

En este ejemplo, la acción `closed` se comprueba antes de llamar al método `process_closed`. Cualquier acción sin identificar se registra para referencias futuras.

{% ifversion fpt or ghec or ghae %}

## Lidiar con los límites de tasa

El [límite de frecuencia](/rest/overview/resources-in-the-rest-api#rate-limiting) de la API de GitHub garantiza que la API sea rápida y esté disponible para todos los usuarios.

Si alcanzas un límite de tasa, se espera que te retires y no sigas haciendo solicitudes y que intentes más tarde cuando se te permita hacerlo. Si no lo haces, podríamos prohibir tu app.

Puede [comprobar el estado del límite de frecuencia](/rest/reference/rate-limit) en cualquier momento. El verificar tu límite de tasa no representa costo alguno para éste.

## Lidiar con límites de tasa secundarios

[Los límites de frecuencia secundarios](/rest/overview/resources-in-the-rest-api#secondary-rate-limits) son otra manera de garantizar la disponibilidad de la API.
Para evitar llegar a este límite, deberás asegurarte de que tu aplicación siga los siguientes lineamientos.

* Hacer solicitudes autenticadas, o utilizar la ID de cliente y secreto de tu aplicación. Las solicitudes sin autenticar están sujetas a una limitación de frecuencia secundaria más estricta.
* Hacer solicitudes en serie para solo un usuario o ID de cliente. No realice solicitudes para un solo usuario o id. de cliente simultáneamente.
* Si está realizando una gran cantidad de `POST`, `PATCH`, `PUT` o solicitudes de `DELETE` para un único usuario o id. de cliente, espere al menos un segundo entre una solicitud y otra.
* Cuando se encuentra con un límite, use el encabezado de respuesta `Retry-After` para disminuir la frecuencia. El valor del encabezado `Retry-After` siembre será un número entero, el cual representará la cantidad de segundos que debe esperar antes de volver a realizar la solicitud. Por ejemplo, `Retry-After: 30` significa que debe esperar 30 segundos antes de enviar más solicitudes.
* Las solicitudes que crean contenido que activa notificaciones, tales como incidencias, comentarios y solicitudes de incorporación de cambios, pueden limitarse aún más y no incluir un encabezado de `Retry-After` en la respuesta. Cree este contenido con un ritmo razonable para evitar que se le limite nuevamente.

Nos reservamos el derecho de cambiar estos lineamientos como sea necesario para garantizar la disponibilidad.

{% endif %}

## Lidiar con los errores de la API

Aunque tu código jamás introducirá un error, podrías encontrarte con que has dado con varios errores sucesivos cuando intentas acceder a la API.

En lugar de omitir los códigos de estado `4xx` y `5xx` repetidos, debe asegurarse de que está interactuando correctamente con la API. Por ejemplo, si un punto de conexión solicita una cadena y está enviando un valor numérico, va a recibir un error de validación `5xx`, y la llamada no se realizará. De forma similar, intentar acceder a un punto de conexión inexistente o no autorizado dará como resultado un error `4xx`.

El ignorar los errores de validación constantes a propóstio podría resultar en la suspensión de tu app por abuso.

[event-types]: /webhooks/event-payloads
