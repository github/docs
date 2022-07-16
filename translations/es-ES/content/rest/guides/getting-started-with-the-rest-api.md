---
title: Iniciar con la API de REST
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
shortTitle: Introducción - API de REST
---


Vamos a explicar los conceptos centrales de la API mientras incluímos algunos casos de uso cotidiano.

{% data reusables.rest-api.dotcom-only-guide-note %}

## Resumen

La mayoría de las aplicaciones utilizan una [biblioteca de seguridad][wrappers] en el lenguaje de programación que escojas, pero es importante que te familiarices con los métodos HTTP básicos de la API primero.

No hay una forma más fácil de hacerlo que a través de [cURL][curl].{% ifversion fpt or ghec %} Si estás utilizando un cliente alternativo, tioma en cuenta que necesitarás enviar un [encabezado de Agente de Usuario](/rest/overview/resources-in-the-rest-api#user-agent-required) válido en tu solicitud.{% endif %}

### Hola Mundo

Comencemos por probar nuestra configuración. Abre una instancia de la línea de comandos e ingresa el siguiente comando:

```shell
$ curl https://api.github.com/zen

> Keep it logically awesome.
```

La respuesta será una selección aleatoria de nuestra filosofía de diseño.

Posteriormente, vamos a hacer `GET` para el [perfil de GitHub][users api] de [Chris Wanstrath][defunkt github]:

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

Mmmm, sabe a [JSON][json]. Vamos a agregar el marcador `-i` para que incluya los encabezados:

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

Hay algunas partes interesantes en los encabezados de la respuesta. Como lo esperábamos, el `Content-Type` es `application/json`.

Cualquier encabezado que comience como `X` se refiere a un encabezado personalizado, y no se incluirá en la especificación de HTTPS. Por ejemplo, toma en cuenta los encabezados `X-RateLimit-Limit` y `X-RateLimit-Remaining`. Este par de encabezados indican [cuántas solicitudes puede hacer un cliente][rate-limiting] en un periodo continuo (habitualmente, una hora) y cuántas de ellas ya ha gastado el cliente.

## Autenticación

Los clientes sin autenticar pueden hacer hasta 60 solicitudes por hora. Para obtener más solicitudes por hora, necesitaremos _autenticarnos_. De hecho, para hacer cualquier cosa interesante con la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} se necesita [autenticación][authentication].

### Utilizar tokens de acceso personal

La forma más fácil y mejor de autenticarte con la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} es utilizando la autenticación básica [mediante tokens de OAuth](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens). Éstos incluyen [tokens de acceso personal][personal token].

Utiliza el marcador `-u` para configurar tu nombre de usuario:

```shell
$ curl -i -u <em>your_username</em> {% data variables.product.api_url_pre %}/users/octocat

```

Cuando se te solicite, puedes ingresar tu token de OAuth, pero te recomendamos que configures una variable para éste:

Puedes utilizar `-u "your_username:$token"` y configurar una variable para `token` y así evitar que tu token se quede en el historial del shell, lo cual debes evitar.

```shell
$ curl -i -u <em>your_username:$token</em> {% data variables.product.api_url_pre %}/users/octocat

```

Cuando te autentiques, debes ver como tu límite de tasa sube hasta 5,000 solicitudes por hora, como se indicó en el encabezado `X-RateLimit-Limit`. Adicionalmente a proporcionar más llamadas por hora, la autenticación te permite leer y escribir información privada utilizando la API.

Puedes [crear un**token de acceso personal**][personal token] fácilmente utilizando tu [página de configuración para tokens de acceso personal][tokens settings]:

{% warning %}

Para mantener tu información segura, te recomendamos ampliamente que configures un vencimiento para tus tokens de acceso personal.

{% endwarning %}

{% ifversion fpt or ghes or ghec %}
![Selección de token personal](/assets/images/personal_token.png)
{% endif %}

