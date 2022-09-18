---
title: Migrar do CircleCI para o GitHub Actions
intro: 'O GitHub Actions e o CircleCI compartilham várias semelhanças em termos de configuração, o que torna a migração para o GitHub Actions relativamente fácil.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-circleci-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CircleCI
  - Migration
  - CI
  - CD
shortTitle: Migrate from CircleCI
ms.openlocfilehash: d3f7a527f21588ec2bd60e04639a861c35b12b7f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147518965'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

O CircleCI e {% data variables.product.prodname_actions %} permitem criar fluxos de trabalho que criam, testam, publicam, lançam e implementam código automaticamente. O CircleCI e o {% data variables.product.prodname_actions %} compartilham algumas semelhanças em termos de configuração do fluxo de trabalho:

- Os arquivos de configuração do fluxo de trabalho são gravados no YAML e armazenados no repositório.
- Os fluxos de trabalho incluem um ou mais trabalhos.
- Os trabalhos incluem uma ou mais etapas ou comandos individuais.
- É possível reutilizar e compartilhar novamente etapas ou tarefas com a comunidade.

Para obter mais informações, confira "[Conceitos básicos do {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)".

## Principais diferenças

Ao fazer a migração do CircleCI, considere as seguintes diferenças:

- O paralelismo do teste automático do CircleCI agrupa automaticamente os testes de acordo com regras especificadas pelo usuário ou com informações históricas de temporização. Esta funcionalidade não foi criada em {% data variables.product.prodname_actions %}.
- As ações que são executadas em contêineres Docker são sensíveis a problemas de permissões, uma vez que os contêineres têm um mapeamento diferente de usuários. Você pode evitar muitos desses problemas não usando a instrução `USER` no *Dockerfile*. {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %} Para obter mais informações sobre o sistema de arquivos do Docker em executores hospedados no {% data variables.product.product_name %}, confira "[Sobre executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)".
{% endif %}

## Migrar fluxos de trabalhos e trabalhos

O CircleCI define `workflows` no arquivo *config.yml*, que permite configurar mais de um fluxo de trabalho. O {% data variables.product.product_name %} exige um arquivo de fluxo de trabalho por fluxo de trabalho e, consequentemente, não exige que você declare os `workflows`. Será necessário criar um arquivo de fluxo de trabalho para cada fluxo de trabalho configurado em *config.yml*.

Tanto o CircleCI quanto o {% data variables.product.prodname_actions %} configuram `jobs` no arquivo de configuração usando uma sintaxe similar. Se você configurar qualquer dependência entre trabalhos usando `requires` no seu fluxo de trabalho do CircleCI, poderá usar a sintaxe `needs` equivalente do {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)".

## Migrar orbes para ações

Tanto o CircleCI quanto o {% data variables.product.prodname_actions %} fornecem um mecanismo para reutilizar e compartilhar tarefas em um fluxo de trabalho. O CircleCI usa um conceito chamado orbs, escrito em YAML, para fornecer tarefas que as pessoas podem reutilizar em um fluxo de trabalho. O {% data variables.product.prodname_actions %} tem componentes potentes, reutilizáveis e flexíveis denominados ações, que você cria com arquivos JavaScript ou imagens Docker. Você pode criar ações gravando códigos personalizados que interajam com o seu repositório da maneira que você quiser, inclusive fazendo integrações com as APIs do {% data variables.product.product_name %} e qualquer API de terceiros disponível publicamente. Por exemplo, uma ação pode publicar módulos npm, enviar alertas de SMS quando problemas urgentes surgirem ou implantar o código pronto para produção. Para obter mais informações, confira "[Como criar ações](/actions/creating-actions)".

O CircleCI pode reutilizar partes dos fluxos de trabalho com âncoras e aliases YAML. O {% data variables.product.prodname_actions %} é compatível com a necessidade mais comum de reutilização usando matrizes. Para obter mais informações sobre matrizes, confira "[Usando uma matriz em seus trabalhos](/actions/using-jobs/using-a-matrix-for-your-jobs)".

