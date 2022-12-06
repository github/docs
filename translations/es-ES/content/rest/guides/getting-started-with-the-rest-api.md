---
title: Introducción a la API REST
intro: 'Obtén información sobre el uso de la API de REST de {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Using the API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 66620b01bb488f8c74111b56255ff06702e402e8
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184265'
---
## Acerca de la API de REST de {% data variables.product.prodname_dotcom %}

En este artículo se describe cómo usar la API de REST de {% data variables.product.prodname_dotcom %} mediante {% data variables.product.prodname_cli %}, JavaScript o cURL. Para obtener una guía de inicio rápido, consulta "[Inicio rápido para la API de REST de GitHub](/rest/quickstart)".

Al realizar una solicitud a la API de REST, especificarás un método HTTP y una ruta de acceso. Además, también puedes especificar encabezados de solicitud y parámetros de ruta de acceso, consulta o cuerpo. La API devolverá el código de estado de respuesta, los encabezados de respuesta y, posiblemente, un cuerpo de respuesta.

La documentación de referencia de la API de REST describe el método HTTP, la ruta de acceso y los parámetros de cada operación. También muestra solicitudes y respuestas de ejemplo para cada operación. Para más información, consulta la [Documentación de referencia de REST](/rest).

Para más información sobre {% data variables.product.company_short %}'s APIs, consulta "[Sobre las API de {% data variables.product.company_short %}](/developers/overview/about-githubs-apis)."

## Realización de una solicitud

Para realizar una solicitud, busca primero el método HTTP y la ruta de acceso de la operación que deseas usar. Por ejemplo, la operación "Obtener Octocat" usa el `GET` método y la ruta de `/octocat` acceso. Para obtener la documentación de referencia completa de esta operación, consulta "[Obtener Octocat](/rest/meta#get-octocat)".

{% cli %}

{% note %}

