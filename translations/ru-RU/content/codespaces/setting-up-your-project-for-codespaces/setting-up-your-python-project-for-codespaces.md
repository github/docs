---
title: Настройка проекта Python для GitHub Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Setting up your Python project
intro: 'Начните работу с проектом Python в {% data variables.product.prodname_github_codespaces %}, создав пользовательский контейнер разработки.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-python-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Python
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 2d9c627907f447a3efd873fceba963b899b57c39
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159850'
---
## Введение

В этом руководстве показано, как настроить проект Python {% data reusables.codespaces.setting-up-project-intro %}

### Предварительные требования

- Необходим существующий проект Python в репозитории на {% data variables.product.prodname_dotcom_the_website %}. Если у вас нет проекта, воспользуйтесь этим руководством с таким примером: https://github.com/2percentsilk/python-quickstart
- Для вашей организации необходимо включить {% data variables.product.prodname_github_codespaces %}.

## Шаг 1. Открытие проекта в codespace

1. Под именем репозитория используйте раскрывающееся меню **кода {% octicon "code" aria-label="The code icon" %}** , а затем на вкладке **Codespaces** щелкните знак "плюс" ({% octicon "plus" aria-label="The plus icon" %}).

  ![Кнопка "Создать codespace"](/assets/images/help/codespaces/new-codespace-button.png)

При создании codespace проект создается на удаленной виртуальной машине, выделенной для вас. По умолчанию контейнер для codespace содержит множество языков и сред выполнения, включая Node.js, JavaScript, Typescript, nvm, npm и yarn. Он также содержит общий набор средств, таких как GIT, wget, rsync, openssh и nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Шаг 2. Добавление конфигурации контейнера разработки в репозиторий из шаблона

Контейнер разработки по умолчанию в {% data variables.product.prodname_github_codespaces %} поставляется с последней версией Python, диспетчерами пакетов (pip, Miniconda) и другими предварительно установленными стандартными средствами. Однако рекомендуется настроить собственный контейнер разработки, чтобы включить все средства и скрипты, необходимые для проекта. Это обеспечит полностью воспроизводимую среду для всех пользователей {% data variables.product.prodname_github_codespaces %} в репозитории.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Для этого примера щелкните **Python 3**. Если требуются дополнительные функции, можно выбрать любой контейнер, предназначенный для Python, или сочетание таких средств, например Python 3 и PostgreSQL.
  ![Выберите вариант Python в списке](/assets/images/help/codespaces/add-python-prebuilt-container.png)
1. Щелкните рекомендуемую версию Python.
  ![Выбор версии Python](/assets/images/help/codespaces/add-python-version.png)
1. Подтвердите параметр добавления Node.js в настройку по умолчанию.
  ![Выбор "Добавить Node.js"](/assets/images/help/codespaces/add-nodejs-selection.png) {% data reusables.codespaces.rebuild-command %}

### Анатомия контейнера разработки

При добавлении шаблона контейнера разработки Python в корень репозитория проекта добавляется каталог `.devcontainer` со следующими файлами:

- `devcontainer.json`
- Dockerfile

В добавленном файле `devcontainer.json` определяется несколько свойств, описанных после примера.

#### devcontainer.json

