---
title: Introducción a la API REST
intro: 'Aprende las bases para utilizar la API de REST, comenzando con la autenticación y algunos ejemplos de las terminales.'
redirect_from:
  - /guides/getting-started
  - /v3/guides/getting-started
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Get started - REST API
ms.openlocfilehash: a466a3ccad214c8fe797dd73e4e96af3ab6eead8
ms.sourcegitcommit: 8544f120269257d01adfe4a27b62f08fc8691727
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 08/02/2022
ms.locfileid: '147445084'
---
Vamos a explicar los conceptos centrales de la API mientras incluímos algunos casos de uso cotidiano.

{% data reusables.rest-api.dotcom-only-guide-note %}

## <a name="overview"></a>Información general

La mayoría de las aplicaciones usarán una [biblioteca contenedora][wrappers] existente en el lenguaje que prefiera, pero es importante familiarizarse primero con los métodos HTTP de API subyacentes.

No hay manera más fácil de empezar que mediante [cURL][curl].{% ifversion fpt or ghec %} Si usa un cliente alternativo, tenga en cuenta que debe enviar un [encabezado Agente de usuario](/rest/overview/resources-in-the-rest-api#user-agent-required) válido en la solicitud.{% endif %}

### <a name="hello-world"></a>Hola mundo

Comencemos por probar nuestra configuración. Abra un símbolo del sistema y escriba el comando siguiente:

```shell
$ curl https://api.github.com/zen

> Keep it logically awesome.
```

La respuesta será una selección aleatoria de nuestra filosofía de diseño.

A continuación, se usa `GET` en el [perfil de GitHub][users api] de [Chris Wanstrath][defunkt github]:

```shell
# GET /users/defunkt
$ curl https://api.github.com/users/defunkt

> {
>   "login": "defunkt",
>   "id": 2,
>   "node_id": "MDQ6VXNlcjI=",
>   "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
>   "gravatar_id": "",
>   "url": "https://api.github.com/users/defunkt",
>   "html_url": "https://github.com/defunkt",
>   ...
> }
```

Parece código [JSON][json]. Ahora se agregará la marca `-i` para incluir encabezados:

```shell
$ curl -i https://api.github.com/users/defunkt

> HTTP/2 200
> server: GitHub.com
> date: Thu, 08 Jul 2021 07:04:08 GMT
> content-type: application/json; charset=utf-8
> cache-control: public, max-age=60, s-maxage=60
> vary: Accept, Accept-Encoding, Accept, X-Requested-With
> etag: W/"61e964bf6efa3bc3f9e8549e56d4db6e0911d8fa20fcd8ab9d88f13d513f26f0"
> last-modified: Fri, 01 Nov 2019 21:56:00 GMT
> x-github-media-type: github.v3; format=json
> access-control-expose-headers: ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, Deprecation, Sunset
> access-control-allow-origin: *
> strict-transport-security: max-age=31536000; includeSubdomains; preload
> x-frame-options: deny
> x-content-type-options: nosniff
> x-xss-protection: 0
> referrer-policy: origin-when-cross-origin, strict-origin-when-cross-origin
> content-security-policy: default-src 'none'
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 53
> x-ratelimit-reset: 1625731053
> x-ratelimit-resource: core
> x-ratelimit-used: 7
> accept-ranges: bytes
> content-length: 1305
> x-github-request-id: 9F60:7019:ACC5CD5:B03C931:60E6A368
>
> {
>  "login": "defunkt",
>  "id": 2,
>  "node_id": "MDQ6VXNlcjI=",
>  "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
>  "gravatar_id": "",
>  "url": "https://api.github.com/users/defunkt",
>  "html_url": "https://github.com/defunkt",
>
>   ...
> }
```

Hay algunas partes interesantes en los encabezados de la respuesta. Como se esperaba, `Content-Type` es `application/json`.

Cualquier encabezado que comience como `X-` es un encabezado personalizado y no se incluirá en la especificación de HTTPS. Por ejemplo, toma nota de los encabezados `X-RateLimit-Limit` y `X-RateLimit-Remaining`. Este par de encabezados indica [cuántas solicitudes puede realizar un cliente][rate-limiting] en un período de tiempo gradual (normalmente una hora) y cuántas de esas solicitudes ya ha consumido el cliente.

## <a name="authentication"></a>Authentication

Los clientes sin autenticar pueden hacer hasta 60 solicitudes por hora. Para obtener más solicitudes por hora, será necesario _autenticarse_. De hecho, para hacer cualquier cosa interesante con la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} se necesita [autenticación][authentication].

