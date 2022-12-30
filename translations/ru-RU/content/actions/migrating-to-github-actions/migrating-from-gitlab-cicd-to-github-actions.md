---
title: Миграция с GitLab CI/CD на GitHub Actions
intro: '{% data variables.product.prodname_actions %} и GitLab CI/CD имеют несколько сходств в конфигурации, что делает миграцию на {% data variables.product.prodname_actions %} относительно простой.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-gitlab-cicd-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - GitLab
  - Migration
  - CI
  - CD
shortTitle: Migrate from GitLab CI/CD
ms.openlocfilehash: d0d5f2cae928f95b1a614826f270342f376db0de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178986'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

GitLab CI/CD и {% data variables.product.prodname_actions %} позволяют создавать рабочие процессы, которые автоматически выполняют сборку, тестирование, публикацию, выпуск и развертывание кода. GitLab CI/CD и {% data variables.product.prodname_actions %} используют некоторые сходства в конфигурации рабочего процесса.

- Файлы конфигурации рабочего процесса записываются в YAML и хранятся в репозитории кода.
- В рабочем процессе может быть одно или несколько заданий.
- Задания включают один или несколько шагов или отдельных команд.
- Задания могут выполняться на управляемых или локальных компьютерах.

Существуют некоторые различия, и в этом руководстве показаны наиболее важные из них, чтобы вы могли перенести свой рабочий процесс в {% data variables.product.prodname_actions %}.

## Задания

Задания в GitLab CI/CD очень похожи на задания в {% data variables.product.prodname_actions %}. В обеих системах задания имеют следующие характеристики.

* Задания содержат ряд шагов или скриптов, которые выполняются последовательно.
* Задания могут выполняться на отдельных виртуальных машинах или в отдельных контейнерах.
* По умолчанию задания выполняются параллельно, но можно настроить их последовательное выполнение.

Вы можете выполнять в задании скрипт или команду оболочки. В GitLab CI/CD шаги скрипта указываются с помощью ключа `script`. В {% data variables.product.prodname_actions %} все скрипты указываются с помощью ключа `run`.

Ниже приведен пример синтаксиса для каждой системы.

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
job1:
  variables:
    GIT_CHECKOUT: "true"
  script:
    - echo "Run your script here"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  job1:
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: echo "Run your script here"
```

</td>
</tr>
</table>

## Средства выполнения

Средства выполнения — это виртуальные машины, на которых выполняются задания. GitLab CI/CD и {% data variables.product.prodname_actions %} предлагают управляемые и локальные варианты средств выполнения. В GitLab CI/CD для выполнения заданий на разных платформах используются `tags`, а в {% data variables.product.prodname_actions %} это делается с помощью ключа `runs-on`.

Ниже приведен пример синтаксиса для каждой системы.

<table>
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  tags:
    - windows
  script:
    - echo Hello, %USERNAME%!

linux_job: tags:
    - linux script:
    - echo "Hello, $USER!"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  runs-on: windows-latest
  steps:
    - run: echo Hello, %USERNAME%!

linux_job:
  runs-on: ubuntu-latest
  steps:
    - run: echo "Hello, $USER!"
```
{% endraw %}
</td>
</tr>
</table>

Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on).

## Образы Docker

GitLab CI/CD и {% data variables.product.prodname_actions %} поддерживают выполнение заданий в образе Docker. В GitLab CI/CD образы Docker определяются с помощью ключа `image`, а в {% data variables.product.prodname_actions %} это делается с помощью ключа `container`.

Ниже приведен пример синтаксиса для каждой системы.

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
my_job:
  image: node:10.16-jessie
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  my_job:
    container: node:10.16-jessie
```
{% endraw %}
</td>
</tr>
</table>

Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer).

## Синтаксис условий и выражений

GitLab CI/CD использует `rules` для определения, будет ли задание выполняться при определенном условии. В {% data variables.product.prodname_actions %} используется ключевое слово `if`, чтобы предотвратить выполнение задания, если условие не выполняется.

Ниже приведен пример синтаксиса для каждой системы.

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
deploy_prod:
  stage: deploy
  script:
    - echo "Deploy to production server"
  rules:
    - if: '$CI_COMMIT_BRANCH == "master"'
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  deploy_prod:
    if: contains( github.ref, 'master')
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploy to production server"
```
{% endraw %}
</td>
</tr>
</table>

Дополнительные сведения см. в разделе [Выражения](/actions/learn-github-actions/expressions).

## Зависимости между заданиями

И GitLab CI/CD, и {% data variables.product.prodname_actions %} позволяют задавать зависимости для задания. В обеих системах задания по умолчанию выполняются параллельно, но зависимости заданий в {% data variables.product.prodname_actions %} можно указывать явным образом с помощью ключа `needs`. В GitLab CI/CD также имеется концепция `stages`, в которой задания в этапе выполняются параллельно, но следующий этап начнется после завершения всех заданий предыдущего этапа. Этот сценарий можно воссоздать в {% data variables.product.prodname_actions %} с помощью ключа `needs`.

