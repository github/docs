---
title: Миграция с Travis CI на GitHub Actions
intro: '{% data variables.product.prodname_actions %} и Travis CI имеют несколько сходств в конфигурации, что делает миграцию на {% data variables.product.prodname_actions %} относительно простой.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-travis-ci-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Travis CI
  - Migration
  - CI
  - CD
shortTitle: Migrate from Travis CI
ms.openlocfilehash: 00da8dc259ef4de197faffd8db654dd536c1c237
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178994'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

Это руководство поможет вам перейти с Travis CI на {% data variables.product.prodname_actions %}. В нем сравниваются их концепции и синтаксис, описываются сходства и демонстрируются разные подходы к распространенным задачам.

## Перед началом работы

Прежде чем начать миграцию на {% data variables.product.prodname_actions %}, рекомендуется ознакомиться с принципами его работы.

- Краткий пример, демонстрирующий задание {% data variables.product.prodname_actions %}, см. в разделе [Краткое руководство по {% data variables.product.prodname_actions %}](/actions/quickstart).
- Основные понятия {% data variables.product.prodname_actions %} см. в разделе [Введение в GitHub Actions](/actions/learn-github-actions/introduction-to-github-actions).

## Сравнение выполнения заданий

Чтобы управлять выполнением задач CI, _рабочий процесс_ {% data variables.product.prodname_actions %} использует _задания_, которые по умолчанию выполняются параллельно. Каждое задание содержит _шаги_, выполняемые в определенной последовательности. Если вам нужно выполнять действия по настройке и очистке задания, можно определить шаги для выполнения этих действий в каждом задании.

## Ключевые сходства

{% data variables.product.prodname_actions %} и Travis CI имеют определенные сходства, и если вы будете понимать их заранее, это поможет сделать процесс миграции более гладким.

### Использование синтаксиса YAML

В Travis CI и {% data variables.product.prodname_actions %} используется YAML для создания заданий и рабочих процессов, и эти файлы хранятся в репозитории кода. Дополнительные сведения о том, как {% data variables.product.prodname_actions %} использует YAML, см. в разделе [Создание файла рабочего процесса](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow).

### Пользовательские переменные среды

Travis CI позволяет задавать переменные среды и совместно использовать их между этапами. Аналогично, {% data variables.product.prodname_actions %} позволяет определять переменные среды для шага, задания или рабочего процесса. Дополнительные сведения см. в разделе [Переменные среды](/actions/reference/environment-variables).

### Переменные среды по умолчанию