```json
{
    "name": "Python 3",
    "build": {
        "dockerfile": "Dockerfile",
        "context": "..",
        "args": {
            // Update 'VARIANT' to pick a Python version: 3, 3.6, 3.7, 3.8, 3.9
            "VARIANT": "3",
            // Options
            "INSTALL_NODE": "true",
            "NODE_VERSION": "lts/*"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash",
        "python.pythonPath": "/usr/local/bin/python",
        "python.linting.enabled": true,
        "python.linting.pylintEnabled": true,
        "python.formatting.autopep8Path": "/usr/local/py-utils/bin/autopep8",
        "python.formatting.blackPath": "/usr/local/py-utils/bin/black",
        "python.formatting.yapfPath": "/usr/local/py-utils/bin/yapf",
        "python.linting.banditPath": "/usr/local/py-utils/bin/bandit",
        "python.linting.flake8Path": "/usr/local/py-utils/bin/flake8",
        "python.linting.mypyPath": "/usr/local/py-utils/bin/mypy",
        "python.linting.pycodestylePath": "/usr/local/py-utils/bin/pycodestyle",
        "python.linting.pydocstylePath": "/usr/local/py-utils/bin/pydocstyle",
        "python.linting.pylintPath": "/usr/local/py-utils/bin/pylint"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "ms-python.python"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "pip3 install --user -r requirements.txt",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **name** — имя контейнера разработки может быть любым, это просто имя по умолчанию.
- **build** — свойства сборки.
  - **dockerfile** — в объекте `build` `dockerfile` содержит путь к Dockerfile, который был также добавлен из шаблона.
  - **args**
    - **variant** — этот файл содержит только один аргумент сборки, а именно версию узла, передаваемую в Dockerfile.
- **settings** — параметры {% data variables.product.prodname_vscode %}.
  - **terminal.integrated.shell.linux** — хотя bash используется здесь по умолчанию, изменив это, можно использовать и другие оболочки терминала.
- **extensions** — расширения, включенные по умолчанию.
  - **ms-python.python** — расширение Microsoft Python обеспечивает расширенную поддержку языка Python (для всех активно поддерживаемых версий языка начиная с 3.6), включая такие функции, как IntelliSense, анализ кода, отладка, навигация по коду, форматирование кода, рефакторинг, обозреватель переменных, обозреватель тестов и многое другое.
- **forwardPorts** — все порты, перечисленные здесь, переадресовываются автоматически. Дополнительные сведения см. в разделе [Перенаправление портов в пространстве кода](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).
- **postCreateCommand** — используйте это свойство для выполнения команд, которые не определены в Dockerfile, например `pip3 install -r requirements`, после создания codespace.
- **remoteUser** — по умолчанию вы работаете в качестве пользователя `vscode`, но при необходимости можно задать `root`.

#### Dockerfile

```bash
# [Choice] Python version: 3, 3.9, 3.8, 3.7, 3.6
ARG VARIANT="3"
FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}

# [Option] Install Node.js
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] If your pip requirements rarely change, uncomment this section to add them to the image.
# COPY requirements.txt /tmp/pip-tmp/
# RUN pip3 --disable-pip-version-check --no-cache-dir install -r /tmp/pip-tmp/requirements.txt \
#    && rm -rf /tmp/pip-tmp

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Dockerfile можно использовать для добавления дополнительных слоев контейнера, чтобы указать пакеты ОС, версии узлов или глобальные пакеты, которые нужно включить в контейнер.

## Шаг 3. Изменение файла devcontainer.json

После добавления конфигурации контейнера разработки и получения базового представления о том, как все устроено, теперь можно внести изменения для дальнейшей настройки среды. В этом примере вы добавите свойства для установки расширений и зависимостей проекта при запуске codespace.

1. В обозревателе разверните папку `.devcontainer` и выберите в дереве файл `devcontainer.json`, чтобы открыть его.

  ![Файл devcontainer.json в обозревателе](/assets/images/help/codespaces/devcontainers-options.png)

2. Обновите список `extensions` в файле `devcontainer.json`, чтобы добавить несколько расширений, полезных при работе с проектом.

  ```json{:copy}
  "extensions": [
          "ms-python.python",
          "cstrap.flask-snippets",
          "streetsidesoftware.code-spell-checker"
      ],
  ```

3. Раскомментируйте `postCreateCommand`, чтобы автоматически установить требуемые компоненты в процессе настройки codespace.

  ```json{:copy}
  // Use 'postCreateCommand' to run commands after the container is created.
  "postCreateCommand": "pip3 install --user -r requirements.txt",
  ```

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. Проверьте, успешно ли применены изменения. Для этого убедитесь в том, что были установлены расширения "Проверка орфографии в кода" и "Фрагмент кода Flask".

   ![Список расширений](/assets/images/help/codespaces/python-extensions.png)

## Шаг 4. Запуск приложения

В предыдущем разделе вы использовали `postCreateCommand` для установки набора пакетов с помощью pip3. После установки зависимостей можно запустить приложение.

1. Запустите приложение, нажав клавишу `F5` или введя `python -m flask run` в терминале codespace.

2. При запуске проекта в правом нижнем углу {% data variables.product.prodname_vscode_shortname %} появится всплывающее сообщение с запросом на подключение к порту, который используется проектом.

  ![Всплывающее уведомление о перенаправлении портов](/assets/images/help/codespaces/python-port-forwarding.png)

## Шаг 5. Фиксация изменений

{% data reusables.codespaces.committing-link-to-procedure %}

## Дальнейшие действия

Теперь вы должны быть готовы приступить к разработке проекта Python в {% data variables.product.prodname_github_codespaces %}. Ниже приведены дополнительные ресурсы для более сложных сценариев.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
