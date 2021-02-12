---
title: Repositorios
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/repos
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Ramas

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'branches' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Colaboradores

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'collaborators' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Comentarios

### Tipos de medios personalizados para los comentarios de las confirmaciones

Estos son los tipos de medios compatibles para los comentarios de las confirmaciones. Puedes leer más acerca del uso de los tipos de medios en la API [aquí](/rest/overview/media-types).

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

Para obtener más información, consulta la sección "[Tipos de medios personalizados](/rest/overview/media-types)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Confirmaciones

La API de Confirmaciones del Repositorio puede listar, ver y comparar las confirmaciones de un repositorio.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'commits' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" %}
## Comunidad

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'community' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## Contenido

Las terminales de esta API te permiten crear, modificar y borrar contenido cifrado en Base64 en un repositorio. Para solicitar el formato sin procesar y interpretado en HTML (cuando sea posible), utiliza los tipos de medios personalizados para el contenido de un repositorio.

### Tipos de medios personalizados para el contenido de un repositorio

Los [README](/rest/reference/repos#get-a-repository-readme), [archivos](/rest/reference/repos#get-repository-content), y [symlinks](/rest/reference/repos#get-repository-content) son compatibles con los siguientes tipos de medios:

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.html

Utiliza el tipo de medios `.raw` para recuperar el contenido del archivo.

Para archivos de markup tales como Markdown o AsciiDoc, puedes recuperar la interpretación en HTML si utilizas el tipo de medios `.html`. Los lenguajes de Markup se interpretan en HTML utilizando nuestra [biblioteca de Markup](https://github.com/github/markup) de código abierto.

[Todos los objetos](/rest/reference/repos#get-repository-content) son compatibles con los siguientes tipos de medios personalizados:

    application/vnd.github.VERSION.object

Utiliza el parámetro de tipo de medios `object` para recuperar el contenido en un formato de objeto consistente sin importar el tipo de contenido. Por ejemplo, en vez de ser una matriz de objetos para un directorio, la respuesta será un objeto con un atributo de `entries` que contenga la matriz de objetos.

Puedes leer más acerca del uso de tipos de medios en la API [aquí](/rest/overview/media-types).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'contents' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Llaves de implementación

{% data reusables.repositories.deploy-keys %}

Las llaves de despliegue pueden ya sea configurarse utilizando las siguientes terminales de la API, o mediante GitHub. Para aprender cómo configurar las llaves de despliegue en GitHub, consulta la sección "[Administrar las llaves de despliegue](/developers/overview/managing-deploy-keys)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'keys' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Implementaciones

Los despliegues son slicitudes para desplegar una ref específica (rma, SHA, etiqueta). GitHub despliega un [evento de `deployment`](/developers/webhooks-and-events/webhook-events-and-payloads#deployment) al que puedan escuchar los servicios externos y al con el cual puedan actuar cuando se creen los despliegues nuevos. Los despliegues habilitan a los desarrolladores y a las organizaciones para crear herramientas sin conexión directa en torno a los despliegues, sin tener que preocuparse acerca de los detalles de implementación de entregar tipos de aplicaciones diferentes (por ejemplo, web o nativas).

Los estados de despliegue permiten que los servicios externos marquen estos despliegues con un estado de `error`, `failure`, `pending`, `in_progress`, `queued`, o `success` que pueden consumir los sistemas que escuchan a los [eventos de `deployment_status`](/developers/webhooks-and-events/webhook-events-and-payloads#deployment_status).

Los estados de despliegue también incluyen una `description` y una `log_url` opcionales, las cuales se recomiendan ampliamente, ya que hacen que los estados de despliegue sean más útiles. La `log_url` es la URL completa para la salida del despliegue, y la `description` es el resumen de alto nivel de lo que pasó con este despliegue.

GitHub envía eventos de `deployment` y `deployment_status` cuando se crean despliegues y estados de despliegue nuevos. Estos eventos permiten que las integraciones de terceros reciban respuesta de las solicitudes de despliegue y actualizan el estado de un despliegue conforme éste progrese.

Debajo encontrarás un diagrama de secuencia simple que explica cómo funcionarían estas interacciones.

```
+---------+             +--------+            +-----------+        +-------------+
| Tooling |             | GitHub |            | 3rd Party |        | Your Server |
+---------+             +--------+            +-----------+        +-------------+
     |                      |                       |                     |
     |  Create Deployment   |                       |                     |
     |--------------------->|                       |                     |
     |                      |                       |                     |
     |  Deployment Created  |                       |                     |
     |<---------------------|                       |                     |
     |                      |                       |                     |
     |                      |   Deployment Event    |                     |
     |                      |---------------------->|                     |
     |                      |                       |     SSH+Deploys     |
     |                      |                       |-------------------->|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
     |                      |                       |   Deploy Completed  |
     |                      |                       |<--------------------|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
```

Ten en cuenta que GitHub jamás accede a tus servidores realmente. La interacción con los eventos de despliegue dependerá de tu integración de terceros. Varios sistemas pueden escuchar a los eventos de despliegue, y depende de cada uno de ellos decidir si son responsables de cargar el código a tus servidores, si crean código nativo, etc.

Nota que el [alcance de OAuth](/developers/apps/scopes-for-oauth-apps) `repo_deployment`concede acceso dirigido a los despliegues y estados de despliegue **sin** otorgar acceso al código del repositorio, mientras que los alcances `public_repo` y `repo` otorgan permiso para el código también.

### Despliegues inactivos

Cuando configuras el estado de un despliegue como `success`, entonces todos los despliegues de ambiente no productivos y no transitorios previos en el mismo repositorio se pondrán como `inactive`. Para evitar esto, puedes configurar a `auto_inactive` como `false` cuando creas el estado del servidor.

Puedes comunicar que un ambiente transitorio ya no existe si configuras el `state` como `inactive`.  El configurar al `state` como `inactive`muestra el despliegue como `destroyed` en {% data variables.product.prodname_dotcom %} y elimina el acceso al mismo.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'deployments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Bifurcaciones

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'forks' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Invitaciones

La API de Invitaciones al Repositorio permite a los usuarios o a los servicios externos invitar a otros usuarios para colaborar en un repositorio. Los usuarios invitados (o los servicios externos en nombre de estos) pueden elegir aceptar o rechazar la invitación.

Toma en cuenta que el [alcance de OAuth](/developers/apps/scopes-for-oauth-apps) `repo:invite` otorga un acceso dirigido a las invitaciones **sin** otorgar también el acceso al código del repositorio, mientras que el alcance `repo` otorga permisos para el código así como para las invitaciones.

### Invitar a un usuario a un repositorio

Utiliza la terminal de la API para agregar un colaborador. Para obtener más información, consulta la sección "[Agregar un colaborador del repositorio](/rest/reference/repos#add-a-repository-collaborator)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'invitations' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Fusionar

La API de Fusión de Repositorios puede fusionar ramas en un repositorio. Esto logra esencialmente lo mismo que el fusionar una rama con otra en un repositorio local para después cargarlo a {% data variables.product.product_name %}. El beneficio es que esta fusión se lleva a cabo del lado del servidor y no se requiere un repositorio local. Esto lo hace más adecuado para la automatización y para otras herramientas mientras que el mantener repositorios locales sería incómodo e ineficiente.

El usuario autenticado será el autor de cualquier fusión que se realice a través de esta terminal.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'merging' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Pages

La API de {% data variables.product.prodname_pages %} recupera información sobre tu configuración de {% data variables.product.prodname_pages %} y sobre los estados de tus compilaciones. La información sobre este sitio y sobre las compilaciones solo es accesible mediante los propietarios autenticados, aún cuando los sitios web son públicos. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_pages %}](/github/working-with-github-pages/about-github-pages)".

En las terminales de la API de {% data variables.product.prodname_pages %} que llevan una clave de `status` en su respuesta, el valor puede ser uno de entre los siguientes:
* `null`: El sitio aún tiene que crearse.
* `queued`: Se solicitó la compilación, pero no ha iniciado.
* `building`: La compilación está en curso.
* `built`: Se creó el sitio.
* `errored`: Indica que ocurrió un error durante la compilación.

En las terminales de la API de {% data variables.product.prodname_pages %} que devulenven información del sitio de GitHub Pages, las respuestas de JSON incluyen estos campos:
* `html_url`: La URL absoluta (incluyendo el modelo) del sitio de Páginas que se interpretó. Por ejemplo, `https://username.github.io`.
* `source`: Un objeto que contiene la rama origen y el directorio del sitio de Páginas que se interpretó. Esto incluye:
   - `branch`: La rama del repositorio que se utilizó para publicar los [archivos de código fuente de tu sitio](/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Por ejemplo, _main_ o _gh-pages_.
   - `path`: El directorio del repositorio desde el cual publica el sitio. Podría ser `/` o `/docs`.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pages' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Lanzamientos

{% note %}

**Nota:** La API de Lanzamientos reemplaza a la API de Descargas. Puedes recuperar el conteo de descargas y la URL de descarga del buscador desde las terminales en esta API, las cuales devuelven los lanzamientos y los activos de éstos.

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'releases' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Estadísticas

La API de Estadísticas del Repositorio te permite recuperar los datos que {% data variables.product.product_name %} utiliza para visualizar los diferentes tipos de actividad del repositorio.

### Unas palabras sobre el almacenamiento en caché

El calcular las estadísitcas del repositorio es una operación costosa, así que intentamos devolver los datos almacenados en caché cuando nos es posible.  Si los datos no se han almacenado en caché cuando consultas la estadística de un repositorio, recibirás una respuesta `202`; también se dispara un job en segundo plano para comenzar a compilar estas estadísticas. Permite que el job se complete, y luego emite la solicitud nuevamente. Si el job ya terminó, esa solicitud recibirá una respuesta `200` con la estadística en el cuerpo de la respuesta.

El SHA de la rama predeterminada del repositorio guarda en caché las estadísticas del repositorio; el subir información a la rama predeterminada restablece el caché de de las estadísticas.

### Las estadísticas excluyen algunos tipos de confirmaciones

Las estadísticas que expone la API empatan con aquellas que muestran [diversas gráficas del repositorio](/github/visualizing-repository-data-with-graphs/about-repository-graphs).

Para resumir:
- Todas las estadísticas excluyen las confirmaciones de fusión.
- Las estadísticas del colaborador también excluyen a las confirmaciones vacías.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'statistics' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Estados

La API de estados permite que los servicios externos marquen las confirmaciones con un estado de `error`, `failure`, `pending`, o `success`, el cual se refleja después en las solicitudes de extracción que involucran a esas confirmaciones.

Los estados también incluyen una `description` y una `target_url` opcionales, y recomendamos ampliamente proporcionarlas, ya que hacen mucho más útiles a los estados en la IU de GitHub.

Como ejemplo, un uso común es que los servicios de integración contínua marquen a las confirmaciones como compilaciones que pasan o fallan utilizando los estados.  La `target_url` sería la URL completa de la salida de la compilación, y la `description` sería el resumen de alto nivel de lo que pasó con la compilación.

Los estados pueden incluir un `context` para indicar qué servicio está proporcionando ese estado. Por ejemplo, puedes hacer que tu servicio de integración continua cargue estados con un contexto de `ci`, y que una herramienta de auditoria de seguridad cargue estados con un contexto de `security`.  Puedes utilizar entonces el [Obtener el estado combinado para una referencia específica](/rest/reference/repos#get-the-combined-status-for-a-specific-reference) para recuperar todo el estado de una confirmación.

Toma en cuenta que el [alcance de OAuth](/developers/apps/scopes-for-oauth-apps) de `repo:status` otorga acceso dirigido a los estados **sin** otorgar también el acceso al código del repositorio, mientras que el alcance `repo` otorga permisos para el código y también para los estados.

Si estás desarrollando una GitHub App y quieres proporcionar información más detallada sobre un servicio externo, tal vez quieras utilizar la [API de Verificaciones](/rest/reference/checks).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'statuses' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" %}
## Tráfico

Para los repositorios en los que tienes acceso de carga, la API de tráfico proporciona acceso a la información proporcionada en tu gráfica de repositorio. Para obtener más información, consulta la sección "<a href="/github/visualizing-repository-data-with-graphs/viewing-traffic-to-a-repository" class="dotcom-only">Ver el tráfico de un repositorio</a>."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'traffic' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}

## Webhooks

La API de Webhooks del Repositorio le permite a los administradoresd e un repositorio administrar los ganchos de post-recepción para el mismo. Los webhooks se pueden administrar utilizando la API de HTTP de JSON, o la API de [PubSubHubbub](#PubSubHubbub).

Si te gustaría configurar un solo webhook para recibir eventos de todos los repositorios de tu organización, consulta nuestra documentación de la API para los [Webhooks de una Organización](/rest/reference/orgs#webhooks).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

### Recibir Webhooks

Para que {% data variables.product.product_name %} envíe cargas útiles de webhooks, se necesita que se pueda acceder a tu servidor desde la internet. También sugerimos ampliamente utilizar SSL para que podamos enviar cargas útiles cifradas a través de HTTPS.

#### Encabezados de Webhook

{% data variables.product.product_name %} enviará varios encabezados de HTTP para diferenciar los tipos de eventos y los identificadores de las cargas útiles. Consulta la sección de [encabezados de webhook](/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers) para encontrar más detalles.

### PubSubHubbub

GitHub también puede fungir como un centro de [PubSubHubbub](https://github.com/pubsubhubbub/PubSubHubbub) para todos los repositorios. PSHB es un proptocolo simple de publicación/suscripción que permite a los servidores registrarse para recibir actualizaciones de cuándo se actualiza un tema. Las actualizaciones se mandan con una solicitud HTTP de tipo POST a una URL de rellamado. Las URL de tema para las cargas a un repositorio de GitHub están en este formato:

`https://github.com/{owner}/{repo}/events/{event}`

El veneto puede ser cualquier evento de webhook disponible. Para obtener más información, consulta la sección "[eventos y cargas útiles de los webhooks](/developers/webhooks-and-events/webhook-events-and-payloads)".

#### Formato de respuesta

El formato predeterminado es lo que [deberían esperar los ganchos de pre-recepción existentes](/post-receive-hooks/): Un cuerpo de JSON que se envía como parámetro de `payload` en un POST.  También puedes especificar si quieres recibir el cuerpo en JSON sin procesar, ya sea un encabezado de `Accept` o una extensión `.json`.

    Accept: application/json
    https://github.com/{owner}/{repo}/events/push.json

#### URL de Rellamado
Las URL de rellamado puede utilizar el protocolo `http://`.

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}También puedes hacer rellamados de `github://` para especificar un servicio de GitHub.
{% data reusables.apps.deprecating_github_services_ghe %}
{% endif %}

    # Send updates to postbin.org
    http://postbin.org/123

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}
    # Send updates to Campfire github://campfire?subdomain=github&room=Commits&token=abc123
{% endif %}

#### Suscribirse

La terminal de PubSubHubbub de GitHub es: `{% data variables.product.api_url_code %}/hub`. Una solicitud exitosa con curl se vería así:

``` shell
curl -u "user" -i \
  {% data variables.product.api_url_pre %}/hub \
  -F "hub.mode=subscribe" \
  -F "hub.topic=https://github.com/{owner}/{repo}/events/push" \
  -F "hub.callback=http://postbin.org/123"
```

Las solicitudes de PubSubHubbub pueden enviarse varias veces. Si el gancho ya existe, se modificará de acuerdo con la solicitud.

##### Parámetros

| Nombre         | Type        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hub.mode`     | `secuencia` | **Requerido**. Ya sea `subscribe` o `unsubscribe`.                                                                                                                                                                                                                                                                                                                                                            |
| `hub.topic`    | `secuencia` | **Requerido**.  La URI del repositorio de GitHub al cual suscribirse.  La ruta debe estar en el formato `/{owner}/{repo}/events/{event}`.                                                                                                                                                                                                                                                                     |
| `hub.callback` | `secuencia` | La URI para recibir las actualizaciones del tema.                                                                                                                                                                                                                                                                                                                                                             |
| `hub.secret`   | `secuencia` | Una llave secreta compartida que genera un HMAC de SHA1 del contenido del cuerpo de salida.  Puedes verificar si una carga vino de GitHub si comparas el cuerpo de la solicitud sin procesar con el contenido del encabezado `X-Hub-Signature`. Puedes ver [la documentación de PubSubHubbub](https://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html#authednotify) para obtener más detalles. |
