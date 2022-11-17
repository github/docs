---
title: Создание и тестирование для Node.js
intro: Вы можете создать рабочий процесс непрерывной интеграции для сборки и тестирования проекта Node.js.
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179026'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве показано, как получить рабочий процесс непрерывной интеграции (CI), который создает и тестирует код Node.js. Если тесты CI проходят правильно, может потребоваться развернуть код или опубликовать пакет.

## Предварительные требования

Рекомендуется иметь базовое представление о Node.js, YAML, параметрах конфигурации рабочих процессов, а также о том, как создавать файл рабочего процесса. Дополнительные сведения можно найти в разделе

- «[Сведения о {% data variables.product.prodname_actions %}](/actions/learn-github-actions)»
- [Начало работы с Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/)

{% data reusables.actions.enterprise-setup-prereq %}

## Использование начального рабочего процесса Node.js

{% data variables.product.prodname_dotcom %} предоставляет начальный рабочий процесс Node.js, который будет работать для большинства проектов Node.js. В этом руководстве приведены примеры npm и Yarn, которые можно использовать для настройки начального рабочего процесса. Дополнительные сведения см. в разделе [Начальный рабочий процесс Node.js](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml).

Чтобы быстро приступить к работе, добавьте начальный рабочий процесс в каталог `.github/workflows` своего репозитория. В показанном ниже рабочем процессе предполагается, что ветвью по умолчанию для вашего репозитория является `main`.

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

## Указание версии Node.js

