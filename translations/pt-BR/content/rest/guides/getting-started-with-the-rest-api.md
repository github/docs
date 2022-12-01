---
title: Introdução à API REST
intro: 'Saiba como usar a API REST do {% data variables.product.prodname_dotcom %}.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184258'
---
## Sobre a API REST do {% data variables.product.prodname_dotcom %}

Este artigo descreve como usar a API REST do {% data variables.product.prodname_dotcom %} com o auxílio da {% data variables.product.prodname_cli %}, do JavaScript ou do cURL. Para obter um guia de início rápido, confira "[Início Rápido para a API REST do GitHub](/rest/quickstart)".

Ao fazer uma solicitação à API REST, você especificará um método HTTP e um caminho. Além disso, você também pode especificar cabeçalhos de solicitação e parâmetros de caminho, consulta ou corpo. A API retornará o código de status de resposta, os cabeçalhos de resposta e, potencialmente, um corpo de resposta.

A documentação de referência da API REST descreve o método HTTP, o caminho e os parâmetros para cada operação. Ela também exibe exemplos de solicitações e respostas para cada operação. Para mais informações, confira a [documentação de referência de REST](/rest).

Para obter mais informações sobre as APIs do {% data variables.product.company_short %}, confira "[Sobre as APIs do {% data variables.product.company_short %}](/developers/overview/about-githubs-apis)".

## Como fazer uma solicitação

Para fazer uma solicitação, primeiro localize o método HTTP e o caminho da operação que deseja usar. Por exemplo, a operação "Obter Octocat" usa o método `GET` e o caminho `/octocat`. Para obter a documentação de referência completa para esta operação, confira "[Obter Octocat](/rest/meta#get-octocat)".

{% cli %}

{% note %}

