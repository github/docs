---
title: Iniciar con la API de REST
intro: 'Aprende cómo utilizar la API de REST de {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Utilizar la API
miniTocMaxHeadingLevel: 3
---

## Acerca de la API de REST de {% data variables.product.prodname_dotcom %}

Este artículo describe cómo utilizar la API de REST de {% data variables.product.prodname_dotcom %} usando el {% data variables.product.prodname_cli %}, JavaScript o cURL. Para encontrar una guía de inicio rápido, consulta la "[Guía de inicio rápido para la API de REST de GitHub](/rest/quickstart)".

Cuando haces una solicitud a la API de REST, especificarás un método HTTP y una ruta. Adicionalmente, también podrías especificar encabezados de solicitud y parámetros de ruta, consulta o cuerpo. La API devolverá el código de estado de respuesta, los encabezados de respuesta y, potencialmente, un cuerpo de respuesta.

La documentación de referencia de la API de REST describe el método HTTP, ruta y parámetros para cada operación. También muestra solicitudes y respuestas de ejemplo para cada operación. Para obtener más información, consulta la [documentación de referencia de REST](/rest).

## Hacer una solicitud

Para hacer una solicitud, primero encuentra el método HTTP y la ruta para la operación que quieres utilizar. Por ejemplo, la operación "Get Octocat" utiliza el método `GET` y la ruta `/octocat`. Para encontrar la documentación completa para esta operación, consulta "[Get Octocat](/rest/meta#get-octocat)".

{% cli %}

{% note %}