**Nota**: Debes instalar {% data variables.product.prodname_cli %} para poder usar los comandos en los ejemplos de {% data variables.product.prodname_cli %}. A fin de obtener instrucciones de instalación, consulta el repositorio de [{% data variables.product.prodname_cli %}](https://github.com/cli/cli#installation).

{% endnote %}

Si aún no estás autenticado en {% data variables.product.prodname_cli %}, debes usar el `gh auth login` subcomando para autenticarte antes de realizar solicitudes. Para más información, consulta "[Autenticación](#authenticating)".

Para realizar una solicitud con {% data variables.product.prodname_cli %}, usa el `api` subcomando junto con la ruta de acceso. Usa la marca `--method` o `-X` para especificar el método.

```shell
gh api /octocat --method GET
```

{% endcli %}

{% javascript %}

{% note %}

**Nota**: Debes instalar e importar `octokit` para usar la biblioteca de Octokit.js usada en los ejemplos de JavaScript. Para más información, consulta el [archivo README de Octokit.js](https://github.com/octokit/octokit.js/#readme).

{% endnote %}

Para realizar una solicitud mediante JavaScript, puedes usar Octokit.js. Para más información, consulta el [archivo README de Octokit.js](https://github.com/octokit/octokit.js/#readme).

En primer lugar, crea una instancia de `Octokit`.{% ifversion ghes or ghae %} y establece la dirección URL base en `{% data variables.product.api_url_code %}`. Reemplaza `[hostname]` por el nombre de host de {% data variables.location.product_location %}.{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});
```

A continuación, usa el método `request` para realizar solicitudes. Pasa el método HTTP y la ruta de acceso como primer argumento.

```javascript
await octokit.request("GET /octocat", {});
```

{% endjavascript %}

{% curl %}

Antepón la dirección URL base para la API de REST de {% data variables.product.prodname_dotcom %}, `{% data variables.product.api_url_code %}`, a la ruta de acceso para obtener la dirección URL completa: `{% data variables.product.api_url_code %}/octocat`.{% ifversion ghes or ghae %} Reemplaza `[hostname]` por el nombre de {% data variables.location.product_location %}.{% endif %}

Usa el comando `curl` en la línea de comandos. Usa la marca `--request` o `-X` seguida del método HTTP. Use la marca `--url` seguida de la dirección URL completa.

```shell
curl --request GET \
--url "https://api.github.com/octocat"
```

{% note %}

**Nota**: Si recibes un mensaje similar al "comando no encontrado: curl", es posible que tengas que descargar e instalar cURL. Para obtener más información, consulta [la página de descarga del proyecto cURL](https://curl.se/download.html).

{% endnote %}

{% endcurl %}

Sigue leyendo para aprender a autenticar, enviar parámetros y usar la respuesta.

## Autenticación

Muchas operaciones requieren autenticación o devuelven información adicional si te autenticas. Además, puedes realizar más solicitudes por hora cuando te autentiques. {% cli %} Aunque se puede acceder a algunas operaciones de la API de REST sin autenticación, debes autenticarte en {% data variables.product.prodname_cli %} para poder usar el subcomando `api`.{% endcli %}

### Acerca de los tokens

Puedes autenticar la solicitud agregando un token.

Si deseas usar la API de REST de {% data variables.product.company_short %} para uso personal, puedes crear un {% data variables.product.pat_generic %}. Las operaciones de la API de REST usadas en este artículo requieren el ámbito `repo` para {% data variables.product.pat_v1_plural %}{% ifversion pat-v2 %} o, a menos que se indique lo contrario, acceso de solo lectura a repositorios públicos para los {% data variables.product.pat_v2 %}{% endif %}. Otras operaciones pueden requerir ámbitos diferentes{% ifversion pat-v2%} o permisos{% endif %}. Para obtener más información sobre la creación de un {% data variables.product.pat_generic %}, consulta "[Creación de un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

Si deseas usar la API en nombre de una organización u otro usuario, {% data variables.product.company_short %} recomienda usar un {% data variables.product.prodname_github_app %}. Si una operación está disponible para {% data variables.product.prodname_github_apps %}, la documentación de referencia de REST para esa operación dirá "Funciona con aplicaciones de GitHub". Las operaciones de la API de REST que se usan en este artículo requieren `issues` permisos de lectura y escritura para {% data variables.product.prodname_github_apps %}. Otras operaciones pueden requerir permisos diferentes. Para obtener más información, consulta "[Creación de una aplicación de GitHub](/developers/apps/building-github-apps/creating-a-github-app)", "[Autenticación con aplicaciones de GitHub](/developers/apps/building-github-apps/authenticating-with-github-apps)" e "[Identificación y autorización de usuarios para aplicaciones de GitHub](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)".

Si deseas usar la API en un flujo de trabajo de {% data variables.product.prodname_actions %}, {% data variables.product.company_short %} recomienda autenticarse con el `GITHUB_TOKEN` integrado en lugar de crear un token. Puedes conceder permisos a `GITHUB_TOKEN` con la clave `permissions`. Para más información, vea "[Autenticación de token automática](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)".

### Ejemplo de autenticación

{% cli %}

Con {% data variables.product.prodname_cli %}, no es necesario crear un token de acceso de antemano. Usa el subcomando `auth login` para autenticarte en {% data variables.product.prodname_cli %}:

```shell
gh auth login
```

Puedes usar la marca `--scopes` para especificar qué ámbitos deseas. Si deseas autenticarte con un token que hayas creado, puedes usar la marca `--with-token`. Para obtener más información, consulta la [documentación de `auth login`{% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_auth_login).

{% endcli %}

{% javascript %}

{% warning %}

**Advertencia**: trata el token de acceso igual que una contraseña.

Para proteger el token, puedes almacenar el token como secreto y ejecutar el script a través de {% data variables.product.prodname_actions %}. Para más información, vea "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

{% ifversion ghec or fpt %} También puedes almacenar el token como un secreto de {% data variables.product.prodname_codespaces %} y ejecutar el script en {% data variables.product.prodname_codespaces %}. Para más información, consulta "[Administración de secretos cifrados para los codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"{% endif %}

Si estas opciones no son posibles, considera la posibilidad de usar otro servicio como [la CLI de 1Password](https://developer.1password.com/docs/cli/secret-references/) para almacenar el token de forma segura.

{% endwarning %}

Para autenticarte con la biblioteca de Octokit.js, puedes pasar el token al crear una instancia de `Octokit`. Reemplaza `YOUR-TOKEN` por el token.{% ifversion ghes or ghae %} Reemplaza `[hostname]` por el nombre de {% data variables.location.product_location %}.{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: 'YOUR-TOKEN',
});
```

{% endjavascript %}

{% curl %}

{% warning %}

**Advertencia**: trata el token de acceso igual que una contraseña.

Para ayudar a proteger su cuenta, puedes usar {% data variables.product.prodname_cli %} en lugar de cURL. {% data variables.product.prodname_cli %} se encargará de la autenticación. Para obtener más información, consulta la versión de {% data variables.product.prodname_cli %} de esta página.

{% ifversion ghec or fpt %} También puedes almacenar el token como un secreto de {% data variables.product.prodname_codespaces %} y usar la línea de comandos mediante {% data variables.product.prodname_codespaces %}. Para más información, consulta "[Administración de secretos cifrados para los codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"{% endif %}

Si estas opciones no son posibles, considera la posibilidad de usar otro servicio como [la CLI de 1Password](https://developer.1password.com/docs/cli/secret-references/) para almacenar el token de forma segura.

{% endwarning %}

Con cURL, enviarás un encabezado `Authorization` con el token. Reemplaza `YOUR-TOKEN` por tu token:

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% note %}

**Nota:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

{% endcurl %}

### Ejemplo de autenticación para {% data variables.product.prodname_actions %}

{% cli %}

También puedes usar la `run` palabra clave para ejecutar comandos {% data variables.product.prodname_cli %} en los flujos de trabajo de {% data variables.product.prodname_actions %}. Para más información, vea "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

En lugar de usar el comando `gh auth login`, pasa el token como una variable de entorno denominada `GH_TOKEN`. {% data variables.product.prodname_dotcom %} recomienda autenticarse con el `GITHUB_TOKEN` integrado en lugar de crear un token. Si esto no es posible, almacena el token como secreto y reemplaza `GITHUB_TOKEN` en el ejemplo siguiente por el nombre del secreto. Para obtener más información sobre el `GITHUB_TOKEN`, consulta "[Autenticación de token automática](/actions/security-guides/automatic-token-authentication)". Para más información sobre los secretos, vea "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

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

También puedes usar la palabra clave `run` para ejecutar los scripts de JavaScript en los flujos de trabajo de {% data variables.product.prodname_actions %}. Para más información, vea "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

{% data variables.product.prodname_dotcom %} recomienda autenticarse con el `GITHUB_TOKEN` integrado en lugar de crear un token. Si esto no es posible, almacena el token como secreto y reemplaza `GITHUB_TOKEN` en el ejemplo siguiente por el nombre del secreto. Para obtener más información sobre el `GITHUB_TOKEN`, consulta "[Autenticación de token automática](/actions/security-guides/automatic-token-authentication)". Para más información sobre los secretos, vea "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

Observa el siguiente flujo de trabajo de ejemplo:

1. Comprueba el contenido del repositorio
1. Configura Node.js
1. Instala `octokit`
1. Almacena el valor de `GITHUB_TOKEN` como una variable de entorno denominada `TOKEN` y ejecuta `.github/actions-scripts/use-the-api.mjs`, que puede tener acceso a esa variable de entorno como `process.env.TOKEN`

Ejemplo de flujo de trabajo:

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
          node-version: '16.17.0'
          cache: npm

      - name: Install dependencies
        run: npm install octokit

      - name: Run script
        env:
          TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          node .github/actions-scripts/use-the-api.mjs
```

Script de JavaScript de ejemplo, con la ruta de acceso del archivo `.github/actions-scripts/use-the-api.mjs`:

```javascript
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: process.env.TOKEN,
});

