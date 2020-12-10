---
title: Crear pruebas de IC con la API de Verificaciones
intro: 'Crea un servidor de integración continua para ejecutar pruebas utilizando una {% data variables.product.prodname_github_app %} y la API de Verificaciones.'
redirect_from:
  - /apps/quickstart-guides/creating-ci-tests-with-the-checks-api
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



### Introducción

Esta guía te dará una introducción a las [GitHub Apps](/apps/) y a la [API de verificaciones](/v3/checks/), las cuales utilizarás para crear un servidor de Integración contínua (CI) que ejecute pruebas.

La IC es una práctica de software que requiere código confirmado frecuente en un repositorio compartido. El código de confirmación generar errores de manera temprana frecuentemente, así como reduce la cantidad de código que necesita un desarrollador para hacer depuraciones cuando encuentra la fuente de un error. Las actualizaciones frecuentes de código facilitan también la fusión de cambios de diferentes miembros de un equipo de desarrollo de software. Esto es excelente para los desarrolladores, que pueden dedicar más tiempo a escribir código y menos tiempo a depurar errores o resolver conflictos de fusión. 🙌

Un servidor de IC hospeda código que ejecuta pruebas de IC, tal como los limpíadores de código (que revisan el formato del estilo), revisiones de seguridad, cobertura de código, y otras verificaciones contra las confirmaciones de código nuevas que hay en un repositorio. Los servidores de IC incluso pueden crear y desplegar código en los servidores de pruebas y en los productivos. Para encontrar algunas ejemplos de los tipos de pruebas de IC que puedes crear con una GitHub App, revisa las [apps de integración continua](https://github.com/marketplace/category/continuous-integration) que se encuentran disponibles en GitHub Marketplace.

{% data reusables.apps.app-ruby-guides %}

#### Resumen de la API de Verificaciones

La [API de Verificaciones](/v3/checks/) te permite configurar las pruebas de IC que se ejecutan automáticamente contra cada confirmación de código en un repositorio. La API de Verificaciones reporta información detallada acerca de cada verificación en GitHub dentro de la pestaña de **Verificaciones** de las solicitudes de extracción. Con la API de verificaciones, puedes crear anotaciones con detalles adicionales para líneas específicas de código. Las anotaciones se encuentran visibles en la pestaña de **Verificaciones**. Cuando creas una anotación para un archivo que es parte de la solicitud de extracción, estas también se muestran en la pestaña **Archivos cambiados**.

Un _conjunto de verificaciones_ es un grupo de _ejecuciones de verificación_ (pruebas de IC individuales). Tanto estos conjuntos como las ejecuciones contienen _estados_ que pueden visualizarse en la solicitud de extracción en GitHub. Puedes utilizar estados para determinar cuando una confirmación de código introduce errores. El utilizar estos estados con [ramas protegidas](/v3/repos/branches/) puede prevenir que las personas fusionen solicitudes de extracción prematuramente. Consulta la sección "[Habilitar las revisiones de estado requeridas](/articles/enabling-required-status-checks/)" para obtener más detalles.

La API de Verificaciones envía el [evento de webhook `check_suite`](/webhooks/event-payloads/#check_suite) a todas las GitHub Apps que se instalan en un repositorio cada vez que se carga código nuevo a éste. Para recibir todas las acciones de los eventos de la API de Verificaciones, la app debe contar con el permiso `checks:write`. GitHub crea los eventos de `check_suite` automáticamente para las nuevas confirmaciones de código en un repositorio utilizando el flujo predeterminado, aunque puedes [Actualizar las preferencias del repositorio para los conjuntos de verificaciones](/v3/checks/suites/#update-repository-preferences-for-check-suites) si así lo quieres. Aquí te mostramos cómo funciona el flujo predeterminado:

1. Cada que alguien carga código en el repositorio, GitHub envía el evento de `check_suite` con una acción de `requested` a todas las GitHub Apps que estén instaladas en el repositorio que tiene el permiso de `checks:write`. Este evento permite a las apps saber que se cargó código y que GitHub creó un nuevo conjunto de verificaciones automáticamente.
1. Cuando tu app recibe este evento, puede [agregar ejecuciones de verificacion](/v3/checks/runs/#create-a-check-run) a ese conjunto.
1. Tus ejecuciones de verificacion pueden incluir [anotaciones](/v3/checks/runs/#annotations-object) que se muestran en líneas de código específicas.

**En esta guía, aprenderás cómo:**

* Parte 1: Configurar el marco de trabajo para un servidor de IC utilizando la API de Verificaciones.
  * Configurar una GitHub App como un servidor que recibe los eventos de la API de Verificaciones.
  * Crear ejecuciones de verificacion nuevas para las pruebas de IC cuando un repositorio recibe cargas nuevas de confirmaciones.
  * Re-ejecutar ejecuciones de verificación cuando un usuario solicita esta acción en GitHub.
* Parte 2: Compilar en el marco de trabajo del servidor de IC que creaste agregando una prueba de limpieza de IC.
  * Actualizar una ejecución de verificación con un `status`, `conclusion`, y `output` details.
  * Crear anotaciones en las líneas de código que muestra GitHub en las pestañas de **Verificaciones** y **Archivos Cambiados** de una solicitud de extracción.
  * Arreglar automáticamente las recomendaciones del limpiador al exponer el botón "Arreglar esto" en la pestaña de **Verificaciones** de la solicitud de extracción.

Para obtener una idea de lo que hará tu servidor de IC para la API de Verificaciones cuando completes este inicio rápido, revisa el siguiente demo:

![Demostración de la guía de inicio rápido para el servidor de IC de la API de Verificaciones](/assets/images/github-apps/github_apps_checks_api_ci_server.gif)

### Prerrequisitos

Antes de que inicies, tal vez quieras familiarizarte con las [GitHub Apps](/apps/), los [Webhooks](/webhooks), y con la [API de Verificaciones](/v3/checks/), si aún no lo has hecho. Encontrarás más API en los [documentos de la API de REST](/v3/). La API de Verificaciones también se encuentra disponible para su uso en [GraphQL](/v4/), pero este inicio rápido se enfoca en REST. Consulta los objetos de [Conjuntos de Verificaciones](/v4/object/checksuite/) y [Ejecución de Verificación](/v4/object/checkrun/) de GraphQL para obtener más detalles.

Utilizarás el [Lenguaje de Programación Ruby](https://www.ruby-lang.org/en/), el servicio de entrega de carga útil para el webhook de [Smee](https://smee.io/), la [biblioteca de Ruby Ocktokit.rb](http://octokit.github.io/octokit.rb/) para la API de REST de GitHub, y el [marco de trabajo web Sinatra](http://sinatrarb.com/) para crear tu aplicación de servidor de IC para la API de Verificaciones.

No necesitas ser un experto en ninguna de estas herramientas o conceptos para completar este proyecto. Esta guía te mostrará todos los pasos requeridos a detalle. Antes de que comiences a crear pruebas de IC con la API de Verificaciones, necesitarás hacer lo siguiente:

1. Clona el repositorio [Crear pruebas de IC con la API de Verificaciones](https://github.com/github-developer/creating-ci-tests-with-the-checks-api).
  ```shell
    $ git clone https://github.com/github-developer/creating-ci-tests-with-the-checks-api.git
  ```

  Dentro del directorio, encontrarás un archivo de nombre `template_server.rb` con el código de plantilla que utilizarás en este inicio rápido, y un archivo llamado `server.rb` con el código del proyecto completo.

1. Sigue los pasos en la guía de inicio rápido "[Configurar tu ambiente de desarrollo](/apps/quickstart-guides/setting-up-your-development-environment/)" para configurar y ejecutar el servidor de la app. **Nota:** en vez de [clonar el repositorio de plantilla de GitHub App](/apps/quickstart-guides/setting-up-your-development-environment/#prerequisites), utiliza el archivo `template_server.rb` en el repositorio que clonaste en el paso anterior de esta guía de inicio rápido.

  Si ya has completado una guía de inicio rápido de GitHub App anteriormente, asegúrate de registrar una GitHub App _nueva_ y levanta un canal de Smee nuevo para utilizarlo con esta guía de inicio rápido.

  Consulta la sección [solución de problemas](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting) si te encuentras con algún problema al configurar tu GitHub App de plantilla.

### Parte 1. Crear la interface de la API de Verificaciones

En esta parte, agregarás el código necesario para recibir eventos del webhook de `check_suite` y para las ejecuciones de verificación de creación y actualización. También aprenderás cómo crear ejecuciones de verificación cuando se re-solicite una verificación en GitHub. Al final de esta sección, podrás ver la ejecución de verificación que creaste en una solicitud de extracción de GitHub.

En esta sección, tu ejecución de verificación no realizará ninguna verificación de código. Agregarás esa funcionalidad en la [Parte 2: Crear la prueba de IC de Octo RuboCop](#part-2-creating-the-octo-rubocop-ci-test).

Ya deberías haber configurado el canal de Smee que reenviará las cargas útiles del webhook a tu servidor local. Tu servidor deberá estar funcionando y también estar conectado con la GitHub App que registraste e instalaste ene un repositorio de prueba. Si no has completado los pasos de "[Configurar tu ambiente de desarrollo](/apps/quickstart-guides/setting-up-your-development-environment/)", necesitarás hacerlo antes de que puedas continuar.

¡Comencemos! Estos son los pasos que completarás en la Parte 1:

1. [Actualizar los permisos de la app](#step-11-updating-app-permissions)
1. [Agregar la gestión de eventos](#step-12-adding-event-handling)
1. [Crear una ejecución de verificación](#step-13-creating-a-check-run)
1. [Actualizar una ejecución de verificación](#step-14-updating-a-check-run)

### Paso 1.1. Actualizar los permisos de la app

Cuando [registraste tu app por primera vez](#prerequisites), aceptaste los permisos predeterminados, lo que significa que tu app no tiene acceso a la mayoría de los recursos. Para este ejemplo, tu app necesitará el permiso de leer y escribir verificaciones.

Para actualizar los permisos de tu app:

1. Selecciona tu app de la [página de configuración de la app](https://github.com/settings/apps) y da clic en **Permisos & Webhooks** en la barra lateral.
1. En la sección de "Permisos", encuentra "Verificaciones"; y selecciona **Lectura & escritura** en el menú desplegable de acceso que está a un costado.
1. En la sección "Sucribirse a los eventos", selecciona **conjuntos de verificación** y **ejecución de verificación** para suscribirte a estos eventos.
{% data reusables.apps.accept_new_permissions_steps %}

¡Genial! Tu app tiene permiso para realizar las tareas que quieres que haga. Ahora puedes agregar el código para que gestione los eventos.

### Paso 1.2. Agregar la gestión de eventos

Ahora que tu app está suscrita a los eventos de **conjuntos de verificaciones** y **ejecución de verificación**, comenzará a recibir los webhooks [`check_suite`](/webhooks/event-payloads/#check_suite) y [`check_run`](/webhooks/event-payloads/#check_run). GitHub envía las cargas útiles de los webhooks como solicitudes de tipo `POST`. Ya que reenviaste las cargas útiles del webhook de Smee a `http://localhost/event_handler:3000`, tu servidor recibirá las cargas útiles de la solicitud de `POST` en la ruta `post '/event_handler'`.

Ya se incluye una ruta de `post '/event_handler'` vacía en el archivo `template_server.rb`, el cual descargaste en la sección de [prerrequisitos](#prerequisites). La ruta vacía se ve así:

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

Utiliza esta ruta para gestionar el evento `check_suite` agregando el siguiente código:

``` ruby
# Get the event type from the HTTP_X_GITHUB_EVENT header
case request.env['HTTP_X_GITHUB_EVENT']
when 'check_suite'
  # A new check_suite has been created. Create a new check run with status queued
  if @payload['action'] == 'requested' || @payload['action'] == 'rerequested'
    create_check_run
  end
end
```

Cada vento que envíe GitHub incluye un encabezado de solicitud que se llama `HTTP_X_GITHUB_EVENT`, el cual indica el tipo de evento en la solicitud de `POST`. Ahora mismo solo te interesan los eventos de tipo `check_suite`, los cuales se emiten cuando se crea un nuevo conjunto de verificaciones. Cada evento tiene un campo adicional de `action` que indica el tipo de acción que activó los eventos. Para`check_suite`, el campo `action` puede ser `requested`, `rerequested`, o `completed`.

La acción `requested` solicita una ejecución de verificación cada vez que se carga el código al repositorio, mientras que la acción `rerequested` solicita que re-ejecutes una verificación para el código que ya existe en el repositorio. Ya que ambas acciones, `requested` y `rerequested` requieren crear una ejecución de verificación, llamarás a un ayudante llamado `create_check_run`. Vamos a escribir ese método ahora.

### Paso 1.3. Crear una ejecución de verificación

Agregarás este método nuevo como un [Ayudante de Sinatra](https://github.com/sinatra/sinatra#helpers) en caso de que quieras que otras rutas lo utilicen también. Debajo de `helpers do`, agrega este método de `create_check_run`:

``` ruby
# Create a new check run with the status queued
def create_check_run
  # # At the time of writing, Octokit does not support the Checks API yet, but
  # it does provide generic HTTP methods you can use:
  # /v3/checks/runs/#create-a-check-run
  check_run = @installation_client.post(
    "repos/#{@payload['repository']['full_name']}/check-runs",
    {
      # This header allows for beta access to Checks API
      accept: 'application/vnd.github.antiope-preview+json',
      # The name of your check run.
      name: 'Octo RuboCop',
      # The payload structure differs depending on whether a check run or a check suite event occurred.
      head_sha: @payload['check_run'].nil? ? @payload['check_suite']['head_sha'] : @payload['check_run']['head_sha']
    }
  )
end
```

Este código llama a la terminal "[Crear una ejecución de verificación](/v3/checks/runs/#create-a-check-run)" utilizando el [Método HTTP de `publicación`](http://octokit.github.io/octokit.rb/Octokit/Connection.html#post-instance_method). Este método toma dos parámetros: la URL de la terminal y los parámetros de entrada del método.

Solo se requieren dos parámetros de entrada para crear una ejecución de flujo de trabajo: `name` y `head_sha`. Utilizaremos a [Rubocop](https://rubocop.readthedocs.io/en/latest/) para implementar la prueba de IC más adelante en esta guía de inicio rápido, y esto es por lo que se utiliza el nombre "Octo Rubocop" aquí, pero puedes elegir cualquier nombre que quieras para la ejecución de verificación.

Ahora mismo, solo estás proporcionando los parámetros requeridos para echar a andar la funcionalidad básica, pero actualizarás la ejecución de verificación más adelante mientras recolectes más información acerca de la ejecución de verificación. Predeterminadamente, GitHub configura el `Estado` como `queued`.

GitHub Crea una ejecución de flujo de trabajo para un SHA de confirmación específico, y es por esto que el `head_sha` es un parámetro requerido. Puedes encontrar el SHA de la confirmación en la carga útil del webhook. Aunque ahora mismo solo estás creando una ejecución de verificación para el evento `check_suite`, es bueno saber que el `head_sha` se incluye tanto en el objeto de `check_suite` como en el de `check_run` dentro de las cargas útiles del evento.

En el código anterior, estás utilizando el [operador ternario](https://ruby-doc.org/core-2.3.0/doc/syntax/control_expressions_rdoc.html#label-Ternary+if), el cual funciona como una declaración `if/else`, para verificar si la carga útil contiene un objeto `check_run`. Si lo tiene, lees el `head_sha` desde el objeto `check_run`, de lo contrario lo leerías desde el objeto de `check_suite`.

Para probar este código, reinicia el servidor desde tu terminal:

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

Ahora abre una solicitud de extracción en el repositorio en donde instalaste tu app. Tu app deberá responder creando una ejecución de verificación en tu solicitud de extracción. Da clic en la pestaña de **Verificaciones** y deberías ver algo como esto:

![Ejecución de verificación en cola](/assets/images/github-apps/github_apps_queued_check_run.png)

Si ves otras apps en la pestaña de verificaciones, significa que tienes otras apps instaladas en tu repositorio las cuales cuentan con acceso de **Lectura & escritura** en las verificaciones y que están suscritas a los eventos de **conjuntos de verificaciones** y de **ejecución de verificación**.

¡Genial! Le has dicho a GitHub que cree una ejecución de verificación. Puedes ver junto al icono amarillo que el estado de esta ejecución de verificación se configuró como `queued`. A continuación, querrás esperar a que GitHub cree la ejecución de verificación y actualice su estado.

### Paso 1.4. Actualizar una ejecución de verificación

Cuando tu método de `create_check_run` se ejecuta, éste solicita a GitHub crear una ejecución de verificación nueva. Cuando GitHub termine de crear la ejecución de verificación, recibirás un evento de webhook de `check_run` con la acción como `created`. Este evento es tu señal para comenzar a ejecutar la verificación.

Necesitas actualizar tu gestor de eventos para buscar la acción que se encuentra como `created`. Mientras actualizas el gestor de eventos, puedes agregar una condicional para la acción que se encuentra como `rerequested`. Cuando alguien re-ejecuta una sola prueba en GitHub al dar clic en el botón de "Re-ejecutar", GitHub envía a tu app el evento de ejecución de verificación que está como `rerequested`. Cuando una ejecución de verificación se pone como `rerequested`, necesitarás iniciar el proceso desde cero y crear una ejecución de verificación nueva.

Para incluir una condición para el evento de `check_run` en la ruta de `post '/event_handler'`, agrega el siguiente código debajo de `case request.env['HTTP_X_GITHUB_EVENT']`:

``` ruby
when 'check_run'
  # Check that the event is being sent to this app
  if @payload['check_run']['app']['id'].to_s === APP_IDENTIFIER
    case @payload['action']
    when 'created'
      initiate_check_run
    when 'rerequested'
      create_check_run
    end
  end
```

GitHub envía todos los eventos de las ejecuciones de verificación que se encuentran como `created` a cada app instalada en un repositorio, la cual tenga las permisiones de verificación necesarias. Esto significa que tu app recibirá las ejecuciones de verificación que creen otras apps. Una ejecución de verificación que se encuentre como `created` es un poco diferente de un conjunto de verificaciones que estén como `requested` o `rerequested` y que GitHub envía únicamente a las aplicaciones a las cuales se solicita que ejecuten una verificación. El código anterior busca la ID de aplicación de la ejecución de verificación. Esto filtra todas las ejecuciones de verificación para otras apps en el repositorio.

A continuación, escribirás el método de `initiate_check_run`, que es donde actualizarás el estado de la ejecución de verificación y donde te prepararás para lanzar tu prueba de IC.

En esta sección no vas a lanzar la prueba de IC aún, pero te mostraremos cómo actualizar el estado de la ejecución de verificación de `queued` a `pending` y después de `pending` a `completed` para ver el flujo general de una ejecución de verificación. En la "[Parte 2: Crear la prueba de IC de Octo RuboCop](#part-2-creating-the-octo-rubocop-ci-test)", agregarás el código responsable de llevar a cabo la prueba de IC.

Vamos a crear el método `initiate_check_run` y a actualizar el estado de la ejecución de verificación. Agrega el siguiente código a la sección de ayudantes:

``` ruby
# Start the CI process
def initiate_check_run
  # Once the check run is created, you'll update the status of the check run
  # to 'in_progress' and run the CI process. When the CI finishes, you'll
  # update the check run status to 'completed' and add the CI results.

  # Octokit doesn't yet support the Checks API, but it does provide generic
  # HTTP methods you can use:
  # /v3/checks/runs/#update-a-check-run
  updated_check_run = @installation_client.patch(
    "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
    {
      accept: 'application/vnd.github.antiope-preview+json', # This header is necessary for beta access to Checks API
      name: 'Octo RuboCop',
      status: 'in_progress',
      started_at: Time.now.utc.iso8601
    }
  )

  # ***** RUN A CI TEST *****

  # Mark the check run as complete!
  updated_check_run = @installation_client.patch(
    "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
    {
      # This header is necessary for beta access to Checks API
      accept: 'application/vnd.github.antiope-preview+json',
      name: 'Octo RuboCop',
      status: 'completed',
      conclusion: 'success',
      completed_at: Time.now.utc.iso8601
    }
  )
end
```

El código anterior llama a la terminal "[Actualizar una ejecución de verificación](/v3/checks/runs/#update-a-check-run)" de la API utilizando el [Método HTTP`patch`](http://octokit.github.io/octokit.rb/Octokit/Connection.html#patch-instance_method) para actualizar la ejecución de verificación que ya creaste.

Te explicamos lo que hace este código. Primero, actualiza el estado de la ejecución de verificación a `in_progress` y configura la hora `started_at` de acuerdo con la hora actual. En la [Parte 2](#part-2-creating-the-octo-rubocop-ci-test) de esta guía de inicio rápido, agregarás código que lanza una prueba de IC real bajo `***** RUN A CI TEST *****`. Por el momento, dejarás esta sección como un marcador de posición para que el código subsecuente simplemente estimule el éxito del proceso de IC y que todas las pruebas pasen. Por último, el código actualiza el estado de la ejecución de verificación nuevamente como `completed`.

Notarás en los documentos de "[Actualizar una ejecución de verificación](/v3/checks/runs/#update-a-check-run)" que, cuando proporcionas un estado de `completed`, se requieren los parámetros de `conclusion` y `completed_at`. La `conclusion` resume el resultado de una ejecución de verificación, la cual se puede mostrar como `success`, `failure`, `neutral`, `cancelled`, `timed_out`, o `action_required`. Vas a configurar la conclusión como `success`, la hora de `completed_at` según la hora actual, y el estado como `completed`.

También puedes proporcionar más detalles sobre lo que está haciendo tu verificación, pero eso lo abordaremos en la siguiente sección. Vamos a probar este código nuevamente volviendo a ejecutar `template_server.rb`:

```shell
$ ruby template_server.rb
```

Diríjete a tu solicitud de extracción abierta y da clic en la pestaña **Verificaciones**. Da clic en el botón "Re-ejecutar todo" en la esquina superior derecha. Deberías ver que la ejecución de verificación cambia de `pending` a `in_progress` y termina en `success`:

![Ejecución de verificación completada](/assets/images/github-apps/github_apps_complete_check_run.png)

### Parte 2. Crear la prueba de IC de Octo RuboCop

[RuboCop](https://rubocop.readthedocs.io/en/latest/) es un formateador y limpiador de código para Ruby. Revisa el código de Ruby para garantizar que se apegue a la "[Guía de Estilo de Ruby](https://github.com/rubocop-hq/ruby-style-guide)". RuboCop tiene tres funciones prncipales:

* Limpiar para revisar el estilo del código
* Formatear el código
* Reemplazar las capacidades de limpieza nativas de Ruby utilizando `ruby -w`

Ahora que tienes la interface que se ha creado para recibir eventos de la API de verificaciones y para crear ejecuciones de verificción, puedes crear una ejecución de verificación que implemente una prueba de IC.

Tu app ejecutará RuboCop en el servidor CI y creará ejecuciones de verificación (en este caso, pruebas de IC) que reporten los resultados que RuboCop reporta a GitHub.

La API de Verificaciones te permite reportar detalles enriquecidos acerca de cada ejecución de verificación, incluyendo los estados, imágenes, resúmenes, y las acciones solicitadas.

Las anotaciones son información acerca de líneas de código específicas en un repositorio. Una anotación te permite identificar y visualizar las partes exactas del código para las cuales quieres mostrar información adicional. Esa puede ser cualquier información: por ejemplo, un comentario, un error, o una advertencia. Esta guía rápida utiliza anotaciones para visualizar los errores de RuboCop.

Para tener una ventaja sobre las acciones solicitadas, los desarrolladores de apps pueden crear botones en la pestaña de **Verificaciones** de las solicitudes de extracción. Cuando alguien da clic en alguno de estos botones, dicho clic envía un evento de `requested_action` `check_run` a la GitHub App. El desarrollador de la app puede configurar íntegramente la acción que ésta toma. Esta guía de inicio rápido te mostrará cómo agregar un botón que permitirá a los usuarios solicitar que RuboCop corrija los errores que encuentre. RuboCop es compatible con la corrección automática de errores utilizando una opción en la línea de comandos, y configurarás la `requested_action` para aprovechar esta opción.

¡Comencemos! Estos son los pasos que tendrás que completar en esta sección:

1. [Agregar un archivo de Ruby](#step-21-adding-a-ruby-file)
1. [Clonar el repositorio](#step-22-cloning-the-repository)
1. [Ejecutar RuboCop](#step-23-running-rubocop)
1. [Recolectar los errores de RuboCop](#step-24-collecting-rubocop-errors)
1. [Actualizar la ejecución de verificación con los resultados de la prueba de IC](#step-25-updating-the-check-run-with-ci-test-results)
1. [Corregir automáticamente los errores de RuboCop](#step-26-automatically-fixing-rubocop-errors)
1. [Tips de seguridad](#step-27-security-tips)

### Paso 2.1. Agregar un archivo de Ruby

Puedes pasar archivos específicos o directorios completos para que los revise RuboCop. En esta guía de inicio rápido, ejecutarás a RuboCop en un directorio completo. Ya que RuboCop únicamente revisa el código de Ruby, querrás que por lo menos un archivo de Ruby en tu repositorio contenga errores. El archivo de ejemplo que te proporcionamos a continuación contiene unos cuantos errores. Agrega este archivo de Ruby de ejemplo al repositorio en donde se instaló tu app (asegúrate de nombrar este archivo con una extensión `.rb`, como `myfile.rb`, por ejemplo.):

```ruby
# The Octocat class tells you about different breeds of Octocat
class Octocat
  def initialize(name, *breeds)
    # Instance variables
    @name = name
    @breeds = breeds
  end

  def display
    breed = @breeds.join("-")

    puts "I am of #{breed} breed, and my name is #{@name}."
  end
end

m = Octocat.new("Mona", "cat", "octopus")
m.display
```

### Paso 2.2. Clonar el repositorio

RuboCop se encuentra disponible como una utilidad de línea de comandos. Eso significa que tu GitHub App necesitará clonar una copia local del repositorio en el servidor de IC para que RuboCop analice los archivos. Para ejecutar las operaciones de Git en tu app de Ruby, puedes usar la gema [ruby-git](https://github.com/ruby-git/ruby-git).

El `Gemfile` en el repositorio `building-a-checks-api-ci-server` ya incluye la gema ruby-git, y lo instalaste cuando ejecutaste `bundle install` en los [pasos de pre-requisitos](#prerequisites). Para utilizar la gema, agrega este código a la parte superior de tu archivo `template_server.rb`:

``` ruby
require 'git'
```

Tu app necesita el permiso de lectura para "contenido de repositorio" si quieres que clone un repositorio. Más adelante en esta guía de inicio rápido, necesitarás cargar contenido a GitHub, lo cual requiere el permiso de escritura. Continúa y configura el permiso de "contenido de repositorio" de tu app como **Lectura & escritura** ahora mismo para que no tengas que actualizarlo nuevamente más adelante. Para actualizar los permisos de tu app:

1. Selecciona tu app de la [página de configuración de la app](https://github.com/settings/apps) y da clic en **Permisos & Webhooks** en la barra lateral.
1. En la sección de "Permisos", encuentra el "contenido del repositorio", y selecciona **Lectura & escritura** en el menú desplegable de "Acceso" que está a un costado.
{% data reusables.apps.accept_new_permissions_steps %}

Para clonar un repositorio utilizando los permisos de tu GitHub App, puedes utilizar el token de instalación de la misma (`x-access-token:<token>`), el cual se muestra en el siguiente ejemplo:

```shell
git clone https://x-access-token:<token>@github.com/<owner>/<repo>.git
```

El código anterior clona un repositorio a través de HTTP. Éste necesita el nombre íntegro del repositorio, lo cual incluye al propietario del mismo (usuario u organización) y el nombre de éste. Por ejemplo, el repositorio [octocat Hello-World](https://github.com/octocat/Hello-World) tiene un nombre completo que se ve así: `octocat/hello-world`.

Después de que tu app clone el repositorio, necesita extraer los últimos cambios al código y verificar una ref específica de Git. El código que hará todo esto encajará perfectamente en su propio método. Para llevar a cabo estas operaciones, el método necesita el nombre y nombre completo del repositorio y la ref de salida. La ref puede ser el SHA de una confirmación, una rama, o una etiqueta. Agrega el siguiente método a la sección del método del ayudante en `template_server.rb`:

``` ruby
# Clones the repository to the current working directory, updates the
# contents using Git pull, and checks out the ref.
#
# full_repo_name  - The owner and repo. Ex: octocat/hello-world
# repository      - The repository name
# ref             - The branch, commit SHA, or tag to check out
def clone_repository(full_repo_name, repository, ref)
  @git = Git.clone("https://x-access-token:#{@installation_token.to_s}@github.com/#{full_repo_name}.git", repository)
  pwd = Dir.getwd()
  Dir.chdir(repository)
  @git.pull
  @git.checkout(ref)
  Dir.chdir(pwd)
end
```

El código anterior utiliza la gema `ruby-git` para clonar el repositorio utilizando el token de instalación de la app. Este código clona el código en el mismo directorio en el que esté `template_server.rb`. Para ejecutar los comandos de Git en el repositorio, el código necesita cambiar el directorio del repositorio. Antes de cambiar de directorio, el código almacena el directorio de trabajo actual en una variable (`pwd`) para recordar a dónde regresar antes de salir del método de `clone_repository`.

Desde el directorio del repositorio, este código obtiene y fusiona los últimos cambios (`@git.pull`), revisa la ref (`@git.checkout(ref)`), y luego cambia el directorio de vuelta al directorio de trabajo original (`pwd`).

Ahora tienes un método que clona un repositorio y revisa una ref. A continuación, necesitarás agregar código para obtener los parámetros de entrada requeridos y llamar al nuevo método de `clone_repository`. Agrega el siguiente código debajo del comentario `***** RUN A CI TEST *****` en tu método `initiate_check_run` del ayudante:

``` ruby
# ***** RUN A CI TEST *****
full_repo_name = @payload['repository']['full_name']
repository     = @payload['repository']['name']
head_sha       = @payload['check_run']['head_sha']

clone_repository(full_repo_name, repository, head_sha)
```

El código anterior obtiene el nombre completo del repositorio y el SHA de encabezado de la confirmación desde la carga útil del webhook de `check_run`.

### Paso 2.3. Ejecutar RuboCop

¡Genial! Estás clonando el repositorio y creando ejecuciones de verificación al utilizar tu servidor de IC. Ahora te meterás en los detalles más minusciosos del [Limpiador de RuboCop](https://rubocop.readthedocs.io/en/latest/basic_usage/#rubocop-as-a-code-style-checker) y de las [Anotaciones de la API de Verificaciones](/v3/checks/runs/#create-a-check-run).

El siguiente código ejecuta RuboCop y guarda los errores de estilo en el código con un formato JSON. Agrega el código siguiente debajo de la llamada a `clone_repository` que agregaste en el [paso anterior](#step-22-cloning-the-repository) y sobre el código que actualiza la ejecución de verificación para completarse.

``` ruby
# Run RuboCop on all files in the repository
@report = `rubocop '#{repository}' --format json`
logger.debug @report
`rm -rf #{repository}`
@output = JSON.parse @report
```

Este código utiliza RuboCop en todos los archivos dentro del directorio del repositorio. La opción `--format json` es una manera útil de guardar una copia de los resultados que se han limpiado en un formato que pueda analizar la máquina. Consulta los [Documentos de RuboCop](https://rubocop.readthedocs.io/en/latest/formatters/#json-formatter) para obtener más detalles y un ejemplo del formato en JSON.

Ya que este código almacena los resultados de RuboCop en una variable de `@report`, puede eliminar la salida del repositorio con seguridad. Este código también analiza el JSON para que puedas acceder fácilmente a las claves y valores en tu GitHub App utilizando la variable `@output`.

{% note %}

**Nota:** El comando que se utiliza para eliminar el repositorio (`rm -rf`) no puede deshacerse. Consulta el [Paso 2.7. Tips de seguridad](#step-27-security-tips) para aprender cómo verificar los webhooks para que no inyecten comandos maliciosos que puedan utilizarse para eliminar un directorio diferente de aquél que tu app busca eliminar. Por ejemplo, si un mal actor envía un webhook con el nombre de repositorio `./`, tu app eliminaría el directorio raíz. 😱 si por alguna razón _no_ estás utilizando el método `verify_webhook_signature` (el cual se incluye en `template_server.rb`) para validar al emisor del webhook, asegúrate de revisar que el nombre del repositorio es válido.

{% endnote %}

Puedes probar que este código funcione y ver los errores que reporta RuboCop en la salida de depuración de tu servidor. Inicia el servidor `template_server.rb` nuevamente y crea una solicitud de extracción nueva en el repositorio en donde estás probando tu app:

```shell
$ ruby template_server.rb
```

Deberías ver los errores de limpieza en la salida de depuración, aunque no se imprimen con formato. Puedes utilizar una herramienta web como [JSON formatter](https://jsonformatter.org/) para dar formato a tu salida de JSON como en esta salida de errores de limpieza formateada que tenemos de ejemplo:

```json
{
  "metadata": {
    "rubocop_version": "0.60.0",
    "ruby_engine": "ruby",
    "ruby_version": "2.3.7",
    "ruby_patchlevel": "456",
    "ruby_platform": "universal.x86_64-darwin18"
  },
  "files": [
    {
      "path": "Octocat-breeds/octocat.rb",
      "offenses": [
        {
          "severity": "convention",
          "message": "Style/StringLiterals: Prefer single-quoted strings when you don't need string interpolation or special symbols.",
          "cop_name": "Style/StringLiterals",
          "corrected": false,
          "location": {
            "start_line": 17,
            "start_column": 17,
            "last_line": 17,
            "last_column": 22,
            "length": 6,
            "line": 17,
            "column": 17
          }
        },
        {
          "severity": "convention",
          "message": "Style/StringLiterals: Prefer single-quoted strings when you don't need string interpolation or special symbols.",
          "cop_name": "Style/StringLiterals",
          "corrected": false,
          "location": {
            "start_line": 17,
            "start_column": 25,
            "last_line": 17,
            "last_column": 29,
            "length": 5,
            "line": 17,
            "column": 25
          }
        }
      ]
    }
  ],
  "summary": {
    "offense_count": 2,
    "target_file_count": 1,
    "inspected_file_count": 1
  }
}
```

### Paso 2.4. Recolectar los errores de RuboCop

La variable `@output` contiene los resultados analizados de JSON para el reporte de RuboCop. Tal como se muestra anteriormente, los resultados contienen una sección de `summary` que tu código puede ut utilizar rápidamente para determinar si hay algún error. El siguiente código configurará la ejecución de verificación en `success` cuando no haya errores reportados. RuboCop reporta errores para cada archivo en la matriz de `files`, así que, si hay errores, necesitarás extraer algunos datos del objeto del archivo.

La API de Verificaciones te permite crear anotaciones para líneas de código específicas. Cuando creas o actualizas una ejecución de verificación, puedes agregar anotaciones. En esta guía de inicio rápido estás [actualizando la ejecución de verificación](/v3/checks/runs/#update-a-check-run) con anotaciones.

La API de Verificaciones limita la cantidad de anotaciones a un máximo de 50 por solilcitud de API. Para crear más de 50 anotaciones, tienes que hacer solicitudes múltiples a la terminal [Actualizar una ejecución de verificación](/v3/checks/runs/#update-a-check-run). Por ejemplo, para crear 105 anotaciones necesitarías llamar a la terminal [Actualizar una ejecución de verificación](/v3/checks/runs/#update-a-check-run) tres veces. Las primeras dos contarían por 50 anotaciones cada una, y la tercera incluiría las cinco restantes. Cada vez que actualices la ejecución de verificación, se adjuntan las anotaciones a la lista de anotaciones existente para la ejecución de verificación.

Una ejecución de verificación espera encontrar las anotaciones en una matriz de objetos. Cada objeto de anotación debe incluir `path`, `start_line`, `end_line`, `annotation_level`, y `message`. RuboCop también proporciona la `start_column` y `end_column`, para que puedas incluir estos parámetros opcionales en la anotación. Las anotaciones únicamente son compatibles con `start_column` y `end_column` en la misma línea. Consulta la documentación sobre la referencia del [objeto `annotations`](/v3/checks/runs/#annotations-object-1) para obtener más detalles.

Extraerás la información requerida de RuboCop que necesites para crear cada anotación. Adjunta el siguiente código a aquél que agregaste en la [sección anterior](#step-23-running-rubocop):

``` ruby
annotations = []
# You can create a maximum of 50 annotations per request to the Checks
# API. To add more than 50 annotations, use the "Update a check run" API
# endpoint. This example code limits the number of annotations to 50.
# See /v3/checks/runs/#update-a-check-run
# for details.
max_annotations = 50

# RuboCop reports the number of errors found in "offense_count"
if @output['summary']['offense_count'] == 0
  conclusion = 'success'
else
  conclusion = 'neutral'
  @output['files'].each do |file|

    # Only parse offenses for files in this app's repository
    file_path = file['path'].gsub(/#{repository}\//,'')
    annotation_level = 'notice'

    # Parse each offense to get details and location
    file['offenses'].each do |offense|
      # Limit the number of annotations to 50
      next if max_annotations == 0
      max_annotations -= 1

      start_line   = offense['location']['start_line']
      end_line     = offense['location']['last_line']
      start_column = offense['location']['start_column']
      end_column   = offense['location']['last_column']
      message      = offense['message']

      # Create a new annotation for each error
      annotation = {
        path: file_path,
        start_line: start_line,
        end_line: end_line,
        start_column: start_column,
        end_column: end_column,
        annotation_level: annotation_level,
        message: message
      }
      # Annotations only support start and end columns on the same line
      if start_line == end_line
        annotation.merge({start_column: start_column, end_column: end_column})
      end

      annotations.push(annotation)
    end
  end
end
```

Este código limita la cantidad total de anotaciones a 50. Pero puedes modificarlo para actualizar la ejecución de verificación para cada lote de 50 anotaciones. El código anterior incluye la variable `max_annotations` que configura el límite a 50, el cual se utiliza en el bucle que itera a través de las faltas.

Cuando la `offense_count` es de cero, la prueba de IC se muestra como `success`. Si hay errores, este código configura la conclusión como `neutral` para prevenir los errores estrictamente implementados desde los limpiadores de código. Pero puedes cambiar la conclusión a `failure` si quisieras garantizar que el conjunto de verificaciones falle cuando existan errores de limpieza.

Cuando se reportan los errores, el código anterior itera a través de la matriz de `files` en el reporte de RuboCop. Para cada archivo, extrae la ruta del mismo y configura el nivel de anotcación en `notice`. Puedes incluso ir más allá y especificar ls niveles de advertencia para cada tipo de [RuboCop Cop](https://rubocop.readthedocs.io/en/latest/cops/), pero para simplificar todo aún más en esta guía rápida, todos los errores se configurarán en un nivel de `notice`.

Este código también itera a través de cada error en la matriz de `offenses` y recolecta la ubicación de la falta y el mensaje de error. Después de extraer la información requerida, el código crea una anotación para cada error y lo almacena en la matriz de `annotations`. Ya que las anotaciones solo son compatibles con las columnas de inicio y fin en la misma línea, `start_column` y `end_column` se agregarán únicamente al objeto `annotation` si los valores iniciales y finales de la línea son los mismos.

Este código aún no crea una anotación para la ejecución de verificación. Agregarás dicho código en la siguiente sección.

### Paso 2.5. Actualizar la ejecución de verificación con los resultados de la prueba de IC

Cada ejecución de verificación de GitHub contiene un objeto de `output` que incluye un `title`, `summary`, `text`, `annotations`, y `images`. El `summary` y `title` son los únicos parámetros requeridos para la `output`, pero no ofrecen muchos detalles por sí mismos, así que esta guía de inicio rápido agrega `text` y `annotations` también. Este código no agrega una imagen, pero ¡no dudes en agregarla si así lo deseas!

Para el `summary`, este ejemplo utiliza la información de resumen de RuboCop y agrega algunas líneas nuevas (`\n`) para formatear la salida. Puedes personalizar lo que agregas en el parámetro de `text`, pero este ejemplo configura el parámetro `text` en la versión de RuboCop. Para configurar tanto `summary` como `text`, adjunta este código a aquél que agregaste en la [sección anterior](#step-24-collecting-rubocop-errors):

``` ruby
# Updated check run summary and text parameters
summary = "Octo RuboCop summary\n-Offense count: #{@output['summary']['offense_count']}\n-File count: #{@output['summary']['target_file_count']}\n-Target file count: #{@output['summary']['inspected_file_count']}"
text = "Octo RuboCop version: #{@output['metadata']['rubocop_version']}"
```

Ahora tienes toda la información que necesitas para actualizar tu ejecución de verificación. En la [primera parte de esta guía de inicio rápido](#step-14-updating-a-check-run), agregaste este código para configurar el estado de la ejecución de verificación como `success`:

``` ruby
# Mark the check run as complete!
updated_check_run = @installation_client.patch(
  "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
  {
    accept: 'application/vnd.github.antiope-preview+json', # This header is necessary for beta access to Checks API
    name: 'Octo RuboCop',
    status: 'completed',
    conclusion: 'success',
    completed_at: Time.now.utc.iso8601
  }
)
```

Necesitarás actualizar este código para utilizar la variable `conclusion` que configures con base en los resultados de RuboCop (ya sea como `success` o como `neutral`). Puedes actualizar el código con lo siguiente:

``` ruby
# Mark the check run as complete! And if there are warnings, share them.
updated_check_run = @installation_client.patch(
  "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
  {
    accept: 'application/vnd.github.antiope-preview+json',
    name: 'Octo RuboCop',
    status: 'completed',
    conclusion: conclusion,
    completed_at: Time.now.utc.iso8601,
    output: {
      title: 'Octo RuboCop',
      summary: summary,
      text: text,
      annotations: annotations
    },
    actions: [{
      label: 'Fix this',
      description: 'Automatically fix all linter notices.',
      identifier: 'fix_rubocop_notices'
    }]
  }
)
```

Ahora que estás configurando una conclusión con base en el estado de la prueba de IC y has agregado la salida de los resultados de RuboCop, !has creado una prueba de IC! Felicidades. 🙌

El código anterior también agrega una característica a tu servidor de IC, la cual se llama [acciones solicitadas](https://developer.github.com/changes/2018-05-23-request-actions-on-checks/) a través del objeto `actions`. {% if currentVersion == "free-pro-team@latest" %}(Nota que esto no tiene relación con [GitHub Actions](/actions).) {% endif %}Las acciones que se solicitan agregan un botón en la pestaña **Verificaciones** en GitHub que permite a las personas solicitar que la ejecución de verificación tome acciones adicionales. Tu app puede configurar la acción adicional totalmente. Por ejemplo, ya que RuboCop tiene una característica para corregir automáticamente los errores que encuentre en el código de Ruby, tu servidor de IC puede utilizar un botón de acciones solicitadas para ayudar a que las personas soliciten correcciónes de errores automáticas. Cuando alguien da clic en el botón, la app recibe el evento de `check_run` con una acción de `requested_action`. Cada acción solicitada tiene un `identifier` que la app utiliza para determinar en qué botón se dio clic.

El código anterior aún no hace que RuboCop corrija los errores automáticamente. Eso lo agregarás en la siguiente sección. Pero primero, observa la prueba de IC que acabas de crear iniciando nuevamente el servidor `template_server.rb` y creando una nueva solicitud de extracción:

```shell
$ ruby template_server.rb
```

Las anotaciones se mostrarán en la pestaña de **Verificaciones**.

![Anotaciones de la ejecución de verificación en la pestaña de verificaciones](/assets/images/github-apps/github_apps_checks_annotations.png)

Nota el botón de "Arreglar esto" que creaste al agregar la acción solicitada.

![Botón de acción solicitada para la ejecución de verificación](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

Si las anotaciones se relacionan con un archivo que ya se incluya en la solicitud de extracción, estas también se mostrarán en la pestaña de **Archivos cambiados**.

![Anotaciones de la ejecución de verificación en la pestaña de archivos cambiados](/assets/images/github-apps/github_apps_checks_annotation_diff.png)

### Paso 2.6. Corregir automáticamente los errores de RuboCop

Si has llegado hasta aquí, !excelente! 👏 Ya creaste una prueba de IC. En esta sección vas a agregar una característica más que utiliza a RuboCop para corregir automáticamente los errores que encuentre. Ya agregaste el botón de "Corregir esto" en la [sección anterior](#step-25-updating-the-check-run-with-ci-test-results). Ahora agregarás el código para gestionar el evento de ejecución de verificación `requested_action` que se activa cuando alguien da clic en dicho botón.

La herramienta de RuboCop [ofrece](https://rubocop.readthedocs.io/en/latest/basic_usage/#auto-correcting-offenses) la opción de línea de comandos `--auto-correct` para corregir automáticamente los errores que encuentre. Cuado utilizas la característica de `--auto-correct`, se aplican las actualizaciones en los archivos locales del servidor. Necesitarás cargar los cambios a GitHub después de que RuboCop haga su magia.

Para cargar un repositorio, tu app debe tener permisos de escritura para "contenido de repositorio". Estos permisos los configuraste en el [Paso 2.2. Clonar el repositorio](#step-22-cloning-the-repository) como **Lectura & escritura**, así que estás listo.

Para confirmar los archivos, Git debe saber qué [nombre de usuario](/articles/setting-your-username-in-git/) y [correo electrónico](/articles/setting-your-commit-email-address-in-git/) asociará con la confirmación. Agrega dos variables de ambiente adicionales en tu archivo `.env` para almacenar las configuraciones de nombre(`GITHUB_APP_USER_NAME`) y de correo electrónico (`GITHUB_APP_USER_EMAIL`). Tu nombre puede ser aquél de tu app y la dirección de correo electrónico puede ser cualquiera para este ejemplo. Por ejemplo:

```
GITHUB_APP_USER_NAME=Octoapp
GITHUB_APP_USER_EMAIL=octoapp@octo-org.com
```

Ya que hayas actualizado tu archivo `.env` con el nombre y correo electrónico del autor y del confirmante, estarás listo para agregar código para que lea las variables de ambiente y configur los ajustes de Git. Pronto agregarás este código.

Cuando alguien da clic en el botón "Arreglar esto", tu app recibe el [webhook de ejecución de verificación](/webhooks/event-payloads/#check_run) con el tipo de acción `requested_action`.

En el [Paso 1.4. Actualizar una ejecución de verificación](#step-14-updating-a-check-run) actualizaste tu `event_handler` para que gestionara la búsqueda de acciones en el evento `check_run`. Ya tienes una declaración de caso para gestionar los tipos de acción `created` y `rerequested`.

``` ruby
when 'check_run'
  # Check that the event is being sent to this app
  if @payload['check_run']['app']['id'].to_s === APP_IDENTIFIER
    case @payload['action']
    when 'created'
      initiate_check_run
    when 'rerequested'
      create_check_run
  end
end
```

Agrega otra declaración de `when` después del caso `rerequested` para gestionar el evento `rerequested_action`:

``` ruby
when 'requested_action'
  take_requested_action
```

Este código llamará aun método nuevo que gestionará todos los eventos `requested_action` para tu app. Agrega el siguiente método a la sección de métodos del ayudante para tu código:

``` ruby
# Handles the check run `requested_action` event
# See /webhooks/event-payloads/#check_run
def take_requested_action
  full_repo_name = @payload['repository']['full_name']
  repository     = @payload['repository']['name']
  head_branch    = @payload['check_run']['check_suite']['head_branch']

  if (@payload['requested_action']['identifier'] == 'fix_rubocop_notices')
    clone_repository(full_repo_name, repository, head_branch)

    # Sets your commit username and email address
    @git.config('user.name', ENV['GITHUB_APP_USER_NAME'])
    @git.config('user.email', ENV['GITHUB_APP_USER_EMAIL'])

    # Automatically correct RuboCop style errors
    @report = `rubocop '#{repository}/*' --format json --auto-correct`

    pwd = Dir.getwd()
    Dir.chdir(repository)
    begin
      @git.commit_all('Automatically fix Octo RuboCop notices.')
      @git.push("https://x-access-token:#{@installation_token.to_s}@github.com/#{full_repo_name}.git", head_branch)
    rescue
      # Nothing to commit!
      puts 'Nothing to commit'
    end
    Dir.chdir(pwd)
    `rm -rf '#{repository}'`
  end
end
```

El código anterior clona un repositorio tal como aquél que agregaste en el [Paso 2.2. Clonar el repositorio](#step-22-cloning-the-repository). Una declaración de tipo `if` revisará que el identificación de la acción solicitada empate con el identificador del botón de RuboCop (`fix_rubocop_notices`). Cuando empaten, el código clonará el repositorio, configurará el correo electrónico y nombre de usuario de Git, y ejecutará RuboCop con la opción `--auto-correct`. La opción `--auto-correct` aplica los cambios a los archivos locales del servidor de IC automáticamente.

Los archivos se cambian de manera local, pero aún necesitarás cargarlos a GitHub. Utilizarás la gema útil `ruby-git` nuevamente para confirmar todos los archivos. Git tiene un comando único que organiza todos los archivos que se han modificado o borrado y los confirma: `git commit -a`. Para hacerlo lo mismo utilizando `ruby-git`, el código anterior utiliza el método `commit_all`. Después, el código carga los archivos confirmados a GitHub utilizando el token de instalación y utilizando el mismo método de autenticación que el comando `clone` de Git. Por último, elimina el directorio del repositorio para garantizar que el directorio de trabajo está preparado para el siguiente evento.

¡Listo! El código que escribiste ahora completa tu servidor de IC para la API de Verificaciones. 💪 Reinicia nuevamente tu servidor de `template_server.rb` y crea una solicitud de extracción nueva:

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

Esta vez, da clic en el botón "Arreglar esto" para corregir automáticamente los errores que RuboCop encontró desde la pestaña de **Verificaciones**.

En la pestaña de **Confirmaciones** encontrarás una confirmación nueva con el nombre de usuario que configuraste en los ajustes de Git. Puede que necesites actualizar tu buscador para ver esto.

![Confirmación nueva para corregir los avisos de Octo RuboCop automáticamente](/assets/images/github-apps/github_apps_new_requested_action_commit.png)

Ya que se cargó una confirmación nueva al repositorio, verás un conjunto de verificaciones nuevo para Octo RuboCop en la pestaña de **Verificaciones**. Pero esta vez no habrá errores, ya que RuboCop los arregló todos. 🎉

![Sin errores en los conjuntos de verificaciones o en la ejecución de verificación](/assets/images/github-apps/github_apps_checks_api_success.png)

Puedes encontrar todo el código de la app que acabas de crear en el archivo `server.rb` dentro del repositorio [Crear pruebas de IC con la API de Verificaciones](https://github.com/github-developer/creating-ci-tests-with-the-checks-api).

### Paso 2.7. Tips de seguridad

El código de la GitHub App de plantilla ya tiene un método para verificar las cargas útiles de webhook entrantes para garantizar que vengan de una fuente confiable. Si no estás validando las cargas útiles de los webhooks, necesitarás garantizar que, cuando los nombres de repositorio se incluyan en éstas, el webhook no contenga comandos arbitrarios que puedan usarse con malas intenciones. El siguiente código valida que el nombre del repositorio solo contenga caracteres alfabeticos latinos, guiones y guiones bajos. Para proporcionarte un ejemplo completo, el código integral de `server.rb` que encuentras disponible en el [repositorio acompañante](https://github.com/github-developer/creating-ci-tests-with-the-checks-api) para esta guía de inicio rápido incluye tanto el método para validar las cargas útiles de webhooks entrantes como esta verificación que revisa el nombre del repositorio.

``` ruby
# This quickstart example uses the repository name in the webhook with
# command-line utilities. For security reasons, you should validate the
# repository name to ensure that a bad actor isn't attempting to execute
# arbitrary commands or inject false repository names. If a repository name
# is provided in the webhook, validate that it consists only of latin
# alphabetic characters, `-`, and `_`.
unless @payload['repository'].nil?
  halt 400 if (@payload['repository']['name'] =~ /[0-9A-Za-z\-\_]+/).nil?
end
```

### Solución de problemas

Aquí te mostramos algunos problemas comunes y algunas soluciones sugeridas. Si te encuentras con cualquier otro problema, puedes pedir ayuda o consejo en el {% data variables.product.prodname_support_forum_with_url %}.

* **P:** Mi app no está cargando código a GitHub. !No veo las correcciones que RuboCop hace automáticamente!

    **R:** Asegúrate de que tienes permisos de **Lectura & escritura** para "Contenido de repositorio", y de que estás clonando el repositorio con tu token de instalación. Consulta el [Paso 2.2. Clonar el repositorio](#step-22-cloning-the-repository) para encontrar más detalles.

* **P:** Veo un error en la salida de depuración `template_server.rb` relacionada con el clonado de mi repositorio.

    **R:** Si ves el siguiente error, no has borrado la salida del repositorio en uno o ambos de los métodos de `initiate_check_run` o `take_requested_action`:

    ```shell
    2018-11-26 16:55:13 - Git::GitExecuteError - git  clone '--' 'https://x-access-token:v1.9b2080277016f797074c4debd350745f4257f8dd@github.com/codertocat/octocat-breeds.git' 'Octocat-breeds'  2>&1:fatal: destination path 'Octocat-breeds' already exists and is not an empty directory.:
    ```

    Compara tu código con el archivo `server.rb` para garantizar que tienes el mismo código en tus métodos de `initiate_check_run` y de `take_requested_action`.

* **P:** Las ejecuciones de verificación no se están mostrando en la pestaña de "Verificaciones" en GitHub.

    **R:** Reinicia Smee y vuelve a ejecutar tu servidor de `template_server.rb`.

* **P:** No veo el botón de "Re-ejecutar todo" en la pestaña de "Verificaciones" de GitHub.

    **R:** Reinicia Smee y vuelve a ejecutar tu servidor de `template_server.rb`.

### Conclusión

Después de seguir esta guía, ¡aprendiste los puntos básicos de utilizar la API de Verificaciones para crear un servidor de IC! Para revisar todo, debes:

* Configuraste tu servidor para recibir eventos de la API de Verificaciones y creaste ejecuciones de verificación.
* Utilizaste RuboCop para verificar el código en los repositorios y creaste anotaciones para los errores.
* Iplementaste una accion solicitada que corrijió automáticamente los errores de limpieza.

### Pasos siguientes

Aquí tienes algunas ideas para lo que puedes hacer después:

* Actualmente, el botón "Arreglar esto" siempre se muestra. Actualiza el código que escribiste para que muestre el botón de "Arreglar esto" únicamente cuando RuboCop encuentre errores.
* Si prefieres que RuboCop no confirme archivos directamente en la rama principal, puedes actualizar el código a [crear una solicitud de extracción](/v3/pulls/#create-a-pull-request) con una rama nueva basada en la rama principal.