**Nota**: Debes instalar el {% data variables.product.prodname_cli %} para poder utilizar los comandos en los ejemplos del {% data variables.product.prodname_cli %}. Para encontrar instrucciones de instalación, consulta el [repositorio de {% data variables.product.prodname_cli %}](https://github.com/cli/cli#installation).

{% endnote %}

Si aún no estás autenticado en el {% data variables.product.prodname_cli %}, debes utilizar el subcomando `gh auth login` para autenticarte antes de hacer hacer cualquier tipo de solicitud. Para obtener más información, consulta la sección "[Autenticarse](#authenticating)".

Para hacer una solicitud utilizando el {% data variables.product.prodname_cli %}, utiliza el subcomando `api` junto con la ruta. Utiliza el marcador `--method` o `-X` para especificar el método.

```shell
gh api /octocat --method GET
```

{% endcli %}

{% javascript %}

{% note %}

**Nota**: Debes instalar e importar `octokit` para utilizar la librería Octokit.js que se utiliza en los ejemplos de JavaScript. Para obtener más información, consulta [el README de Octokit.js](https://github.com/octokit/octokit.js/#readme).

{% endnote %}

Para hacer una solicitud utilizando JavaScript, puedes usar Octokit.js. Para obtener más información, consulta [el README de Octokit.js](https://github.com/octokit/octokit.js/#readme).

Primero, crea una instancia de `Octokit`.{% ifversion ghes or ghae %} Ajusta la URL base en `{% data variables.product.api_url_code %}`. Reemplaza a `[hostname]` con el nombre de {% data variables.product.product_location %}.{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});
```

Luego, utiliza el método `request` para hacer solilcitudes. Pasa el método HTTP y la ruta como el primer argumento.

```javascript
await octokit.request("GET /octocat", {});
```

{% endjavascript %}

{% curl %}

Antepón la URL base para la API de REST de {% data variables.product.prodname_dotcom %}, `{% data variables.product.api_url_code %}`, a la ruta para obtener la URL completa: `{% data variables.product.api_url_code %}/octocat`.{% ifversion ghes or ghae %} Reemplaza a `[hostname]` con el nombre de {% data variables.product.product_location %}.{% endif %}

Utiliza el comando `curl` en tu línea de comando. Utiliza el marcador `--request` o `-X` seguido del método HTTP. Utiliza el marcador `--url` seguido de la URL completa.

```shell
curl --request GET \
--url "https://api.github.com/octocat"
```

{% note %}

**Nota**: Si obtienes un mensaje similar a "command not found: curl", puede que necesites descargar e instalar cURL. Para obtener más información, consulta [la página de descarga del proyecto cURL](https://curl.se/download.html).

{% endnote %}

{% endcurl %}

Sigue leyendo para aprender cómo autenticarte, enviar parámetros y utilizar la respuesta.

## Autenticarse

Muchas operaciones necesitan autenticación o devuelven información adicional si estás autenticado. Adicionalmente, puedes hacer más solicitudes por hora cuando estás autenticado.{% cli %} Aunque se puede acceder a algunas operaciones de la API de REST sin autenticación, debes autenticar en el {% data variables.product.prodname_cli %} para utilizar el subcomando `api`.{% endcli %}

### Acerca de los tokens

Puedes autenticar tu solicitud agregando un token.

Si quieres utilizar la API de REST de {% data variables.product.company_short %} para uso personal, puedes crear un token de acceso personal (PAT). Las operaciones de la API de REST que se utilizan en este artículo requieren del alcance `repo` para los tokens de acceso personal. Otras operaciones podrían requerir alcances diferentes. Para obtener más información acerca de cómo crear un token de acceso personal, consulta la sección "[Crear un token de acceso personal](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

Si quieres utilizar la API en nombre de una organización o de otro usuario, {% data variables.product.company_short %} recomienda que utilices una {% data variables.product.prodname_github_app %}. Si una operación está disponible para las {% data variables.product.prodname_github_apps %}, la documentación de referencia de REST para dicha operación dirá "Works with GitHub Apps". Las operaciones de la API de REST que se utilizan en este artículo requieren permisos de lectura y escritura de `issues` para las {% data variables.product.prodname_github_apps %}. Otras operaciones podrían requerir permisos diferentes. Para obtener más información, consulta las secciones "[Crear una GitHub App](/developers/apps/building-github-apps/creating-a-github-app)", "[Autenticarte con las GitHub Apps](/developers/apps/building-github-apps/authenticating-with-github-apps)" e "[Identificar y autorizar usuarios para las GitHub Apps](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)".

Si quieres utilizar la API en un flujo de trabajo de {% data variables.product.prodname_actions %}, {% data variables.product.company_short %} recomienda que te autentiques con el `GITHUB_TOKEN` integrado en vez de crear un token. Puedes otorgar permisos al `GITHUB_TOKEN` con la clave `permissions`. Para obtener más información, consulta la sección "[Autenticación automática de tokens](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)".

### Ejemplo de autenticación

{% cli %}

Con el {% data variables.product.prodname_cli %}, no necesitas crear un token de acceso anticipadamente. Utiliza el subcomando `auth login` para autenticarte en el {% data variables.product.prodname_cli %}:

```shell
gh auth login
```

Puedes utilizar el marcador `--scopes` para especificar los alcances que quieres. Si quieres autenticarte con un token que hayas creado, puedes utilizar el marcador `--with-token`. Para obtener más información, consulta la [documentación de `auth login` del {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_auth_login).

{% endcli %}

{% javascript %}

{% warning %}

**Advertencia**: Trata tu token de acceso como si fuera una contraseña.

Para mantener seguro a tu token, puedes almacenarlo como un secreto y ejecutar tu script mediante {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

{% ifversion ghec or fpt %}También puedes almacenar tu token como un secreto de {% data variables.product.prodname_codespaces %} y ejecutar tu script en {% data variables.product.prodname_codespaces %}. Para obtener más información, consulta la sección "[Administrar los secretos cifrados para tus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".{% endif %}

Si estas opciones no son posibles, considera utilizar otro servicio tal como [el 1Password CLI](https://developer.1password.com/docs/cli/secret-references/) para almacenar tu token de forma segura.

{% endwarning %}

Para autenticarte con la librería Octokit.js, puedes pasar tu token cuando crees una instancia de `Octokit`. Reemplaza tu `YOUR-TOKEN` con tu token.{% ifversion ghes or ghae %} Reemplaza `[hostname]` con el nombre de {% data variables.product.product_location %}.{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: 'YOUR-TOKEN',
});
```

{% endjavascript %}

{% curl %}

{% warning %}

**Advertencia**: Trata a tu token de acceso como si fuera una contraseña.

Para ayudarte a mantener segura tu cuenta, puedes utilizar el {% data variables.product.prodname_cli %} en vez de cURL. El {% data variables.product.prodname_cli %} se encargará de la autenticación por ti. Para obtener más información, consulta la versión del {% data variables.product.prodname_cli %} de esta página.

{% ifversion ghec or fpt %}También puedes almacenar tu token como un secreto de {% data variables.product.prodname_codespaces %} y utilizar la línea de comandos a través de {% data variables.product.prodname_codespaces %}. Para obtener más información, consulta la sección "[Administrar los secretos cifrados para tus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".{% endif %}

Si estas opciones no son posibles, considera utilizar otro servicio tal como [el 1Password CLI](https://developer.1password.com/docs/cli/secret-references/) para almacenar tu token de forma segura.

{% endwarning %}

Con cURL, enviarás un encabezado de `Authorization` con tu token. Reemplaza `YOUR-TOKEN` con tu token:

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"
```

{% note %}

**Nota:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

{% endcurl %}

### Ejemplo de autenticación para {% data variables.product.prodname_actions %}

{% cli %}

También puedes utilizar la palabra clave `run` para ejecutar los comandos del {% data variables.product.prodname_cli %} en tus flujos de trabajo de {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para las GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

En vez de utilizar el comando `gh auth login`, pasa tu token como una variable de ambiente llamada `GH_TOKEN`. {% data variables.product.prodname_dotcom %} recomienda que te autentiques con el `GITHUB_TOKEN` integrado en vez de crear un token. Si esto no es posible, almacena tu token como un secreto y reemplaza a `GITHUB_TOKEN` con el nombre de tu secreto en el siguiente ejemplo. Para obtener más información sobre `GITHUB_TOKEN`, consulta la sección "[Autenticación automática de token](/actions/security-guides/automatic-token-authentication)". Para obtener más información sobre los secretos, consulta la sección "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

```yaml
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          gh api /octocat
```

{% endcli %}

{% javascript %}

También puedes utilizar la palabra clave `run` para ejecutar tus scripts de JavaScript en tus flujos de trabajo de {% data variables.product.prodname_actions %}. Para obtener más información, consultala sección "[Sintaxis de flujo de trabajo para GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

{% data variables.product.prodname_dotcom %} recomienda que te autentiques con el `GITHUB_TOKEN` integrado en vez de crear un token. Si esto es imposible, almacena tu token como un secreto y reemplaza a `GITHUB_TOKEN` por el nombre de tu secreto en el siguiente ejemplo. Para obtener más información sobre el `GITHUB_TOKEN`, consulta ""[Automatic token authentication](/actions/security-guides/automatic-token-authentication)". Para obtener más información sobre los secretos, consulta la sección "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

El siguiente flujo de trabajo de ejemplo:

1. Verifica el contenido del repositorio
1. Configura a Node.js
1. Instala `octokit`
1. Almacena el valor de `GITHUB_TOKEN` como una variable de ambiente llamada `TOKEN` y ejecuta `.github/actions-scripts/use-the-api.mjs`, que puede acceder a esa variable de ambiente como `process.env.TOKEN`

Flujo de trabajo de ejemplo:

```yaml
on:
  workflow_dispatch:
jobs:
  use_api_via_script:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - name: Check out repo content
        uses: {% data reusables.actions.action-checkout %}

      - name: Setup Node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.15.0'
          cache: npm

      - name: Install dependencies
        run: npm install octokit

      - name: Run script
        env:
          TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          node .github/actions-scripts/use-the-api.mjs
```

Script de JavaScript de ejemplo con la ruta de archivo `.github/actions-scripts/use-the-api.mjs`:

```javascript
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: process.env.TOKEN,
});

await octokit.request("GET /octocat", {});
```

En vez de almacenar tu script en un archivo por separado y ejecutarlo desde tu flujo de trabajo, puedes utilizar la acción `actions/github-script` para ejecutar un script. Para obtener más información, consulta el [README de actions/github-script](https://github.com/actions/github-script).

```yaml
jobs:
  use_api_via_script:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - uses: {% data reusables.actions.action-github-script %}
        with:
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          script: |
            await github.request('GET /octocat', {})
```

{% endjavascript %}

{% curl %}

También puedes utilizar la palabra clave `run` para ejecutar comandos de cURL en tus flujos de trabajo de {% data variables.product.prodname_actions %}. Para obtener más información, consultala sección "[Sintaxis de flujo de trabajo para GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

{% data variables.product.prodname_dotcom %} recomienda que te autentiques con el `GITHUB_TOKEN` integrado en vez de crear un token. Si esto es imposible, almacena tu token como un secreto y reemplaza a `GITHUB_TOKEN` por el nombre de tu secreto en el siguiente ejemplo. Para obtener más información sobre el `GITHUB_TOKEN`, consulta ""[Automatic token authentication](/actions/security-guides/automatic-token-authentication)". Para obtener más información sobre los secretos, consulta la sección "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

```yaml
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          curl --request GET \
          --url "https://api.github.com/octocat" \
          --header "Authorization: Bearer $GH_TOKEN"
```

{% endcurl %}

## Utilizar encabezados

La mayoría de las operaciones especifican que deberías pasar un encabezado de `Accept` con un valor de `application/vnd.github.v3+json`. Otras operaciones podrían especificar que deberías enviar un encabezado diferente de `Accept` o encabezados adicionales.

{% cli %}

Para enviar un encabezado con el {% data variables.product.prodname_cli %}, utiliza el marcador `--header` o `-H` seguido del encabezado en el formato `key: value`.

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /octocat
```

{% endcli %}

{% javascript %}

La librería Octokit.js pasa automáticamente el encabezado `Accept: application/vnd.github.v3+json`. Para pasar encabezados adicionales o un encabezado de `Accept` diferente, agrega la propiedad `headers` al objeto que se está pasando como un segundo argumento del método `request`. El valor de la propiedad `headers` es un objeto con los nombres de encabezado como claves y los valores de encabezado como valores. Por ejemplo, para enviar un encabezado de `content-type` con un valor de `text/plain`:

```javascript
await octokit.request("GET /octocat", {
  headers: {
    "content-type": "text/plain",
  },
});
```

{% endjavascript %}

{% curl %}

Para enviar un encabezado con cURL, utiliza el marcador `--header` o `-H` seguido del encabezado en formato `key: value`.

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"
```

{% endcurl %}

## Utilizar parámetros de ruta

Los parámetros de ruta modifican la ruta de operación. Por ejemplo, la ruta de "Listar propuestas de repositorio" es `/repos/{owner}/{repo}/issues`. Las llaves `{}` denotan parámetros de ruta que necesitas especificar. En este caso, debes especificar el nombre y propietario del repositorio. Para encontrar la documentación de referencia para esta operación, consulta la "[Lista de propuestas de repositorio](/rest/issues/issues#list-repository-issues)".

{% cli %}

{% ifversion ghes or ghae %}
{% note %}

**Nota:** Para que este comando funcione para {% data variables.product.product_location %}, reemplaza `octocat/Spoon-Knife` con un repositorio que le pertenezca a {% data variables.product.product_location %}. De lo contrario, vuelve a ejecutar el comando `gh auth login` para autenticarte en {% data variables.product.prodname_dotcom_the_website %} en vez de en {% data variables.product.product_location %}.

{% endnote %}
{% endif %}

Para obtener propuestas del repositorio `octocat/Spoon-Knife`, reemplaza `{owner}` con `octocat` y `{repo}` with `Spoon-Knife`.

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /repos/octocat/Spoon-Knife/issues
```

{% endcli %}

{% javascript %}

{% ifversion ghes or ghae %}
{% note %}

**Nota:** Para que este ejemplo funcione para {% data variables.product.product_location %}, reemplaza a `octocat/Spoon-Knife` con un repositorio que le pertenezca a {% data variables.product.product_location %}. De lo contrario, crea una nueva instancia de `Octokit` y no especifiques la `baseURL`.

{% endnote %}
{% endif %}

Cuando hagas una solicitud con Octokit.js, todos los parámetros (incluyendo los de ruta) se pasan en un objeto como el segundo argumento para el método `request`. Para obtener propuestas del repositorio `octocat/Spoon-Knife`, especifica el `owner` como `octocat` y el `repo` como `Spoon-Knife`.

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife"
});
```

{% endjavascript %}

{% curl %}

Para obtener propuestas del repositorio `octocat/Spoon-Knife`, reemplaza `{owner}` con `octocat` y `{repo}` with `Spoon-Knife`. Para crear la ruta completa, antepón la URL base para la API de REST de {% data variables.product.prodname_dotcom %}, `https://api.github.com`: `https://api.github.com/repos/octocat/Spoon-Knife/issues`.

