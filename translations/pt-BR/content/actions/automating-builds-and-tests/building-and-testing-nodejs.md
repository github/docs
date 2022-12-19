---
title: Criar e testar Node.js
intro: É possível criar um fluxo de trabalho de integração contínua (CI) para criar e testar o seu projeto Node.js.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions
  - /actions/language-and-framework-guides/using-nodejs-with-github-actions
  - /actions/guides/building-and-testing-nodejs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Node
  - JavaScript
shortTitle: Build & test Node.js
ms.openlocfilehash: 25e44f1454387a84dd198ea9998d1ebc2f94cfe7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179020'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia mostra como criar um fluxo de trabalho de integração contínua (CI) que cria e testa o código Node.js. Se o seu teste de CI for aprovado, é possível que você deseje publicar seu código ou um pacote.

## Pré-requisitos

Recomendamos que você tenha um entendimento básico do Node.js, YAML, das opções de configuração do fluxo de trabalho e de como criar um arquivo do fluxo de trabalho. Para obter mais informações, consulte:

- "[Aprenda a usar o {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- "[Introdução ao Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/)"

{% data reusables.actions.enterprise-setup-prereq %}

## Usando o fluxo de trabalho inicial do Node.js

{% data variables.product.prodname_dotcom %} fornece um fluxo de trabalho inicial do Node.js que funcionará para a maioria dos projetos do Node.js. Esse guia inclui exemplos de npm e Yarn que você pode usar para personalizar o fluxo de trabalho inicial. Para obter mais informações, confira o [fluxo de trabalho inicial do Node.js](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml).

Para experimentar uma introdução rápida, adicione o fluxo de trabalho inicial ao diretório `.github/workflows` do repositório. O fluxo de trabalho mostrado abaixo pressupõe que o branch padrão do repositório seja `main`.

```yaml{:copy}
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x, 12.x, 14.x, 15.x]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```

{% data reusables.actions.example-github-runner %}

## Especificar a versão do Node.js

