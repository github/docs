---
title: Primeiros passos com a API REST
intro: 'Aprenda a usar a API REST de {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Usando a API
miniTocMaxHeadingLevel: 3
---

## Sobre a API REST de {% data variables.product.prodname_dotcom %}

Esse artigo descreve como usar a API REST de {% data variables.product.prodname_dotcom %}, usando {% data variables.product.prodname_cli %}, JavaScript ou cURL. Para um guia de início rápido, consulte " Quickstart[Início rápido para a API REST do GitHub](/rest/quickstart)."

Ao fazer uma solicitação para a API REST, você especifica um método HTTP e um caminho. Além disso, você também pode especificar cabeçalhos de solicitação e caminho, consulta ou parâmetros de texto. A API retornará o código de status de resposta, cabeçalhos de resposta e, potencialmente, um texto de resposta.

A documentação de referência da API REST descreve o método HTTP, o caminho e os parâmetros para cada operação. Els também exibe exemplos de solicitações e respostas para cada operação. Para obter mais informações, consulte a [Documentação de referência de REST](/rest).

## Fazendo uma solicitação

Para fazer uma solicitação, primeiro encontre o método HTTP e o caminho para a operação que você deseja usar. Por exemplo, a operação "Obter Octocat" usa o método `GET` e o caminho `/octocat`. Para a documentação completa de referência para esta operação, consulte "[Obter Octocat](/rest/meta#get-octocat)".

{% cli %}

{% note %}

