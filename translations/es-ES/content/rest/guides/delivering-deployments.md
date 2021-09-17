---
title: Entregar despliegues
intro: 'Al utilizar la API de REST de Despliegues, puedes crear herramientas personalizadas que interactúen con tu servidor y con una app de terceros.'
redirect_from:
  - /guides/delivering-deployments/
  - /guides/automating-deployments-to-integrators/
  - /v3/guides/delivering-deployments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---
 
  

La [API de despliegues][deploy API] proporciona a tus proyectos hospedados en {% data variables.product.product_name %} la capadidad de lanzarlos en un servidor que te pertenezca. En combinación con [la API de estados][status API], podrás coordinar tus lanzamientos en el momento en que tu código llegue a la rama predeterminada.

Esta guía utilizará la API para demostrar una configuración que puedes utilizar. En nuestro escenario, nosotros:

* Fusionamos una solicitud de extracción
* Cuando finaliza la IC, configuramos el estado de la solicitud de extracción según corresponda.
* Cuando se fusiona la solicitud de extracción, ejecutamos nuestro despliegue en nuestro servidor.

Nuestro sistema de IC y nuestro servidor host serán imaginarios. Podrían ser Heroku, Amazon, o algo completamente diferente. El meollo de esta guía será configurar y ajustar el servidor que administra la comunicación.

Si aún no lo has hecho, asegúrate de [descargar ngrok][ngrok], y de aprender a [utilizarlo][using ngrok]. Consideramos que es una herramienta muy útil para exponer las conexiones locales.

Nota: puedes descargar todo el código fuente para este proyecto [del repo platform-samples][platform samples].

### Escribir tu servidor

Escribiremos una app de Sinatra rápidamente para probar que nuestras conexiones locales estén funcionando. Comencemos con esto:

``` ruby
require 'sinatra'
require 'json'

post '/event_handler' do
  payload = JSON.parse(params[:payload])
  "Well, it worked!"
end
```

(Si no estás familiarizado con como funciona Sinatra, te recomendamos [leer la guía de Sinatra][Sinatra].)

Inicia este servidor. Predeterminadamente, Sinatra inicia en el puerto `4567`, así que también debes configurar ngrok para comenzar a escuchar este puerto.

Para que este servidor funcione, necesitaremos configurar un repositorio con un webhook. El webhook debe configurarse para que se active cada que se crea o fusiona una solicitud de extracción. Sigue adelante y crea un repositorio en el que quieras hacer tus experimentos. ¿Podríamos sugerirte que sea [el repositorio Spoon/Knife de @octocat](https://github.com/octocat/Spoon-Knife)? Después de esto, crearás un webhook nuevo en tu repositorio y lo alimentarás con la URL que te dio ngrok para luego escoger a `application/x-www-form-urlencoded` como el tipo de contenido:

![Una URL de ngrok nueva](/assets/images/webhook_sample_url.png)

Haz clic en **Actualizar webhook**. Deberás ver una respuesta en el cuerpo que diga `Well, it worked!`. ¡Genial! Da clic en **Déjame selecionar eventos individuales**, y selecciona lo siguiente:

* Despliegue
* Estado del despliegue
* Solicitud de Extracción

Estos son los eventos que {% data variables.product.product_name %} enviará a nuestro servidor cuando ocurra cualquier acción relevante. Configuraremos nuestro servidor para que *solo* gestione cuando las solicitudes de extracción se fusionen ahora mismo:

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

¿Qué está pasando? Cada evento que {% data variables.product.product_name %} envía adjunta un encabezado de HTTP de `X-GitHub-Event`. Solo nos interesan los eventos de Solicitud de Extracción por el momento. Cuando una solicitud de extracción se fusiona (su estado es `closed`, y `merged` se encuentra como `true`), iniciaremos un despliegue.

Para probar esta prueba de concepto, haz algunos cambios en una rama de tu repositorio de pruebas, y abre una solicitud de extracción y fusiónala. ¡Tu servidor deberá responder de acuerdo con los casos!

### Trabajar con despliegues

Como ya tenemos nuestro servidor configurado, el código ya se revisó, y nuestras solicitudes de extracción se fusionaron, entonces queremos desplegar nuestro proyecto.

Comenzaremos modificando nuestro detector de eventos para que procese las solicitudes de extracción cuando se fusiones, y para que comience a poner atención a los despliegues:

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

Basándonos en la información de la solicitud de extracción, comenzaremos llenando el método de `start_deployment`:

``` ruby
def start_deployment(pull_request)
  user = pull_request['user']['login']
  payload = JSON.generate(:environment => 'production', :deploy_user => user)
  @client.create_deployment(pull_request['head']['repo']['full_name'], pull_request['head']['sha'], {:payload => payload, :description => "Deploying my sweet branch"})
end
```

Los despliegues pueden tener algunos metadatos adjuntos en forma de una `payload` y una `description`. Aunque estos valores son opcionales, es de gran ayuda utilizarlos para registrar y representar la información.

Cuando se crea un despliegue nuevo, se activa un evento completamente separado. Por eso es que tenemos un caso nuevo de `switch` en el gestor de eventos para nuestro `deployment`. Puedes utilizar esta información para que se te notifique cuando se active un despliegue.

Los despliegues pueden tomar mucho tiempo, así que queremos detectar varios eventos, tales como cuando el despliegue se cree, y en qué estado está.

Simulemos un despliegue que tome algunas acciones, y pondremos atención en el efecto que tiene sobre la salida. Primero, vamos a completar nuestro métoddo de `process_deployment`:

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

Bamos a explicar lo que está pasando. `start_deployment` creó un despliegue nuevo, lo cual activó el evento `deployment`. Desde ahí, llamamos a `process_deployment` para estimular las acciones que están sucediendo. Durante este procesamiento, también llamamos a `create_deployment_status`, el cual permite que un receptor sepa lo que está pasando, mientras cambiamos el estado a `pending`.

Después de que termine el despliegue, configuramos el estado como `success`.

### Conclusión

En GitHub siempre hemos utilizado una versión de [Heaven][heaven] durante años para administrar nuestros despliegues. El flujo básico es esencial y exactamente el mismo que en el servidor que acabamos de crear. En GitHub, nosotros:

* Esperamos una respuesta del estado de la IC
* Si el código tiene luz verde, lo fusionamos con la solicitud de extracción
* Heaven toma el código fusionado y lo despliega en nuestros servidores productivos y de pruebas
* Mientras tanto, Heaven también notifica a todos acerca de la compilación, a través de [Hubot][hubot] que espera en nuestras salas de chat

¡Listo! No necesitas crear tu propia configuración de despliegue para utilizar este ejemplo. Siempre puedes confiar en las [Integraciones de GitHub][integrations].

[deploy API]: /rest/reference/repos#deployments
[status API]: /guides/building-a-ci-server
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/delivering-deployments
[Sinatra]: http://www.sinatrarb.com/
[heaven]: https://github.com/atmos/heaven
[hubot]: https://github.com/github/hubot
[integrations]: https://github.com/integrations
