---
title: Recursos en la API de REST
intro: 'Aprende cómo navegar en los recursos que proporciona la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.'
redirect_from:
  - /rest/initialize-the-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - API
ms.openlocfilehash: c7928ce90b887d6fa3bd5342fc1633b3e30983f1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192853'
---
{% ifversion api-date-versioning %}
## Versión de API

Los recursos disponibles pueden variar entre las versiones de la API de REST. Debes usar el encabezado `X-GitHub-Api-Version` para especificar una versión de API. Para más información, consulta "[Versiones de API](/rest/overview/api-versions)".

{% endif %}

## Schema

{% ifversion fpt or ghec %}Todo el acceso a la API se realiza mediante HTTPS y{% else %}A la API{% endif %} se accede desde `{% data variables.product.api_url_code %}`.  Todos los datos se envían y reciben como JSON.

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat/orgs

> HTTP/2 200
> Server: nginx
> Date: Fri, 12 Oct 2012 23:33:14 GMT
> Content-Type: application/json; charset=utf-8
> ETag: "a00049ba79152d03380c34652f2cb612"
> X-GitHub-Media-Type: github.v3
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4987
> x-ratelimit-reset: 1350085394{% ifversion ghes %}
> X-GitHub-Enterprise-Version: {{ currentVersion | remove: "enterprise-server@" }}.0{% elsif ghae %}
> X-GitHub-Enterprise-Version: GitHub AE{% endif %}
> Content-Length: 5
> Cache-Control: max-age=0, private, must-revalidate
> X-Content-Type-Options: nosniff
```

Los campos en blanco se incluyen como `null` en lugar de omitirse.

Todas las marcas de tiempo se devuelven en formato UTC, ISO 8601:

    YYYY-MM-DDTHH:MM:SSZ

Para más información sobre las zonas horarias en marcas de tiempo, vea [esta sección](#timezones).

### Representaciones de resumen

Al capturar una lista de recursos, la respuesta incluye un _subconjunto_ de los atributos para ese recurso. Es la representación de "resumen" del recurso. (Algunos atributos son caros en términos de cómputo para que la API los proporcione.
Por razones de rendimiento, la representación de resumen excluye esos atributos.
Para obtener estos atributos, recupera la representación "detallada").

**Ejemplo**: al obtener una lista de repositorios, obtendrá la representación de resumen de cada repositorio. Aquí, se captura la lista de repositorios propiedad de la organización [octokit](https://github.com/octokit):

    GET /orgs/octokit/repos

### Representaciones detalladas

Al capturar un recurso individual, la respuesta incluye habitualmente _todos_ los atributos para ese recurso. Es la representación "detallada" del recurso. (Tenga en cuenta que, en ocasiones, la autorización influye en la cantidad de detalles que se incluyen en la representación).

**Ejemplo**: al obtener un repositorio individual, obtendrá la representación detallada del repositorio. Aquí, se captura el repositorio [octokit/octokit.rb](https://github.com/octokit/octokit.rb):

    GET /repos/octokit/octokit.rb

La documentación proporciona un ejemplo de respuesta para cada método de la API. La respuesta de ejemplo ilustra todos los atributos que se devuelven con ese método.

## Authentication

{% ifversion ghae %} Se recomienda autenticarse en la API REST de {% data variables.product.product_name %} mediante la creación de un token de OAuth2 con el [flujo de aplicación web](/developers/apps/authorizing-oauth-apps#web-application-flow). {% else %} Hay dos maneras de autenticarse mediante la API REST de {% data variables.product.product_name %}.{% endif %} Las solicitudes que necesitan autenticación devolverán `404 Not Found`, en vez de `403 Forbidden`, en algunos lugares.  Esto es para prevenir la fuga accidental de los repositorios privados a los usuarios no autorizados.

### Autenticación básica

```shell
$ curl -u "username" {% data variables.product.api_url_pre %}
```

### Token de OAuth (enviado en un encabezado)

```shell
$ curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}
```

{% note %}

Nota: GitHub recomienda enviar los tokens de OAuth utilizando el encabezado de autorización.

{% endnote %}

{% note %}

**Nota:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

Obtenga [más información sobre OAuth2](/apps/building-oauth-apps/).  Tenga en cuenta que los tokens de OAuth2 se pueden adquirir mediante el [flujo de aplicación web](/developers/apps/authorizing-oauth-apps#web-application-flow) para las aplicaciones de producción.

{% ifversion fpt or ghes or ghec %}
### Llave/secreto de OAuth2

{% data reusables.apps.deprecating_auth_with_query_parameters %}

```shell
curl -u my_client_id:my_client_secret '{% data variables.product.api_url_pre %}/user/repos'
```

El uso de `client_id` y `client_secret` _no_ se autentica como usuario, solo identificará la aplicación de OAuth para aumentar el límite de frecuencia. Los permisos se otorgan únicamente a usuarios, no a aplicaciones, y úicamente obtendrás datos que un usuario no autenticado vería. Es por esto que deberías utilizar únicamente la llave/secreto de OAuth2 en escenarios de servidor a servidor. No filtres tu secreto de cliente de la App de OAuth a tus usuarios.

{% ifversion ghes %} No podrá autenticarse mediante la clave y el secreto de OAuth2 si está en modo privado, y al intentarlo se devolverá el mensaje `401 Unauthorized`. Para más información, vea "[Habilitación del modo privado](/admin/configuration/configuring-your-enterprise/enabling-private-mode)".
{% endif %} {% endif %}

{% ifversion fpt or ghec %}

[Más información sobre la limitación de frecuencia no autenticada](#increasing-the-unauthenticated-rate-limit-for-oauth-apps).

{% endif %}

### Límite de ingresos fallidos

La autenticación con credenciales no válidas devolverá `401 Unauthorized`:

```shell
$ curl -I {% data variables.product.api_url_pre %} -u foo:bar
> HTTP/2 401