{% ifversion ghes or ghae %}
{% note %}

**Nota:** Si quieres utilizar {% data variables.product.product_location %} en vez de {% data variables.product.prodname_dotcom_the_website %}, utiliza `{% data variables.product.api_url_code %}` en vez de `https://api.github.com` y reemplaza a `[hostname]` con el nombre de {% data variables.product.product_location %}. Reemplaza a `octocat/Spoon-Knife` con un repositorio que le pertenezca a {% data variables.product.product_location %}.

{% endnote %}
{% endif %}

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"
```

{% endcurl %}

La operación devuelve una lista de propuestas y datos sobre cada una de ellas. Para obtener más información sobre cómo utilizar la respuesta, consulta la sección "[Utiliza la respuesta](#using-the-response)".

## Utilizar parámetros de consultas

Los parámetros de consultas te permiten controlar los datos que se devuelven para una solicitud. Por ejemplo, un parámetro de consulta te permite especificar cuántos elementos se devuelven cuando la respuesta se pagina.

Predeterminadamente, la operación "List repository issues" devuelve treinta propuestas, ordenadas descendientemente por la fecha en la que se crearon. Puedes utilizar el parámetro `per_page` para devolver dos propuestas en vez de 30. Puedes utilizar el parámetro `sort` para ordenar las propuestas de acuerdo con la fecha en las que se actualizaron por última vez en vez de por la fecha en la que se crearon. Puedes utilizar el parámetro `direction` para ordenar los resultados ascendientemente en vez de descendientemente.

{% cli %}

Para el {% data variables.product.prodname_cli %}, utiliza el marcador `-F` para pasar un parámetro que sea un número, booleano o nulo. Utiliza `-f` para pasar los parámetros de secuencias.

{% note %}

**Nota**: El {% data variables.product.prodname_cli %} no acepta actualmente parámetros que sean arreglos. Para obtener más información, consulta [esta propuesta](https://github.com/cli/cli/issues/1484).

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 -f sort=updated -f direction=asc
```