await octokit.request("GET /octocat", {});
```

En lugar de almacenar el script en un archivo independiente y ejecutar el script desde el flujo de trabajo, puedes usar la acción `actions/github-script` para ejecutar un script. Para más información, consulta [el archivo README actions/github-script](https://github.com/actions/github-script).

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

También puedes usar la palabra clave `run` para ejecutar comandos cURL en los flujos de trabajo de {% data variables.product.prodname_actions %}. Para más información, vea "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

{% data variables.product.prodname_dotcom %} recomienda autenticarse con el `GITHUB_TOKEN` integrado en lugar de crear un token. Si esto no es posible, almacena el token como secreto y reemplaza `GITHUB_TOKEN` en el ejemplo siguiente por el nombre del secreto. Para obtener más información sobre el `GITHUB_TOKEN`, consulta "[Autenticación de token automática](/actions/security-guides/automatic-token-authentication)". Para más información sobre los secretos, vea "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

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

## Uso de encabezados

La mayoría de las operaciones especifican que debes pasar un encabezado `Accept` con un valor de `application/vnd.github+json`. Otras operaciones pueden especificar que debes enviar un encabezado `Accept` diferente o encabezados adicionales.

{% cli %}

Para enviar un encabezado con datos {% data variables.product.prodname_cli %}, usa la marca `--header` o `-H` seguida del encabezado en formato `key: value`.

```shell
gh api --header 'Accept: application/vnd.github+json'{% ifversion api-date-versioning %} --header 'X-GitHub-Api-Version:{{ allVersions[currentVersion].latestApiVersion }}'{% endif %} --method GET /octocat
```

{% endcli %}

{% javascript %}

La biblioteca de Octokit.js pasa automáticamente el encabezado `Accept: application/vnd.github+json`. Para pasar encabezados `Accept` adicionales o un encabezado diferente, agrega una propiedad `headers` al objeto que se pasa como segundo argumento al método `request`. El valor de la propiedad `headers` es un objeto con los nombres de encabezado como claves y valores de encabezado como valores. Por ejemplo, para enviar un encabezado `content-type` con un valor de `text/plain`:

```javascript
await octokit.request("GET /octocat", {
  headers: {
    "content-type": "text/plain",{% ifversion api-date-versioning %}
    "X-GitHub-Api-Version": "{{ allVersions[currentVersion].latestApiVersion }}",{% endif %}
  },
});
```

{% endjavascript %}

{% curl %}

Para enviar un encabezado con cURL, usa la marca `--header` o `-H` seguida del encabezado en formato `key: value`.

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"{% ifversion api-date-versioning %}\
--header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"{% endif %}
```