{% ifversion ghae %}
![Selección de token personal](/assets/images/help/personal_token_ghae.png)
{% endif %}

Las solicitudes de la API que utilicen un token de acceso personal con vencimiento devolverán la fecha de vencimiento de dicho token a través del encabezado de `GitHub-Authentication-Token-Expiration`. Puedes utilizar el encabezado en tus scripts para proporcionar un mensaje de advertencia cuando el token esté próximo a vencer.

### Obtén tu propio perfil de usuario

Cuando te autenticas adecuadamente, puedes beneficiarte de los permisos asociados con tu cuenta en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Por ejemplo, intenta obtener

```shell
$ curl -i -u <em>your_username</em>:<em>your_token</em> {% data variables.product.api_url_pre %}/user

> {
>   ...
>   "plan": {
>     "space": 2516582,
>    "collaborators": 10,
>    "private_repos": 20,
>    "name": "medium"
>  }
>   ...
> }
```

Esta vez, adicionalmente al mismo conjunto de información pública que recuperamos para [@defunkt][defunkt github] anteriormente, también deberías ver la información diferente a la pública para tu perfil de usuario. Por ejemplo, verás un objeto de `plan` en la respuesta, el cual otorga detalles sobre el plan de {% data variables.product.product_name %} que tiene la cuenta.

### Utiilzar tokens de OAuth para las apps

Las apps que necesitan leer o escribir información privada utilizando la API en nombre de otro usuario deben utilizar [OAuth][oauth].

OAuth utiliza _tokens_. Los Tokens proporcionan dos características grandes:

* **Acceso revocable**: los usuarios pueden revocar la autorización a las apps de terceros en cualquier momento
* **Acceso limitado**: los usuarios pueden revisar el acceso específico que proporcionará un token antes de autorizar una app de terceros

Los tokens deben crearse mediante un [flujo web][webflow]. Una aplicación envía a los usuarios a {% data variables.product.product_name %} para que inicien sesión. Entonces, {% data variables.product.product_name %} presenta un diálogo que indica el nombre de la app así como el nivel de acceso que ésta tiene una vez que el usuario la autorice. Después de que un usuario autoriza el acceso, {% data variables.product.product_name %} lo redirecciona de vuelta a la aplicación:

![Diálogo de OAuth de GitHub](/assets/images/oauth_prompt.png)

**¡Trata a los tokens de OAuth como si fueran contraseñas!** No los compartas con otros usuarios ni los almacenes en lugares inseguros. Los tokens en estos ejemplos son falsos y los nombres se cambiaron para proteger a los inocentes.

Ahora que ya entendimos cómo hacer llamadas autenticadas, vamos a pasar a la [API de repositorios][repos-api].

## Repositorios

Casi cualquier uso significativo de la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} involucrará algún nivel de información de repositorio. Podemos hacer [`GET` para los detalles de un repositorio][get repo] de la misma forma que recuperamos los detalles del usuario anteriormente:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/twbs/bootstrap
```

De la misma forma, podemos [ver los repositorios del usuario autenticado][user repos api]:

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    {% data variables.product.api_url_pre %}/user/repos
```

