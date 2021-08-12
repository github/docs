---
title: Utilizar la API de GitHub en tu app
intro: Aprende cómo configurar tu app para que escuche los eventos y utilice la biblioteca de Octokit para hacer operaciones de la API de REST.
redirect_from:
  - /apps/building-your-first-github-app/
  - /apps/quickstart-guides/using-the-github-api-in-your-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---


### Introducción

Esta guía te ayudará a crear una GitHub App y a ejecutarla en un servidor. La app que crees agregará una etiqueta a todos los informes de problemas nuevos que estén abiertos en el repositorio en donde ésta se instale.

Este proyecto te mostrará cómo hacer lo siguiente:

* Programar tu app para escuchar eventos
* Utilizar la biblioteca de Octokit para hacer operaciones de la API de REST

{% data reusables.apps.app-ruby-guides %}

Una vez que hayas seguido estos pasos, estarás listo para desarrollar otros tipos de integraciones utilizando la suite completa de las API de GItHub. {% if currentVersion == "free-pro-team@latest" %}Puedes revisar los ejemplos exitosos de las apps en [GitHub Marketplace](https://github.com/marketplace) y en [Funciona con GitHub](https://github.com/works-with).{% endif %}

### Prerrequisitos

Puede que te sea útil tener un entendimiento básico de lo siguiente:

* [GitHub Apps](/apps/about-apps)
* [Webhooks](/webhooks)
* [El lenguaje de programación Ruby](https://www.ruby-lang.org/en/)
* [Las API de REST](/rest)
* [Sinatra](http://sinatrarb.com/)

Pero puedes seguir esta guía sin importar tu nivel de experiencia. ¡Colocaremos enlaces para la información que requieras en cada fase!

Antes de que comiences, necesitas hacer lo siguiente:

1. Clona el repositorio [Utilizar la API de GitHub en tu app](https://github.com/github-developer/using-the-github-api-in-your-app).
  ```shell
    $ git clone https://github.com/github-developer/using-the-github-api-in-your-app.git
  ```

  Dentro del directorio, encontrarás un archivo de nombre `template_server.rb` con el código de plantilla que utilizarás en este inicio rápido, y un archivo llamado `server.rb` con el código del proyecto completo.

1. Sigue los pasos en la guía de inicio rápido "[Configurar tu ambiente de desarrollo](/apps/quickstart-guides/setting-up-your-development-environment/)" para configurar y ejecutar el servidor `template_server.rb` de la app. Si ya habías completado alguna guía de inicio rápido para las GitHub Apps diferente a aquella de [Configurar tu ambiente de desarrollo](/apps/quickstart-guides/setting-up-your-development-environment/), deberás registrar una GitHub App _nueva_ e iniciar un canal de Smee nuevo para utilizarlo con esta guía.

  Esta guía de inicio rápido incluye el mismo código de `template_server.rb` que aquella llamada [Configurar tu ambiente de desarrollo](/apps/quickstart-guides/setting-up-your-development-environment/). **Nota:** Mientras sigues la guía de inicio rápido de [Configurar tu ambiente de desarrollo](/apps/quickstart-guides/setting-up-your-development-environment/) asegúrate de utilizar los archivos de proyecto que se incluyen en el repositorio [Utilizar la API de GitHub para tu app](https://github.com/github-developer/using-the-github-api-in-your-app).

  Consulta la sección [Solución de problemas](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting) si te encuentras con algún problema al configurar tu GitHub App de plantilla.

### Crear la app

Ahora que estás familiarizado con el código de `template_server.rb`, vas a crear el código que agregará la etiqueta `needs-response` automáticamente a todos los informes de problemas que estén abiertos en el repositorio en donde se instale la app.

El archivo `template_server.rb` contiene el código de la plantilla de la app que no se ha personalizado aún. En este archivo, verás código de marcador de posición para gestionar eventos de webhook y algún otro tipo de código para inicializar el cliente de Octokit.rb.

{% note %}

**Nota:** El `template_server.rb` contiene muchos comentarios de código que complementan esta guía y explican detalles técnicos adicionales. Es posible que le resulte útil leer los comentarios de ese archivo ahora, antes de continuar con esta sección, para obtener resumen de cómo funciona el código.

El código personalizado final que crees al terminar esta guía se proporciona en el archivo [`server.rb`](https://github.com/github-developer/using-the-github-api-in-your-app/blob/master/server.rb). Pero, ¡intenta esperar hasta que termines para darle un vistazo!

{% endnote %}

Estos son los pasos que tendrás que completar para crear tu primer GitHub App:

1. [Actualizar los permisos de la app](#step-1-update-app-permissions)
2. [Agregar la gestión de eventos](#step-2-add-event-handling)
3. [Crear una etiqueta nueva](#step-3-create-a-new-label)
4. [Agregar la gestión de etiquetas](#step-4-add-label-handling)

### Paso 1. Actualizar los permisos de la app

Cuando [registraste tu app por primera vez](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app), aceptaste los permisos predeterminados, lo que significa que tu app no tiene acceso a la mayoría de los recursos. Para este ejemplo, tu app necesitará el permiso para leer los informes de problemas y escribir etiquetas.

Para actualizar los permisos de tu app:

1. Selecciona tu app de la [página de configuración de la app](https://github.com/settings/apps) y da clic en **Permisos & Webhooks** en la barra lateral.
1. En la sección de "Permisos", encuentra "Informes de problemas"; y selecciona **Lectura & Escritura** en el menú desplegable de "Acceso" que está a un costado. La descripción dice que esta opción otorga acceso tanto a informes de problemas como a etiquetas, que es exactamente lo que buscas.
1. En la sección "Suscribirse a los eventos", selecciona **Informes de problemas** para suscribirte a este evento.
{% data reusables.apps.accept_new_permissions_steps %}

¡Genial! Tu app tiene permiso para realizar las tareas que quieres que haga. Ahora puedes agregar el código para que funcione.

### Paso 2. Agregar la gestión de eventos

Lo primero que tiene que hacer tu app es escuchar si se han abierto informes de problemas nuevos. Ahora que te has suscrito alevento de **Informes de problemas**, comenzarás a recibir el webhook [`issues`](/webhooks/event-payloads/#issues), el cual se activa cuando ocurren algunas acciones relacionadas con los informes de problemas. Puedes filtrar este tipo de evento para la acción específica que quieres en tu código.

GitHub envía las cargas útiles de los webhooks como solicitudes de tipo `POST`. Ya que reenviaste las cargas útiles del webhook de Smee a `http://localhost/event_handler:3000`, tu servidor recibirá las cargas útiles de la solicitud de `POST` en la ruta `post '/event_handler'`.

Ya se incluye una ruta de `post '/event_handler'` vacía en el archivo `template_server.rb`, el cual descargaste en la sección de [prerrequisitos](#prerequisites). La ruta vacía se ve así:

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

Utiliza esta ruta para gestionar el evento `issues` agregando el siguiente código:

``` ruby
case request.env['HTTP_X_GITHUB_EVENT']
when 'issues'
  if @payload['action'] === 'opened'
    handle_issue_opened_event(@payload)
  end
end
```

Cada vento que envíe GitHub incluye un encabezado de solicitud que se llama `HTTP_X_GITHUB_EVENT`, el cual indica el tipo de evento en la solicitud de `POST`. Ahora mismo solo te interesan los tipos de evento `issues`. Cada evento tiene un campo adicional de `action` que indica el tipo de acción que activó los eventos. Para los `issues`, el campo de `action` puede estar como `assigned`, `unassigned`, `labeled`, `unlabeled`, `opened`, `edited`, `milestoned`, `demilestoned`, `closed`, o `reopened`.

Para probar tu gestor de eventos, intenta agregar un método auxiliar temporal. Lo actualizarás más adelante cuando [Agregues la gestión de etiquetas](#step-4-add-label-handling). Por ahora, agrega el siguiente código dentro de la sección `helpers do` del mismo. Puedes poner el método nuevo arriba o abajo de cualquiera de los métodos auxiliares. El orden no importa.

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

Este método recibe una carga útil de evento formateada con JSON a manera de argumento. Esto significa que puedes analizar la carga útil en el método y profundizar hacia cualquier tipo de datos específico que necesites. Podría parecerte útil el inspeccionar totalmente la carga útil en algún memoento: intenta cambiar el mensaje `logger.debug 'An issue was opened!` a `logger.debug payload`. La estructura de la carga útil que ves deberá coincidir con lo que [se muestra en los documentos del evento de webhook `issues`](/webhooks/event-payloads/#issues).

¡Genial! Es momento de probar los cambios.

{% data reusables.apps.sinatra_restart_instructions %}

En tu buscador, visita el repositorio en donde instalaste tu app. Abre un informe de problemas nuevo en este repositorio. El informe de problemas puede decir lo que gustes. Esto es solo para hacer la prueba.

Cuando regreses a ver tu terminal, deberás ver un mensaje en la salida, el cual diga, `An issue was opened!` ¡Felicidades! Acabas de agregar un gestor de eventos a tu app. 💪

### Paso 3. Crear una etiqueta nueva

Bien, tu app puede decirte qué informes de problemas están abiertos. Ahora querrás que agregue la etiqueta `needs-response` a cualquier informe de problemas nuevo que esté abierto en el repositorio en donde se instale.

Antes de que puedas _agregar_ la etiqueta a alguna parte, necesitarás _crear_ la etiqueta personalizada en tu repositorio. Solo necesitas hacer esto una vez. Para fines de esta guía, crea la etiqueta manualmente en GitHub. En tu repositorio, da clic en **Informes de problemas**, luego en **Etiquetas**, y después da clic en **Etiqueta nueva**. Nombra la nueva etiqueta como `needs-response`.

{% tip %}

**Tip**: ¿No sería genial si tu app pudiera crear la etiqueta mediante programación? Pues ¡[Puede hacerlo](/rest/reference/issues#create-a-label)! Intenta agregar tú mismo el código para que lo haga después de que completes los pasos en esta guía.

{% endtip %}

Ahora que existe la etiqueta, puedes programar tu app para que utilice la API de REST para [agregar la etiqueta a cualquier informe de problemas recién abierto](/rest/reference/issues#add-labels-to-an-issue).

### Paso 4. Agregar la gestión de etiquetas

Felicidades—llegste al último paso: agregar la gestión de etiquetas a tu app. Para esta tarea, querrás utilizar la [Biblioteca Ocktokit.rb de Ruby](http://octokit.github.io/octokit.rb/).

En los documentos de Octokit, encuentra una lista de los [métodos de las etiquetas](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html). El método que necesitarás usar es [`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method).

Una vez de regreso en el `template_server.rb`, encuentra el método que definiste previamente:

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

Los documentos de [`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method) te muestran que necesitarás pasar tres argumentos en este método:

* Repo (secuencia en formato `"owner/name"`)
* Número de informe de problemas (número entero)
* Etiquetas (matriz)

Puedes analizar la carga útil para obtener tanto el repo y el número de informe de problemas. Ya que el nombre de la etiqueta siempre será el mismo (`needs-response`), podrás pasarlo como una secuencia fijada en la matriz de etiquetas. Al juntar estas piezas, tu método actualizado se podría ver más o menos así:

``` ruby
# When an issue is opened, add a label
def handle_issue_opened_event(payload)
  repo = payload['repository']['full_name']
  issue_number = payload['issue']['number']
  @installation_client.add_labels_to_an_issue(repo, issue_number, ['needs-response'])
end
```

¡Intenta abrir un informe de problemas nuevo en tu repositorio de prueba y ver lo que pasa! Si no pasa nada de inmediato, intenta actualizarlo.

No verás mucho en la terminal, _pero_ deberías ver que el usuario bot agregó la etiqueta al informe de problemas.

{% note %}

**Nota:** Cuando las GitHub Apps toman acciones a través de la API, tales como agregar etiquetas, GitHub muestra estas acciones como si las cuentas _bot_ las realizaran. Para obtener más información, consulta la sección "[Cuentas de máquina vs cuentas de bot](/apps/differences-between-apps/#machine-vs-bot-accounts)".

{% endnote %}

Si es así, ¡felicidades! ¡Has creado una app funcional exitosamente! 🎉

Puedes ver el código final en el `server.rb` dentro del [repositorio de plantilla de app](https://github.com/github-developer/using-the-github-api-in-your-app).

Consulta la sección "[Pasos siguientes](#next-steps)" para obtener ideas de qué puedes hacer después.

### Solución de problemas

Aquí te presentamos algunos problemas comunes y sus soluciones sugeridas. Si te encuentras con cualquier otro problema, puedes pedir ayuda o consejos en el {% data variables.product.prodname_support_forum_with_url %}.

* **P:** ¡Mi servidor no está escuchando los eventos! El cliente de Smee está ejecutándose en una ventana de la terminal, y estoy enviando eventos en GitHub.com mediante la apertura de informes de problemas nuevos, pero no veo ninguna salida en la ventana de la terminal en donde estoy ejecutando el servidor.

    **R:** Tal vez no tengas el dominio correcto de Smee en la configuración de tu app. Visita tu [página de configuración de la app](https://github.com/settings/apps) y vuelve a revisar los campos que se muestran en "[Registrar una app nueva con GitHub](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app)". Asegúrate que el dominio en estos campos empate con el dominio que utilizaste en tu comando de `smee -u <unique_channel>` en "[Iniciar un canal de Smee nuevo](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel)".

* **P:** ¡Mi app no funciona! Abrí un nuevo informe de problemas, pero aún después de actualizar, no se le ha agregado ninguna etiqueta.

    **R:** Asegúrate de que hayas hecho todo lo siguiente:

    * [Instalaste la app](/apps/quickstart-guides/setting-up-your-development-environment/#step-7-install-the-app-on-your-account) en el repositorio en donde estás abriendo el informe de problemas.
    * Tu [cliente de Smee se está ejecutando](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel) en una ventana de la terminal.
    * Tu [servidor web se está ejecutando](/apps/quickstart-guides/setting-up-your-development-environment/#step-6-start-the-server) sin errores en otra ventana de la terminal.
    * Tu app tiene permisos de [lectura & escritura en los informes de problemas y está suscrita a los eventos de los mismos](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel).
    * [Revisaste tu cuenta de correo electrónico](#step-1-update-app-permissions) después de actualizar los permisos y aceptaste los permisos nuevos.

### Conclusión

Después de seguir esta guía, ¡habrás aprendido los fundamentos básicos para desarrollar GitHub Apps! Para revisar todo, debes:

* Programaste tu app para escuchar eventos
* Utilizaste la biblioteca de Octokit para hacer operaciones de la API de REST

### Pasos siguientes

Aquí tienes algunas ideas para lo que puedes hacer después:

* ¡[Vuelve a escribir tu app utilizando GraphQL](https://developer.github.com/changes/2018-04-30-graphql-supports-github-apps/)!
* ¡Vuelve a escribir tu app en Node.js utilizando al [Probot](https://github.com/probot/probot)!
* Haz que la app revise si la etiqueta `needs-response` ya existe en el informe de problemas, y si no, agrégala.
* Cuando el bot agregue la etiqueta exitosamente, muestra un mensaje en la terminal. (Pista: compara la ID de la etiqueta `needs-response` con la ID de la etiqueta en la carga útil como una condición para tu mensaje, para que así, el mensaje solo muestre cuando la etiqueta relevante se agregue y no lo haga con otra etiqueta).
* Agrega una página de llegada para tu app y conéctale una [Ruta de Sinatra](https://github.com/sinatra/sinatra#routes).
* Migra tu código a un servidor hospedado (como Heroku). No olvides actualizar la configuración de tu app con el dominio nuevo.
* Comparte tu proyecto u obtén consejos en el {% data variables.product.prodname_support_forum_with_url %}{% if currentVersion == "free-pro-team@latest" %}
* ¿Has creado una nueva y reluciente app que crees que pueda ser útil para otros? ¡[Agrégala a GitHub Marketplace](/apps/marketplace/creating-and-submitting-your-app-for-approval/)!{% endif %}
