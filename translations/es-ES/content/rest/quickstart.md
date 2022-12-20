---
title: Inicio rápido para la APi de REST GitHub
intro: 'Obtén información sobre cómo empezar con la API de REST de {% data variables.product.prodname_dotcom %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
topics:
  - API
redirect_from:
  - /guides/getting-started
  - /v3/guides/getting-started
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 001c4e3291e697be034579525d9f0bc6da8c0c88
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192885'
---
En este artículo se describe cómo empezar a usar la API de REST de {% data variables.product.prodname_dotcom %} mediante {% data variables.product.prodname_cli %}, JavaScript o cURL. Para obtener más información, consulta "[Introducción a la API de REST](/rest/guides/getting-started-with-the-rest-api)".

{% cli %}

## Cómo empezar a usar {% data variables.product.prodname_cli %}

### Usar {% data variables.product.prodname_cli %} en la línea de comandos

{% data variables.product.prodname_cli %} es la forma más sencilla de utilizar la API de REST de {% data variables.product.prodname_dotcom %} desde la línea de comandos.

1. Instala {% data variables.product.prodname_cli %} si aún no lo has hecho. A fin de obtener instrucciones de instalación, consulta el repositorio de [{% data variables.product.prodname_cli %}](https://github.com/cli/cli#installation).
1. Usa el subcomando `auth login` para autenticarte en {% data variables.product.prodname_cli %}. Para obtener más información, consulta la [documentación de `auth login`{% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_auth_login).

   ```shell
   gh auth login
   ```

1. Usa el subcomando `api` para realizar la solicitud de API. Para obtener más información, consulta la [documentación de `api`{% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_api).

   ```shell
   gh api repos/octocat/Spoon-Knife/issues
   ```

### Uso de {% data variables.product.prodname_cli %} en {% data variables.product.prodname_actions %}

También puedes usar {% data variables.product.prodname_cli %} en los flujos de trabajo de {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[Uso de la CLI de GitHub en flujos de trabajo](/actions/using-workflows/using-github-cli-in-workflows)".

En lugar de usar el comando `gh auth login`, pasa el token de acceso como una variable de entorno denominada `GH_TOKEN`. {% data variables.product.prodname_dotcom %} recomienda autenticarse con el `GITHUB_TOKEN` integrado en lugar de crear un token. Si esto no es posible, almacena el token como secreto y reemplaza `GITHUB_TOKEN` en el ejemplo siguiente por el nombre del secreto. Para obtener más información sobre el `GITHUB_TOKEN`, consulta "[Autenticación de token automática](/actions/security-guides/automatic-token-authentication)". Para más información sobre los secretos, vea "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

```yaml
on:
  workflow_dispatch:
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions:
      issues: read
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          gh api repos/octocat/Spoon-Knife/issues
```

Si está autenticando con un {% data variables.product.prodname_github_app %}, puedes crear un token de acceso de instalación en el flujo de trabajo:

1. Almacena la ID de tu {% data variables.product.prodname_github_app %} como un secreto. En el flujo de trabajo siguiente, reemplaza `APP_ID` por el nombre del secreto. Puedes encontrar tu ID de app en la página de ajustes de tu app o mediante la API. Para obtener más información, consulta "[Aplicaciones](/rest/apps/apps#get-an-app)" en la documentación de la API de REST. Para más información sobre los secretos, vea "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".
1. Generar una llave privada para tu app. Almacena el contenido del archivo resultante como un secreto. (Almacena todo el contenido del archivo, incluido el contenido de `-----BEGIN RSA PRIVATE KEY-----` y `-----END RSA PRIVATE KEY-----`). En el siguiente ejemplo, reemplaza `APP_PEM` por el nombre del secreto. Para más información, vea "[Autenticación con {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)".
1. Agrega un paso para generar un token y use ese token en lugar de `GITHUB_TOKEN`. Ten en cuenta que este token expirará después de 60 minutos. Por ejemplo:

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  workflow_dispatch:
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Use API
        env:
          GH_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
        run: |
          gh api repos/octocat/Spoon-Knife/issues
```

{% endcli %}

{% javascript %}

## Introducción al uso de JavaScript

Puedes usar Octokit.js para interactuar con la API de REST de {% data variables.product.prodname_dotcom %} en los scripts de JavaScript. Para más información, consulta el [archivo README de Octokit.js](https://github.com/octokit/octokit.js/#readme).

### Uso de Octokit.js

1. Creación de un token de acceso. Por ejemplo, crea un {% data variables.product.pat_generic %} o un token de acceso de usuario a servidor {% data variables.product.prodname_github_app %}. Para más información, consulta "[Creación de un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)" o "[Identificación y autorización de usuarios para aplicaciones de GitHub](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)".

   {% warning %}

   **Advertencia**: trata el token de acceso igual que una contraseña.

   Para proteger el token, puedes almacenar el token como secreto y ejecutar el script a través de {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Uso de Octokit.js en {% data variables.product.prodname_actions %}](#using-octokitjs-in-github-actions)".

   {%- ifversion fpt or ghec %}

   También puedes almacenar tu token como un secreto de {% data variables.product.prodname_codespaces %} y ejecutar tu script en {% data variables.product.prodname_codespaces %}. Para más información, consulta "[Administración de secretos cifrados para los codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"{% endif %}

   Si estas opciones no son posibles, considera la posibilidad de usar otro servicio como [la CLI de 1Password](https://developer.1password.com/docs/cli/secret-references/) para almacenar el token de forma segura.

   {% endwarning %}

1. Instalar `octokit`. Por ejemplo, `npm install octokit`. Para ver otras formas de instalar o cargar `octokit`, consulta [el archivo README de Octokit.js](https://github.com/octokit/octokit.js/#readme).
1. Importar`octokit` en tu script. Por ejemplo, `import { Octokit } from "octokit";`. Para obtener otras formas de importar `octokit`, consulta [el archivo README de Octokit.js](https://github.com/octokit/octokit.js/#readme).
1. Crea una instancia de `Octokit` con tu token. Reemplace `YOUR-TOKEN` por su token.

   ```javascript
   const octokit = new Octokit({
     auth: 'YOUR-TOKEN'
   });
   ```

1. Usa `octokit.request` para ejecutar la solicitud. Envía el método HTTP y la ruta de acceso como primer argumento. Especifica cualquier parámetro de ruta de acceso, consulta y cuerpo en un objeto como segundo argumento. Por ejemplo, en la siguiente solicitud, el método HTTP es `GET`, la ruta de acceso es `/repos/{owner}/{repo}/issues` y los parámetros son `owner: "octocat"` y `repo: "Spoon-Knife"`.

   ```javascript
   await octokit.request("GET /repos/{owner}/{repo}/issues", {
     owner: "octocat",
     repo: "Spoon-Knife",
   });
   ```

### Uso de Octokit.js en {% data variables.product.prodname_actions %}

También puedes ejecutar los scripts de JavaScript en los flujos de trabajo de {% data variables.product.prodname_actions %}. Para más información, vea "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

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
    permissions:
      issues: read
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
        run: |
          node .github/actions-scripts/use-the-api.mjs
        env:
          TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Script de JavaScript de ejemplo, con la ruta de acceso del archivo `.github/actions-scripts/use-the-api.mjs`:

```javascript
import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: process.env.TOKEN
});

try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "octocat",
      repo: "Spoon-Knife",
    });

  const titleAndAuthor = result.data.map(issue => {title: issue.title, authorID: issue.user.id})

  console.log(titleAndAuthor)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
}
```

Si está autenticando con un {% data variables.product.prodname_github_app %}, puedes crear un token de acceso de instalación en el flujo de trabajo:

1. Almacena la ID de tu {% data variables.product.prodname_github_app %} como un secreto. En el flujo de trabajo siguiente, reemplaza `APP_ID` por el nombre del secreto. Puedes encontrar tu ID de app en la página de ajustes de tu app o mediante la API de la misma. Para obtener más información, consulte "[Aplicaciones](/rest/apps/apps#get-an-app)". Para más información sobre los secretos, vea "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".
1. Generar una llave privada para tu app. Almacena el contenido del archivo resultante como un secreto. (Almacena todo el contenido del archivo, incluido el contenido de `-----BEGIN RSA PRIVATE KEY-----` y `-----END RSA PRIVATE KEY-----`). En el siguiente ejemplo, reemplaza `APP_PEM` por el nombre del secreto. Para más información, vea "[Autenticación con {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)".
1. Agrega un paso para generar un token y use ese token en lugar de `GITHUB_TOKEN`. Ten en cuenta que este token expirará después de 60 minutos. Por ejemplo:

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  workflow_dispatch:
jobs:
  use_api_via_script:
    runs-on: ubuntu-latest
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

      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Run script
        run: |
          node .github/actions-scripts/use-the-api.mjs
        env:
          TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
```