В Travis CI и {% data variables.product.prodname_actions %} имеются переменные среды по умолчанию, которые можно использовать в файлах YAML. Для {% data variables.product.prodname_actions %} эти переменные перечислены в разделе [Переменные среды по умолчанию](/actions/reference/environment-variables#default-environment-variables).

### Обработка параллельных заданий

Travis CI может использовать `stages` для параллельного выполнения заданий. Аналогично, {% data variables.product.prodname_actions %} выполняет `jobs` параллельно. Дополнительные сведения см. в разделе [Создание зависимых заданий](/actions/learn-github-actions/managing-complex-workflows#creating-dependent-jobs).

### Значки состояния

Travis CI и {% data variables.product.prodname_actions %} поддерживают индикаторы состояний, которые позволяют указать, выполняется ли сборка успешно или произошел сбой.
Дополнительные сведения см. в разделе [Добавление индикатора состояния рабочего процесса](/actions/managing-workflow-runs/adding-a-workflow-status-badge).

### Использование матрицы

Travis CI и {% data variables.product.prodname_actions %} поддерживают матрицу, что позволяет выполнять тестирование, используя сочетания операционных систем и программных пакетов. Дополнительные сведения см. в разделе [Использование матрицы для заданий](/actions/using-jobs/using-a-matrix-for-your-jobs).

Ниже приведен пример сравнения синтаксиса для каждой системы.

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
matrix:
  include:
    - rvm: 2.5
    - rvm: 2.6.3
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  build:
    strategy:
      matrix:
        ruby: [2.5, 2.6.3]
```
{% endraw %}
</td>
</tr>
</table>

### Нацеливание на конкретные ветви

Travis CI и {% data variables.product.prodname_actions %} позволяют нацеливать CI на определенную ветвь. Дополнительные сведения см. в статье "[Синтаксис рабочего процесса для GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)".

Ниже приведен пример синтаксиса для каждой системы.

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
branches:
  only:
    - main
    - 'mona/octocat'
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
on:
  push:
    branches:
      - main
      - 'mona/octocat'
```
{% endraw %}
</td>
</tr>
</table>

### Проверка подмодулей

Travis CI и {% data variables.product.prodname_actions %} позволяют контролировать, включены ли подмодули в клон репозитория.

Ниже приведен пример синтаксиса для каждой системы.

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
git:
  submodules: false
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- uses: {% data reusables.actions.action-checkout %}
  with:
    submodules: false
```

</td>
</tr>
</table>

### Использование переменных среды в матрице

Travis CI и {% data variables.product.prodname_actions %} могут добавлять пользовательские переменные среды в матрицу тестирования, что позволяет ссылаться на эту переменную на последующем шаге.

В {% data variables.product.prodname_actions %} вы можете использовать ключ `include` для добавления пользовательских переменных среды в матрицу. {% data reusables.actions.matrix-variable-example %}

## Основные возможности в {% data variables.product.prodname_actions %}

При миграции из Travis CI учитывайте следующие основные возможности в {% data variables.product.prodname_actions %}:

### Хранение секретов

{% data variables.product.prodname_actions %} позволяет сохранять секреты и ссылаться на них в заданиях. Организации {% data variables.product.prodname_actions %} могут ограничивать репозиториям доступ к секретам организации. Правила защиты среды могут требовать, чтобы доступ рабочего процесса к секретам среды утверждался вручную. Дополнительные сведения см. в статье [Зашифрованные секреты](/actions/reference/encrypted-secrets).

### Совместное использование файлов в заданиях и рабочих процессах

{% data variables.product.prodname_actions %} включает встроенную поддержку хранилища артефактов, что позволяет обмениваться файлами между заданиями в рабочем процессе. Вы также можете сохранять итоговые файлы и предоставлять другим рабочим процессам общий доступ к этим файлам. Дополнительные сведения см. в разделе [Совместное использование данных в заданиях](/actions/learn-github-actions/essential-features-of-github-actions#sharing-data-between-jobs).

### Размещение собственных средств выполнения

Если для ваших заданий требуется определенное оборудование или программное обеспечение, {% data variables.product.prodname_actions %} позволяет размещать собственные средства выполнения и отправлять в них задания для обработки. {% data variables.product.prodname_actions %} также позволяет использовать политики для управления доступом к этим средствам выполнения, чтобы предоставлять доступ на уровне организации или репозитория. Дополнительные сведения см. в разделе [Размещение собственных средств выполнения](/actions/hosting-your-own-runners).

{% ifversion fpt or ghec %}

### Параллельные задания и время выполнения

Время выполнения параллельных заданий и рабочих процессов в {% data variables.product.prodname_actions %} может отличаться в зависимости от плана {% data variables.product.company_short %}. Дополнительные сведения см. в разделе [Ограничения использования, выставление счетов и администрирование](/actions/reference/usage-limits-billing-and-administration).

{% endif %}

### Использование различных языков в {% data variables.product.prodname_actions %}

При работе с разными языками в {% data variables.product.prodname_actions %} вы можете создать в задании шаг для настройки зависимостей языка. Дополнительные сведения о работе с определенным языком см. в соответствующем руководстве:
  - [Создание и тестирование для Node.js](/actions/guides/building-and-testing-nodejs)
  - [Создание и тестирование для Python](/actions/guides/building-and-testing-python)
  - [Сборка и тестирование в PowerShell](/actions/guides/building-and-testing-powershell)
  - [Сборка и тестирование в Java с помощью Maven](/actions/guides/building-and-testing-java-with-maven)
  - [Сборка и тестирование в Java с помощью Gradle](/actions/guides/building-and-testing-java-with-gradle)
  - [Сборка и тестирование в Java с помощью Ant](/actions/guides/building-and-testing-java-with-ant)

## Выполнение скриптов

{% data variables.product.prodname_actions %} может использовать шаги `run` для выполнения скриптов или команд оболочки. Чтобы использовать определенную оболочку, можно задать тип `shell` при указании пути к скрипту. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun).

Пример:

```yaml
steps:
  - name: Run build script
    run: ./.github/scripts/build.sh
    shell: bash
```

## Обработка ошибок в {% data variables.product.prodname_actions %}

При миграции на {% data variables.product.prodname_actions %} существуют разные подходы к обработке ошибок, о которых вам следует знать.

### Обработка ошибок скрипта

{% data variables.product.prodname_actions %} немедленно останавливает задание, если один из шагов возвращает код ошибки. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference).

### Обработка ошибок задания

{% data variables.product.prodname_actions %} использует условные конструкции `if` для выполнения заданий или шагов в определенных ситуациях. Например, вы можете запустить выполнение некоторого шага, когда другой шаг приводит к `failure()`. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#example-using-status-check-functions).  Вы также можете использовать [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) для предотвращения остановки выполнения рабочего процесса при сбое задания.

## Синтаксис миграции для условных конструкций и выражений

Для запуска заданий с условными выражениями Travis CI и {% data variables.product.prodname_actions %} используют аналогичный синтаксис условий `if`. {% data variables.product.prodname_actions %} позволяет использовать условную конструкцию `if` для предотвращения выполнения задания или шага, если условие не выполняется. Дополнительные сведения см. в разделе [Выражения](/actions/learn-github-actions/expressions).

В этом примере показано, как условная конструкция `if` может управлять выполнением шага:

```yaml
jobs:
  conditional:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: env.str == 'ABC' && env.num == 123
```

## Этапы миграции и шаги

В то время как Travis CI использует _этапы_ для выполнения _шагов_, в {% data variables.product.prodname_actions %} существуют _шаги_, которые выполняют _действия_. Вы можете найти предварительно созданные действия в [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions)или создать собственные действия. Дополнительные сведения см. в разделе [Создание действий](/actions/building-actions).

Ниже приведен пример синтаксиса для каждой системы.

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: python
python:
  - "3.7"

скрипт:
  - python script.py
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.7'
          architecture: 'x64'
      - run: python script.py
```

</td>
</tr>
</table>

## Кэширование зависимостей

Travis CI и {% data variables.product.prodname_actions %} позволяют вручную кэшировать зависимости для последующего повторного использования.

{% ifversion actions-caching %}

В этом примере демонстрируется синтаксис кэша для каждой системы.

<table>
<tr>
<th>
Travis CI
</th>
<th>
Действия GitHub
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: node_js
cache: npm
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

## Примеры распространенных задач

В этом разделе сравнивается, как {% data variables.product.prodname_actions %} и Travis CI выполняют распространенные задачи.

### Настройка переменных среды

Вы можете создавать пользовательские переменные среды в задании {% data variables.product.prodname_actions %}. Пример:

<table>
<tr>
<th>
Travis CI
</th>
<th>
Рабочий процесс {% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td>

```yaml
env:
  - MAVEN_PATH="/usr/local/maven"
```

</td>
<td>

```yaml
jobs:
  maven-build:
    env:
      MAVEN_PATH: '/usr/local/maven'
```

</td>
</tr>
</table>

### Сборка с помощью Node.js

<table>
<tr>
<th>
Travis CI
</th>
<th>
Рабочий процесс {% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td>
{% raw %}
```yaml
install:
  - npm install
script:
  - npm run build
  - npm test
```
{% endraw %}
</td>
<td>

```yaml
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
      - run: npm install
      - run: npm run build
      - run: npm test
```

</td>
</tr>
</table>

## Дальнейшие действия

Чтобы продолжить изучение основных возможностей {% data variables.product.prodname_actions %}, перейдите к разделу [Основные возможности {% data variables.product.prodname_actions %}](/actions/learn-github-actions).
