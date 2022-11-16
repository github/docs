---
title: Миграция с CircleCI на GitHub Actions
intro: 'Конфигурация GitHub Actions и CircleCI имеет некоторые сходства, что делает миграцию GitHub Actions относительно простой.'
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
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/12/2022
ms.locfileid: '147518971'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

CircleCI и {% data variables.product.prodname_actions %} позволяют создавать рабочие процессы, которые автоматически выполняют сборку, тестирование, публикацию, выпуск и развертывание кода. CircleCI и {% data variables.product.prodname_actions %} используют некоторые сходства в конфигурации рабочего процесса.

- Файлы конфигурации рабочего процесса записываются в YAML и хранятся в репозитории.
- В рабочем процессе может быть одно или несколько заданий.
- Задания включают один или несколько шагов или отдельных команд.
- Шаги или задачи можно повторно использовать и предоставлять сообществу.

Дополнительные сведения см. в разделе [Основные понятия {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions).

## Основные различия

При миграции с CircleCI необходимо учитывать следующие различия.

- Автоматический параллелизм тестов в CircleCI автоматически группирует тесты в соответствии с заданными пользователем правилами или историческими сведениями о времени. Эта функциональность не встроена в {% data variables.product.prodname_actions %}.
- Действия, выполняемые в контейнерах Docker, чувствительны к проблемам с разрешениями, так как в контейнерах используется другое сопоставление пользователей. Многих из этих проблем можно избежать, не используя инструкцию `USER` в *Dockerfile*. {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %}Дополнительные сведения о файловой системе Docker в средствах выполнения, размещенных в {% data variables.product.product_name %}, см. в разделе [Средства выполнения тестов, размещенные в {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem).
{% endif %}

## Миграция рабочих процессов и заданий

CircleCI определяет `workflows` в файле *config.yml*, что позволяет настроить несколько рабочих процессов. В {% data variables.product.product_name %} требуется по одному файлу рабочего процесса для каждого рабочего процесса, и, как следствие, не требуется объявление `workflows`. Вам нужно будет создать по новому файлу рабочего процесса для каждого рабочего процесса, настроенного в файле *config.yml*.

Как CircleCI, так и {% data variables.product.prodname_actions %} настраивают `jobs` в файле конфигурации с использованием аналогичного синтаксиса. При настройке зависимостей между заданиями с помощью `requires` в рабочем процессе CircleCI вы можете использовать эквивалентный синтаксис `needs` {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds).

## Перенос orbs в действия

И CircleCI, и {% data variables.product.prodname_actions %} предоставляют механизм повторного использования и совместного использования задач в рабочем процессе. CircleCI использует концепцию с именем orbs, написанную в YAML, для предоставления задач, которые пользователи могут повторно использовать в рабочем процессе. {% data variables.product.prodname_actions %} имеет мощные и гибкие многократно используемые компоненты, называемые действиями, которые создаются с помощью файлов JavaScript или образов Docker. Вы можете создавать действия путем написания специального кода, взаимодействующего с репозиторием любым желательным вам способом, включая интеграцию с API {% data variables.product.product_name %} и любым общедоступным сторонним API. Например, действие может публиковать модули NPM, отправлять SMS-оповещения при возникновении неотложных проблем или развертывать готовый код. Дополнительные сведения см. в статье "[Создание действий](/actions/creating-actions)".

CircleCI может повторно использовать фрагменты рабочих процессов с привязками и псевдонимами YAML. {% data variables.product.prodname_actions %} поддерживает наиболее распространенную потребность в повторном использовании с помощью матриц. Дополнительные сведения о матрицах см. в разделе [Использование матрицы для заданий](/actions/using-jobs/using-a-matrix-for-your-jobs).

## Использование образов Docker


И CircleCI, и {% data variables.product.prodname_actions %} поддерживают выполнение шагов внутри образа Docker.

CircleCI предоставляет набор предварительно созданных образов с общими зависимостями. В этих образах `USER` настроен как `circleci`, что приводит к конфликту разрешений с {% data variables.product.prodname_actions %}.

Рекомендуется отказаться от предварительно созданных образов CircleCI при миграции на {% data variables.product.prodname_actions %}. Во многих случаях вы можете использовать действия для установки необходимых дополнительных зависимостей.

{% ifversion ghae %} Дополнительные сведения о файловой системе Docker см. в разделе [Файловая система контейнера Docker](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem).

{% data reusables.actions.self-hosted-runners-software %} {% else %} Дополнительные сведения о файловой системе Docker см. в разделе [Средства выполнения тестов, размещенные в {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem).

Дополнительные сведения об инструментах и пакетах, доступных в образах средств выполнения тестов, размещенных в {% data variables.product.prodname_dotcom %}, см. в разделе [Спецификации для средств выполнения тестов, размещенных в {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software).
{% endif %}

## Использование переменных и секретов

CircleCI и {% data variables.product.prodname_actions %} поддерживают настройку переменных среды в файле конфигурации и создание секретов с помощью пользовательского интерфейса CircleCI или {% data variables.product.product_name %}.

Дополнительные сведения см. в разделах [Использование переменных среды](/actions/configuring-and-managing-workflows/using-environment-variables) и [Создание и использование зашифрованных секретов](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets).

## Кэширование

CircleCI и {% data variables.product.prodname_actions %} предоставляют метод для ручного кэширования файлов в файле конфигурации.

{% ifversion actions-caching %}

Ниже приведен пример синтаксиса для каждой системы.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
Действия GitHub
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

В {% data variables.product.prodname_actions %} отсутствует эквивалент кэширования уровня Docker (или DLC) CircleCI.

## Сохранение данных между заданиями

И CircleCI, и {% data variables.product.prodname_actions %} предоставляют механизмы сохранения данных между заданиями.

Ниже приведен пример синтаксиса конфигурации в CircleCI и {% data variables.product.prodname_actions %}.

<table>
<tr>
<th>
CircleCI
</th>
<th>
Действия GitHub
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

Дополнительные сведения см. в разделе [Сохранение данных рабочего процесса с помощью артефактов](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts).

## Использование баз данных и контейнеров служб

Обе системы позволяют включать дополнительные контейнеры для баз данных, кэширования или других зависимостей.

В CircleCI первый образ, указанный в файле *config.yaml*, является основным образом, используемым для выполнения команд. {% data variables.product.prodname_actions %} использует явные разделы: `container` используется для основного контейнера, и дополнительные контейнеры перечисляются в `services`.

Ниже приведен пример синтаксиса конфигурации в CircleCI и {% data variables.product.prodname_actions %}.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
Действия GitHub
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

Дополнительные сведения см. в статье "[Сведения о контейнерах служб](/actions/configuring-and-managing-workflows/about-service-containers)".

## Полный пример

Ниже приведен пример из практики. В левой части показан фактический файл *config.yml* CircleCI для репозитория [thoughtbot/administrator](https://github.com/thoughtbot/administrate). Справа показан эквивалент в {% data variables.product.prodname_actions %}.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
Действия GitHub
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
    # Выполнение тестов для нескольких версий Rails
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