### <a name="using-personal-access-tokens"></a>Utilizar tokens de acceso personal

La forma más sencilla e indicada de autenticarse con la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} consiste en usar la autenticación básica [mediante tokens de OAuth](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens). Los tokens de OAuth incluyen [tokens de acceso personal][personal token].

Use una marca `-u` para establecer el nombre de usuario:

```shell
$ curl -i -u <em>your_username</em> {% data variables.product.api_url_pre %}/users/octocat

```

Cuando se te solicite, puedes ingresar tu token de OAuth, pero te recomendamos que configures una variable para éste:

Puede usar `-u "your_username:$token"` y configurar una variable para `token` a fin de evitar salir del token en el historial del shell.

```shell
$ curl -i -u <em>your_username:$token</em> {% data variables.product.api_url_pre %}/users/octocat

```

Al autenticarse, debería ver que el límite de frecuencia ha aumentado a 5000 solicitudes por hora, como se indica en el encabezado `X-RateLimit-Limit`. Adicionalmente a proporcionar más llamadas por hora, la autenticación te permite leer y escribir información privada utilizando la API.

Puede [crear fácilmente un token de **acceso personal**][personal token] mediante la [página de configuración de tokens de acceso personal][tokens settings]:

{% warning %}

Para mantener tu información segura, te recomendamos ampliamente que configures un vencimiento para tus tokens de acceso personal.

{% endwarning %}

{% ifversion fpt or ghes or ghec %} ![Selección de Token personal](/assets/images/personal_token.png) {% endif %}

{% ifversion ghae %} ![Selección de Token personal](/assets/images/help/personal_token_ghae.png) {% endif %}

Las solicitudes de API que usan un token de acceso personal que va a expirar devolverán la fecha de expiración del token mediante el encabezado `GitHub-Authentication-Token-Expiration`. Puedes utilizar el encabezado en tus scripts para proporcionar un mensaje de advertencia cuando el token esté próximo a vencer.

### <a name="get-your-own-user-profile"></a>Obtén tu propio perfil de usuario

Cuando se autentica correctamente, puede sacar provecho de los permisos asociados con la cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Por ejemplo, intente obtener un [perfil de usuario propio][auth user api]:

```shell
$ curl -i -u <em>your_username</em>:<em>your_token</em> {% data variables.product.api_url_pre %}/user

> {
>   ...
>   "plan": {
>     "space": 2516582,
>    "collaborators": 10,
>    "private_repos": 20,
>    "name&quot;: &quot;medium"
>  }
>   ...
> }
```

Esta vez, además del mismo conjunto de información pública que se ha recuperado antes para [@defunkt][defunkt github], también debería ver la información no pública del perfil de usuario. Por ejemplo, verá un objeto `plan` en la respuesta que proporciona detalles sobre el plan de {% data variables.product.product_name %} para la cuenta.

### <a name="using-oauth-tokens-for-apps"></a>Utiilzar tokens de OAuth para las apps

Las aplicaciones que necesitan leer o escribir información privada mediante la API en nombre de otro usuario deben usar [OAuth][oauth].

OAuth usa _tokens_. Los Tokens proporcionan dos características grandes:

* **Acceso revocable**: los usuarios pueden revocar la autorización a aplicaciones de terceros en cualquier momento.
* **Acceso limitado**: los usuarios pueden revisar el acceso específico que proporcionará un token antes de autorizar una aplicación de terceros

