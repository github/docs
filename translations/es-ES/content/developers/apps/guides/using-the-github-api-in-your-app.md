---
title: Utilizar la API de GitHub en tu app
intro: Aprende cómo configurar tu app para que escuche los eventos y utilice la biblioteca de Octokit para hacer operaciones de la API de REST.
redirect_from:
  - /apps/building-your-first-github-app
  - /apps/quickstart-guides/using-the-github-api-in-your-app
  - /developers/apps/using-the-github-api-in-your-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Build an app with the REST API
ms.openlocfilehash: 93679e41fe145406ed1eb99e2daaba6bf8e10e76
ms.sourcegitcommit: 872c4751a3fc255671295a5dea6a2081c66b7b71
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 08/30/2022
ms.locfileid: '145092191'
---
## Introducción

Esta guía te ayudará a crear una GitHub App y a ejecutarla en un servidor. La app que crees agregará una etiqueta a todos los informes de problemas nuevos que estén abiertos en el repositorio en donde ésta se instale.

Este proyecto te mostrará cómo hacer lo siguiente:

* Programar tu app para escuchar eventos
* Utilizar la biblioteca de Octokit para hacer operaciones de la API de REST

{% data reusables.apps.app-ruby-guides %}

Una vez que hayas seguido estos pasos, estarás listo para desarrollar otros tipos de integraciones utilizando la suite completa de las API de GItHub. {% ifversion fpt or ghec %}Puedes consultar ejemplos correctos de aplicaciones en [GitHub Marketplace](https://github.com/marketplace) y [Trabajos con GitHub](https://github.com/works-with).{% endif %}

## Prerrequisitos

Puede que te sea útil tener un entendimiento básico de lo siguiente:

* [Aplicaciones de GitHub](/apps/about-apps)
* [Webhooks](/webhooks)
* [Lenguaje de programación Ruby](https://www.ruby-lang.org/en/)
* [API de REST](/rest)
* [Sinatra](http://sinatrarb.com/)

Pero puedes seguir esta guía sin importar tu nivel de experiencia. ¡Colocaremos enlaces para la información que requieras en cada fase!

Antes de que comiences, necesitas hacer lo siguiente:

1. Clone el repositorio [Uso de la API de GitHub en la aplicación](https://github.com/github-developer/using-the-github-api-in-your-app).
  ```shell
    $ git clone https://github.com/github-developer/using-the-github-api-in-your-app.git
  ```

  En el directorio, encontrarás un archivo `template_server.rb` con el código de plantilla que usarás en este inicio rápido y un archivo `server.rb` con el código del proyecto completado.

1. Sigue los pasos de la guía de inicio rápido [Configuración del entorno de desarrollo](/apps/quickstart-guides/setting-up-your-development-environment/) para configurar y ejecutar el servidor de la aplicación `template_server.rb`. Si anteriormente has completado un inicio rápido de aplicación de GitHub diferente de [Configuración del entorno de desarrollo](/apps/quickstart-guides/setting-up-your-development-environment/), debes registrar una _nueva_ aplicación de GitHub e iniciar un nuevo canal Smee para usarlo con este inicio rápido.

  Este inicio rápido incluye el mismo código `template_server.rb` que el inicio rápido [Configuración del entorno de desarrollo](/apps/quickstart-guides/setting-up-your-development-environment/). **Nota:** A medida que sigas el inicio rápido [Configuración del entorno de desarrollo](/apps/quickstart-guides/setting-up-your-development-environment/), asegúrate de usar los archivos del proyecto incluidos en el repositorio [Uso de la API de GitHub en la aplicación](https://github.com/github-developer/using-the-github-api-in-your-app).

  Consulta la sección [Solución de problemas](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting) si tienes problemas para configurar la aplicación de plantilla de GitHub.

## Crear la app

Ahora que estás familiarizado con el código `template_server.rb`, crearás código que agrega automáticamente la etiqueta `needs-response` a todas las propuestas abiertas en el repositorio en el que está instalada la aplicación.

El archivo `template_server.rb` contiene código de plantilla de aplicación que aún no se ha personalizado. En este archivo, verás código de marcador de posición para gestionar eventos de webhook y algún otro tipo de código para inicializar el cliente de Octokit.rb.

{% note %}

**Nota:** `template_server.rb` contiene muchos comentarios de código que complementan esta guía y explican detalles técnicos adicionales. Es posible que le resulte útil leer los comentarios de ese archivo ahora, antes de continuar con esta sección, para obtener resumen de cómo funciona el código.

El código personalizado final que crearás al final de esta guía se proporciona en [`server.rb`](https://github.com/github-developer/using-the-github-api-in-your-app/blob/master/server.rb). Pero, ¡intenta esperar hasta que termines para darle un vistazo!

{% endnote %}

Estos son los pasos que tendrás que completar para crear tu primer GitHub App:

1. [Actualización de los permisos de la aplicación](#step-1-update-app-permissions)
2. [Agregar la gestión de eventos](#step-2-add-event-handling)
3. [Creación de una nueva etiqueta](#step-3-create-a-new-label)
4. [Agregar la gestión de etiquetas](#step-4-add-label-handling)

## Paso 1. Actualización de los permisos de la aplicación

Cuando [registraste por primera vez la aplicación](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app), aceptaste los permisos predeterminados, lo que significa que la aplicación no tiene acceso a la mayoría de los recursos. Para este ejemplo, tu app necesitará el permiso para leer los informes de problemas y escribir etiquetas.

Para actualizar los permisos de tu app:

1. Selecciona la aplicación en la [página de configuración de la aplicación](https://github.com/settings/apps) y haz clic en **Permisos y webhooks** en la barra lateral.
1. En la sección "Permisos", busca "Propuestas" y, al lado, selecciona **Lectura y escritura** en la lista desplegable "Acceso". La descripción dice que esta opción otorga acceso tanto a informes de problemas como a etiquetas, que es exactamente lo que buscas.
1. En la sección "Suscribirse a eventos", selecciona **Propuestas** para suscribirte al evento.
{% data reusables.apps.accept_new_permissions_steps %}

Magnífico. Tu app tiene permiso para realizar las tareas que quieres que haga. Ahora puedes agregar el código para que funcione.

## Paso 2. Agregar la gestión de eventos

Lo primero que tiene que hacer tu app es escuchar si se han abierto informes de problemas nuevos. Ahora que te has suscrito al evento **Propuestas**, empezarás a recibir el webhook [`issues`](/webhooks/event-payloads/#issues), que se desencadena cuando se producen determinadas acciones relacionadas con la propuesta. Puedes filtrar este tipo de evento para la acción específica que quieres en tu código.

GitHub envía cargas de webhook como solicitudes `POST`. Dado que has reenviado las cargas de webhook de Smee a `http://localhost/event_handler:3000`, el servidor recibirá las cargas de solicitud `POST` en la ruta `post '/event_handler'`.

Ya se incluye una ruta vacía `post '/event_handler'` en el archivo `template_server.rb`, que has descargado en la sección de [requisitos previos](#prerequisites). La ruta vacía se ve así:

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

Use esta ruta para controlar el evento `issues`; para ello, agregue el código siguiente:

``` ruby
case request.env['HTTP_X_GITHUB_EVENT']
when 'issues'
  if @payload['action'] === 'opened'
    handle_issue_opened_event(@payload)
  end
end
```

Cada evento que GitHub envía incluye un encabezado de solicitud denominado `HTTP_X_GITHUB_EVENT`, que indica el tipo de evento en la solicitud `POST`. En este momento, solo te interesan los tipos de eventos `issues`. Cada evento tiene un campo `action` adicional que indica el tipo de acción que ha activado los eventos. Para `issues`, el campo `action` puede ser `assigned`, `unassigned`, `labeled`, `unlabeled`, `opened`, `edited`, `milestoned`, `demilestoned`, `closed` o `reopened`.

Para probar tu gestor de eventos, intenta agregar un método auxiliar temporal. Se actualizará más adelante cuando [agregues la gestión de etiquetas](#step-4-add-label-handling). Por ahora, agrega el código siguiente dentro de la sección `helpers do` del código. Puedes poner el método nuevo arriba o abajo de cualquiera de los métodos auxiliares. El orden no importa.

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

Este método recibe una carga útil de evento formateada con JSON a manera de argumento. Esto significa que puedes analizar la carga útil en el método y profundizar hacia cualquier tipo de datos específico que necesites. Es posible que te resulte útil inspeccionar la carga completa en algún momento: intenta cambiar `logger.debug 'An issue was opened!` a `logger.debug payload`. La estructura de carga que verás debe coincidir con lo que [se muestra en la documentación del evento de webhook `issues`](/webhooks/event-payloads/#issues).

Magnífico. Es momento de probar los cambios.

{% data reusables.apps.sinatra_restart_instructions %}

En tu buscador, visita el repositorio en donde instalaste tu app. Abre un informe de problemas nuevo en este repositorio. El informe de problemas puede decir lo que gustes. Esto es solo para hacer la prueba.

Al mirar de nuevo el terminal, deberías ver un mensaje en la salida que dice "`An issue was opened!` ¡Felicidades!". Acabas de agregar un gestor de eventos a tu app. 💪

## Paso 3. Creación de una nueva etiqueta

Bien, tu app puede decirte qué informes de problemas están abiertos. Ahora quieres que agregue la etiqueta `needs-response` a cualquier nueva propuesta abierta en un repositorio en el que la aplicación está instalada.

Para _poder agregar_ la etiqueta en cualquier lugar, deberás _crear_ la etiqueta personalizada en el repositorio. Solo necesitas hacer esto una vez. Para fines de esta guía, crea la etiqueta manualmente en GitHub. En el repositorio, haz clic en **Propuestas**, luego en **Etiquetas** y, por último, en **Nueva etiqueta**. Asigna el nombre `needs-response` a la etiqueta nueva.

{% tip %}

**Sugerencia**: ¿No sería genial si la aplicación pudiera crear la etiqueta mediante programación? [¡Sí puede!](/rest/reference/issues#create-a-label) Intenta agregar tú mismo el código para que lo haga después de que completes los pasos en esta guía.

{% endtip %}

Ahora que la etiqueta existe, puedes programar la aplicación para que use la API de REST para [agregar la etiqueta a cualquier propuesta recién abierta](/rest/reference/issues#add-labels-to-an-issue).

## Paso 4. Agregar la gestión de etiquetas

Felicidades—llegste al último paso: agregar la gestión de etiquetas a tu app. Para esta tarea, querrás usar la [biblioteca de Ruby Octokit.rb](http://octokit.github.io/octokit.rb/).

En la documentación de Octokit.rb, busca la lista de [métodos de etiqueta](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html). El método que querrás usar es [`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method).

De nuevo en `template_server.rb`, busca el método que has definido anteriormente:

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

La documentación de [`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method) muestra que deberás pasar tres argumentos a este método:

* Repositorio (cadena en formato `"owner/name"`)
* Número de informe de problemas (número entero)
* Etiquetas (matriz)

Puedes analizar la carga útil para obtener tanto el repo y el número de informe de problemas. Dado que el nombre de la etiqueta siempre será el mismo (`needs-response`), puedes pasarlo como una cadena codificada de forma rígida en la matriz de etiquetas. Al juntar estas piezas, tu método actualizado se podría ver más o menos así:

``` ruby
# When an issue is opened, add a label
def handle_issue_opened_event(payload)
  repo = payload['repository']['full_name']
  issue_number = payload['issue']['number']
  @installation_client.add_labels_to_an_issue(repo, issue_number, ['needs-response'])
end
```

¡Intenta abrir un informe de problemas nuevo en tu repositorio de prueba y ver lo que pasa! Si no pasa nada de inmediato, intenta actualizarlo.

No verás mucho contenido en el terminal, _pero_ deberías ver que el usuario bot ha agregado una etiqueta a la propuesta.

{% note %}

**Nota:** Cuando las aplicaciones de GitHub realizan acciones a través de la API, como agregar etiquetas, GitHub muestra estas acciones como si las realizaran cuentas de _bot_. Para obtener más información, consulta "[Comparación entre cuentas de máquina y cuentas de bot](/apps/differences-between-apps/#machine-vs-bot-accounts)".

{% endnote %}

Si es así, ¡felicidades! ¡Has creado una app funcional exitosamente! 🎉

Puedes ver el código final en `server.rb` en el [repositorio de plantillas de la aplicación](https://github.com/github-developer/using-the-github-api-in-your-app).

Consulta "[Pasos siguientes](#next-steps)" para obtener ideas sobre cómo puedes continuar.

## Solución de problemas

Aquí te mostramos algunos problemas comunes y algunas soluciones sugeridas. Si te encuentras con cualquier otro problema, puedes pedir ayuda o consejo en el {% data variables.product.prodname_support_forum_with_url %}.

* **P:** Mi servidor no escucha eventos. El cliente de Smee está ejecutándose en una ventana de la terminal, y estoy enviando eventos en GitHub.com mediante la apertura de informes de problemas nuevos, pero no veo ninguna salida en la ventana de la terminal en donde estoy ejecutando el servidor.

    **R:** Es posible que no tengas el dominio de Smee correcto en la configuración de la aplicación. Visita la [página de configuración de la aplicación](https://github.com/settings/apps) y vuelve a comprobar los campos que se muestran en "[Registrar una nueva aplicación con GitHub](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app)". Asegúrate de que el dominio de esos campos coincida con el dominio que has usado en el comando `smee -u <unique_channel>` en "[Inicio de un nuevo canal Smee](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel)".

* **P:** Mi aplicación no funciona. Abrí un nuevo informe de problemas, pero aún después de actualizar, no se le ha agregado ninguna etiqueta.

    **R:** Asegúrate de que todo lo siguiente sea cierto:

    * Has [instalado la aplicación](/apps/quickstart-guides/setting-up-your-development-environment/#step-7-install-the-app-on-your-account) en el repositorio en el que vas a abrir la propuesta.
    * El [cliente Smee se ejecuta](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel) en una ventana del Terminal.
    * El [servidor web se ejecuta](/apps/quickstart-guides/setting-up-your-development-environment/#step-6-start-the-server) sin errores en otra ventana del Terminal.
    * La aplicación tiene [permisos de lectura y escritura en propuestas y está suscrita a eventos de propuesta](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel).
    * Has [comprobado el correo electrónico](#step-1-update-app-permissions) después de actualizar los permisos y has aceptado los nuevos permisos.

## Conclusión

Después de seguir esta guía, ¡habrás aprendido los fundamentos básicos para desarrollar GitHub Apps! Para hacer una revisión:

* Programaste tu app para escuchar eventos
* Utilizaste la biblioteca de Octokit para hacer operaciones de la API de REST

## Pasos siguientes

Aquí tienes algunas ideas para lo que puedes hacer después:

* [Vuelve a escribir la aplicación con GraphQL](https://developer.github.com/changes/2018-04-30-graphql-supports-github-apps/).
* Vuelve a escribir la aplicación en Node.js con [Probot](https://github.com/probot/probot).
* Haz que la aplicación compruebe si la etiqueta `needs-response` ya existe en la propuesta y, si no es así, agrégala.
* Cuando el bot agregue la etiqueta exitosamente, muestra un mensaje en la terminal. (Pista: compara la ID de la etiqueta `needs-response` con la ID de la etiqueta en la carga útil como una condición para tu mensaje, para que así, el mensaje solo muestre cuando la etiqueta relevante se agregue y no lo haga con otra etiqueta).
* Agrega una página de aterrizaje a la aplicación y conecta una [ruta de Sinatra](https://github.com/sinatra/sinatra#routes) para ella.
* Migra tu código a un servidor hospedado (como Heroku). No olvides actualizar la configuración de tu app con el dominio nuevo.
* Comparte el proyecto u obtén consejos en {% data variables.product.prodname_support_forum_with_url %}{% ifversion fpt or ghec %}
* ¿Has creado una nueva y reluciente app que crees que pueda ser útil para otros? [Agrégala a GitHub Marketplace](/apps/marketplace/creating-and-submitting-your-app-for-approval/).{% endif %}
