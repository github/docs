---
title: Guía de inicio rápido para la API de REST de GitHub
intro: 'Aprende cómo iniciar con la API de REST de {% data variables.product.prodname_dotcom %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Inicio Rápido
topics:
  - API
redirect_from:
  - /guides/getting-started
  - /v3/guides/getting-started
miniTocMaxHeadingLevel: 3
---

Este artículo describe cómo iniciar rápidamente con la API de REST de {% data variables.product.prodname_dotcom %} utilizando el {% data variables.product.prodname_cli %}, JavaScript o cURL. Para obtener una guía más detallada, consulta la sección "[Iniciar con la API de REST](/rest/guides/getting-started-with-the-rest-api)".

{% cli %}

## Iniciar utilizando el {% data variables.product.prodname_cli %}

### Utilizar el {% data variables.product.prodname_cli %} en la línea de comando

El {% data variables.product.prodname_cli %} es la forma más fácil de utilizar la API de REST de {% data variables.product.prodname_dotcom %} desde la línea de comandos.

1. Instala el {% data variables.product.prodname_cli %} si aún no lo has hecho. Para obtener las instrucciones de instalación, consulta el [repositorio del {% data variables.product.prodname_cli %}](https://github.com/cli/cli#installation).
1. Utiliza el subcomando `auth login` para autenticarte en el {% data variables.product.prodname_cli %}. Para obtener más información, consulta la [documentación de `auth login` del {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_auth_login).

   ```shell
   gh auth login
   ```

1. Utiliza el subcomando `api` para hacer tu solicitud de la API. Para obtener más información, consulta la [documentación de `api` del {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_api).

   ```shell
   gh api repos/octocat/Spoon-Knife/issues
   ```

### Utilizar el {% data variables.product.prodname_cli %} en {% data variables.product.prodname_actions %}

También puedes utilizar el {% data variables.product.prodname_cli %} en tus flujos de trabajo de {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Utilizar el CLI de GitHub en los flujos de trabajo](/actions/using-workflows/using-github-cli-in-workflows)".

En vez de utilizar el comando `gh auth login`, pasa un token de acceso como una variable de ambiente llamada `GH_TOKEN`. {% data variables.product.prodname_dotcom %} recomienda que utilices el `GITHUB_TOKEN` integrado en vez de crear un token. Si esto es imposible, almacena tu token como un secreto y reemplaza a `GITHUB_TOKEN` por el nombre de tu secreto en el siguiente ejemplo. Para obtener más información sobre el `GITHUB_TOKEN`, consulta ""[Automatic token authentication](/actions/security-guides/automatic-token-authentication)". Para obtener más información sobre los secretos, consulta la sección "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

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

Si te estás autenticando con una {% data variables.product.prodname_github_app %}, puedes crear un token de acceso a la instalación dentro de tu flujo de trabajo:

1. Almacena la ID de tu {% data variables.product.prodname_github_app %} como un secreto. En el siguiente ejemplo, reemplaza `APP_ID` con el nombre del secreto. Puedes encontrar tu ID de app en la página de ajustes de tu app o mediante la API de la misma. Para obtener más información, consulta la sección "[Apps](/rest/apps/apps#get-an-app)". Para obtener más información sobre los secretos, consulta la sección "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".
1. Generar una llave privada para tu app. Almacena el contenido del archivo resultante como un secreto. (Almacena todo el contenido del archivo, incluyendo `-----BEGIN RSA PRIVATE KEY-----` y `-----END RSA PRIVATE KEY-----`.) En el siguiente ejemplo, reemplaza a `APP_PEM` con el nombre del secreto. Para obtener más información, consulta la sección "[Autenticarse con {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)".
1. Agrega un paso para generar un token y utilizarlo en vez de `GITHUB_TOKEN`. Nota que este token expirará después de 60 minutos. Por ejemplo:

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

## Comenzar a utilizar JavaScript

Puedes utilizar Octokit.js para interactuar con la API de REST de {% data variables.product.prodname_dotcom %} en tus scripts de JavaScript. Para obtener más información, consulta [el README de Octokit.js](https://github.com/octokit/octokit.js/#readme).

### Utilizar Octokit.js

1. Crear un token de acceso. Por ejemplo, crea un token de acceso personal (PAT) o un token de acceso de usuario a servidor de {% data variables.product.prodname_github_app %}. For more information, see "[Creating a personal access token](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)" or "[Identifying and authorizing users for GitHub Apps](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)."

   {% warning %}

   **Warning**: Treat your access token like a password.

   To keep your token secure, you can store your token as a secret and run your script through {% data variables.product.prodname_actions %}. For more information, see the "[Using Octokit.js in {% data variables.product.prodname_actions %}](#using-octokitjs-in-github-actions)" section.

   {%- ifversion fpt or ghec %}

   You can also store your token as a {% data variables.product.prodname_codespaces %} secret and run your script in {% data variables.product.prodname_codespaces %}. For more information, see "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)."{% endif %}

   If these options are not possible, consider using another service such as [the 1Password CLI](https://developer.1password.com/docs/cli/secret-references/) to store your token securely.

   {% endwarning %}

1. Install `octokit`. For example, `npm install octokit`. For other ways to install or load `octokit`, see [the Octokit.js README](https://github.com/octokit/octokit.js/#readme).
1. Import `octokit` in your script. For example, `import { Octokit } from "octokit";`. For other ways to import `octokit`, see [the Octokit.js README](https://github.com/octokit/octokit.js/#readme).
1. Create an instance of `Octokit` with your token. Replace `YOUR-TOKEN` with your token.

   ```javascript
   const octokit = new Octokit({
     auth: 'YOUR-TOKEN'
   });
   ```

1. Use `octokit.request` to execute your request. Send the HTTP method and path as the first argument. Specify any path, query, and body parameters in an object as the second argument. For example, in the following request the HTTP method is `GET`, the path is `/repos/{owner}/{repo}/issues`, and the parameters are `owner: "octocat"` and `repo: "Spoon-Knife"`.

   ```javascript
   await octokit.request("GET /repos/{owner}/{repo}/issues", {
     owner: "octocat",
     repo: "Spoon-Knife",
   });
   ```

### Using Octokit.js in {% data variables.product.prodname_actions %}

You can also execute your JavaScript scripts in your {% data variables.product.prodname_actions %} workflows. For more information, see "[Workflow syntax for GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

{% data variables.product.prodname_dotcom %} recomienda que utilices el `GITHUB_TOKEN` integrado en vez de crear un token. Si esto es imposible, almacena tu token como un secreto y reemplaza a `GITHUB_TOKEN` por el nombre de tu secreto en el siguiente ejemplo. Para obtener más información sobre el `GITHUB_TOKEN`, consulta ""[Automatic token authentication](/actions/security-guides/automatic-token-authentication)". Para obtener más información sobre los secretos, consulta la sección "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

The following example workflow:

1. Checks out the repository content
1. Sets up Node.js
1. Installs `octokit`
1. Stores the value of `GITHUB_TOKEN` as an environment variable called `TOKEN` and runs `.github/actions-scripts/use-the-api.mjs`, which can access that environment variable as `process.env.TOKEN`

Example workflow:

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
          node-version: '16.15.0'
          cache: npm

      - name: Install dependencies
        run: npm install octokit

      - name: Run script
        run: |
          node .github/actions-scripts/use-the-api.mjs
        env:
          TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Example JavaScript script, with the file path `.github/actions-scripts/use-the-api.mjs`:

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

Si te estás autenticando con una {% data variables.product.prodname_github_app %}, puedes crear un token de acceso a la instalación dentro de tu flujo de trabajo:

1. Almacena la ID de tu {% data variables.product.prodname_github_app %} como un secreto. En el siguiente ejemplo, reemplaza `APP_ID` con el nombre del secreto. Puedes encontrar tu ID de app en la página de ajustes de tu app o mediante la API de la misma. Para obtener más información, consulta la sección "[Apps](/rest/apps/apps#get-an-app)". Para obtener más información sobre los secretos, consulta la sección "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".
1. Generar una llave privada para tu app. Almacena el contenido del archivo resultante como un secreto. (Almacena todo el contenido del archivo, incluyendo `-----BEGIN RSA PRIVATE KEY-----` y `-----END RSA PRIVATE KEY-----`.) En el siguiente ejemplo, reemplaza a `APP_PEM` con el nombre del secreto. Para obtener más información, consulta la sección "[Autenticarse con {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)".
1. Agrega un paso para generar un token y utilizarlo en vez de `GITHUB_TOKEN`. Nota que este token expirará después de 60 minutos. Por ejemplo:

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
          node-version: '16.15.0'
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

## Getting started using cURL

### Using cURL in the command line

{% note %}

**Note:** If you want to make API requests from the command line, {% data variables.product.prodname_dotcom %} recommends that you use {% data variables.product.prodname_cli %}, which simplifies authentication and requests. For more information about getting started with the REST API using {% data variables.product.prodname_cli %}, see the {% data variables.product.prodname_cli %} version of this article.

{% endnote %}

1. Install cURL if cURL isn't already installed on your machine. To check if cURL is installed, execute `curl --version` in the command line. If the output is information about the cURL version, cURL is installed. If you get a message similar to `command not found: curl`, you need to download and install cURL. For more information, see [the cURL project download page](https://curl.se/download.html).
1. Crear un token de acceso. Por ejemplo, crea un token de acceso personal (PAT) o un token de acceso de usuario a servidor de {% data variables.product.prodname_github_app %}. For more information, see "[Creating a personal access token](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)" or "[Identifying and authorizing users for GitHub Apps](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)."

   {% warning %}

   **Warning**: Treat your access token like a password.

   {%- ifversion fpt or ghec %}

   To keep your token secure, you can store your token as a {% data variables.product.prodname_codespaces %} secret and use the command line through {% data variables.product.prodname_codespaces %}. For more information, see "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)."{% endif %}

   You can also use {% data variables.product.prodname_cli %} instead of cURL. {% data variables.product.prodname_cli %} will take care of authentication for you. For more information, see the {% data variables.product.prodname_cli %} version of this page.

   If these options are not possible, consider using another service such as [the 1Password CLI](https://developer.1password.com/docs/cli/secret-references/) to store your token securely.

   {% endwarning %}

1. Use the `cURL` command to make your request. Pass your token in an `Authorization` header. Replace `YOUR-TOKEN` with your token.

   ```shell
   curl --request GET \
   --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
   --header "Accept: application/vnd.github.v3+json" \
   --header "Authorization: Bearer <em>YOUR-TOKEN</em>"
   ```

   {% note %}

   **Note:** In most cases, you can use `Authorization: Bearer` or `Authorization: token`. JSON web tokens (JWTs) only work with `Authorization: Bearer`.

   {% endnote %}

### Using cURL in {% data variables.product.prodname_actions %}

You can also use cURL in your {% data variables.product.prodname_actions %} workflows.

{% data variables.product.prodname_dotcom %} recomienda que utilices el `GITHUB_TOKEN` integrado en vez de crear un token. Si esto es imposible, almacena tu token como un secreto y reemplaza a `GITHUB_TOKEN` por el nombre de tu secreto en el siguiente ejemplo. Para obtener más información sobre el `GITHUB_TOKEN`, consulta ""[Automatic token authentication](/actions/security-guides/automatic-token-authentication)". Para obtener más información sobre los secretos, consulta la sección "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

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
          --header "Accept: application/vnd.github.v3+json" \
          --header "Authorization: Bearer $GH_TOKEN"
```

Si te estás autenticando con una {% data variables.product.prodname_github_app %}, puedes crear un token de acceso a la instalación dentro de tu flujo de trabajo:

1. Almacena la ID de tu {% data variables.product.prodname_github_app %} como un secreto. En el siguiente ejemplo, reemplaza `APP_ID` con el nombre del secreto. Puedes encontrar tu ID de app en la página de ajustes de tu app o mediante la API de la misma. Para obtener más información, consulta la sección "[Apps](/rest/apps/apps#get-an-app)". Para obtener más información sobre los secretos, consulta la sección "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".
1. Generar una llave privada para tu app. Almacena el contenido del archivo resultante como un secreto. (Almacena todo el contenido del archivo, incluyendo `-----BEGIN RSA PRIVATE KEY-----` y `-----END RSA PRIVATE KEY-----`.) En el siguiente ejemplo, reemplaza a `APP_PEM` con el nombre del secreto. Para obtener más información, consulta la sección "[Autenticarse con {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)".
1. Agrega un paso para generar un token y utilizarlo en vez de `GITHUB_TOKEN`. Nota que este token expirará después de 60 minutos. Por ejemplo:

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
          --header "Accept: application/vnd.github.v3+json" \
          --header "Authorization: Bearer $GH_TOKEN"
```

{% endcurl %}

## Pasos siguientes

Para obtener una guía más detallada, consulta la sección "[Iniciar con la API de REST](/rest/guides/getting-started-with-the-rest-api)".