Los tokens se deben crear mediante un [flujo web][webflow]. Una aplicación envía a los usuarios a {% data variables.product.product_name %} para que inicien sesión. Después, {% data variables.product.product_name %} muestra un cuadro de diálogo en el que se indica el nombre de la aplicación, así como su nivel de acceso una vez que el usuario la autorice. Después de que un usuario autoriza el acceso, {% data variables.product.product_name %} lo redirecciona de vuelta a la aplicación:

![Diálogo de OAuth de GitHub](/assets/images/oauth_prompt.png)

**Tratamiento de los tokens de OAuth como contraseñas** No los comparta con otros usuarios ni los almacene en lugares inseguros. Los tokens de estos ejemplos son falsos y los nombres se han cambiado para proteger a los inocentes.

Ahora que ya sabe cómo realizar llamadas autenticadas, pasará a [Repositories API][repos-api].

## <a name="repositories"></a>Repositorios

Casi cualquier uso significativo de la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} implicará algún nivel de información de repositorio. Se pueden [`GET`los detalles del repositorio][get repo] de la misma manera que antes se han capturado los detalles del usuario:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/twbs/bootstrap
```

De la misma manera, se pueden [ver los repositorios para el usuario autenticado][user repos api]:

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    {% data variables.product.api_url_pre %}/user/repos
```

O bien, se pueden [enumerar los repositorios para otro usuario][other user repos api]:

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/octocat/repos
```

O bien, se pueden [enumerar los repositorios para una organización][org repos api]:

```shell
$ curl -i {% data variables.product.api_url_pre %}/orgs/octo-org/repos
```

La información que se devuelve de estas llamadas dependerá de los alcances que tenga nuestrotoken cuando nos autenticamos:

{%- ifversion fpt or ghec or ghes %}
* Un token con el [ámbito][scopes] `public_repo` devuelve una respuesta que incluye todos los repositorios públicos a los que tiene acceso para verlos en {% data variables.product.product_location %}.
{%- endif %}
* Un token con el [ámbito][scopes] `repo` devuelve una respuesta que incluye todos los repositorios {% ifversion fpt %}públicos o privados{% elsif ghec or ghes %}públicos, privados o internos{% elsif ghae %}private or internal{% endif %} a los que tiene acceso para verlos en {% data variables.product.product_location %}.

Como se indica en la [documentación][repos-api], estos métodos toman un parámetro `type` que puede filtrar los repositorios devueltos en función del tipo de acceso que tiene el usuario para el repositorio. De esta forma, solo se pueden obtener los repositorios de propiedad directa, los repositorios de la organización o los repositorios en los que el usuario colabore mediante un equipo.

```shell
$ curl -i "{% data variables.product.api_url_pre %}/users/octocat/repos?type=owner"
```

En este ejemplo, solo se capturan los repositorios que pertenecen a octocat, no en los que colabora. Nota la URL que se cita arriba. En función de la configuración del shell, en ocasiones cURL necesita una URL entre comillas, o ignorará la cadena de consulta.

### <a name="create-a-repository"></a>Creación de un repositorio

La captura de información de repositorios existentes es un caso de uso común, pero la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} también admite la creación de repositorios. Para [crear un repositorio][create repo], es necesario `POST` código JSON que contenga los detalles y las opciones de configuración.

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    -d '{
        "name": "blog",
        "auto_init": true,
        "private": true,
        "gitignore_template&quot;: &quot;nanoc"
      }' \
    {% data variables.product.api_url_pre %}/user/repos
```

En este ejemplo mínimo, se crea un repositorio privado para el blog (que es posible que se proporcione en [GitHub Pages][pages]). Aunque el blog {% ifversion not ghae %}será público{% else %}está disponible para todos los miembros de la empresa{% endif %}, hemos hecho el repositorio privado. En este solo paso, también se inicializará con un archivo Léame y una [plantilla .gitignore][nanoc] de estilo [nanoc][gitignore templates].

El repositorio resultante se encontrará en `https://github.com/<your_username>/blog`.
Para crear un repositorio en una organización de la que sea propietario, solo tiene que cambiar el método de API de `/user/repos` a `/orgs/<org_name>/repos`.

Posteriormente vamos a obtener nuestro repositorio recién creado:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/pengwynn/blog