{% endcli %}

{% javascript %}

Cuando hagas una solicitud con Octokit.js, todos los parámetros, incluyendo los de las consultas, se pasan en un objeto como el segundo argumento para el método `request`.

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  per_page: 2,
  sort: "updated",
  direction: "asc",
});
```

{% endjavascript %}

{% curl %}

Para cURL, agrega un `?` al final de la ruta y luego antepón tu nombre de parámetro de consulta y su valor en la forma `parameter_name=value`. Separa los parámetros de consulta múltiples con `&`.

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2&sort=updated&direction=asc" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"
```

{% endcurl %}

La operación devuelve una lista de propuestas y datos sobre cada una de ellas. Para obtener más información sobre cómo utilizar la respuesta, consulta la sección "[Utiliza la respuesta](#using-the-response)".

## Utilizar parámetros de cuerpo

Los parámetros de cuerpo te permiten pasar datos adicionales a la API. Por ejemplo, la operación "Crear una propuesta" requiere que especifiques un título para la propuesta nueva. También te permite especificar otro tipo de información, tal como el texto a poner en el cuerpo de la propuesta. Para ver toda la documentación de referencia para esta operación, consulta la sección "[Crear una propuesta](/rest/issues/issues#create-an-issue)".

La operación "Create an issue" utiliza la misma ruta que la operación "List repository issues" en el ejemplo anterior, pero utiliza el método `POST` en vez de un método `GET`.

