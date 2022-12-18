---
title: Краткое руководство по GitHub Packages
intro: 'Публикация в {% data variables.product.prodname_registry %} с помощью {% data variables.product.prodname_actions %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
ms.openlocfilehash: 887c4ee6c5e6b3e2c391c2d5754cfcb2787e4b86
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181261'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве вы создадите рабочий процесс {% data variables.product.prodname_actions %}, чтобы протестировать код, а затем опубликовать его в {% data variables.product.prodname_registry %}.

## Публикация пакета

1. Создайте новый репозиторий в {% data variables.product.prodname_dotcom %}, добавив `.gitignore` для Node. Дополнительные сведения см. в разделе [Создание репозитория](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository).
2. Клонируйте репозиторий на локальный компьютер.
    ```shell
    $ git clone https://{% ifversion ghes or ghae %}YOUR-HOSTNAME{% else %}github.com{% endif %}/YOUR-USERNAME/YOUR-REPOSITORY.git
    $ cd YOUR-REPOSITORY
    ```
3. Создайте файл `index.js` и добавьте базовое оповещение, говорящее "Hello world!"
    {% raw %}
    ```javascript{:copy}
    console.log("Hello, World!");
    ```
    {% endraw %}
4. Инициализируйте пакет npm с помощью `npm init`. В мастере инициализации пакета введите пакет с именем _`@YOUR-USERNAME/YOUR-REPOSITORY`_ и задайте для тестового скрипта значение `exit 0`. При этом будет создан файл `package.json` со сведениями о пакете.
    {% raw %}
    ```shell
    $ npm init
      ...
      package name: @YOUR-USERNAME/YOUR-REPOSITORY
      ...
      test command: exit 0
      ...    
    ```
    {% endraw %}
5. Выполните `npm install`, чтобы создать файл `package-lock.json`, а затем зафиксируйте и отправьте изменения в {% data variables.product.prodname_dotcom %}.
    ```shell
    $ npm install
    $ git add index.js package.json package-lock.json
    $ git commit -m "initialize npm package"
    $ git push
    ```
6. Создайте каталог `.github/workflows`. В этом каталоге создайте файл с именем `release-package.yml`.
7. Скопируйте следующее содержимое YAML в файл `release-package.yml`{% ifversion ghes or ghae %}, заменив `YOUR-HOSTNAME` на имя вашего предприятия{% endif %}.
    ```yaml{:copy}
    name: Node.js Package

    on:
      release:
        types: [created]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: {% data reusables.actions.action-checkout %}
          - uses: {% data reusables.actions.action-setup-node %}
            with:
              node-version: 16
          - run: npm ci
          - run: npm test

      publish-gpr:
        needs: build
        runs-on: ubuntu-latest
        permissions:
          packages: write
          contents: read
        steps:
          - uses: {% data reusables.actions.action-checkout %}
          - uses: {% data reusables.actions.action-setup-node %}
            with:
              node-version: 16
              registry-url: {% ifversion ghes or ghae %}https://npm.YOUR-HOSTNAME.com/{% else %}https://npm.pkg.github.com/{% endif %}
          - run: npm ci
          - run: npm publish
            env:
              NODE_AUTH_TOKEN: ${% raw %}{{secrets.GITHUB_TOKEN}}{% endraw %}
    ```
8. Сообщите NPM, в какой области и реестре следует публиковать пакеты, одним из следующих способов.
   - Добавьте файл конфигурации NPM для репозитория, создав в корневом каталоге файл `.npmrc` со следующим содержимым: {% raw %}
      ```shell
      @YOUR-USERNAME:registry=https://npm.pkg.github.com
      ```
      {% endraw %}
   - Измените файл `package.json` и укажите ключ `publishConfig`: {% raw %}
      ```shell
      "publishConfig": {
        "@<em>YOUR-USERNAME</em>:registry": "https://npm.pkg.github.com"
      }
      ```
      {% endraw %}
9. Зафиксируйте и отправьте изменения в {% data variables.product.prodname_dotcom %}.
    ```shell
    $ git add .github/workflows/release-package.yml
    # Also add the file you created or edited in the previous step.
    $ git add .npmrc or package.json
    $ git commit -m "workflow to publish package"
    $ git push
    ```
10.  Созданный рабочий процесс будет выполняться при каждом создании нового выпуска в репозитории. Если тесты пройдены, пакет будет опубликован в {% data variables.product.prodname_registry %}.
    
    Чтобы проверить это, перейдите на вкладку **Код** в репозитории и создайте новый выпуск. Дополнительные сведения см. в разделе [Управление выпусками в репозитории](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release).

## Просмотр опубликованного пакета

Вы можете просмотреть все опубликованные вами пакеты.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.navigate-to-packages %}

## Установка опубликованного пакета

Теперь, когда вы опубликовали пакет, его можно использовать в качестве зависимости в ваших проектах. Дополнительные сведения см. в разделе [Работа с реестром npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package).

## Дальнейшие действия

Базовый рабочий процесс, который вы только что добавили, запускается в любое время при создании нового выпуска в вашем репозитории. Но это только начало работы с {% data variables.product.prodname_registry %}. Вы можете публиковать свой пакет в нескольких реестрах с помощью одного рабочего процесса, активировать выполнение рабочего процесса при различных событиях, таких как объединенный запрос на вытягивание, управление контейнерами и многие другие.

Сочетание {% data variables.product.prodname_registry %} и {% data variables.product.prodname_actions %} помогает автоматизировать практически все аспекты процессов разработки приложений. Вы готовы начать работу? Ниже приведены некоторые полезные ресурсы для следующих шагов в {% data variables.product.prodname_registry %} и {% data variables.product.prodname_actions %}:

- [Изучение {% data variables.product.prodname_registry %}](/packages/learn-github-packages) — углубленное руководство по GitHub Packages
- [Изучение {% data variables.product.prodname_actions %}](/actions/learn-github-actions) — углубленное руководство по GitHub Actions
- [Работа с реестром {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry) — конкретные варианты использования и примеры