## Usar imagens do Docker


Tanto o CircleCI quanto o {% data variables.product.prodname_actions %} suportam executar etapas dentro de uma imagem do Docker.

O CircleCI fornece um conjunto de imagens pré-construídas com dependências comuns. Essas imagens têm o `USER` definido como `circleci`, o que faz com que as permissões entrem em conflito com o {% data variables.product.prodname_actions %}.

Recomendamos que você se afaste das imagens pré-criadas do CircleCI, ao migrar para {% data variables.product.prodname_actions %}. Em muitos casos, você pode usar ações para instalar as dependências adicionais de que você precisa.

{% ifversion ghae %} Para obter mais informações sobre o sistema de arquivos do Docker, confira "[Sistema de arquivos de contêiner do Docker](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)".

{% data reusables.actions.self-hosted-runners-software %} {% else %} Para obter mais informações sobre o sistema de arquivos Docker, confira "[Sobre executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)."

Para obter mais informações sobre as ferramentas e os pacotes disponíveis em imagens do executor hospedadas no {% data variables.product.prodname_dotcom %}, confira "[Especificações para executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Usar variáveis e segredos

O CircleCI e o {% data variables.product.prodname_actions %} suportam configurações das variáveis de ambiente no arquivo de configuração e criação de segredos usando o CircleCI ou a interface de usuário do {% data variables.product.product_name %}.

Para obter mais informações, confira "[Como usar variáveis de ambiente](/actions/configuring-and-managing-workflows/using-environment-variables)" e "[Como criar e usar segredos criptografados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".

## Cache

O CircleCI e o {% data variables.product.prodname_actions %} fornecem um método para armazenar arquivos de cache no arquivo de configuração manualmente.

{% ifversion actions-caching %}

Abaixo, há um exemplo da sintaxe para cada sistema.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- restore_cache:
    keys:
      - v1-npm-deps-{{ checksum "package-lock.json" }}
      - v1-npm-deps-
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- name: Cache node modules
  uses: {% data reusables.actions.action-cache %}
  with:
    path: ~/.npm
    key: {% raw %}v1-npm-deps-${{ hashFiles('**/package-lock.json') }}{% endraw %}
    restore-keys: v1-npm-deps-
```

</td>
</tr>
</table>

{% else %}

{% data reusables.actions.caching-availability %}

{% endif %}

{% data variables.product.prodname_actions %} não tem o equivalente ao Docker Layer Caching (DLC) do CircleCI.

## Dados persistentes entre trabalhos

Tanto a CircleCI quanto a {% data variables.product.prodname_actions %} fornecem mecanismos para persistir dados entre trabalhos.

Abaixo está um exemplo no CircleCI e na sintaxe de configuração do {% data variables.product.prodname_actions %}.

<table>
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- persist_to_workspace:
    root: workspace
    paths:
      - math-homework.txt

...

- attach_workspace:   at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- name: Upload math result for job 1
  uses: {% data reusables.actions.action-upload-artifact %}
  with:
    name: homework
    path: math-homework.txt

...

- name: Download math result for job 1
  uses: {% data reusables.actions.action-download-artifact %}
  with:
    name: homework
```

</td>
</tr>
</table>

Para obter mais informações, confira "[Como persistir dados de fluxo de trabalho usando artefatos](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)".

## Usar bancos de dados e contêineres de serviço

Ambos os sistemas permitem que você inclua contêineres adicionais para bases de dados, memorização ou outras dependências.

No CircleCI, a primeira imagem listada no *config.yaml* é a imagem principal primária usada para executar comandos. O {% data variables.product.prodname_actions %} usa seções explícitas: use `container` para o contêiner primário e liste os contêineres adicionais em `services`.

Abaixo está um exemplo no CircleCI e na sintaxe de configuração do {% data variables.product.prodname_actions %}.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

