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
Nome: Node.js CI

em: [push]

trabalhos:
  criar:

    runs-on: ubuntu-latest

    estratégia:
      matriz:
        node-version: [8.x, 10.x, 12.x]

    etapas:
    - usa: actions/checkout@v2
    - nome: Use Node.js ${{ matrix.node-version }}
      usa: actions/setup-node@v1
      com:
        node-version: ${{ matrix.node-version }}
    - executa: npm install
    - executa: npm run build --if-present
    - executa: npm test
      env:
        CI: true
```
{% endraw %}

{% data reusables.github-actions.example-github-runner %}

### Especificar a versão do Node.js

A maneira mais fácil de especificar uma versão do Node.js é usar a ação `setup-node` fornecida pelo {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte [`setup-node`](https://github.com/actions/setup-node/).

A ação `setup-node` considera uma versão do Node.js como uma entrada e configura essa versão no executor. A ação `setup-node` localiza uma versão específica do Node.js da cache das ferramentas em casa executor e adiciona os binários necessários ao `PATH`, que persiste no resto do trabalho. Usar a ação `setup-node` é a forma recomendada de usar o Node.js com {% data variables.product.prodname_actions %}, pois garante um comportamento consistente nos diferentes executores e nas diferentes versões do Node.js. Se você estiver usando um executor auto-hospedado, você deverá instalar o Node.js e adicioná-lo ao `PATH`.

O modelo inclui uma estratégia de matriz que cria e testa o seu código com três versões do Node.js: 8.x, 10.x, e 12.x. O "x" é um caractere curinga que corresponde à última versão menor e à versão do patch disponível para uma versão. Cada versão do Node.js especificada na matriz `node-version` cria uma tarefa que executa as mesmas etapas.

Cada trabalho pode acessar o valor definido na matriz `node-version` usando o contexto `matriz`. A ação `setup-node` usa o contexto como entrada de `node-version`. A ação `setup-node` configura cada tarefa com uma versão diferente de Node.js antes de criar e testar o código. Para obter mais informações sobre os contextos e estratégias da matriz, consulte ""[Sintaxe do fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)" e "[Contexto e sintaxe de expressão para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

{% raw %}
```yaml
estratégia:
  matriz:
    node-version: [8.x, 10.x, 12.x]

etapas:
- usa: actions/checkout@v2
- Nome: Use Node.js ${{ matrix.node-version }}
  usa: actions/setup-node@v1
  com:
    node-version: ${{ matrix.node-version }}
```
{% endraw %}

Como alternativa, você pode criar e fazes testes com versões exatas do Node.js.

```yaml
estratégia:
  matriz:
    node-version: [8.16.2, 10.17.0]
```

Você também pode criar e testar usando uma versão única do Node.js.

{% raw %}
```yaml
Nome: Node.js CI

em: [push]

trabalhos:
  criar:

    runs-on: ubuntu-latest

    etapas:
    - usa: actions/checkout@v2
    - Nome: Usa o Node.js
      usa: actions/setup-node@v1
      com:
        node-version: '12.x'
    - executar: npm install
    - executar: npm run build --if-present
    - executar: npm test
      env:
        CI: true
```
{% endraw %}

Se você não especificar uma versão do Node.js, o {% data variables.product.prodname_dotcom %} usará a versão-padrão do Node.js do ambiente. Para obter mais informações, consulte "[Especificações para executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".

### Instalar dependências

Executores hospedados em {% data variables.product.prodname_dotcom %} têm gerenciadores de dependências npm e Yarn instalados. Você pode usar o npm e o Yarn para instalar dependências no seu fluxo de trabalho antes de criar e testar seu código. Os executores do Windows e Linux hospedados em {% data variables.product.prodname_dotcom %} também têm o Grunt, Gulp, e Bower instalado.

Você também pode memorizar as dependências para acelerar seu fluxo de trabalho. Para obter mais informações, consulte "[Memorizando dependências para acelerar seu fluxo de trabalho](/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)".

#### Exemplo de uso do npm

Este exemplo instala as dependências definidas no arquivo *package.json*. Para obter mais informações, consulte [`instalação do npm`](https://docs.npmjs.com/cli/install).

```yaml
etapas:
- usa: actions/checkout@v2
- nome: Use Node.js
  usa: actions/setup-node@v1
  com:
    node-version: '12.x'
- nome: Instalar dependências
  executar: npm install
```

O uso do `npm ci` instala as versões no arquivo *package-lock.json* ou *npm-shrinkwrap.json* e impede as atualizações do arquivo de bloqueio. Usar `npm ci` geralmente é mais rápido que executar a `instalação do npm`. Para obter mais informações, consulte [`npm ci`](https://docs.npmjs.com/cli/ci.html) e "[Introduzindo `npm` para criações mais rápidas e confiáveis](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)".

{% raw %}
```yaml
etapas:
- usa: actions/checkout@v2
- nome: Use Node.js
  usa: actions/setup-node@v1
  com:
    node-version: '12.x'
