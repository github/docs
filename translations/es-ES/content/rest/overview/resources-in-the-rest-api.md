---
title: Recursos en la API de REST
intro: 'Aprende como navegar en los recursos que proporciona la API de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /rest/initialize-the-repo/
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


Esto describe los recursos que conforman la API de REST oficial de {% data variables.product.product_name %}. Si tienes cualquier tipo de problema o solicitud, por favor contacta a {% data variables.contact.contact_support %}.

### Versión actual

Predeterminadamente, todas las solicitudes a `{% data variables.product.api_url_code %}` reciben la [versión](/developers/overview/about-githubs-apis)**v3** de la API de REST. Te alentamos a [solicitar explícitamente esta versión a través del encabezado `Aceptar`](/rest/overview/media-types#request-specific-version).

    Accept: application/vnd.github.v3+json

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt '2.9' %}

Para obtener información acerca de la API de GraphQL de GitHub, consulta la [documentación de la V4](/graphql). Para obtener más información acerca de migrarse a GraphQL, consulta la sección "[Migrarse desde REST](/graphql/guides/migrating-from-rest-to-graphql)".

{% endif %}

### Modelo

{% if currentVersion == "free-pro-team@latest" %}Todo el acceso a la API se hace a través de HTTPS, y {% else %}Se accede a la API {% endif %}desde `{% data variables.product.api_url_code %}`.  Todos los datos se
envían y reciben como JSON.

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat/orgs

> HTTP/1.1 200 OK
> Server: nginx
> Date: Fri, 12 Oct 2012 23:33:14 GMT
> Content-Type: application/json; charset=utf-8
> Status: 200 OK
> ETag: "a00049ba79152d03380c34652f2cb612"
> X-GitHub-Media-Type: github.v3
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4987
> X-RateLimit-Reset: 1350085394{% if enterpriseServerVersions contains currentVersion %}
> X-GitHub-Enterprise-Version: {{ currentVersion | remove: "enterprise-server@" }}.0{% elsif currentVersion == "github-ae@latest" %}
> X-GitHub-Enterprise-Version: GitHub AE{% endif %}
> Content-Length: 5
> Cache-Control: max-age=0, private, must-revalidate
> X-Content-Type-Options: nosniff
```

Los campos en blanco se incluyen como `null` en vez de omitirse.

Todas las marcas de tiempo se regresan en formato ISO 8601:

    AAAA-MM-DDTHH:MM:SSZ

Para obtener más información acerca de las zonas horarias en las marcas de tiempo, consulta [esta sección](#timezones).

#### Representaciones de resumen

Cuando recuperas una lista de recursos, la respuesta incluye un _subconjunto_ de los atributos para ese recurso. Esta es la representación "resumen" del recurso. (Algunos atributos son caros en términos de cómputo para que la API los proporcione. Por razones de rendimiento, la representación de resumen excluye esos atributos. Para obtener estos atributos, recupera la representación "detallada").

**Ejemplo**: Cuando obtienes una lista de repositorios, obtienes la representación de resumen de cada uno de ellos. Aquí, recuperamos la lista de repositorios que pertenecen a la organización [octokit](https://github.com/octokit):

    GET /orgs/octokit/repos

#### Representaciones detalladas

Cuando recuperas un recurso individual, la respuesta incluye habitualmente _todos_ los atributos para ese recurso. Esta es la representación "detallada" del recurso. (Nota que la autorización algunas veces influencia la cantidad de detalles que se incluyen en la representación).

**Ejemplo**: Cuando obtienes un repositorio individual, obtienes la representación detallada del repositorio. Aquí, recuperamos el repositorio [octokit/octokit.rb](https://github.com/octokit/octokit.rb):

    GET /repos/octokit/octokit.rb

La documentación proporciona un ejemplo de respuesta para cada método de la API. La respuesta de ejemplo ilustra todos los atributos que se regresan con ese método.

### Autenticación

{% if currentVersion == "github-ae@latest" %} Te recomendamos autenticarte en la API de REST de {% data variables.product.product_name %} creando un token de OAuth2 a través del [flujo de aplicaciones web](/developers/apps/authorizing-oauth-apps#web-application-flow). {% else %} Hay dos formas de autenticarse a través de la API de REST de {% data variables.product.product_name %}.{% endif %} Las solicitudes que requieren autenticación devolverán un `404 Not Found`, en vez de un `403 Forbidden`, en algunos lugares.  Esto es para prevenir la fuga accidental de los repositorios privados a los usuarios no autorizados.

#### Autenticación básica

```shell
$ curl -u "username" {% data variables.product.api_url_pre %}
```

#### Token de OAuth (enviado en un encabezado)

```shell
$ curl -H "Authorization: token <em>OAUTH-TOKEN</em>" {% data variables.product.api_url_pre %}
```

{% note %}

Nota: GitHub recomienda enviar los tokens de OAuth utilizando el encabezado de autorización.

{% endnote %}

Lee [más acerca de OAuth2](/apps/building-oauth-apps/).  Nota que los tokens de OAuth2 pueden adquirirse utilizando el [flujo de aplicaciones web](/developers/apps/authorizing-oauth-apps#web-application-flow) para las aplicaciones productivas.

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
#### Llave/secreto de OAuth2

{% data reusables.apps.deprecating_auth_with_query_parameters %}

```shell
curl -u my_client_id:my_client_secret '{% data variables.product.api_url_pre %}/user/repos'
```

El utilizar tu `client_id` y `client_secret` _no_ te autentica como un usuario, únicamente identifica tu aplicación de OAuth para incrementar tu límite de tasa. Los permisos se otorgan únicamente a usuarios, no a aplicaciones, y úicamente obtendrás datos que un usuario no autenticado vería. Es por esto que deberías utilizar únicamente la llave/secreto de OAuth2 en escenarios de servidor a servidor. No compartas el secreto de cliente de tu aplicación de OAuth con tus usuarios.

No podrás autenticarte utilizndo tu llave y secreto de OAuth2 si estás en modo privado, y el intentarlo regresará el mensaje `401 Unauthorized`. Para obtener más información, consulta la sección "[Habilitar el modo privado](/enterprise/admin/installation/enabling-private-mode)".
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

Lee [más acerca de limitar la tasa de no autenticación](#increasing-the-unauthenticated-rate-limit-for-oauth-applications).

{% endif %}

#### Límite de ingresos fallidos

Autenticarse con credenciales inválidas regresará el mensaje `401 Unauthorized`:

```shell
$ curl -I {% data variables.product.api_url_pre %} -u foo:bar
> HTTP/1.1 401 Unauthorized