A maneira mais fácil de especificar uma versão do Node.js é usando a ação `setup-node` fornecida pelo {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira [`setup-node`](https://github.com/actions/setup-node/).

A ação `setup-node` usa uma versão do Node.js como entrada e configura essa versão no executor. A ação `setup-node` localiza uma versão específica do Node.js no cache de ferramentas em cada executor e adiciona os binários necessários a `PATH`, que é persistente no restante do trabalho. Usar a ação `setup-node` é a maneira recomendada de usar o Node.js com o {% data variables.product.prodname_actions %}, porque garante um comportamento consistente entre diferentes executores e diferentes versões do Node.js. Se você estiver usando um executor auto-hospedado, precisará instalar o Node.js e adicioná-lo a `PATH`.

O fluxo de trabalho inicial inclui uma estratégia de matriz que compila e testa seu código com quatro versões do Node.js: 10.x, 12.x, 14.x e 15.x. O "x" é um caractere curinga que corresponde à última versão menor e à versão do patch disponível para uma versão. Cada versão do Node.js especificada na matriz `node-version` cria um trabalho que executa as mesmas etapas.

Cada trabalho pode acessar o valor definido na matriz `node-version` da matriz usando o contexto `matrix`. A ação `setup-node` usa o contexto como a entrada de `node-version`. A ação `setup-node` configura cada trabalho com uma versão diferente do Node.js antes de compilar e testar o código. Para obter mais informações sobre estratégias e contextos de matriz, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)" e "[Contextos](/actions/learn-github-actions/contexts)".

```yaml{:copy}
strategy:
  matrix:
    node-version: [10.x, 12.x, 14.x, 15.x]

steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
```

Como alternativa, você pode criar e fazes testes com versões exatas do Node.js.

```yaml{:copy}
strategy:
  matrix:
    node-version: [8.16.2, 10.17.0]
```

Você também pode criar e testar usando uma versão única do Node.js.

```yaml{:copy}
name: Node.js CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '12.x'
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```

Se você não especificar uma versão do Node.js, o {% data variables.product.prodname_dotcom %} usará a versão-padrão do Node.js do ambiente.
{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} Para obter mais informações, confira "[Especificações para executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Instalar dependências

Executores hospedados em {% data variables.product.prodname_dotcom %} têm gerenciadores de dependências npm e Yarn instalados. Você pode usar o npm e o Yarn para instalar dependências no seu fluxo de trabalho antes de criar e testar seu código. Os executores do Windows e Linux hospedados em {% data variables.product.prodname_dotcom %} também têm o Grunt, Gulp, e Bower instalado.

{% ifversion actions-caching %}Você também pode armazenar as dependências em cache para acelerar o fluxo de trabalho. Para obter mais informações, confira "[Como armazenar dependências em cache para acelerar os fluxos de trabalho](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".{% endif %}

### Exemplo de uso do npm

Este exemplo instala as dependências definidas no arquivo *package.json*. Para obter mais informações, confira [`npm install`](https://docs.npmjs.com/cli/install).

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm install
```

O uso de `npm ci` instala as versões no arquivo *package-lock.json* ou *npm-shrinkwrap.json* e impede atualizações no arquivo de bloqueio. O uso de `npm ci` geralmente é mais rápido do que a execução de `npm install`. Para obter mais informações, confira [`npm ci`](https://docs.npmjs.com/cli/ci.html) e "[Apresentação do `npm ci` para builds mais rápidos e confiáveis](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)".

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm ci
```

### Exemplo de uso do Yarn

Este exemplo instala as dependências definidas no arquivo *package.json*. Para obter mais informações, confira [`yarn install`](https://yarnpkg.com/en/docs/cli/install).

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn
```

Como alternativa, você pode transmitir `--frozen-lockfile` para instalar as versões no arquivo `yarn.lock` e impedir atualizações no arquivo `yarn.lock`.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn --frozen-lockfile
```

### Exemplo do uso de um registro privado e de criação o arquivo .npmrc

{% data reusables.actions.setup-node-intro %}

Para efetuar a autenticação com seu registro privado, você precisará armazenar seu token de autenticação npm como um segredo. Por exemplo, crie um segredo do repositório chamado `NPM_TOKEN`. Para obter mais informações, confira "[Como criar e usar segredos criptografados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

No exemplo abaixo, o segredo `NPM_TOKEN` armazena o token de autenticação do npm. A ação `setup-node` configura o arquivo *.npmrc* para ler o token de autenticação do npm da variável de ambiente `NODE_AUTH_TOKEN`. Ao usar a ação `setup-node` para criar um arquivo *.npmrc*, você precisa definir a variável de ambiente `NODE_AUTH_TOKEN` com o segredo que contém o token de autenticação do npm.

Antes de instalar as dependências, use a ação `setup-node` para criar o arquivo *.npmrc*. A ação tem dois parâmetros de entrada. O parâmetro `node-version` define a versão do Node.js, e o parâmetro `registry-url` define o registro padrão. Se o registro de pacote usa escopos, é preciso usar o parâmetro `scope`. Para obter mais informações, confira [`npm-scope`](https://docs.npmjs.com/misc/scope).

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    always-auth: true
    node-version: '12.x'
    registry-url: https://registry.npmjs.org
    scope: '@octocat'
- name: Install dependencies
  run: npm ci
  env:
    NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```

O exemplo acima cria um arquivo *.npmrc* com o seguinte conteúdo:

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://registry.npmjs.org/
always-auth=true
```

{% ifversion actions-caching %}

### Exemplo de memorização de dependências

Você pode armazenar em cache e restaurar as dependências usando a ação [`setup-node`](https://github.com/actions/setup-node).

O exemplo a seguir armazena dependências do npm.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '14'
    cache: 'npm'
- run: npm install
- run: npm test
```

O exemplo a seguir armazena dependências para o Yarn.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '14'
    cache: 'yarn'
- run: yarn
- run: yarn test
```

O exemplo a seguir armazena dependências para pnpm (v6.10+).

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

# NOTE: pnpm caching support requires pnpm version >= 6.10.0

steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: pnpm/action-setup@646cdf48217256a3d0b80361c5a50727664284f2
  with:
    version: 6.10.0
- uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '14'
    cache: 'pnpm'
- run: pnpm install
- run: pnpm test
```

Se você tiver um requisito personalizado ou precisar ter controles mais refinados para o cache, use a [ação `cache`](https://github.com/marketplace/actions/cache). Para obter mais informações, confira "[Como armazenar dependências em cache para acelerar os fluxos de trabalho](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".

{% endif %}

## Criar e testar seu código

Você pode usar os mesmos comandos usados localmente para criar e testar seu código. Por exemplo, se você executar `npm run build` para executar as etapas de build definidas no arquivo *package.json* e `npm test` para executar o conjunto de testes, adicione esses comandos ao arquivo de fluxo de trabalho.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- run: npm install
- run: npm run build --if-present
- run: npm test
```

## Empacotar dados do fluxo de trabalho como artefatos

Você pode salvar artefatos das suas etapas de criação e teste para serem visualizados após a conclusão de um trabalho. Por exemplo, é possível que você precise salvar os arquivos de registro, os despejos de núcleo, os resultados de teste ou capturas de tela. Para obter mais informações, confira "[Como persistir dados de fluxo de trabalho usando artefatos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

## Publicar nos registros do pacote

Você pode configurar o seu fluxo de trabalho para publicar o seu pacote Node.js em um pacote de registro após os seus testes de CI serem aprovados. Para obter mais informações sobre a publicação no npm e no {% data variables.product.prodname_registry %}, confira "[Como publicar pacotes do Node.js](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages)".