{% endjavascript %}

{% curl %}

## Introducción al uso de cURL

### Uso de cURL en la línea de comandos

{% note %}

**Nota:** Si deseas realizar solicitudes de API desde la línea de comandos, {% data variables.product.prodname_dotcom %} recomienda usar {% data variables.product.prodname_cli %}, lo que simplifica la autenticación y las solicitudes. Para obtener más información sobre cómo empezar a trabajar con la API de REST con {% data variables.product.prodname_cli %}, consulta la versión de {% data variables.product.prodname_cli %} de este artículo.

{% endnote %}

1. Instala cURL si cURL aún no está instalado en el equipo. Para comprobar si cURL está instalado, ejecuta `curl --version` en la línea de comandos. Si la salida es información sobre la versión de cURL, se instala cURL. Si recibes un mensaje similar a `command not found: curl`, debes descargar e instalar cURL. Para obtener más información, consulta [la página de descarga del proyecto cURL](https://curl.se/download.html).
1. Creación de un token de acceso. Por ejemplo, crea un {% data variables.product.pat_generic %} o un token de acceso de usuario a servidor {% data variables.product.prodname_github_app %}. Para más información, consulta "[Creación de un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)" o "[Identificación y autorización de usuarios para aplicaciones de GitHub](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)".

   {% warning %}

   **Advertencia**: trata el token de acceso igual que una contraseña.

   {%- ifversion fpt or ghec %}

   A fin de asegurar el token, también puedes almacenar el token como un secreto de {% data variables.product.prodname_codespaces %} y usar la línea de comandos mediante {% data variables.product.prodname_codespaces %}. Para más información, consulta "[Administración de secretos cifrados para los codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"{% endif %}

   También puedes usar {% data variables.product.prodname_cli %} en lugar de cURL. {% data variables.product.prodname_cli %} se encargará de la autenticación. Para obtener más información, consulta la versión de {% data variables.product.prodname_cli %} de esta página.

   Si estas opciones no son posibles, considera la posibilidad de usar otro servicio como [la CLI de 1Password](https://developer.1password.com/docs/cli/secret-references/) para almacenar el token de forma segura.

   {% endwarning %}

1. Usa el comando `cURL` para realizar la solicitud. Pasa el token en un encabezado `Authorization`. Reemplace `YOUR-TOKEN` por su token.

   ```shell
   curl --request GET \
   --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
   --header "Accept: application/vnd.github+json" \
   --header "Authorization: Bearer YOUR-TOKEN"
   ```

   {% note %}

   **Nota:** {% data reusables.getting-started.bearer-vs-token %}

   {% endnote %}

### Uso de cURL {% data variables.product.prodname_actions %}

También puedes utilizar cURL en tus flujos de trabajo de {% data variables.product.prodname_actions %}.

{% data variables.product.prodname_dotcom %} recomienda autenticarse con el `GITHUB_TOKEN` integrado en lugar de crear un token. Si esto no es posible, almacena el token como secreto y reemplaza `GITHUB_TOKEN` en el ejemplo siguiente por el nombre del secreto. Para obtener más información sobre el `GITHUB_TOKEN`, consulta "[Autenticación de token automática](/actions/security-guides/automatic-token-authentication)". Para más información sobre los secretos, vea "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

```yaml
on:
  workflow_dispatch:
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions:
      issues: read
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          curl --request GET \
          --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
          --header "Accept: application/vnd.github+json" \
          --header "Authorization: Bearer $GH_TOKEN"
```

Si está autenticando con un {% data variables.product.prodname_github_app %}, puedes crear un token de acceso de instalación en el flujo de trabajo:

1. Almacena la ID de tu {% data variables.product.prodname_github_app %} como un secreto. En el flujo de trabajo siguiente, reemplaza `APP_ID` por el nombre del secreto. Puedes encontrar tu ID de app en la página de ajustes de tu app o mediante la API de la misma. Para obtener más información, consulte "[Aplicaciones](/rest/apps/apps#get-an-app)". Para más información sobre los secretos, vea "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".
1. Generar una llave privada para tu app. Almacena el contenido del archivo resultante como un secreto. (Almacena todo el contenido del archivo, incluido el contenido de `-----BEGIN RSA PRIVATE KEY-----` y `-----END RSA PRIVATE KEY-----`). En el siguiente ejemplo, reemplaza `APP_PEM` por el nombre del secreto. Para más información, vea "[Autenticación con {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)".
1. Agrega un paso para generar un token y use ese token en lugar de `GITHUB_TOKEN`. Ten en cuenta que este token expirará después de 60 minutos. Por ejemplo:

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  workflow_dispatch:
jobs:
  use_api:
    runs-on: ubuntu-latest
    steps:
      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Use API
        env:
          GH_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
        run: |
          curl --request GET \
          --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
          --header "Accept: application/vnd.github+json" \
          --header "Authorization: Bearer $GH_TOKEN"
```

{% endcurl %}

## Pasos siguientes

Para obtener más información, consulta "[Introducción a la API de REST](/rest/guides/getting-started-with-the-rest-api)".