{% cli %}

Para el {% data variables.product.prodname_cli %}, utiliza el marcador `-F` para pasar un parámetro que sea un número, booleano o nulo. Utiliza `-f` para pasar los parámetros de secuencias.

{% note %}

**Nota**: El {% data variables.product.prodname_cli %} no acepta actualmente parámetros que sean arreglos. Para obtener más información, consulta [esta propuesta](https://github.com/cli/cli/issues/1484).

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method POST /repos/octocat/Spoon-Knife/issues -f title="Created with the REST API" -f body="This is a test issue created by the REST API"
```

{% endcli %}

{% javascript %}

Cuando haces una solicitud con Octokit.js, todos los parámetros, incluyendo los del cuerpo, se pasan en un objeto como el segundo argumento al método `request`.

```javascript
await octokit.request("POST /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  title: "Created with the REST API",
  body: "This is a test issue created by the REST API",
});
```

{% endjavascript %}

{% curl %}

Para cURL, utiliza el marcador `--data` para pasar los parámetros del cuerpo en un objeto JSON.

```shell
curl --request POST \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>" \
--data '{
  "title": "Created with the REST API",
  "body": "This is a test issue created by the REST API"
}'
```

{% endcurl %}

La operación crea una propuesta y devuelve datos sobre la propuesta nueva. En la respuesta, encuentra la `html_url` de tu propuesta y navega a esta en el buscador. Para obtener más información sobre cómo utilizar la respuesta, consulta la sección "[Utiliza la respuesta](#using-the-response)".

## Utilizar la respuesta

### Acerca de los encabezados y el código de respuesta

Cada solicitud devolverá un código de estado HTTP que indica el éxito del a respuesta. Para obtener más información sobre los códigos de respuesta, consulta [la documentación del código de estado de respuesta MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

Adicionalmente, la respuesta incluirá encabezados que dan más detalles sobre ella. Los encabezados que comienzan con `X-` o `x-` son personalizados para {% data variables.product.company_short %}. Por ejemplo, los encabezados `x-ratelimit-remaining` y `x-ratelimit-reset` te dicen cuántas solicitudes puedes hacer en un tiempo definido.

{% cli %}

Para ver los encabezados y el código de estado, utiliza el marcador `--include` o `--i` cuando envías tu solicitud.

Por ejemplo, esta solicitud:

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 --include
```

