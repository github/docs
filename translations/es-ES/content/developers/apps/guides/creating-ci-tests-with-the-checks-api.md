---
title: Crear pruebas de IC con la API de Verificaciones
intro: 'Crea un servidor de integración continua para ejecutar pruebas utilizando una {% data variables.product.prodname_github_app %} y la API de Verificaciones.'
redirect_from:
  - /apps/quickstart-guides/creating-ci-tests-with-the-checks-api
  - /developers/apps/creating-ci-tests-with-the-checks-api
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: CI tests using Checks API
ms.openlocfilehash: 0459714ae9ffb8094c70a714a60a66a19964424f
ms.sourcegitcommit: 06d16bf9a5c7f3e7107f4dcd4d06edae5971638b
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179681'
---
## Introducción

Esta guía presenta las [aplicaciones de GitHub](/apps/) y la [API de comprobaciones](/rest/reference/checks), las cuales usará para crear un servidor de integración continua (CI) que ejecute pruebas.

La IC es una práctica de software que requiere código confirmado frecuente en un repositorio compartido. El código de confirmación generar errores de manera temprana frecuentemente, así como reduce la cantidad de código que necesita un desarrollador para hacer depuraciones cuando encuentra la fuente de un error. Las actualizaciones frecuentes de código facilitan también la fusión de cambios de diferentes miembros de un equipo de desarrollo de software. Esto es excelente para los desarrolladores, que pueden dedicar más tiempo a escribir el código y menos tiempo a depurar errores o resolver conflictos de fusión. 🙌

