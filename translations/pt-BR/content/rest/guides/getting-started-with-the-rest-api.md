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

### Exemplo de autenticação

{% cli %}

Com {% data variables.product.prodname_cli %}, você não precisa criar um token de acesso antecipadamente. Use o subcomando `auth login` para efetuar a autenticação em {% data variables.product.prodname_cli %}:

```shell
gh auth login
```

Você pode usar o sinalizador `--escopes` para especificar quais escopos você quer. Se você deseja efetuar a autenticação com um token que você criou, você pode usar o sinalizador `--with-token`. For more information, see the [{% data variables.product.prodname_cli %} `auth login` documentation](https://cli.github.com/manual/gh_auth_login).

{% endcli %}

{% javascript %}

{% warning %}

**Warning**: Treat your access token like a password.

To keep your token secure, you can store your token as a secret and run your script through {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

{% ifversion ghec or fpt %}Você também pode armazenar seu token como um segredo de {% data variables.product.prodname_codespaces %} e executar seu script em {% data variables.product.prodname_codespaces %}. For more information, see "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)."{% endif %}

If these options are not possible, consider using another service such as [the 1Password CLI](https://developer.1password.com/docs/cli/secret-references/) to store your token securely.

{% endwarning %}

Para efetuar a autenticação com a biblioteca do Octokit.js, você pode passar seu token ao criar uma instância de `Octokit`. Substitua `YOUR-TOKEN` pelo seu token.{% ifversion ghes or ghae %} Substitua `[hostname]` pelo nome de {% data variables.product.product_location %}.{% endif %}

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

Para ajudar a manter sua conta segura, você pode usar {% data variables.product.prodname_cli %} ao invés de cURL. {% data variables.product.prodname_cli %} will take care of authentication for you. For more information, see the {% data variables.product.prodname_cli %} version of this page.

{% ifversion ghec or fpt %}Você também pode armazenar seu token como um segredo de {% data variables.product.prodname_codespaces %} e usar a linha de comando através de {% data variables.product.prodname_codespaces %}. For more information, see "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)."{% endif %}

If these options are not possible, consider using another service such as [the 1Password CLI](https://developer.1password.com/docs/cli/secret-references/) to store your token securely.

{% endwarning %}

Com cURL, você enviará um cabeçalho `Autorização` com seu token. Substitua `YOUR-TOKEN` pelo seu token:

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"
```

{% note %}

**Note:** In most cases, you can use `Authorization: Bearer` or `Authorization: token`. Os tokens da web JSON (JWTs) só funcionarão com `Authorization: Bearer`.

{% endnote %}

{% endcurl %}

### Exemplo de autenticação para {% data variables.product.prodname_actions %}

{% cli %}

Você também pode usar a palavra-chave `executar` para executar comandos de {% data variables.product.prodname_cli %} nos seus fluxos de trabalho {% data variables.product.prodname_actions %}. For more information, see "[Workflow syntax for GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

Em vez de usar o comando de autenticação `gh login`, passe seu token como uma variável de ambiente denominada `GH_TOKEN`. {% data variables.product.prodname_dotcom %} recomenda que você efetue a autenticação com o `GITHUB_TOKEN` integrado em vez de criar um token. If this is not possible, store your token as a secret and replace `GITHUB_TOKEN` in the example below with the name of your secret. For more information about `GITHUB_TOKEN`, see "[Automatic token authentication](/actions/security-guides/automatic-token-authentication)." Para obter mais informações sobre segredos, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

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

Você também pode usar a palavra-chave `executar` para executar seus scripts do JavaScript nos seus fluxos de trabalho de {% data variables.product.prodname_actions %}. For more information, see "[Workflow syntax for GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

{% data variables.product.prodname_dotcom %} recomenda que você efetue a autenticação com o `GITHUB_TOKEN` integrado em vez de criar um token. If this is not possible, store your token as a secret and replace `GITHUB_TOKEN` in the example below with the name of your secret. For more information about `GITHUB_TOKEN`, see "[Automatic token authentication](/actions/security-guides/automatic-token-authentication)." Para obter mais informações sobre segredos, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

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

Em vez de armazenar seu script em um arquivo separado e executar o script do seu fluxo de trabalho, você pode usar a ação `actions/github-script` para executar um script. Para obter mais informações, consulte [actions/github-script README](https://github.com/actions/github-script).

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

Você também pode usar a palavra-chave `executar` para executar comandos do cURL nos fluxos de trabalho {% data variables.product.prodname_actions %}. For more information, see "[Workflow syntax for GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

{% data variables.product.prodname_dotcom %} recomenda que você efetue a autenticação com o `GITHUB_TOKEN` integrado em vez de criar um token. If this is not possible, store your token as a secret and replace `GITHUB_TOKEN` in the example below with the name of your secret. For more information about `GITHUB_TOKEN`, see "[Automatic token authentication](/actions/security-guides/automatic-token-authentication)." Para obter mais informações sobre segredos, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

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

## Usando cabeçalhos

A maioria das operações especifica que você deve passar um cabeçalho `Aceitar` com um valor de `application/vnd.github.v3+json`. Outras operações podem especificar que você deve enviar um cabeçalho `Aceitar` diferente ou cabeçalhos adicionais.

{% cli %}

Para enviar um cabeçalho com {% data variables.product.prodname_cli %}, utilize o sinalizador `--header` ou `-H` seguido pelo formato de cabeçalho em `key: value`.

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /octocat
```

{% endcli %}

{% javascript %}

A biblioteca do Octokit.js passa automaticamente o cabeçalho <`Accept: application/vnd.github.v3+json`. Para passar cabeçalhos adicionais ou um outro cabeçalho `Aceitar`, adicione uma propriedade de `cabeçalhos` ao objeto que é passado como um segundo argumento ao mpetodo de `solicitação`. O valor da propriedade dos `cabeçalhos` propriedade é um objeto com os nomes de cabeçalho como chaves e valores de cabeçalho como valores. Por exemplo, para enviar um cabeçalho `content-type` com um valor de `text/plain`:

```javascript
await octokit.request("GET /octocat", {
  headers: {
    "content-type": "text/plain",
  },
});
```

{% endjavascript %}

{% curl %}

Para enviar um cabeçalho com cURL, use o sinalizador `--header` ou `-H` seguido pelo cabeçalho no formato `key: value`.

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"
```

{% endcurl %}

## Usando parâmetros de caminho

Os parâmetros de caminho modificam o caminho da operação. Por exemplo, o caminho "Listar problemas de repositório" é `/repos/{owner}/{repo}/issues`. As chaves `{}` denotam parâmetros de caminhos que você precisa especificar. Neste caso, você deve especificar o proprietário e o nome do repositório. Para a documentação de referência para esta operação, consulte "[Listar problemas com o repositório](/rest/issues/issues#list-repository-issues)".

{% cli %}

{% ifversion ghes or ghae %}
{% note %}

**Observação:** Para que este comando funcione para {% data variables.product.product_location %}, substitua `octocat/Spoon-Knife` por um repositório pertencente ao {% data variables.product.product_location %}. Caso contrário, execute novamente o comando `gh login` para efetuar a autenticação em {% data variables.product.prodname_dotcom_the_website %} em vez de {% data variables.product.product_location %}.

{% endnote %}
{% endif %}

Para obter problemas do repositório `octocat/Spoon-Knife`, substitua `{owner}` por `octocat` e `{repo}` por `Spoon-Knife`.

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

Para obter problemas do repositório `octocat/Spoon-Knife`, substitua `{owner}` por `octocat` e `{repo}` por `Spoon-Knife`. Para criar o caminho completo, preencha a URL de base para a API REST de {% data variables.product.prodname_dotcom %}, `https://api.github.com`: `https://api.github.com/repos/octocat/Spoon-Knife/issues`.

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

### Sobre o texto de resposta

Muitas operações retornarão um texto de resposta. A menos que seja especificado, o texto da resposta está em formato JSON. Por exemplo, esta solicitação retorna uma lista de problemas com dados sobre cada problema:

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

Em seguida, você pode usar jq para obter o título e o ID do autor de cada problema:

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

Os dois comandos anteriores retornam algo parecido a:

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

Para obter mais informações sobre jq, consulte [a documentação do jq](https://stedolan.github.io/jq/) e [jq play](https://jqplay.org/).

{% endcli %}

{% javascript %}

Por exemplo, você pode obter o ID do autor e título de cada problema:

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

Em seguida, você pode usar jq para obter o título e o ID do autor de cada problema:

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

Os dois comandos anteriores retornam algo parecido a:

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

Para obter mais informações sobre jq, consulte [a documentação do jq](https://stedolan.github.io/jq/) e [jq play](https://jqplay.org/).

{% endcurl %}

## Próximas etapas

Este artigo demonstrou como listar e criar problemas em um repositório. Para mais adquirir prática, tente comentar sobre um problema, editar o título de um problema ou fechar um problema. Para obter mais informações sobre essas operações, consulte "[Criar um comentário de problema](/rest/issues#create-an-issue-comment)" e "[Atualizar um problema](/rest/issues/issues#update-an-issue)".

Para obter mais informações sobre as operações que você pode usar, consulte a [documentação de referência de REST](/rest).
