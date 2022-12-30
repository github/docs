---
title: Entregar despliegues
intro: 'Al utilizar la API de REST de Despliegues, puedes crear herramientas personalizadas que interactúen con tu servidor y con una app de terceros.'
redirect_from:
  - /guides/delivering-deployments
  - /guides/automating-deployments-to-integrators
  - /v3/guides/delivering-deployments
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 7ac423a27fe8b1c145efa3c135d88f08487f153a
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132991'
---
La [API de implementaciones][deploy API] proporciona a sus proyectos hospedados en {% data variables.product.product_name %} la capacidad de iniciarse en un servidor del que sea propietario. En combinación con la [API de estados][status API], podrá coordinar sus implementaciones en el momento en que el código llegue a la rama predeterminada.

Esta guía utilizará la API para demostrar una configuración que puedes utilizar.
En nuestro escenario, nosotros:

* Fusionamos una solicitud de cambios.
* Cuando finaliza la IC, configuramos el estado de la solicitud de extracción según corresponda.
* Cuando se fusiona la solicitud de extracción, ejecutamos nuestro despliegue en nuestro servidor.

Nuestro sistema de IC y nuestro servidor host serán imaginarios. Podrían ser Heroku, Amazon, o algo completamente diferente. El meollo de esta guía será configurar y ajustar el servidor que administra la comunicación.

Si todavía no lo has hecho, asegúrate de [descargar `ngrok`][ngrok] y aprende a [usarlo][using ngrok]. Consideramos que es una herramienta muy útil para exponer las aplicaciones locales a Internet.

{% ifversion cli-webhook-forwarding %} {% note %}

**Nota:** Como alternativa, puedes usar el reenvío de webhooks para configurar el entorno local para recibir webhooks. Para obtener más información, consulta "[Recepción de webhooks con la CLI de GitHub](/developers/webhooks-and-events/webhooks/receiving-webhooks-with-the-github-cli)".

{% endnote %} {% endif %}

Nota: Puede descargar el código fuente completo de este proyecto [desde el repositorio platform-samples][platform samples].

## Escribir tu servidor

Escribiremos una app de Sinatra rápidamente para probar que nuestras conexiones locales estén funcionando.
Comencemos con esto:

``` ruby
require 'sinatra'
require 'json'

post '/event_handler' do
  payload = JSON.parse(params[:payload])
  "Well, it worked!"
end
```

(Si no está familiarizado con el funcionamiento de Sinatra, le recomendamos [leer la guía de Sinatra][Sinatra]).

Inicia este servidor. De manera predeterminada, Sinatra comienza en el puerto `4567`, por lo que también tendrás que configurar `ngrok` para que empiece a escuchar en este puerto.