Un servidor de IC hospeda código que ejecuta pruebas de IC, tal como los limpíadores de código (que revisan el formato del estilo), revisiones de seguridad, cobertura de código, y otras verificaciones contra las confirmaciones de código nuevas que hay en un repositorio. Los servidores de IC incluso pueden crear y desplegar código en los servidores de pruebas y en los productivos. Para ver algunos ejemplos de los tipos de pruebas de CI que puede crear con una aplicación de GitHub, consulte las [aplicaciones de integración continua](https://github.com/marketplace/category/continuous-integration) disponibles en GitHub Marketplace.

{% data reusables.apps.app-ruby-guides %}

### Resumen de la API de Verificaciones

La [API de comprobaciones](/rest/reference/checks) le permite configurar pruebas de CI que se ejecutan automáticamente en cada confirmación de código de un repositorio. La API de comprobaciones comunica información detallada sobre cada comprobación de GitHub en la pestaña **Checks** (Comprobaciones) de la solicitud de incorporación de cambios. Con la API de comprobaciones, puede crear anotaciones con detalles adicionales para líneas de código específicas. Las anotaciones están visibles en la pestaña **Checks** (Comprobaciones). Cuando se crean anotaciones para un archivo que forma parte de la solicitud de incorporación de cambios, las anotaciones también se muestran en la pestaña **Files changed** (Archivos modificados).

Un _conjunto de comprobaciones_ es un grupo de _ejecuciones de comprobación_ (pruebas de CI individuales). Tanto el conjunto de comprobaciones como las ejecuciones contienen _estados_ que pueden visualizarse en una solicitud de incorporación de cambios en GitHub. Puedes utilizar estados para determinar cuando una confirmación de código introduce errores. El uso de estos estados con [ramas protegidas](/rest/reference/repos#branches) puede impedir que las personas combinen solicitudes de incorporación de cambios antes de tiempo. Consulte "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)" para obtener más información.

La API de comprobaciones envía el [evento de webhook `check_suite`](/webhooks/event-payloads/#check_suite) a todas las aplicaciones de GitHub instaladas en un repositorio cada vez que se inserta código nuevo en el repositorio. Para recibir todas las acciones de eventos de la API de comprobaciones, la aplicación debe tener el permiso `checks:write`. GitHub crea automáticamente eventos `check_suite` para nuevas confirmaciones de código en un repositorio mediante el flujo predeterminado, aunque puede [actualizar las preferencias del repositorio para los conjuntos de comprobaciones](/rest/reference/checks#update-repository-preferences-for-check-suites) si quiere. Aquí te mostramos cómo funciona el flujo predeterminado:

1. Cada vez que alguien inserta código en el repositorio, GitHub envía el evento `check_suite` con una acción `requested` a todas las aplicaciones de GitHub instaladas en el repositorio que tienen el permiso `checks:write`. Este evento permite a las apps saber que se cargó código y que GitHub creó un nuevo conjunto de verificaciones automáticamente.
1. Cuando la aplicación recibe este evento, puede [agregar ejecuciones de comprobación](/rest/reference/checks#create-a-check-run) a ese conjunto.
1. Las ejecuciones de comprobación pueden incluir [anotaciones](/rest/reference/checks#annotations-object) que se muestran en líneas de código específicas.

**En esta guía, aprenderá a:**

* Parte 1: Configurar el marco de trabajo para un servidor de IC utilizando la API de Verificaciones.
  * Configurar una GitHub App como un servidor que recibe los eventos de la API de Verificaciones.
  * Crear ejecuciones de verificacion nuevas para las pruebas de IC cuando un repositorio recibe cargas nuevas de confirmaciones.
  * Re-ejecutar ejecuciones de verificación cuando un usuario solicita esta acción en GitHub.
* Parte 2: Compilar en el marco de trabajo del servidor de IC que creaste agregando una prueba de limpieza de IC.
  * Actualizar una ejecución de comprobación con detalles de `status`, `conclusion` y `output`.
  * Crear anotaciones en líneas de código que GitHub muestra en las pestañas **Checks** (Comprobaciones) y **Files Changed** (Archivos modificados) de una solicitud de incorporación de cambios.
  * Corregir automáticamente las recomendaciones del linter exponiendo el botón "Fix this" (Corregir esto) en la pestaña **Checks** (Comprobaciones) de la solicitud de extracción.

Para obtener una idea de lo que hará tu servidor de IC para la API de Verificaciones cuando completes este inicio rápido, revisa el siguiente demo:

![Demostración de la guía de inicio rápido para el servidor de IC de la API de Verificaciones](/assets/images/github-apps/github_apps_checks_api_ci_server.gif)

## Prerrequisitos

Antes de empezar, es posible que quiera familiarizarse con las [aplicaciones de GitHub](/apps/), los [webhooks](/webhooks) y la [API de comprobaciones](/rest/reference/checks), si aún no lo ha hecho. Encontrará más API en la [documentación de la API REST](/rest). La API de comprobaciones también está disponible para su uso en [GraphQL](/graphql), pero esta guía de inicio rápido se centra en REST. Consulte los objetos [CheckSuite](/graphql/reference/objects#checksuite) y [CheckRun](/graphql/reference/objects#checkrun) de GraphQL para obtener más detalles.

Usará el [lenguaje de programación Ruby](https://www.ruby-lang.org/en/), el servicio [Smee](https://smee.io/) de entrega de cargas de webhook, la [biblioteca de Ruby Octokit.rb](http://octokit.github.io/octokit.rb/) para la API REST de GitHub y el [marco web de Sinatra](http://sinatrarb.com/) para crear la aplicación de servidor de CI de la API de comprobaciones.

No necesitas ser un experto en ninguna de estas herramientas o conceptos para completar este proyecto. Esta guía te mostrará todos los pasos requeridos a detalle. Antes de que comiences a crear pruebas de IC con la API de Verificaciones, necesitarás hacer lo siguiente:

1. Clonar el repositorio [Creación de pruebas de CI con la API de comprobaciones](https://github.com/github-developer/creating-ci-tests-with-the-checks-api).
  ```shell
    $ git clone https://github.com/github-developer/creating-ci-tests-with-the-checks-api.git
  ```

  En el directorio, encontrará un archivo `template_server.rb` con el código de plantilla que usará en este inicio rápido y un archivo `server.rb` con el código del proyecto completado.

1. Siga los pasos de la guía de inicio rápido "[Configuración del entorno de desarrollo](/apps/quickstart-guides/setting-up-your-development-environment/)" para configurar y ejecutar el servidor de la aplicación. **Nota:** En lugar de [clonar el repositorio de plantillas de la aplicación de GitHub](/apps/quickstart-guides/setting-up-your-development-environment/#prerequisites), use el archivo `template_server.rb` del repositorio que ha clonado en el paso anterior de esta guía de inicio rápido.

  Si ya ha completado antes una guía de inicio rápido para una aplicación de GitHub, asegúrese de registrar una _nueva_ aplicación de GitHub e inicie un nuevo canal de Smee para usarlo con esta guía de inicio rápido.

  Consulte la sección de [solución de problemas](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting) si tiene problemas para configurar la aplicación de plantilla de GitHub.

## Parte 1. Crear la interface de la API de Verificaciones

En esta parte, agregará el código necesario para recibir eventos del webhook `check_suite` y para crear y actualizar las ejecuciones de comprobación. También aprenderás cómo crear ejecuciones de verificación cuando se re-solicite una verificación en GitHub. Al final de esta sección, podrás ver la ejecución de verificación que creaste en una solicitud de extracción de GitHub.

En esta sección, tu ejecución de verificación no realizará ninguna verificación de código. Agregará esa funcionalidad en la [parte 2: Creación de la prueba de CI de Octo RuboCop](#part-2-creating-the-octo-rubocop-ci-test).

Ya deberías haber configurado el canal de Smee que reenviará las cargas útiles del webhook a tu servidor local. Tu servidor deberá estar funcionando y también estar conectado con la GitHub App que registraste e instalaste ene un repositorio de prueba. Si no ha completado los pasos descritos en "[Configuración del entorno de desarrollo](/apps/quickstart-guides/setting-up-your-development-environment/)", deberá hacerlo para poder continuar.

Comencemos. Estos son los pasos que completarás en la Parte 1:

1. [Actualización de los permisos de la aplicación](#step-11-updating-app-permissions)
1. [Adición del control de eventos](#step-12-adding-event-handling)
1. [Creación de una ejecución de comprobación](#step-13-creating-a-check-run)
1. [Actualización de una ejecución de comprobación](#step-14-updating-a-check-run)

## Paso 1.1. Actualizar los permisos de la app

Cuando [registró por primera vez la aplicación](#prerequisites), aceptó los permisos predeterminados, lo que significa que la aplicación no tiene acceso a la mayoría de los recursos. Para este ejemplo, tu app necesitará el permiso de leer y escribir verificaciones.

Para actualizar los permisos de tu app:

1. Seleccione la aplicación en la [página de configuración de la aplicación](https://github.com/settings/apps) y haga clic en **Permissions & Webhooks** (Permisos y webhooks) en la barra lateral.
1. En la sección "Permissions" (Permisos), busque "Checks" (Comprobaciones) y, al lado, seleccione **Read & write** (Lectura y escritura) en la lista desplegable Access (Acceso).
1. En la sección "Subscribe to events" (Suscribirse a eventos), seleccione **Check suite** (Conjunto de comprobaciones) y **Check run** (Ejecución de comprobación) para suscribirse a estos eventos.
{% data reusables.apps.accept_new_permissions_steps %}

Magnífico. Tu app tiene permiso para realizar las tareas que quieres que haga. Ahora puedes agregar el código para que gestione los eventos.

## Paso 1.2. Agregar la gestión de eventos

Ahora que la aplicación está suscrita a los eventos **Check suite** (Conjunto de comprobaciones) y **Check run** (Ejecución de comprobación), comenzará a recibir los webhooks [`check_suite`](/webhooks/event-payloads/#check_suite) y [`check_run`](/webhooks/event-payloads/#check_run). GitHub envía cargas de webhook como solicitudes `POST`. Dado que ha reenviado las cargas de webhook de Smee a `http://localhost/event_handler:3000`, el servidor recibirá las cargas de solicitud `POST` en la ruta `post '/event_handler'`.

Ya se incluye una ruta vacía `post '/event_handler'` en el archivo `template_server.rb`, el cual ha descargado en la sección de [requisitos previos](#prerequisites). La ruta vacía se ve así:

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

Use esta ruta para controlar el evento `check_suite`; para ello, agregue el código siguiente:

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

Cada evento que GitHub envía incluye un encabezado de solicitud denominado `HTTP_X_GITHUB_EVENT`, que indica el tipo de evento en la solicitud `POST`. En este momento, solo le interesan los eventos de tipo `check_suite`, que se emiten cuando se crea un nuevo conjunto de comprobaciones. Cada evento tiene un campo `action` adicional que indica el tipo de acción que ha activado los eventos. Para `check_suite`, el campo `action` puede ser `requested`, `rerequested` o `completed`.

La acción `requested` solicita una ejecución de comprobación cada vez que el código se inserta en el repositorio, mientras que la acción `rerequested` solicita que se vuelva a ejecutar una comprobación para el código que ya existe en el repositorio. Dado que las acciones `requested` y `rerequested` requieren la creación de una ejecución de comprobación, llamará a un asistente denominado `create_check_run`. Vamos a escribir ese método ahora.

## Paso 1.3. Crear una ejecución de verificación

Agregará este nuevo método como [asistente de Sinatra](https://github.com/sinatra/sinatra#helpers) en caso de que quiera que otras rutas también lo usen. En `helpers do`, agregue este método `create_check_run`:

``` ruby
# Create a new check run with the status queued
def create_check_run
  @installation_client.create_check_run(
    # [String, Integer, Hash, Octokit Repository object] A GitHub repository.
    @payload['repository']['full_name'],
    # [String] The name of your check run.
    'Octo RuboCop',
    # [String] The SHA of the commit to check 
    # The payload structure differs depending on whether a check run or a check suite event occurred.
    @payload['check_run'].nil? ? @payload['check_suite']['head_sha'] : @payload['check_run']['head_sha'],
    # [Hash] 'Accept' header option, to avoid a warning about the API not being ready for production use.
    accept: 'application/vnd.github+json'
  )
end
```

Este código llama al punto de conexión "[Crear una ejecución de comprobación](/rest/reference/checks#create-a-check-run)" mediante el [método create_check_run](https://msp-greg.github.io/octokit/Octokit/Client/Checks.html#create_check_run-instance_method).

Para crear una ejecución de comprobación, solo se requieren dos parámetros de entrada: `name` y `head_sha`. Usaremos [RuboCop](https://rubocop.readthedocs.io/en/latest/) para implementar la prueba de CI más adelante en este inicio rápido, por eso se usa aquí el nombre "Octo RuboCop", pero puede elegir el nombre que quiera para la ejecución de comprobación.

Ahora mismo, solo estás proporcionando los parámetros requeridos para echar a andar la funcionalidad básica, pero actualizarás la ejecución de verificación más adelante mientras recolectes más información acerca de la ejecución de verificación. De forma predeterminada, GitHub establece `status` en `queued`.

GitHub crea una ejecución de comprobación para un SHA de confirmación específico, por lo que `head_sha` es un parámetro necesario. Puedes encontrar el SHA de la confirmación en la carga útil del webhook. Aunque solo va a crear una ejecución de comprobación para el evento `check_suite` en este momento, es bueno saber que `head_sha` se incluye tanto en los objetos `check_suite` como `check_run` en las cargas de eventos.

En el código anterior, se usa el [operador ternario](https://ruby-doc.org/core-2.3.0/doc/syntax/control_expressions_rdoc.html#label-Ternary+if), que funciona como una instrucción `if/else`, para comprobar si la carga contiene un objeto `check_run`. Si lo contiene, debe leer `head_sha` desde el objeto `check_run`; de lo contrario, lo leerá desde el objeto `check_suite`.

Para probar este código, reinicia el servidor desde tu terminal:

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

Ahora abre una solicitud de extracción en el repositorio en donde instalaste tu app. Tu app deberá responder creando una ejecución de verificación en tu solicitud de cambios. Haga clic en la pestaña **Checks** (Comprobaciones) y verá algo parecido a esto:

![Ejecución de verificación en cola](/assets/images/github-apps/github_apps_queued_check_run.png)

Si ve otras aplicaciones en la pestaña Checks (Comprobaciones), significa que tiene otras aplicaciones instaladas en el repositorio que tienen acceso de **lectura y escritura** a las comprobaciones y están suscritas a los eventos **Check suite** (Conjunto de comprobaciones) y **Check run** (Ejecución de comprobación).

Magnífico. Le has dicho a GitHub que cree una ejecución de verificación. Puede ver que el estado de la ejecución de comprobación está establecido en `queued` junto a un icono amarillo. A continuación, deberás esperar a que GitHub cree la ejecución de verificación y actualice su estado.

## Paso 1.4. Actualizar una ejecución de verificación

Cuando se ejecuta el método `create_check_run`, pide a GitHub que cree una nueva ejecución de comprobación. Cuando GitHub termine de crear la ejecución de comprobación, recibirá el evento de webhook `check_run` con la acción `created`. Este evento es tu señal para comenzar a ejecutar la verificación.

Le recomendamos que actualice el controlador de eventos para buscar la acción `created`. Mientras actualiza el controlador de eventos, puede agregar un condicional para la acción `rerequested`. Cuando alguien vuelve a ejecutar una sola prueba en GitHub, al hacer clic en el botón "Re-run" (Volver a ejecutar), GitHub envía el evento de ejecución de comprobación con el estado `rerequested` a la aplicación. Si una ejecución de comprobación tiene el estado `rerequested`, comience de nuevo todo el proceso y cree una nueva ejecución de comprobación.

Para incluir una condición para el evento `check_run` en la ruta `post '/event_handler'`, agregue el código siguiente en `case request.env['HTTP_X_GITHUB_EVENT']`:

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

GitHub envía todos los eventos de las ejecuciones de comprobación con el estado `created` a todas las aplicaciones instaladas en un repositorio que tengan los permisos de comprobación necesarios. Esto significa que tu app recibirá las ejecuciones de verificación que creen otras apps. Una ejecución de comprobación `created` es un poco diferente de un conjunto de comprobaciones `requested` o `rerequested`, y GitHub solo la envía a las aplicaciones a las que se solicita que ejecuten una comprobación. El código anterior busca la ID de aplicación de la ejecución de verificación. Esto filtra todas las ejecuciones de verificación para otras apps en el repositorio.

Después, escribirá el método `initiate_check_run`, que es donde actualizará el estado de la ejecución de comprobación y donde se preparará para iniciar la prueba de CI.

En esta sección, aún no va a lanzar la prueba de CI, pero le mostraremos cómo actualizar el estado de la ejecución de comprobación de `queued` a `pending` y, después, de `pending` a `completed` para ver el flujo general de una ejecución de comprobación. En la [parte 2: "Creación de la prueba de CI de Octo RuboCop"](#part-2-creating-the-octo-rubocop-ci-test), agregará el código que ejecuta realmente la prueba de CI.

Vamos a crear el método `initiate_check_run` y a actualizar el estado de la ejecución de comprobación. Agrega el siguiente código a la sección de ayudantes:

``` ruby
# Start the CI process
def initiate_check_run
  # Once the check run is created, you'll update the status of the check run
  # to 'in_progress' and run the CI process. When the CI finishes, you'll
  # update the check run status to 'completed' and add the CI results.

  @installation_client.update_check_run(
    @payload['repository']['full_name'],
    @payload['check_run']['id'],
    status: 'in_progress',
    accept: 'application/vnd.github+json'
  )

  # ***** RUN A CI TEST *****

  # Mark the check run as complete!
  @installation_client.update_check_run(
    @payload['repository']['full_name'],
    @payload['check_run']['id'],
    status: 'completed',
    conclusion: 'success',
    accept: 'application/vnd.github+json'
  )
end
```

El código anterior llama al punto de conexión de API "[Actualizar una ejecución de comprobación](/rest/reference/checks#update-a-check-run)" mediante el [método Octokit `update_check_run`](https://msp-greg.github.io/octokit/Octokit/Client/Checks.html#update_check_run-instance_method) para actualizar la ejecución de comprobación que ya ha creado.

Te explicamos lo que hace este código. En primer lugar, actualiza el estado de la ejecución de comprobación a `in_progress` y establece implícitamente la hora de `started_at` en la hora actual. En la [parte 2](#part-2-creating-the-octo-rubocop-ci-test) de este inicio rápido, agregará código que inicia una prueba de CI real en `***** RUN A CI TEST *****`. Por el momento, dejarás esta sección como un marcador de posición para que el código subsecuente simplemente estimule el éxito del proceso de IC y que todas las pruebas pasen. Por último, el código vuelve a actualizar el estado de la ejecución de comprobación a `completed`.

Observará que, en la documentación de "[Actualizar una ejecución de comprobación](/rest/reference/checks#update-a-check-run)", cuando se proporciona un estado `completed`, se requieren los parámetros `conclusion` y `completed_at`. El objeto `conclusion` resume el resultado de una ejecución de comprobación y puede ser `success`, `failure``neutral`, `cancelled`, `timed_out` o `action_required`. Por tanto, establecerá el estado de la conclusión en `success`, la hora de `completed_at` en la hora actual y el estado en `completed`.

También puedes proporcionar más detalles sobre lo que está haciendo tu verificación, pero eso lo abordaremos en la siguiente sección. Vamos a volver a probar este código ejecutando `template_server.rb` de nuevo:

```shell
$ ruby template_server.rb
```

Vaya a la solicitud de incorporación de cambios abierta y haga clic en la pestaña **Checks** (Comprobaciones). Luego, haga clic en el botón "Re-run all" (Volver a ejecutar todo) situado en la esquina superior izquierda. Debería ver que el estado de la ejecución de comprobación pasa de `pending` a `in_progress` y termina siendo `success`:

![Ejecución de verificación completada](/assets/images/github-apps/github_apps_complete_check_run.png)

## Parte 2. Crear la prueba de IC de Octo RuboCop

[RuboCop](https://rubocop.readthedocs.io/en/latest/) es un linter de código de Ruby y un formateador. Comprueba el código de Ruby para asegurarse de que cumple con la "[Guía de estilo de Ruby](https://github.com/rubocop-hq/ruby-style-guide)". RuboCop tiene tres funciones prncipales:

* Limpiar para revisar el estilo del código
* Formateo del código
* Reemplazar las funcionalidades nativas de linting de Ruby mediante `ruby -w`

Ahora que tienes la interface que se ha creado para recibir eventos de la API de verificaciones y para crear ejecuciones de verificción, puedes crear una ejecución de verificación que implemente una prueba de IC.

Tu app ejecutará RuboCop en el servidor de IC y creará ejecuciones de verificación (en este caso, pruebas de IC) que reporten los resultados que RuboCop reporta a GitHub.

La API de Verificaciones te permite reportar detalles enriquecidos acerca de cada ejecución de verificación, incluyendo los estados, imágenes, resúmenes, y las acciones solicitadas.

Las anotaciones son información acerca de líneas de código específicas en un repositorio. Una anotación te permite identificar y visualizar las partes exactas del código para las cuales quieres mostrar información adicional. Esa puede ser cualquier información: por ejemplo, un comentario, un error, o una advertencia. Esta guía rápida utiliza anotaciones para visualizar los errores de RuboCop.

Para aprovechar las acciones solicitadas, los desarrolladores de aplicaciones pueden crear botones en la pestaña **Checks** (Comprobaciones) de las solicitudes de incorporación de cambios. Cuando alguien hace clic en uno de estos botones, se envía un evento `requested_action` `check_run` a la aplicación de GitHub. El desarrollador de la app puede configurar íntegramente la acción que ésta toma. Esta guía de inicio rápido te mostrará cómo agregar un botón que permitirá a los usuarios solicitar que RuboCop corrija los errores que encuentre. RuboCop admite la corrección automática de errores mediante el uso de una opción de línea de comandos, por lo que configurará `requested_action` para aprovechar esta opción.

Comencemos. Estos son los pasos que tendrás que completar en esta sección:

1. [Adición de un archivo de Ruby](#step-21-adding-a-ruby-file)
1. [Clonación del repositorio](#step-22-cloning-the-repository)
1. [Ejecución de RuboCop](#step-23-running-rubocop)
1. [Recopilación de errores de RuboCop](#step-24-collecting-rubocop-errors)
1. [Actualización de la ejecución de comprobación con resultados de la prueba de CI](#step-25-updating-the-check-run-with-ci-test-results)
1. [Corrección automática de los errores de RuboCop](#step-26-automatically-fixing-rubocop-errors)
1. [Sugerencias de seguridad](#step-27-security-tips)

## Paso 2.1. Agregar un archivo de Ruby

Puedes pasar archivos específicos o directorios completos para que los revise RuboCop. En esta guía de inicio rápido, ejecutarás a RuboCop en un directorio completo. Ya que RuboCop únicamente revisa el código de Ruby, querrás que por lo menos un archivo de Ruby en tu repositorio contenga errores. El archivo de ejemplo que te proporcionamos a continuación contiene unos cuantos errores. Agregue este archivo de Ruby de ejemplo al repositorio donde está instalada la aplicación (asegúrese de asignar un nombre al archivo con una extensión `.rb`, como `myfile.rb`):

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

## Paso 2.2. Clonación del repositorio

RuboCop se encuentra disponible como una utilidad de línea de comandos. Eso significa que tu GitHub App necesitará clonar una copia local del repositorio en el servidor de IC para que RuboCop analice los archivos. Para ejecutar operaciones de Git en la aplicación de Ruby, puede usar la gema [ruby-git](https://github.com/ruby-git/ruby-git).

El elemento `Gemfile` del repositorio `building-a-checks-api-ci-server` ya incluye la gema ruby-git y se instaló cuando se ejecutó `bundle install` en los [pasos de requisitos previos](#prerequisites). Para usar la gema, agregue este código en la parte superior del archivo `template_server.rb`:

``` ruby
require 'git'
```

Tu app necesita el permiso de lectura para "contenido de repositorio" si quieres que clone un repositorio. Más adelante en esta guía de inicio rápido, necesitarás cargar contenido a GitHub, lo cual requiere el permiso de escritura. Continúe y establezca ahora el permiso de "Repository contents" (Contenido del repositorio) de la aplicación en **Read & write** (Lectura y escritura) para que no tenga que actualizarlo de nuevo más tarde. Para actualizar los permisos de tu app:

1. Seleccione la aplicación en la [página de configuración de la aplicación](https://github.com/settings/apps) y haga clic en **Permissions & Webhooks** (Permisos y webhooks) en la barra lateral.
1. En la sección "Permissions" (Permisos), busque "Repository contents" (Contenido del repositorio) y, al lado, seleccione **Read & write** (Lectura y escritura) en la lista desplegable "Access" (Acceso).
{% data reusables.apps.accept_new_permissions_steps %}

Para clonar un repositorio mediante los permisos de la aplicación de GitHub, puede usar el token de instalación de la aplicación (`x-access-token:<token>`) que se muestra en el ejemplo siguiente:

```shell
git clone https://x-access-token:<token>@github.com/<owner>/<repo>.git
```

El código anterior clona un repositorio a través de HTTP. Éste necesita el nombre íntegro del repositorio, lo cual incluye al propietario del mismo (usuario u organización) y el nombre de éste. Por ejemplo, el nombre completo del repositorio [Hello-World de octocat](https://github.com/octocat/Hello-World) es `octocat/hello-world`.

Una vez que la aplicación clone el repositorio, debe extraer los cambios de código más recientes y una referencia específica de Git. El código para hacer todo esto se ajustará perfectamente a su propio método. Para llevar a cabo estas operaciones, el método necesita el nombre y nombre completo del repositorio y la ref de salida. La ref puede ser el SHA de una confirmación, una rama, o una etiqueta. Agregue el siguiente método nuevo a la sección del método del asistente en `template_server.rb`:

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

El código anterior usa la gema `ruby-git` para clonar el repositorio mediante el token de instalación de la aplicación. Este código clona el código en el mismo directorio que `template_server.rb`. Para ejecutar los comandos de Git en el repositorio, el código necesita cambiar el directorio del repositorio. Antes de cambiar los directorios, el código almacena el directorio de trabajo actual en una variable (`pwd`) para recordar a dónde debe volver antes de salir del método `clone_repository`.

En el directorio del repositorio, este código captura y combina los cambios más recientes (`@git.pull`), extrae la referencia (`@git.checkout(ref)`) y, después, vuelve a cambiar el directorio al directorio de trabajo original (`pwd`).

Ahora tiene un método que clona un repositorio y extrae una referencia. A continuación, debe agregar código para obtener los parámetros de entrada necesarios y llamar al nuevo método `clone_repository`. Agregue el código siguiente bajo el comentario `***** RUN A CI TEST *****` en el método del asistente `initiate_check_run`:

``` ruby
# ***** RUN A CI TEST *****
full_repo_name = @payload['repository']['full_name']
repository     = @payload['repository']['name']
head_sha       = @payload['check_run']['head_sha']

clone_repository(full_repo_name, repository, head_sha)
```

El código anterior obtiene el nombre completo del repositorio y el SHA de encabezado de la confirmación desde la carga útil del webhook `check_run`.

## Paso 2.3. Ejecutar RuboCop

Magnífico. Estás clonando el repositorio y creando ejecuciones de verificación al utilizar tu servidor de IC. Ahora se centrará en los detalles más minuciosos del [linter RuboCop](https://docs.rubocop.org/rubocop/usage/basic_usage.html#code-style-checker) y de las [anotaciones de la API de comprobaciones](/rest/reference/checks#create-a-check-run).

El siguiente código ejecuta RuboCop y guarda los errores de estilo en el código con un formato JSON. Agregue este código debajo de la llamada a `clone_repository` que agregó en el [paso anterior](#step-22-cloning-the-repository) y encima del código que actualiza la ejecución de comprobación para completarse.

``` ruby
# Run RuboCop on all files in the repository
@report = `rubocop '#{repository}' --format json`
logger.debug @report
`rm -rf #{repository}`
@output = JSON.parse @report
```

Este código utiliza RuboCop en todos los archivos dentro del directorio del repositorio. La opción `--format json` es una forma práctica de guardar una copia de los resultados de linting en un formato analizable para una máquina. Consulte la [documentación sobre RuboCop](https://docs.rubocop.org/rubocop/formatters.html#json-formatter) para obtener más información y un ejemplo del formato JSON.

Dado que este código almacena los resultados de RuboCop en una variable `@report`, puede eliminar la salida del repositorio con seguridad. Este código también analiza el JSON para que pueda acceder fácilmente a las claves y los valores de su aplicación de GitHub mediante la variable `@output`.

{% note %}

**Nota:** El comando usado para quitar el repositorio (`rm -rf`) no se puede deshacer. Consulte el [paso 2.7. Sugerencias de seguridad](#step-27-security-tips) para aprender a comprobar los webhooks en busca de comandos malintencionados insertados que podrían usarse para quitar un directorio diferente del que quiere quitar la aplicación. Por ejemplo, si un actor malintencionado envía un webhook con el nombre de repositorio `./`, la aplicación quitará el directorio raíz. 😱 Si por alguna razón _no_ usa el método `verify_webhook_signature` (que se incluye en `template_server.rb`) para validar al emisor del webhook, asegúrese de revisar que el nombre del repositorio es válido.

{% endnote %}

Puedes probar que este código funcione y ver los errores que reporta RuboCop en la salida de depuración de tu servidor. Vuelva a iniciar el servidor `template_server.rb` y cree una nueva solicitud de incorporación de cambios en el repositorio donde va a probar la aplicación:

```shell
$ ruby template_server.rb
```

Deberías ver los errores de limpieza en la salida de depuración, aunque no se imprimen con formato. Puede usar una herramienta web como un [formateador de JSON](https://jsonformatter.org/) para dar formato a la salida JSON, como en esta salida de error de linting con formato:

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

## Paso 2.4. Recolectar los errores de RuboCop

La variable `@output` contiene los resultados JSON analizados del informe de RuboCop. Tal como se ha mostrado anteriormente, los resultados contienen una sección `summary` que el código puede usar para determinar rápidamente si hay algún error. El código siguiente establecerá el estado de la conclusión de la ejecución de comprobación en `success` cuando no se notifiquen errores. RuboCop notifica los errores para cada archivo de la matriz `files`, así que, si hay errores, necesitará extraer algunos datos del objeto de archivo.

La API de Verificaciones te permite crear anotaciones para líneas de código específicas. Cuando creas o actualizas una ejecución de verificación, puedes agregar anotaciones. En este inicio rápido, va a [actualizar la ejecución de comprobación](/rest/reference/checks#update-a-check-run) con anotaciones.

La API de Verificaciones limita la cantidad de anotaciones a un máximo de 50 por solilcitud de API. Para crear más de 50 anotaciones, debe realizar varias solicitudes al punto de conexión [Actualizar una ejecución de comprobación](/rest/reference/checks#update-a-check-run). Por ejemplo, para crear 105 anotaciones, deberá llamar al punto de conexión [Actualizar una ejecución de comprobación](/rest/reference/checks#update-a-check-run) tres veces. Las primeras dos contarían por 50 anotaciones cada una, y la tercera incluiría las cinco restantes. Cada vez que actualices la ejecución de verificación, se adjuntan las anotaciones a la lista de anotaciones existente para la ejecución de verificación.

Una ejecución de verificación espera encontrar las anotaciones en una matriz de objetos. Cada objeto de anotación debe incluir los parámetros `path`, `start_line`, `end_line`, `annotation_level` y `message`. RuboCop también proporciona los parámetros adicionales `start_column`y `end_column`, por lo que puede incluirlos en la anotación. Las anotaciones solo admiten los parámetros `start_column` y `end_column` en la misma línea. Para más información, consulte la documentación de referencia del [objeto `annotations`](/rest/reference/checks#annotations-object-1).

Extraerás la información requerida de RuboCop que necesites para crear cada anotación. Agregue el código siguiente al código que ha agregado en la [sección anterior](#step-23-running-rubocop):

``` ruby
annotations = []
# You can create a maximum of 50 annotations per request to the Checks
# API. To add more than 50 annotations, use the "Update a check run" API
# endpoint. This example code limits the number of annotations to 50.
# See /rest/reference/checks#update-a-check-run
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

Este código limita la cantidad total de anotaciones a 50. Pero puedes modificarlo para actualizar la ejecución de verificación para cada lote de 50 anotaciones. El código anterior incluye la variable `max_annotations`, la cual establece el límite en 50 y se usa en el bucle que recorre en iteración las infracciones.

Cuando `offense_count` es cero, el resultado de la prueba de CI es `success`. Si hay errores, este código establece la conclusión en `neutral` para evitar que se apliquen estrictamente los errores de los linters de código. Pero puede cambiar la conclusión a `failure` si quiere asegurarse de que se produce un error en el conjunto de comprobaciones cuando hay errores de linting.

Cuando se notifican errores, el código anterior recorre en iteración la matriz `files` del informe de RuboCop. Para cada archivo, extrae la ruta de acceso del mismo y establece el nivel de anotación en `notice`. Puede ir aún más allá y establecer niveles de advertencia específicos para cada tipo de [RuboCop Cop](https://docs.rubocop.org/rubocop/cops.html), pero para simplificar las cosas en este inicio rápido, todos los errores se establecen en un nivel `notice`.

Este código también recorre en iteración cada error de la matriz `offenses` y recopila la ubicación del mensaje de error y de la infracción. Después de extraer la información necesaria, el código crea una anotación para cada error y la almacena en la matriz `annotations`. Dado que las anotaciones solo admiten columnas de inicio y finalización en la misma línea, los elementos `start_column` y `end_column` solo se agregan al objeto `annotation` si los valores iniciales y finales de la línea son los mismos.

Este código aún no crea una anotación para la ejecución de verificación. Agregarás dicho código en la siguiente sección.

## Paso 2.5. Actualizar la ejecución de verificación con los resultados de la prueba de IC

Cada ejecución de comprobación de GitHub contiene un objeto `output` que incluye los parámetros `title`, `summary`, `text`, `annotations` y `images`. `summary` y `title` son los únicos parámetros necesarios para `output`, pero por sí solos no dan mucha información, por lo que en esta guía de inicio rápido también se agregan `text` y `annotations`. Este código no agrega una imagen, pero ¡no dudes en agregarla si así lo deseas!

En el caso de `summary`, en este ejemplo se usa la información de resumen de RuboCop y se agregan algunas líneas nuevas (`\n`) para dar formato a la salida. Puede personalizar la información que agrega al parámetro `text`, pero en este ejemplo se incluye en el parámetro `text` la versión de RuboCop. Para establecer los parámetros `summary` y `text`, agregue este código al código que ha agregado en la [sección anterior](#step-24-collecting-rubocop-errors):

``` ruby
# Updated check run summary and text parameters
summary = "Octo RuboCop summary\n-Offense count: #{@output['summary']['offense_count']}\n-File count: #{@output['summary']['target_file_count']}\n-Target file count: #{@output['summary']['inspected_file_count']}"
text = "Octo RuboCop version: #{@output['metadata']['rubocop_version']}"
```

Ahora tienes toda la información que necesitas para actualizar tu ejecución de verificación. En la [primera mitad de este inicio rápido](#step-14-updating-a-check-run), ha agregado este código para establecer el estado de la ejecución de comprobación en `success`:

``` ruby
# Mark the check run as complete!
@installation_client.update_check_run(
  @payload['repository']['full_name'],
  @payload['check_run']['id'],
  status: 'completed',
  conclusion: 'success',
  accept: 'application/vnd.github+json'
)
```

Deberá actualizar ese código para usar la variable `conclusion` establecida en función de los resultados de RuboCop (en `success` o `neutral`). Puedes actualizar el código con lo siguiente:

``` ruby
# Mark the check run as complete! And if there are warnings, share them.
@installation_client.update_check_run(
  @payload['repository']['full_name'],
  @payload['check_run']['id'],
  status: 'completed',
  conclusion: conclusion,
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
  }],
  accept: 'application/vnd.github+json'
)
```

Ahora que estás configurando una conclusión con base en el estado de la prueba de IC y has agregado la salida de los resultados de RuboCop, ¡has creado una prueba de IC! ¡Enhorabuena! 🙌

El código anterior también agrega una característica al servidor de CI denominada [acciones solicitadas](https://developer.github.com/changes/2018-05-23-request-actions-on-checks/) por medio del objeto `actions`. {% ifversion fpt or ghec %}(Tenga en cuenta que esto no está relacionado con [Acciones de GitHub](/actions)).{% endif %}Las acciones solicitadas agregan un botón en la pestaña **Checks** (Comprobaciones) de GitHub que permite a los usuarios solicitar que la ejecución de comprobación realice acciones adicionales. Tu app puede configurar la acción adicional en su totalidd. Por ejemplo, ya que RuboCop tiene una característica para corregir automáticamente los errores que encuentre en el código de Ruby, tu servidor de IC puede utilizar un botón de acciones solicitadas para ayudar a que las personas soliciten correcciónes de errores automáticas. Cuando alguien hace clic en el botón, la aplicación recibe el evento `check_run` con una acción `requested_action`. Cada acción solicitada tiene un objeto `identifier` que la aplicación usa para determinar en qué botón se ha hecho clic.

El código anterior aún no hace que RuboCop corrija los errores automáticamente. Eso lo agregarás en la siguiente sección. Pero en primer lugar, eche un vistazo a la prueba de CI que acaba de crear iniciando el servidor `template_server.rb` de nuevo y creando una nueva solicitud de incorporación de cambios:

```shell
$ ruby template_server.rb
```

Las anotaciones se mostrarán en la pestaña **Checks** (Comprobaciones).

![Anotaciones de la ejecución de verificación en la pestaña de verificaciones](/assets/images/github-apps/github_apps_checks_annotations.png)

Nota el botón de "Arreglar esto" que creaste al agregar la acción solicitada.

![Botón de acción solicitada para la ejecución de verificación](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

Si las anotaciones están relacionadas con un archivo ya incluido en la solicitud de incorporación de cambios, también se mostrarán en la pestaña **Files changed** (Archivos modificados).

![Anotaciones de la ejecución de verificación en la pestaña de archivos cambiados](/assets/images/github-apps/github_apps_checks_annotation_diff.png)

## Paso 2.6. Corregir automáticamente los errores de RuboCop

Si has llegado hasta aquí, ¡excelente! 👏 Ya ha creado una prueba de CI. En esta sección vas a agregar una característica más que utiliza a RuboCop para corregir automáticamente los errores que encuentre. Ya ha agregado el botón "Fix this" (Corregir esto) en la [sección anterior](#step-25-updating-the-check-run-with-ci-test-results). Ahora agregará el código para controlar el evento de ejecución de comprobación `requested_action` que se desencadena cuando alguien hace clic en el botón "Fix this" (Corregir esto).

La herramienta RuboCop [ofrece](https://docs.rubocop.org/rubocop/usage/basic_usage.html#auto-correcting-offenses) la opción de línea de comandos `--auto-correct` para corregir automáticamente los errores que encuentra. Cuando se usa la característica `--auto-correct`, las actualizaciones se aplican en los archivos locales del servidor. Necesitarás cargar los cambios a GitHub después de que RuboCop haga su magia.

Para cargar un repositorio, tu app debe tener permisos de escritura para "contenido de repositorio". Ya ha establecido ese permiso en el [paso 2.2. Clonación del repositorio](#step-22-cloning-the-repository) en **Read & write** (Lectura y escritura), por lo que no debe hacer nada más.

Para confirmar archivos, Git debe saber qué [nombre de usuario](/github/getting-started-with-github/setting-your-username-in-git/) y [correo electrónico](/articles/setting-your-commit-email-address-in-git/) asociar con la confirmación. Agregue dos variables de entorno más en el archivo `.env` para almacenar la configuración del nombre (`GITHUB_APP_USER_NAME`) y del correo electrónico (`GITHUB_APP_USER_EMAIL`). Tu nombre puede ser aquél de tu app y la dirección de correo electrónico puede ser cualquiera para este ejemplo. Por ejemplo:

```ini
GITHUB_APP_USER_NAME=Octoapp
GITHUB_APP_USER_EMAIL=octoapp@octo-org.com
```

Una vez que haya actualizado el archivo `.env` con el nombre y el correo electrónico del autor y del responsable de la confirmación, tendrá todo listo para agregar código para leer las variables de entorno y establecer la configuración de Git. Pronto agregarás este código.

Cuando alguien hace clic en el botón "Fix this" (Corregir esto), la aplicación recibe el [webhook de ejecución de comprobación](/webhooks/event-payloads/#check_run) con el tipo de acción `requested_action`.

En el [paso 1.4. Actualización de una ejecución de comprobación,](#step-14-updating-a-check-run) ha actualizado el controlador de eventos (`event_handler`) para controlar la búsqueda de acciones en el evento `check_run`. Ya tiene una instrucción "case" para controlar los tipos de acción `created` y `rerequested`:

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

Agregue otra instrucción `when` después de la instrucción "case" `rerequested` para controlar el evento `rerequested_action`:

``` ruby
when 'requested_action'
  take_requested_action
```

Este código llama a un nuevo método que controlará todos los eventos `requested_action` de la aplicación. Agrega el siguiente método a la sección de métodos del ayudante para tu código:

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

El código anterior clona un repositorio, igual que el código que ha agregado en el [paso 2.2. Clonación del repositorio](#step-22-cloning-the-repository). Una instrucción `if` comprueba que el identificador de la acción solicitada coincide con el identificador del botón de RuboCop (`fix_rubocop_notices`). Cuando coinciden, el código clona el repositorio, establece el nombre de usuario y el correo electrónico de Git y ejecuta RuboCop con la opción `--auto-correct`. La opción `--auto-correct` aplica los cambios a los archivos locales del servidor de CI automáticamente.

Los archivos se cambian de manera local, pero aún necesitarás cargarlos a GitHub. Volverá a usar la útil gema `ruby-git` para confirmar todos los archivos. Git tiene un único comando que almacena provisionalmente todos los archivos modificados o eliminados y los confirma: `git commit -a`. Para hacer lo mismo con `ruby-git`, el código anterior usa el método `commit_all`. Después, el código inserta los archivos confirmados en GitHub mediante el token de instalación con el mismo método de autenticación que el comando `clone` de Git. Por último, elimina el directorio del repositorio para garantizar que el directorio de trabajo está preparado para el siguiente evento.

Eso es todo. El código que escribiste ahora completa tu servidor de IC para la API de Verificaciones. 💪 Reinicie el servidor `template_server.rb` de nuevo y cree una nueva solicitud de incorporación de cambios:

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

Esta vez, haga clic en el botón "Fix this" (Corregir esto) para corregir automáticamente los errores que RuboCop ha encontrado en la pestaña **Checks** (Comprobaciones).

En la pestaña **Commits** (Confirmaciones), verá una nueva confirmación con el nombre de usuario que ha establecido en la configuración de Git. Puede que necesites actualizar tu buscador para ver esto.

![Una confirmación nueva para corregir los avisos de Octo RuboCop automáticamente](/assets/images/github-apps/github_apps_new_requested_action_commit.png)

Dado que se ha insertado una nueva confirmación en el repositorio, verá un nuevo conjunto de comprobaciones para Octo RuboCop en la pestaña **Checks** (Comprobaciones). Pero esta vez no hay errores porque RuboCop los ha corregido todos. 🎉

![Sin errores en los conjuntos de verificaciones o en la ejecución de verificación](/assets/images/github-apps/github_apps_checks_api_success.png)

Puede encontrar el código completado para la aplicación que acaba de compilar en el archivo `server.rb` del repositorio [Creación de pruebas de CI con la API de comprobaciones](https://github.com/github-developer/creating-ci-tests-with-the-checks-api).

## Paso 2.7. Sugerencias de seguridad

El código de la plantilla de la GitHub App ya tiene un método para verificar las cargas útiles de webhook entrantes para garantizar que vengan de una fuente confiable. Si no estás validando las cargas útiles de los webhooks, necesitarás garantizar que, cuando los nombres de repositorio se incluyan en éstas, el webhook no contenga comandos arbitrarios que puedan usarse con malas intenciones. El siguiente código valida que el nombre del repositorio solo contenga caracteres alfabeticos latinos, guiones y guiones bajos. Para proporcionarle un ejemplo completo, el código de `server.rb` completo disponible en el [repositorio complementario](https://github.com/github-developer/creating-ci-tests-with-the-checks-api) de esta guía de inicio rápido incluye tanto el método de validación de cargas de webhook entrantes como esta comprobación para verificar el nombre del repositorio.

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

## Solución de problemas

Aquí te mostramos algunos problemas comunes y algunas soluciones sugeridas. Si tienes algún otro problema, puedes pedir ayuda o consejo en {% data reusables.support.prodname_support_forum_with_url %}.

* **P:** Mi aplicación no inserta código en GitHub. !No veo las correcciones que RuboCop hace automáticamente!

    **R:** Asegúrese de que tiene establecidos los permisos **Read & write** (Lectura y escritura) en "Repository contents" (Contenido del repositorio) y de que va a clonar el repositorio con el token de instalación. Consulte el [paso 2.2. Clonación del repositorio](#step-22-cloning-the-repository) para obtener más información.

* **P:** Veo un error en la salida del registro de depuración `template_server.rb` relacionado con la clonación de mi repositorio.

    **R:** Si ve el siguiente error es que no ha eliminado la salida del repositorio en uno de los métodos `initiate_check_run` o `take_requested_action`, o en ambos:

    ```shell
    2018-11-26 16:55:13 - Git::GitExecuteError - git  clone '--' 'https://x-access-token:ghs_9b2080277016f797074c4dEbD350745f4257@github.com/codertocat/octocat-breeds.git' 'Octocat-breeds'  2>&1:fatal: destination path 'Octocat-breeds' already exists and is not an empty directory.:
    ```

    Compare su código con el archivo `server.rb` para asegurarse de que tiene el mismo código en los métodos `initiate_check_run` y `take_requested_action`.

* **P:** Las nuevas ejecuciones de comprobación no se muestran en la pestaña "Checks" de GitHub.

    **R:** Reinicie Smee y vuelva a ejecutar el servidor `template_server.rb`.

* **P:** No veo el botón "Re-run all" en la pestaña "Checks" de GitHub.

    **R:** Reinicie Smee y vuelva a ejecutar el servidor `template_server.rb`.

## Conclusión

Después de seguir esta guía, ¡aprendiste los puntos básicos de utilizar la API de Verificaciones para crear un servidor de IC! Para hacer una revisión:

* Configuraste tu servidor para recibir eventos de la API de Verificaciones y creaste ejecuciones de verificación.
* Utilizaste RuboCop para verificar el código en los repositorios y creaste anotaciones para los errores.
* Iplementaste una accion solicitada que corrijió automáticamente los errores de limpieza.

## Pasos siguientes

Aquí tienes algunas ideas para lo que puedes hacer después:

* Actualmente, el botón "Arreglar esto" siempre se muestra. Actualiza el código que escribiste para que muestre el botón de "Arreglar esto" únicamente cuando RuboCop encuentre errores.
* Si prefiere que RuboCop no confirme archivos directamente en la rama principal, puede actualizar el código para [crear una solicitud de incorporación de cambios](/rest/reference/pulls#create-a-pull-request) con una nueva rama basada en la rama principal.