> HTTP/2 404

> {
>    "message": "Not Found"
> }
```

¡Oh no! ¿A dónde se fue? Como el repositorio se ha creado como _privado_, es necesario autenticarse para verlo. Si es un usuario experimentado de HTTP, es posible que espere un elemento `403` en su lugar. Como no quiere filtrar información sobre los repositorios privados, la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} devuelve `404` en este caso, como si quiere decir que "no se puede confirmar ni negar la existencia de este repositorio".

## <a name="issues"></a>Issues

La interfaz de usuario de incidencias en {% data variables.product.product_name %} pretende proporcionar el flujo de trabajo "suficiente"que no resulte molesto. Con [Issues API][issues-api] de {% data variables.product.product_name %}, puede extraer datos o crear incidencias de otras herramientas a fin de crear un flujo de trabajo que funcione para el equipo.

Como sucede en github.com, la API proporciona algunos métodos para ver las incidencias para el usuario autenticado. Para [ver todas las incidencias][get issues api], llame a `GET /issues`:

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    {% data variables.product.api_url_pre %}/issues
```

Para obtener solo las [incidencias en una de las organizaciones de {% data variables.product.product_name %}][get issues api], llame a `GET
/orgs/<org>/issues`:

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    {% data variables.product.api_url_pre %}/orgs/rails/issues
```

También se pueden obtener [todas las incidencias de un único repositorio][repo issues api]:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues
```

### <a name="pagination"></a>Paginación

Un proyecto con el tamaño de Rails tiene miles de informes de problemas. Será necesario [paginar][pagination] y realizar varias llamadas API para obtener los datos. Se repetirá la última llamada y esta vez se anotará los encabezados de respuesta:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues

> HTTP/2 200

> ...
> Link: &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=2&gt;; rel="next&quot;, &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=30&gt;; rel=&quot;last"
> ...
```

El [encabezado `Link`][link-header] permite que una respuesta se vincule a recursos externos, en este caso páginas de datos adicionales. Como la llamada ha detectado más de 30 incidencias (el tamaño predeterminado de página), la API indica dónde se puede encontrar la siguiente página y la última página de los resultados.

### <a name="creating-an-issue"></a>Crear una propuesta

Ahora que ha visto cómo paginar listas de incidencias, se [creará una incidencia][create issue] desde la API.

Para crear una incidencia, debe estar autenticado, por lo que se pasará un token de OAuth en el encabezado. También se pasarán el título, el cuerpo y las etiquetas en el cuerpo JSON a la ruta `/issues` debajo del repositorio en el que se quiere crear la incidencia:

```shell
$ curl -i -H 'Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a' \
$    -d '{ \
$         "title": "New logo", \
$         "body": "We should have one", \
$         "labels": ["design"] \
$       }' \
$    {% data variables.product.api_url_pre %}/repos/pengwynn/api-sandbox/issues

> HTTP/2 201
> Location: {% data variables.product.api_url_pre %}/repos/pengwynn/api-sandbox/issues/17
> X-RateLimit-Limit: 5000

> {
>   "pull_request": {
>     "patch_url": null,
>     "html_url": null,
>     "diff_url": null
>   },
>   "created_at": "2012-11-14T15:25:33Z",
>   "comments": 0,
>   "milestone": null,
>   "title": "New logo",
>   "body": "We should have one",
>   "user": {
>     "login": "pengwynn",
>     "gravatar_id": "7e19cd5486b5d6dc1ef90e671ba52ae0",
>     "avatar_url": "https://secure.gravatar.com/avatar/7e19cd5486b5d6dc1ef90e671ba52ae0?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
>     "id": 865,
>     "url": "{% data variables.product.api_url_pre %}/users/pengwynn"
>   },
>   "closed_at": null,
>   "updated_at": "2012-11-14T15:25:33Z",
>   "number": 17,
>   "closed_by": null,
>   "html_url": "https://github.com/pengwynn/api-sandbox/issues/17",
>   "labels": [
>     {
>       "color": "ededed",
>       "name": "design",
>       "url": "{% data variables.product.api_url_pre %}/repos/pengwynn/api-sandbox/labels/design"
>     }
>   ],
>   "id": 8356941,
>   "assignee": null,
>   "state": "open",
>   "url": "{% data variables.product.api_url_pre %}/repos/pengwynn/api-sandbox/issues/17"
> }
```

La respuesta proporciona un par de punteros a la incidencia recién creada, tanto en el encabezado de respuesta `Location` como en el campo `url` de la respuesta JSON.

## <a name="conditional-requests"></a>Solicitudes condicionales

Una gran parte de ser un buen ciudadano de la API es respetar los límites de tasa al almacenar información en el caché, la cual no haya cambiado. La API admite [solicitudes condicionales][conditional-requests] y le ayuda a hacer lo correcto. Considere la primera llamada realiza para obtener el perfil de defunkt:

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/2 200
> etag: W/"61e964bf6efa3bc3f9e8549e56d4db6e0911d8fa20fcd8ab9d88f13d513f26f0"
```