{% endcurl %}

## Uso de parámetros de la ruta de acceso

Los parámetros de ruta de acceso modifican la ruta de acceso de la operación. Por ejemplo, la ruta de acceso "Enumerar propuestas del repositorio" es `/repos/{owner}/{repo}/issues`. Los corchetes de curly indican parámetros de ruta de acceso `{}` que debes especificar. En este caso, debes especificar el propietario y el nombre del repositorio. Para obtener la documentación de referencia de esta operación, consulta "[Enumerar propuestas del repositorio](/rest/issues/issues#list-repository-issues)".

{% cli %}

{% ifversion ghes or ghae %} {% note %}

**Nota:** Para que este comando funcione con {% data variables.location.product_location %}, reemplaza `octocat/Spoon-Knife` por un repositorio propiedad de {% data variables.location.product_location %}. De lo contrario, vuelve a ejecutar el comando `gh auth login` para autenticarte en {% data variables.product.prodname_dotcom_the_website %} en lugar de {% data variables.location.product_location %}.

{% endnote %} {% endif %}

Para obtener propuestas del repositorio `octocat/Spoon-Knife`, reemplaza `{owner}` por `octocat` y `{repo}` por `Spoon-Knife`.

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues
```

{% endcli %}

{% javascript %}

{% ifversion ghes or ghae %} {% note %}

**Nota:** Para que este ejemplo funcione con {% data variables.location.product_location %}, reemplaza `octocat/Spoon-Knife` por un repositorio propiedad de {% data variables.location.product_location %}. De lo contrario, crea una nueva instancia `Octokit` y no especifiques `baseURL`.

{% endnote %} {% endif %}

Al realizar una solicitud con Octokit.js, todos los parámetros, incluidos los parámetros de ruta de acceso, se pasan en un objeto como segundo argumento al método `request`. Para obtener propuestas del repositorio `octocat/Spoon-Knife`, especifica `owner` como `octocat` y `repo` como `Spoon-Knife`.

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife"
});
```

{% endjavascript %}

{% curl %}

Para obtener propuestas del repositorio `octocat/Spoon-Knife`, reemplaza `{owner}` por `octocat` y `{repo}` por `Spoon-Knife`. Para compilar la ruta de acceso completa, antepon la dirección URL base para la API de REST {% data variables.product.prodname_dotcom %} REST API, `https://api.github.com`: `https://api.github.com/repos/octocat/Spoon-Knife/issues`.

{% ifversion ghes or ghae %} {% note %}

**Nota:** Si deseas usar {% data variables.location.product_location %} en lugar de {% data variables.product.prodname_dotcom_the_website %}, usa `{% data variables.product.api_url_code %}` en vez de `https://api.github.com` y reemplaza `[hostname]` por el nombre de {% data variables.location.product_location %}. Reemplaza `octocat/Spoon-Knife` por un repositorio propiedad de {% data variables.location.product_location %}.

{% endnote %} {% endif %}

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

La operación devuelve una lista de propuestas y datos sobre cada una de ellas. Para obtener más información sobre el uso de la respuesta, consulta la sección "[Uso de la respuesta](#using-the-response)".

## Uso de los parámetros de consulta

