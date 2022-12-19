---
title: Настройка проекта Node.js для GitHub Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Setting up your Node.js project
intro: 'Начните работу с проектом JavaScript, Node.js или TypeScript в {% data variables.product.prodname_github_codespaces %}, создав пользовательский контейнер разработки.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-nodejs-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Node
  - JavaScript
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 19c29f7d3c8110d1c671a9af46227a399a467800
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159906'
---
## Введение

В этом руководстве показано, как настроить проект JavaScript, Node.js или TypeScript {% data reusables.codespaces.setting-up-project-intro %}

### Предварительные требования

- Необходим существующий проект JavaScript, Node.js или TypeScript в репозитории на {% data variables.product.prodname_dotcom_the_website %}. Если у вас нет проекта, воспользуйтесь этим руководством с таким примером: https://github.com/microsoft/vscode-remote-try-node
- Для вашей организации необходимо включить {% data variables.product.prodname_github_codespaces %}.

## Шаг 1. Открытие проекта в codespace

1. Под именем репозитория используйте раскрывающееся меню **кода {% octicon "code" aria-label="The code icon" %}** , а затем на вкладке **Codespaces** щелкните знак "плюс" ({% octicon "plus" aria-label="The plus icon" %}).

   ![Кнопка "Создать codespace"](/assets/images/help/codespaces/new-codespace-button.png)

При создании codespace проект создается на удаленной виртуальной машине, выделенной для вас. По умолчанию контейнер для codespace содержит множество языков и сред выполнения, включая Node.js, JavaScript, Typescript, nvm, npm и yarn. Он также содержит общий набор средств, таких как GIT, wget, rsync, openssh и nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Шаг 2. Добавление конфигурации контейнера разработки в репозиторий из шаблона

Контейнер разработки по умолчанию или контейнер разработки для {% data variables.product.prodname_github_codespaces %} будет изначально поддерживать выполнение проектов Node.js, таких как [vscode-remote-try-node](https://github.com/microsoft/vscode-remote-try-node). Однако рекомендуется настроить собственный контейнер разработки, так как это позволяет определить средства и скрипты, необходимые для проекта. Это обеспечит полностью воспроизводимую среду для всех пользователей {% data variables.product.prodname_github_codespaces %} в репозитории.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Для этого примера щелкните **Node.js**.  Если требуются дополнительные функции, можно выбрать любой контейнер, предназначенный для Node, или сочетание таких средств, например Node и MongoDB.

   ![Выберите вариант Node в списке](/assets/images/help/codespaces/add-node-prebuilt-container.png)

1. Щелкните рекомендуемую версию Node.js.

   ![Выбор версии Node.js](/assets/images/help/codespaces/add-node-version.png)

{% data reusables.codespaces.rebuild-command %}

### Структура контейнера разработки

При добавлении шаблона контейнера разработки Node.js в корень репозитория проекта добавляется каталог `.devcontainer` со следующими файлами:

- `devcontainer.json`
- Dockerfile

В добавленном файле `devcontainer.json` определяется несколько свойств, описанных после примера.

#### devcontainer.json

```json
// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.162.0/containers/javascript-node
{
    "name": "Node.js",
    "build": {
        "dockerfile": "Dockerfile",
        // Update 'VARIANT' to pick a Node version: 10, 12, 14
        "args": { "VARIANT": "14" }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "dbaeumer.vscode-eslint"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "yarn install",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "node"
}
```

- **name** — имя контейнера разработки может быть любым, это просто имя по умолчанию.
- **build** — свойства сборки.
  - **dockerfile** — в объекте `build` `dockerfile` содержит путь к Dockerfile, который был также добавлен из шаблона.
  - **args**
    - **variant** — этот файл содержит только один аргумент сборки, а именно версию узла, передаваемую в Dockerfile.
- **settings** — параметры {% data variables.product.prodname_vscode %}, которые можно задать.
  - **terminal.integrated.shell.linux** — по умолчанию используется bash, но это свойство можно изменить, если понадобится использовать другие оболочки терминала.
- **extensions** — расширения, включенные по умолчанию.
  - **dbaeumer.vscode-eslint** — ES lint является отличным расширением для анализа кода, но для JavaScript есть ряд отличных расширений из Marketplace, которые также можно включить.
- **forwardPorts** — все порты, перечисленные здесь, переадресовываются автоматически. Дополнительные сведения см. в разделе [Переадресация портов в кодовом пространстве](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).
- **postCreateCommand** — используйте это свойство для выполнения команд, которые не определены в Dockerfile, после создания codespace.
- **remoteUser** — по умолчанию вы работаете в качестве пользователя vscode, но при необходимости его можно задать в качестве корневого.

#### Dockerfile

```bash
# [Choice] Node.js version: 14, 12, 10
ARG VARIANT="14-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"
```

Dockerfile можно использовать для добавления дополнительных слоев контейнера, чтобы указать пакеты ОС, версии узлов или глобальные пакеты, которые нужно включить в контейнер.

## Шаг 3. Изменение файла devcontainer.json

После добавления конфигурации контейнера разработки и получения базового представления о том, как все устроено, теперь можно внести изменения для дальнейшей настройки среды. В этом примере вы добавите свойства, чтобы установить npm при запуске codespace и сделать список портов внутри контейнера доступным локально.

1. В обозревателе выберите из дерева файл `devcontainer.json`, чтобы открыть его. Возможно, понадобится развернуть папку `.devcontainer`, чтобы увидеть его.

   ![Файл devcontainer.json в обозревателе](/assets/images/help/codespaces/devcontainers-options.png)

2. Добавьте в файл `devcontainer.json` после `extensions` приведенные ниже строки.

   ```json{:copy}
   "postCreateCommand": "npm install",
   "forwardPorts": [4000],
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

## Шаг 4. Запуск приложения

В предыдущем разделе вы использовали `postCreateCommand` для установки набора пакетов с помощью npm. Теперь его можно использовать для запуска приложения с помощью npm.

1. Выполните команду start в терминале.`npm start`

   ![npm start в терминале](/assets/images/help/codespaces/codespaces-npmstart.png)

2. При запуске проекта в правом нижнем углу {% data variables.product.prodname_vscode_shortname %} появится всплывающее сообщение с запросом на подключение к порту, который используется проектом.

   ![Всплывающее уведомление о перенаправлении портов](/assets/images/help/codespaces/codespaces-port-toast.png)

## Шаг 5. Фиксация изменений

{% data reusables.codespaces.committing-link-to-procedure %}

## Дальнейшие действия

Теперь вы должны быть готовы приступить к разработке проекта JavaScript в {% data variables.product.prodname_github_codespaces %}. Ниже приведены дополнительные ресурсы для более сложных сценариев.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
