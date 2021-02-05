---
title: Mejores prácticas para los integradores
intro: 'Crea una app que interactúe confiablemente con la API de {% data variables.product.prodname_dotcom %} y proporcione la mejor experiencia para tus usuarios.'
redirect_from:
  - /guides/best-practices-for-integrators/
  - /v3/guides/best-practices-for-integrators
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


¡Estás interesado en integrarte con la plataforma de GitHub? [Estás en las manos correctas](https://github.com/integrations). Esta guía te ayudará a crear una app que proporcione la mejor de las experiencias para tus usuarios *y* que garantice su confiabilidad al interactuar con la API.

### Asegura las cargas útiles que se entregen desde GitHub

Es muy importante que asegures [las cargas útiles que se envíen desde GitHub][event-types]. Aunque en una carga útil jamás se transmita información personal (como las contraseñas), no es bueno filtrar *ninguna* información. Algunos de los tipos de información que pudieran ser sensibles incluyen las direcciones de correo electrónico del confirmante o los nombres de los repositorios privados.

Hya varios pasos que puedes tomar para asegurar la recepción de las cárgas útiles que GitHub entregue:

1. Asegúrate de que tu servidor receptor tenga una conexión HTTPS. Predeterminadamente, GitHub verificará los certificados SSl cuando entregue las cargas útiles.{% if currentVersion == "free-pro-team@latest" %}
1. Puedes agregar [La dirección IP que utilizamos cuando entregamos ganchos](/github/authenticating-to-github/about-githubs-ip-addresses) a tu lista de conexiones permitidas de tu servidor. Para garantizar que siempre estés verificando la dirección IP correcta, puedes [utilizar la terminal de `/meta`](/rest/reference/meta#meta) para encontrar la dirección que utilizamos.{% endif %}
1. Proporciona [un token secreto](/webhooks/securing/) para garantizar que las cargas útiles vengan de GitHub definitivamente. Al requerir un token secreto, te estás asegurando de que ninguno de los datos que recibe tu servidor viene de GitHub en lo absoluto. Idealmente, deberías proporcionar un token secreto diferente *por cada usuario* de tu servicio. Así, si un token se pone en riesgo, nadie más se vería afectado.

### Favorece el trabajo asincrónico sobre el sincronizado

GitHub espera que las integraciones respondan dentro de los primeros {% if currentVersion == "free-pro-team@latest" %}10{% else %}30{% endif %} segundos de que se reciba la carga útil del webhook. Si tu servicio demora más que eso para completarse, entonces GitHub finaliza la conexión y se pierde la carga útil.

Ya que es imposible predecir qué tan rápido completará esto tu servidor, deberías hacer todo "el trabajo real" en un job que actúe en segundo plano. [Resque](https://github.com/resque/resque/) (para Ruby), [RQ](http://python-rq.org/) (para Python), o [RabbitMQ](http://www.rabbitmq.com/) (para JAVA) son algunos ejemplos de bibliotecas que pueden manejar jobs de segundo plano para procesamiento y formación en cola.

Nota que, aún si tienes un job ejecutándose en segundo plano, GitHub sigue esperando que tu servidor responda dentro de {% if currentVersion == "free-pro-team@latest" %}diez{% else %}veinte{% endif %} segundos. Tu servidor necesita reconocer que recibió la carga útil mediante el envío de algún tipo de respuesta. Es crítico que tu servicio realice cualquier validación de una carga útil tan pronto sea posible, para que puedas reportar con exactitud si tu servidor continuará con la solicitud o no.

### Utiliza códigos de estado de HTTP adecuados cuando respondas a GitHub

Cada webhook tiene su propia sección de "Entregas Recientes", la cual lista si los despliegues tuvieron éxito o no.

![Vista de entregas recientes](/assets/images/webhooks_recent_deliveries.png)

Deberías utilizar códigos de estado de HTTP adecuados para informar a los usuarios. Puedes utilizar códigos como el `201` o el `202` para reconocer la recepción de las cargas útiles que no se van a procesar (por ejemplo, una carga útil que entregue una rama que no sea la predeterminada). Reserva el código de error `500` para las fallas catastróficas.

### Proporciona al usuario tanta información como sea posible

Los usuarios pueden profundizar en las respuestas del servidor que envíes de vuelta a GitHub. Asegúrate de que tus mensajes son claros e informativos.

![Visualizar la respuesta de una carga útil](/assets/images/payload_response_tab.png)

### Sigue cualquier redireccionamiento que te envíe la API

GitHub es muy explícito en decirte cuando un recurso se migró y lo hace proporcionándote un código de estado de redirección. Debes seguir estas redirecciones. Cada respuesta de redirección configura el encabezado `Location` con la URI nueva a la cual debes dirigirte. Si recibes una redirección, es mejor que actualices tu código para seguir a la nueva URI, en caso de que estés utilizando una ruta obsoleta que tal ves eliminemos.

Hemos proporcionado [una lista de códigos de estado de HTTP](/rest#http-redirects) que puedes consultar cuando estés diseñando tu app para seguir las redirecciones.

### No analices las URL manualmente

A menudo, las respuestas a la API contienen datos en forma de URL. Por ejemplo, cuando solicitamos un repositorio, estamos enviando una clave denominada `clone_url` con la URL que puedes utilizar para clonar el repositorio.

Para mantener la estabilidad de tu app, no deberías analizar estos datos o tratr de adivinar y construir el formato de las URL futuras. Tu app puede fallar si decidimos cambiar la URL.

Por ejemplo, cuando estamos trabajando con resultados paginados, a menudo es tentador construir las URL que adjunten `?page=<number>` al final. Evita esa tentación. [Nuestra guía sobre paginación](/guides/traversing-with-pagination) te ofrece tips de seguridad sobre cómo seguir resultados paginados de manera confiable.

### Verifica el tipo de evento y de acción antes de procesar el evento

Hay varios [tipos de eventos de webhook][event-types], y cada evento puede tener varias acciones. En medida en que el conjunto de características de GitHub crece, de vez en cuando agregaremos tipos de evento para nuevas acciones a los tipos de evento existentes. Asegúrate de que tu aplicación verifique el tipo y acción de un evento explícitamente antes de que hagas cualquier procesamiento de webhook. El encabezado de solicitud de `X-GitHub-Event` puede utilizarse para saber qué evento se recibió, para que el procesamiento se pueda gestionar de manera adecuada. De manera similar, la carga útil tiene una clave de `action` de alto nivel que puede utilizarse para saber qué acción se llevó a cabo en el objeto relevante.

Por ejemplo, si configuraste un webhook de GitHub para "Enviarme **todo**", tu aplicación comenzará a recibir tipos de evento y acciones nuevos conforme se agreguen. Por lo tanto, **no se recomienda utilizar ningún tipo de cláusula "else" que reciba todo**. Toma como ejemplo el siguiente extracto de código:

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

En este ejemplo, se llamará correctamente a los métodos de `process_repository` y `process_issues` si se recibió un evento de `repository` o de `issues`. Sin embargo, cualquier otro tipo de evento resultaría en que se llamara a `process_pull_requests`. En medida en que se agreguen tipos de evento nuevos, esto dará como resultado un comportamiento incorrecto y los tipos de evento nuevos se procesarían de la misma forma que se haría con un evento de `pull_request`.

En vez de esto, te sugerimos revisar los tipos de evento explícitamente y tomar acciones adecuadas para cada caso. En el siguiente ejemplo, estamos verificando explícitamente si hay eventos de `pull_request` y la cláusula `else` simplemente registra lo que recibimos en un tipo de evento nuevo:

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

Ya que cada evento puede tener acciones múltiples también, se recomienda que las acciones se verifiquen de forma similar. Por ejemplo, el [`IssuesEvent`](/webhooks/event-payloads/#issues) tiene muchas acciones posibles. Estas incluyen a `opened` cuando se crea el informe de problemas, a `closed` cuando el informe de problemas se cierra, y a `assigned` cuando este informe se asigna a alguien.

De la misma forma como agregamos tipos de evento, podemos agregar acciones nuevas a los eventos existentes. Por lo tanto, nuevamente **no se recomienda utilizar ningún tipo de cláusula "else" para recibir todo** cuando verificamos la acción de un evento. En vez de esto, te sugerimos verificar las acciones de evento explícitamente como lo hicimos con el tipo de evento. Un ejemplo de esto se ve muy similar a lo que sugerimos para los tipos de evento anteriormente:

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

En este ejemplo, la acción `closed` se verifica primero antes de llamar al método `process_closed`. Cualquier acción sin identificar se registra para referencias futuras.

{% if currentVersion == "free-pro-team@latest" %}

### Lidiar con los límites de tasa

El [límite de tasa](/rest/overview/resources-in-the-rest-api#rate-limiting) de la API de GitHub se asegura de que la API sea rápida y esté disponible para todos.

Si alcanzas un límite de tasa, se espera que te retires y no sigas haciendo solicitudes y que intentes más tarde cuando se te permita hacerlo. Si no lo haces, podríamos prohibir tu app.

Siempre puedes [verificar el estado de tu límite de tasa](/rest/reference/rate-limit) en cualquier momento. El verificar tu límite de tasa no representa costo alguno para éste.

### Lidiar con los abusos al límite de tasa

[La sobre-explotación de los límites de tasa](/rest/overview/resources-in-the-rest-api#abuse-rate-limits) es otra forma en la que garantizamos la disponibilidad de la API. Para evitar llegar a este límite, deberás asegurarte de que tu aplicación siga los siguientes lineamientos.

* Hacer solicitudes autenticadas, o utilizar la ID de cliente y secreto de tu aplicación. Las solicitudes sin autenticar están sujetas a un abuso del límite de tasa más agresivo.
* Hacer solicitudes en serie para solo un usuario o ID de cliente. No hagas solicitudes para solo un usuario o ID de cliente simultáneamente.
* Si haces muchas solicitudes de tipo `POST`, `PATCH`, `PUT`, o `DELETE` para un solo usuario o ID de cliente, espera por lo menos un segundo entre cada una.
* Cuando se te limita, utiliza el encabezado de respuesta `Retry-After` para bajar la velocidad. El valor del encabezado `Retry-After` siembre será un número entero, el cual representará la cantidad de segundos que debes esperar antes de volver a hacer la solicitud. Por ejemplo, `Retry-After: 30` significa que debes esperar 30 segundos antes de enviar más solicitudes.
* Las solicitudes que crean contenido que activa notificaciones, tales como informes de problemas, comentarios y solicitudes de extracción, puede limitarse aún más y no incluirá un encabezado de `Retry-After` en la respuesta. Por favor, crea este contenido con un ritmo razonable para evitar que se te limite nuevamente.

Nos reservamos el derecho de cambiar estos lineamientos como sea necesario para garantizar la disponibilidad.

{% endif %}

### Lidiar con los errores de la API

Aunque tu código jamás introducirá un error, podrías encontrarte con que has dado con varios errores sucesivos cuando intentas acceder a la API.

En vez de ignorar los códigos de estado `4xx` y `5xx` repetidamente, debes asegurarte de que estás interactuando correctamente con la API. Por ejemplo, si una terminal solicita una secuencia y estás pasando un valor numérico, vas a recibir un error de validación `5xx`, y tu llamada no tendrá éxito. De forma similar, el intentar acceder a una terminal inexistente o no autorizada dará como resultado un error `4xx`.

El ignorar los errores de validación constantes a propóstio podría resultar en la suspensión de tu app por abuso.

[event-types]: /webhooks/event-payloads

[event-types]: /webhooks/event-payloads