Ниже приведен пример синтаксиса для каждой системы. Рабочие процессы начинаются с двух заданий с именами `build_a` и `build_b`, выполняющихся параллельно, а после завершения этих заданий будет выполняться другое задание с именем `test_ab`. Наконец, по завершении задания `test_ab`, будет выполняться задание `deploy_ab`.

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
stages:
  - build
  - test
  - deploy

build_a: stage: build script:
    - echo "This job will run first."

build_b: stage: build script:
    - echo "This job will run first, in parallel with build_a."

test_ab: stage: test script:
    - echo "This job will run after build_a and build_b have finished."

deploy_ab: stage: deploy script:
    - echo "This job will run after test_ab is complete"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  build_a:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first."

  build_b:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first, in parallel with build_a"

  test_ab:
    runs-on: ubuntu-latest
    needs: [build_a,build_b]
    steps:
      - run: echo "This job will run after build_a and build_b have finished"

  deploy_ab:
    runs-on: ubuntu-latest
    needs: [test_ab]
    steps:
      - run: echo "This job will run after test_ab is complete"
```
{% endraw %}
</td>
</tr>
</table>

Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds).

## Планирование рабочих процессов

GitLab CI/CD и {% data variables.product.prodname_actions %} позволяют запускать рабочие процессы через определенный интервал. В GitLab CI/CD расписания конвейера настраиваются с помощью пользовательского интерфейса, а в {% data variables.product.prodname_actions %} можно активировать рабочий процесс с запланированным интервалом с помощью ключа "on".

Дополнительные сведения см. в разделе [События, активирующие рабочие процессы](/actions/reference/events-that-trigger-workflows#scheduled-events).

## Переменные и секреты

GitLab CI/CD и {% data variables.product.prodname_actions %} поддерживают настройку переменных среды в файле конфигурации конвейера или рабочего процесса, а также создание секретов с помощью пользовательского интерфейса GitLab CI/CD или {% data variables.product.product_name %}.

Дополнительные сведения см. в разделах [Переменные среды](/actions/reference/environment-variables) и [Зашифрованные секреты](/actions/reference/encrypted-secrets).

## Кэширование

GitLab CI/CD и {% data variables.product.prodname_actions %} предоставляют метод в файле конфигурации для ручного кэширования файлов рабочего процесса.

{% ifversion actions-caching %}

Ниже приведен пример синтаксиса для каждой системы.

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
image: node:latest

cache: key: $CI_COMMIT_REF_SLUG paths:
    - .npm/

before_script:
  - npm ci --cache .npm --prefer-offline

test_async: script:
    - node ./specs/start.js ./specs/async.spec.js
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  test_async:
    runs-on: ubuntu-latest
    steps:
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

## Artifacts

Как GitLab CI/CD, так и {% data variables.product.prodname_actions %} могут отправлять файлы и каталоги, созданные заданием, как артефакты. В {% data variables.product.prodname_actions %}артефакты можно использовать для сохранения данных из нескольких заданий.

Ниже приведен пример синтаксиса для каждой системы.

<table>
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
script:
artifacts:
  paths:
    - math-homework.txt
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
```

</td>
</tr>
</table>

Дополнительные сведения см. в разделе [Хранение данных рабочего процесса в качестве артефактов](/actions/guides/storing-workflow-data-as-artifacts).

## Базы данных и контейнеры служб

Обе системы позволяют включать дополнительные контейнеры для баз данных, кэширования или других зависимостей.

В GitLab CI/CD контейнер для задания указывается с помощью ключа `image`, а в {% data variables.product.prodname_actions %} используется ключ `container`. Дополнительные контейнеры служб в обеих системах указываются с помощью ключа `services`.

Ниже приведен пример синтаксиса для каждой системы.

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
container-job:
  variables:
    POSTGRES_PASSWORD: postgres
    # The hostname used to communicate with the
    # PostgreSQL service container
    POSTGRES_HOST: postgres
    # The default PostgreSQL port
    POSTGRES_PORT: 5432
  image: node:10.18-jessie
  services:
    - postgres
  script:
    # Performs a clean installation of all dependencies
    # in the `package.json` file
    - npm ci
    # Runs a script that creates a PostgreSQL client,
    # populates the client with data, and retrieves data
    - node client.js
  tags:
    - docker
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie

    services:
      postgres:
        image: postgres
        env:
          POSTGRES_PASSWORD: postgres

    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}

      # Performs a clean installation of all dependencies
      # in the `package.json` file
      - name: Install dependencies
        run: npm ci

      - name: Connect to PostgreSQL
        # Runs a script that creates a PostgreSQL client,
        # populates the client with data, and retrieves data
        run: node client.js
        env:
          # The hostname used to communicate with the
          # PostgreSQL service container
          POSTGRES_HOST: postgres
          # The default PostgreSQL port
          POSTGRES_PORT: 5432
```

</td>
</tr>
</table>

Дополнительные сведения см. в статье "[Сведения о контейнерах служб](/actions/guides/about-service-containers)".