> {
>   "message": "Bad credentials",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

Después de detectar varias solicitudes con credenciales no válidas en un breve periodo de tiempo, la API rechazará temporalmente todos los intentos de autenticación para el usuario en cuestión (incluidos aquellos con credenciales válidas) con `403 Forbidden`:

```shell
$ curl -i {% data variables.product.api_url_pre %} -u {% ifversion fpt or ghae or ghec %}
-u VALID_USERNAME:VALID_TOKEN {% endif %}{% ifversion ghes %}-u VALID_USERNAME:VALID_PASSWORD {% endif %}
> HTTP/2 403
> {
>   "message": "Maximum number of login attempts exceeded. Please try again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

## Parámetros

Muchos métodos de la API toman parámetros opcionales. Para las solicitudes `GET`, cualquier parámetro que no se haya especificado como un segmento en la ruta se puede pasar como un parámetro de cadena de consulta HTTP:

```shell
$ curl -i "{% data variables.product.api_url_pre %}/repos/vmg/redcarpet/issues?state=closed"
```

En este ejemplo, se proporcionan los valores "vmg" y "redcarpet" para los parámetros `:owner` y `:repo` de la ruta, mientras se pasa `:state` en la cadena de consulta.

En el caso de las solicitudes `POST`, `PATCH`, `PUT`y `DELETE`, los parámetros no incluidos en la dirección URL se deben codificar como JSON con un tipo de contenido de "application/json":

```shell
$ curl -i -u username -d '{"scopes":["repo_deployment"]}' {% data variables.product.api_url_pre %}/authorizations
```

## Punto de conexión raíz

Puede emitir una solicitud `GET` al punto de conexión raíz para obtener todas las categorías de punto de conexión compatibles con la API REST:

```shell
$ curl {% ifversion fpt or ghae or ghec %}
-u USERNAME:TOKEN {% endif %}{% ifversion ghes %}-u USERNAME:PASSWORD {% endif %}{% data variables.product.api_url_pre %}
```

## IDs de nodo globales de GraphQL

Vea la guía sobre "[Uso de identificadores de nodo global](/graphql/guides/using-global-node-ids)" para obtener información detallada sobre cómo buscar `node_id` mediante la API REST y su uso en operaciones de GraphQL.

## Errores de cliente

Existen tres posibles tipos de errores de cliente en las llamadas API que reciben cuerpos de solicitud:

1. El envío de código JSON no válido dará como resultado una respuesta `400 Bad Request`.

        HTTP/2 400
        Content-Length: 35

        {"message":"Problems parsing JSON"}

2. El envío del tipo incorrecto de valores JSON dará como resultado una respuesta `400 Bad
   Request`.

        HTTP/2 400
        Content-Length: 40

        {"message":"Body should be a JSON object"}

3. El envío de campos no válidos dará como resultado una respuesta `422 Unprocessable Entity`.

        HTTP/2 422
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

Todos los objetos de error tienen propiedades de campo y de recurso para que el cliente pueda identificar el problema.  También hay un código de error para que sepa cuál es el error en el campo.  Estos son los códigos de error de validación posibles:

Nombre del código de error | Descripción
-----------|-----------|
`missing` | Un recurso no existe.
`missing_field` | No se ha configurado un campo requerido en un recurso.
`invalid` | El formato de un campo es inválido.  Revisa la documentación para encontrar información más específica.
`already_exists` | Otro recurso tiene el mismo valor que este campo.  Esto puede suceder en recursos que deben tener claves únicas (tales como nombres de etiqueta).
`unprocessable` | Las entradas proporcionadas son inválidas.

Los recursos también pueden enviar errores de validación personalizados (donde `code` es `custom`). Los errores personalizados siempre tendrán un campo `message` que describe el error y la mayoría también incluirán un campo `documentation_url` que apunta a algún contenido que pueda ayudarle a resolver el error.

## Redireccionamientos HTTP

La API REST de {% data variables.product.product_name %} usa el redireccionamiento HTTP cuando corresponda. Los clientes deben asumir que cualquier solicitud podría resultar en un redireccionamiento. La recepción de un redireccionamiento HTTP *no* es un error y los clientes deben seguir esa redirección. Las respuestas de redireccionamiento tienen un campo de encabezado `Location` que contiene el URI del recurso al que el cliente debe repetir las solicitudes.

Código de estado | Descripción
-----------|-----------|
`301` | Redirección permanente. El URI que ha usado para realizar la solicitud se ha reemplazado por el especificado en el campo de encabezado `Location`. Ésta y todas las solicitudes futuras a este recurso se deberán dirigir al nuevo URI.
`302`, `307` | Redireccion temporal. La solicitud debe repetirse literalmente en el URI especificado en el campo de encabezado `Location`, pero los clientes deben seguir utilizando el URI original para solicitudes futuras.

Podrían utilizarse otros códigos de estado de redirección de acuerdo con la especificación HTTP 1.1.

## Verbos HTTP

Siempre que sea posible, la API REST de {% data variables.product.product_name %} se esfuerza por usar los verbos HTTP adecuados para cada acción. Ten en cuenta que los verbos HTTP distinguen mayúsculas de minúsculas.

Verbo | Descripción
-----|-----------
`HEAD` | Puede emitirse contra cualquier recurso para obtener solo la información del encabezado HTTP.
`GET` | Se utiliza para recuperar recursos.
`POST` | Se utiliza para crear recursos.
`PATCH` | Se utiliza para actualizar los recursos con datos parciales de JSON. Por ejemplo, un recurso Incidencia tiene atributos `title` y `body`. Una solicitud `PATCH` podría aceptar uno o más de los atributos para actualizar el recurso.
`PUT` | Se utiliza para reemplazar recursos o colecciones. Para las solicitudes `PUT` sin un atributo `body`, asegúrese de establecer el encabezado `Content-Length` en cero.
`DELETE` |Se utiliza para borrar recursos.

## Hypermedia

Todos los recursos pueden tener una o varias propiedades `*_url` vinculadas a otros recursos.  Su función es proporcionar las URL explícitas para que los clientes de API adecuados no tengan que construirlas ellos mismos.  Se recomienda encarecidamente que los clientes de API las usen.  De esta forma, para los desarrolladores será más sencillo realizar actualizaciones futuras de la API.  Se espera que todas las direcciones URL sean plantillas de URI [RFC 6570][rfc] correctas.

Después, puede expandir estas plantillas con algo parecido a la gema [uri_template][uri]:

    >> tmpl = URITemplate.new('/notifications{?since,all,participating}')
    >> tmpl.expand
    => "/notifications"

    >> tmpl.expand all: 1
    => "/notifications?all=1"

    >> tmpl.expand all: 1, participating: 1
    => "/notifications?all=1&participating=1"

[rfc]: https://datatracker.ietf.org/doc/html/rfc6570
[uri]: https://github.com/hannesg/uri_template

## Paginación

Si una respuesta de la API de REST fuera a incluir muchos resultados, {% data variables.product.company_short %} paginaría los resultados y devolvería un subconjunto de los resultados. Puedes usar el encabezado de vínculo de la respuesta para solicitar páginas de datos adicionales. Si un punto de conexión admite el parámetro de consulta `per_page`, puedes controlar cuántos resultados se devuelven en una página. Para obtener más información sobre la paginación, consulta "[Uso de la paginación en la API de REST](/rest/guides/using-pagination-in-the-rest-api)".

## Tiempos de espera

Si {% data variables.product.prodname_dotcom %} tarda más de 10 segundos en procesar una solicitud de la API, {% data variables.product.prodname_dotcom %} finalizará la solicitud y recibirás una respuesta de tiempo de espera excedido como la siguiente:

```json
{
    "message": "Server Error"
}
```

{% data variables.product.product_name %} se reserva el derecho de cambiar la ventana de tiempo de espera para proteger la velocidad y confiabilidad de la API.

## Limitación de frecuencia

Los distintos tipos de solicitudes de la API a {% data variables.location.product_location %} están sujetas a límites de tasa diferentes. 

Adicionalmente, la API de búsqueda tiene límites dedicados. Para más información, vea "[Búsqueda](/rest/reference/search#rate-limit)" en la documentación de la API REST.

{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

### Solicitudes de cuentas personales

Las solicitudes directas de la API que autentiques con un {% data variables.product.pat_generic %} son de tipo usuario a servidor. Una App de OAuth o GitHub App también puede hacer una solicitud de usuario a servidor en tu nombre después de que la autorices para ello. Para más información, consulta "[Creación de un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)", "[Autorización de aplicaciones de OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)" y "[Autorización de aplicaciones de GitHub](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps)".

{% data variables.product.product_name %} asocia todas las solicitudes de usuario a servidor con el usuario autenticado. En el caso de las Apps de OAuth y GitHub Apps, este es el usuario que autorizó la app. Todas las solicitudes de usuario a servidor cuentan en el límite de tasa del usuario autenticado.

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% ifversion fpt or ghec or ghes %}

Para las solicitudes no autenticadas, el límite de tasa permite hasta 60 solicitudes por hora. Las solicitudes sin autenticar se asocian con la dirección IP original y no con la persona que las realiza.

{% endif %}

{% endif %}

### Solicitudes desde GitHub Apps

Las solicitudes desde las GitHub Apps podrían ser de usuario a servidor o de servidor a servidor. Para más información sobre los límites de frecuencia de las aplicaciones de GitHub, vea "[Límites de frecuencia para aplicaciones de GitHub](/developers/apps/building-github-apps/rate-limits-for-github-apps)". 

### Solicitudes desde las GitHub Actions

Puede usar el valor `GITHUB_TOKEN` integrado para autenticar solicitudes en flujos de trabajo de Acciones de GitHub. Para más información, vea "[Autenticación de token automática](/actions/security-guides/automatic-token-authentication)".

Al usar `GITHUB_TOKEN`, el límite de frecuencia es de 1000 solicitudes por hora y repositorio.{% ifversion fpt or ghec %} Para las solicitudes a recursos que pertenecen a una cuenta de empresa de {% data variables.location.product_location %}, se aplica el límite de frecuencia de {% data variables.product.prodname_ghe_cloud %} y es de 15 000 solicitudes por hora y repositorio.{% endif %}

### Verificar el estado de tu límite de tasa

La API de límite de tasa y los encabezados HTTP de una respuesta son fuentes autoritativas para la cantidad actual de llamadas a la API disponibles para ti o para tu app en un momento dado.

#### API de Límite de Tasa

Puedes utilizar la API de Límite de Tasa para verificar tu estado de límite de tasa sin incurrir en el uso de dicho límite. Para más información, vea "[Límite de frecuencia](/rest/reference/rate-limit)".

#### Encabezados HTTP de límite de tasa

Los encabezados HTTP recuperados para cualquier solicitud de la API muestran tu estado actual de límite de tasa:

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 56
> x-ratelimit-used: 4
> x-ratelimit-reset: 1372700873
```

Nombre de encabezado | Descripción
-----------|-----------|
`x-ratelimit-limit` | La cantidad máxima de solicitudes que puedes hacer por hora.
`x-ratelimit-remaining` | La cantidad de solicitudes que quedan en la ventana de límite de tasa actual.
`x-ratelimit-used` | La cantidad de solicitudes que has realizado en la ventana de límite de tasa actual.
`x-ratelimit-reset` | Hora a la que se restablece la ventana de límite de frecuencia actual en [segundos desde la época UTC](http://en.wikipedia.org/wiki/Unix_time).

Si necesitas ver la hora en un formato diferente, cualquier lenguaje de programación moderno puede ayudarte con esta tarea. Por ejemplo, si abres la consola en tu buscador web, puedes obtener fácilmente el tiempo de restablecimiento como un objeto de Tiempo de JavaScript.

``` javascript
new Date(1372700873 * 1000)
// => Mon Jul 01 2013 13:47:53 GMT-0400 (EDT)
```

Si excedes el límite de tasa, se regresará una respuesta de error:

```shell
> HTTP/2 403
> Date: Tue, 20 Aug 2013 14:50:41 GMT
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 0
> x-ratelimit-used: 60
> x-ratelimit-reset: 1377013266

> {
>    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
>    "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#rate-limiting"
> }
```

### Incrementar el límite de tasa no autenticado para las Apps de OAuth

Si tu App de OAuth necesita hacer llamadas sin autenticar con un límite de tasa más alto, puedes pasar la ID de cliente y secreto de tu app antes de la ruta de la terminal.

```shell
$ curl -u my_client_id:my_client_secret -I {% data variables.product.api_url_pre %}/user/repos
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4966
> x-ratelimit-used: 34
> x-ratelimit-reset: 1372700873
```

{% note %}

**Nota:** Nunca comparta el secreto de cliente con nadie ni lo incluya en el código del explorador del lado cliente. Utiliza únicamente el método que se muestra aquí para las llamadas de servidor a servidor.

{% endnote %}

### Quedarse dentro del límite de tasa

Si supera el límite de frecuencia mediante la autenticación básica u OAuth, es probable que pueda corregir el problema almacenando en caché las respuestas de la API y usando [solicitudes condicionales](#conditional-requests).

### Límites de tasa secundarios

Para prorpocionar un servicio de calidad en {% data variables.product.product_name %}, los límites de tasa adicionales podrían aplicar a algunas acciones cuando se utiliza la API. Por ejemplo, utilizar la API para crear contenido rápidamente, encuestar agresivamente en vez de utilizar webhooks, hacer solicitudes múltiples concurrentes, o solicitar repetidamente datos que son caros a nivel computacional, podría dar como resultado un límite de tasa secundaria.

No se pretende que los límites de tasa secundaria interfieran con el uso legítimo de la API. Tus límites de tasa habituales deben ser el único límite en el cual te enfoques. Para asegurarse de que actúa como un buen ciudadano de API, consulte nuestras [Instrucciones de procedimientos recomendados](/guides/best-practices-for-integrators/).

Si tu aplicación activa este límite de tasa, recibirás una respuesta informativa:

```shell
> HTTP/2 403
> Content-Type: application/json; charset=utf-8
> Connection: close

> {
>   "message": "You have exceeded a secondary rate limit and have been temporarily blocked from content creation. Please retry your request again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#secondary-rate-limits"
> }
```

{% ifversion fpt or ghec %}

## Se requiere un agente de usuario

Todas las solicitudes de API DEBEN incluir un encabezado `User-Agent` válido. Las solicitudes sin un encabezado `User-Agent` se rechazarán. Le pedimos que use el nombre de usuario de {% data variables.product.product_name %}, o el nombre de la aplicación, para el valor del encabezado `User-Agent`. Esto nos permite contactarte en caso de que haya algún problema.

Este es un ejemplo:

```shell
User-Agent: Awesome-Octocat-App
```

cURL envía un encabezado `User-Agent` válido de forma predeterminada. Si proporciona un encabezado `User-Agent` no válido mediante (o un cliente alternativo), recibirá una respuesta `403 Forbidden`:

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

## Solicitudes condicionales

La mayoría de las respuestas devuelven un encabezado `ETag`. Muchas respuestas también devuelven un encabezado `Last-Modified`. Puede usar los valores de estos encabezados para realizar solicitudes posteriores a esos recursos con los encabezados `If-None-Match` y `If-Modified-Since`, respectivamente. Si el recurso no ha cambiado, el servidor devolverá `304 Not Modified`.

{% ifversion fpt or ghec %}

{% tip %}

**Nota**: Realizar una solicitud condicional y recibir una respuesta 304 no cuenta para el [límite de frecuencia](#rate-limiting), por lo que le recomendamos que lo use siempre que sea posible.

{% endtip %}

{% endif %}

```shell
$ curl -I {% data variables.product.api_url_pre %}/user
> HTTP/2 200
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H 'If-None-Match: "644b5b0155e6404a9cc4bd9d8b1ae730"'
> HTTP/2 304
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H "If-Modified-Since: Thu, 05 Jul 2012 15:31:30 GMT"
> HTTP/2 304
> Cache-Control: private, max-age=60
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873
```

## Uso compartido de recursos entre orígenes

La API es compatible con el Intercambio de recursos de origen Cruzado (CORS, por sus siglas en inglés) para las solicitudes de AJAX desde cualquier origen.
Puede leer la [recomendación de CORS del W3C](http://www.w3.org/TR/cors/) o [esta introducción](https://code.google.com/archive/p/html5security/wikis/CrossOriginRequestSecurity.wiki) de la Guía de seguridad de HTML 5.

Esta es una solicitud de ejemplo enviada desde un explorador destinada a `http://example.com`:

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com"
HTTP/2 302
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
```

Así se ve una solicitud de prevuelo de CORS:

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com" -X OPTIONS
HTTP/2 204
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With
Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
Access-Control-Max-Age: 86400
```

## Rellamados de JSON-P

Puede enviar un parámetro `?callback` a cualquier llamada GET para que los resultados se encapsulen en una función JSON.  Esto se suele usar cuando los exploradores quieren insertar contenido de {% data variables.product.product_name %} en páginas web evitando los problemas de dominios cruzados.  La respuesta incluye la misma salida de datos que la API común, además de la información pertinente del encabezado HTTP.

```shell
$ curl {% data variables.product.api_url_pre %}?callback=foo

> /**/foo({
>   "meta": {
>     "status": 200,
>     "x-ratelimit-limit": "5000",
>     "x-ratelimit-remaining": "4966",
>     "x-ratelimit-reset": "1372700873",
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

Todos los encabezados son el mismo valor de cadena que los encabezados HTTP con una excepción concreta: Link.  Los encabezados Link se analizan previamente de forma automática y se pasan como una matriz de tuplas `[url, options]`.

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

## Zonas horarias

Algunas solicitudes que crean datos nuevos, tales como aquellas para crear una confirmación nueva, te permiten proporcionar información sobre la zona horaria cuando especificas o generas marcas de tiempo. Aplicamos las siguientes reglas, en orden de prioridad, para determinar la información de la zona horaria para los llamados a la API.

* [Proporcionar explícitamente una marca de tiempo ISO 8601 con la información de zona horaria](#explicitly-providing-an-iso-8601-timestamp-with-timezone-information)
* [Uso del encabezado `Time-Zone`](#using-the-time-zone-header)
* [Uso de la última zona horaria conocida para el usuario](#using-the-last-known-timezone-for-the-user)
* [Uso predeterminado de UTC cuando no existe información sobre otra zona horaria](#defaulting-to-utc-without-other-timezone-information)

Toma en cuenta que estas reglas se aplican únicamente a los datos que se pasan a la API y no a los que esta devuelve. Como se ha mencionado en "[Esquema](#schema)", las marcas de tiempo devueltas por la API están en hora UTC, en formato ISO 8601.

### Proporcionar explícitamente una marca de tiempo de tipo ISO 8601 con la información de la zona horaria

Para las llamadas a la API que permitan que se especifique una marca de tiempo, utilizamos esa marca de tiempo exacta. Un ejemplo de esto es [Commits API](/rest/reference/git#commits).

Estas marcas de tiempo son similares a `2014-02-27T15:05:06+01:00`. Vea también [este ejemplo](/rest/reference/git#example-input) para saber cómo se pueden especificar estas marcas de tiempo.

### Uso del encabezado `Time-Zone`

Es posible proporcionar un encabezado `Time-Zone` que defina una zona horaria según la [lista de nombres de la base de datos Olson](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```shell
$ curl -H "Time-Zone: Europe/Amsterdam" -X POST {% data variables.product.api_url_pre %}/repos/github/linguist/contents/new_file.md
```

Esto significa que generamos una marca de tiempo para el momento en el se haga el llamado a tu API en la zona horaria que defina este encabezado. Por ejemplo, la [API Contents](/rest/reference/repos#contents) genera una confirmación de Git para cada adición o cambio, y usa la hora actual como marca de tiempo. Este encabezado determinará la zona horaria que se utiliza para generar la marca de tiempo actual.

### Utilizar la última zona horaria conocida para el usuario

Si no se especifica ningún encabezado `Time-Zone` y realiza una llamada autenticada a la API, se usa la última zona horaria conocida para el usuario autenticado. La última zona horaria conocida se actualiza cuando sea que busques el sitio web de {% data variables.product.product_name %}.

### Predeterminarse en UTC cuando no existe otra información sobre la zona horaria

Si los pasos anteriores no dan como resultado ninguna información, utilizaremos UTC como la zona horaria para crear la confirmación de git.