> {
>   "message": "Bad credentials",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

Después de detectar varias solicitudes con credenciales inválidas dentro de un periodo de tiempo corto, la API rechazará temporalmente todos los intentos de autenticación para el usuario en cuestión (incluyendo aquellos con credenciales válidas) con el mensaje `403 Forbidden`:

```shell
$ curl -i {% data variables.product.api_url_pre %} -u {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}
-u <em>valid_username</em>:<em>valid_token</em> {% endif %}{% if enterpriseServerVersions contains currentVersion %}-u <em>valid_username</em>:<em>valid_password</em> {% endif %}
> HTTP/1.1 403 Forbidden
> {
>   "message": "Maximum number of login attempts exceeded. Please try again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

### Parámetros

Muchos métodos de la API toman parámetros opcionales. Para las solicitudes de tipo `GET`, cualquier parámetro que no se haya especificado como un segmento en la ruta puede pasarse como un parámetro de secuencia de consulta HTTP:

```shell
$ curl -i "{% data variables.product.api_url_pre %}/repos/vmg/redcarpet/issues?state=closed"
```

En este ejemplo, los valores 'vmg' and 'redcarpet' se proporcionan para los parámetros `:owner` y `:repo` en la ruta mientras que se pasa a `:state` en la secuencia de la consulta.

Para las solicitudes de tipo `POST`, `PATCH`, `PUT`, and `DELETE`, los parámetros que no se incluyen en la URL deben codificarse como JSON con un Content-Type de 'application/json':

```shell
$ curl -i -u username -d '{"scopes":["public_repo"]}' {% data variables.product.api_url_pre %}/authorizations
```

### Terminal raíz

Puedes emitir una solicitud de tipo `GET` a la terminal raíz para obtener todas las categorías de la terminal que son compatibles con la API de REST:

```shell
$ curl {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}
-u <em>username</em>:<em>token</em> {% endif %}{% if enterpriseServerVersions contains currentVersion %}-u <em>username</em>:<em>password</em> {% endif %}{% data variables.product.api_url_pre %}
```

### IDs de nodo globales de GraphQL

Consulta la guía sobre cómo "[Utilizar las ID de Nodo Global](/graphql/guides/using-global-node-ids)" para obtener información detallada sobre cómo encontrar las `node_id` a través de la API de REST y utilizarlas en las operaciones de GraphQL.

### Errores de cliente

Existen tres posibles tipos de errores de cliente en los llamados a la API que reciben cuerpos de solicitud:

1. Enviar un JSON inválido dará como resultado una respuesta de tipo `400 Bad Request`.
   
        HTTP/1.1 400 Bad Request
        Content-Length: 35
       
        {"message":"Problems parsing JSON"}

2. Enviar el tipo incorrecto de valores de JSON dará como resultado una respuesta de tipo `400 Bad
Request`.
   
        HTTP/1.1 400 Bad Request
        Content-Length: 40
       
        {"message":"Body should be a JSON object"}

3. Enviar campos inválidos dará como resultado una respuesta de tipo `422 Unprocessable Entity`.
   
        HTTP/1.1 422 Unprocessable Entity
        Content-Length: 149
       
        {
          "message": "Validation Failed",
          "errors": [
            {
              "resource": "Issue",
              "field": "title",
              "code": "missing_field"
            }
          ]
        }

Todos los objetos de error tienen propiedades de campo y de recurso para que tu cliente pueda ubicar el problema.  También hay un código de error para que sepas qué es lo que está mal con el campo.  Estos son los posibles códigos de error de validación:

| Nombre del código de error | Descripción                                                                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `missing`                  | Un recurso no existe.                                                                                                                             |
| `missing_field`            | No se ha configurado un campo requerido en un recurso.                                                                                            |
| `no válida`                | El formato de un campo es inválido.  Revisa la documentación para encontrar información más específica.                                           |
| `already_exists`           | Otro recurso tiene el mismo valor que este campo.  Esto puede suceder en recursos que deben tener claves únicas (tales como nombres de etiqueta). |
| `unprocessable`            | Las entradas proporcionadas son inválidas.                                                                                                        |

Los recursos también podría enviar errores de validación personalizados (en donde `code` sea `custom`). Los errores personalizados siempre tendrán un campo de `message` que describa el error, y muchos de los errores también incluirán un campo de `documentation_url` que apunte a algún tipo de contenido que te pueda ayudar a resolver el error.

### Redireccionamientos HTTP

La API v3 utiliza redireccionamientos HTTP cuando sea adecuado. Los clientes deberán asumir que cualquier solicitud podría resultar en un redireccionamiento. Recibir un redireccionamiento HTTP *no* es un error y los clientes deberán seguirlo. Las respuestas de redireccionamiento tendrán un campo de encabezado de tipo `Location` que contendrá el URI del recurso al cual el cliente deberá repetir la solicitud.

| Código de estado | Descripción                                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `301`            | Redirección permanente. El URI que utilizaste para hacer la solicitud se reemplazó con aquél especificado en el campo de encabezado `Location`. Ésta y todas las solicitudes futuras a este recurso se deberán dirigir al nuevo URI. |
| `302`, `307`     | Redireccion temporal. La solicitud deberá repetirse literalmente al URI especificado en el campo de encabezado `Location`, pero los clientes deberán seguir utilizando el URI original para solicitudes futuras.                     |

Podrían utilizarse otros códigos de estado de redirección de acuerdo con la especificación HTTP 1.1.

### Verbos HTTP

Cuando sea posible, la API v3 intentará utilizar los verbos HTTP adecuados para cada acción.

| Verbo    | Descripción                                                                                                                                                                                                                                  |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `HEAD`   | Puede emitirse contra cualquier recurso para obtener solo la información del encabezado HTTP.                                                                                                                                                |
| `GET`    | Se utiliza para recuperar recursos.                                                                                                                                                                                                          |
| `POST`   | Se utiliza para crear recursos.                                                                                                                                                                                                              |
| `PATCH`  | Se utiliza para actualizar los recursos con datos parciales de JSON. Por ejemplo, un recurso de emisión tiene los atributos `title` y `body`. Una solicitud de `PATCH` podría aceptar uno o más de los atributos para actualizar el recurso. |
| `PUT`    | Se utiliza para reemplazar recursos o colecciones. Para las solicitudes de `PUT` sin el atributo `body`, asegúrate de configurar el encabezado `Content-Length` en cero.                                                                     |
| `DELETE` | Se utiliza para borrar recursos.                                                                                                                                                                                                             |

### Hypermedia

Todos los recursos pueden tener una o más propiedades de `*_url` que los enlacen con otros recursos.  Estos pretenden proporcionar las URL explícitas para que los clientes adecuados de la API no tengan que construir las URL por ellos mismos.  Se recomienda ampliamente que los clientes de la API los utilicen.  El hacerlo facilitará a los desarrolladores el realizar mejoras futuras a la API.  Se espera que todas las URL sean plantillas de URI [RFC 6570][rfc] adecuadas.

Puedes entonces expandir estas plantillas utilizando algo como la gema [uri_template][uri]:

    >> tmpl = URITemplate.new('/notifications{?since,all,participating}')
    >> tmpl.expand
    => "/notifications"
    
    >> tmpl.expand :all => 1
    => "/notifications?all=1"
    
    >> tmpl.expand :all => 1, :participating => 1
    => "/notifications?all=1&participating=1"

### Paginación

Las solicitudes que recuperan varios elementos se paginarán a 30 elementos predeterminadamente.  Puedes especificar páginas subsecuentes con el parámetro `page`. Para algunos recursos, también puedes configurar un tamaño de página personalizado de hasta 100 de ellos con el parámetro `per_page`. Toma en cuenta que, por razones técnicas, no todas las terminales respetan el parámetro `per_page`, consulta la sección de [eventos](/rest/reference/activity#events) por ejemplo.

```shell
$ curl '{% data variables.product.api_url_pre %}/user/repos?page=2&per_page=100'
```

Toma en cuenta que la numeración comienza en 1 y que el omitir el parámetro `page` devolverá la primera página.

Algunas terminales utilizan una paginación basada en el cursor. Un cursor es una cadena que apunta a una ubicación en el conjunto de resultados. Con la paginación basada en un cursor, no existe un concepto fijo de "páginas" en el conjunto de resultados, así que no puedes navegar a alguna página específica. En vez de esto, puedes recorrer los resultados utilizando los parámetros `before` o `after`.

Para obtener más información sobre la paginación, revisa nuestra guía sobre [Desplazarse con la paginación][pagination-guide].

#### Encabezado de enlace

{% note %}

**Nota:** Es importante formar llamados con valores de encabezado de enlace en vez de construir tus propias URL.

{% endnote %}

El [encabezado de enlace](http://tools.ietf.org/html/rfc5988) incluye la información de paginación. Por ejemplo:

    Link: <{% data variables.product.api_url_code %}/user/repos?page=3&per_page=100>; rel="next",
      <{% data variables.product.api_url_code %}/user/repos?page=50&per_page=100>; rel="last"

_Este ejemplo incluye un salto de línea para legibilidad._

O, si la terminal utiliza una paginación basada en un cursor:

    Link: <{% data variables.product.api_url_code %}/orgs/ORG/audit-log?after=MTYwMTkxOTU5NjQxM3xZbGI4VE5EZ1dvZTlla09uWjhoZFpR&before=>; rel="next",

Este encabezado de respuesta de `Link` contiene una o más relaciones de enlace de [Hipermedios](/rest#hypermedia), algunos de los cuales requieren una expansión tal como las [plantillas de URI](http://tools.ietf.org/html/rfc6570).

Los valores de `rel` posibles son:

| Nombre  | Descripción                                                                |
| ------- | -------------------------------------------------------------------------- |
| `next`  | La relación del enlace para la página subsecuente inmediata de resultados. |
| `last`  | La relación del enlace para la última página de resultados.                |
| `first` | La relación del enlace para la primera parte de los resultados.            |
| `prev`  | La relación del enlace para la página previa inmediata de resultados.      |

### Limitación de tasas

Para las solicitudes de la API que utilizan Autenticación Básica u OAuth, puedes hacer hasta 5,000 solicitudes por hora. Las solicitudes autenticadas se asocian con el usuario autenticado, sin importar si se utilizó [Autenticación Básica](#basic-authentication) o [un token OAuth](#oauth2-token-sent-in-a-header). Esto significa que todas las aplicaciones de OAuth que autorice un usuario compartirán la misma cuota de 5,000 solicitudes por hora cuando se autentiquen con tokens diferentes que pertenezcan al mismo usuario.

{% if currentVersion == "free-pro-team@latest" %}

Para los usuarios que pertenezcan a una cuenta de {% data variables.product.prodname_ghe_cloud %}, las solicitudes que se hacen utilizando un token de OAuth para los recursos que pertenecen a la misma cuenta de {% data variables.product.prodname_ghe_cloud %} tienen un límite incrementado de 15,000 solicitudes por hora.

{% endif %}

Para las solicitudes no autenticadas, el límite de tasa permite hasta 60 solicitudes por hora. Las solicitudes no autenticadas se asocian con la dirección IP que las origina, y no con el usuario que realiza la solicitud.

{% data reusables.enterprise.rate_limit %}

Nota que [la API de búsqueda tiene reglas personalizadas de límite de tasa](/rest/reference/search#rate-limit).

Los encabezados HTTP recuperados para cualquier solicitud de la API muestran tu estado actual de límite de tasa:

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat
> HTTP/1.1 200 OK
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> Status: 200 OK
> X-RateLimit-Limit: 60
> X-RateLimit-Remaining: 56
> X-RateLimit-Reset: 1372700873
```

| Nombre del Encabezado   | Descripción                                                                                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `X-RateLimit-Limit`     | La cantidad máxima de solicitudes que puedes hacer por hora.                                                                                         |
| `X-RateLimit-Remaining` | La cantidad de solicitudes que quedan en la ventana de límite de tasa actual.                                                                        |
| `X-RateLimit-Reset`     | La hora en la que se restablecerá la ventana de límite de tasa actual en [segundos de tiempo satelital UTC](http://en.wikipedia.org/wiki/Unix_time). |

Si necesitas ver la hora en un formato diferente, cualquier lenguaje de programación moderno puede ayudarte con esta tarea. Por ejemplo, si abres la consola en tu buscador web, puedes obtener fácilmente el tiempo de restablecimiento como un objeto de Tiempo de JavaScript.

``` javascript
new Date(1372700873 * 1000)
// => Mon Jul 01 2013 13:47:53 GMT-0400 (EDT)
```

Si excedes el límite de tasa, se regresará una respuesta de error:

```shell
> HTTP/1.1 403 Forbidden
> Date: Tue, 20 Aug 2013 14:50:41 GMT
> Status: 403 Forbidden
> X-RateLimit-Limit: 60
> X-RateLimit-Remaining: 0
> X-RateLimit-Reset: 1377013266

> {
>    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
>    "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#rate-limiting"
> }
```

Puedes [revisar tu estado de límite de tasa](/rest/reference/rate-limit) sin incurrir en una consulta de la API.

#### Incrementar el límite de tasa de no autenticados para las aplicaciones de OAuth

Si tu aplicación de OAuth necesita hacer llamados no autenticados con un límite de tasa más alto, puedes pasar la ID de cliente y secreto de tu app ante la ruta de la terminal.

```shell
$ curl -u my_client_id:my_client_secret {% data variables.product.api_url_pre %}/user/repos
> HTTP/1.1 200 OK
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> Status: 200 OK
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4966
> X-RateLimit-Reset: 1372700873
```

{% note %}

**Nota:** Jamás compartas tu secreto de cliente con nadie ni lo incluyas en el código de cara al cliente del buscador. Utiliza únicamente el método que se muestra aquí para las llamadas de servidor a servidor.

{% endnote %}

#### Quedarse dentro del límite de tasa

Si excedes tu límite de tasa utilizando Autenticación Básica u OAuth, es probable que puedas arreglar el problema si guardas en caché las respuestas de la API y utilizas [solicitudes condicionales](#conditional-requests).

#### Abusar del límite de tasa

Para prorpocionar un servicio de calidad en {% data variables.product.product_name %}, los límites de tasa adicionales podrían aplicar a algunas acciones cuando se utiliza la API. Por ejemplo, utilizar la API para crear contenido rápidamente, encuestar agresivamente en vez de utilizar webhooks, hacer solicitudes múltiples concurrentes, o solicitar repetidamente datos que son caros a nivel computacional, podría dar como resultado un abuso de tasa.

El abuso de límite de tasa no pretende interferir con el uso legítimo de la API. Tus límites de tasa habituales deben ser el único límite en el cual te enfoques. Para garantizar que estás actuando como un buen ciudadano de la API, revisa nuestros [lineamientos de mejores prácticas](/guides/best-practices-for-integrators/).

Si tu aplicación activa este límite de tasa, recibirás una respuesta informativa:

```shell
> HTTP/1.1 403 Forbidden
> Content-Type: application/json; charset=utf-8
> Connection: close

> {
>   "message": "You have triggered an abuse detection mechanism and have been temporarily blocked from content creation. Please retry your request again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#abuse-rate-limits"
> }
```

{% if currentVersion == "free-pro-team@latest" %}

### Se requiere un agente de usuario

Todas las solicitudes a la API DEBEN incluir un encabezado de `User-Agent` válido. Las solicitudes sin encabezado de `User-Agent` se rechazarán. Te solicitamos que utilices tu nombre de usuario de {% data variables.product.product_name %}, o el nombre de tu aplicación, para el valor del encabezado de `User-Agent`. Esto nos permite contactarte en caso de que haya algún problema.

Aquí hay un ejemplo:

```shell
User-Agent: Awesome-Octocat-App
```

cURL envía un encabezado de `User-Agent` válido predeterminadamente. Si proporcionas un encabezado de `User-Agent` inválido a través de cURL (o a través de un cliente alterno), recibirás una respuesta de `403 Forbidden`:

```shell
$ curl -IH 'User-Agent: ' {% data variables.product.api_url_pre %}/meta
> HTTP/1.0 403 Forbidden
> Connection: close
> Content-Type: text/html

> Request forbidden by administrative rules.
> Please make sure your request has a User-Agent header.
> Check  for other possible causes.
```

{% endif %}

### Solicitudes condicionales

La mayoría de las respuestas regresan un encabezado de `ETag`. Muchas de las respuestas también regresan un encabezado de `Last-Modified`. Puedes utilizar los valores de estos encabezados para hacer solicitudes subsecuentes a estos recursos utilizando los encabezados `If-None-Match` y `If-Modified-Since`, respectivamente. Si el recurso no ha cambiado, el servidor regresará un `304 Not Modified`.

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**Nota**: Hacer una solicitud condicional y recibir una respuesta de tipo 304 no cuenta contra tu [Límite de Tasa](#rate-limiting), así que te alentamos a utilizarlo cuando sea posible.

{% endtip %}

{% endif %}

```shell
$ curl -I {% data variables.product.api_url_pre %}/user
> HTTP/1.1 200 OK
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Status: 200 OK
> Vary: Accept, Authorization, Cookie
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4996
> X-RateLimit-Reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H 'If-None-Match: "644b5b0155e6404a9cc4bd9d8b1ae730"'
> HTTP/1.1 304 Not Modified
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Status: 304 Not Modified
> Vary: Accept, Authorization, Cookie
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4996
> X-RateLimit-Reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H "If-Modified-Since: Thu, 05 Jul 2012 15:31:30 GMT"
> HTTP/1.1 304 Not Modified
> Cache-Control: private, max-age=60
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Status: 304 Not Modified
> Vary: Accept, Authorization, Cookie
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4996
> X-RateLimit-Reset: 1372700873
```

### Intercambio de recursos de origen cruzado

La API es compatible con el Intercambio de Recursos de Origen Cruzado (CORS, por sus siglas en inglés) para las solicitudes de AJAX de cualquier origen. Puedes leer la [Recomendación del W3C sobre CORS](http://www.w3.org/TR/cors/), o [esta introducción](https://code.google.com/archive/p/html5security/wikis/CrossOriginRequestSecurity.wiki) de la Guía de Seguridad de HTML 5.

Aquí hay una solicitud de ejemplo que se envió desde una consulta de buscador `http://example.com`:

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com"
HTTP/1.1 302 Found
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
```

Así se ve una solicitud de prevuelo de CORS:

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com" -X OPTIONS
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With
Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
Access-Control-Max-Age: 86400
```

### Rellamados de JSON-P

Puedes enviar un parámetro de `?callback` a cualquier llamado de GET para envolver los resultados en una función de JSON.  Esto se utiliza típicamente cuando los buscadores quieren insertar contenido de {% data variables.product.product_name %} en las páginas web evitando los problemas de dominio cruzado.  La respuesta incluye la misma salida de datos que la API común, mas la información relevante del Encabezado HTTP.

```shell
$ curl {% data variables.product.api_url_pre %}?callback=foo

> /**/foo({
>   "meta": {
>     "status": 200,
>     "X-RateLimit-Limit": "5000",
>     "X-RateLimit-Remaining": "4966",
>     "X-RateLimit-Reset": "1372700873",
>     "Link": [ // pagination headers and other links
>       ["{% data variables.product.api_url_pre %}?page=2", {"rel": "next"}]
>     ]
>   },
>   "data": {
>     // the data
>   }
> })
```

Puedes escribir un agente de JavaScript para procesar la rellamada. Aquí hay un ejemplo minimalista que puedes probar:

    <html>
    <head>
    <script type="text/javascript">
    function foo(response) {
      var meta = response.meta;
      var data = response.data;
      console.log(meta);
      console.log(data);
    }
    
    var script = document.createElement('script');
    script.src = '{% data variables.product.api_url_code %}?callback=foo';
    
    document.getElementsByTagName('head')[0].appendChild(script);
    </script>
    </head>
    
    <body>
      <p>Open up your browser's console.</p>
    </body>
    </html>

Todos los encabezados consisten en el mismo valor de secuencia que los encabezados HTTP con una excepción notoria: El Enlace.  Los encabezados de enlace se pre-analizan y se presentan como una matriz de tuplas de `[url, options]`.

Un enlace que se ve así:

    Link: <url1>; rel="next", <url2>; rel="foo"; bar="baz"

... se verá así en la salida de la rellamada:

```json
{
  "Link": [
    [
      "url1",
      {
        "rel": "next"
      }
    ],
    [
      "url2",
      {
        "rel": "foo",
        "bar": "baz"
      }
    ]
  ]
}
```

### Zonas horarias

Algunas solicitudes que crean datos nuevos, tales como aquellas para crear una confirmación nueva, te permiten proporcionar información sobre la zona horaria cuando especificas o generas marcas de tiempo. Aplicamos las siguientes reglas, en orden de prioridad, para determinar la información de la zona horaria para los llamados a la API.

* [Proporcionar explícitamente una marca de tiempo de tipo ISO 8601 con información de la zona horaria](#explicitly-providing-an-iso-8601-timestamp-with-timezone-information)
* [Utilizar el encabezado de `Time-Zone`](#using-the-time-zone-header)
* [Utilizar la última zona horaria conocida del usuario](#using-the-last-known-timezone-for-the-user)
* [Poner como defecto UTC en ausencia de otra información de zona horaria](#defaulting-to-utc-without-other-timezone-information)

#### Proporcionar explícitamente una marca de tiempo de tipo ISO 8601 con información de la zona horaria

Para las llamadas a la API que permitan que se especifique una marca de tiempo, utilizamos esa marca de tiempo exacta. Como ejemplo de esto, está la [API de Confirmaciones](/rest/reference/git#commits).

Estas marcas de tiempo se ven más o menos como `2014-02-27T15:05:06+01:00`. También, puedes ver [este ejemplo](/rest/reference/git#example-input) de cómo se pueden especificar las marcas de tiempo.

#### Utilizar el encabezado de `Time-Zone`

Es posible proporcionar un encabezado de `Time-Zone` que defina la zona horaria de acuerdo con la [lista de nombres de la base de datos Olson](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```shell
$ curl -H "Time-Zone: Europe/Amsterdam" -X POST {% data variables.product.api_url_pre %}/repos/github/linguist/contents/new_file.md
```

Esto significa que generamos una marca de tiempo para el momento en el se haga el llamado a tu API en la zona horaria que defina este encabezado. Por ejemplo, la [API de Contenidos](/rest/reference/repos#contents) genera una confirmación de git para cada adición o cambio y utiliza este tiempo actual como la marca de tiempo. Este encabezado determinará la zona horaria que se utiliza para generar la marca de tiempo actual.

#### Utilizar la última zona horaria conocida del usuario

Si no se especifica ningún encabezado de `Time-Zone` y haces una llamada autenticada a la API, utilizaremos esta última zona horaria para el usuario autenticado. La última zona horaria conocida se actualiza cuando sea que busques el sitio web de {% data variables.product.product_name %}.

#### Poner como defecto UTC en ausencia de otra información de zona horaria

Si los pasos anteriores no dan como resultado ninguna información, utilizaremos UTC como la zona horaria para crear la confirmación de git.

[rfc]: http://tools.ietf.org/html/rfc6570
[uri]: https://github.com/hannesg/uri_template

[pagination-guide]: /guides/traversing-with-pagination