devuelve el código de respuesta y los encabezados como:

```shell
HTTP/2.0 200 OK
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset
Cache-Control: private, max-age=60, s-maxage=60
Content-Security-Policy: default-src 'none'
Content-Type: application/json; charset=utf-8
Date: Thu, 04 Aug 2022 19:56:41 GMT
Etag: W/"a63dfbcfdb73621e9d2e89551edcf9856731ced534bd7f1e114a5da1f5f73418"
Link: <https://api.github.com/repositories/1300192/issues?per_page=1&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=1&page=14817>; rel="last"
Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin
Server: GitHub.com
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
Vary: Accept, Authorization, Cookie, X-GitHub-OTP, Accept-Encoding, Accept, X-Requested-With
X-Accepted-Oauth-Scopes: repo
X-Content-Type-Options: nosniff
X-Frame-Options: deny
X-Github-Api-Version-Selected: 2022-08-09
X-Github-Media-Type: github.v3; format=json
X-Github-Request-Id: 1C73:26D4:E2E500:1EF78F4:62EC2479
X-Oauth-Client-Id: 178c6fc778ccc68e1d6a
X-Oauth-Scopes: gist, read:org, repo, workflow
X-Ratelimit-Limit: 15000
X-Ratelimit-Remaining: 14996
X-Ratelimit-Reset: 1659645499
X-Ratelimit-Resource: core
X-Ratelimit-Used: 4
X-Xss-Protection: 0
```

En este ejemplo, el código de respuesta es `200`, lo que indica una solicitud exitosa.

{% endcli %}

{% javascript %}

Cuando haces una solicitud con Octokit.js, el método `request` devuelve una promesa. Si la solicitud tuvo éxito, la promesa se resuelve en un objeto que incluye el código de estado HTTP de la respuesta (`estado`) y los encabezados de ella (`headers`). Si ocurre un error, la promesa se resuelve en un objeto que incluye el código de estado HTTP de esta (`status`) y los encabezados de la misma (`response.headers`).

Puedes utilizar un bloque `try/catch` para detectar un error si es que ocurre. Por ejemplo, si la solicitud en el siguiente script tiene éxito, este registrará el código de estaod y el valor del encabezado `x-ratelimit-remaining`. Si la solicitud no tuvo éxito, el script registrará el código de estado, el valor del encabezado `x-ratelimit-remaining` y el mensaje de error.

```javascript
try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "octocat",
    repo: "Spoon-Knife",
    per_page: 2,
  });

  console.log(`Success! Status: ${result.status}. Rate limit remaining: ${result.headers["x-ratelimit-remaining"]}`)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Rate limit remaining: ${error.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}`)
}
```

{% endjavascript %}

{% curl %}

Para ver los encabezados y el código de estado, utiliza el marcador `--include` o `--i` cuando envías tu solicitud.

Por ejemplo, esta solicitud:

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>" \
--include
```