Para que este servidor funcione, necesitaremos configurar un repositorio con un webhook.
El webhook debe configurarse para que se active cada que se crea o fusiona una solicitud de extracción.
Sigue adelante y crea un repositorio en el que quieras hacer tus experimentos. ¿Podríamos sugerir [el repositorio de cucharas y cuchillos de @octocat](https://github.com/octocat/Spoon-Knife)?
Después de esto, crearás un webhook en el repositorio, le suministrarás la dirección URL que te ha proporcionado `ngrok` y seleccionarás `application/x-www-form-urlencoded` como el tipo de contenido:

![Una URL de ngrok nueva](/assets/images/webhook_sample_url.png)

Haga clic en **Update Webhook**. Debería ver una respuesta del cuerpo de `Well, it worked!`.
Magnífico. Haga clic en **Let me select individual events** (Dejarme seleccionar eventos individuales) y seleccione lo siguiente:

* Implementación
* Estado de implementación
* Solicitud de incorporación de cambios

Estos son los eventos que {% data variables.product.product_name %} enviará al servidor cuando se produzca cualquier acción relevante. Ahora configuraremos nuestro servidor para que *solo* controle cuándo se fusionan las solicitudes de incorporación de cambios:

``` ruby
post '/event_handler' do
  @payload = JSON.parse(params[:payload])

  case request.env['HTTP_X_GITHUB_EVENT']
  when "pull_request"
    if @payload["action"] == "closed" && @payload["pull_request"]["merged"]
      puts "A pull request was merged! A deployment should start now..."
    end
  end
end
```

¿Qué sucede? En cada evento que envía {% data variables.product.product_name %} se adjunta un encabezado HTTP `X-GitHub-Event`. Solo nos interesan los eventos de Solicitud de Extracción por el momento. Al fusionar una solicitud de incorporación de cambios (su estado es `closed`, y `merged` es `true`), se iniciará una implementación.

Para probar esta prueba de concepto, realice algunos cambios en una rama del repositorio de pruebas, abra una solicitud de incorporación de cambios y fusiónlea mediante combinación. ¡Tu servidor deberá responder de acuerdo con los casos!

## Trabajar con despliegues

Ahora que ya tenemos nuestro servidor configurado, el código se está revisando y nuestras solicitudes de incorporación de cambios se han fusionado, queremos implementar nuestro proyecto.

Comenzaremos modificando nuestro cliente de escucha de eventos para que procese las solicitudes de incorporación de cambios cuando estas se fusionen, y prestaremos atención a las implementaciones:

``` ruby
when "pull_request"
  if @payload["action"] == "closed" && @payload["pull_request"]["merged"]
    start_deployment(@payload["pull_request"])
  end
when "deployment"
  process_deployment(@payload)
when "deployment_status"
  update_deployment_status
end
```

Basándonos en la información de la solicitud de incorporación de cambios, comenzaremos rellenando el método `start_deployment`:

``` ruby
def start_deployment(pull_request)
  user = pull_request['user']['login']
  payload = JSON.generate(:environment => 'production', :deploy_user => user)
  @client.create_deployment(pull_request['head']['repo']['full_name'], pull_request['head']['sha'], {:payload => payload, :description => "Deploying my sweet branch"})
end
```

Las implementaciones pueden tener algunos metadatos adjuntos en forma de `payload` y `description`. Aunque estos valores son opcionales, es de gran ayuda usarlos para registrar y representar la información.

Cuando se crea un despliegue nuevo, se activa un evento completamente separado. Por eso tenemos un nuevo caso `switch` en el controlador de eventos para `deployment`. Puede usar esta información para que se le notifique cuando se desencadene una implementación.

Las implementaciones pueden tardar mucho tiempo, por lo que queremos escuchar varios eventos, como cuándo se crea la implementación y en qué estado se encuentra.

Vamos a simular una implementación que realiza algunas acciones y observaremos el efecto que tiene en la salida. En primer lugar, vamos a completar nuestro método `process_deployment`:

``` ruby
def process_deployment
  payload = JSON.parse(@payload['payload'])
  # you can send this information to your chat room, monitor, pager, etc.
  puts "Processing '#{@payload['description']}' for #{payload['deploy_user']} to #{payload['environment']}"
  sleep 2 # simulate work
  @client.create_deployment_status("repos/#{@payload['repository']['full_name']}/deployments/#{@payload['id']}", 'pending')
  sleep 2 # simulate work
  @client.create_deployment_status("repos/#{@payload['repository']['full_name']}/deployments/#{@payload['id']}", 'success')
end
```

Por último, estimularemos el almacenamiento de la información de los estados como una salida de la consola:

``` ruby
def update_deployment_status
  puts "Deployment status for #{@payload['id']} is #{@payload['state']}"
end
```

Bamos a explicar lo que está pasando. `start_deployment` crea una nueva implementación, la cual desencadena el evento `deployment`. Desde allí, llamamos a `process_deployment` para simular las acciones que están sucediendo. Durante ese procesamiento, también llamamos a `create_deployment_status`, que permite a un receptor saber lo que está ocurriendo mientras cambiamos el estado a `pending`.

Una vez finalizada la implementación, establecemos el estado como `success`.

## Conclusión

En GitHub, hemos usado una versión de [Heaven][heaven] para administrar nuestras implementaciones durante años. Un flujo común es esencialmente el mismo que en el servidor que hemos creado anteriormente:

* Espera obtener una respuesta con base en el estado de las verificaciones de IC (éxito o fallo)
* Si las verificaciones requeridas tienen éxito, fusiona la solicitud de cambios
* Heaven toma el código fusionado y lo despliega a los servidores de prueba y producción
* Mientras tanto, Heaven también notifica a todos sobre la compilación mediante el uso de [Hubot][hubot] en nuestras salas de chat.

Eso es todo. No necesitas crear tu propia configuración de despliegue para utilizar este ejemplo.
Siempre puede recurrir a las [integraciones de GitHub][integrations].

[deploy API]: /rest/reference/repos#deployments
[status API]: /guides/building-a-ci-server
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/delivering-deployments
[Sinatra]: http://www.sinatrarb.com/
[webhook]: /webhooks/
[octokit.rb]: https://github.com/octokit/octokit.rb
[access token]: /articles/creating-an-access-token-for-command-line-use
[travis api]: https://api.travis-ci.org/docs/
[janky]: https://github.com/github/janky
[heaven]: https://github.com/atmos/heaven
[hubot]: https://github.com/github/hubot
[integrations]: https://github.com/integrations
