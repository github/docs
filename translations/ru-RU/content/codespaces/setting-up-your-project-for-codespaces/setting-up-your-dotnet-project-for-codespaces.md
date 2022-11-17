---
title: Настройка проекта C# (.NET) для GitHub Codespaces
shortTitle: Setting up your C# (.NET) project
allowTitleToDifferFromFilename: true
intro: 'Начните работу с проектом C# (.NET) в {% data variables.product.prodname_github_codespaces %}, создав пользовательский контейнер разработки.'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-dotnet-project
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 10282aedf3bdb239fa238e546c2fc6280787a6a0
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158616'
---
## Введение

В этом руководстве показано, как настроить проект C# (.NET) {% data reusables.codespaces.setting-up-project-intro %}

### Предварительные требования

- Необходим существующий проект C# (.NET) в репозитории на {% data variables.product.prodname_dotcom_the_website %}. Если у вас нет проекта, воспользуйтесь этим руководством с таким примером: https://github.com/2percentsilk/dotnet-quickstart.
- Для вашей организации необходимо включить {% data variables.product.prodname_github_codespaces %}.

## Шаг 1. Открытие проекта в codespace

1. Под именем репозитория используйте раскрывающееся меню **кода {% octicon "code" aria-label="The code icon" %}** , а затем на вкладке **Codespaces** щелкните знак "плюс" ({% octicon "plus" aria-label="The plus icon" %}).

  ![Кнопка "Создать codespace"](/assets/images/help/codespaces/new-codespace-button.png)

При создании codespace проект создается на удаленной виртуальной машине, выделенной для вас. По умолчанию контейнер для codespace содержит множество языков и сред выполнения, включая .NET. Он также содержит общий набор средств, таких как git, wget, rsync, openssh и nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Шаг 2. Добавление конфигурации контейнера разработки в репозиторий из шаблона