jobs:

  ruby-26: docker: - image: circleci/ruby:2.6.3-node-browsers-legacy environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby26 POSTGRES_PASSWORD: ""

    working_directory: ~/administrate

    steps:
      - checkout

      # Bundle install dependencies
      - run: bundle install --path vendor/bundle

      # Wait for DB
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Setup the environment
      - run: cp .sample.env .env

      # Setup the database
      - run: bundle exec rake db:setup

      # Run the tests
      - run: bundle exec rake


workflows: version: 2 build: jobs: - ruby-26 ...

- attach_workspace:   at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
name: Containers

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    container: circleci/ruby:2.6.3-node-browsers-legacy

    env:
      PGHOST: postgres
      PGUSER: administrate
      RAILS_ENV: test

    services:
      postgres:
        image: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        ports:
          - 5432:5432
        # Add a health check
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
      # This Docker file changes sets USER to circleci instead of using the default user, so we need to update file permissions for this image to work on GH Actions.
      # See https://docs.github.com/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem

      - name: Setup file system permissions
        run: sudo chmod -R 777 $GITHUB_WORKSPACE /github /__w/_temp
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install dependencies
        run: bundle install --path vendor/bundle
      - name: Setup environment configuration
        run: cp .sample.env .env
      - name: Setup database
        run: bundle exec rake db:setup
      - name: Run tests
        run: bundle exec rake
```
</td>
</tr>
</table>

Para obter mais informações, confira "[Sobre os contêineres de serviço](/actions/configuring-and-managing-workflows/about-service-containers)".

## Exemplo completo

Abaixo, há um exemplo concreto. O lado esquerdo mostra o *config.yml* real do CircleCI para o repositório [thoughtbot/administrator](https://github.com/thoughtbot/administrate). O lado direito mostra o equivalente {% data variables.product.prodname_actions %}.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

commands: shared_steps: steps: - checkout

      # Restore Cached Dependencies
      - restore_cache:
          name: Restore bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}

      # Bundle install dependencies
      - run: bundle install --path vendor/bundle

      # Cache Dependencies
      - save_cache:
          name: Store bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}
          paths:
            - vendor/bundle

      # Wait for DB
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Setup the environment
      - run: cp .sample.env .env

      # Setup the database
      - run: bundle exec rake db:setup

      # Run the tests
      - run: bundle exec rake

default_job: &default_job working_directory: ~/administrate steps:
    - shared_steps
    # Executar os testes em várias versões do Rails
    - run: bundle exec appraisal install
    - run: bundle exec appraisal rake

jobs: ruby-25: <<: *default_job docker: - image: circleci/ruby:2.5.0-node-browsers environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby25 POSTGRES_PASSWORD: ""

  ruby-26: <<: *default_job docker: - image: circleci/ruby:2.6.3-node-browsers-legacy environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby26 POSTGRES_PASSWORD: ""


workflows: version: 2 multiple-rubies: jobs: - ruby-26 - ruby-25
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Containers

on: [push]

jobs:
  build:

    strategy:
      matrix:
        ruby: [2.5, 2.6.3]

    runs-on: ubuntu-latest

    env:
      PGHOST: localhost
      PGUSER: administrate
      RAILS_ENV: test

    services:
      postgres:
        image: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        ports:
          - 5432:5432
        # Add a health check
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Ruby
        uses: eregon/use-ruby-action@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: {% raw %}${{ matrix.ruby }}{% endraw %}
      - name: Cache dependencies
        uses: {% data reusables.actions.action-cache %}
        with:
          path: vendor/bundle
          key: administrate-{% raw %}${{ matrix.image }}-${{ hashFiles('Gemfile.lock') }}{% endraw %}
      - name: Install postgres headers
        run: |
          sudo apt-get update
          sudo apt-get install libpq-dev
      - name: Install dependencies
        run: bundle install --path vendor/bundle
      - name: Setup environment configuration
        run: cp .sample.env .env
      - name: Setup database
        run: bundle exec rake db:setup
      - name: Run tests
        run: bundle exec rake
      - name: Install appraisal
        run: bundle exec appraisal install
      - name: Run appraisal
        run: bundle exec appraisal rake
```
</td>
</tr>
</table>