Самый простой способ указать версию Node.js заключается в использовании действия `setup-node`, предоставляемого {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. описании [`setup-node`](https://github.com/actions/setup-node/).

Действие `setup-node` принимает версию Node.js в качестве входных данных и настраивает ее в средстве выполнения. Действие `setup-node` находит определенную версию Node.js из кэша инструментов в каждом средстве запуска и добавляет необходимые двоичные файлы в переменную `PATH`, которая сохраняется до конца задания. Применение действия `setup-node` представляет собой рекомендуемый способ использования Node.js с {% data variables.product.prodname_actions %}, так как он обеспечивает согласованное поведение в разных средствах выполнения и различных версиях Node.js. При использовании локального средства выполнения необходимо установить Node.js и добавить его в `PATH`.

Начальный рабочий процесс включает в себя матричную стратегию, которая создает и тестирует код с использованием четырех версий Node.js: 10.x, 12.x, 14.x и 15.x. Здесь "x" — это подстановочный знак, соответствующий последнему дополнительному выпуску и выпуску исправлений, доступному для версии. Каждая версия Node.js, указанная в массиве `node-version`, создает задание, которое выполняет одни и те же действия.

Каждое задание может получить доступ к значению, определенному в массиве `node-version` матрицы, с помощью контекста `matrix`. Действие `setup-node` использует контекст в качестве входных данных `node-version`. Действие `setup-node` настраивает каждое задание с использованием разных версий Node.js перед созданием и тестированием кода. Дополнительные сведения о матричных стратегиях и контекстах см. в разделах [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix) и [Контексты](/actions/learn-github-actions/contexts).

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

Кроме того, можно создавать и тестировать код с использованием конкретных версий Node.js.

```yaml{:copy}
strategy:
  matrix:
    node-version: [8.16.2, 10.17.0]
```

Либо можно создавать и тестировать код с помощью одной версии Node.js.

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

Если не указать версию Node.js, {% data variables.product.prodname_dotcom %} использует версию Node.js по умолчанию, заданную для среды.
{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} Дополнительные сведения см. в разделе [Спецификации для средств выполнения, размещенных в {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software).
{% endif %}

## Установка зависимостей

Для размещенных в {% data variables.product.prodname_dotcom %} средств выполнения установлены диспетчеры зависимостей npm и Yarn. Вы можете использовать npm и Yarn для установки зависимостей в рабочем процессе перед созданием и тестированием кода. В Windows и Linux для размещенных в {% data variables.product.prodname_dotcom %} средств выполнения также установлены Grunt, Gulp и Bower.

{% ifversion actions-caching %}Можно также кэшировать зависимости, чтобы ускорить рабочий процесс. Дополнительные сведения см. в разделе [Кэширование зависимостей для ускорения рабочих процессов](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).{% endif %}

### Пример использования npm

В этом примере устанавливаются зависимости, определенные в файле *package.json*. Дополнительные сведения см. на веб-сайте [`npm install`](https://docs.npmjs.com/cli/install).

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

При использовании `npm ci` версии устанавливаются в файл *package-lock.json* или *npm-shrinkwrap.json*, а также запрещается изменение файла блокировки. Выполнение `npm ci` обычно осуществляется быстрее, чем `npm install`. Дополнительные сведения см. в описании [`npm ci`](https://docs.npmjs.com/cli/ci.html) и разделе [Знакомство с `npm ci` для получения более быстродействующих и надежных сборок](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable).

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

### Пример использования Yarn

В этом примере устанавливаются зависимости, определенные в файле *package.json*. Дополнительные сведения см. на веб-сайте [`yarn install`](https://yarnpkg.com/en/docs/cli/install).

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

Кроме того, можно передать `--frozen-lockfile`, чтобы установить версии в файле `yarn.lock` и запретить изменения файла `yarn.lock`.

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

### Пример использования частного реестра и создания NPMRC-файла

{% data reusables.actions.setup-node-intro %}

Чтобы пройти проверку подлинности в частном реестре, нужно сохранить маркер проверки подлинности npm в виде секрета. Например, создайте секрет репозитория `NPM_TOKEN`. Дополнительные сведения см. в статье «[Создание и использование зашифрованных секретов](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)».

В приведенном ниже примере в `NPM_TOKEN` секрета хранится токен проверки подлинности npm. Действие `setup-node` настраивает файл *NPMRC* для чтения маркера проверки подлинности npm из переменной среды `NODE_AUTH_TOKEN`. При использовании действия `setup-node` для создания файла *NPMRC* необходимо задать для переменной среды `NODE_AUTH_TOKEN` секрет, содержащий маркер проверки подлинности npm.

Перед установкой зависимостей используйте действие `setup-node` для создания файла *NPMRC*. Это действие имеет два входных параметра. Параметр `node-version` задает версию Node.js, а параметр `registry-url` задает реестр по умолчанию. Если в реестре пакетов используются области, необходимо использовать параметр `scope`. Дополнительные сведения см. на веб-сайте [`npm-scope`](https://docs.npmjs.com/misc/scope).

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

В приведенном выше примере создается файл *NPMRC* со следующим содержимым:

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://registry.npmjs.org/
always-auth=true
```

{% ifversion actions-caching %}

### Примеры кэширования зависимостей

Можно кэшировать и восстанавливать зависимости с помощью [`setup-node`действия](https://github.com/actions/setup-node).

В следующем примере кэшируются зависимости для npm.

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

В следующем примере кэшируются зависимости для Yarn.

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

В следующем примере кэшируются зависимости для pnpm (версия 6.10 или более поздняя).

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

Если у вас есть особые требования или вам нужно управлять кэшированием более детально, можно использовать [действие `cache`](https://github.com/marketplace/actions/cache). Дополнительные сведения см. в разделе [Кэширование зависимостей для ускорения рабочих процессов](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).

{% endif %}

## Создание и тестирование кода

Вы можете использовать те же команды, которые используются для создания и тестирования кода в локальной среде. Например, при запуске `npm run build` для выполнения шагов сборки, определенных в файле *package.json*, и `npm test` для выполнения набора тестов, вам нужно добавить эти команды в свой файл рабочего процесса.

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

## Упаковка данных рабочего процесса в виде артефактов

Вы можете сохранить артефакты из шагов сборки и тестирования, чтобы просмотреть их после завершения задания. Например, может потребоваться сохранить файлы журналов, основные дампы, результаты теста или снимки экрана. Дополнительные сведения см. в разделе [Сохранение данных рабочего процесса с помощью артефактов](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts).

## Публикация в реестрах пакетов

Вы можете настроить рабочий процесс для публикации пакета Node.js в реестре пакетов после прохождения тестов CI. Дополнительные сведения о публикации в npm и {% data variables.product.prodname_registry %}см. в разделе [Публикация пакетов Node.js](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages).