**Observação**: Você deve instalar {% data variables.product.prodname_cli %} para usar os comandos nos exemplos de {% data variables.product.prodname_cli %}. For installation instructions, see the [{% data variables.product.prodname_cli %} repository](https://github.com/cli/cli#installation).

{% endnote %}

Se você ainda não está efetuando a autenticação em {% data variables.product.prodname_cli %}, você deve usar o subcomando de autenticação `gh login` para efetuar a autenticação antes de fazer qualquer solicitação. Para obter mais informações, consulte "[Efetuando a autenticação](#authenticating)".

Para fazer uma solicitação usando {% data variables.product.prodname_cli %}, use o subcomando `api` junto com o caminho. Use o sinalizador `--method` ou `-X` para especificar o método.

```shell
gh api /octocat --method GET
```

{% endcli %}

{% javascript %}

{% note %}

**Observação**: Você deve instalar e importar o `octokit` para usar a biblioteca Octokit.js usada nos exemplos de JavaScript. For more information, see [the Octokit.js README](https://github.com/octokit/octokit.js/#readme).

{% endnote %}

Para fazer uma solicitação usando o JavaScript, você pode usar o Octokit.js. For more information, see [the Octokit.js README](https://github.com/octokit/octokit.js/#readme).

Primeiro, crie uma instância de `Octokit`.{% ifversion ghes or ghae %} Defina a URL de base como `{% data variables.product.api_url_code %}`. Substitua `[hostname]` pelo nome de {% data variables.product.product_location %}.{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});
```

Em seguida, use o método `solicitação` para fazer solicitações. Passe o método HTTP e o caminho como o primeiro argumento.

```javascript
await octokit.request("GET /octocat", {});
```

{% endjavascript %}

{% curl %}

Prepend the base URL for the {% data variables.product.prodname_dotcom %} REST API, `{% data variables.product.api_url_code %}`, to the path to get the full URL: `{% data variables.product.api_url_code %}/octocat`.{% ifversion ghes or ghae %} Replace `[hostname]` with the name of {% data variables.product.product_location %}.{% endif %}

Use o comando `curl` na sua linha de comando. Use o sinalizador `--request` ou `-X` seguido do método HTTP. Use o sinalizador `--url` seguido da URL completa.

```shell
curl --request GET \
--url "https://api.github.com/octocat"
```

{% note %}

**Observação**: Se você receber uma mensagem semelhante a command not found: curl", talvez você tenha de fazer o download e instalar o cURL. For more information, see [the cURL project download page](https://curl.se/download.html).

{% endnote %}

{% endcurl %}

Continue lendo para aprender como efetuar a autenticação, enviar parâmetros e usar a resposta.

## Autenticando

Muitas operações exigem autenticação ou devolução de informações adicionais se você estiver autenticado. Além disso, você pode fazer mais solicitações quando estiver autenticado.{% cli %} Embora algumas operações da API REST possam ser acessadas sem autenticação, você deve efetuar a autenticação em {% data variables.product.prodname_cli %} para usar o subcomando `api` .{% endcli %}

### Sobre tokens

Você pode autenticar a sua solicitação adicionando um token.

Se você deseja usar a API REST de {% data variables.product.company_short %} para uso pessoal, você pode criar um token de acesso pessoal (PAT). As operações da API REST usadas neste artigo exigem um escopo `repo` para tokens de acesso pessoal. Outras operações podem exigir diferentes escopos. Para obter mais informações sobre a criação de um token de acesso pessoal, consulte[Criando um token de acesso pessoal](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

Se você quiser usar a API em nome de uma organização ou outro usuário, {% data variables.product.company_short %} recomenda que você use um {% data variables.product.prodname_github_app %}. Se uma operação estiver disponível para {% data variables.product.prodname_github_apps %}, a documentação de referência REST para essa operação dirá "Funciona com aplicativos GitHub". As operações da API REST usadas neste artigo exigem permissões de leitura e gravação de `problemas` para {% data variables.product.prodname_github_apps %}. Outras operações podem exigir diferentes permissões. Para obter mais informações, consulte "[Criando um aplicativo GitHub](/developers/apps/building-github-apps/creating-a-github-app)", "[Efetuando a autenticação com aplicativos GitHub](/developers/apps/building-github-apps/authenticating-with-github-apps) e "[Identificando e autorizando os usuários pelos aplicativos GitHub](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)".

Se você quiser usar a API em um fluxo de trabalho de {% data variables.product.prodname_actions %}, {% data variables.product.company_short %} recomenda que você efetue a autenticação com o `GITHUB_TOKEN` ao invés de criar um token. Você pode conceder permissões para o `GITHUB_TOKEN` com a tecla `permissões`. Para obter mais informações, consulte "[Autenticação automática de tokens](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)".

### Authentication example

{% cli %}

With {% data variables.product.prodname_cli %}, you don't need to create an access token in advance. Use the `auth login` subcommand to authenticate to {% data variables.product.prodname_cli %}:

```shell
gh auth login
```

You can use the `--scopes` flag to specify what scopes you want. If you want to authenticate with a token that you created, you can use the `--with-token` flag. For more information, see the [{% data variables.product.prodname_cli %} `auth login` documentation](https://cli.github.com/manual/gh_auth_login).

{% endcli %}

{% javascript %}

{% warning %}

**Warning**: Treat your access token like a password.

To keep your token secure, you can store your token as a secret and run your script through {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

{% ifversion ghec or fpt %}You can also store your token as a {% data variables.product.prodname_codespaces %} secret and run your script in {% data variables.product.prodname_codespaces %}. For more information, see "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)."{% endif %}

If these options are not possible, consider using another service such as [the 1Password CLI](https://developer.1password.com/docs/cli/secret-references/) to store your token securely.

{% endwarning %}

To authenticate with the Octokit.js library, you can pass your token when you create an instance of `Octokit`. Replace `YOUR-TOKEN` with your token.{% ifversion ghes or ghae %} Replace `[hostname]` with the name of {% data variables.product.product_location %}.{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: 'YOUR-TOKEN',
});
```

{% endjavascript %}

{% curl %}

{% warning %}

**Warning**: Treat your access token like a password.

To help keep your account secure, you can use {% data variables.product.prodname_cli %} instead of cURL. {% data variables.product.prodname_cli %} will take care of authentication for you. For more information, see the {% data variables.product.prodname_cli %} version of this page.

{% ifversion ghec or fpt %}You can also store your token as a {% data variables.product.prodname_codespaces %} secret and use the command line through {% data variables.product.prodname_codespaces %}. For more information, see "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)."{% endif %}

If these options are not possible, consider using another service such as [the 1Password CLI](https://developer.1password.com/docs/cli/secret-references/) to store your token securely.

{% endwarning %}

With cURL, you will send an `Authorization` header with your token. Replace `YOUR-TOKEN` with your token:

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"
```

{% note %}

**Note:** In most cases, you can use `Authorization: Bearer` or `Authorization: token`. JSON web tokens (JWTs) will only work with `Authorization: Bearer`.

{% endnote %}

{% endcurl %}

### Authentication example for {% data variables.product.prodname_actions %}

{% cli %}

You can also use the `run` keyword to execute {% data variables.product.prodname_cli %} commands in your {% data variables.product.prodname_actions %} workflows. For more information, see "[Workflow syntax for GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

Instead of using the `gh auth login` command, pass your token as an environment variable called `GH_TOKEN`. {% data variables.product.prodname_dotcom %} recommends that you authenticate with the built-in `GITHUB_TOKEN` instead of creating a token. If this is not possible, store your token as a secret and replace `GITHUB_TOKEN` in the example below with the name of your secret. For more information about `GITHUB_TOKEN`, see "[Automatic token authentication](/actions/security-guides/automatic-token-authentication)." Para obter mais informações sobre segredos, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

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

You can also use the `run` keyword to execute your JavaScript scripts in your {% data variables.product.prodname_actions %} workflows. For more information, see "[Workflow syntax for GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

{% data variables.product.prodname_dotcom %} recommends that you authenticate with the built-in `GITHUB_TOKEN` instead of creating a token. If this is not possible, store your token as a secret and replace `GITHUB_TOKEN` in the example below with the name of your secret. For more information about `GITHUB_TOKEN`, see "[Automatic token authentication](/actions/security-guides/automatic-token-authentication)." Para obter mais informações sobre segredos, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

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

Example JavaScript script, with the file path `.github/actions-scripts/use-the-api.mjs`:

```javascript
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: process.env.TOKEN,
});

await octokit.request("GET /octocat", {});
```

Instead of storing your script in a separate file and executing the script from your workflow, you can use the `actions/github-script` action to run a script. For more information, see the [actions/github-script README](https://github.com/actions/github-script).

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

You can also use the `run` keyword to execute cURL commands in your {% data variables.product.prodname_actions %} workflows. For more information, see "[Workflow syntax for GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

{% data variables.product.prodname_dotcom %} recommends that you authenticate with the built-in `GITHUB_TOKEN` instead of creating a token. If this is not possible, store your token as a secret and replace `GITHUB_TOKEN` in the example below with the name of your secret. For more information about `GITHUB_TOKEN`, see "[Automatic token authentication](/actions/security-guides/automatic-token-authentication)." Para obter mais informações sobre segredos, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

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

## Using headers

Most operations specify that you should pass an `Accept` header with a value of `application/vnd.github.v3+json`. Other operations may specify that you should send a different `Accept` header or additional headers.

{% cli %}

To send a header with {% data variables.product.prodname_cli %}, use the `--header` or `-H` flag followed by the header in `key: value` format.

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /octocat
```

{% endcli %}

{% javascript %}

The Octokit.js library automatically passes the `Accept: application/vnd.github.v3+json` header. To pass additional headers or a different `Accept` header, add a `headers` property to the object that is passed as a second argument to the `request` method. The value of the `headers` property is an object with the header names as keys and header values as values. For example, to send a `content-type` header with a value of `text/plain`:

```javascript
await octokit.request("GET /octocat", {
  headers: {
    "content-type": "text/plain",
  },
});
```

{% endjavascript %}

{% curl %}

To send a header with cURL, use the `--header` or `-H` flag followed by the header in `key: value` format.

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"
```

{% endcurl %}

## Using path parameters

Path parameters modify the operation path. For example, the "List repository issues" path is `/repos/{owner}/{repo}/issues`. The curly brackets `{}` denote path parameters that you need to  specify. In this case, you must specify the repository owner and name. For the reference documentation for this operation, see "[List repository issues](/rest/issues/issues#list-repository-issues)."

{% cli %}

{% ifversion ghes or ghae %}
{% note %}

**Note:** In order for this command to work for {% data variables.product.product_location %}, replace `octocat/Spoon-Knife` with a repository owned by {% data variables.product.product_location %}. Otherwise, rerun the `gh auth login` command to authenticate to {% data variables.product.prodname_dotcom_the_website %} instead of {% data variables.product.product_location %}.

{% endnote %}
{% endif %}

To get issues from the `octocat/Spoon-Knife` repository, replace `{owner}` with `octocat` and `{repo}` with `Spoon-Knife`.

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /repos/octocat/Spoon-Knife/issues
```

{% endcli %}

{% javascript %}

{% ifversion ghes or ghae %}
{% note %}

**Observação:** Para que este exemplo funcione para {% data variables.product.product_location %}, substitua `octocat/Spoon-Knife` por um repositório pertencente ao {% data variables.product.product_location %}. Caso contrário, crie uma nova instância `Octokit` e não especifique `baseURL`.

{% endnote %}
{% endif %}

Ao fazer uma solicitação com Octokit.js, todos os parâmetros, incluindo os parâmetros de caminho, são passados em um objeto como o segundo argumento para o método `solicitação`. Para obter problemas do repositório `octocat/Spoon-Knife`, especifique `proprietário` como `octocat` e `repo` como `Spoon-Knife`.

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife"
});
```

{% endjavascript %}

{% curl %}

To get issues from the `octocat/Spoon-Knife` repository, replace `{owner}` with `octocat` and `{repo}` with `Spoon-Knife`. Para criar o caminho completo, preencha a URL de base para a API REST de {% data variables.product.prodname_dotcom %}, `https://api.github.com`: `https://api.github.com/repos/octocat/Spoon-Knife/issues`.

