---
title: Сведения о рабочих процессах
shortTitle: About workflows
intro: 'Получите общие сведения о рабочих процессах {% data variables.product.prodname_actions %}, включая триггеры, синтаксис и расширенные функции.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/learn-github-actions/managing-complex-workflows
  - /actions/using-workflows/advanced-workflow-features
topics:
  - Workflows
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: cb0b834604d49432d34cec48b0c9f27e37161804
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '146180514'
---
## Сведения о рабочих процессах

{% data reusables.actions.about-workflows-long %}

## Основы рабочих процессов

Рабочий процесс должен содержать следующие основные компоненты.

1. Одно или несколько _событий_, которые активируют рабочий процесс.
1. Одно или несколько _заданий_, каждое из которых выполняется на компьютере _средства выполнения_ и выполняет серию из одного или нескольких _шагов_.
1. Каждый шаг может либо запускать определенный вами сценарий, либо запускать многократно используемое расширение, которое упрощает создание рабочего процесса.

Дополнительные сведения об этих основных компонентах см. в разделе [Основные сведения о GitHub Actions](/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions).

![Обзор рабочего процесса](/assets/images/help/images/overview-actions-simple.png)

## Активация рабочего процесса

{% data reusables.actions.about-triggers %}

Дополнительные сведения см. в разделе [Активация рабочего процесса](/actions/using-workflows/triggering-a-workflow), а полный список событий см. в разделе [События, активирующие рабочие процессы](/actions/using-workflows/events-that-trigger-workflows).

## Синтаксис рабочего процесса

Рабочий процесс определяется с помощью формата YAML. Полный справочник по синтаксису YAML для разработки рабочих процессов см. в разделе [Синтаксис рабочих процессов для GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows).


{% data reusables.actions.workflow-basic-example-and-explanation %}

Дополнительные сведения об управлении выполнением рабочих процессов, таких как повторное выполнение, отмена или удаление запуска рабочего процесса, см. в разделе [Управление выполнением рабочих процессов](/actions/managing-workflow-runs).

## Использование начальных рабочих процессов

{% data reusables.actions.workflow-template-overview %}

Дополнительные сведения об использовании и создании начальных рабочих процессов см. в разделах [Использование начальных рабочих процессов](/actions/using-workflows/using-starter-workflows) и [Создание начальных рабочих процессов для организации](/actions/using-workflows/creating-starter-workflows-for-your-organization).

## Расширенные функции рабочих процессов

В этом разделе кратко описаны некоторые расширенные функции {% data variables.product.prodname_actions %}, которые помогают создавать более сложные рабочие процессы.

### Хранение секретов

Если рабочие процессы обрабатывают конфиденциальные данные, например пароли или сертификаты, их можно сохранить в {% data variables.product.prodname_dotcom %} в качестве _секретов_, а затем использовать их в рабочих процессах в качестве переменных среды. Это означает, что можно создавать и совместно использовать рабочие процессы, не внедряя конфиденциальные значения непосредственно в исходный код YAML рабочего процесса.

В этом примере задания показано, как ссылаться на существующий секрет в виде переменной среды и отправлять его в качестве параметра в пример команды.

{% raw %}
```yaml
jobs:
  example-job:
    runs-on: ubuntu-latest
    steps:
      - name: Retrieve secret
        env:
          super_secret: ${{ secrets.SUPERSECRET }}
        run: |
          example-command "$super_secret"
```
{% endraw %}

Дополнительные сведения см. в статье [Зашифрованные секреты](/actions/security-guides/encrypted-secrets).

### Создание зависимых заданий

По умолчанию задания в рабочем процессе выполняются параллельно и одновременно. Если у вас есть задание, которое должно выполняться только после завершения другого задания, можно использовать ключевое слово `needs` для создания этой зависимости. Если одно из заданий завершается сбоем, все зависимые задания пропускаются. Однако если требуется, чтобы задания продолжали работу, это можно определить с помощью условного оператора `if`.

В этом примере задания `setup`, `build` и `test` выполняются вместе, а задания `build` и `test` также зависят от успешного завершения задания, предшествующего им.

