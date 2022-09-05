---
title: Início rápido para a API REST do GitHub
intro: 'Saiba como começar com a API REST de {% data variables.product.prodname_dotcom %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: QuickStart
topics:
  - API
redirect_from:
  - /guides/getting-started
  - /v3/guides/getting-started
miniTocMaxHeadingLevel: 3
---

Esse artigo descreve como começar rapidamente com a API REST de {% data variables.product.prodname_dotcom %} usando {% data variables.product.prodname_cli %}, JavaScript ou cURL. Para um guia mais detalhado, consulte "[Primeiros passos com a API REST](/rest/guides/getting-started-with-the-rest-api)."

{% cli %}

## Primeiros passos para usar o {% data variables.product.prodname_cli %}

### Usando {% data variables.product.prodname_cli %} na linha de comando

{% data variables.product.prodname_cli %} é a maneira mais fácil de usar a API REST de {% data variables.product.prodname_dotcom %} a partir da linha de comando.

1. Instale o {% data variables.product.prodname_cli %} se você ainda não o instalou. Para obter instruções de instalação, consulte o [repositório de {% data variables.product.prodname_cli %}](https://github.com/cli/cli#installation).
1. Use o subcomando `auth login` para efetuar a autenticação em {% data variables.product.prodname_cli %}. Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_cli %} `login de autenticação`](https://cli.github.com/manual/gh_auth_login).

   ```shell
   gh auth login
   ```

1. Use o subcomando `api` para fazer sua solicitação de API. Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_cli %} `api`](https://cli.github.com/manual/gh_api).

   ```shell
   gh api repos/octocat/Spoon-Knife/issues
   ```

### Usando {% data variables.product.prodname_cli %} em {% data variables.product.prodname_actions %}

Você também pode usar {% data variables.product.prodname_cli %} nos seus fluxos de trabalho de {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Usando o CLI do GitHub nos fluxos de trabalho](/actions/using-workflows/using-github-cli-in-workflows)".

Em vez de usar o comando de autenticação `gh auth login`, passe um token de acesso como uma variável de ambiente denominada `GH_TOKEN`. {% data variables.product.prodname_dotcom %} recomenda que você use o `GITHUB_TOKEN` incorporado em vez de criar um token. Se isso não for possível, armazene seu token como um segredo e substitua `GITHUB_TOKEN` no exemplo abaixo pelo nome do seu segredo. Para obter mais informações sobre o `GITHUB_TOKEN`, consulte "[Autenticação automática de token](/actions/security-guides/automatic-token-authentication)." Para obter mais informações sobre segredos, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

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

Se você estiver efetuando a autenticação com um {% data variables.product.prodname_github_app %}, você poderá criar um token de acesso de instalação dentro do seu fluxo de trabalho:

1. Armazene a identificação do ID do seu {% data variables.product.prodname_github_app %} como segredo. No exemplo a seguir, substitua `APP_ID` pelo nome do segredo. Você pode encontrar o ID do seu aplicativo na página de configurações do seu aplicativo ou por meio da API do aplicativo. Para obter mais informações, consulte "[Aplicativos](/rest/apps/apps#get-an-app)". Para obter mais informações sobre segredos, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".
1. Gerar uma chave privada para o seu aplicativo. Armazena o conteúdo do arquivo resultante como um segredo. (Armazene todo o conteúdo do arquivo, incluindo `-----BEGIN RSA PRIVATE KEY-----` e `-----END RSA PRIVATE KEY-----`.) No exemplo a seguir, substitua `APP_PEM` pelo nome do segredo. Para obter mais informações, consulte "[Efetuando a autenticação com o {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)".
1. Adicione um passo para gerar um token e use esse token em vez de `GITHUB_TOKEN`. Observe que este token irá vencer após 60 minutos. Por exemplo:

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

## Primeiros passos com o JavaScript

Você pode usar Octokit.js para interagir com a API REST de {% data variables.product.prodname_dotcom %} nos seus scripts do JavaScript. Para obter mais informações, consulte [o README do Octokit.js](https://github.com/octokit/octokit.js/#readme).

### Usando o Octokit.js

1. Crie um token de acesso. Por exemplo, crie um token de acesso pessoal (PAT) ou um token de acesso do usuário para servidor de {% data variables.product.prodname_github_app %}. Para obter mais informações, consulte "[" Criando um token de acesso pessoal](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)" ou "[Identificando e autorizando usuários dos aplicativos GitHub](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)".

   {% warning %}

   **Aviso**: Trate seu token de acesso como uma senha.

   Para manter seu token seguro, você pode armazenar o seu token como um segredo e executar o seu script através de {% data variables.product.prodname_actions %}. Para obter mais informações, consulte a seção "[usando Octokit.js em {% data variables.product.prodname_actions %}](#using-octokitjs-in-github-actions)".

   {%- ifversion fpt or ghec %}

   Você também pode armazenar seu token como um segredo de {% data variables.product.prodname_codespaces %} e executar seu script em {% data variables.product.prodname_codespaces %}. Para obter mais informações, consulte "[Gerenciar segredos criptografados para seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".{% endif %}

   Se essas opções não forem possíveis, considere usar outro serviço como [o 1Password CLI](https://developer.1password.com/docs/cli/secret-references/) para armazenar seu token de forma segura.

   {% endwarning %}

1. Instale o ``octokit. Por exemplo, `npm install octokit`. Para outras formas de instalar ou carregar o `octokit`, consulte o [README do Octokit.js](https://github.com/octokit/octokit.js/#readme).
1. Importar `octokit` para o seu script. Por exemplo, `import { Octokit } from "octokit";`. Para outras maneiras de importar `octokit`, consulte [o README do Octokit.js](https://github.com/octokit/octokit.js/#readme).
1. Crie uma instância do `Octokit` com seu token. Substitua `YOUR-TOKEN` pelo seu token.

   ```javascript
   const octokit = new Octokit({
     auth: 'YOUR-TOKEN'
   });
   ```

1. Use `octokit.request` para executar sua solicitação. Envie o método HTTP e o caminho como o primeiro argumento. Especifique todos os parâmetros de caminho, consulta e texto em um objeto como o segundo argumento. Por exemplo, na solicitação a seguir, o método HTTP é `GET`, o caminho é `/repos/{owner}/{repo}/issues` e os parâmetros são `owner: "octocat"` e `repo: "Spoon-Knife"`.

   ```javascript
   await octokit.request("GET /repos/{owner}/{repo}/issues", {
     owner: "octocat",
     repo: "Spoon-Knife",
   });
   ```

### Usando o Octokit.js em {% data variables.product.prodname_actions %}

Você também pode executar seus scripts JavaScript nos seus fluxos de trabalho de {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Sintaxe do fluxo de trabalho para o GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

{% data variables.product.prodname_dotcom %} recomenda que você use o `GITHUB_TOKEN` incorporado em vez de criar um token. Se isso não for possível, armazene seu token como um segredo e substitua `GITHUB_TOKEN` no exemplo abaixo pelo nome do seu segredo. Para obter mais informações sobre o `GITHUB_TOKEN`, consulte "[Autenticação automática de token](/actions/security-guides/automatic-token-authentication)." Para obter mais informações sobre segredos, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

O seguinte exemplo de fluxo de trabalho:

1. Faz check-out do conteúdo do repositório
1. Configura o Node.js
1. Instala `octokit`
1. Armazena o valor de `GITHUB_TOKEN` como uma variável de ambiente denominada `TOKEN` e executa `.github/actions-scripts/use-the-api.mjs`, que pode acessar essa variável de ambiente como `process.env.TOKEN`

Exemplo de fluxo de trabalho:

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

Se você estiver efetuando a autenticação com um {% data variables.product.prodname_github_app %}, você poderá criar um token de acesso de instalação dentro do seu fluxo de trabalho:

1. Armazene a identificação do ID do seu {% data variables.product.prodname_github_app %} como segredo. No exemplo a seguir, substitua `APP_ID` pelo nome do segredo. Você pode encontrar o ID do seu aplicativo na página de configurações do seu aplicativo ou por meio da API do aplicativo. Para obter mais informações, consulte "[Aplicativos](/rest/apps/apps#get-an-app)". Para obter mais informações sobre segredos, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".
1. Gerar uma chave privada para o seu aplicativo. Armazena o conteúdo do arquivo resultante como um segredo. (Armazene todo o conteúdo do arquivo, incluindo `-----BEGIN RSA PRIVATE KEY-----` e `-----END RSA PRIVATE KEY-----`.) No exemplo a seguir, substitua `APP_PEM` pelo nome do segredo. Para obter mais informações, consulte "[Efetuando a autenticação com o {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)".
1. Adicione um passo para gerar um token e use esse token em vez de `GITHUB_TOKEN`. Observe que este token irá vencer após 60 minutos. Por exemplo:

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

## Primeiros passos com o cURL

### Usando o cURL na linha de comando

{% note %}

**Observação:** Se você quiser fazer solicitações da API da linha de comando de {% data variables.product.prodname_dotcom %} recomenda que você use {% data variables.product.prodname_cli %}, o que simplifica a autenticação e os pedidos. Para obter mais informações sobre como dar os primeiros passos com a API REST usando {% data variables.product.prodname_cli %}, consulte a versão de {% data variables.product.prodname_cli %} deste artigo.

{% endnote %}

1. Instale o cURL se ele ainda não estiver instalado no seu computador. Para verificar se o cURL está instalado, execute `curl --version` na linha de comando. Se a saída for uma informação sobre a versão do cURL, significa que o cURL está instalado. Se você receber uma mensagem semelhante a `command not found: curl`, você deverá fazer o download do cURL. Para obter mais informações, consulte [a página de download do projeto do cURL](https://curl.se/download.html).
1. Crie um token de acesso. Por exemplo, crie um token de acesso pessoal (PAT) ou um token de acesso do usuário para servidor de {% data variables.product.prodname_github_app %}. Para obter mais informações, consulte "[" Criando um token de acesso pessoal](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)" ou "[Identificando e autorizando usuários dos aplicativos GitHub](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)".

   {% warning %}

   **Aviso**: Trate seu token de acesso como uma senha.

   {%- ifversion fpt or ghec %}

   Para manter o seu token seguro, você pode armazenar o seu token como um segredo de {% data variables.product.prodname_codespaces %} e usar a linha de comando por meio de {% data variables.product.prodname_codespaces %}. Para obter mais informações, consulte "[Gerenciar segredos criptografados para seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".{% endif %}

   Você também pode usar {% data variables.product.prodname_cli %} ao invés do cURL. O {% data variables.product.prodname_cli %} cuidará da autenticação para você. Para obter mais informações, consulte a versão de {% data variables.product.prodname_cli %} desta página.

   Se essas opções não forem possíveis, considere usar outro serviço como [o 1Password CLI](https://developer.1password.com/docs/cli/secret-references/) para armazenar seu token de forma segura.

   {% endwarning %}

1. Use o comando `cURL` para fazer sua solicitação. Passe seu token em um cabeçalho de `autorização`. Substitua `YOUR-TOKEN` pelo seu token.

   ```shell
   curl --request GET \
   --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
   --header "Accept: application/vnd.github.v3+json" \
   --header "Authorization: Bearer <em>YOUR-TOKEN</em>"
   ```

   {% note %}

   **Observação:** {% data reusables.getting-started.bearer-vs-token %}

   {% endnote %}

### Usando o cURL em {% data variables.product.prodname_actions %}

Você também pode usar o cURL em seus fluxos de trabalho de {% data variables.product.prodname_actions %}.

{% data variables.product.prodname_dotcom %} recomenda que você use o `GITHUB_TOKEN` incorporado em vez de criar um token. Se isso não for possível, armazene seu token como um segredo e substitua `GITHUB_TOKEN` no exemplo abaixo pelo nome do seu segredo. Para obter mais informações sobre o `GITHUB_TOKEN`, consulte "[Autenticação automática de token](/actions/security-guides/automatic-token-authentication)." Para obter mais informações sobre segredos, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

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

Se você estiver efetuando a autenticação com um {% data variables.product.prodname_github_app %}, você poderá criar um token de acesso de instalação dentro do seu fluxo de trabalho:

1. Armazene a identificação do ID do seu {% data variables.product.prodname_github_app %} como segredo. No exemplo a seguir, substitua `APP_ID` pelo nome do segredo. Você pode encontrar o ID do seu aplicativo na página de configurações do seu aplicativo ou por meio da API do aplicativo. Para obter mais informações, consulte "[Aplicativos](/rest/apps/apps#get-an-app)". Para obter mais informações sobre segredos, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".
1. Gerar uma chave privada para o seu aplicativo. Armazena o conteúdo do arquivo resultante como um segredo. (Armazene todo o conteúdo do arquivo, incluindo `-----BEGIN RSA PRIVATE KEY-----` e `-----END RSA PRIVATE KEY-----`.) No exemplo a seguir, substitua `APP_PEM` pelo nome do segredo. Para obter mais informações, consulte "[Efetuando a autenticação com o {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)".
1. Adicione um passo para gerar um token e use esse token em vez de `GITHUB_TOKEN`. Observe que este token irá vencer após 60 minutos. Por exemplo:

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

## Próximas etapas

Para um guia mais detalhado, consulte "[Primeiros passos com a API REST](/rest/guides/getting-started-with-the-rest-api)."