{% ifversion ghes or ghae %}
{% note %}

**Observação:** Se você quiser usar {% data variables.product.product_location %} em vez de {% data variables.product.prodname_dotcom_the_website %}, use `{% data variables.product.api_url_code %}` em vez de `https://api.github.com` e substitua `[hostname]` pelo nome de {% data variables.product.product_location %}. Substitua `octocat/Spoon-Knife` por um repositório pertencente a {% data variables.product.product_location %}.

{% endnote %}
{% endif %}

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"
```

{% endcurl %}

A operação retorna uma lista de problemas e dados sobre cada problema. Para obter mais informações sobre como usar a resposta, consulte a seção "[Usando a resposta](#using-the-response).

## Usando parâmetros de consulta

Os parâmetros de consulta permitem que você controle quais dados são retornados para uma solicitação. Por exemplo, um parâmetro de consulta pode permitir que você especifique quantos itens são retornados quando a resposta é paginada.

Por padrão, a operação "Listar problemas do repositório" retorna trinta problemas, ordenados em ordem decrescente pela data em que eles foram criados. Você pode usar o parâmetro `per_page` para retornar dois problemas em vez de 30. Você pode usar o parâmetro `ordenar` para classificar os problemas pela data em que foram atualizados pela última vez de ordenar pela data em que foram criados. Você pode usar o parâmetro `direção` para classificar os resultados em ordem ascendente em vez de descemdente.

{% cli %}

Para {% data variables.product.prodname_cli %}, use o sinalizador `-F` para passar um parâmetro que é um número, booleano ou nulo. Use `-f` para passar parâmetros de string

{% note %}

**Observação**: {% data variables.product.prodname_cli %} no momento não aceita parâmetros que são matrizes. Para obter mais informações, consulte [este problema](https://github.com/cli/cli/issues/1484).

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 -f sort=updated -f direction=asc
```