devuelve el código de respuesta y los encabezados como:

```shell
HTTP/2 200
server: GitHub.com
date: Thu, 04 Aug 2022 20:07:51 GMT
content-type: application/json; charset=utf-8
cache-control: public, max-age=60, s-maxage=60
vary: Accept, Accept-Encoding, Accept, X-Requested-With
etag: W/"7fceb7e8c958d3ec4d02524b042578dcc7b282192e6c939070f4a70390962e18"
x-github-media-type: github.v3; format=json
link: <https://api.github.com/repositories/1300192/issues?per_page=2&sort=updated&direction=asc&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=2&sort=updated&direction=asc&page=7409>; rel="last"
access-control-expose-headers: ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset
access-control-allow-origin: *
strict-transport-security: max-age=31536000; includeSubdomains; preload
x-frame-options: deny
x-content-type-options: nosniff
x-xss-protection: 0
referrer-policy: origin-when-cross-origin, strict-origin-when-cross-origin
content-security-policy: default-src 'none'
x-ratelimit-limit: 15000
x-ratelimit-remaining: 14996
x-ratelimit-reset: 1659645535
x-ratelimit-resource: core
x-ratelimit-used: 4
accept-ranges: bytes
content-length: 4936
x-github-request-id: 14E0:4BC6:F1B8BA:208E317:62EC2715
```

En este ejemplo, el código de respuesta es `200`, lo que indica una solicitud exitosa.

{% endcurl %}

### Acerca del cuerpo de la respuesta

Muchas operaciones devolverán un cuerpo de la respuesta. A menos de que se especifique lo contrario, el cuerpo de la respuesta estará en formato JSON. Por ejemplo, esta solicitud devuelve una lista de propuestas con datos sobre cada una de ellas:

{% cli %}

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2
```

{% endcli %}

{% javascript %}

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  per_page: 2,
});
```

{% endjavascript %}

{% curl %}

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"
```

{% endcurl %}

A diferencia de la API de GraphQL, en donde especificas la información que quieres, la API de REST habitualmente devuelve más información de la que necesitas. Si lo deseas, puedes analizar la respuesta para extraer pedazos de información específica.

{% cli %}

Por ejemplo, puedes utilizar `>` para redirigir la respuesta a un archivo:

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 > data.json
```

Posteriormente, puedes utilizar jq para obtener el título e ID de autor de cada propuesta:

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

Los dos comandos anteriores devolverán algo similar a:

```
{
  "title": "Update index.html",
  "authorID": 10701255
}
{
  "title": "Edit index file",
  "authorID": 53709285
}
```

Para obtener más información sobre jq, consulta [the jq documentation](https://stedolan.github.io/jq/) y [jq play](https://jqplay.org/).

{% endcli %}

{% javascript %}

Por ejemplo, puedes obtener el título e ID de autor de cada propuesta:

```javascript
try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "octocat",
    repo: "Spoon-Knife",
    per_page: 2,
  });

  const titleAndAuthor = result.data.map(issue => {title: issue.title, authorID: issue.user.id})

  console.log(titleAndAuthor)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
}
```

{% endjavascript %}

{% curl %}

Por ejemplo, puedes utilizar `>` para redirigir la respuesta a un archivo:

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>" > data.json
```

Posteriormente, puedes utilizar jq para obtener el título e ID de autor de cada propuesta:

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

Los dos comandos anteriores devolverán algo similar a:

```
{
  "title": "Update index.html",
  "authorID": 10701255
}
{
  "title": "Edit index file",
  "authorID": 53709285
}
```

Para obtener más información sobre jq, consulta [the jq documentation](https://stedolan.github.io/jq/) y [jq play](https://jqplay.org/).

{% endcurl %}

## Pasos siguientes

Este artículo demostró cómo listar y crear propuestas en un repositorio. Para practicar más, intenta comentar en una propuesta, edita el título de una propuesta o cierra una propuesta. Para obtener más información sobre estas operaciones, consulta las secciones "[Crear un comentario de propuesta](/rest/issues#create-an-issue-comment)" y "[Actualizar una propuesta](/rest/issues/issues#update-an-issue)".

Para obtener más información sobre las operaciones que puedes utilizar, consulta la [documentación de referencia de REST](/rest).
