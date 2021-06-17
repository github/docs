---
title: Publicar pacotes do Node.js
intro: Você pode publicar pacotes do Node.js em um registro como parte do seu fluxo de trabalho de integração contínua (CI).
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages
  - /actions/language-and-framework-guides/publishing-nodejs-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Node
  - JavaScript
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introdução

Este guia mostra como criar um fluxo de trabalho que publica pacotes do Node.js em {% data variables.product.prodname_registry %} e nos registros npm após os testes de integração contínua (CI) serem aprovados. Com um único fluxo de trabalho, você pode publicar pacotes em um único registro ou em vários registros.

### Pré-requisitos

Recomendamos que você tenha um entendimento básico das opções de configuração do fluxo de trabalho e de como criar um arquivo do fluxo de trabalho. Para obter mais informações, consulte "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Para obter mais informações sobre a criação de um fluxo de trabalho de CI para seu projeto Node.js, consulte "[Usando Node.js com {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions)".

Você também pode achar útil ter um entendimento básico do seguinte:

- "[Trabalhando com o registro npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[Variáveis de ambiente](/actions/reference/environment-variables)"
- "[Segredos criptografados](/actions/reference/encrypted-secrets)"
- "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow)"

### Sobre a configuração do pacote

 Os campos `nome` e `versão` no arquivo *package.json* cria um identificador único que os registros usam para vincular seu pacote a um registro. Você pode adicionar um resumo para página de listagem do pacote ao incluir um campo `descrição` no arquivo *package.json*. Para obter mais informações, consulte "[Criando um pacote package.json](https://docs.npmjs.com/creating-a-package-json-file)" e "[Criando módulos Node.js](https://docs.npmjs.com/creating-node-js-modules)" na documentação do npm.

Quando um arquivo *.npmrc* local existe e tem um valor de `registro` especificado, o comando `publicação do npm` usa o registro configurado no arquivo *.npmrc*. {% data reusables.github-actions.setup-node-intro %}

Você pode especificar a versão do Node.js instalada no executor usando a ação `setup-node`.

Se você adicionar etapas ao seu fluxo de trabalho para configurar os campos `publishConfig` no seu arquivo *package.json*, você não precisará especificar o registry-url usando a ação de `setup-node`. No entanto, você estará limitado à publicação do pacote em um registro. Para obter mais informações, consulte "[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)" na documentação npm.

### Publicar pacotes no registro npm

Cada vez que você criar uma nova versão, você poderá acionar um fluxo de trabalho para publicar o seu pacote. O fluxo de trabalho no exemplo abaixo é executado quando o evento `versão` é acionado com o tipo `criado`. O fluxo de trabalho publica o pacote no registro npm se o teste de CI for aprovado.

Para executar operações autenticadas para o registro npm em seu fluxo de trabalho, você precisará armazenar seu token de autenticação npm como um segredo. Por exemplo, crie um repositório secreto denominado `NPM_TOKEN`. Para obter mais informações, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

Por padrão, o npm usa o campo `nome` do arquivo *package.json* para determinar o registro do npm. Ao publicar em um namespace global, você precisa incluir apenas o nome do pacote. Por exemplo, você publicaria um pacote denominado `npm-hello-world-test` em `https://www.npmjs.com/package/npm-hello-world-test`.

Se você estiver publicando um pacote que inclui um prefixo de escopo, inclua o escopo no nome do arquivo *package.json*. Por exemplo, se o prefixo de escopo do npm é octocat e o nome do pacote é hello-world, o `nome` no seu arquivo *package.json* deverá ser `@octocat/hello-world`. Se seu pacote npm usar um prefixo de escopo e for público, você deverá usar a opção `npm publish --access public`. Essa é uma opção que o npm requer para impedir que alguém publique um pacote privado de forma não intencional.

Este exemplo armazena o segredo `NPM_TOKEN` na variável de ambiente `NODE_AUTH_TOKEN`. Quando a ação `setup-node` cria um arquivo *.npmrc*, ela faz referência ao token da variável de ambiente `NODE_AUTH_TOKEN`.

{% raw %}
```yaml{:copy}
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      # Setup .npmrc file to publish to npm
      - uses: actions/setup-node@v2
        with:
          node-version: '12.x'
          registry-url: 'https://registry.npmjs.org'
      - run: npm install
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
{% endraw %}

No exemplo acima, a ação `setup-node` cria um arquivo *.npmrc* no executor com o conteúdo a seguir:

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
```

### Publicar pacotes em {% data variables.product.prodname_registry %}

Cada vez que você criar uma nova versão, você poderá acionar um fluxo de trabalho para publicar o seu pacote. O fluxo de trabalho no exemplo abaixo é executado sempre que ocorre o evento `versão` com o tipo `criado`. O fluxo de trabalho publica o pacote em {% data variables.product.prodname_registry %} se o teste de CI for aprovado.

#### Configurar o repositório de destino

Se você não fornecer a chave do `repositório` no seu arquivo *package.json*, {% data variables.product.prodname_registry %} irá publicar um pacote no repositório de {% data variables.product.prodname_dotcom %} especificado no campo `nome` do arquivo *package.json*. Por exemplo, um pacote denominado `@my-org/test` é publicado no `my-org/test` repositório de {% data variables.product.prodname_dotcom %}.

No entanto, se você fornecer a chave `repositório`, o repositório nessa chave será usado como o registro de npm de destino para {% data variables.product.prodname_registry %}. Por exemplo, publicar os resultados *package.json* abaixo em um pacote denominado `my-amazing-package` publicado no repositório `octocat/meu-repo` de {% data variables.product.prodname_dotcom %}.

```json
{
  "name": "@octocat/my-amazing-package",
  "repository": {
    "type": "git",
    "url": "https://github.com/octocat/my-other-repo.git"
  },
```

#### Efetuar a autenticação no repositório de destino

Para realizar operações autenticadas no registro do {% data variables.product.prodname_registry %} em seu fluxo de trabalho, você pode usar o `GITHUB_TOKEN`. {% data reusables.github-actions.github-token-permissions %}

Se você quiser publicar seu pacote em um repositório diferente, você deverá usar um token de acesso pessoal (PAT) que tenha permissão para escrever pacotes no repositório de destino. Para obter mais informações, consulte "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)" e "[Segredos criptografados](/actions/reference/encrypted-secrets)".

#### Exemplo de fluxo de trabalho

Este exemplo armazena o segredo `GITHUB_TOKEN` na variável de ambiente `NODE_AUTH_TOKEN`. Quando a ação `setup-node` cria um arquivo *.npmrc*, ela faz referência ao token da variável de ambiente `NODE_AUTH_TOKEN`.

```yaml{:copy}
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions: 
      contents: read
      packages: write {% endif %}
    steps:
      - uses: actions/checkout@v2
      # Setup .npmrc file to publish to GitHub Packages
      - uses: actions/setup-node@v2
        with:
          node-version: '12.x'
          registry-url: 'https://npm.pkg.github.com'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: npm install
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

A ação `setup-node` cria um arquivo *.npmrc* no executor. Ao usar a entrada do `escopo` para a ação `setup-node`, o arquivo *.npmrc* incluirá o prefixo do escopo. Por padrão, a ação `setup-node` define o escopo no arquivo *.npmrc* na conta que contém esse arquivo do fluxo de trabalho.

```ini
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://npm.pkg.github.com
always-auth=true
```

### Publicar pacotes usando o yarn

Se você usar o gerenciador de pacotes Yarn, você poderá instalar e publicar pacotes usando o Yarn.

{% raw %}
```yaml{:copy}
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      # Setup .npmrc file to publish to npm
      - uses: actions/setup-node@v2
        with:
          node-version: '12.x'
          registry-url: 'https://registry.npmjs.org'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: yarn
      - run: yarn publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
{% endraw %}

### Publicar pacotes no npm e em {% data variables.product.prodname_registry %}

{% note %}

**Nota:** Se você precisar publicar para registros que têm diferentes prefixos de escopo, você deverá modificar o arquivo *package.json* no executor para alterar o prefixo de escopo. Por exemplo, se você publicar um pacote no escopo `@mona` para o npm e para o escopo `@octocat` para {% data variables.product.prodname_registry %}, você poderá substituir o escopo `@mona` por `@octocat` no arquivo *package.json* no executor, após fazer a publicação no npm e antes de publicar em {% data variables.product.prodname_registry %}.

{% endnote %}

Você pode publicar seus pacotes no registro do npm e em {% data variables.product.prodname_registry %}, usando a ação de `setup-node` para cada registro.

Se você publicar um pacote em ambos os registros, você deverá garantir que seu prefixo de escopo no npm corresponda ao nome do usuário ou da organização do {% data variables.product.prodname_dotcom %}. Para publicar pacotes em um registro público com um prefixo de escopo, você pode usar o comando `npm publish --access public`. Para obter mais informações, consulte [`npm-scope`](https://docs.npmjs.com/misc/scope) e "[Criar e publicar pacotes públicos com escopos](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)" na documentação do npm.

Certifique-se de que seu arquivo *package.json* inclua o escopo do seu repositório {% data variables.product.prodname_dotcom %} e o registro npm. Por exemplo, se você planeja publicar um pacote no repositório `octocat/npm-hello-world-test` em {% data variables.product.prodname_dotcom %} e em https://www.npmjs. om/package/@octocat/npm-hello-world-test, o nome no arquivo do seu *package.json* seria `"name": "@octocat/npm-hello-world-test"`.

Para realizar operações autenticadas no registro do {% data variables.product.prodname_registry %} em seu fluxo de trabalho, você pode usar o `GITHUB_TOKEN`. {% data reusables.github-actions.github-token-permissions %}

Ao usar a entrada do `escopo` para a ação `setup-node`, esta cria um arquivo *.npmrc* que inclui o prefixo do escopo. Por padrão, a ação `setup-node` define o escopo no arquivo *.npmrc* para o usuário ou organização proprietário do arquivo do fluxo de trabalho.

Este fluxo de trabalho chama a ação `setup-node` duas vezes. Cada vez que a ação `setup-node` é executada, ela substitui o arquivo *.npmrc*. O arquivo *.npmrc* faz referência ao token que permite que você execute operações autenticadas com o registro do pacote a partir da variável de ambiente `NODE_AUTH_TOKEN`. O fluxo de trabalho define a variável de ambiente `NODE_AUTH_TOKEN` toda vez que o comando `publicação do npm` é executado. Primeiro com um token para publicar no npm (`NPM_TOKEN`) e, em seguida, com um token para publicar em {% data variables.product.prodname_registry %} (`GITHUB_TOKEN`).


```yaml{:copy}
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions: 
      contents: read
      packages: write {% endif %}
    steps:
      - uses: actions/checkout@v2
      # Setup .npmrc file to publish to npm
      - uses: actions/setup-node@v1
        with:
          node-version: '10.x'
          registry-url: 'https://registry.npmjs.org'
      - run: npm install
      # Publish to npm
      - run: npm publish --access public
        env:{% raw %}
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
      # Setup .npmrc file to publish to GitHub Packages
      - uses: actions/setup-node@v1
        with:
          registry-url: 'https://npm.pkg.github.com'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      # Publish to GitHub Packages
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}{% endraw %}
```