**Observação**: você deve instalar a {% data variables.product.prodname_cli %} para usar os comandos nos exemplos da {% data variables.product.prodname_cli %}. Para obter instruções de instalação, confira o [repositório da {% data variables.product.prodname_cli %}](https://github.com/cli/cli#installation).

{% endnote %}

Se ainda não estiver autenticado na {% data variables.product.prodname_cli %}, você deverá usar o subcomando `gh auth login` para autenticar antes de fazer solicitações. Para obter mais informações, confira "[Autenticação](#authenticating)".

Para fazer uma solicitação usando a {% data variables.product.prodname_cli %}, adote o subcomando `api` juntamente com o caminho. Use o sinalizador `--method` ou `-X` para especificar o método.

```shell
gh api /octocat --method GET
```

{% endcli %}

{% javascript %}

{% note %}

**Observação**: você deve instalar e importar `octokit` para usar a biblioteca Octokit.js empregada nos exemplos do JavaScript. Para obter mais informações, confira o arquivo [LEIA-ME do Octokit.js](https://github.com/octokit/octokit.js/#readme).

{% endnote %}

Para fazer uma solicitação usando JavaScript, você pode usar o Octokit.js. Para obter mais informações, confira o arquivo [LEIA-ME do Octokit.js](https://github.com/octokit/octokit.js/#readme).

Primeiro, crie uma instância de `Octokit`.{% ifversion ghes or ghae %} Defina a URL de base como `{% data variables.product.api_url_code %}`. Substitua `[hostname]` pelo nome da {% data variables.location.product_location %}.{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});
```

Em seguida, use o método `request` para fazer solicitações. Passe o método HTTP e o caminho como o primeiro argumento.

```javascript
await octokit.request("GET /octocat", {});
```

{% endjavascript %}

{% curl %}

Acrescente a URL base da API REST do {% data variables.product.prodname_dotcom %}, `{% data variables.product.api_url_code %}`, ao caminho para obter a URL completa: `{% data variables.product.api_url_code %}/octocat`.{% ifversion ghes or ghae %} Substitua `[hostname]` pelo nome da {% data variables.location.product_location %}.{% endif %}

Use o comando `curl` na sua linha de comando. Use o sinalizador `--request` ou `-X`, seguido pelo método HTTP. Use o sinalizador `--url` seguido pela URL completa.

```shell
curl --request GET \
--url "https://api.github.com/octocat"
```

{% note %}

**Observação**: se você receber uma mensagem semelhante a "comando não encontrado: curl", talvez seja necessário baixar e instalar o cURL. Para obter mais informações, confira a [página de download do projeto cURL](https://curl.se/download.html).

{% endnote %}

{% endcurl %}

Continue lendo para saber como autenticar, enviar parâmetros e usar a resposta.

## Autenticação

Muitas operações exigem autenticação ou retornam informações adicionais se você estiver autenticado. Além disso, você pode fazer mais solicitações por hora quando está autenticado.{% cli %} Embora algumas operações de API REST estejam acessíveis sem autenticação, você precisa se autenticar na {% data variables.product.prodname_cli %} para usar o subcomando`api`.{% endcli %}

### Sobre os tokens

Você pode autenticar sua solicitação adicionando um token.

Se quiser usar a API REST do {% data variables.product.company_short %} para uso pessoal, crie um {% data variables.product.pat_generic %}. As operações da API REST usadas neste artigo exigem o escopo `repo` para {% data variables.product.pat_v1_plural %}{% ifversion pat-v2 %} ou, a menos que haja outra indicação, o acesso somente leitura a repositórios públicos para {% data variables.product.pat_v2 %}s{% endif %}. Outras operações podem exigir escopos{% ifversion pat-v2%} ou permissões{% endif %} diferentes. Para obter mais informações de como criar um {% data variables.product.pat_generic %}, confira "[Como criar um {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

Se você quiser usar a API em nome de uma organização ou de outro usuário, a {% data variables.product.company_short %} recomenda que você use um {% data variables.product.prodname_github_app %}. Se uma operação estiver disponível para um {% data variables.product.prodname_github_apps %}, a documentação de referência de REST para essa operação dirá "Funciona com Aplicativos do GitHub". As operações da API REST usadas neste artigo exigem permissões de leitura e gravação `issues` para {% data variables.product.prodname_github_apps %}. Outras operações podem exigir permissões diferentes. Para obter mais informações, confira "[Como criar um aplicativo GitHub](/developers/apps/building-github-apps/creating-a-github-app)", "[Como se autenticar com o GitHub Apps](/developers/apps/building-github-apps/authenticating-with-github-apps)" e "[Como identificar e autorizar usuários para o GitHub Apps](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)".

Se você quiser usar a API em um fluxo de trabalho de {% data variables.product.prodname_actions %}, a {% data variables.product.company_short %} recomenda que você se autentique com o `GITHUB_TOKEN` interno, em vez de criar um token. Você pode conceder permissões à `GITHUB_TOKEN` com a chave `permissions`. Para obter mais informações, confira "[Autenticação automática de token](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)".

### Exemplo de autenticação

{% cli %}

Com a {% data variables.product.prodname_cli %}, você não precisa criar um token de acesso com antecedência. Use o subcomando `auth login` para se autenticar na {% data variables.product.prodname_cli %}:

```shell
gh auth login
```

Você pode usar o sinalizador `--scopes` para especificar quais escopos deseja. Se você quiser autenticar com um token criado, poderá usar o sinalizador `--with-token`. Para obter mais informações, confira a [documentação da {% data variables.product.prodname_cli %}`auth login`](https://cli.github.com/manual/gh_auth_login).

{% endcli %}

{% javascript %}

{% warning %}

**Aviso**: trate seu token de acesso como uma senha.

Para manter seu token seguro, você pode armazená-lo como um segredo e executar seu script por meio de {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

{% ifversion ghec or fpt %}Você também pode armazenar seu token como um segredo do {% data variables.product.prodname_codespaces %} e executar seu script no {% data variables.product.prodname_codespaces %}. Para obter mais informações, confira "[Como gerenciar os segredos criptografados dos seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".{% endif %}

Se essas opções não forem possíveis, considere usar outro serviço, como a [CLI do 1Password](https://developer.1password.com/docs/cli/secret-references/), para armazenar seu token com segurança.

{% endwarning %}

Para se autenticar com a biblioteca Octokit.js, você pode passar seu token ao criar uma instância de `Octokit`. Substitua `YOUR-TOKEN` pelo token.{% ifversion ghes or ghae %} Substitua `[hostname]` pelo nome da {% data variables.location.product_location %}.{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: 'YOUR-TOKEN',
});
```

{% endjavascript %}

{% curl %}

{% warning %}

**Aviso**: trate seu token de acesso como uma senha.

Para ajudar a manter sua conta segura, você pode usar a {% data variables.product.prodname_cli %} em vez do cURL. A {% data variables.product.prodname_cli %} cuidará da autenticação para você. Para obter mais informações, confira a versão da {% data variables.product.prodname_cli %} desta página.

{% ifversion ghec or fpt %} Você também pode armazenar seu token como um segredo do {% data variables.product.prodname_codespaces %} e usar a linha de comando por meio do {% data variables.product.prodname_codespaces %}. Para obter mais informações, confira "[Como gerenciar os segredos criptografados dos seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".{% endif %}

Se essas opções não forem possíveis, considere usar outro serviço, como a [CLI do 1Password](https://developer.1password.com/docs/cli/secret-references/), para armazenar seu token com segurança.

{% endwarning %}

Com o cURL, você enviará um cabeçalho `Authorization` com seu token. Substitua `YOUR-TOKEN` pelo seu token:

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% note %}

**Observação:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

{% endcurl %}

### Exemplo de autenticação para {% data variables.product.prodname_actions %}

{% cli %}

Você também pode usar a palavra-chave `run` para executar comandos da {% data variables.product.prodname_cli %} em seus fluxos de trabalho de {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

Em vez de usar o comando `gh auth login`, passe seu token como uma variável de ambiente chamada `GH_TOKEN`. O {% data variables.product.prodname_dotcom %} recomenda que você se autentique com o `GITHUB_TOKEN` interno em vez de criar um token. Se isso não for possível, armazene o token como um segredo e substitua `GITHUB_TOKEN` no exemplo abaixo pelo nome do seu segredo. Para obter mais informações sobre `GITHUB_TOKEN`, confira a "[Autenticação automática de token](/actions/security-guides/automatic-token-authentication)". Para obter mais informações sobre segredos, confira "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

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

Você também pode usar a palavra-chave `run` para executar seus scripts do JavaScript nos fluxos de trabalho de {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

O {% data variables.product.prodname_dotcom %} recomenda que você se autentique com o `GITHUB_TOKEN` interno em vez de criar um token. Se isso não for possível, armazene o token como um segredo e substitua `GITHUB_TOKEN` no exemplo abaixo pelo nome do seu segredo. Para obter mais informações sobre `GITHUB_TOKEN`, confira a "[Autenticação automática de token](/actions/security-guides/automatic-token-authentication)". Para obter mais informações sobre segredos, confira "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

O seguinte exemplo de fluxo de trabalho:

1. Verifica o conteúdo do repositório
1. Configura o Node.js
1. Instala `octokit`
1. Armazena o valor de `GITHUB_TOKEN` como uma variável de ambiente chamada de `TOKEN` e executa `.github/actions-scripts/use-the-api.mjs`, que pode acessar essa variável de ambiente como `process.env.TOKEN`

Fluxo de trabalho de exemplo:

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

Exemplo de script do JavaScript, com o caminho do arquivo `.github/actions-scripts/use-the-api.mjs`:

```javascript
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: process.env.TOKEN,
});

await octokit.request("GET /octocat", {});
```

Em vez de armazenar o script em um arquivo separado e executar o script do seu fluxo de trabalho, você pode usar a ação `actions/github-script` para executar um script. Para obter mais informações, confira o arquivo [actions/github-script README](https://github.com/actions/github-script).

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

Você também pode usar a palavra-chave `run` para executar comandos cURL em seus fluxos de trabalho de {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

O {% data variables.product.prodname_dotcom %} recomenda que você se autentique com o `GITHUB_TOKEN` interno em vez de criar um token. Se isso não for possível, armazene o token como um segredo e substitua `GITHUB_TOKEN` no exemplo abaixo pelo nome do seu segredo. Para obter mais informações sobre `GITHUB_TOKEN`, confira a "[Autenticação automática de token](/actions/security-guides/automatic-token-authentication)". Para obter mais informações sobre segredos, confira "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

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

## Uso de cabeçalhos

A maioria das operações especifica que você deve passar um cabeçalho `Accept` com o valor `application/vnd.github+json`. Outras operações podem especificar que você deve enviar um cabeçalho `Accept` diferente ou cabeçalhos adicionais.

{% cli %}

Para enviar um cabeçalho com a {% data variables.product.prodname_cli %}, use o sinalizador `--header` ou `-H`, seguido do cabeçalho no formato `key: value`.

```shell
gh api --header 'Accept: application/vnd.github+json'{% ifversion api-date-versioning %} --header 'X-GitHub-Api-Version:{{ allVersions[currentVersion].latestApiVersion }}'{% endif %} --method GET /octocat
```

{% endcli %}

{% javascript %}

A biblioteca de Octokit.js passa automaticamente o cabeçalho `Accept: application/vnd.github+json`. Para passar cabeçalhos adicionais ou um cabeçalho `Accept` diferente, adicione uma propriedade `headers` ao objeto que é passado como um segundo argumento para o método `request`. O valor da propriedade `headers` é um objeto com os nomes de cabeçalho como chaves e valores de cabeçalho como valores. Por exemplo, para enviar um cabeçalho `content-type` com o valor `text/plain`:

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

Para enviar um cabeçalho com cURL, use o sinalizador `--header` ou `-H`, seguido pelo cabeçalho no formato `key: value`.

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"{% ifversion api-date-versioning %}\
--header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"{% endif %}
```

{% endcurl %}

## Como usar parâmetros de caminho

Os parâmetros de caminho modificam o caminho da operação. Por exemplo, o caminho "Listar problemas de repositório" é `/repos/{owner}/{repo}/issues`. As chaves `{}` denotam parâmetros de caminho que você precisa especificar. Nesse caso, você deve especificar o proprietário e o nome do repositório. Para obter a documentação de referência para essa operação, confira "[Listar problemas de repositório](/rest/issues/issues#list-repository-issues)".

{% cli %}

{% ifversion ghes or ghae %} {% note %}

**Observação:** para que esse comando funcione na {% data variables.location.product_location %}, substitua `octocat/Spoon-Knife` por um repositório pertencente à {% data variables.location.product_location %}. Caso contrário, execute novamente o comando `gh auth login` para se autenticar no {% data variables.product.prodname_dotcom_the_website %} em vez de {% data variables.location.product_location %}.

{% endnote %} {% endif %}

Para obter problemas do repositório `octocat/Spoon-Knife`, substitua `{owner}` por `octocat` e `{repo}` por `Spoon-Knife`.

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues
```

{% endcli %}

{% javascript %}

{% ifversion ghes or ghae %} {% note %}

**Observação:** para que esse exemplo funcione na {% data variables.location.product_location %}, substitua `octocat/Spoon-Knife` por um repositório pertencente à {% data variables.location.product_location %}. Caso contrário, crie uma instância `Octokit` e não especifique `baseURL`.

{% endnote %} {% endif %}

Quando você faz uma solicitação com Octokit.js, todos os parâmetros, incluindo parâmetros de caminho, são passados em um objeto como o segundo argumento para o método `request`. Para obter problemas do repositório `octocat/Spoon-Knife`, especifique `owner` como `octocat` e `repo` como `Spoon-Knife`.

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife"
});
```

{% endjavascript %}

{% curl %}

Para obter problemas do repositório `octocat/Spoon-Knife`, substitua `{owner}` por `octocat` e `{repo}` por `Spoon-Knife`. Para criar o caminho completo, prepare a URL de base para a API REST do {% data variables.product.prodname_dotcom %}, `https://api.github.com`: `https://api.github.com/repos/octocat/Spoon-Knife/issues`.

{% ifversion ghes or ghae %} {% note %}

**Observação:** se você quiser usar {% data variables.location.product_location %} em vez do {% data variables.product.prodname_dotcom_the_website %}, use `{% data variables.product.api_url_code %}` em vez de `https://api.github.com` e substitua `[hostname]` pelo nome da {% data variables.location.product_location %}. Substitua `octocat/Spoon-Knife` por um repositório pertencente à {% data variables.location.product_location %}.

{% endnote %} {% endif %}

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

A operação retorna uma lista de problemas e dados sobre cada problema. Para obter mais informações sobre como usar a resposta, confira a seção "[Como usar a resposta](#using-the-response)".

## Como usar parâmetros de consulta

Os parâmetros de consulta permitem controlar quais dados são retornados para uma solicitação. Por exemplo, um parâmetro de consulta pode permitir que você especifique quantos itens são retornados quando a resposta é paginada.

Por padrão, a operação "Listar problemas de repositório" retorna trinta problemas, classificados em ordem decrescente pela data em que foram criados. Você pode usar o parâmetro `per_page` para retornar dois problemas em vez de 30. Você pode usar o `sort` parâmetro para classificar os problemas pela data em que foram atualizados pela última vez, em vez da data em que foram criados. Você pode usar o parâmetro `direction` para classificar os resultados em ordem crescente em vez de ordem decrescente.

{% cli %}

Para a {% data variables.product.prodname_cli %}, use o sinalizador `-F` para passar um parâmetro numérico, booliano ou nulo. Use `-f` para passar parâmetros de cadeia de caracteres.

{% note %}

**Observação**: a {% data variables.product.prodname_cli %} atualmente não aceita matrizes como parâmetro. Para obter mais informações, confira [esta edição](https://github.com/cli/cli/issues/1484).

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 -f sort=updated -f direction=asc
```

{% endcli %}

{% javascript %}

Quando você faz uma solicitação com Octokit.js, todos os parâmetros, incluindo parâmetros de consulta, são passados em um objeto como o segundo argumento para o método `request`.

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

Para cURL, adicione um `?` ao final do caminho e acrescente o nome e o valor do parâmetro de consulta no formulário `parameter_name=value`. Separe vários parâmetros de consulta com `&`.

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2&sort=updated&direction=asc" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

A operação retorna uma lista de problemas e dados sobre cada problema. Para obter mais informações sobre como usar a resposta, confira a seção "[Como usar a resposta](#using-the-response)".

## Como usar parâmetros do corpo

Os parâmetros do corpo permitem que você passe dados adicionais para a API. Por exemplo, a operação "Criar um problema" exige que você especifique um título para o novo problema. Ele também permite que você especifique outras informações, como o texto a ser colocado no corpo do problema. Para obter a documentação de referência completa para esta operação, confira "[Criar um problema](/rest/issues/issues#create-an-issue)".

A operação "Criar um problema" usa o mesmo caminho que a operação "Listar problemas do repositório" nos exemplos acima, mas usa o método `POST` em vez do método `GET`.

{% cli %}

Para a {% data variables.product.prodname_cli %}, use o sinalizador `-F` para passar um parâmetro numérico, booliano ou nulo. Use `-f` para passar parâmetros de cadeia de caracteres.

{% note %}

**Observação**: a {% data variables.product.prodname_cli %} atualmente não aceita matrizes como parâmetro. Para obter mais informações, confira [esta edição](https://github.com/cli/cli/issues/1484).

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method POST /repos/octocat/Spoon-Knife/issues -f title="Created with the REST API" -f body="This is a test issue created by the REST API"
```

{% endcli %}

{% javascript %}

{% ifversion pat-v2 %}

{% note %}

Se estiver usando um {% data variables.product.pat_v2 %}, substitua `octocat/Spoon-Knife` por um repositório que pertença a você ou a uma organização da qual é membro. O token precisa ter acesso a esse repositório e ter permissões de leitura e gravação para problemas de repositório. Para obter mais informações de como criar um repositório, confira "[Como criar um repositório](/get-started/quickstart/create-a-repo)". Para obter mais informações de como permitir acesso e permissões a um {% data variables.product.pat_v2 %}, confira "[Como criar um {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

{% endnote %}

{% endif %}

Quando você faz uma solicitação com Octokit.js, todos os parâmetros, incluindo parâmetros de corpo, são passados em um objeto como o segundo argumento para o método `request`.

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

Se estiver usando um {% data variables.product.pat_v2 %}, substitua `octocat/Spoon-Knife` por um repositório que pertença a você ou a uma organização da qual é membro. O token precisa ter acesso a esse repositório e ter permissões de leitura e gravação para problemas de repositório. Para obter mais informações de como criar um repositório, confira "[Como criar um repositório](/get-started/quickstart/create-a-repo)". Para obter mais informações de como permitir acesso e permissões a um {% data variables.product.pat_v2 %}, confira "[Como criar um {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

{% endnote %}

{% endif %}

Para cURL, use o sinalizador `--data` para passar os parâmetros do corpo em um objeto JSON.

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

A operação cria um problema e retorna dados sobre o novo problema. Na resposta, localize o `html_url` do problema e navegue até o problema no navegador. Para obter mais informações sobre como usar a resposta, confira a seção "[Como usar a resposta](#using-the-response)".

## Como usar a resposta

### Sobre o código de resposta e os cabeçalhos

Toda solicitação retornará um código de status HTTP que indica o sucesso da resposta. Para obter mais informações sobre códigos de resposta, confira [a documentação do código de status de resposta HTTP do MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

Além disso, a resposta incluirá cabeçalhos que fornecem mais detalhes sobre a resposta. Cabeçalhos que começam com `X-` ou `x-` são personalizados para {% data variables.product.company_short %}. Por exemplo, os cabeçalhos `x-ratelimit-remaining` e `x-ratelimit-reset` informam quantas solicitações você pode fazer em um período.

{% cli %}

Para exibir o código de status e os cabeçalhos, use o sinalizador `--include` ou `--i` ao enviar sua solicitação.

Por exemplo, esta solicitação:

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 --include
```

retorna o código de resposta e os cabeçalhos como:

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

Quando você faz uma solicitação com Octokit.js, o método `request` retorna uma promessa. Se a solicitação tiver sido bem-sucedida, a promessa será resolvida para um objeto que inclui o código de status HTTP da resposta (`status`) e os cabeçalhos de resposta (`headers`). Se ocorrer um erro, a promessa será resolvida para um objeto que inclui o código de status HTTP da resposta (`status`) e os cabeçalhos de resposta (`response.headers`).

Você pode usar um bloco `try/catch` para capturar eventuais erros que ocorrerem. Por exemplo, se a solicitação no script a seguir for bem-sucedida, o script vai registrar o código de status e o valor do cabeçalho `x-ratelimit-remaining`. Se a solicitação não tiver sido bem-sucedida, o script vai registrar o código de status, o valor do cabeçalho `x-ratelimit-remaining` e a mensagem de erro.

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

Para exibir o código de status e os cabeçalhos, use o sinalizador `--include` ou `--i` ao enviar sua solicitação.

Por exemplo, esta solicitação:

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" \
--include
```

retorna o código de resposta e os cabeçalhos como:

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

### Sobre o corpo da resposta

Muitas operações retornarão um corpo de resposta. A menos que especificado de outra forma, o corpo da resposta está no formato JSON. Por exemplo, essa solicitação retorna uma lista de problemas com os dados sobre cada problema:

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

Ao contrário da API do GraphQL em que você especifica quais informações deseja, a API REST normalmente retorna mais informações do que você precisa. Se desejar, você pode analisar a resposta a fim de extrair informações específicas.

{% cli %}

Por exemplo, você pode usar `>` a fim de redirecionar a resposta para um arquivo:

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 > data.json
```

Em seguida, você pode usar o jq para obter o título e a ID de autor de cada problema:

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

Os dois comandos anteriores retornam algo como:

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

Para obter mais informações sobre jq, confira [a documentação jq](https://stedolan.github.io/jq/) e [o jq play](https://jqplay.org/).

{% endcli %}

{% javascript %}

Por exemplo, você pode obter o título e a ID do autor de cada problema:

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

Por exemplo, você pode usar `>` a fim de redirecionar a resposta para um arquivo:

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" > data.json
```

Em seguida, você pode usar o jq para obter o título e a ID de autor de cada problema:

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

Os dois comandos anteriores retornam algo como:

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

Para obter mais informações sobre jq, confira [a documentação jq](https://stedolan.github.io/jq/) e [o jq play](https://jqplay.org/).

{% endcurl %}

## Próximas etapas

Este artigo demonstrou como listar e criar problemas em um repositório. Para obter mais práticas, tente comentar um problema, editar o título de um problema ou fechar um problema. Para obter mais informações sobre essas operações, confira "[Criar um comentário de problema](/rest/issues#create-an-issue-comment)" e "[Atualizar um problema](/rest/issues/issues#update-an-issue)".

Para obter mais informações sobre as operações que você pode usar, confira a [documentação de referência de REST](/rest).