{% endcli %}

{% javascript %}

Ao fazer uma solicitação com Octokit.js, todos os parâmetros, incluindo os parâmetros de consulta, são passados em um objeto como o segundo argumento para o método `solicitação`.

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

Para o cURL, adicione um `?` ao final do caminho e, em seguida, anexe o nome e o valor do parâmetro de consulta na forma `parameter_name=value`. Separe os parâmetros múltiplos de consulta com `&`.

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2&sort=updated&direction=asc" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"
```

{% endcurl %}

A operação retorna uma lista de problemas e dados sobre cada problema. Para obter mais informações sobre como usar a resposta, consulte a seção "[Usando a resposta](#using-the-response).

## Usando parâmetros do texto

Os parâmetros do texto permitem que você passe dados adicionais para a API. Por exemplo, a operação "Criar um problema" exige que você especifique um título para o novo problema. Ela também permite especificar outras informações, como texto para colocar no texto do problema. Para a documentação completa de referência para esta operação, consulte "[Criar um problema](/rest/issues/issues#create-an-issue)".

A operação "Criar um problema" usa o mesmo caminho da operação "Listar problemas de repositório" nos exemplos acima, mas usa um método `POST` em vez de um método `GET`.

{% cli %}

Para {% data variables.product.prodname_cli %}, use o sinalizador `-F` para passar um parâmetro que é um número, booleano ou nulo. Use `-f` para passar parâmetros de string

{% note %}

**Observação**: {% data variables.product.prodname_cli %} no momento não aceita parâmetros que são matrizes. Para obter mais informações, consulte [este problema](https://github.com/cli/cli/issues/1484).

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method POST /repos/octocat/Spoon-Knife/issues -f title="Created with the REST API" -f body="This is a test issue created by the REST API"
```

