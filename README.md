# Managing remote repositories

Learn to work with your local repositories on your computer and remote repositories hosted on GitHub.

## Adding a remote repository

To add a new remote, use the `git remote add` command on the terminal, in the directory your repository is stored at.

The `git remote add` command takes two arguments:

* A remote name, for example, `origin`
* A remote URL, for example, `https://github.com/OWNER/REPOSITORY.git`

For example:

```shell
$ git remote add origin https://github.com/OWNER/REPOSITORY.git
# Set a new remote

$ git remote -v
# Verify new remote
> origin  https://github.com/OWNER/REPOSITORY.git (fetch)
> origin  https://github.com/OWNER/REPOSITORY.git (push)
```

For more information on which URL to use, see [About remote repositories](/en/get-started/git-basics/about-remote-repositories).

### Troubleshooting: Remote origin already exists

This error means you've tried to add a remote with a name that already exists in your local repository.

```shell
$ git remote add origin https://github.com/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

To fix this, you can:

* Use a different name for the new remote.
* Rename the existing remote repository before you add the new remote. For more information, see [Renaming a remote repository](#renaming-a-remote-repository) below.
* Delete the existing remote repository before you add the new remote. For more information, see [Removing a remote repository](#removing-a-remote-repository) below.

## Changing a remote repository's URL

The `git remote set-url` command changes an existing remote repository URL.

> \[!TIP]
> For information on the difference between HTTPS and SSH URLs, see [About remote repositories](/en/get-started/git-basics/about-remote-repositories).

The `git remote set-url` command takes two arguments:

* An existing remote name. For example, `origin` or `upstream` are two common choices.
* A new URL for the remote. For example:

  * If you're updating to use HTTPS, your URL might look like:

  ```shell
  https://github.com/OWNER/REPOSITORY.git
  ```

  * If you're updating to use SSH, your URL might look like:

  ```shell
  git@github.com:OWNER/REPOSITORY.git
  ```

### Switching remote URLs from SSH to HTTPS

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

2. Change the current working directory to your local project.

3. List your existing remotes in order to get the name of the remote you want to change.

   ```shell
   $ git remote -v
   > origin  git@github.com:OWNER/REPOSITORY.git (fetch)
   > origin  git@github.com:OWNER/REPOSITORY.git (push)
   ```

4. Change your remote's URL from SSH to HTTPS with the `git remote set-url` command.

   ```shell
   git remote set-url origin https://github.com/OWNER/REPOSITORY.git
   ```

5. Verify that the remote URL has changed.

   ```shell
   $ git remote -v
   # Verify new remote URL
   > origin  https://github.com/OWNER/REPOSITORY.git (fetch)
   > origin  https://github.com/OWNER/REPOSITORY.git (push)
   ```

The next time you `git fetch`, `git pull`, or `git push` to the remote repository, you'll be asked for your GitHub username and password. When Git prompts you for your password, enter your personal access token. Alternatively, you can use a credential helper like [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md). Password-based authentication for Git has been removed in favor of more secure authentication methods. For more information, see [Managing your personal access tokens](/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

You can [use a credential helper](/en/get-started/git-basics/caching-your-github-credentials-in-git) so Git will remember your GitHub username and personal access token every time it talks to GitHub.

### Switching remote URLs from HTTPS to SSH

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

2. Change the current working directory to your local project.

3. List your existing remotes in order to get the name of the remote you want to change.

   ```shell
   $ git remote -v
   > origin  https://github.com/OWNER/REPOSITORY.git (fetch)
   > origin  https://github.com/OWNER/REPOSITORY.git (push)
   ```

4. Change your remote's URL from HTTPS to SSH with the `git remote set-url` command.

   ```shell
   git remote set-url origin git@github.com:OWNER/REPOSITORY.git
   ```

5. Verify that the remote URL has changed.

   ```shell
   $ git remote -v
   # Verify new remote URL
   > origin  git@github.com:OWNER/REPOSITORY.git (fetch)
   > origin  git@github.com:OWNER/REPOSITORY.git (push)
   ```

### Troubleshooting: No such remote '\[name]'

This error means that the remote you tried to change doesn't exist:

```shell
$ git remote set-url sofake https://github.com/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

Check that you've correctly typed the remote name.

## Renaming a remote repository

Use the `git remote rename` command to rename an existing remote.

The `git remote rename` command takes two arguments:

* An existing remote name, for example, `origin`
* A new name for the remote, for example, `destination`

### Example of renaming a remote repository

These examples assume you're [cloning using HTTPS](/en/get-started/git-basics/about-remote-repositories#cloning-with-https-urls), which is recommended.

```shell
$ git remote -v
# View existing remotes
> origin  https://github.com/OWNER/REPOSITORY.git (fetch)
> origin  https://github.com/OWNER/REPOSITORY.git (push)

$ git remote rename origin destination
# Change remote name from 'origin' to 'destination'

$ git remote -v
# Verify remote's new name
> destination  https://github.com/OWNER/REPOSITORY.git (fetch)
> destination  https://github.com/OWNER/REPOSITORY.git (push)
```

### Troubleshooting: Could not rename config section 'remote.\[old name]' to 'remote.\[new name]'

This error means that the old remote name you typed doesn't exist.

You can check which remotes currently exist with the `git remote -v` command:

```shell
$ git remote -v
# View existing remotes
> origin  https://github.com/OWNER/REPOSITORY.git (fetch)
> origin  https://github.com/OWNER/REPOSITORY.git (push)
```

### Troubleshooting: Remote \[new name] already exists

This error means that the remote name you want to use already exists. To solve this, either use a different remote name, or rename the original remote.

## Removing a remote repository

Use the `git remote rm` command to remove a remote URL from your repository.

The `git remote rm` command takes one argument:

* A remote name, for example, `destination`

Removing the remote URL from your repository only unlinks the local and remote repositories. It does not delete the remote repository.

### Example of removing a remote repository

These examples assume you're [cloning using HTTPS](/en/get-started/git-basics/about-remote-repositories#cloning-with-https-urls), which is recommended.

```shell
$ git remote -v
# View current remotes
> origin  https://github.com/OWNER/REPOSITORY.git (fetch)
> origin  https://github.com/OWNER/REPOSITORY.git (push)
> destination  https://github.com/FORKER/REPOSITORY.git (fetch)
> destination  https://github.com/FORKER/REPOSITORY.git (push)

$ git remote rm destination
# Remove remote
$ git remote -v
# Verify it's gone
> origin  https://github.com/OWNER/REPOSITORY.git (fetch)
> origin  https://github.com/OWNER/REPOSITORY.git (push)
```

> \[!NOTE]
> `git remote rm` does not delete the remote repository from the server. It simply removes the remote and its references from your local repository.

### Troubleshooting: Could not remove config section 'remote.\[name]'

This error means that the remote you tried to delete doesn't exist:

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

Check that you've correctly typed the remote name.

## Further reading

