---
title: Crear un servidor de IC
intro: Crea tu propio sistema de IC utilizando la API de Estados.
redirect_from:
  - /guides/building-a-ci-server/
  - /v3/guides/building-a-ci-server
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---



La [API de Estados][status API] es responsable de unir las confirmaciones con un servicio de pruebas para que cada carga que hagas pueda probarse y se represente en una solicitud de extracción de {% data variables.product.product_name %}.

Esta guía utilizará esa API para ejemplificar una configuración que puedes utilizar. En nuestro escenario, nosotros:

* Ejecutaremos nuestra suit de IC cuando se abra una Solicitud de Extracción (configuraremos el estado de IC como pendiente).
* Cuando finalice la IC, configuraremos el estado de la Solicitud de Extracción como corresponda.

Nuestro sistema de IC y nuestro servidor host serán imaginarios. Podrían ser Travis, Jenkins, o algo completamente distinto. El meollo de esta guía será configurar y ajustar el servidor que administra la comunicación.

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

Para que este servidor funcione, necesitaremos configurar un repositorio con un webhook. El webhook debe configurarse para que se active cada que se crea o fusiona una Solicitud de Extracción. Sigue adelante y crea un repositorio en el que quieras hacer tus experimentos. ¿Podríamos sugerirte que sea [el repositorio Spoon/Knife de @octocat](https://github.com/octocat/Spoon-Knife)? Después de esto, crearás un webhook nuevo en tu repositorio y lo alimentarás con la URL que te dio ngrok para luego escoger a `application/x-www-form-urlencoded` como el tipo de contenido:

![Una URL de ngrok nueva](/assets/images/webhook_sample_url.png)

Haz clic en **Actualizar webhook**. Deberás ver una respuesta en el cuerpo que diga `Well, it worked!`. ¡Genial! Da clic en **Déjame selecionar eventos individuales**, y selecciona lo siguiente:

* Estado
* Solicitud de Extracción

Estos son los eventos que {% data variables.product.product_name %} enviará a nuestro servidor cuando ocurra cualquier acción relevante. Vamos a actualizar nuestro servidor para que *solo* gestione el escenario de Solicitud de Extracción ahora:

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

¿Qué está pasando? Cada evento que {% data variables.product.product_name %} envía adjunta un encabezado de HTTP de `X-GitHub-Event`. Solo nos interesan los eventos de Solicitud de Extracción por el momento. Desde ahí, tomaremos la carga útil de información y devolveremos el campo de título. En un escenario ideal, a nuestro servidor le interesaría cada vez que se actualiza una solicitud de extracción, no únicamente cuando se abre. Eso garantizaría que todas las cargas pasen la prueba de IC. Pero para efectos de esta demostración, solo nos interesará cuándo se abren.

Para probar esta prueba de concepto, haz algunos cambios en una rama de tu repositorio de pruebas, y abre una solicitud de extracción. ¡Tu servidor deberá responder de acuerdo con los casos!

### Trabajar con los estados

Ya que configuramos el servidor, estamos listos para comenzar con nuestro primer requisito, que es configurar (y actualizar) los estados de IC. Nota que en cualquier momento que actualices tu servidor, puedes dar clic en **Volver a entregar** para enviar la misma carga útil. ¡No necesitas hacer una solicitud de extracción cada que haces un cambio!

Ya que estamos interactuando con la API de {% data variables.product.product_name %}, utilizaremos a [Octokit.rb][octokit.rb] para administrar nuestras interacciones. Configuraremos a ese cliente con

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
ACCESS_TOKEN = ENV['MY_PERSONAL_TOKEN']

before do
  @client ||= Octokit::Client.new(:access_token => ACCESS_TOKEN)
end
```

Después de ésto, solo necesitaremos actualizar la solicitud de extracción en {% data variables.product.product_name %} para dejar en claro lo que estamos procesando en la IC:

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

¡Listo! Desde estepunto puedes ejecutar el proceso que sea que necesites para ejecutar tu suit de pruebas. Tal vez vas a pasar tu código a Jenkins, o a llamar a otro servicio web a través de su API, como con [Travis][travis api]. Después de eso, asegúrate actualizar el estado una vez más. En nuestro ejemplo, solo lo configuraremos como `"success"`:

``` ruby
def process_pull_request(pull_request)
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
  sleep 2 # do busy work...
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'success')
  puts "Pull request processed!"
end
```

### Conclusión

En GitHub, utilizamos una versión de [Janky][janky] durante años para administrar nuestra IC. El flujo básico es esencial y exactamente el mismo que en el servidor que acabamos de crear. En GitHub, nosotros:

* Notificamos todo a Jenkins cuando se crea o actualiza una solicitud de extracción (a través de Janky)
* Esperamos una respuesta del estado de la IC
* Si el código tiene luz verde, lo fusionamos con la solicitud de extracción

Todas estas comunicaciones se canalizan de vuelta a nuestras salas de chat. No necesitas crear tu propia configuración de IC para utilizar este ejemplo. Siempre puedes confiar en las [Integraciones de GitHub][integrations].

[status API]: /v3/repos/statuses/
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/building-a-ci-server
[Sinatra]: http://www.sinatrarb.com/
[octokit.rb]: https://github.com/octokit/octokit.rb
[travis api]: https://api.travis-ci.org/docs/
[janky]: https://github.com/github/janky
[integrations]: https://github.com/integrations
