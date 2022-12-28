---
title: Настройка проекта Java для GitHub Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Setting up with your Java project
intro: 'Начните работу с проектом Java в {% data variables.product.prodname_github_codespaces %}, создав пользовательский контейнер разработки.'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-java-project-in-codespaces
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: b861744483f61bc01e8069188c1ce6298411d57e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158768'
---
## Введение

В этом руководстве показано, как настроить проект Java {% data reusables.codespaces.setting-up-project-intro %}

### Предварительные требования

- Необходим существующий проект Java в репозитории на {% data variables.product.prodname_dotcom_the_website %}. Если у вас нет проекта, воспользуйтесь этим руководством с таким примером: https://github.com/microsoft/vscode-remote-try-java
- Для вашей организации необходимо включить {% data variables.product.prodname_github_codespaces %}.

## Шаг 1. Открытие проекта в codespace

1. Под именем репозитория используйте раскрывающееся меню **кода {% octicon "code" aria-label="The code icon" %}** , а затем на вкладке **Codespaces** щелкните знак "плюс" ({% octicon "plus" aria-label="The plus icon" %}).

  ![Кнопка "Создать codespace"](/assets/images/help/codespaces/new-codespace-button.png)

При создании codespace проект создается на удаленной виртуальной машине, выделенной для вас. По умолчанию контейнер для codespace содержит множество языков и сред выполнения, включая Java, nvm, npm и Yarn. Он также включает набор часто используемых средств, таких как git, wget, rsync, openssh и nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Шаг 2. Добавление конфигурации контейнера разработки в репозиторий из шаблона

Контейнер разработки по умолчанию в {% data variables.product.prodname_github_codespaces %} поставляется с последней версией Java, диспетчерами пакетов (Maven, Gradle) и другими предварительно установленными стандартными средствами. Однако рекомендуется настроить собственный контейнер разработки, чтобы включить все средства и скрипты, необходимые для проекта. Это обеспечит полностью воспроизводимую среду для всех пользователей {% data variables.product.prodname_github_codespaces %} в репозитории.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Для этого примера щелкните **Java**. На практике можно выбрать любой контейнер, относящийся к Java, или сочетание таких средств, как Java и Функции Azure.
  ![Выберите вариант Java в списке](/assets/images/help/codespaces/add-java-prebuilt-container.png)
1. Щелкните рекомендуемую версию Java.
  ![Выбор версии Java](/assets/images/help/codespaces/add-java-version.png) {% data reusables.codespaces.rebuild-command %}

### Анатомия контейнера разработки

При добавлении шаблона контейнера разработки Java в корень репозитория проекта добавляется каталог `.devcontainer` со следующими файлами:

- `devcontainer.json`
- Dockerfile

В добавленном файле `devcontainer.json` определяется несколько свойств, описанных после примера.

#### devcontainer.json

```json
// For format details, see https://aka.ms/vscode-remote/devcontainer.json or this file's README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.159.0/containers/java
{
    "name": "Java",
    "build": {
        "dockerfile": "Dockerfile",
        "args": {
            // Update the VARIANT arg to pick a Java version: 11, 14
            "VARIANT": "11",
            // Options
            "INSTALL_MAVEN": "true",
            "INSTALL_GRADLE": "false",
            "INSTALL_NODE": "false",
            "NODE_VERSION": "lts/*"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash",
        "java.home": "/docker-java-home",
        "maven.executable.path": "/usr/local/sdkman/candidates/maven/current/bin/mvn"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "vscjava.vscode-java-pack"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "java -version",

    // Uncomment to connect as a non-root user. See https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **name** — имя контейнера разработки может быть любым, это просто имя по умолчанию.
- **build** — свойства сборки.
  - **dockerfile** — в объекте `build` `dockerfile` содержит путь к Dockerfile, который был также добавлен из шаблона.
  - **args**
    - **variant** — этот файл содержит только один аргумент сборки, а именно версию Java, передаваемую в Dockerfile.
- **settings** — параметры {% data variables.product.prodname_vscode %}, которые можно задать.
  - **terminal.integrated.shell.linux** — по умолчанию используется bash, но это свойство можно изменить, если понадобится использовать другие оболочки терминала.
- **extensions** — расширения, включенные по умолчанию.
  - **vscjava.vscode-java-pack** — пакет расширений Java предоставляет популярные расширения для начала разработки.
- **forwardPorts** — все порты, перечисленные здесь, переадресовываются автоматически. Дополнительные сведения см. в разделе [Переадресация портов в кодовом пространстве](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).
- **postCreateCommand** — используйте это свойство для выполнения команд, которые не определены в Dockerfile, после создания codespace.
- **remoteUser** — по умолчанию вы работаете в качестве пользователя `vscode`, но при необходимости можно задать `root`.

#### Dockerfile

```bash
# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.159.0/containers/java/.devcontainer/base.Dockerfile
ARG VARIANT="14"
FROM mcr.microsoft.com/vscode/devcontainers/java:0-${VARIANT}

# [Optional] Install Maven or Gradle
ARG INSTALL_MAVEN="false"
ARG MAVEN_VERSION=3.6.3
ARG INSTALL_GRADLE="false"
ARG GRADLE_VERSION=5.4.1
RUN if [ "${INSTALL_MAVEN}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install maven \"${MAVEN_VERSION}\""; fi \
    && if [ "${INSTALL_GRADLE}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install gradle \"${GRADLE_VERSION}\""; fi

# [Optional] Install a version of Node.js using nvm for front end dev
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "source /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Dockerfile можно использовать для добавления дополнительных слоев контейнера, чтобы указать пакеты ОС, версии Java или глобальные пакеты, которые нужно включить в контейнер.

## Шаг 3. Изменение файла devcontainer.json

После добавления конфигурации контейнера разработки и получения базового представления о том, как все устроено, теперь можно внести изменения для дальнейшей настройки среды. В этом примере нужно добавить свойства для установки расширений и зависимостей проекта при запуске codespace.

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

1. Запустите приложение, нажав клавишу `F5`.

2. При запуске проекта в правом нижнем углу {% data variables.product.prodname_vscode_shortname %} появится всплывающее сообщение с запросом на подключение к порту, который используется проектом.

   ![Всплывающее уведомление о перенаправлении портов](/assets/images/help/codespaces/codespaces-port-toast.png)

## Шаг 5. Фиксация изменений

{% data reusables.codespaces.committing-link-to-procedure %}

## Дальнейшие действия

Теперь вы должны быть готовы приступить к разработке проекта Java в {% data variables.product.prodname_github_codespaces %}. Ниже приведены дополнительные ресурсы для более сложных сценариев.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