```yaml
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - run: ./setup_server.sh
  build:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - run: ./build_server.sh
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: ./test_server.sh
```

Дополнительные сведения см. в разделе [Определение предварительных заданий](/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs).

### Использование матрицы

{% data reusables.actions.jobs.about-matrix-strategy %} Матрица создается с помощью ключевого слова `strategy`, которое получает параметры сборки в виде массива. Например, следующая матрица будет выполнять задание несколько раз, используя разные версии Node.js.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [12, 14, 16]
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
```

Дополнительные сведения см. в разделе [Использование матрицы для заданий](/actions/using-jobs/using-a-matrix-for-your-jobs).

{% ifversion actions-caching %}
### Кэширование зависимостей

Если задания регулярно используют зависимости повторно, можно рассмотреть возможность кэширования этих файлов, чтобы повысить производительность. После создания кэша он будет доступен для всех рабочих процессов в этом репозитории.

В этом примере показано, как кэшировать каталог ` ~/.npm`:

```yaml
jobs:
  example-job:
    steps:
      - name: Cache node modules
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
```

Дополнительные сведения см. в разделе [Кэширование зависимостей для ускорения рабочих процессов](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).
{% endif %}

### Использование баз данных и контейнеров служб

Если для задания требуется служба базы данных или кэша, можно использовать ключевое слово[`services`](/actions/using-jobs/running-jobs-in-a-container) для создания эфемерного контейнера для размещения службы. Полученный контейнер доступен на всех шагах этого задания, а после завершения задания удаляется. В этом примере показано, как задание может использовать `services` для создания контейнера `postgres`, а затем использовать `node` для подключения к службе.

```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie
    services:
      postgres:
        image: postgres
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install dependencies
        run: npm ci
      - name: Connect to PostgreSQL
        run: node client.js
        env:
          POSTGRES_HOST: postgres
          POSTGRES_PORT: 5432
```

Дополнительные сведения см. в разделе [Использование контейнерных служб](/actions/using-containerized-services).

### Использование меток для маршрутизации рабочих процессов

Если вам нужно, что задание обрабатывал определенный тип средства выполнения, можно использовать метки для управления местом выполнения заданий. Метки можно назначить локальному средству выполнения в дополнение к метке по умолчанию `self-hosted`. Затем вы можете ссылаться на эти метки в рабочем процессе YAML, обеспечивая предсказуемую маршрутизацию задания. {% ifversion not ghae %} Средства выполнения, размещенные в {% data variables.product.prodname_dotcom %}, имеют предопределенные метки.{% endif %}

В этом примере показано, как рабочий процесс может использовать метки для указания необходимого средства выполнения.

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

Рабочий процесс будет выполняться только в средстве выполнения, которое содержит все метки из массива `runs-on`. Задание будет в первую очередь переходить к неактивным локальным средствам выполнения с указанными метками. {% ifversion fpt or ghec %}Если все из них недоступны, а в {% data variables.product.prodname_dotcom %} существует средство выполнения с указанными метками, задание перейдет к средству выполнения, размещенному в {% data variables.product.prodname_dotcom %}.{% endif %}

Дополнительные сведения о метках локальных средств выполнения см. в разделе [Использование меток с локальными средствами выполнения](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners).

{% ifversion fpt or ghec %} Дополнительные сведения о метках средств выполнения, размещенных в {% data variables.product.prodname_dotcom %}, см. в разделе [Поддерживаемые средства выполнения и аппаратные ресурсы](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### Повторное использование рабочих процессов
{% data reusables.actions.reusable-workflows %} {% endif %}

### Использование сред

Среды можно настроить с помощью правил защиты и секретов для управления выполнением заданий в рабочем процессе. Каждое задание в рабочем процессе может ссылаться на одну среду. Чтобы задание, ссылающееся на среду, было отправлено в средство выполнения, должны быть выполнены все правила защиты среды. Дополнительные сведения см. в разделе [Использование сред для развертывания](/actions/deployment/using-environments-for-deployment).