* ["Working with Remotes" from the *Pro Git* book](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
# Migrar desde Rest hacia GraphQL

Aprende las mejores prácticas y consideraciones para migrar desde la API de Rest de GitHub hacia la API de GrpahQL de GitHub.

## Diferencias en la lógica de la API

GitHub proporciona dos API: una API REST y una API GraphQL. Para más información sobre las API de GitHub, consulta [Comparación de la API REST de GitHub y la API de GraphQL](/es/rest/overview/about-githubs-apis).

Migrar desde Rest hacia GraphQL represente un cambio significativo en la lógica de las API. Las diferencias entre REST como un estilo y GraphQL como una especificación hacen difícil —y a menudo desaconsejable— reemplazar las llamadas a la API REST con las consultas de la API de GraphQL de una forma uno a uno. Hemos incluido ejemplos específicos de migración a continuación.

Para migrar el código de la [API REST](/es/rest) a la API de GraphQL:

* Revise la [especificación de GraphQL](https://spec.graphql.org/June2018/).
* Revise el [esquema de GraphQL](/es/graphql/reference) de GitHub.
* Considera la manera en la que cualquier código existente que tengas interactúa con la API de REST de GitHub
* Use [identificadores de nodo global](/es/graphql/guides/using-global-node-ids) para hacer referencia a objetos entre versiones de API.

Las ventajas significativas de GraphQL incluyen:

* [Obtención de los datos que necesita y nada más](#example-getting-the-data-you-need-and-nothing-more)
* [Campos anidados](#example-nesting)
* [Tipado fuerte](#example-strong-typing)

Aquí hay algunos ejemplos de cada una.

## Ejemplo: obtener los datos que necesitas y únicamente eso

Una sola llamada de la API de REST recupera una lista de los miembros de tu organización:

```shell
curl -v https://api.github.com/orgs/:org/members
```

La carga útil de REST contiene datos en exceso si tu meta es recuperar únicamente los nombres y enlaces a los avatares. Sin embargo, la consulta de GraphQL recupera únicamente lo que especificas:

```graphql
query {
    organization(login:"github") {
    membersWithRole(first: 100) {
      edges {
        node {
          name
          avatarUrl
        }
      }
    }
  }
}
```

Considera otro ejemplo: recuperar una lista de solicitudes de extracción y revisar si cada una es fusionable. Una llamada a la API REST recupera una lista de solicitudes de incorporación de cambios y sus [representaciones de resumen](/es/rest#summary-representations):

```shell
curl -v https://api.github.com/repos/:owner/:repo/pulls
```

Para determinar si una solicitud de incorporación de cambios se puede fusionar es necesario recuperar cada solicitud individualmente de acuerdo con su [representación detallada](/es/rest#detailed-representations) (una carga útil grande) y comprobar si su atributo `mergeable` es verdadero o falso:

```shell
curl -v https://api.github.com/repos/:owner/:repo/pulls/:number
```

Con GraphQL, solo se pueden recuperar los atributos `number` y `mergeable` para cada solicitud de incorporación de cambios:

```graphql
query {
    repository(owner:"octocat", name:"Hello-World") {
    pullRequests(last: 10) {
      edges {
        node {
          number
          mergeable
        }
      }
    }
  }
}
```

## Ejemplo: Anidar

Hacer consultas con campos anidados te permite reemplazar varios llamados de REST con menos consultas de GraphQL. Por ejemplo, para recuperar una solicitud de incorporación de cambios junto con sus confirmaciones, comentarios no revisados y revisiones mediante la **API REST** se necesitan cuatro llamadas independientes:

```shell
curl -v https://api.github.com/repos/:owner/:repo/pulls/:number
curl -v https://api.github.com/repos/:owner/:repo/pulls/:number/commits
curl -v https://api.github.com/repos/:owner/:repo/issues/:number/comments
curl -v https://api.github.com/repos/:owner/:repo/pulls/:number/reviews
```

Con la **API de GraphQL**, puede recuperar los datos con una sola consulta mediante campos anidados:

```graphql
{
  repository(owner: "octocat", name: "Hello-World") {
    pullRequest(number: 1) {
      commits(first: 10) {
        edges {
          node {
            commit {
              oid
              message
            }
          }
        }
      }
      comments(first: 10) {
        edges {
          node {
            body
            author {
              login
            }
          }
        }
      }
      reviews(first: 10) {
        edges {
          node {
            state
          }
        }
      }
    }
  }
}
```

También puede ampliar la eficacia de esta consulta [sustituyendo una variable](/es/graphql/guides/forming-calls-with-graphql#working-with-variables) por el número de solicitudes de incorporación de cambios.

## Ejemplo: Escritura inflexible

Los modelos de GraphQL tienen una escritura inflexible, lo cual hace más seguro el manejo de los datos.

Imagínese, por ejemplo, que agrega un comentario a una incidencia o solicitud de incorporación de cambios con una [mutación](/es/graphql/reference/mutations) de GraphQL y, por error, especifica un entero en lugar de una cadena para el valor de [`clientMutationId`](/es/graphql/reference/mutations#addcomment):

```graphql
mutation {
  addComment(input:{clientMutationId: 1234, subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) {
    clientMutationId
    commentEdge {
      node {
        body
        repository {
          id
          name
          nameWithOwner
        }
        issue {
          number
        }
      }
    }
  }
}
```

Ejecutar esta consulta recuperará errores que especificarán los tipos esperados para esta operación:

```json
{
  "data": null,
  "errors": [
    {
      "message": "Argument 'input' on Field 'addComment' has an invalid value. Expected type 'AddCommentInput!'.",
      "locations": [
        {
          "line": 3,
          "column": 3
        }
      ]
    },
    {
      "message": "Argument 'clientMutationId' on InputObject 'AddCommentInput' has an invalid value. Expected type 'String'.",
      "locations": [
        {
          "line": 3,
          "column": 20
        }
      ]
    }
  ]
}
```

Al entrecomillar `1234`, se transforma el valor de un entero a una cadena, el tipo esperado:

```graphql
mutation {
  addComment(input:{clientMutationId: "1234", subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) {
    clientMutationId
    commentEdge {
      node {
        body
        repository {
          id
          name
          nameWithOwner
        }
        issue {
          number
        }
      }
    }
  }
}
```
# core.js

> Extendable client for GitHub's REST & GraphQL APIs

[![@latest](https://img.shields.io/npm/v/@octokit/core.svg)](https://www.npmjs.com/package/@octokit/core)
[![Build Status](https://github.com/octokit/core.js/workflows/Test/badge.svg)](https://github.com/octokit/core.js/actions?query=workflow%3ATest+branch%3Amain)

<!-- toc -->

- [Usage](#usage)
  - [REST API example](#rest-api-example)
  - [GraphQL example](#graphql-example)
- [Options](#options)
- [Defaults](#defaults)
- [Authentication](#authentication)
- [Logging](#logging)
- [Hooks](#hooks)
- [Plugins](#plugins)
- [Build your own Octokit with Plugins and Defaults](#build-your-own-octokit-with-plugins-and-defaults)
- [LICENSE](#license)

<!-- tocstop -->

If you need a minimalistic library to utilize GitHub's [REST API](https://developer.github.com/v3/) and [GraphQL API](https://developer.github.com/v4/) which you can extend with plugins as needed, then `@octokit/core` is a great starting point.

If you don't need the Plugin API then using [`@octokit/request`](https://github.com/octokit/request.js/) or [`@octokit/graphql`](https://github.com/octokit/graphql.js/) directly is a good alternative.

## Usage

<table>
<tbody valign=top align=left>
<tr><th>
Browsers
</th><td width=100%>
Load <code>@octokit/core</code> directly from <a href="https://esm.sh">esm.sh</a>

```html
<script type="module">
  import { Octokit } from "https://esm.sh/@octokit/core";
</script>
```

</td></tr>
<tr><th>
Node
</th><td>

Install with <code>npm install @octokit/core</code>

```js
import { Octokit } from "@octokit/core";
```

</td></tr>
</tbody>
</table>

As we use [conditional exports](https://nodejs.org/api/packages.html#conditional-exports), you will need to adapt your `tsconfig.json`. See the TypeScript docs on [package.json "exports"](https://www.typescriptlang.org/docs/handbook/modules/reference.html#packagejson-exports).

### REST API example

```js
// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: `personal-access-token123` });

const response = await octokit.request("GET /orgs/{org}/repos", {
  org: "octokit",
  type: "private",
});
```

See [`@octokit/request`](https://github.com/octokit/request.js) for full documentation of the `.request` method.

### GraphQL example

```js
const octokit = new Octokit({ auth: `secret123` });

const response = await octokit.graphql(
  `query ($login: String!) {
    organization(login: $login) {
      repositories(privacy: PRIVATE) {
        totalCount
      }
    }
  }`,
  { login: "octokit" },
);
```

See [`@octokit/graphql`](https://github.com/octokit/graphql.js) for full documentation of the `.graphql` method.

## Options

<table>
  <thead align=left>
    <tr>
      <th>
        name
      </th>
      <th>
        type
      </th>
      <th width=100%>
        description
      </th>
    </tr>
  </thead>
  <tbody align=left valign=top>
    <tr>
      <th>
        <code>options.authStrategy</code>
      </th>
      <td>
        <code>Function<code>
      </td>
      <td>
        Defaults to <a href="https://github.com/octokit/auth-token.js#readme"><code>@octokit/auth-token</code></a>. See <a href="#authentication">Authentication</a> below for examples.
      </td>
    </tr>
    <tr>
      <th>
        <code>options.auth</code>
      </th>
      <td>
        <code>String</code> or <code>Object</code>
      </td>
      <td>
        See <a href="#authentication">Authentication</a> below for examples.
      </td>
    </tr>
    <tr>
      <th>
        <code>options.baseUrl</code>
      </th>
      <td>
        <code>String</code>
      </td>
      <td>

When using with GitHub Enterprise Server, set `options.baseUrl` to the root URL of the API. For example, if your GitHub Enterprise Server's hostname is `github.acme-inc.com`, then set `options.baseUrl` to `https://github.acme-inc.com/api/v3`. Example

```js
const octokit = new Octokit({
  baseUrl: "https://github.acme-inc.com/api/v3",
});
```

</td></tr>
    <tr>
      <th>
        <code>options.previews</code>
      </th>
      <td>
        <code>Array of Strings</code>
      </td>
      <td>

Some REST API endpoints require preview headers to be set, or enable
additional features. Preview headers can be set on a per-request basis, e.g.

```js
octokit.request("POST /repos/{owner}/{repo}/pulls", {
  mediaType: {
    previews: ["shadow-cat"],
  },
  owner,
  repo,
  title: "My pull request",
  base: "main",
  head: "my-feature",
  draft: true,
});
```

You can also set previews globally, by setting the `options.previews` option on the constructor. Example:

```js
const octokit = new Octokit({
  previews: ["shadow-cat"],
});
```

</td></tr>
    <tr>
      <th>
        <code>options.request</code>
      </th>
      <td>
        <code>Object</code>
      </td>
      <td>

Set a default request timeout (`options.request.timeout`) or an [`http(s).Agent`](https://nodejs.org/api/http.html#http_class_http_agent) e.g. for proxy usage (Node only, `options.request.agent`).

There are more `options.request.*` options, see [`@octokit/request` options](https://github.com/octokit/request.js#request). `options.request` can also be set on a per-request basis.

</td></tr>
    <tr>
      <th>
        <code>options.timeZone</code>
      </th>
      <td>
        <code>String</code>
      </td>
      <td>

Sets the `Time-Zone` header which defines a timezone according to the [list of names from the Olson database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```js
const octokit = new Octokit({
  timeZone: "America/Los_Angeles",
});
```

The time zone header will determine the timezone used for generating the timestamp when creating commits. See [GitHub's Timezones documentation](https://developer.github.com/v3/#timezones).

</td></tr>
    <tr>
      <th>
        <code>options.userAgent</code>
      </th>
      <td>
        <code>String</code>
      </td>
      <td>

A custom user agent string for your app or library. Example

```js
const octokit = new Octokit({
  userAgent: "my-app/v1.2.3",
});
```

</td></tr>
  </tbody>
</table>

## Defaults

You can create a new Octokit class with customized default options.

```js
const MyOctokit = Octokit.defaults({
  auth: "personal-access-token123",
  baseUrl: "https://github.acme-inc.com/api/v3",
  userAgent: "my-app/v1.2.3",
});
const octokit1 = new MyOctokit();
const octokit2 = new MyOctokit();
```

If you pass additional options to your new constructor, the options will be merged shallowly.

```js
const MyOctokit = Octokit.defaults({
  foo: {
    opt1: 1,
  },
});
const octokit = new MyOctokit({
  foo: {
    opt2: 1,
  },
});
// options will be { foo: { opt2: 1 }}
```

If you need a deep or conditional merge, you can pass a function instead.

```js
const MyOctokit = Octokit.defaults((options) => {
  return {
    foo: Object.assign({}, options.foo, { opt1: 1 }),
  };
});
const octokit = new MyOctokit({
  foo: { opt2: 1 },
});
// options will be { foo: { opt1: 1, opt2: 1 }}
```

Be careful about mutating the `options` object in the `Octokit.defaults` callback, as it can have unforeseen consequences.

## Authentication

Authentication is optional for some REST API endpoints accessing public data, but is required for GraphQL queries. Using authentication also increases your [API rate limit](https://developer.github.com/v3/#rate-limiting).

By default, Octokit authenticates using the [token authentication strategy](https://github.com/octokit/auth-token.js). Pass in a token using `options.auth`. It can be a personal access token, an OAuth token, an installation access token or a JSON Web Token for GitHub App authentication. The `Authorization` header will be set according to the type of token.

```js
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: "mypersonalaccesstoken123",
});

const { data } = await octokit.request("/user");
```

To use a different authentication strategy, set `options.authStrategy`. A list of authentication strategies is available at [octokit/authentication-strategies.js](https://github.com/octokit/authentication-strategies.js/#readme).

Example

```js
import { Octokit } from "@octokit/core";
import { createAppAuth } from "@octokit/auth-app";

const appOctokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: 123,
    privateKey: process.env.PRIVATE_KEY,
  },
});

const { data } = await appOctokit.request("/app");
```

The `.auth()` method returned by the current authentication strategy can be accessed at `octokit.auth()`. Example

```js
const { token } = await appOctokit.auth({
  type: "installation",
  installationId: 123,
});
```

## Logging

There are four built-in log methods

1. `octokit.log.debug(message[, additionalInfo])`
1. `octokit.log.info(message[, additionalInfo])`
1. `octokit.log.warn(message[, additionalInfo])`
1. `octokit.log.error(message[, additionalInfo])`

They can be configured using the [`log` client option](client-options). By default, `octokit.log.debug()` and `octokit.log.info()` are no-ops, while the other two call `console.warn()` and `console.error()` respectively.

This is useful if you build reusable [plugins](#plugins).

If you would like to make the log level configurable using an environment variable or external option, we recommend the [console-log-level](https://github.com/watson/console-log-level) package. Example

```js
import consoleLogLevel from "console-log-level";
const octokit = new Octokit({
  log: consoleLogLevel({ level: "info" }),
});
```

## Hooks

You can customize Octokit's request lifecycle with hooks.

```js
octokit.hook.before("request", async (options) => {
  validate(options);
});
octokit.hook.after("request", async (response, options) => {
  console.log(`${options.method} ${options.url}: ${response.status}`);
});
octokit.hook.error("request", async (error, options) => {
  if (error.status === 304) {
    return findInCache(error.response.headers.etag);
  }

  throw error;
});
octokit.hook.wrap("request", async (request, options) => {
  // add logic before, after, catch errors or replace the request altogether
  return request(options);
});
```

See [before-after-hook](https://github.com/gr2m/before-after-hook#readme) for more documentation on hooks.

## Plugins

Octokit’s functionality can be extended using plugins. The `Octokit.plugin()` method accepts a plugin (or many) and returns a new constructor.

A plugin is a function which gets two arguments:

1. the current instance
2. the options passed to the constructor.

In order to extend `octokit`'s API, the plugin must return an object with the new methods. Please refrain from adding methods directly to the `octokit` instance, especialy if you depend on keys that do not exist in `@octokit/core`, such as `octokit.rest`.

```js
// index.js
import { Octokit } from "@octokit/core";
import myPlugin from "./lib/my-plugin.js";
import octokitPluginExample from "octokit-plugin-example";
const MyOctokit = Octokit.plugin(
  myPlugin,
  octokitPluginExample
);

const octokit = new MyOctokit({ greeting: "Moin moin" });
octokit.helloWorld(); // logs "Moin moin, world!"
octokit.request("GET /"); // logs "GET / - 200 in 123ms"

// lib/my-plugin.js
const plugin = (octokit, options = { greeting: "Hello" }) => {
  // hook into the request lifecycle
  octokit.hook.wrap("request", async (request, options) => {
    const time = Date.now();
    const response = await request(options);
    console.log(
      `${options.method} ${options.url} – ${response.status} in ${Date.now() -
        time}ms`
    );
    return response;
  });

  // add a custom method
  return {
    helloWorld: () => console.log(`${options.greeting}, world!`);
  }
};
export default plugin;
```

## Build your own Octokit with Plugins and Defaults

You can build your own Octokit class with preset default options and plugins. In fact, this is mostly how the `@octokit/<context>` modules work, such as [`@octokit/action`](https://github.com/octokit/action.js):

```js
import { Octokit } from "@octokit/core";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import { throttling } from "@octokit/plugin-throttling";
import { retry } from "@octokit/plugin-retry";
import { createActionAuth } from "@octokit/auth-action";
const MyActionOctokit = Octokit.plugin(
  paginateRest,
  throttling,
  retry,
).defaults({
  throttle: {
    onAbuseLimit: (retryAfter, options) => {
      /* ... */
    },
    onRateLimit: (retryAfter, options) => {
      /* ... */
    },
  },
  authStrategy: createActionAuth,
  userAgent: `my-octokit-action/v1.2.3`,
});

const octokit = new MyActionOctokit();
const installations = await octokit.paginate("GET /app/installations");
```

## LICENSE

[MIT](LICENSE)# core.js

> Extendable client for GitHub's REST & GraphQL APIs

[![@latest](https://img.shields.io/npm/v/@octokit/core.svg)](https://www.npmjs.com/package/@octokit/core)
[![Build Status](https://github.com/octokit/core.js/workflows/Test/badge.svg)](https://github.com/octokit/core.js/actions?query=workflow%3ATest+branch%3Amain)

<!-- toc -->

- [Usage](#usage)
  - [REST API example](#rest-api-example)
  - [GraphQL example](#graphql-example)
- [Options](#options)
- [Defaults](#defaults)
- [Authentication](#authentication)
- [Logging](#logging)
- [Hooks](#hooks)
- [Plugins](#plugins)
- [Build your own Octokit with Plugins and Defaults](#build-your-own-octokit-with-plugins-and-defaults)
- [LICENSE](#license)

<!-- tocstop -->

If you need a minimalistic library to utilize GitHub's [REST API](https://developer.github.com/v3/) and [GraphQL API](https://developer.github.com/v4/) which you can extend with plugins as needed, then `@octokit/core` is a great starting point.

If you don't need the Plugin API then using [`@octokit/request`](https://github.com/octokit/request.js/) or [`@octokit/graphql`](https://github.com/octokit/graphql.js/) directly is a good alternative.

## Usage

<table>
<tbody valign=top align=left>
<tr><th>
Browsers
</th><td width=100%>
Load <code>@octokit/core</code> directly from <a href="https://esm.sh">esm.sh</a>

```html
<script type="module">
  import { Octokit } from "https://esm.sh/@octokit/core";
</script>
```

</td></tr>
<tr><th>
Node
</th><td>

Install with <code>npm install @octokit/core</code>

```js
import { Octokit } from "@octokit/core";
```

</td></tr>
</tbody>
</table>

As we use [conditional exports](https://nodejs.org/api/packages.html#conditional-exports), you will need to adapt your `tsconfig.json`. See the TypeScript docs on [package.json "exports"](https://www.typescriptlang.org/docs/handbook/modules/reference.html#packagejson-exports).

### REST API example

```js
// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: `personal-access-token123` });

const response = await octokit.request("GET /orgs/{org}/repos", {
  org: "octokit",
  type: "private",
});
```

See [`@octokit/request`](https://github.com/octokit/request.js) for full documentation of the `.request` method.

### GraphQL example

```js
const octokit = new Octokit({ auth: `secret123` });

const response = await octokit.graphql(
  `query ($login: String!) {
    organization(login: $login) {
      repositories(privacy: PRIVATE) {
        totalCount
      }
    }
  }`,
  { login: "octokit" },
);
```

See [`@octokit/graphql`](https://github.com/octokit/graphql.js) for full documentation of the `.graphql` method.

## Options

<table>
  <thead align=left>
    <tr>
      <th>
        name
      </th>
      <th>
        type
      </th>
      <th width=100%>
        description
      </th>
    </tr>
  </thead>
  <tbody align=left valign=top>
    <tr>
      <th>
        <code>options.authStrategy</code>
      </th>
      <td>
        <code>Function<code>
      </td>
      <td>
        Defaults to <a href="https://github.com/octokit/auth-token.js#readme"><code>@octokit/auth-token</code></a>. See <a href="#authentication">Authentication</a> below for examples.
      </td>
    </tr>
    <tr>
      <th>
        <code>options.auth</code>
      </th>
      <td>
        <code>String</code> or <code>Object</code>
      </td>
      <td>
        See <a href="#authentication">Authentication</a> below for examples.
      </td>
    </tr>
    <tr>
      <th>
        <code>options.baseUrl</code>
      </th>
      <td>
        <code>String</code>
      </td>
      <td>

When using with GitHub Enterprise Server, set `options.baseUrl` to the root URL of the API. For example, if your GitHub Enterprise Server's hostname is `github.acme-inc.com`, then set `options.baseUrl` to `https://github.acme-inc.com/api/v3`. Example

```js
const octokit = new Octokit({
  baseUrl: "https://github.acme-inc.com/api/v3",
});
```

</td></tr>
    <tr>
      <th>
        <code>options.previews</code>
      </th>
      <td>
        <code>Array of Strings</code>
      </td>
      <td>

Some REST API endpoints require preview headers to be set, or enable
additional features. Preview headers can be set on a per-request basis, e.g.

```js
octokit.request("POST /repos/{owner}/{repo}/pulls", {
  mediaType: {
    previews: ["shadow-cat"],
  },
  owner,
  repo,
  title: "My pull request",
  base: "main",
  head: "my-feature",
  draft: true,
});
```

You can also set previews globally, by setting the `options.previews` option on the constructor. Example:

```js
const octokit = new Octokit({
  previews: ["shadow-cat"],
});
```

</td></tr>
    <tr>
      <th>
        <code>options.request</code>
      </th>
      <td>
        <code>Object</code>
      </td>
      <td>

Set a default request timeout (`options.request.timeout`) or an [`http(s).Agent`](https://nodejs.org/api/http.html#http_class_http_agent) e.g. for proxy usage (Node only, `options.request.agent`).

There are more `options.request.*` options, see [`@octokit/request` options](https://github.com/octokit/request.js#request). `options.request` can also be set on a per-request basis.

</td></tr>
    <tr>
      <th>
        <code>options.timeZone</code>
      </th>
      <td>
        <code>String</code>
      </td>
      <td>

Sets the `Time-Zone` header which defines a timezone according to the [list of names from the Olson database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```js
const octokit = new Octokit({
  timeZone: "America/Los_Angeles",
});
```

The time zone header will determine the timezone used for generating the timestamp when creating commits. See [GitHub's Timezones documentation](https://developer.github.com/v3/#timezones).

</td></tr>
    <tr>
      <th>
        <code>options.userAgent</code>
      </th>
      <td>
        <code>String</code>
      </td>
      <td>

A custom user agent string for your app or library. Example

```js
const octokit = new Octokit({
  userAgent: "my-app/v1.2.3",
});
```

</td></tr>
  </tbody>
</table>

## Defaults

You can create a new Octokit class with customized default options.

```js
const MyOctokit = Octokit.defaults({
  auth: "personal-access-token123",
  baseUrl: "https://github.acme-inc.com/api/v3",
  userAgent: "my-app/v1.2.3",
});
const octokit1 = new MyOctokit();
const octokit2 = new MyOctokit();
```

If you pass additional options to your new constructor, the options will be merged shallowly.

```js
const MyOctokit = Octokit.defaults({
  foo: {
    opt1: 1,
  },
});
const octokit = new MyOctokit({
  foo: {
    opt2: 1,
  },
});
// options will be { foo: { opt2: 1 }}
```

If you need a deep or conditional merge, you can pass a function instead.

```js
const MyOctokit = Octokit.defaults((options) => {
  return {
    foo: Object.assign({}, options.foo, { opt1: 1 }),
  };
});
const octokit = new MyOctokit({
  foo: { opt2: 1 },
});
// options will be { foo: { opt1: 1, opt2: 1 }}
```

Be careful about mutating the `options` object in the `Octokit.defaults` callback, as it can have unforeseen consequences.

## Authentication

Authentication is optional for some REST API endpoints accessing public data, but is required for GraphQL queries. Using authentication also increases your [API rate limit](https://developer.github.com/v3/#rate-limiting).

By default, Octokit authenticates using the [token authentication strategy](https://github.com/octokit/auth-token.js). Pass in a token using `options.auth`. It can be a personal access token, an OAuth token, an installation access token or a JSON Web Token for GitHub App authentication. The `Authorization` header will be set according to the type of token.

```js
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: "mypersonalaccesstoken123",
});

const { data } = await octokit.request("/user");
```

To use a different authentication strategy, set `options.authStrategy`. A list of authentication strategies is available at [octokit/authentication-strategies.js](https://github.com/octokit/authentication-strategies.js/#readme).

Example

```js
import { Octokit } from "@octokit/core";
import { createAppAuth } from "@octokit/auth-app";

const appOctokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: 123,
    privateKey: process.env.PRIVATE_KEY,
  },
});

const { data } = await appOctokit.request("/app");
```

The `.auth()` method returned by the current authentication strategy can be accessed at `octokit.auth()`. Example

```js
const { token } = await appOctokit.auth({
  type: "installation",
  installationId: 123,
});
```

## Logging

There are four built-in log methods

1. `octokit.log.debug(message[, additionalInfo])`
1. `octokit.log.info(message[, additionalInfo])`
1. `octokit.log.warn(message[, additionalInfo])`
1. `octokit.log.error(message[, additionalInfo])`

They can be configured using the [`log` client option](client-options). By default, `octokit.log.debug()` and `octokit.log.info()` are no-ops, while the other two call `console.warn()` and `console.error()` respectively.

This is useful if you build reusable [plugins](#plugins).

If you would like to make the log level configurable using an environment variable or external option, we recommend the [console-log-level](https://github.com/watson/console-log-level) package. Example

```js
import consoleLogLevel from "console-log-level";
const octokit = new Octokit({
  log: consoleLogLevel({ level: "info" }),
});
```

## Hooks

You can customize Octokit's request lifecycle with hooks.

```js
octokit.hook.before("request", async (options) => {
  validate(options);
});
octokit.hook.after("request", async (response, options) => {
  console.log(`${options.method} ${options.url}: ${response.status}`);
});
octokit.hook.error("request", async (error, options) => {
  if (error.status === 304) {
    return findInCache(error.response.headers.etag);
  }

  throw error;
});
octokit.hook.wrap("request", async (request, options) => {
  // add logic before, after, catch errors or replace the request altogether
  return request(options);
});
```

See [before-after-hook](https://github.com/gr2m/before-after-hook#readme) for more documentation on hooks.

## Plugins

Octokit’s functionality can be extended using plugins. The `Octokit.plugin()` method accepts a plugin (or many) and returns a new constructor.

A plugin is a function which gets two arguments:

1. the current instance
2. the options passed to the constructor.

In order to extend `octokit`'s API, the plugin must return an object with the new methods. Please refrain from adding methods directly to the `octokit` instance, especialy if you depend on keys that do not exist in `@octokit/core`, such as `octokit.rest`.

```js
// index.js
import { Octokit } from "@octokit/core";
import myPlugin from "./lib/my-plugin.js";
import octokitPluginExample from "octokit-plugin-example";
const MyOctokit = Octokit.plugin(
  myPlugin,
  octokitPluginExample
);

const octokit = new MyOctokit({ greeting: "Moin moin" });
octokit.helloWorld(); // logs "Moin moin, world!"
octokit.request("GET /"); // logs "GET / - 200 in 123ms"

// lib/my-plugin.js
const plugin = (octokit, options = { greeting: "Hello" }) => {
  // hook into the request lifecycle
  octokit.hook.wrap("request", async (request, options) => {
    const time = Date.now();
    const response = await request(options);
    console.log(
      `${options.method} ${options.url} – ${response.status} in ${Date.now() -
        time}ms`
    );
    return response;
  });

  // add a custom method
  return {
    helloWorld: () => console.log(`${options.greeting}, world!`);
  }
};
export default plugin;
```

## Build your own Octokit with Plugins and Defaults

You can build your own Octokit class with preset default options and plugins. In fact, this is mostly how the `@octokit/<context>` modules work, such as [`@octokit/action`](https://github.com/octokit/action.js):

```js
import { Octokit } from "@octokit/core";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import { throttling } from "@octokit/plugin-throttling";
import { retry } from "@octokit/plugin-retry";
import { createActionAuth } from "@octokit/auth-action";
const MyActionOctokit = Octokit.plugin(
  paginateRest,
  throttling,
  retry,
).defaults({
  throttle: {
    onAbuseLimit: (retryAfter, options) => {
      /* ... */
    },
    onRateLimit: (retryAfter, options) => {
      /* ... */
    },
  },
  authStrategy: createActionAuth,
  userAgent: `my-octokit-action/v1.2.3`,
});

const octokit = new MyActionOctokit();
const installations = await octokit.paginate("GET /app/installations");
```

## LICENSE

[MIT](LICENSE)
This XML file does not appear to have any style information associated with it. The document tree is shown below.
<rss version="2.0">
<channel>
<title>
<![CDATA[ TVN List - TWCERT/CC Taiwan Computer Emergency Response Team/Coordination Center ]]>
</title>
<link>https://www.twcert.org.tw/en/np-139-2.html</link>
<description>TWCERT/CC Taiwan Computer Emergency Response Team/Coordination Center RSS channel.</description>
<language>en-us</language>
<pubDate>Wed, 28 Jan 2026 03:29:00 GMT</pubDate>
<copyright>TWCERT/CC</copyright>
<ttl>20</ttl>
<item>
<title>
<![CDATA[ 2100 Technology｜Official Document Management System - Incorrect Authorization ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10659-264cd-2.html</link>
<description>
<![CDATA[ 2100 Technology｜Official Document Management System - Incorrect Authorization ]]>
</description>
<pubDate>Wed, 28 Jan 2026 03:29:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10659-264cd-2.html</guid>
</item>
<item>
<title>
<![CDATA[ WellChoose｜Single Sign-On Portal System - 3 Vulnerabilities ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10655-59160-2.html</link>
<description>
<![CDATA[ WellChoose｜Single Sign-On Portal System - 3 Vulnerabilities ]]>
</description>
<pubDate>Mon, 26 Jan 2026 07:33:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10655-59160-2.html</guid>
</item>
<item>
<title>
<![CDATA[ JNC｜IAQS and I6 - 2 Vulnerabilities ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10653-117a1-2.html</link>
<description>
<![CDATA[ JNC｜IAQS and I6 - 2 Vulnerabilities ]]>
</description>
<pubDate>Fri, 23 Jan 2026 08:03:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10653-117a1-2.html</guid>
</item>
<item>
<title>
<![CDATA[ HAMASTAR Technology｜MeetingHub - 3 Vulnerabilities ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10651-ff09c-2.html</link>
<description>
<![CDATA[ HAMASTAR Technology｜MeetingHub - 3 Vulnerabilities ]]>
</description>
<pubDate>Thu, 22 Jan 2026 08:07:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10651-ff09c-2.html</guid>
</item>
<item>
<title>
<![CDATA[ BROWAN COMMUNICATIONS ｜PrismX MX100 AP controller - 3 Vulnerabilitires ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10643-2f8d7-2.html</link>
<description>
<![CDATA[ BROWAN COMMUNICATIONS ｜PrismX MX100 AP controller - 3 Vulnerabilitires ]]>
</description>
<pubDate>Tue, 20 Jan 2026 06:08:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10643-2f8d7-2.html</guid>
</item>
<item>
<title>
<![CDATA[ Gotac｜Statistics Database System - Arbitrary File Read ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10640-0fd0b-2.html</link>
<description>
<![CDATA[ Gotac｜Statistics Database System - Arbitrary File Read ]]>
</description>
<pubDate>Fri, 16 Jan 2026 03:24:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10640-0fd0b-2.html</guid>
</item>
<item>
<title>
<![CDATA[ Gotac｜Police Statistics Database System - 4 Vulnerabilities ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10638-0e44b-2.html</link>
<description>
<![CDATA[ Gotac｜Police Statistics Database System - 4 Vulnerabilities ]]>
</description>
<pubDate>Fri, 16 Jan 2026 02:15:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10638-0e44b-2.html</guid>
</item>
<item>
<title>
<![CDATA[ Merit LILIN｜IP Camera - OS Command Injection ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10626-afbe2-2.html</link>
<description>
<![CDATA[ Merit LILIN｜IP Camera - OS Command Injection ]]>
</description>
<pubDate>Mon, 12 Jan 2026 06:07:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10626-afbe2-2.html</guid>
</item>
<item>
<title>
<![CDATA[ Merit LILIN｜NVR - OS Command Injection ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10623-4f523-2.html</link>
<description>
<![CDATA[ Merit LILIN｜NVR - OS Command Injection ]]>
</description>
<pubDate>Mon, 12 Jan 2026 03:30:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10623-4f523-2.html</guid>
</item>
<item>
<title>
<![CDATA[ A-Plus Video Technologies｜NVR - Sensitive Data Exposure ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10621-55584-2.html</link>
<description>
<![CDATA[ A-Plus Video Technologies｜NVR - Sensitive Data Exposure ]]>
</description>
<pubDate>Mon, 12 Jan 2026 03:13:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10621-55584-2.html</guid>
</item>
<item>
<title>
<![CDATA[ Quanta Computer｜QOCA aim AI Medical Cloud Platform - 6 Vulnerabilities ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10616-cd942-2.html</link>
<description>
<![CDATA[ Quanta Computer｜QOCA aim AI Medical Cloud Platform - 6 Vulnerabilities ]]>
</description>
<pubDate>Mon, 05 Jan 2026 06:58:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10616-cd942-2.html</guid>
</item>
<item>
<title>
<![CDATA[ QNO Technology｜VPN Firewall - 3 Vulnerabilities ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10614-dee41-2.html</link>
<description>
<![CDATA[ QNO Technology｜VPN Firewall - 3 Vulnerabilities ]]>
</description>
<pubDate>Wed, 31 Dec 2025 08:13:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10614-dee41-2.html</guid>
</item>
<item>
<title>
<![CDATA[ NetVision Information｜ISOinsight - Reflected Cross-site Scripting ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10610-b98b4-2.html</link>
<description>
<![CDATA[ NetVision Information｜ISOinsight - Reflected Cross-site Scripting ]]>
</description>
<pubDate>Tue, 30 Dec 2025 07:25:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10610-b98b4-2.html</guid>
</item>
<item>
<title>
<![CDATA[ WELLTEND TECHNOLOGY｜ BPMFlow.NET - 2 Vulnerabilities ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10605-426b6-2.html</link>
<description>
<![CDATA[ WELLTEND TECHNOLOGY｜ BPMFlow.NET - 2 Vulnerabilities ]]>
</description>
<pubDate>Mon, 29 Dec 2025 07:01:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10605-426b6-2.html</guid>
</item>
<item>
<title>
<![CDATA[ Sunnet｜WMPro - 2 Vulnerabilities ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10603-67149-2.html</link>
<description>
<![CDATA[ Sunnet｜WMPro - 2 Vulnerabilities ]]>
</description>
<pubDate>Mon, 29 Dec 2025 06:26:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10603-67149-2.html</guid>
</item>
<item>
<title>
<![CDATA[ Ragic｜Enterprise Cloud Database - Arbitrary File Read ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10588-771e5-2.html</link>
<description>
<![CDATA[ Ragic｜Enterprise Cloud Database - Arbitrary File Read ]]>
</description>
<pubDate>Mon, 22 Dec 2025 01:47:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10588-771e5-2.html</guid>
</item>
<item>
<title>
<![CDATA[ Acer｜ListCheck.exe - Local Privilege Escalation ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10581-16346-2.html</link>
<description>
<![CDATA[ Acer｜ListCheck.exe - Local Privilege Escalation ]]>
</description>
<pubDate>Wed, 17 Dec 2025 02:04:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10581-16346-2.html</guid>
</item>
<item>
<title>
<![CDATA[ ASRock, ASRockRack, ASRockInd｜Motherboard - Protection Mechanism Failure ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10579-9205b-2.html</link>
<description>
<![CDATA[ ASRock, ASRockRack, ASRockInd｜Motherboard - Protection Mechanism Failure ]]>
</description>
<pubDate>Wed, 17 Dec 2025 02:03:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10579-9205b-2.html</guid>
</item>
<item>
<title>
<![CDATA[ MSI｜Motherboard - Protection Mechanism Failure ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10577-3cd58-2.html</link>
<description>
<![CDATA[ MSI｜Motherboard - Protection Mechanism Failure ]]>
</description>
<pubDate>Wed, 17 Dec 2025 02:01:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10577-3cd58-2.html</guid>
</item>
<item>
<title>
<![CDATA[ GIGABYTE｜Motherboard - Protection Mechanism Failure ]]>
</title>
<link>https://www.twcert.org.tw/en/cp-139-10575-e4f41-2.html</link>
<description>
<![CDATA[ GIGABYTE｜Motherboard - Protection Mechanism Failure ]]>
</description>
<pubDate>Wed, 17 Dec 2025 02:00:00 GMT</pubDate>
<guid>https://www.twcert.org.tw/en/cp-139-10575-e4f41-2.html</guid>
</item>
</channel>
</rss>
https://www.irccloud.com/pastebin/USfURLGA
# Pastebin USfURLGA
{
  "vuid": "VU#382314",
  "idnumber": "382314",
  "name": "Vulnerability in UEFI firmware modules prevents IOMMU initialization on some UEFI-based motherboards",
  "keywords": null,
  "overview": "### Overview\r\nA newly identified vulnerability in some UEFI-supported motherboard models leaves systems vulnerable to early-boot DMA attacks across architectures that implement UEFI and IOMMU. Although the firmware indicates that DMA protection is active, it fails to correctly initialize the IOMMU. Therefore, a malicious PCIe device with physical access can read or modify system memory before the operating system’s defenses load. This exposes sensitive data and enables pre-boot code injection on affected systems running unpatched firmware.\r\n\r\n### Description\r\nModern systems rely on [UEFI firmware](https://uefi.org) and the [Input–Output Memory Management Unit (IOMMU)](https://www.intel.com/content/dam/develop/external/us/en/documents/intel-whitepaper-using-iommu-for-dma-protection-in-uefi-820238.pdf) to establish a secure foundation before the operating system loads. UEFI initializes hardware and enforces early security policies while the IOMMU restricts peripheral devices from performing unauthorized memory accesses. Together, these components help ensure that direct memory access (DMA)-capable devices cannot tamper with or inspect system memory during the critical pre-boot phase.\r\n\r\nA vulnerability discovered in certain UEFI implementations arises from a discrepancy between reported and actual DMA protection. Even though firmware asserts that DMA protections are active, it fails to properly configure and enable the IOMMU during the early hand-off phase in the boot sequence. This gap allows a malicious DMA-capable Peripheral Component Interconnect Express (PCIe) device with physical access to read or modify system memory before operating system-level safeguards are established. As a result, attackers could potentially access sensitive data in memory or influence the initial state of the system, thus undermining the integrity of the boot process.\r\n\r\nVendors whose products are affected have begun releasing firmware updates to correct the IOMMU initialization sequence and properly enforce DMA protections throughout boot. Users and administrators should apply these updates as soon as they become available to ensure their systems are not exposed to this class of pre-boot DMA attacks. In environments where physical access cannot be fully controlled or relied on, prompt patching and adherence to hardware security best practices are especially important.  Because the IOMMU also plays a foundational role in isolation and trust delegation in virtualized and cloud environments, this flaw highlights the importance of ensuring correct firmware configuration even on systems not typically used in data centers.\r\n\r\n### Impact\r\nImproper IOMMU initialization in UEFI firmware on some UEFI-based motherboards from multiple vendors allows a physically present attacker using a DMA-capable PCIe device to bypass early-boot memory protection. The attacker could access or alter system memory via DMA transactions processed before the operating system enables its security controls.\r\n\r\n### Solution\r\nUsers and administrators should apply the latest firmware updates as soon as they become available as these patches correct the IOMMU initialization issue and restore proper DMA protections during early boot. Because multiple vendors are affected and updates are being released on varying timelines, customers should regularly monitor the Vendor Information section for newly published advisories and updated firmware packages. Environments where physical access is difficult to control should prioritize patching promptly to reduce exposure to pre-boot DMA attacks.\r\n\r\n### Acknowledgements\r\nThanks to reporter Nick Peterson and Mohamed Al-Sharifi of Riot Games for identifying this issue and working with vendor teams and the [Taiwanese CERT](https://tinyurl.com/twcert) to coordinate the response and reach affected product vendors. This document was written by Vijay Sarvepalli.",
  "clean_desc": null,
  "impact": null,
  "resolution": null,
  "workarounds": null,
  "sysaffected": null,
  "thanks": null,
  "author": null,
  "public": [
    "https://en.wikipedia.org/wiki/DMA_attack",
    "https://i.blackhat.com/USA21/Wednesday-Handouts/us-21-PCIe-Device-Attacks-Beyond-DMA-Exploiting-PCIe-Switches-Messages-And-Errors.pdf",
    "https://www.synacktiv.com/ressources/IOMMU_and_DMA_attacks_presentation_16_9.pdf",
    "https://learn.microsoft.com/en-us/windows/security/hardware-security/kernel-dma-protection-for-thunderbolt",
    "https://tinyurl.com/twcert",
    "https://eclypsium.com/blog/direct-memory-access-attacks-a-walk-down-memory-lane/",
    "https://www.sei.cmu.edu/blog/uefi-terra-firma-for-attackers/"
  ],
  "cveids": [
    "CVE-2025-14303",
    "CVE-2025-11901",
    "CVE-2025‑14302",
    "CVE-2025-14304"
  ],
  "certadvisory": null,
  "uscerttechnicalalert": null,
  "datecreated": "2025-12-17T15:47:39.000512Z",
  "publicdate": "2025-12-17T15:47:38.509413Z",
  "datefirstpublished": "2025-12-17T15:47:39.015462Z",
  "dateupdated": "2025-12-19T18:28:39.360019Z",
  "revision": 7,
  "vrda_d1_directreport": null,
  "vrda_d1_population": null,
  "vrda_d1_impact": null,
  "cam_widelyknown": null,
  "cam_exploitation": null,
  "cam_internetinfrastructure": null,
  "cam_population": null,
  "cam_impact": null,
  "cam_easeofexploitation": null,
  "cam_attackeraccessrequired": null,
  "cam_scorecurrent": null,
  "cam_scorecurrentwidelyknown": null,
  "cam_scorecurrentwidelyknownexploited": null,
  "ipprotocol": null,
  "cvss_accessvector": null,
  "cvss_accesscomplexity": null,
  "cvss_authentication": null,
  "cvss_confidentialityimpact": null,
  "cvss_integrityimpact": null,
  "cvss_availabilityimpact": null,
  "cvss_exploitablity": null,
  "cvss_remediationlevel": null,
  "cvss_reportconfidence": null,
  "cvss_collateraldamagepotential": null,
  "cvss_targetdistribution": null,
  "cvss_securityrequirementscr": null,
  "cvss_securityrequirementsir": null,
  "cvss_securityrequirementsar": null,
  "cvss_basescore": null,
  "cvss_basevector": null,
  "cvss_temporalscore": null,
  "cvss_environmentalscore": null,
  "cvss_environmentalvector": null,
  "metric": null,
  "vulnote": 160
}
https://1drv.ms/b/c/3b6ca5bfcad4519d/IQCdUdTKv6VsIIA74QgAAAAAAVry0M47PvQdeiccsAmsh1U

Internet Engineering Task Force (IETF) S. Bradner
Request for Comments: 8179 Harvard University
BCP: 79 J. Contreras
Obsoletes: 3979, 4879 University of Utah
Updates: 2026 May 2017
Category: Best Current Practice
ISSN: 2070-1721
 Intellectual Property Rights in IETF Technology
Abstract
 The IETF policies about Intellectual Property Rights (IPR), such as
 patent rights, relative to technologies developed in the IETF are
 designed to ensure that IETF working groups and participants have as
 much information as possible about any IPR constraints on a technical
 proposal as early as possible in the development process. The
 policies are intended to benefit the Internet community and the
 public at large, while respecting the legitimate rights of IPR
 holders. This document sets out the IETF policies concerning IPR
 related to technology worked on within the IETF. It also describes
 the objectives that the policies are designed to meet. This document
 updates RFC 2026 and, with RFC 5378, replaces Section 10 of RFC 2026.
 This document also obsoletes RFCs 3979 and 4879.
Status of This Memo
 This memo documents an Internet Best Current Practice.
 This document is a product of the Internet Engineering Task Force
 (IETF). It represents the consensus of the IETF community. It has
 received public review and has been approved for publication by the
 Internet Engineering Steering Group (IESG). Further information on
 BCPs is available in Section 2 of RFC 7841.
 Information about the current status of this document, any errata,
 and how to provide feedback on it may be obtained at
 http://www.rfc-editor.org/info/rfc8179.
Bradner & Contreras Best Current Practice [Page 1
RFC 8179 IP in IETF Technology May 2017
Copyright Notice
 Copyright (c) 2017 IETF Trust and the persons identified as the
 document authors. All rights reserved.
 This document is subject to BCP 78 and the IETF Trust's Legal
 Provisions Relating to IETF Documents
 (http://trustee.ietf.org/license-info) in effect on the date of
 publication of this document. Please review these documents
 carefully, as they describe your rights and restrictions with respect
 to this document. Code Components extracted from this document must
 include Simplified BSD License text as described in Section 4.e of
 the Trust Legal Provisions and are provided without warranty as
 described in the Simplified BSD License.
Bradner & Contreras Best Current Practice [Page 2
10730381f15a860c129704a00d905add5a5182e6ab62d261096daebe9a1821014919170d62da6
b11b74ce34d36d4b05b331cb4798860f4380be3a54a096cf833 bitcoinworkshops.2017.mbox
cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f
2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e bitcoin-workshops.after2017.mbox
721ebd1e27a262ecd1b3392421f1532d253782cec2220433bf097b4deab9ca6d5c618b851f86f
c75da5ad27b49c70ce2f311f52f573792e1bd659d18a2407096 lightning-dev.2015.mbox
8374b9b9aa379656b1dddf867a8cb5b7ea6825999345261cec8e7a1b3300ddd25f270ed0a364e
44b80b50c769662113e77030d05e674754218f74f8b416f68ab lightning-dev.2016.mbox
162e969355be9a0bf06c14e2fad2afbc7b5863664bca4c0466e09325acdcf1a2c873bd0999d32
b77aadf9aa70d5bdd50c676d7c06cd58fa4e33a9b1986ce5543 lightning-dev.2017.mbox
ba361096e300b386ff47e756659c0e0f550b51c3ba913f2d95c65f991008dd3e2efa431050fb1
206010ae3994d7cc8a828495452585cf0d8ec03c101e9c7068f lightning-dev.2018-
2019.partial.mbo
c54720825f25bec59ee0909658f1c1fb61f15136949e86e38f7e67886a34fa1be0ac236e5d3ee
1dd7395ce9b75c3fac3feb9297333bad385baecbd6b4101250b bitcoin-coredev.2016.mbox
dd2b0a6fe2cbec560fe2d07c8f3c1600c724a75bd7c293284e1126462ef357c502b41a8c7b4e2
c909d0a4ede8de9b39af206fa25ea4cd17ef58d1f7c8e3ba5a9 bitcoin-coredev.2017.mbox
64da778967f8e78cdd9150afa006fa93981a00c0d617188a7d724f49ca50a2b2624e878531627
40bc6860566339b109aaf1629a6803758d4b19c627ad574f743 bitcoin-core-dev.2018-
2019.partial.mbox
3beea3964f29f999c8fca38476c4184468c1e76d99afa91be4cb1b0e5e0f59e72f71d4c3a0525
e29449ee672e833c5af4e5f657435ab57a4fcdd86f811bf1543 bitcoin-core-dev.after2017.mbox
7726266111f45491e60003f2f81892d567e2f9ab4c86a02779290d1f685f8126574f96c3e8193
086dc6d6561f6dff169a72f2f78c0512d5ed2f65523b687c23d bitcoin-dev.2011.mbox
d6873510eb21ebff90fb2969d28dc67eea86cc792324fe94385551c3eff32ae5c269dc5dc205b
411a1e771dbd6d901f03922e3498710709893f2f5554bcb1062 bitcoin-dev.2012.mbox
d71aa47feb262beab6850bda032a668bb833ac34f2029e4e73c765a6fc84621a823185d4d6f77
15eb8bfcd0ee7646ccac027953c4639a22834c8edce13da321b bitcoin-dev.2013.mbox
c870441e2fbbdbdbe52c555e62617994789332f8fd920229a274a7f4debf28abb8b77b762d4cc
0485e3b5c04d7ba1451375a4684bb6e7d865c4bdc49ff8f1cb0 bitcoin-dev.2014.mbox
24e058150023ff495f560e3dc990508ed920d2dfff3b22d4f9dd85bb1f7d0894f03d71c36bc60
d964dff26cd6e2df12c250bb6e0eb1cb7ddbad8441d916f1466 bitcoin-dev.2015.mbox
ee9fe665091075560ad20fe91c4cfb6f141d6576b0a51fa6672d69fd97fc7efeeed2ffeff3461
8396130bdaa714b18ba743f6d95a1451d4e857467cc0165a07d bitcoin-dev.2016.mbox
e7623d444ff710ffc650d8fbef1cace866839b4fb547d25df2a965895b1c526ec69430592fa58
5cbc3bfd3eee508e41d814e35b01344c88b530296479605421e bitcoin-dev.2017.mbox
50be2677a210651cbb6eb5c28395807b3449226b2c2f087bf66ec3a2ae63add64f3b9dc5696f4
3fb57a12b94dd36d2f0a41c13183bcf391da649a6c675426fa4 bitcoin-dev.2018-
2019.partial.mbox
2661d23cdd346834fb559660d0a7297ca4bd6fdd9fa7672c2e920bd32b648af003a781c4fc58e
af934f428accada265ede16024147f1ad3889904459fbb9f0b1 bitcoin-dev.after2017.mbox
7857f88c67880cdf818940f5bf723c31dc973573f54fe4227c39d159becb894d0528313429f0c
b502318851012857f69265956e182d556aece1ad1609576e61c bitcoindiscuss.2015.mbox
e996c2819a04ab631a5a462a1674f71ed91c9451ecdddbbc7c437150f4d8b035b2eaeefa3b684
410bafaa1019a3ae96884014b807cfa9aed4534ce9857bfcdc7 bitcoindiscuss.2016.mbox
356701b21595887adeb484e19f93fd32cb39d38c1b139a365f8ce539c7d7b22aad44bc0064811
48a2514913ca9277cc5df0af247d428df1f2b109a3e595aa3ba bitcoindiscuss.2017.mbox
b4c9352797f4b6ad826617fe69a01e3aa94a7080db7146a6e8a35e5d60bacd9a28a38775a617f
08ce80527d97f5f8c52f0740340fcba36255b42420ce5e25fc0 bitcoin-discuss.after2017.mbox
5724bf0984b5b007a9d988a31696f6ae152aaa793d53a647db175e830dc581508e8b6491cc008
739d503a47798ea4cac5cce025288ea3800ec449f4421c6d701 bitcoin-knotsannounce.after-2017.mbox
4ca62007d259ca283e07b37c1f629e09493ebaed98304cca34d113e3a408a7d38b0d437ffa64e
b46d0befd0a40d44be209e405d33efa3470f119354e924b5d7b bitcoin-ml.2017.mbox
b6382e30772fe5ecd72f169b2d54e7f6d37727404bce47bbd23deb5ecacedb686f6f94efd02b7
8b157ef370df594a48b6448a9444e5e179b0ac0020b6e79c105 bitcoin-ml.after2017.mbox
c7612ea2228909c64ec3af1c78e525013c3027e45436e94e809f2bc30aa9366d3013d8d289b9a
0b8a33685db25434af79ff265a69acf9b0ee29ed3c9dff7bf1a bitcoinsegwit2x.2017.mbox
cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f
2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e bitcoin-segwit2x.after2017.mbox
42c69117fedfdb2fd54e9e9106f2c6cb68d892768ae1b521823ce3f60b5bb0cb75175af977397
bc4a17a758544027cd08659a6fbaa11a6f7e909b44bf9fac500 bitcoinworkshops.2015.mbo
Last Revision Date; 10 July 2023
• 1.1.READ THE TERMS AND CONDITIONS OF THIS AGREEMENT CAREFULLY 
BEFORE USING THE SOFTWARE. THE SOFTWARE IS FURTHER DEFINED IN 
AN ORDER DOCUMENT (AN “ORDER”), ENTERED INTO BETWEEN YOU AND 
VIDEOKEN OR YOU AND A VIDEOKEN RESELLER, WHICH SETS FORTH 
COMMERCIAL TERMS APPLICABLE TO YOUR PURCHASE OR USE OF THE 
SOFTWARE. THE SOFTWARE IS COPYRIGHTED AND IT IS LICENSED TO 
YOU UNDER THIS AGREEMENT AND IS NOT SOLD TO YOU. BY 
DOWNLOADING, INSTALLING OR USING THE SOFTWARE, OR BY ENTERING 
INTO AN ORDER WHICH REFERENCES AND PROVIDES SOURCE 
INFORMATION NECESSARY FOR ACCESSING AND REVIEWING THIS 
AGREEMENT, YOU ACKNOWLEDGE THAT YOU HAVE READ THIS 
AGREEMENT, THAT YOU UNDERSTAND IT, AND THAT YOU ACCEPT AND 
AGREE TO BE BOUND BY ITS TERMS. IF YOU ARE NOT WILLING TO BE 
BOUND BY THE TERMS OF THIS AGREEMENT, YOU SHOULD REFRAIN 
FROM ACCESSING OR USING THE SOFTWARE. THIS AGREEMENT, 
INCLUDING ANY ORDERS, ALONG WITH THE PRIVACY POLICY 
REPRESENTS THE ENTIRE AGREEMENT BETWEEN YOU AND VIDEOKEN 
CONCERNING THE SOFTWARE, AND THIS AGREEMENT SUPERSEDES AND 
REPLACES ANY PRIOR PROPOSAL, REPRESENTATION, OR 
UNDERSTANDING YOU MAY HAVE HAD WITH VIDEOKEN RELATING TO THE 
SOFTWARE UNLESS YOU HAVE ENTERED INTO A SEPARATE WRITTEN 
AGREEMENT SIGNED BY VIDEOKEN THAT EXPRESSLY AMENDS THIS 
AGREEMEN
UNICODE LICENSE V3
COPYRIGHT AND PERMISSION NOTICE
Copyright © 1991-2024 Unicode, Inc.
NOTICE TO USER: Carefully read the following legal agreement. BY
DOWNLOADING, INSTALLING, COPYING OR OTHERWISE USING DATA FILES, AND/OR
SOFTWARE, YOU UNEQUIVOCALLY ACCEPT, AND AGREE TO BE BOUND BY, ALL OF THE
TERMS AND CONDITIONS OF THIS AGREEMENT. IF YOU DO NOT AGREE, DO NOT
DOWNLOAD, INSTALL, COPY, DISTRIBUTE OR USE THE DATA FILES OR SOFTWARE.
Permission is hereby granted, free of charge, to any person obtaining a
copy of data files and any associated documentation (the "Data Files") or
software and any associated documentation (the "Software") to deal in the
Data Files or Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, and/or sell
copies of the Data Files or Software, and to permit persons to whom the
Data Files or Software are furnished to do so, provided that either (a)
this copyright and permission notice appear with all copies of the Data
Files or Software, or (b) this copyright and permission notice appear in
associated Documentation.
THE DATA FILES AND SOFTWARE ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF
THIRD PARTY RIGHTS.
IN NO EVENT SHALL THE COPYRIGHT HOLDER OR HOLDERS INCLUDED IN THIS NOTICE
BE LIABLE FOR ANY CLAIM, OR ANY SPECIAL INDIRECT OR CONSEQUENTIAL 
DAMAGES,
OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,
WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION,
ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THE DATA
FILES OR SOFTWARE.
Except as contained in this notice, the name of a copyright holder shall
not be used in advertising or otherwise to promote the sale, use or other
dealings in these Data Files or Software without prior written
authorization of the copyright holder.
EDGAR MANUEL RUIZ ARIAS edgarmanuelruizplasticos@gmail.com
edgarplasticos3@hotmail.com
Acepto terminos y condiciones

Intel(R) Network Connections Software, Release 30.5
***************************************************

October 10, 2025

This release includes software and drivers for Intel(R) Ethernet
adapters and integrated network connections.


Contents
^^^^^^^^

* Intel(R) Network Connections Software, Release 30.5

  * What's New in This Release

  * User Guides

  * Bug Fixes and Known Issues

  * Supported Operating Systems

  * Supported Hardware

  * Intel Fiber Optic Connections

  * Customer Support

  * Legal / Disclaimers


What's New in This Release
==========================

See the release notes for a full listing of new or removed features in
this release. To view the release notes:

1. Go to the following page on intel.com:

   https://www.intel.com/content/www/us/en/content-details/778690
   /intel-ethernet-controller-products-release-notes.html?wapkw=Intel
   %C2%AE%20Ethernet%20Controller%20Products%20Release%20Notes&DocID=
   778690

2. In the list of results, click on the link for "Intel(R) Ethernet
   Controller Products Release Notes."

   * By default, the page lists the newest released version.

   * If you need to view the release notes for a different version,
     click on the "More Versions" link in the right side of the search
     result and select your desired version.


User Guides
===========

See the Intel(R) Ethernet Adapters and Devices User Guide for
installation instructions, explanations of supported features and
tools, and troubleshooting tips.

You can view this user guide in the Intel Resource and Documentation
Center at https://cdrdv2.intel.com/v1/dl/getContent/705831.

Note:

  Point releases (for example, 29.1.1) may not have a corresponding
  user guide version. In those cases, refer to the user guide for the
  major release (for example, 29.1).

If you need localized installation instructions, you can access them
at the following location within the software release:

   /DOCS/QUICK/quick.htm


Bug Fixes and Known Issues
==========================

See the release notes for the list of all currently known issues,
limitations, and resolved issues.


Supported Operating Systems
===========================

The drivers in this software release have been tested with the
operating systems (OSs) listed below. Additional OSs may function with
our drivers but are not tested.

Note:

  Not all devices support all operating systems listed. Refer to the
  Release Notes for detailed OS support information for your device.


Microsoft Windows Server, Azure Stack HCI, and Windows
------------------------------------------------------

* Microsoft Windows Server 2025

* Microsoft Windows Server 2022

* Microsoft Windows Server 2019, Version 1903

* Microsoft Windows Server 2016

* Microsoft Azure Stack HCI

* Microsoft Windows 11 Version 25H2

* Microsoft Windows 11 Version 24H2

* Microsoft Windows 11 Version 23H2 (build 22631.2506)

* Microsoft Windows 10 Version 21H2 (build 19044)

* Microsoft Windows 10 RS5, Version 1809 (build 17763)

Note:

  * Devices based on the following do not support Microsoft Windows or
    Windows Server:

    * Intel® Ethernet Connection E822-C

    * Intel® Ethernet Connection E822-L

  * Some older Intel Ethernet adapters do not have full software
    support for the most recent versions of Microsoft Windows. Many
    older Intel Ethernet adapters have base drivers supplied by
    Microsoft Windows.

  * RDMA support is available on Microsoft Windows 10 version 21H2 and
    Microsoft Windows 11.

  * In Microsoft Windows Server 2025, all devices based on the Intel
    Ethernet 710 Series are reported with generic, 2-part device IDs
    and branding strings, and will be configured as generic devices
    with no custom default settings. This change resolves an issue
    seen when deploying network intent roles using the Network ATC
    scripts in Windows Server 2025 and Azure Stack HCI.

  * The HPE Synergy 4610C 10/25Gb Ethernet Adapter and HPE 10/25Gb
    Ethernet Adapter are not supported on Microsoft Windows Server
    2025.


VMware ESXi
-----------

* VMware ESXi 9.0

* VMware ESXi 8.0

* VMware ESXi 7.0

Please refer to VMware's download site for the latest ESXi drivers for
Intel Ethernet devices.


Linux
-----

* Linux Real Time Kernel 5.x and 4.x [1]

* Linux, v2.4 kernel or higher

* Red Hat Enterprise Linux (RHEL) 9.5

* Red Hat Enterprise Linux (RHEL) 9.6

* Red Hat Enterprise Linux (RHEL) 10.0

* SUSE Linux Enterprise Server (SLES) 15 SP6

* SUSE Linux Enterprise Server (SLES) 15 SP7

* SUSE Linux Enterprise Server 12 SP5

* Canonical Ubuntu 24.04 LTS

* Canonical Ubuntu 22.04 LTS

* Debian 11

* openEuler 22.03 LTS SP3 for AArch64 [2]

* Kylin Linux Advanced Server V10 - ARM [3]

* Linux Ubuntu 24.04 - ARM [4]

* Linux Ubuntu 24.04 - ARM - Real Time [4]

[1] Only supported on Intel® Ethernet E810 Series.

[2] Only supported on Intel® Ethernet E810 Series, with the Linux ice
    and iavf drivers and select Intel® Network Connection Tools. See
    tool readmes for details.

[3] Support is provided for the following components: ICE driver, iAVF
    driver, Bootutil, NVMUpdate, EPCT, EEUpdate, and CELO.

[4] Support is provided for the following components: ICE driver, iAVF
    driver, Bootutil, NVMUpdate, EPCT, LANConf (NDA only), EEUpdate,
    and CELO.


FreeBSD
-------

* FreeBSD 14.3

* FreeBSD 13.5


Supported Hardware
==================

This software release supports Intel® Ethernet devices based on the
silicon controllers and connections listed below.

For help identifying your network device and finding supported
devices, visit https://www.intel.com/support.

Note:

  Available features and settings are dependent on your device and
  operating system. **Not all settings are available on every
  device/OS combination.**


Intel® Ethernet 800 Series
--------------------------

* Intel® Ethernet Controller E810-C

* Intel® Ethernet Controller E810-XXV

* Intel® Ethernet Controller E830-CC

* Intel® Ethernet Controller E830-XXV

* Intel® Ethernet Network Adapter E830-C-Q2

* Intel® Ethernet Network Adapter E830-XXV-8F

* Intel® Ethernet Network Adapter E830-XXV-2

* Intel® Ethernet Connection E822-C

* Intel® Ethernet Connection E822-L

* Intel® Ethernet Connection E823-C

* Intel® Ethernet Connection E823-L

* Intel® Ethernet Connection E825-C


Intel® Ethernet 700 Series
--------------------------

* Intel® Ethernet Controller I710

* Intel® Ethernet Controller X710

* Intel® Ethernet Controller XL710

* Intel® Ethernet Network Connection X722

* Intel® Ethernet Controller XXV710

* Intel® Ethernet Controller V710


Intel® Ethernet 600 Series
--------------------------

* Intel® Ethernet Controller E610


Intel® Ethernet 500 Series
--------------------------

* Intel® Ethernet Controller 82599

* Intel® Ethernet Controller X520

* Intel® Ethernet Controller X550

* Intel® Ethernet Controller X552

* Intel® Ethernet Controller X553


Intel® Ethernet 300 Series and Other
------------------------------------

* Intel® I210 Gigabit Ethernet Controller

* Intel® I350 Gigabit Ethernet Controller

* Intel® Ethernet Controller I225

* Intel® Ethernet Controller I226

* Intel® Ethernet Connection I217

* Intel® Ethernet Connection I218

* Intel® Ethernet Connection I219


Intel Fiber Optic Connections
=============================

Caution: The fiber optic ports may utilize Class 1 or Class 1M laser
devices. Do not stare into the end of a fiber optic connector
connected to a "live" system. Do not use optical instruments to view
the laser output. Using optical instruments increases eye hazard.
Laser radiation is hazardous and may cause eye injury. To inspect a
connector, receptacle or adapter end, be sure that the fiber optic
device or system is turned off, or the fiber cable is disconnected
from the "live" system.

The Intel Gigabit and 10GbE network adapters with fiber optic
connections operate only at their native speed and only at full-
duplex. Therefore you do not need to make any adjustments. Use of
controls or adjustments or performance of procedures other than those
specified herein may result in hazardous radiation exposure. The laser
module contains no serviceable parts.


Customer Support
================

* Main Intel support website: https://support.intel.com

* Support for Intel Ethernet products:
  https://www.intel.com/content/www/us/en/support/products/36773
  /ethernet-products.html


Legal / Disclaimers
===================

Copyright (C) 2002 - 2025, Intel Corporation. All rights reserved.

Intel technologies may require enabled hardware, software or service
activation.

No product or component can be absolutely secure.

Your costs and results may vary.

Intel, the Intel logo, and other Intel marks are trademarks of Intel
Corporation or its subsidiaries.  Other names and brands may be
claimed as the property of others.

Performance varies by use, configuration, and other factors. Learn
more at https://www.Intel.com/PerformanceIndex.

The products described may contain design defects or errors known as
errata which may cause the product to deviate from published
specifications. Current characterized errata are available on request.

This software and the related documents are Intel copyrighted
materials, and your use of them is governed by the express license
under which they were provided to you ("License"). Unless the License
provides otherwise, you may not use, modify, copy, publish,
distribute, disclose or transmit this software or the related
documents without Intel's prior written permission.

This software and the related documents are provided as is, with no
express or implied warranties, other than those that are expressly
stated in the License.

SOFTWARE LICENSE AGREEMENT

This LIMITED DISTRIBUTION LICENSE AGREEMENT ("Agreement") is a contract
between you and Intel Corporation and its affiliates ("Intel") and 
governs any use of Material. If you use Material on behalf of or in 
conjunction with your work for your employer, you represent and warrant 
that you have the authority to bind your employer to this Agreement. 
By downloading, installing, or using Material, you accept these terms. 
If you do not accept these terms, do not use any Material and destroy 
all copies. 


1 DEFINITIONS. 

1.1 "Including", and its variants, means including but not limited 
to, whether or not capitalized. 

1.2 "Intel Component" means a hardware component or product 
designed, developed, sold, or distributed by Intel. 

1.3 "Material" means software, hardware description language 
code, or other computer files, information or collateral Intel 
delivers to you under this Agreement. 

1.4 "You" or "Your" means you or you and your employer and its 
affiliates, whether or not capitalized. 

1.5 "Your Product" means product developed or to be developed 
by or for you that includes an Intel Component implementing or 
executing Material. 


2 LICENSES. 

2.1 License. Subject to the terms of this Agreement, Intel grants 
to You, for the Term, a personal, limited, non-transferable, nonexclusive, 
worldwide, revocable, fully paid-up license under Intel's 
intellectual property rights in the Material, without the right to 
sublicense, to: 
a) develop Your Product; 
b) modify Material delivered as source code (or its equivalent); 
and 
c) distribute Material, as delivered by Intel or as modified by You, 
as object code (or its equivalent), in Your Product, provided Your 
distribution is subject to terms and conditions consistent with 
Your rights and obligations under this Agreement. 

2.2 Subcontractor. You may disclose Material to your 
subcontractor for its work on Your Product under an agreement 
preventing the subcontractor from disclosing Material to others. 
You will be liable for the acts or omissions of your subcontractor, 
including unauthorized disclosure of confidential information. 

2.3 Restrictions. Except as authorized above, you will not: (a) use 
or modify Material in any other way; (b) reverse engineer, 
decompile, or disassemble Material provided as object code 
(except as required by applicable law or under an applicable open 
source license), or (c) use Material to violate or aid in the violation 
of any international human right. 

2.4 No Implied License. Except for the express license in Section 
2.1 Intel does not grant you (i) any express or implied license 
under any legal theory, or (ii) or any license to make, have made, 
use, sell, offer for sale, import, or otherwise dispose of any Intel 
technology or third-party products, or perform any patented 
process, even if referenced in the Material. Any other licenses 
from Intel require additional consideration. Nothing in this 
Agreement requires Intel to grant any additional license. 

2.5 Feedback. If you give Intel comments or suggestions related 
to Intel Components or Intel confidential information provided in 
connection with this Agreement, including Material, Intel can use 
them in any way and disclose them to anyone, without payment 
or other obligations to you. 

2.6 Open Source Licenses. The Material may include software 
subject to an open source license, including Open Source Initiative 
approved licenses (http://www.opensource.org). Nothing in this 
Agreement limits or grants any rights under, or that supersede, 
the terms of any applicable open source license. 

2.7 Third-Party Software. Your use of certain third-party 
software with or within the Material is subject to your compliance 
with licensing you obtain directly from that third-party. A listing of 
any such third-party software may accompany the Material. 


3 CONFIDENTIALITY. The terms of this Agreement and the 
Material are Intel confidential information and subject to your 
valid corporate non-disclosure agreement with Intel (CNDA). 
Except as authorized in Section 2.1, you must not disclose this 
information to anyone, including the U.S. government. This 
Agreement will not become effective, or will automatically 
terminate, in the absence of a CNDA. This Agreement will take 
precedence in the event of a conflict with the CNDA. 


4 OWNERSHIP. Ownership of the Material and related intellectual 
property rights is unchanged. You must maintain all copyright or 
other proprietary notices in the Material. 


5 NO WARRANTY. The Material is provided "as is," without any 
express or implied warranty of any kind including warranties of 
merchantability, non-infringement, title, or fitness for a 
particular purpose. The Material may be pre-release and may 
not be fully functional. Intel is not required to maintain, update, 
or support any Material. 


6 LIMITATION ON LIABILITY. Your use of Material is at your own 
risk. Intel will not be liable to you under any legal theory for any 
losses or damages in connection with the Material or your use of 
Material, including consequential damages, even if the 
possibility of damages was foreseeable or known. If any liability 
is found, Intel's total, cumulative liability to you for all claims 
arising from or related to this Agreement will not exceed $100.00 
U.S. These liability limitations are a fundamental basis of our 
bargain and Intel would not have entered into this Agreement 
without them. 


7 INDEMNITY. You will indemnify, defend, and hold Intel harmless 
from any allegation against Intel arising in connection with your 
use of Material and you will pay all of Intel's losses, liabilities, and 
costs (including reasonable attorneys' fees) arising from the 
allegation. 


8 PRIVACY; DATA COLLECTION. 

8.1 Privacy. Intel's Privacy Notice governs how Intel may process 
personal information related to your use of Material (see 
https://www.intel.com/privacy). Intel may collect identifying 
information during registration and information on your use of 
Material (see "Information You Provide to Intel Voluntarily" and 
"Device and Product Operation" sections). 

8.2 Data Collection. Some Material may generate, collect, and 
transmit to Intel information to help improve Intel's products and 
services, to verify your license rights to Material, or for other 
stated purposes. Information collected may include Intel 
Component or Material name and version, time of event 
collection, license or support type, installation status, 
performance, and use. Intel's use of information may include 
combination of the information collected from you with other 
information. 


9 GENERAL. 

9.1 Assignment. You may not assign your rights or obligations 
under this Agreement without Intel's prior written consent. No 
third party will have any rights under this Agreement. 

9.2 Dispute Resolution. If we have a dispute regarding this 
Agreement (other than for misappropriation of trade secrets or 
breaches of confidentiality obligations), neither party can file a 
lawsuit or other regulatory proceeding before the complaining 
party provides the other party a detailed notice of the dispute and 
our senior managers attempt to resolve the dispute. If our senior 
managers cannot resolve the dispute in 30 days, either party may 
demand mediation in which we will then try to resolve the dispute 
with an impartial mediator. If our dispute is not resolved within 60 
days after the mediation demand, either party may begin 
litigation. 

9.3 Governing Law; Jurisdiction. This Agreement is governed by 
USA and Delaware law without regard to conflict of laws 
principles. The United Nations Convention on Contracts for the 
International Sale of Goods does not apply. Except for claims for 
misappropriation of trade secrets or breach of confidentiality 
obligations, all disputes and actions arising out of or related to this 
Agreement are subject to the exclusive jurisdiction of the state 
and federal courts in Wilmington, Delaware and you consent to 
personal jurisdiction in those courts. 

9.4 Compliance with Laws. The Material is subject to, and You 
must comply with, applicable government laws and regulations, 
including without limitation U.S. and worldwide trade regulations 
prohibiting the export, import, or transfer Material to any 
prohibited or sanctioned country, person, or entity. You must not 
use Material for the development, design, manufacture, or 
production of nuclear, missile, chemical, or biological weapons. 

9.5 Severability. If a court holds a provision of this Agreement 
unenforceable, the court will modify that provision to the 
minimum extent necessary to make it enforceable or, if necessary, 
to sever that provision. The rest of the Agreement remains 
enforceable. 

9.6 Waiver. No waiver of any provision of this Agreement will be 
valid unless in a writing specifying the waived provision signed by 
an authorized representative of the waiving party. A signed waiver 
will not constitute waiver of any other provision. Failure or delay 
in enforcing any provision will not operate as a waiver. 

9.7 Entire Agreement. Except for any non-disclosure agreement 
between you and Intel, this Agreement constitutes the entire 
agreement, and supersedes all prior and contemporaneous 
agreements, between Intel and you concerning its subject matter. 


10 TERM; TERMINATION; SURVIVAL. 

10.1 Term. This Agreement begins upon your acceptance of its 
terms and continues until terminated under Sections 3 or 10.2. 

10.2 Termination. Either party may terminate this Agreement, 
with 30 days written notice, at any time for any reason. This 
Agreement will automatically terminate upon (a) your breach of 
the Agreement, (b) a claim that you do not have authority to bind 
your employer to these terms, or (c) your assertion that any Intel 
Component, Material, or product based on any Intel Component 
or Material infringes your patents. 

10.3 Effect of Termination. Upon termination of the Agreement, 
the licenses to you will immediately terminate and you must cease 
using any Material and destroy all copies in your possession and 
direct your subcontractors to do the same. Termination of this 
Agreement will not terminate the CNDA. 

10.4 Survival. All sections except Section 2.1 survive termination 
of this Agreement. 


Limited Distribution License Agreement [v2022.12.20]

# Apache License
Version 2.0, January 2004

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

## 1. Definitions.

"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1
through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the
License.

"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled
by, or are under common control with that entity. For the purposes of this definition, "control" means
(i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract
or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial
ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including but not limited to software
source code, documentation source, and configuration files.

"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form,
including but not limited to compiled object code, generated documentation, and conversions to other media
types.

"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License,
as indicated by a copyright notice that is included in or attached to the work (an example is provided in the
Appendix below).

"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from)
the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent,
as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not
include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work
and Derivative Works thereof.

"Contribution" shall mean any work of authorship, including the original version of the Work and any
modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to
Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to
submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of
electronic, verbal, or written communication sent to the Licensor or its representatives, including but not
limited to communication on electronic mailing lists, source code control systems, and issue tracking systems
that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but
excluding communication that is conspicuously marked or otherwise designated in writing by the copyright
owner as "Not a Contribution."

"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been
received by Licensor and subsequently incorporated within the Work.

## 2. Grant of Copyright License.

Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual,
worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare
Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such
Derivative Works in Source or Object form.

## 3. Grant of Patent License.

Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual,
worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent
license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such
license applies only to those patent claims licensable by such Contributor that are necessarily infringed by
their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such
Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim
or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work
constitutes direct or contributory patent infringement, then any patent licenses granted to You under this
License for that Work shall terminate as of the date such litigation is filed.

## 4. Redistribution.

You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without
modifications, and in Source or Object form, provided that You meet the following conditions:

   1. You must give any other recipients of the Work or Derivative Works a copy of this License; and

   2. You must cause any modified files to carry prominent notices stating that You changed the files; and

   3. You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent,
	  trademark, and attribution notices from the Source form of the Work, excluding those notices that do
	  not pertain to any part of the Derivative Works; and

   4. If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that
	  You distribute must include a readable copy of the attribution notices contained within such NOTICE
	  file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one
	  of the following places: within a NOTICE text file distributed as part of the Derivative Works; within
	  the Source form or documentation, if provided along with the Derivative Works; or, within a display
	  generated by the Derivative Works, if and wherever such third-party notices normally appear. The
	  contents of the NOTICE file are for informational purposes only and do not modify the License. You may
	  add Your own attribution notices within Derivative Works that You distribute, alongside or as an
	  addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be
	  construed as modifying the License.

You may add Your own copyright statement to Your modifications and may provide additional or different license
terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative
Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the
conditions stated in this License.

## 5. Submission of Contributions.

Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by
You to the Licensor shall be under the terms and conditions of this License, without any additional terms or
conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate
license agreement you may have executed with Licensor regarding such Contributions.

## 6. Trademarks.

This License does not grant permission to use the trade names, trademarks, service marks, or product names of
the Licensor, except as required for reasonable and customary use in describing the origin of the Work and
reproducing the content of the NOTICE file.

## 7. Disclaimer of Warranty.

Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor
provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT,
MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the
appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of
permissions under this License.

## 8. Limitation of Liability.

In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless
required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any
Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential
damages of any character arising as a result of this License or out of the use or inability to use the Work
(including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or
any and all other commercial damages or losses), even if such Contributor has been advised of the possibility
of such damages.

## 9. Accepting Warranty or Additional Liability.

While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for,
acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this
License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole
responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold
each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason
of your accepting any such warranty or additional liability.

END OF TERMS AND CONDITIONS
[![Check For CommonIssues](https://github.com/microsoft/vcpkg/actions/workflows/check_issues.yml/badge.svg)](https://github.com/microsoft/vcpkg/actions/workflows/check_issues.yml)


Skip to main content
Documentación de GitHub
REST API/Incidencias/Dependencias de incidencias
Ahora la API de REST tiene control de versiones. Para obtener más información, consulta "Acerca del control de versiones de la API".
Puntos de conexión de API REST para dependencias de incidencias
Usa la API REST para ver, agregar y quitar dependencias de incidencias.

List dependencies an issue is blocked by:Edgar Manuel Ruiz Arias
You can use the REST API to list the dependencies an issue is blocked by.

This endpoint supports the following custom media types. For more information, see Media types.

application/vnd.github.raw+json: Returns the raw Markdown body. Response will include body. This is the default if you do not pass any specific media type.
application/vnd.github.text+json: Returns a text only representation of the Markdown body. Response will include body_text.
application/vnd.github.html+json: Returns HTML rendered from the body's Markdown. Response will include body_html.
application/vnd.github.full+json: Returns raw, text, and HTML representations. Response will include body, body_text, and body_html.
Tokens de acceso específicos para "List dependencies an issue is blocked by: Edgar Manuel Ruiz Arias"
Este punto de conexión funciona con los siguientes tipos de token pormenorizados:

Tokens de acceso de usuario de la aplicación de GitHub
Token de acceso a la instalación de la aplicación de GitHub
Tokens de acceso personal específico
El token pormenorizado debe tener el siguiente conjunto de permisos:

"Issues" repository permissions (read)
Este punto de conexión se puede usar sin autenticación o los permisos mencionados anteriormente si solo se solicitan recursos públicos.

Parámetros para "List dependencies an issue is blocked by"
Encabezados
Nombre, Tipo, Descripción
accept string
Setting to application/vnd.github+json is recommended.

Parámetros de la ruta de acceso
Nombre, Tipo, Descripción
owner string Obligatorio
The account owner of the repository. The name is not case sensitive.

repo string Obligatorio
The name of the repository without the .git extension. The name is not case sensitive.

issue_number integer Obligatorio
The number that identifies the issue.

Parámetros de consulta
Nombre, Tipo, Descripción
per_page integer
The number of results per page (max 100). For more information, see "Using pagination in the REST API."

Valor predeterminado: 30

page integer
The page number of the results to fetch. For more information, see "Using pagination in the REST API."

Valor predeterminado: 1

Códigos de estado de respuesta HTTP para "List dependencies an issue is blocked by"
status code	Descripción
200	
OK

301	
Moved permanently

404	
Resource not found

410	
Gone

Ejemplos de código para "List dependencies an issue is blocked by"
Ejemplo de solicitud
GET
/repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by

cURL

JavaScript

CLI de GitHub
// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

await octokit.request('GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by', {
  owner: 'OWNER',
  repo: 'REPO',
  issue_number: 'ISSUE_NUMBER',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
Response


Respuesta de ejemplo

Esquema de respuesta
Status: 200
{
  "type": "array",
  "items": {
    "title": "Issue",
    "description": "Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.",
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "format": "int64"
      },
      "node_id": {
        "type": "string"
      },
      "url": {
        "description": "URL for the issue",
        "type": "string",
        "format": "uri",
        "examples": [
          "https://api.github.com/repositories/42/issues/1"
        ]
      },
      "repository_url": {
        "type": "string",
        "format": "uri"
      },
      "labels_url": {
        "type": "string"
      },
      "comments_url": {
        "type": "string",
        "format": "uri"
      },
      "events_url": {
        "type": "string",
        "format": "uri"
      },
      "html_url": {
        "type": "string",
        "format": "uri"
      },
      "number": {
        "description": "Number uniquely identifying the issue within its repository",
        "type": "integer",
        "examples": [
          42
        ]
      },
      "state": {
        "description": "State of the issue; either 'open' or 'closed'",
        "type": "string",
        "examples": [
          "open"
        ]
      },
      "state_reason": {
        "description": "The reason for the current state",
        "type": [
          "string",
          "null"
        ],
        "enum": [
          "completed",
          "reopened",
          "not_planned",
          "duplicate",
          null
        ],
        "examples": [
          "not_planned"
        ]
      },
      "title": {
        "description": "Title of the issue",
        "type": "string",
        "examples": [
          "Widget creation fails in Safari on OS X 10.8"
        ]
      },
      "body": {
        "description": "Contents of the issue",
        "type": [
          "string",
          "null"
        ],
        "examples": [
          "It looks like the new widget form is broken on Safari. When I try and create the widget, Safari crashes. This is reproducible on 10.8, but not 10.9. Maybe a browser bug?"
        ]
      },
      "user": {
        "anyOf": [
          {
            "type": "null"
          },
          {
            "title": "Simple User",
            "description": "A GitHub user.",
            "type": "object",
            "properties": {
              "name": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "email": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "login": {
                "type": "string",
                "examples": [
                  "octocat"
                ]
              },
              "id": {
                "type": "integer",
                "format": "int64",
                "examples": [
                  1
                ]
              },
              "node_id": {
                "type": "string",
                "examples": [
                  "MDQ6VXNlcjE="
                ]
              },
              "avatar_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://github.com/images/error/octocat_happy.gif"
                ]
              },
              "gravatar_id": {
                "type": [
                  "string",
                  "null"
                ],
                "examples": [
                  "41d064eb2195891e12d0413f63227ea7"
                ]
              },
              "url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat"
                ]
              },
              "html_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://github.com/octocat"
                ]
              },
              "followers_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat/followers"
                ]
              },
              "following_url": {
                "type": "string",
                "examples": [
                  "https://api.github.com/users/octocat/following{/other_user}"
                ]
              },
              "gists_url": {
                "type": "string",
                "examples": [
                  "https://api.github.com/users/octocat/gists{/gist_id}"
                ]
              },
              "starred_url": {
                "type": "string",
                "examples": [
                  "https://api.github.com/users/octocat/starred{/owner}{/repo}"
                ]
              },
              "subscriptions_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat/subscriptions"
                ]
              },
              "organizations_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat/orgs"
                ]
              },
              "repos_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat/repos"
                ]
              },
              "events_url": {
                "type": "string",
                "examples": [
                  "https://api.github.com/users/octocat/events{/privacy}"
                ]
              },
              "received_events_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat/received_events"
                ]
              },
              "type": {
                "type": "string",
                "examples": [
                  "User"
                ]
              },
              "site_admin": {
                "type": "boolean"
              },
              "starred_at": {
                "type": "string",
                "examples": [
                  "\"2020-07-09T00:17:55Z\""
                ]
              },
              "user_view_type": {
                "type": "string",
                "examples": [
                  "public"
                ]
              }
            },
            "required": [
              "avatar_url",
              "events_url",
              "followers_url",
              "following_url",
              "gists_url",
              "gravatar_id",
              "html_url",
              "id",
              "node_id",
              "login",
              "organizations_url",
              "received_events_url",
              "repos_url",
              "site_admin",
              "starred_url",
              "subscriptions_url",
              "type",
              "url"
            ]
          }
        ]
      },
      "labels": {
        "description": "Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access to the repository",
        "type": "array",
        "items": {
          "oneOf": [
            {
              "type": "string"
            },
            {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer",
                  "format": "int64"
                },
                "node_id": {
                  "type": "string"
                },
                "url": {
                  "type": "string",
                  "format": "uri"
                },
                "name": {
                  "type": "string"
                },
                "description": {
                  "type": [
                    "string",
                    "null"
                  ]
                },
                "color": {
                  "type": [
                    "string",
                    "null"
                  ]
                },
                "default": {
                  "type": "boolean"
                }
              }
            }
          ]
        },
        "examples": [
          "bug",
          "registration"
        ]
      },
      "assignee": {
        "anyOf": [
          {
            "type": "null"
          },
          {
            "title": "Simple User",
            "description": "A GitHub user.",
            "type": "object",
            "properties": {
              "name": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "email": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "login": {
                "type": "string",
                "examples": [
                  "octocat"
                ]
              },
              "id": {
                "type": "integer",
                "format": "int64",
                "examples": [
                  1
                ]
              },
              "node_id": {
                "type": "string",
                "examples": [
                  "MDQ6VXNlcjE="
                ]
              },
              "avatar_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://github.com/images/error/octocat_happy.gif"
                ]
              },
              "gravatar_id": {
                "type": [
                  "string",
                  "null"
                ],
                "examples": [
                  "41d064eb2195891e12d0413f63227ea7"
                ]
              },
              "url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat"
                ]
              },
              "html_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://github.com/octocat"
                ]
              },
              "followers_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat/followers"
                ]
              },
              "following_url": {
                "type": "string",
                "examples": [
                  "https://api.github.com/users/octocat/following{/other_user}"
                ]
              },
              "gists_url": {
                "type": "string",
                "examples": [
                  "https://api.github.com/users/octocat/gists{/gist_id}"
                ]
              },
              "starred_url": {
                "type": "string",
                "examples": [
                  "https://api.github.com/users/octocat/starred{/owner}{/repo}"
                ]
              },
              "subscriptions_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat/subscriptions"
                ]
              },
              "organizations_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat/orgs"
                ]
              },
              "repos_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat/repos"
                ]
              },
              "events_url": {
                "type": "string",
                "examples": [
                  "https://api.github.com/users/octocat/events{/privacy}"
                ]
              },
              "received_events_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat/received_events"
                ]
              },
              "type": {
                "type": "string",
                "examples": [
                  "User"
                ]
              },
              "site_admin": {
                "type": "boolean"
              },
              "starred_at": {
                "type": "string",
                "examples": [
                  "\"2020-07-09T00:17:55Z\""
                ]
              },
              "user_view_type": {
                "type": "string",
                "examples": [
                  "public"
                ]
              }
            },
            "required": [
              "avatar_url",
              "events_url",
              "followers_url",
              "following_url",
              "gists_url",
              "gravatar_id",
              "html_url",
              "id",
              "node_id",
              "login",
              "organizations_url",
              "received_events_url",
              "repos_url",
              "site_admin",
              "starred_url",
              "subscriptions_url",
              "type",
              "url"
            ]
          }
        ]
      },
      "assignees": {
        "type": [
          "array",
          "null"
        ],
        "items": {
          "title": "Simple User",
          "description": "A GitHub user.",
          "type": "object",
          "properties": {
            "name": {
              "type": [
                "string",
                "null"
              ]
            },
            "email": {
              "type": [
                "string",
                "null"
              ]
            },
            "login": {
              "type": "string",
              "examples": [
                "octocat"
              ]
            },
            "id": {
              "type": "integer",
              "format": "int64",
              "examples": [
                1
              ]
            },
            "node_id": {
              "type": "string",
              "examples": [
                "MDQ6VXNlcjE="
              ]
            },
            "avatar_url": {
              "type": "string",
              "format": "uri",
              "examples": [
                "https://github.com/images/error/octocat_happy.gif"
              ]
            },
            "gravatar_id": {
              "type": [
                "string",
                "null"
              ],
              "examples": [
                "41d064eb2195891e12d0413f63227ea7"
              ]
            },
            "url": {
              "type": "string",
              "format": "uri",
              "examples": [
                "https://api.github.com/users/octocat"
              ]
            },
            "html_url": {
              "type": "string",
              "format": "uri",
              "examples": [
                "https://github.com/octocat"
              ]
            },
            "followers_url": {
              "type": "string",
              "format": "uri",
              "examples": [
                "https://api.github.com/users/octocat/followers"
              ]
            },
            "following_url": {
              "type": "string",
              "examples": [
                "https://api.github.com/users/octocat/following{/other_user}"
              ]
            },
            "gists_url": {
              "type": "string",
              "examples": [
                "https://api.github.com/users/octocat/gists{/gist_id}"
              ]
            },
            "starred_url": {
              "type": "string",
              "examples": [
                "https://api.github.com/users/octocat/starred{/owner}{/repo}"
              ]
            },
            "subscriptions_url": {
              "type": "string",
              "format": "uri",
              "examples": [
                "https://api.github.com/users/octocat/subscriptions"
              ]
            },
            "organizations_url": {
              "type": "string",
              "format": "uri",
              "examples": [
                "https://api.github.com/users/octocat/orgs"
              ]
        

https://github.com/Edgarruiz856/docs/blob/main/assets%2Fimages%2Fhelp%2Forganizations%2Forg-profile-view.png

---
title: About GitHub's documentation fundamentals
shortTitle: Documentation fundamentals
intro: 'All content published on {% data variables.product.prodname_docs %} must meet these fundamental requirements.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
---

## About {% data variables.product.github %}'s documentation fundamentals

These fundamentals are required for {% data variables.product.github %} documentation. Use the lists below to help ensure your contributions are accurate, accessible and inclusive, and consistent.

## Accurate

Documentation is correct and accurate.

* Ensure that the content is free from factual errors.
* Ensure that the content is free from spelling and formatting errors.

## Accessible and inclusive

Documentation is up to date with the latest accessibility standards, and is written to be inclusive and translation-friendly.

* Ensure content adheres to the accessibility and screenshot guidelines. For more information, see [AUTOTITLE](/contributing/writing-for-github-docs/creating-screenshots).
* Ensure content can be successfully translated. For more information, see [AUTOTITLE](/contributing/writing-for-github-docs/writing-content-to-be-translated).

## Consistent

Documentation maintains a consistent voice, tone, and style throughout, creating a cohesive experience for readers.

* Ensure content adheres to the {% data variables.product.prodname_docs %} style guide. For more information, see [AUTOTITLE](/contributing/style-guide-and-content-model/style-guide).
* Apply consistent terminology and naming conventions.
* Use branding elements (for example, product and feature names, logos, color schemes) consistently in the content.

# About GitHub's documentation fundamentals

All content published on GitHub Docs must meet these fundamental requirements.

## About GitHub's documentation fundamentals

These fundamentals are required for GitHub documentation. Use the lists below to help ensure your contributions are accurate, accessible and inclusive, and consistent.

## Accurate

Documentation is correct and accurate.

* Ensure that the content is free from factual errors.
* Ensure that the content is free from spelling and formatting errors.

## Accessible and inclusive

Documentation is up to date with the latest accessibility standards, and is written to be inclusive and translation-friendly.

* Ensure content adheres to the accessibility and screenshot guidelines. For more information, see [Creating screenshots](/en/contributing/writing-for-github-docs/creating-screenshots).
* Ensure content can be successfully translated. For more information, see [Writing content to be translated](/en/contributing/writing-for-github-docs/writing-content-to-be-translated).

## Consistent

Documentation maintains a consistent voice, tone, and style throughout, creating a cohesive experience for readers.

* Ensure content adheres to the GitHub Docs style guide. For more information, see [Style guide](/en/contributing/style-guide-and-content-model/style-guide).
* Apply consistent terminology and naming conventions.
* Use branding elements (for example, product and feature names, logos, color schemes) consistently in the content.

document_identifier,document_title,document_type,document_parliamentary_term,document_date,document_public_register_notation,document_creator,document_language,document_pdf,document_doc,document_ep_number,document_number_version,document_URI
OJ-10-2025-09-08,"DRAFT AGENDA - Monday, 8 September 2025 - Thursday, 11 September 2025",EP plenary part-session agenda,10,2025-09-08,P10_POJ(2025)09-08,,English,https://data.europarl.europa.eu/distribution/doc/OJ-10-2025-09-08-PRV_en.pdf,,PE776.478,,https://data.europarl.europa.eu/eli/dl/doc/OJ-10-2025-09-08
OJQ-10-2025-09-08,DRAFT AGENDA - 08/09/2025,EP plenary sitting agenda,10,2025-09-08,P10_OJQ(2025)09-08,,,,,PE776.478,,https://data.europarl.europa.eu/eli/dl/doc/OJQ-10-2025-09-08
OJQ-10-2025-09-09,DRAFT AGENDA - 09/09/2025,EP plenary sitting agenda,10,2025-09-09,P10_OJQ(2025)09-09,,,,,PE776.478,,https://data.europarl.europa.eu/eli/dl/doc/OJQ-10-2025-09-09
OJQ-10-2025-09-10,DRAFT AGENDA - 10/09/2025,EP plenary sitting agenda,10,2025-09-10,P10_OJQ(2025)09-10,,,,,PE776.478,,https://data.europarl.europa.eu/eli/dl/doc/OJQ-10-2025-09-10
OJQ-10-2025-09-11,DRAFT AGENDA - 11/09/2025,EP plenary sitting agenda,10,2025-09-11,P10_OJQ(2025)09-11,,,,,PE776.478,,https://data.europarl.europa.eu/eli/dl/doc/OJQ-10-2025-09-11
---
title: Customizing your organization's profile
intro: You can share information about your organization by customizing your organization's profile.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Organizations
shortTitle: Customize organization profile
---


## About your organization's profile page

You can customize your organization's Overview page to show a README and pinned repositories dedicated to public users or members of the organization.

Members of your organization who are signed into {% data variables.product.prodname_dotcom %}, can select a `member` or `public` view of the README and pinned repositories when they visit your organization's profile page.

![Screenshot of an organization's profile page. In the right sidebar, a dropdown menu, labeled "View as: Public", is outlined in dark orange.](/assets/images/help/organizations/profile-view-switcher-public.png)

The view defaults to `member` if either a members-only README or members-only pinned repositories are present, and `public` otherwise.

Users who are not members of your organization will be shown a `public` view.

### Pinned repositories

You can give users easy access to important or frequently used repositories, by choosing up to six repositories for public users and six repositories for members of the organization. Once you pin repositories to your organization profile, the "Pinned" section is shown above the "Repositories" section of the profile page.

Only organization owners can pin repositories. For more information, see [Pinning repositories to your organization's profile](#pinning-repositories-to-your-organizations-profile).

### Organization profile READMEs

You can share information about how to engage with your organization by creating an organization profile README for both public users and members of the organization. {% data variables.product.prodname_dotcom %} shows your organization profile README in the "Overview" tab of your organization.

You can choose what information to include in your organization profile README. Here are some examples of information that may be helpful.

* An "About" section that describes your organization
* Guidance for getting help in the organization

You can format text and include emoji, images, and GIFs in your organization profile README by using {% data variables.product.company_short %} Flavored Markdown. For more information, see [AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github).

{% ifversion enterprise-readme %}
If you manage multiple organizations with an enterprise account, you can help members learn about the different organizations in the enterprise by creating an enterprise README. For more information, see [AUTOTITLE](/admin/managing-your-enterprise-account/creating-a-readme-for-an-enterprise).
{% endif %}

## Adding a public organization profile README

>[!NOTE] Public organization profiles are not available with {% data variables.product.prodname_emus %}.

The content of public `README.md` will appear on your organization's public profile.

1. If your organization does not already have a public `.github` repository, create a public `.github` repository.
1. In your organization's `.github` repository, create a `README.md` file in the `profile` folder.
1. Commit the changes to the `README.md` file.

## Adding a member-only organization profile README

The content of a member-only `README.md` will be displayed in the member view of your organization's profile.

1. If your organization does not already have a `.github-private` repository, create a private repository called `.github-private`.
1. In your organization's `.github-private` repository, create a `README.md` file in the `profile` folder.
1. Commit the changes to the `README.md` file.

## Pinning repositories to your organization's profile

You can pin repositories that you want to feature, such as those that are frequently used, to your organization's profile page. To choose which repositories to pin to your organization's profile, you must be an organization owner.

1. Navigate to your organization's profile page.
1. In the right sidebar of the page, select the **{% octicon "eye" aria-hidden="true" aria-label="eye" %} View as** dropdown menu, then click **Public** or **Member**.

   ![Screenshot of an organization's profile page. In the left sidebar, a dropdown menu, labeled "View as: public" is outlined in dark orange.](/assets/images/help/organizations/org-profile-view.png)
1. Navigate to the settings for pinned repositories.

   * If you already have pinned repositories, in the "Pinned" section, click **Customize pins**.

   ![Screenshot of an organization's profile page. In the top-right corner of the "Pinned" section, "Customize pins" is outlined in dark orange.](/assets/images/help/organizations/customize-pins-link.png)

   * If you haven't yet pinned any repositories, in the right sidebar, click **pin repositories**.

   ![Screenshot of an organization's profile page. In the right sidebar, a link, labeled "pin repositories," is outlined in dark orange.](/assets/images/help/organizations/pin-repositories-org-link.png)

1. In the "Edit pinned repositories" dialog box, select a combination of up to six public, {% ifversion not fpt %}private, or internal{% else %}or private{% endif %} repositories to display.
1. Click **Save pins**.

## Changing your organization's profile picture

When you create an organization, {% data variables.product.github %} provides you with a randomly generated "identicon." The identicon is generated from a hash of your organization's user ID, so there's no way to control its color or pattern.

You can replace the identicon with an image that represents your organization. To replace the image, you can upload a new image or use a Gravatar image.

### Uploading an image

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. Under your profile picture, click **Upload new picture**, then select an image.

### Using a Gravatar image

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Gravatar email (Private)" field, enter the email address associated with your Gravatar image.
1. Click **Update profile**.

## Further reading

* [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)
* [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)
,,,,,,,,,,,
Request ID,Requester Name,Organization,Requester Category,Request Description,Requested Date,Received Date,Request Status,Closed Date,Final Disposition,,
Request Type: Exhibit,,,,,,,,,,,
23-00738-E,"Martin, Diane","AUS Consultants, Inc.",Commercial Organization,Exhibit 10.1 to the Form 10-Q CytomX Therapeutics Inc on 11-07-2017,3/2/2023,3/2/2023,Closed,3/28/2023,Denied in Full,,
23-00739-E,"Martin, Diane","AUS Consultants, Inc.",Commercial Organization,Exhibit 10.13 to the Form S-1 filed by Mersana Therapeutics Inc 06-01-2017,3/2/2023,3/2/2023,Closed,3/22/2023,Other Reasons ,,
23-00740-E,"Martin, Diane","AUS Consultants, Inc.",Commercial Organization,Exhibit 10.14 to the Form S-1 filed by Mersana Therapeutics Inc on 06-01-2017,3/2/2023,3/2/2023,Closed,3/22/2023,Other Reasons ,,
23-00741-E,"Martin, Diane","AUS Consultants, Inc.",Commercial Organization,Exhibit 10.73 to the Form S-4 filed by Jaguar Animal Health Inc nka Jaguar Health Inc on 04-18-2017,3/2/2023,3/2/2023,Closed,3/8/2023,Other Reasons ,,
23-00742-E,"Martin, Diane","AUS Consultants, Inc.",Commercial Organization,Exhibit 10.56 to the Form 10-K filed by Idera Pharmaceuticals Inc on 03-15-2017,3/2/2023,3/2/2023,Closed,3/8/2023,Other Reasons ,,
23-00743-E,"Martin, Diane","AUS Consultants, Inc.",Commercial Organization,Exhibit 10.1 to the Form 10-Q filed by Interleukin Genetics Inc on 11-14-2012,3/2/2023,3/2/2023,Closed,3/7/2023,Granted in Full,,
23-00744-E,"Norkeviciute, Auguste",RoyaltyRange Europe UAB,Commercial Organization,"EX-10.1 to Form 10-Q filed by Conformis Inc on November 5, 2018",3/3/2023,3/3/2023,Closed,3/27/2023,Denied in Full,,
23-00745-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,21-00685-E,3/6/2023,3/6/2023,Closed,3/8/2023,Granted in Full,,
23-00746-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 21-00702-E,3/6/2023,3/6/2023,Closed,3/8/2023,Granted in Full,,
23-00747-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 21-00705-E,3/6/2023,3/6/2023,Closed,3/8/2023,Granted in Full,,
23-00748-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 21-00709-E,3/6/2023,3/6/2023,Closed,3/8/2023,Granted in Full,,
23-00749-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 21-00716-E,3/6/2023,3/6/2023,Closed,3/8/2023,Granted in Full,,
23-00750-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-06751-E,3/6/2023,3/6/2023,Closed,3/8/2023,Granted in Full,,
23-00751-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-06754-E,3/6/2023,3/6/2023,Closed,3/8/2023,Granted in Full,,
23-00752-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-06760-E,3/6/2023,3/6/2023,Closed,3/8/2023,Granted in Full,,
23-00753-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-06761-E,3/6/2023,3/6/2023,Closed,3/8/2023,Granted in Full,,
23-00754-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-06764-E,3/6/2023,3/6/2023,Closed,3/8/2023,Granted in Full,,
23-00755-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-06768-E,3/6/2023,3/6/2023,Closed,3/8/2023,Granted in Full,,
23-00756-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-06772-E,3/6/2023,3/6/2023,Closed,3/8/2023,Granted in Full,,
23-00757-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07003-E,3/6/2023,3/6/2023,Closed,3/8/2023,Granted in Full,,
23-00758-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07014-E,3/6/2023,3/6/2023,Perfected,-,-,,
23-00759-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07030-E,3/6/2023,3/6/2023,Closed,3/29/2023,Granted in Full,,
23-00760-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07031-E,3/6/2023,3/6/2023,Closed,4/3/2023,Granted in Full,,
23-00761-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07033-E,3/6/2023,3/6/2023,Perfected,-,-,,
23-00762-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07034-E,3/6/2023,3/6/2023,Closed,3/13/2023,Granted in Full,,
23-00763-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07035,3/6/2023,3/6/2023,Closed,3/13/2023,Granted in Full,,
23-00764-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07039-E,3/6/2023,3/6/2023,Closed,3/13/2023,Granted in Full,,
23-00765-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07040-E,3/6/2023,3/6/2023,Closed,3/13/2023,Granted in Full,,
23-00766-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07043-E,3/6/2023,3/6/2023,Closed,3/10/2023,Granted in Full,,
23-00767-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07196-E,3/6/2023,3/6/2023,Closed,3/10/2023,Granted in Full,,
23-00768-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07208-E,3/6/2023,3/6/2023,Closed,3/13/2023,Granted in Full,,
23-00769-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07220-E,3/6/2023,3/6/2023,Closed,3/13/2023,Granted in Full,,
23-00770-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07222-E,3/6/2023,3/6/2023,Closed,3/13/2023,Granted in Full,,
23-00771-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07223-E,3/6/2023,3/6/2023,Closed,3/13/2023,Granted in Full,,
23-00772-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07232-E,3/6/2023,3/6/2023,Closed,3/13/2023,Granted in Full,,
23-00773-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07235-E,3/6/2023,3/6/2023,Closed,3/13/2023,Granted in Full,,
23-00774-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07237-E,3/6/2023,3/6/2023,Closed,3/7/2023,Other Reasons ,,
23-00775-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-07238-E,3/6/2023,3/6/2023,Closed,3/7/2023,Other Reasons ,,
23-00776-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-04139-E,3/6/2023,3/6/2023,Closed,3/8/2023,Other Reasons ,,
23-00777-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-04141-E,3/6/2023,3/6/2023,Closed,3/8/2023,Other Reasons ,,
23-00778-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-04149-E,3/6/2023,3/6/2023,Closed,3/8/2023,Other Reasons ,,
23-00779-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-04162-E,3/6/2023,3/6/2023,Closed,3/9/2023,Other Reasons ,,
23-00780-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-04166-E,3/6/2023,3/6/2023,Closed,3/9/2023,Other Reasons ,,
23-00781-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-02720-E,3/6/2023,3/6/2023,Closed,3/7/2023,Granted in Full,,
23-00782-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-02722-E,3/6/2023,3/6/2023,Closed,3/30/2023,Other Reasons ,,
23-00783-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-02723-E,3/6/2023,3/6/2023,Closed,3/30/2023,Other Reasons ,,
23-00784-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-02725-E,3/6/2023,3/6/2023,Closed,3/30/2023,Other Reasons ,,
23-00785-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-02725-E.,3/6/2023,3/6/2023,Closed,3/30/2023,Granted in Full,,
23-00786-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-02733-E,3/6/2023,3/6/2023,Closed,3/30/2023,Other Reasons ,,
23-00787-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,20-02803-E,3/6/2023,3/6/2023,Closed,3/28/2023,Granted in Full,,
23-00788-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-02975-E,3/6/2023,3/6/2023,Closed,3/28/2023,Granted in Full,,
23-00789-E,"Neuendorf, Elias",Venture Valuation AG,Commercial Organization,ID 20-03003-E,3/6/2023,3/6/2023,Closed,3/28/2023,Granted in Full,,
23-00790-E,"Matskevich, Aliaksandra",RoyaltyRange,Commercial Organization,"Exhibit 10.1 to Form 10-Q filed by SENOMYX INC on November 12, 2004.",3/7/2023,3/7/2023,Closed,3/14/2023,Granted in Full,,
23-00791-E,"Behal, Siamion",Royalty Range,Commercial Organization,"Exhibit 10.1 to Form 10-Q filed by Senomyx Inc on November 2, 2005",3/7/2023,3/7/2023,Closed,3/14/2023,Granted in Full,,
23-00792-E,"Behal, Siamion",Royalty Range,Commercial Organization,"Exhibit 10.2 to Form 10-Q filed by Robcor Properties Inc on May 15, 2007",3/7/2023,3/7/2023,Closed,3/14/2023,Granted in Full,,
23-00793-E,"Behal, Siamion",Royalty Range,Commercial Organization,"Exhibit 10.1 to Form 10-Q filed by Senomyx Inc on November 12, 2004",3/7/2023,3/7/2023,Closed,3/15/2023,Granted in Full,,
23-00794-E,"Martin, Diane","AUS Consultants, Inc.",Commercial Organization,"Exhibit 10.9 to Form S-1 filed by Omniture, Inc. on April 4, 2006",3/7/2023,3/7/2023,Closed,3/8/2023,Granted in Full,,
23-00795-E,"Martin, Diane","AUS Consultants, Inc.",Commercial Organization,"Exhibit 10.16 to Form 10-K filed by Internet Pictures Corp on April 2, 2001",3/7/2023,3/7/2023,Closed,3/13/2023,Granted in Full,,
23-00796-E,"Martin, Diane","AUS Consultants, Inc.",Commercial Organization,"Exhibit 10.8 to form S-1/A filed by Firepond Inc. on November 24, 1999",3/7/2023,3/7/2023,Closed,3/15/2023,Granted in Full,,
23-00797-E,"Martin, Diane","AUS Consultants, Inc.",Commercial Organization,"Exhibit 10 (J) to Form SB-2/A filed by Digital Lava Inc. on January 12, 1999",3/7/2023,3/7/2023,Closed,3/16/2023,Granted/Denied in Part,,
23-00798-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 4.14 to Form 20-F filed by CRUCELL NV on April 7, 2010",3/7/2023,3/7/2023,Closed,4/3/2023,Granted in Full,,
23-00799-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit: 10.1 to Form 10-Q filed by MILLENNIUM PHARMACEUTICALS INC on August 8, 2007",3/7/2023,3/7/2023,Perfected,-,-,,
23-00800-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10 to Form 10-Q filed by AUXILIUM PHARMACEUTICALS INC on May 6, 2005",3/7/2023,3/7/2023,Perfected,-,-,,
23-00801-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 2.1 to Form 8-K/A filed by OSCIENT PHARMACEUTICALS CORP on November 01, 2006",3/7/2023,3/7/2023,Assigned,-,-,,
23-00802-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.3 to Form 10-Q filed by Oscient Pharmaceutials Corp. on May 10, 2006",3/7/2023,3/7/2023,Closed,3/13/2023,Granted in Full,,
23-00803-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.1 to Form 8-K/A filed by OSI Pharmaceuticals Inc. on May 6, 2003",3/7/2023,3/7/2023,Closed,3/15/2023,Granted in Full,,
23-00804-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.57 to Form 10-Q filed by Osteotech Inc. on August 9, 2002",3/7/2023,3/7/2023,Closed,3/14/2023,Granted in Full,,
23-00805-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.58 to Form 10-Q filed by Osteotech Inc. on August 9, 2002",3/7/2023,3/7/2023,Closed,3/14/2023,Granted in Full,,
23-00806-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit: 10.21 to Form 8-K filed by ISTA PHARMACEUTICALS INC on January 2, 2002",3/7/2023,3/7/2023,Closed,3/8/2023,Granted in Full,,
23-00807-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.22 to Form 8-K filed by ISTA PHARMACEUTICALS INC on January 2, 2002",3/7/2023,3/7/2023,Closed,3/8/2023,Granted in Full,,
23-00808-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.50.1.1 to Form 10-K filed by Headwaters, Inc. on December 21, 2000",3/7/2023,3/7/2023,Closed,3/8/2023,Granted in Full,,
23-00809-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.1 to Form 8-K filed on October 31, 2014 by Biodelivery Sciences International Inc",3/7/2023,3/7/2023,Closed,3/8/2023,Granted in Full,,
23-00810-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.3 to Form 10-Q filed on November 6, 2009 by Sangamo Biosciences Inc",3/7/2023,3/7/2023,Closed,3/9/2023,Granted in Full,,
23-00811-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.1 to Form 10-Q filed on August 14, 2007 by Synvista Therapeutics, Inc",3/7/2023,3/7/2023,Closed,3/9/2023,Granted in Full,,
23-00812-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 99.1 to Form 8-K filed on September 7, 2004 by Palomar Medical Technologies Inc",3/7/2023,3/7/2023,Closed,3/9/2023,Granted in Full,,
23-00813-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.1 to Form 10-Q filed on May 12, 2014 by Trovagene, Inc",3/7/2023,3/7/2023,Closed,3/9/2023,Granted in Full,,
23-00814-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.19 to Form 10-K filed on March 17, 2008 by Antigenics Inc /De/",3/7/2023,3/7/2023,Closed,3/9/2023,Granted in Full,,
23-00815-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibits 10.7 and 10.6 to Form 8-K filed on June 9, 2008 by Arno Therapeutics, Inc",3/7/2023,3/7/2023,Closed,3/10/2023,Granted in Full,,
23-00816-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.12 to Form 10-K/A filed on December 23, 2010 by Celldex Therapeutics,",3/7/2023,3/7/2023,Closed,3/10/2023,Granted in Full,,
23-00817-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.8 to Form S-1 filed on November 30, 1999 by Antigenics Inc /De/",3/7/2023,3/7/2023,Closed,3/9/2023,Granted in Full,,
23-00818-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.12 to Form S-4/A filed on February 3, 2000 by Chippac Barbados Ltd",3/7/2023,3/7/2023,Closed,3/13/2023,Granted/Denied in Part,,
23-00819-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.12 to Form S-4/A filed on February 3, 2000 by Chippac Liquidity Management Limited Liability Co",3/7/2023,3/7/2023,Closed,3/14/2023,Granted/Denied in Part,,
23-00820-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.1 to Form 10-Q filed on November 8, 2007 by Johnsondiversey Inc",3/7/2023,3/7/2023,Closed,3/13/2023,Granted in Full,,
23-00821-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.32 to Form 10-K filed on March 27, 2008 by Theglobe Com Inc",3/7/2023,3/7/2023,Closed,3/13/2023,Granted in Full,,
23-00822-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.1 to Form 8-K filed on May 30, 2008 by Sport Haley Inc",3/7/2023,3/7/2023,Closed,3/27/2023,Granted in Full,,
23-00823-E,"Matskevich, Aliaksandra",RoyaltyRange,Commercial Organization,"Exhibit 10.23 to Form 10KSB filed by XENOMETRIX INC \DE\ on September 27, 1996",3/9/2023,3/9/2023,Closed,3/14/2023,Granted in Full,,
23-00824-E,"Norkeviciute, Auguste",RoyaltyRange Europe UAB,Commercial Organization,"Exhibit 10.1 to Form 10-Q filed by Zogenix, Inc on May 9, 2013",3/13/2023,3/13/2023,Closed,3/15/2023,Granted in Full,,
23-00825-E,"Norkeviciute, Auguste",RoyaltyRange Europe UAB,Commercial Organization,"Exhibits 10.3 & 10.4 to to Form 10QSB, filed by Photogen Technologies, Inc. (now IMCOR Pharmaceutical Co.) on November 20, 2003",3/13/2023,3/13/2023,Assigned,-,-,,
23-00826-E,"Norkeviciute, Auguste",RoyaltyRange Europe UAB,Commercial Organization,"Exhibit 10.1 to Form 8-K filed by Photogen Technologies, Inc. (now IMCOR Pharmaceutical Co.) on December 18, 2003",3/13/2023,3/13/2023,Closed,3/14/2023,Granted in Full,,
23-00827-E,"Matskevich, Aliaksandra",RoyaltyRange,Commercial Organization,"Exhibit 10.2 to Form S-1 filed by Cingulate Inc. on September 9, 2021",3/13/2023,3/13/2023,Closed,3/21/2023,Other Reasons ,,
23-00854-E,"Behal, Siamion",Royalty Range,Commercial Organization,"Exhibit 10.128 to Form 10-K filed by Inter Parfums Inc. on March 12, 2012",3/16/2023,3/16/2023,Closed,3/28/2023,Granted in Full,,
23-00855-E,"Norkeviciute, Auguste",RoyaltyRange Europe UAB,Commercial Organization,"Exhibits 10.5, 10.6, 10.7, 10.11, 10.12, 10.13 to Form S-4/A filed by Allarity Therapeutics, Inc. on October 10, 2021",3/20/2023,3/20/2023,Assigned,-,-,,
23-00856-E,"Norkeviciute, Auguste",RoyaltyRange Europe UAB,Commercial Organization,"Exhibits 10.5, 10.6, 10.7, 10.11, 10.12, 10.13 to Form S-4/A filed by Allarity Therapeutics, Inc. on October 20, 2021",3/20/2023,3/20/2023,Closed,3/22/2023,Other Reasons ,,
23-00857-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibit 10.1 to Form 10-Q filed on May 6, 2005 by Gilead Sciences Inc",3/20/2023,3/20/2023,Assigned,-,-,,
23-00858-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibit 10.86 to Form 10-Q filed on November 4, 2011 by Gilead Sciences Inc",3/20/2023,3/20/2023,Closed,4/3/2023,Other Reasons ,,
23-00859-E,"Stubblefield, Ayana",ktMINE,Commercial Organization,"Exhibit 10.1 to Form 8-K filed on January 23, 2012 by Enlightened Gourmet, Inc",3/27/2023,3/27/2023,Assigned,-,-,,
23-00860-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibit 10.65 to Form 10-K filed on February 28, 2013 by Acorda Therapeutics Inc",3/31/2023,3/31/2023,Referral Request,-,-,,
23-00861-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibit 10.13 to Form 10-K filed on March 2, 2015 by Acura Pharmaceuticals, Inc",3/31/2023,3/31/2023,Referral Request,-,-,,
23-00862-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibit 10.54 to Form 10-K/A filed on July 31, 2013 by Amgen Inc",3/31/2023,3/31/2023,Referral Request,-,-,,
23-00863-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibit 10.77 to Form 10-K filed on April 17, 2017 by Amyris, Inc.",3/31/2023,3/31/2023,Referral Request,-,-,,
23-00864-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibit 10.35 to Form S-1/A filed on March 15, 2012 by Bioamber Inc",3/31/2023,3/31/2023,Referral Request,-,-,,
23-00865-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibits 10.31, 10.33 and 10.37 to Form S-1/A filed on February 3, 2012 by Bioamber Inc",3/31/2023,3/31/2023,Referral Request,-,-,,
23-00866-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibit 10.1 to Form 8-K filed on April 1, 2013 by Biodelivery Sciences International Inc",3/31/2023,3/31/2023,Referral Request,-,-,,
23-00867-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibit 10.7 to Form 10-K filed on March 15, 2013 by Biospecifics Technologies Corp",3/31/2023,3/31/2023,Referral Request,-,-,,
23-00868-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibit 10.39 to Form 10-K filed on March 13, 2013 by Curis Inc",3/31/2023,3/31/2023,Referral Request,-,-,,
23-00869-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibit 10.15 to Form 10-K filed on March 16, 2018 by Egalet Corp",3/31/2023,3/31/2023,Referral Request,-,-,,
23-00870-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibit 10.4 to Form 10-K filed on March 16, 2015 by Egalet Corp",3/31/2023,3/31/2023,Assigned,-,-,,
23-00871-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibits 10.2 and 10. 4 to Form 10-Q filed on November 10, 2009 by Electronic Arts Inc.",3/31/2023,3/31/2023,Assigned,-,-,,
23-00872-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibit 10.1 to Form 10-K filed on April 19, 2018 by Eloxx Pharmaceuticals, Inc.",3/31/2023,3/31/2023,Assigned,-,-,,
23-00873-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibit 10.1 to Form 10-K filed on March 16, 2018 by Eloxx Pharmaceuticals, Inc",3/31/2023,3/31/2023,Assigned,-,-,,
23-00874-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibits 4.14 and 4.15 to Form 20-F filed on March 21, 2013 by Ezchip Semiconductor Ltd",3/31/2023,3/31/2023,Assigned,-,-,,
23-00875-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibit 10.12 to Form 10-K filed on March 14, 2017 by Kura Oncology, Inc",3/31/2023,3/31/2023,Assigned,-,-,,
23-00876-E,"Brozyna, Malgorzata",Sectilis,Commercial Organization,"Exhibits 10.4 and 10.8 to Form S-1 filed on June 1, 2017 by Mersana Therapeutics, Inc",3/31/2
# GitHub Docs <!-- omit in toc -->
[![Build GitHub Docs On Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new/?repo=github)

This repository contains the documentation website code and Markdown source files for [docs.github.com](https://docs.github.com).

GitHub's Docs team works on pre-production content in a private repo that regularly syncs with this public repo.

Use the table of contents icon <img alt="Table of contents icon" src="./contributing/images/table-of-contents.png" width="25" height="25" /> on the top right corner of this document to navigate to a specific section quickly.

## Contributing

We accept different types of contributions, including some that don't require you to write a single line of code. For detailed instructions on how to get started with our project, see [About contributing to GitHub Docs](https://docs.github.com/en/contributing/collaborating-on-github-docs/about-contributing-to-github-docs).

### Ways to contribute

On the GitHub Docs site, you can contribute by clicking the **Make a contribution** button at the bottom of the page to open a pull request for quick fixes like typos, updates, or link fixes.

You can also contribute by creating a local environment or opening a Codespace. For more information, see [Setting up your environment to work on GitHub Docs](https://docs.github.com/en/contributing/setting-up-your-environment-to-work-on-github-docs).

<img alt="Contribution call-to-action" src="./contributing/images/contribution_cta.png" width="400">

For more complex contributions, please [open an issue in the docs-content repo](https://github.com/github/docs-content/issues/new/choose) describing the changes you'd like to see.

If you're looking for a way to contribute, you can scan through our [help wanted board](https://github.com/github/docs/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) to find open issues already approved for work.

### And that's it!

If you're having trouble with your GitHub account, contact [Support](https://support.github.com).

That's how you can easily become a member of the GitHub Docs community. :sparkles:

## READMEs

In addition to the README you're reading right now, this repo includes other READMEs that describe the purpose of each subdirectory in more detail:

## License

The GitHub product documentation in the assets, content, and data folders are licensed under a [CC-BY license](LICENSE).

All other code in this repository is licensed under the [MIT license](LICENSE-CODE).

When using the GitHub logos, be sure to follow the [GitHub logo guidelines](https://github.com/logos).

## Thanks :purple_heart:

Thanks for all your contributions and efforts towards improving the GitHub documentation. We thank you for being part of our :sparkles: community :sparkles:! GUITHUB 
Developer Certificate of Origin
Version 1.1

Copyright (C) 2004, 2006 The Linux Foundation and its contributors.

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.


Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the best
    of my knowledge, is covered under an appropriate open source
    license and I have the right under that license to submit that
    work with modifications, whether created in whole or in part
    by me, under the same open source license (unless I am
    permitted to submit under a different license), as indicated
    in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including all
    personal information I submit with it, including my sign-off) is
    maintained indefinitely and may be redistributed consistent with
    this project or the open source license(s) involved.
ten powered by Edgar Manuel Ruiz Arias 