O podemos [listar los repositorios de otro usuario][other user repos api]:

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/octocat/repos
```

O podemos [listar los repositorios de una organización][org repos api]:

```shell
$ curl -i {% data variables.product.api_url_pre %}/orgs/octo-org/repos
```

La información que se devuelve de estas llamadas dependerá de los alcances que tenga nuestrotoken cuando nos autenticamos:

{%- ifversion fpt or ghec or ghes %}
* Un token con [alcance][scopes] de `public_repo` devolverá una respuesta que incluye todos los repositorios públicos que podemos ver en {% data variables.product.product_location %}.
{%- endif %}
* Un token con [alcance][scopes] de `repo` devolverá una respuesta que incluirá a todos los repositorios {% ifversion fpt %}públicos o privados{% elsif ghec or ghes %} públicos, privados o internos{% elsif ghae %} privados o internos{% endif %} a los que se tiene acceso para ver en {% data variables.product.product_location %}.

Como indican los [docs][repos-api], estos métodos toman un parámetro de `type` que puede filtrar los repositorios que se regresan con base en el tipo de acceso que el usuario tiene en ellos. De esta forma, podemos obtener los solo los repositorios que nos pertenezcan directamente, repositorios de organizacion o repositorios en los que el usuario colabore a través del equipo.

```shell
$ curl -i "{% data variables.product.api_url_pre %}/users/octocat/repos?type=owner"
```

En este ejemplo, tomamos únicamente los repositorios que pertenecen a octocat, no aquellos en los que ella colabora. Nota la URL que se cita arriba. Dependiendo de tu configuración de shell, cURL a veces requiere una URL citada, o de lo contrario ignora la secuencia de consulta.

### Crear un repositorio

Un caso de común de uso es retribuir información para repositorios existentes, pero la
La API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} también es compatible con crear repositorios nuevos. Para [crear un repositorio][create repo],
necesitamos hacer `POST` en algunos JSON que contengan los detalles y las opciones de configuración.

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    -d '{
        "name": "blog",
        "auto_init": true,
        "private": true,
        "gitignore_template": "nanoc"
      }' \
    {% data variables.product.api_url_pre %}/user/repos
```

En este ejemplo mínimo, creamos un repositorio privado nuevo para nuestro blog (que se servirá en [GitHub Pages][pages], probablemente). Aunque el blog {% ifversion not ghae %}será público{% else %}está disponible para todos los miembros de la empresa{% endif %}, hemos hecho el repositorio privado. En este paso, también lo inicializaremos con un README y con una [plantilla de.gitignored][gitignore templates] enriquecida con [nanoc][nanoc].

El repositorio que se obtiene como resultado se puede encontrar en `https://github.com/<your_username>/blog`. Para crear un repositorio bajo una organización para la cual eres propietario, solo cambia el método de la API de `/user/repos` a `/orgs/<org_name>/repos`.

Posteriormente vamos a obtener nuestro repositorio recién creado:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/pengwynn/blog

> HTTP/2 404

> {
>    "message": "Not Found"
> }
```

¡Oh no! ¿A dónde se fue? Ya que creamos el repositorio como _privado_, necesitamos autenticarnos para poder verlo. Si eres un usuario experimentado en HTTP, tal vez esperes recibir un código `403` en vez de ésto. Ya que no queremos filtrar información sobre los repositorios privados, la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} devolverá un `404` en este caso para decir "no podemos confirmar ni negar la existencia de este repositorio".

## Problemas

La IU de informe de problemas en {% data variables.product.product_name %} pretende proporcionar suficiente flujo de trabajo mientras evita estorbarte. Con la [API de propuestas][issues-api] de {% data variables.product.product_name %}, puedes extraer datos para crear propuestas desde otras herramientas para crear flujos de trabajo que funcionen para tu equipo.

Tal como en github.com, la API proporciona algunos cuantos métodos para ver los informes de problemas para el usuario autenticado. Para [ver todas tus propuestas][get issues api], llama a `GET /issues`:

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    {% data variables.product.api_url_pre %}/issues
```

Para obtener únicamente las [propuestas bajo alguna de tus organizaciones de {% data variables.product.product_name %}][get issues api], llama a `GET
/orgs/<org>/issues`:

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    {% data variables.product.api_url_pre %}/orgs/rails/issues
```

También podemos obtener [todas las propuestas que estén bajo un solo repositorio][repo issues api]:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues
```

### Paginación

Un proyecto con el tamaño de Rails tiene miles de informes de problemas. Necesitaremos [paginar][pagination], haciendo varias llamadas a la API para obtener los datos. Vamos a repetir la última llamada, esta vez tomando nota de los encabezados de respuesta:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues

> HTTP/2 200

