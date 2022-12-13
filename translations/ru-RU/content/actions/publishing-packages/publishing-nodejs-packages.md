---
title: Публикация пакетов Node.js
shortTitle: Publish Node.js packages
intro: Пакеты Node.js можно опубликовать в реестре в рамках рабочего процесса непрерывной интеграции (CI).
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages
  - /actions/language-and-framework-guides/publishing-nodejs-packages
  - /actions/guides/publishing-nodejs-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Node
  - JavaScript
ms.openlocfilehash: 7a2b55e99ca4cdb6e27b36480d35f0c2595a336f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094500'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве показано, как создать рабочий процесс, публикующий пакеты Node.js в {% data variables.product.prodname_registry %} и реестры npm после прохождения тестов непрерывной интеграции (CI).

## Предварительные требования

Рекомендуется иметь базовое представление о параметрах конфигурации рабочих процессов, а также о том, как создавать файл рабочего процесса. Дополнительные сведения см. в статье со [сведениями о {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

Дополнительные сведения о создании рабочего процесса CI для проекта Node.js см. в разделе [Использование Node.js с {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions).

Также могут быть полезны базовые знания в следующих областях:

- [Работа с реестром npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
- [Переменные среды](/actions/reference/environment-variables)
- [Зашифрованные секреты](/actions/reference/encrypted-secrets)
- [Проверка подлинности в рабочем процессе](/actions/reference/authentication-in-a-workflow)

## Сведения о конфигурации пакета

 Поля `name` и `version` в файле *package.json* создают уникальный идентификатор, который реестры используют для связывания пакета с реестром. Чтобы добавить сводку для страницы со списком пакетов, включите поле `description` в файл *package.json* . Дополнительные сведения см. в разделах [Создание файла package.json](https://docs.npmjs.com/creating-a-package-json-file) и [Создание модулей Node.js](https://docs.npmjs.com/creating-node-js-modules) документации по npm.

Если локальный *NPMRC*-файл существует и имеет указанное значение `registry`, команда `npm publish` использует реестр, настроенный в *NPMRC*-файле. {% data reusables.actions.setup-node-intro %}

Указать версию Node.js, установленную в средстве выполнения тестов, можно с помощью действия `setup-node`.

При добавлении шагов в рабочий процесс для настройки полей `publishConfig` в файле *package.json* не нужно указывать URL-адрес реестра с помощью действия `setup-node`, однако опубликовать пакет можно будет только в одном реестре. Дополнительные сведения см. в разделе [publishConfig](https://docs.npmjs.com/files/package.json#publishconfig) в документации npm.

## Публикация пакетов в реестре npm

При каждом создании выпуска можно активировать рабочий процесс для публикации пакета. Рабочий процесс в приведенном ниже примере выполняется при активации события `release` с типом `created`. Рабочий процесс публикует пакет в реестре npm при прохождении тестов CI.

Для выполнения аутентифицированных операций с реестром npm в рабочем процессе необходимо сохранить маркер проверки подлинности npm в виде секрета. Например, создайте секрет репозитория `NPM_TOKEN`. Дополнительные сведения см. в статье «[Создание и использование зашифрованных секретов](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)».

По умолчанию npm использует поле `name` файла *package.json* для определения имени опубликованного пакета. При публикации в глобальном пространстве имен необходимо включить только имя пакета. Например, пакет с именем `npm-hello-world-test` вы бы опубликовали в `https://www.npmjs.com/package/npm-hello-world-test`.

При публикации пакета с префиксом области включите область в имя файла *package.json*. Например, если префикс области npm — octocat, а имя пакета — hello-world, `name` в файле *package.json* — `@octocat/hello-world`. Если пакет npm использует префикс области и пакет является общедоступным, необходимо использовать параметр `npm publish --access public`. Это параметр, который npm требует, чтобы запретить кому-либо непреднамеренно опубликовать частный пакет.

В этом примере секрет `NPM_TOKEN` сохраняется в переменной среды `NODE_AUTH_TOKEN`. При создании *NPMRC*-файла действие `setup-node` ссылается на токен из переменной среды `NODE_AUTH_TOKEN`.

```yaml{:copy}
name: Publish Package to npmjs
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to npm
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```

В приведенном выше примере действие `setup-node` создает в средстве выполнения тестов *NPMRC*-файл со следующим содержимым:

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
```

Обратите внимание, что для правильной настройки учетных данных необходимо задать для `registry-url` значение `https://registry.npmjs.org/` в `setup-node`.

## Публикация пакетов в {% data variables.product.prodname_registry %}

При каждом создании выпуска можно активировать рабочий процесс для публикации пакета. Рабочий процесс в приведенном ниже примере выполняется каждый раз при возникновении события `release` с типом `created`. Если тесты CI проходят успешно, рабочий процесс публикует пакет в {% data variables.product.prodname_registry %}.

### Настройка целевого репозитория

Связывать пакет с {% data variables.product.prodname_registry %} с помощью ключа `repository` не обязательно. Если ключ `repository` в файле *package.json* не указан, {% data variables.product.prodname_registry %} публикует пакет в репозитории {% data variables.product.prodname_dotcom %}, указанном вами в поле `name` файла *package.json*. Например, пакет с именем `@my-org/test` публикуется в репозитории `my-org/test` {% data variables.product.prodname_dotcom %}. Если в ключе `repository` указан недопустимый `url`, пакет может быть опубликован, однако он не будет связан с источником репозитория, как предполагалось.

Если ключ `repository` указан в файле *package.json*, репозиторий в этом ключе используется в качестве целевого реестра npm для {% data variables.product.prodname_registry %}. Например, публикация приведенного ниже файла *package.json* приводит к публикации пакета с именем `my-amazing-package` в репозитории`octocat/my-other-repo` {% data variables.product.prodname_dotcom %}. После публикации обновляется только источник репозитория, и пакет не наследует разрешения из целевого репозитория.

```json
{
  "name": "@octocat/my-amazing-package",
  "repository": {
    "type": "git",
    "url": "https://github.com/octocat/my-other-repo.git"
  },
```

### Проверка подлинности в целевом репозитории

Для выполнения аутентифицированных операций в реестре {% data variables.product.prodname_registry %} в рабочем процессе можно использовать `GITHUB_TOKEN`. {% data reusables.actions.github-token-permissions %}

Если вы хотите опубликовать пакет в другом репозитории, необходимо использовать {% данных variables.product.pat_v1 %} с разрешением на запись в пакеты в целевом репозитории. Дополнительные сведения см. в разделе "[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)" и "[Зашифрованные секреты](/actions/reference/encrypted-secrets)".

### Пример рабочего процесса

В этом примере секрет `GITHUB_TOKEN` сохраняется в переменной среды `NODE_AUTH_TOKEN`. При создании *NPMRC*-файла действие `setup-node` ссылается на токен из переменной среды `NODE_AUTH_TOKEN`.

```yaml{:copy}
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to GitHub Packages
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://npm.pkg.github.com'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Действие `setup-node` создает *NPMRC*-файл в средстве выполнения тестов. При использовании входных данных `scope` для действия `setup-node` *NPMRC*-файл включает префикс области. По умолчанию действие `setup-node` задает в качестве области в *NPMRC*-файле учетную запись, содержащую этот файл рабочего процесса.

```ini
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://npm.pkg.github.com
always-auth=true
```

## Публикация пакетов с помощью yarn

При использовании диспетчера пакетов Yarn можно устанавливать и публиковать пакеты с помощью Yarn.

```yaml{:copy}
name: Publish Package to npmjs
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to npm
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://registry.npmjs.org'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: yarn
      - run: yarn publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```