Además del cuerpo JSON, anote el código de estado HTTP de `200` y el encabezado `ETag`.
[ETag][etag] es una huella digital de la respuesta. Si se pasa en las llamadas posteriores, se puede indicar a la API que proporcione otra vez el recurso, solo si ha cambiado:

```shell
$ curl -i -H 'If-None-Match: "61e964bf6efa3bc3f9e8549e56d4db6e0911d8fa20fcd8ab9d88f13d513f26f0"' \
$    {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/2 304
```

El estado `304` indica que el recurso no ha cambiado desde la última vez que se solicitó y que la respuesta no contendrá ningún cuerpo. Como bonificación, las respuestas `304` no cuentan para el [límite de frecuencia][rate-limiting].

¡Ahora conoces lo básico de la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}!

* Autenticación básica y de OAuth
* Obtener y crear repositorios e informes de problemas
* Solicitudes condicionales

Siga aprendiendo con la siguiente guía de API [Aspectos básicos de la autenticación][auth guide].

[wrappers]: /libraries/
[curl]: http://curl.haxx.se/
[media types]: /rest/overview/media-types
[oauth]: /apps/building-integrations/setting-up-and-registering-oauth-apps/
[webflow]: /apps/building-oauth-apps/authorizing-oauth-apps/
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[repos-api]: /rest/reference/repos
[pages]: http://pages.github.com
[nanoc]: http://nanoc.ws/
[gitignore templates]: https://github.com/github/gitignore
[issues-api]: /rest/reference/issues
[link-header]: https://www.w3.org/wiki/LinkHeader
[conditional-requests]: /rest#conditional-requests
[rate-limiting]: /rest/overview/resources-in-the-rest-api#rate-limit-http-headers
[users api]: /rest/reference/users#get-a-user
[auth user api]: /rest/reference/users#get-the-authenticated-user
[defunkt github]: https://github.com/defunkt
[json]: http://en.wikipedia.org/wiki/JSON
[authentication]: /rest#authentication
[2fa]: /articles/about-two-factor-authentication
[2fa header]: /rest/overview/other-authentication-methods#working-with-two-factor-authentication
[oauth section]: /rest/guides/getting-started-with-the-rest-api#oauth
[personal token]: /articles/creating-an-access-token-for-command-line-use
[tokens settings]: https://github.com/settings/tokens
[pagination]: /rest#pagination
[get repo]: /rest/reference/repos#get-a-repository
[create repo]: /rest/reference/repos#create-a-repository-for-the-authenticated-user
[create issue]: /rest/reference/issues#create-an-issue
[auth guide]: /guides/basics-of-authentication
[user repos api]: /rest/reference/repos#list-repositories-for-the-authenticated-user
[other user repos api]: /rest/reference/repos#list-repositories-for-a-user
[org repos api]: /rest/reference/repos#list-organization-repositories
[get issues api]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
[repo issues api]: /rest/reference/issues#list-repository-issues
[etag]: http://en.wikipedia.org/wiki/HTTP_ETag
[2fa section]: /rest/guides/getting-started-with-the-rest-api#two-factor-authentication
