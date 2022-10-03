---
title: Crear un servidor de IC
intro: Crea tu propio sistema de IC utilizando la API de Estados.
redirect_from:
  - /guides/building-a-ci-server
  - /v3/guides/building-a-ci-server
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 5c2fcd462e9c07fb9c359525ece7896e10dd9649
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145135960'
---
[Status API][status API] es responsable de combinar las confirmaciones con un servicio de pruebas, para que cada inserción que realice se pueda probar y se representar en una solicitud de incorporación de cambios de {% data variables.product.product_name %}.

Esta guía utilizará la API para demostrar una configuración que puedes utilizar.
En nuestro escenario, nosotros:

* Ejecutaremos nuestra suit de IC cuando se abra una Solicitud de Extracción (configuraremos el estado de IC como pendiente).
* Cuando finalice la IC, configuraremos el estado de la Solicitud de Extracción como corresponda.

Nuestro sistema de IC y nuestro servidor host serán imaginarios. Podrían ser Travis, Jenkins, o algo completamente distinto. El meollo de esta guía será configurar y ajustar el servidor que administra la comunicación.

Si todavía no lo ha hecho, asegúrese de [descargar ngrok][ngrok] y aprenda a [usarlo][using ngrok]. Consideramos que es una herramienta muy útil para exponer las conexiones locales.

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

Inicia este servidor. De manera predeterminada, Sinatra comienza en el puerto `4567`, por lo que también tendrá que configurar ngrok para que empiece a escuchar en este puerto.

Para que este servidor funcione, necesitaremos configurar un repositorio con un webhook.
El webhook debe configurarse para que se active cada que se crea o fusiona una Solicitud de Extracción.
Sigue adelante y crea un repositorio en el que quieras hacer tus experimentos. ¿Podríamos sugerir [el repositorio de cucharas y cuchillos de @octocat](https://github.com/octocat/Spoon-Knife)?
Después de esto, creará un webhook en el repositorio, le suministrará la URL que le ha proporcionado ngrok y seleccionará `application/x-www-form-urlencoded` como el tipo de contenido:

![Una URL de ngrok nueva](/assets/images/webhook_sample_url.png)

Haga clic en **Update Webhook**. Debería ver una respuesta del cuerpo de `Well, it worked!`.
Magnífico. Haga clic en **Let me select individual events** y seleccione lo siguiente:

* Estado
* Solicitud de incorporación de cambios

Estos son los eventos que {% data variables.product.product_name %} enviará al servidor cuando se produzca cualquier acción relevante. Ahora se actualizará el servidor para que *solo* controle el escenario de solicitud de incorporación de cambios:

``` ruby
post '/event_handler' do
  @payload = JSON.parse(params[:payload])

  case request.env['HTTP_X_GITHUB_EVENT']
  when "pull_request"
    if @payload["action"] == "opened"
      process_pull_request(@payload["pull_request"])
    end
  end
end

helpers do
  def process_pull_request(pull_request)
    puts "It's #{pull_request['title']}"
  end
end
```

¿Qué sucede? En cada evento que envía {% data variables.product.product_name %} se adjunta un encabezado HTTP `X-GitHub-Event`. Solo nos interesan los eventos de Solicitud de Extracción por el momento. Desde ahí, se tomará la carga de información y se devolverá el campo de título. En un escenario idóneo, al servidor le interesarían todas las actualizaciones de una solicitud de incorporación de cambios, no solo cuando se abra. Eso garantizaría que todas las cargas pasen la prueba de IC.
Pero para efectos de esta demostración, solo nos interesará cuándo se abren.

Para probar esta prueba de concepto, realice algunos cambios en una rama del repositorio de pruebas y abra una solicitud de incorporación de cambios. ¡Tu servidor deberá responder de acuerdo con los casos!

## Trabajar con los estados

Después de implementar el servidor, ya se puede comenzar el primer requisito: configurar (y actualizar) los estados de CI. Tenga en cuenta que siempre que actualice el servidor, puede hacer clic en **Redeliver** para enviar la misma carga. No es necesario crear una solicitud de incorporación de cambios cada vez que realice un cambio.

Como se interactúa con la API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, se usará [Octokit.rb][octokit.rb] para administrar las interacciones. Ese cliente se configurará con [un token de acceso personal][access token]:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
ACCESS_TOKEN = ENV['MY_PERSONAL_TOKEN']

before do
  @client ||= Octokit::Client.new(:access_token => ACCESS_TOKEN)
end
```

Después, solo habrá que actualizar la solicitud de incorporación de cambios en {% data variables.product.product_name %} para dejar claro lo que se procesa en la CI:

``` ruby
def process_pull_request(pull_request)
  puts "Processing pull request..."
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
end
```

Estamos haciendo tres cosas muy básicas aquí:

* buscando el nombre completo del repositorio
* buscando el último SHA de la solicitud de extracción
* configurando el estado como "pendiente"

Eso es todo. A partir de ahora, puede ejecutar el proceso que necesite para ejecutar el conjunto de pruebas. Es posible que tenga que pasar el código a Jenkins, o bien llamar a otro servicio web mediante su API, como [Travis][travis api]. Después, asegúrese de actualizar el estado una vez más. En el ejemplo, simplemente se establecerá en `"success"`:

``` ruby
def process_pull_request(pull_request)
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
  sleep 2 # do busy work...
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'success')
  puts "Pull request processed!"
end
``` 

## Conclusión

En GitHub, se ha usado una versión de [Janky][janky] para administrar la CI durante años.
El flujo básico es esencial y exactamente el mismo que en el servidor que acabamos de crear.
En GitHub, nosotros:

* Notificamos todo a Jenkins cuando se crea o actualiza una solicitud de extracción (a través de Janky)
* Esperamos una respuesta del estado de la IC
* Si el código tiene luz verde, lo fusionamos con la solicitud de extracción

Todas estas comunicaciones se canalizan de vuelta a nuestras salas de chat. No es necesario crear una configuración de CI propia para utilizar este ejemplo.
Siempre puede recurrir a las [integraciones de GitHub][integrations].

[deploy API]: /rest/reference/repos#deployments
[status API]: /rest/reference/commits#commit-statuses
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/building-a-ci-server
[Sinatra]: http://www.sinatrarb.com/
[webhook]: /webhooks/
[octokit.rb]: https://github.com/octokit/octokit.rb
[access token]: /articles/creating-an-access-token-for-command-line-use
[travis api]: https://api.travis-ci.org/docs/
[janky]: https://github.com/github/janky
[heaven]: https://github.com/atmos/heaven
[hubot]: https://github.com/github/hubot
[integrations]: https://github.com/integrations