{% endcli %}

{% javascript %}

Ao fazer uma solicitação com Octokit.js, todos os parâmetros, incluindo os parâmetros de texto, são passados em um objeto como o segundo argumento para o método `solicitação`.

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

Para o cURL, use o sinalizador `--data` para passar os parâmetros de texto em um objeto do JSON.

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

A operação cria um problema e retorna dados sobre o novo problema. Na resposta, encontre o `html_url` do seu problema e acesse o seu problema no navegador. Para obter mais informações sobre como usar a resposta, consulte a seção "[Usando a resposta](#using-the-response).

## Usando a resposta

### Sobre o código de resposta e cabeçalhos

Cada solicitação retornará um código de status HTTP que indica o sucesso da resposta. Para obter mais informações sobre códigos de resposta, consulte [a documentação de código de status de resposta de HTTP MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

Além disso, a resposta incluirá cabeçalhos que fornecem mais detalhes sobre a resposta. Os cabeçalhos que começam com `X-` ou `x-` são personalizados para {% data variables.product.company_short %}. Por exemplo, os cabeçalhos `x-ratelimit-remaining` e `x-ratelimit-reset` mostram quantas solicitações você pode fazer em um período de tempo.

{% cli %}

Para ver o código de status e os cabeçalhos, use o sinalizador `--include` ou `--i` ao enviar sua solicitação.

Por exemplo, essa solicitação:

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 --include
```

retorna o código de resposta e cabeçalhos como:

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

Neste exemplo, o código de resposta é `200`, o que indica uma solicitação bem-sucedida.

{% endcli %}

{% javascript %}

Ao fazer uma solicitação com o Octokit.js, o método `solicitação` retorna uma promessa. If the request was successful, the promise resolves to an object that includes the HTTP status code of the response (`status`) and the response headers (`headers`). If an error occurs, the promise resolves to an object that includes the HTTP status code of the response (`status`) and the response headers (`response.headers`).

Você pode usar um bloco `try/catch` para capturar um erro, caso ocorra. Por exemplo, se o pedido no script seguinte for bem-sucedido, o script registrará o código de status e o valor do cabeçalho `x-ratelimit-restante`. If the request was not successful, the script will log the status code, the value of the `x-ratelimit-remaining` header, and the error message.

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

Para ver o código de status e os cabeçalhos, use o sinalizador `--include` ou `--i` ao enviar sua solicitação.

Por exemplo, essa solicitação:

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>" \
--include
```

retorna o código de resposta e cabeçalhos como:

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

Neste exemplo, o código de resposta é `200`, o que indica uma solicitação bem-sucedida.

{% endcurl %}

### About the response body

Many operations will return a response body. Unless otherwise specified, the response body is in JSON format. For example, this request returns a list of issues with data about each issue:

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

Unlike the GraphQL API where you specify what information you want, the REST API typically returns more information than you need. If desired, you can parse the response to pull out specific pieces of information.

{% cli %}

For example, you can use `>` to redirect the response to a file:

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 > data.json
```

Then you can use jq to get the title and author ID of each issue:

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

The previous two commands return something like:

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

For more information about jq, see [the jq documentation](https://stedolan.github.io/jq/) and [jq play](https://jqplay.org/).

{% endcli %}

{% javascript %}

For example, you can get the title and author ID of each issue:

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

For example, you can use `>` to redirect the response to a file:

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>" > data.json
```

Then you can use jq to get the title and author ID of each issue:

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

The previous two commands return something like:

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

For more information about jq, see [the jq documentation](https://stedolan.github.io/jq/) and [jq play](https://jqplay.org/).

{% endcurl %}

## Próximas etapas

This article demonstrated how to list and create issues in a repository. For more practice, try to comment on an issue, edit the title of an issue, or close an issue. For more information about these operations, see "[Create an issue comment](/rest/issues#create-an-issue-comment)" and "[Update an issue](/rest/issues/issues#update-an-issue)."

For more information about the operations that you can use, see the [REST reference documentation](/rest).