> ...
> Link: &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=2&gt;; rel="next", &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=30&gt;; rel="last"
> ...
```

El [encabezado de `Link`][link-header] proporciona una respuesta para enlazar a los recursos externos, en este caso, a las páginas de datos adicionales. Ya que nuestra llamada encontró más de treinta informes de problemas (el tamaño predeterminado de página), la API no s dice dónde podemos encontrar la siguiente página y la última página de los resultados.

### Crear una propuesta

Ahora que hemos visto cómo paginar las listas de propuestas, vamos a [crear una propuesta][create issue] desde la API.

Para crear un informe de problemas, necesitamos estar autenticados, así que pasaremos un token de OAuth en el encabezado. También, pasaremos el título, cuerpo, y etiquetas en el cuerpo de JSON a la ruta `/issues` debajo del repositorio en el cual queremos crear el informe de problemas:

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

La respuesta nos entrega un par de sugerencias para el informe de problemas recién creado, tanto en el encabezado de respuesta de `Location` como en el campo de `url` de la respuesta de JSON.

## Solicitudes condicionales

Una gran parte de ser un buen ciudadano de la API es respetar los límites de tasa al almacenar información en el caché, la cual no haya cambiado. La API es compatible con las [solicitudes condicionales][conditional-requests] y te ayuda a hacer lo correcto. Considera el primer llamado que hicimos para obtener el perfil de defunkt:

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/2 200
> etag: W/"61e964bf6efa3bc3f9e8549e56d4db6e0911d8fa20fcd8ab9d88f13d513f26f0"
```

Además del cuerpo de JSON, toma nota del código de estado HTTP de `200` y del encabezado `ETag`. La [ETag][etag] es una huella digital de la respuesta. Si la pasamos en llamadas subsecuentes, podemos decirle a la API que nos entregue el recurso nuevamente, únicamente si cambió:

```shell
$ curl -i -H 'If-None-Match: "61e964bf6efa3bc3f9e8549e56d4db6e0911d8fa20fcd8ab9d88f13d513f26f0"' \
$    {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/2 304
```

El estado `304` indica que el recurso no ha cambiado desde la última vez que lo solicitamos y que la respuesta no contendrá ningún cuerpo. Como bono, las respuestas de tipo `304` no cuentan en tu [límite de tasa][rate-limiting].

¡Ahora conoces lo básico de la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}!

* Autenticación básica & de OAuth
* Obtener y crear repositorios e informes de problemas
* Solicitudes condicionales

Sigue aprendiendo con la siguiente guía de la API ¡[Fundamentos de la Autenticación][auth guide]!

[wrappers]: /libraries/
[curl]: http://curl.haxx.se/
[oauth]: /apps/building-integrations/setting-up-and-registering-oauth-apps/
[webflow]: /apps/building-oauth-apps/authorizing-oauth-apps/
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[repos-api]: /rest/reference/repos
[repos-api]: /rest/reference/repos
[pages]: http://pages.github.com
[nanoc]: http://nanoc.ws/
[gitignore templates]: https://github.com/github/gitignore
[issues-api]: /rest/reference/issues
[link-header]: https://www.w3.org/wiki/LinkHeader
[conditional-requests]: /rest#conditional-requests
[rate-limiting]: /rest/overview/resources-in-the-rest-api#rate-limit-http-headers
[rate-limiting]: /rest/overview/resources-in-the-rest-api#rate-limit-http-headers
[users api]: /rest/reference/users#get-a-user
[defunkt github]: https://github.com/defunkt
[defunkt github]: https://github.com/defunkt
[json]: http://en.wikipedia.org/wiki/JSON
[authentication]: /rest#authentication
[personal token]: /articles/creating-an-access-token-for-command-line-use
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
[get issues api]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
[repo issues api]: /rest/reference/issues#list-repository-issues
[etag]: http://en.wikipedia.org/wiki/HTTP_ETag
