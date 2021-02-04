---
title: Criar e testar Node.js
intro: É possível criar um fluxo de trabalho de integração contínua (CI) para criar e testar o seu projeto Node.js.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions
  - /actions/language-and-framework-guides/using-nodejs-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
topics:
  - 'CI'
  - 'Nó'
  - 'JavaScript'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introdução

Este guia mostra como criar um fluxo de trabalho de integração contínua (CI) que cria e testa o código Node.js. Se o seu teste de CI for aprovado, é possível que você deseje publicar seu código ou um pacote.

### Pré-requisitos

Recomendamos que você tenha um entendimento básico do Node.js, YAML, das opções de configuração do fluxo de trabalho e de como criar um arquivo do fluxo de trabalho. Para obter mais informações, consulte:

- "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- "[Começar com Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/)"

{% data reusables.actions.enterprise-setup-prereq %}

### Introdução com o modelo de workflow do Node.js

O {% data variables.product.prodname_dotcom %} fornece um modelo de fluxo de trabalho do Node.js que funcionará para a maioria dos projetos Node.js. Esse guia inclui exemplos de npm e Yarn que você pode usar para personalizar o modelo. Para obter mais informações, consulte o [modelo do fluxo de trabalho do Node.js](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml).

Para iniciar rapidamente, adicione o modelo ao diretório `.github/workflows` do repositório.

{% raw %}
```yaml{:copy}
name: Node.js CI

on:
  push:
    branches: [ $default-branch ]
  pull_request:
    branches: [ $default-branch ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x, 12.x, 14.x, 15.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```
{% endraw %}

{% data reusables.github-actions.example-github-runner %}

### Especificar a versão do Node.js