Los parámetros de consulta permiten controlar qué datos se devuelven para una solicitud. Por ejemplo, un parámetro de consulta puede permitirte especificar cuántos elementos se devuelven cuando se pagina la respuesta.

De forma predeterminada, la operación "Enumerar propuestas del repositorio" devuelve treinta propuestas, ordenados en orden descendente por la fecha en que se crearon. Puedes usar el parámetro `per_page` para devolver dos propuestas en lugar de 30. Puedes usar el parámetro `sort` para ordenar las propuestas por la fecha en que se actualizaron por última vez en lugar de por la fecha en que se crearon. Puedes usar el parámetro `direction` para ordenar los resultados en orden ascendente en lugar de en orden descendente.

{% cli %}

Para {% data variables.product.prodname_cli %}, usa la marca `-F` para pasar un parámetro que sea un número, booleano o null. Usa `-f` para pasar parámetros de cadena.

{% note %}

**Nota**: {% data variables.product.prodname_cli %} no acepta actualmente parámetros que son matrices. Para más información, consulta [esta propuesta](https://github.com/cli/cli/issues/1484).

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 -f sort=updated -f direction=asc
```

{% endcli %}

{% javascript %}

Al realizar una solicitud con Octokit.js, todos los parámetros, incluidos los parámetros de ruta de acceso, se pasan en un objeto como segundo argumento al método `request`.

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

Para cURL, agrega un `?` al final de la ruta de acceso y, a continuación, anexa el nombre y el valor del parámetro del parámetro con el formato `parameter_name=value`. Separa varios parámetros de consulta con `&`.

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2&sort=updated&direction=asc" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

La operación devuelve una lista de propuestas y datos sobre cada una de ellas. Para obtener más información sobre el uso de la respuesta, consulta la sección "[Uso de la respuesta](#using-the-response)".

## Uso de parámetros del cuerpo

Los parámetros de cuerpo permiten pasar datos adicionales a la API. Por ejemplo, la operación "Crear una propuesta" requiere que especifiques un título para la nueva propuesta. También te permite especificar otra información, como el texto que se va a colocar en el cuerpo de la propuesta. Para obtener la documentación de referencia completa de esta operación, consulta "[Crear una propuesta](/rest/issues/issues#create-an-issue)".

La operación "Crear una propuesta" usa la misma ruta de acceso que la operación "Enumerar propuestas del repositorio" en los ejemplos anteriores, pero usa un método `POST` en lugar de un método `GET`.

{% cli %}

Para {% data variables.product.prodname_cli %}, usa la marca `-F` para pasar un parámetro que sea un número, booleano o null. Usa `-f` para pasar parámetros de cadena.

{% note %}

**Nota**: {% data variables.product.prodname_cli %} no acepta actualmente parámetros que son matrices. Para más información, consulta [esta propuesta](https://github.com/cli/cli/issues/1484).

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method POST /repos/octocat/Spoon-Knife/issues -f title="Created with the REST API" -f body="This is a test issue created by the REST API"
```

{% endcli %}

{% javascript %}

{% ifversion pat-v2 %}

{% note %}

Si usas un {% data variables.product.pat_v2 %}, debes reemplazar un repositorio que poseas o que pertenezca a una organización de la que es miembro por `octocat/Spoon-Knife`. El token debe tener acceso a ese repositorio y tener permisos de lectura y escritura para problemas de repositorio. Para más información sobre cómo crear un repositorio, consulta "[Creación de un repositorio](/get-started/quickstart/create-a-repo)". Para más información sobre cómo conceder acceso y permisos a un {% data variables.product.pat_v2 %}, consulta "[Creación de un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

{% endnote %}

{% endif %}

Al realizar una solicitud con Octokit.js, todos los parámetros, incluidos los parámetros de cuerpo, se pasan en un objeto como segundo argumento al método `request`.

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

{% ifversion pat-v2 %}

{% note %}

Si usas un {% data variables.product.pat_v2 %}, debes reemplazar un repositorio que poseas o que pertenezca a una organización de la que es miembro por `octocat/Spoon-Knife`. El token debe tener acceso a ese repositorio y tener permisos de lectura y escritura para problemas de repositorio. Para más información sobre cómo crear un repositorio, consulta "[Creación de un repositorio](/get-started/quickstart/create-a-repo)". Para más información sobre cómo conceder acceso y permisos a un {% data variables.product.pat_v2 %}, consulta "[Creación de un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

{% endnote %}

{% endif %}

Para cURL, usa la marca `--data` para pasar los parámetros del cuerpo a un objeto JSON.

```shell
curl --request POST \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" \
--data '{
  "title": "Created with the REST API",
  "body": "This is a test issue created by the REST API"
}'
```

{% endcurl %}

La operación crea una propuesta y devuelve datos sobre la nueva propuesta. En la respuesta, busca el valor `html_url` de tu propuesta y consúltala en el explorador. Para obtener más información sobre el uso de la respuesta, consulta la sección "[Uso de la respuesta](#using-the-response)".

## Análisis de la respuesta

### Acerca del código de respuesta y los encabezados

Cada solicitud devolverá un código de estado HTTP que indica el éxito de la respuesta. Para obtener más información sobre los códigos de respuesta, consulta [la documentación del código de estado de respuesta HTTP de MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

Además, la respuesta incluirá encabezados que proporcionan más detalles sobre la respuesta. Los encabezados que comienzan por `X-` o `x-` son personalizados para {% data variables.product.company_short %}. Por ejemplo, los encabezados `x-ratelimit-remaining` y `x-ratelimit-reset` indican cuántas solicitudes puede realizar en un período de tiempo.

{% cli %}

Para ver el código de estado y los encabezados, usa la marca `--include` o `--i` al enviar la solicitud.

Por ejemplo, en esta solicitud:

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 --include
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

En este ejemplo, el código de respuesta es `200`, que indica una solicitud correcta.

{% endcli %}

{% javascript %}

Al realizar una solicitud con Octokit.js, el método `request` devuelve una promesa. Si la solicitud se realizó correctamente, la promesa se resuelve en un objeto que incluye el código de estado HTTP de la respuesta (`status`) y los encabezados de respuesta (`headers`). En caso de error, la promesa se resuelve en un objeto que incluye el código de estado HTTP de la respuesta (`status`) y los encabezados de respuesta (`response.headers`).

Puedes usar un bloque `try/catch` para detectar un error si se produce. Por ejemplo, si la solicitud del script siguiente se realiza correctamente, el script registrará el código de estado y el valor del encabezado `x-ratelimit-remaining`. Si la solicitud no se realizó correctamente, el script registrará el código de estado, el valor del encabezado `x-ratelimit-remaining` y el mensaje de error.

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

Para ver el código de estado y los encabezados, usa la marca `--include` o `--i` al enviar la solicitud.

Por ejemplo, en esta solicitud:

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" \
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

En este ejemplo, el código de respuesta es `200`, que indica una solicitud correcta.

{% endcurl %}

### Acerca del cuerpo de la respuesta

Muchas operaciones devolverán un cuerpo de respuesta. A menos que se especifique lo contrario, el cuerpo de la respuesta está en formato JSON. Por ejemplo, esta solicitud devuelve una lista de propuestas con datos sobre cada propuesta:

{% cli %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2
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
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

A diferencia de GraphQL API donde se especifica la información que deseas, la API de REST normalmente devuelve más información de la que necesitas. Si lo deseas, puedes analizar la respuesta para extraer fragmentos de información específicos.

{% cli %}

Por ejemplo, puedes usar `>` para redirigir la respuesta a un archivo:

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 > data.json
```

A continuación, puedes usar jq para obtener el título y el identificador de autor de cada propuesta:

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

Los dos comandos anteriores devuelven algo parecido a:

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

Para obtener más información sobre jq, consulta [la documentación de jq](https://stedolan.github.io/jq/) y [jq play](https://jqplay.org/).

{% endcli %}

{% javascript %}

Por ejemplo, puedes obtener el título y el identificador de autor de cada propuesta:

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

Por ejemplo, puedes usar `>` para redirigir la respuesta a un archivo:

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" > data.json
```

A continuación, puedes usar jq para obtener el título y el identificador de autor de cada propuesta:

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

Los dos comandos anteriores devuelven algo parecido a:

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

Para obtener más información sobre jq, consulta [la documentación de jq](https://stedolan.github.io/jq/) y [jq play](https://jqplay.org/).

{% endcurl %}

## Pasos siguientes

En este artículo se ha mostrado cómo enumerar y crear propuestas en un repositorio. Para más práctica, intenta comentar una propuesta, edita el título de una propuesta o cierra una propuesta. Para obtener más información sobre estas operaciones, consulta "[Crear un comentario de propuesta](/rest/issues#create-an-issue-comment)" y "[Actualizar una propuesta](/rest/issues/issues#update-an-issue)".

Para obtener más información sobre las operaciones que puedes usar, consulta la [documentación de referencia de REST](/rest).