- nome: Instalar dependências
  executar: npm ci
```
{% endraw %}

#### Exemplo de uso do Yarn

Este exemplo instala as dependências definidas no arquivo *package.json*. Para obter mais informações, consulte [`instalação do yarn`](https://yarnpkg.com/en/docs/cli/install).

```yaml
etapas:
- usa: actions/checkout@v2
- nome: Use Node.js
  usa: actions/setup-node@v1
  com:
    node-version: '12.x'
- nome: Instalar dependências
  executar: yarn
```

Como alternativa, você pode aprovar o `--frozen-lockfile` para instalar as versões no arquivo *yarn.lock* e impedir atualizações no arquivo *yarn.lock*.

```yaml
etapas:
- usa: actions/checkout@v2
- nome: Use Node.js
  usa: actions/setup-node@v1
  com:
    node-version: '12.x'
- nome: Instalar dependências
  executar: yarn --frozen-lockfile
```

#### Exemplo do uso de um registro privado e de criação o arquivo .npmrc

{% data reusables.github-actions.setup-node-intro %}

Para fazer a autenticação no seu registro privado, você deverá armazenar seu token de autenticação npm como um segredo nas configurações do seu repositório. Por exemplo, crie um segredo denominado `NPM_TOKEN`. Para obter mais informações, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

No exemplo abaixo, o segredo `NPM_TOKEN` armazena o token de autenticação npm. A ação `setup-node` configura o arquivo *.npmrc* para ler o token de autenticação npm a partir da variável de ambiente `NODE_AUTH_TOKEN`. Ao usar a ação `setup-node` para criar um arquivo *.npmrc*, você deverá definir a variável de ambiente `NPM_AUTH_TOKEN` com o segredo que contém seu token de autenticação npm.

Antes de instalar as dependências, use a ação `setup-node` para criar o arquivo *.npmrc* file. A ação tem dois parâmetros de entrada. O parâmetro `node-version` define a versão do Node.js e o parâmetro `registry-url` define o registro-padrão. Se o registro do seu pacote usar escopos, você deverá usar o parâmetro `escopo`. Para obter mais informações, consulte [`npm-scope`](https://docs.npmjs.com/misc/scope).

{% raw %}
```yaml
etapas:
- usa: actions/checkout@v2
- nome: Use Node.js
  usa: actions/setup-node@v1
  com:
    always-auth: true
    node-version: '12.x'
    registry-url: https://registry.npmjs.org
    escopo: '@octocat'
- nome: Instalar dependências
  executar: npm ci
  env:
    NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```
{% endraw %}

O exemplo acima cria um arquivo *.npmrc* com o conteúdo a seguir:

```
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://registry.npmjs.org/
always-auth=true
```

#### Exemplo de memorização de dependências

Você pode memorizar dependências usando uma chave única e restaurar as dependências ao executar fluxos de trabalho futuros usando a ação `cache`. Para obter mais informações, consulte "[Memorizando dependências para acelerar os fluxos de trabalho](/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)" e a ação [`cache`](https://github.com/marketplace/actions/cache).

{% raw %}
```yaml
etapas:
- usa: actions/checkout@v2
- nome: Use Node.js
  usa: actions/setup-node@v1
  com:
    node-version: '12.x'
- nome: Cache Node.js modules
  usa: actions/cache@v2
  com:
    # Os arquivos da cache do npm estão armazenados em `~/.npm` no Linux/macOS
    caminho: ~/.npm 
    chave: ${{ runner.OS }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.OS }}-node-
      ${{ runner.OS }}-
- nome: Instalar dependências
  executar: npm ci
```
{% endraw %}

### Criar e testar seu código

Você pode usar os mesmos comandos usados localmente para criar e testar seu código. Por exemplo, se você executar `criação da execução do npm` para executar os passos de compilação definidos no seu arquivo *package.json* e o `teste do npm` para executar seu conjunto de testes, você adicionaria esses comandos no seu arquivo de fluxo de trabalho.

```yaml
etapas:
- usa: actions/checkout@v2
- nome: Use Node.js
  usa: actions/setup-node@v1
  com:
    node-version: '12.x'
- executar: npm install
- executar: npm run build --if-present
- executar: npm test
```

### Empacotar dados do fluxo de trabalho como artefatos

Você pode salvar artefatos das suas etapas de criação e teste para serem visualizados após a conclusão de um trabalho. Por exemplo, é possível que você precise salvar os arquivos de registro, os despejos de núcleo, os resultados de teste ou capturas de tela. Para obter mais informações, consulte "[Dados recorrentes do fluxo de trabalho que usam artefatos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

### Publicar nos registros do pacote

Você pode configurar o seu fluxo de trabalho para publicar o seu pacote Node.js em um pacote de registro após os seus testes de CI serem aprovados. Para obter mais informações sobre a publicação no npm e em {% data variables.product.prodname_registry %}, consulte "[Publicando pacotes do Node.js](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages)".