A maneira mais fácil de especificar uma versão do Node.js é usar a ação `setup-node` fornecida pelo {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte [`setup-node`](https://github.com/actions/setup-node/).

A ação `setup-node` considera uma versão do Node.js como uma entrada e configura essa versão no executor. A ação `setup-node` localiza uma versão específica do Node.js da cache das ferramentas em casa executor e adiciona os binários necessários ao `PATH`, que persiste no resto do trabalho. Usar a ação `setup-node` é a forma recomendada de usar o Node.js com {% data variables.product.prodname_actions %}, pois garante um comportamento consistente nos diferentes executores e nas diferentes versões do Node.js. Se você estiver usando um executor auto-hospedado, você deverá instalar o Node.js e adicioná-lo ao `PATH`.

O modelo inclui uma estratégia matriz que cria e testa seu código com quatro versões de Node.js: 10.x, 12.x, 14.x e 15.x. O "x" é um caractere curinga que corresponde à última versão menor e à versão do patch disponível para uma versão. Cada versão do Node.js especificada na matriz `node-version` cria uma tarefa que executa as mesmas etapas.

Cada trabalho pode acessar o valor definido na matriz `node-version` usando o contexto `matriz`. A ação `setup-node` usa o contexto como entrada de `node-version`. A ação `setup-node` configura cada tarefa com uma versão diferente de Node.js antes de criar e testar o código. Para obter mais informações sobre os contextos e estratégias da matriz, consulte ""[Sintaxe do fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)" e "[Contexto e sintaxe de expressão para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

{% raw %}
```yaml{:copy}
strategy:
  matrix:
    node-version: [10.x, 12.x, 14.x, 15.x]

steps:
- uses: actions/checkout@v2
- name: Use Node.js ${{ matrix.node-version }}
  uses: actions/setup-node@v1
  with:
    node-version: ${{ matrix.node-version }}
```
{% endraw %}

Como alternativa, você pode criar e fazes testes com versões exatas do Node.js.

```yaml{:copy}
strategy:
  matrix:
    node-version: [8.16.2, 10.17.0]
```

Você também pode criar e testar usando uma versão única do Node.js.

{% raw %}
```yaml{:copy}
name: Node.js CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '12.x'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```
{% endraw %}

Se você não especificar uma versão do Node.js, o {% data variables.product.prodname_dotcom %} usará a versão-padrão do Node.js do ambiente. Para obter mais informações, consulte "[Especificações para executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".

### Instalar dependências

Executores hospedados em {% data variables.product.prodname_dotcom %} têm gerenciadores de dependências npm e Yarn instalados. Você pode usar o npm e o Yarn para instalar dependências no seu fluxo de trabalho antes de criar e testar seu código. Os executores do Windows e Linux hospedados em {% data variables.product.prodname_dotcom %} também têm o Grunt, Gulp, e Bower instalado.

Ao usar executores hospedados em {% data variables.product.prodname_dotcom %}, você também poderá armazenar em cache dependências para acelerar seu fluxo de trabalho. Para obter mais informações, consulte "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Memorizar dependências para acelerar fluxos de trabalho</a>".

#### Exemplo de uso do npm

Este exemplo instala as dependências definidas no arquivo *package.json*. Para obter mais informações, consulte [`instalação do npm`](https://docs.npmjs.com/cli/install).

```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm install
```

O uso do `npm ci` instala as versões no arquivo *package-lock.json* ou *npm-shrinkwrap.json* e impede as atualizações do arquivo de bloqueio. Usar `npm ci` geralmente é mais rápido que executar a `instalação do npm`. Para obter mais informações, consulte [`npm ci`](https://docs.npmjs.com/cli/ci.html) e "[Introduzindo `npm` para criações mais rápidas e confiáveis](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)".

{% raw %}
```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm ci
```
{% endraw %}

#### Exemplo de uso do Yarn

Este exemplo instala as dependências definidas no arquivo *package.json*. Para obter mais informações, consulte [`instalação do yarn`](https://yarnpkg.com/en/docs/cli/install).

```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn
```

Como alternativa, você pode aprovar o `--frozen-lockfile` para instalar as versões no arquivo *yarn.lock* e impedir atualizações no arquivo *yarn.lock*.

```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn --frozen-lockfile
```

#### Exemplo do uso de um registro privado e de criação o arquivo .npmrc

{% data reusables.github-actions.setup-node-intro %}

Para efetuar a autenticação com seu registro privado, você precisará armazenar seu token de autenticação npm como um segredo. Por exemplo, crie um repositório secreto denominado `NPM_TOKEN`. Para obter mais informações, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

No exemplo abaixo, o segredo `NPM_TOKEN` armazena o token de autenticação npm. A ação `setup-node` configura o arquivo *.npmrc* para ler o token de autenticação npm a partir da variável de ambiente `NODE_AUTH_TOKEN`. Ao usar a ação `setup-node` para criar um arquivo *.npmrc*, você deverá definir a variável de ambiente `NODE_AUTH_TOKEN` com o segredo que contém seu token de autenticação npm.

Antes de instalar as dependências, use a ação `setup-node` para criar o arquivo *.npmrc* file. A ação tem dois parâmetros de entrada. O parâmetro `node-version` define a versão do Node.js e o parâmetro `registry-url` define o registro-padrão. Se o registro do seu pacote usar escopos, você deverá usar o parâmetro `escopo`. Para obter mais informações, consulte [`npm-scope`](https://docs.npmjs.com/misc/scope).

{% raw %}
```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    always-auth: true
    node-version: '12.x'
    registry-url: https://registry.npmjs.org
    scope: '@octocat'
- name: Install dependencies
  run: npm ci
  env:
    NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```
{% endraw %}

O exemplo acima cria um arquivo *.npmrc* com o conteúdo a seguir:

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://registry.npmjs.org/
always-auth=true
```

#### Exemplo de memorização de dependências

Ao usar executores hospedados em {% data variables.product.prodname_dotcom %}, você poderá armazenar dependências usando uma chave única e restaurar as dependências ao executar futuros fluxos de trabalho usando a ação `cache`. Para obter mais informações, consulte "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Memorizando dependências para acelerar os fluxos de trabalho</a>" e a ação [`cache`](https://github.com/marketplace/actions/cache).

{% raw %}
```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Cache Node.js modules
  uses: actions/cache@v2
  with:
    # npm cache files are stored in `~/.npm` on Linux/macOS
    path: ~/.npm
    key: ${{ runner.OS }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.OS }}-node-
      ${{ runner.OS }}-
- name: Install dependencies
  run: npm ci
```
{% endraw %}

### Criar e testar seu código

Você pode usar os mesmos comandos usados localmente para criar e testar seu código. Por exemplo, se você executar `criação da execução do npm` para executar os passos de compilação definidos no seu arquivo *package.json* e o `teste do npm` para executar seu conjunto de testes, você adicionaria esses comandos no seu arquivo de fluxo de trabalho.

```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- run: npm install
- run: npm run build --if-present
- run: npm test
```

### Empacotar dados do fluxo de trabalho como artefatos

Você pode salvar artefatos das suas etapas de criação e teste para serem visualizados após a conclusão de um trabalho. Por exemplo, é possível que você precise salvar os arquivos de registro, os despejos de núcleo, os resultados de teste ou capturas de tela. Para obter mais informações, consulte "[Dados recorrentes do fluxo de trabalho que usam artefatos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

### Publicar nos registros do pacote

Você pode configurar o seu fluxo de trabalho para publicar o seu pacote Node.js em um pacote de registro após os seus testes de CI serem aprovados. Para obter mais informações sobre a publicação no npm e em {% data variables.product.prodname_registry %}, consulte "[Publicando pacotes do Node.js](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages)".
