---
title: Início Rápido para a API REST do GitHub
intro: 'Saiba como começar a usar a API REST do {% data variables.product.prodname_dotcom %}.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192878'
---
Este artigo descreve como começar rapidamente com a API REST do {% data variables.product.prodname_dotcom %} usando {% data variables.product.prodname_cli %}, JavaScript ou cURL. Para obter um guia mais detalhado, confira "[Introdução à API REST](/rest/guides/getting-started-with-the-rest-api)".

{% cli %}

## Introdução ao uso da {% data variables.product.prodname_cli %}

### Como usar a {% data variables.product.prodname_cli %} na linha de comando

A {% data variables.product.prodname_cli %} é a maneira mais fácil de usar a API REST do {% data variables.product.prodname_dotcom %} por meio da linha de comando.

1. Instale a {% data variables.product.prodname_cli %} caso ainda não o tenha feito. Para obter instruções de instalação, confira o [repositório da {% data variables.product.prodname_cli %}](https://github.com/cli/cli#installation).
1. Use o subcomando `auth login` para se autenticar na {% data variables.product.prodname_cli %}. Para obter mais informações, confira a [documentação`auth login` da {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_auth_login).

   ```shell
   gh auth login
   ```

1. Use o subcomando `api` para fazer sua solicitação de API. Para obter mais informações, confira a [documentação`api` da {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_api).

   ```shell
   gh api repos/octocat/Spoon-Knife/issues
   ```

### Como usar a {% data variables.product.prodname_cli %} em {% data variables.product.prodname_actions %}

Você também pode usar a {% data variables.product.prodname_cli %} em seus fluxos de trabalho de {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Como usar a CLI do GitHub em fluxos de trabalho](/actions/using-workflows/using-github-cli-in-workflows)".

Em vez de usar o comando `gh auth login`, passe um token de acesso como uma variável de ambiente chamada `GH_TOKEN`. O {% data variables.product.prodname_dotcom %} recomenda que você use o `GITHUB_TOKEN` interno em vez de criar um token. Se isso não for possível, armazene o token como um segredo e substitua `GITHUB_TOKEN` no exemplo abaixo pelo nome do seu segredo. Para obter mais informações sobre `GITHUB_TOKEN`, confira a "[Autenticação automática de token](/actions/security-guides/automatic-token-authentication)". Para obter mais informações sobre segredos, confira "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

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

Se estiver se autenticando com um {% data variables.product.prodname_github_app %}, você poderá criar um token de acesso de instalação no fluxo de trabalho:

1. Armazene a ID do seu {% data variables.product.prodname_github_app %} como um segredo. No exemplo a seguir, substitua `APP_ID` pelo nome do segredo. Você pode encontrar o ID do aplicativo na página de configurações do aplicativo ou por meio da API. Para obter mais informações, consulte "[Aplicativos](/rest/apps/apps#get-an-app)" na documentação da API REST. Para obter mais informações sobre segredos, confira "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".
1. Gerar uma chave privada para o seu aplicativo. Armazene o conteúdo do arquivo resultante como um segredo. (Armazene todo o conteúdo do arquivo, incluindo `-----BEGIN RSA PRIVATE KEY-----` e `-----END RSA PRIVATE KEY-----`). No exemplo a seguir, substitua `APP_PEM` pelo nome do segredo. Para obter mais informações, confira "[Autenticação com os {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)".
1. Adicione uma etapa para gerar um token e use esse token em vez de `GITHUB_TOKEN`. Observe que esse token vai expirar após 60 minutos. Por exemplo:

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

## Introdução ao uso do JavaScript

Você pode usar Octokit.js para interagir com a API REST do {% data variables.product.prodname_dotcom %} em seus scripts do JavaScript. Para obter mais informações, confira o arquivo [LEIA-ME do Octokit.js](https://github.com/octokit/octokit.js/#readme).

### Como usar Octokit.js

1. Crie um token de acesso. Por exemplo, crie um {% data variables.product.pat_generic %} ou um token de acesso usuário para servidor do {% data variables.product.prodname_github_app %}. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)" ou "[Como identificar e autorizar usuários para Aplicativos GitHub](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)".

   {% warning %}

   **Aviso**: trate seu token de acesso como uma senha.

   Para manter seu token seguro, você pode armazená-lo como um segredo e executar seu script por meio de {% data variables.product.prodname_actions %}. Para obter mais informações, confira a seção "[Como usar o Octokit.js em {% data variables.product.prodname_actions %}](#using-octokitjs-in-github-actions)".

   {%- ifversion fpt or ghec %}

   Você também pode armazenar seu token como um segredo do {% data variables.product.prodname_codespaces %} e executar seu script no {% data variables.product.prodname_codespaces %}. Para obter mais informações, confira "[Como gerenciar os segredos criptografados dos seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".{% endif %}

   Se essas opções não forem possíveis, considere usar outro serviço, como a [CLI do 1Password](https://developer.1password.com/docs/cli/secret-references/), para armazenar seu token com segurança.

   {% endwarning %}

1. Instale o `octokit`. Por exemplo, `npm install octokit`. Para outras maneiras de instalar ou carregar `octokit`, confira o [LEIA-ME do Octokit.js](https://github.com/octokit/octokit.js/#readme).
1. Importe `octokit` em seu script. Por exemplo, `import { Octokit } from "octokit";`. Para outras maneiras de importar `octokit`, confira o [LEIA-ME do Octokit.js](https://github.com/octokit/octokit.js/#readme).
1. Crie uma instância de `Octokit` com seu token. Substitua `YOUR-TOKEN` pelo seu token.

   ```javascript
   const octokit = new Octokit({
     auth: 'YOUR-TOKEN'
   });
   ```

1. Use `octokit.request` para executar sua solicitação. Envie o método HTTP e o caminho como o primeiro argumento. Especifique quaisquer parâmetros de caminho, consulta e corpo em um objeto como o segundo argumento. Por exemplo, na solicitação a seguir, o método HTTP é `GET`, o caminho é `/repos/{owner}/{repo}/issues` e os parâmetros são `owner: "octocat"` e `repo: "Spoon-Knife"`.

   ```javascript
   await octokit.request("GET /repos/{owner}/{repo}/issues", {
     owner: "octocat",
     repo: "Spoon-Knife",
   });
   ```

### Como usar o Octokit.js em {% data variables.product.prodname_actions %}

Você também pode executar seus scripts do JavaScript nos fluxos de trabalho de {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

O {% data variables.product.prodname_dotcom %} recomenda que você use o `GITHUB_TOKEN` interno em vez de criar um token. Se isso não for possível, armazene o token como um segredo e substitua `GITHUB_TOKEN` no exemplo abaixo pelo nome do seu segredo. Para obter mais informações sobre `GITHUB_TOKEN`, confira a "[Autenticação automática de token](/actions/security-guides/automatic-token-authentication)". Para obter mais informações sobre segredos, confira "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

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

Exemplo de script do JavaScript, com o caminho do arquivo `.github/actions-scripts/use-the-api.mjs`:

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

Se estiver se autenticando com um {% data variables.product.prodname_github_app %}, você poderá criar um token de acesso de instalação no fluxo de trabalho:

1. Armazene a ID do seu {% data variables.product.prodname_github_app %} como um segredo. No exemplo a seguir, substitua `APP_ID` pelo nome do segredo. Você pode encontrar o ID do seu aplicativo na página de configurações do seu aplicativo ou por meio da API do aplicativo. Para obter mais informações, confira "[Aplicativos](/rest/apps/apps#get-an-app)". Para obter mais informações sobre segredos, confira "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".
1. Gerar uma chave privada para o seu aplicativo. Armazene o conteúdo do arquivo resultante como um segredo. (Armazene todo o conteúdo do arquivo, incluindo `-----BEGIN RSA PRIVATE KEY-----` e `-----END RSA PRIVATE KEY-----`). No exemplo a seguir, substitua `APP_PEM` pelo nome do segredo. Para obter mais informações, confira "[Autenticação com os {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)".
1. Adicione uma etapa para gerar um token e use esse token em vez de `GITHUB_TOKEN`. Observe que esse token vai expirar após 60 minutos. Por exemplo:

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

## Introdução ao uso do cURL

### Como usar o cURL na linha de comando

{% note %}

**Observação:** se você quiser fazer solicitações de API da linha de comando, o {% data variables.product.prodname_dotcom %} recomenda que você use {% data variables.product.prodname_cli %}, o que simplifica a autenticação e as solicitações. Para obter mais informações sobre como começar a usar a API REST usando a {% data variables.product.prodname_cli %}, confira a versão da {% data variables.product.prodname_cli %} deste artigo.

{% endnote %}

1. Instale o cURL caso ainda tenha sido instalado em seu computador. Para verificar se o cURL está instalado, execute `curl --version` na linha de comando. Se a saída for informações sobre a versão do cURL, significa que ele está instalado. Se você receber uma mensagem semelhante a `command not found: curl`, será necessário baixar e instalar o cURL. Para obter mais informações, confira a [página de download do projeto cURL](https://curl.se/download.html).
1. Crie um token de acesso. Por exemplo, crie um {% data variables.product.pat_generic %} ou um token de acesso usuário para servidor do {% data variables.product.prodname_github_app %}. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)" ou "[Como identificar e autorizar usuários para Aplicativos GitHub](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)".

   {% warning %}

   **Aviso**: trate seu token de acesso como uma senha.

   {%- ifversion fpt or ghec %}

   Para manter seu token seguro, você pode armazená-lo como um segredo do {% data variables.product.prodname_codespaces %} e usar a linha de comando por meio do {% data variables.product.prodname_codespaces %}. Para obter mais informações, confira "[Como gerenciar os segredos criptografados dos seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".{% endif %}

   Você também pode usar a {% data variables.product.prodname_cli %} em vez do cURL. A {% data variables.product.prodname_cli %} cuidará da autenticação para você. Para obter mais informações, confira a versão da {% data variables.product.prodname_cli %} desta página.

   Se essas opções não forem possíveis, considere usar outro serviço, como a [CLI do 1Password](https://developer.1password.com/docs/cli/secret-references/), para armazenar seu token com segurança.

   {% endwarning %}

1. Use o comando `cURL` para fazer sua solicitação. Passe o token em um cabeçalho `Authorization`. Substitua `YOUR-TOKEN` pelo seu token.

   ```shell
   curl --request GET \
   --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
   --header "Accept: application/vnd.github+json" \
   --header "Authorization: Bearer YOUR-TOKEN"
   ```

   {% note %}

   **Observação:** {% data reusables.getting-started.bearer-vs-token %}

   {% endnote %}

### Como usar o cURL em {% data variables.product.prodname_actions %}

Você também pode usar o cURL em seus fluxo de trabalho de {% data variables.product.prodname_actions %}.

O {% data variables.product.prodname_dotcom %} recomenda que você use o `GITHUB_TOKEN` interno em vez de criar um token. Se isso não for possível, armazene o token como um segredo e substitua `GITHUB_TOKEN` no exemplo abaixo pelo nome do seu segredo. Para obter mais informações sobre `GITHUB_TOKEN`, confira a "[Autenticação automática de token](/actions/security-guides/automatic-token-authentication)". Para obter mais informações sobre segredos, confira "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

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

Se estiver se autenticando com um {% data variables.product.prodname_github_app %}, você poderá criar um token de acesso de instalação no fluxo de trabalho:

1. Armazene a ID do seu {% data variables.product.prodname_github_app %} como um segredo. No exemplo a seguir, substitua `APP_ID` pelo nome do segredo. Você pode encontrar o ID do seu aplicativo na página de configurações do seu aplicativo ou por meio da API do aplicativo. Para obter mais informações, confira "[Aplicativos](/rest/apps/apps#get-an-app)". Para obter mais informações sobre segredos, confira "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".
1. Gerar uma chave privada para o seu aplicativo. Armazene o conteúdo do arquivo resultante como um segredo. (Armazene todo o conteúdo do arquivo, incluindo `-----BEGIN RSA PRIVATE KEY-----` e `-----END RSA PRIVATE KEY-----`). No exemplo a seguir, substitua `APP_PEM` pelo nome do segredo. Para obter mais informações, confira "[Autenticação com os {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)".
1. Adicione uma etapa para gerar um token e use esse token em vez de `GITHUB_TOKEN`. Observe que esse token vai expirar após 60 minutos. Por exemplo:

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

## Próximas etapas

Para obter um guia mais detalhado, confira "[Introdução à API REST](/rest/guides/getting-started-with-the-rest-api)".