Контейнер разработки по умолчанию для {% data variables.product.prodname_github_codespaces %} поставляется с последней версией .NET и предварительно установленными стандартными средствами. Однако рекомендуется настроить собственный контейнер разработки, чтобы включить все средства и скрипты, необходимые для проекта. Это обеспечит полностью воспроизводимую среду для всех пользователей {% data variables.product.prodname_github_codespaces %} в репозитории.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Для этого примера щелкните **C# (.NET)** . Если требуются дополнительные функции, можно выбрать любой контейнер, предназначенный для C# (.NET), или сочетание таких средств, таких как C# (.NET) и MS SQL.
  ![Выберите вариант C# (.NET) в списке](/assets/images/help/codespaces/add-dotnet-prebuilt-container.png)
1. Щелкните рекомендуемую версию .NET.
  ![Выбор версии .NET](/assets/images/help/codespaces/add-dotnet-version.png)
1. Подтвердите параметр добавления Node.js в настройку по умолчанию.
  ![Выбор "Добавить Node.js"](/assets/images/help/codespaces/dotnet-options.png) {% data reusables.codespaces.rebuild-command %}

### Анатомия контейнера разработки

Добавление шаблона контейнера разработки C# (.NET) добавляет папку `.devcontainer` в корень репозитория проекта со следующими файлами:

- `devcontainer.json`
- Dockerfile

В добавленном файле `devcontainer.json` определяется несколько свойств, описанных после примера.

#### devcontainer.json

```json
{
    "name": "C# (.NET)",
    "build": {
        "dockerfile": "Dockerfile",
        "args": {
            // Update 'VARIANT' to pick a .NET Core version: 2.1, 3.1, 5.0
            "VARIANT": "5.0",
            // Options
            "INSTALL_NODE": "true",
            "NODE_VERSION": "lts/*",
            "INSTALL_AZURE_CLI": "false"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "ms-dotnettools.csharp"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [5000, 5001],

    // [Optional] To reuse of your local HTTPS dev cert:
    //
    // 1. Export it locally using this command:
    //    * Windows PowerShell:
    //        dotnet dev-certs https --trust; dotnet dev-certs https -ep "$env:USERPROFILE/.aspnet/https/aspnetapp.pfx" -p "SecurePwdGoesHere"
    //    * macOS/Linux terminal:
    //        dotnet dev-certs https --trust; dotnet dev-certs https -ep "${HOME}/.aspnet/https/aspnetapp.pfx" -p "SecurePwdGoesHere"
    //
    // 2. Uncomment these 'remoteEnv' lines:
    //    "remoteEnv": {
    //        "ASPNETCORE_Kestrel__Certificates__Default__Password": "SecurePwdGoesHere",
    //        "ASPNETCORE_Kestrel__Certificates__Default__Path": "/home/vscode/.aspnet/https/aspnetapp.pfx",
    //    },
    //
    // 3. Start the container.
    //
    // 4. Drag ~/.aspnet/https/aspnetapp.pfx into the root of the file explorer.
    //
    // 5. Open a terminal in VS Code and run "mkdir -p /home/vscode/.aspnet/https && mv aspnetapp.pfx /home/vscode/.aspnet/https".
    //

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "dotnet restore",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **name** — имя контейнера разработки может быть любым, это просто имя по умолчанию.
- **build** — свойства сборки.
  - **dockerfile** — в объекте `build` `dockerfile` содержит путь к Dockerfile, который был также добавлен из шаблона.
  - **args**
    - **variant**: этот файл содержит только один аргумент сборки — версия .NET Core, которую нужно использовать.
- **settings** — параметры {% data variables.product.prodname_vscode %}.
  - **terminal.integrated.shell.linux** — хотя bash используется здесь по умолчанию, изменив это, можно использовать и другие оболочки терминала.
- **extensions** — расширения, включенные по умолчанию.
  - **ms-dotnettools.csharp** — расширение Microsoft C# обеспечивает расширенную поддержку разработки в C#, включая такие функции, как IntelliSense, анализ кода, отладка, навигация по коду, форматирование кода, рефакторинг, обозреватель переменных, обозреватель тестов и многое другое.
- **forwardPorts** — все порты, перечисленные здесь, будут переадресованы автоматически. Дополнительные сведения см. в разделе [Переадресация портов в кодовом пространстве](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).
- **postCreateCommand** — используйте это свойство для выполнения команд, которые не определены в Dockerfile, после создания codespace.
- **remoteUser** — по умолчанию вы работаете в качестве пользователя vscode, но при необходимости его можно задать в качестве корневого.

#### Dockerfile

```bash
# [Choice] .NET version: 5.0, 3.1, 2.1
ARG VARIANT="5.0"
FROM mcr.microsoft.com/vscode/devcontainers/dotnetcore:0-${VARIANT}

# [Option] Install Node.js
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Option] Install Azure CLI
ARG INSTALL_AZURE_CLI="false"
COPY library-scripts/azcli-debian.sh /tmp/library-scripts/
RUN if [ "$INSTALL_AZURE_CLI" = "true" ]; then bash /tmp/library-scripts/azcli-debian.sh; fi \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/* /tmp/library-scripts

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Dockerfile можно использовать для добавления дополнительных слоев контейнера, чтобы указать пакеты ОС, версии узлов или глобальные пакеты, которые нужно включить в контейнер.

## Шаг 3. Изменение файла devcontainer.json

После добавления конфигурации контейнера разработки и получения базового представления о том, как все устроено, теперь можно внести изменения для дальнейшей настройки среды. В этом примере нужно добавить свойства для установки расширений и зависимостей проекта при запуске codespace.

1. В обозревателе выберите из дерева файл `devcontainer.json`, чтобы открыть его. Возможно, понадобится развернуть папку `.devcontainer`, чтобы увидеть его.

   ![Файл devcontainer.json в обозревателе](/assets/images/help/codespaces/devcontainers-options.png)

2. Обновите список `extensions` в файле `devcontainer.json`, чтобы добавить несколько расширений, полезных при работе с проектом.

   ```json{:copy}
   "extensions": [
          "ms-dotnettools.csharp",
          "streetsidesoftware.code-spell-checker",
      ],
   ```

3. Раскомментируйте `postCreateCommand` для восстановления зависимостей в процессе установки codespace.

   ```json{:copy}
   // Use 'postCreateCommand' to run commands after the container is created.
   "postCreateCommand": "dotnet restore",
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. Проверьте, успешно ли применены изменения, убедившись, что расширение "Проверка орфографии кода" установлено.

    ![Список расширений](/assets/images/help/codespaces/dotnet-extensions.png)

## Шаг 4. Запуск приложения

В предыдущем разделе вы использовали `postCreateCommand` для установки набора пакетов с помощью команды `dotnet restore`. После установки зависимостей можно запустить приложение.

1. Запустите приложение, нажав клавишу `F5` или введя `dotnet watch run` в терминале.

2. При запуске проекта в правом нижнем углу {% data variables.product.prodname_vscode_shortname %} появится всплывающее сообщение с запросом на подключение к порту, который используется проектом.

   ![Всплывающее уведомление о перенаправлении портов](/assets/images/help/codespaces/python-port-forwarding.png)

## Шаг 5. Фиксация изменений

{% data reusables.codespaces.committing-link-to-procedure %}

## Дальнейшие действия

Теперь вы должны быть готовы приступить к разработке проекта C# (.NET) в {% data variables.product.prodname_github_codespaces %}. Ниже приведены дополнительные ресурсы для более сложных сценариев.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
