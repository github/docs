---
title: Основные сведения о контейнерах разработки
intro: 'При работе в codespace среда, в которой вы работаете, создается с помощью контейнера разработки, размещенного на виртуальной машине.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
  - /codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project
  - /github/developing-online-with-codespaces/configuring-codespaces-for-your-project
  - /codespaces/customizing-your-codespace/configuring-codespaces-for-your-project
  - /codespaces/setting-up-your-project-for-codespaces/configuring-codespaces-for-your-project
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
ms.openlocfilehash: 646f8068e68040f1d12f8155c3ba9e2bdb84c2ca
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185094'
---
## Сведения о контейнерах разработки

Контейнеры разработки или контейнеры разработки — это контейнеры Docker, специально настроенные для предоставления полнофункциональный среды разработки. Каждый раз, когда вы работаете в среде codespace, вы используете контейнер разработки на виртуальной машине.

Можно настроить контейнер разработки для репозитория, чтобы codespace, созданные для этого репозитория, дали вам специализированную среду разработки со всеми инструментами и средами выполнения, которые необходимо использовать для конкретного проекта. Если вы не определили конфигурацию в репозитории, {% data variables.product.prodname_github_codespaces %} использует конфигурацию по умолчанию, которая содержит множество общих средств, которые может потребоваться команде для разработки проекта. Дополнительные сведения см. в разделе [Использование конфигурации контейнера разработки по умолчанию](#using-the-default-dev-container-configuration).

Файлы конфигурации для контейнера разработки содержатся в каталоге `.devcontainer` в репозитории. Для добавления файлов конфигурации можно использовать {% data variables.product.prodname_vscode %}. Можно выбрать одну из стандартных конфигураций для различных типов проектов. Их можно использовать без дополнительной настройки, либо можно изменить конфигурации для более точной настройки среды, которую они создают. Дополнительные сведения см. в разделе [Использование предопределенной конфигурации контейнера разработки](#using-a-predefined-dev-container-configuration).

Кроме того, можно добавлять собственные пользовательские файлы конфигурации. Дополнительные сведения см. в разделе [Создание настраиваемой конфигурации контейнера разработки](#creating-a-custom-dev-container-configuration).

Можно определить одну конфигурацию контейнера разработки для репозитория, разные конфигурации для разных ветвей или несколько конфигураций. При наличии нескольких конфигураций пользователи могут выбрать предпочтительную конфигурацию при создании среды codespace. Это особенно полезно для больших репозиториев, содержащих исходный код на разных языках программирования или для различных проектов. Можно создать набор конфигураций, которые позволяют разным командам работать в codespace, настроенном соответствующим образом для выполняемой ими работы.

При создании codespace на основе шаблона можно начать с одного или нескольких файлов конфигурации контейнера разработки в рабочей области. Чтобы дополнительно настроить среду, можно добавить или удалить параметры из этих файлов и перестроить контейнер, чтобы применить изменения к пространству кода, в которой вы работаете. Если вы публикуете codespace в репозитории на {% data variables.product.product_name %}, все пространства кода, созданные из этого репозитория, будут совместно использовать определенную конфигурацию. Дополнительные сведения см. в разделах [Применение изменений конфигурации к codespace](#applying-configuration-changes-to-a-codespace) и [Создание codespace на основе шаблона](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-to-a-remote-repository).

### devcontainer.json

Основным файлом в конфигурации контейнера разработки является файл `devcontainer.json`. Этот файл можно использовать для определения сред codespace, созданных для репозитория. Содержимое этого файла определяет контейнер разработки, который может включать платформы, средства, расширения и перенаправление портов. Файл `devcontainer.json` обычно содержит ссылку на файл Dockerfile, который обычно находится рядом с файлом `devcontainer.json`.

Если вы создаете пространство кода из репозитория без `devcontainer.json` файла или начинаете с пустого шаблона {% data variables.product.company_short %}, используется конфигурация контейнера разработки по умолчанию. Дополнительные сведения см. в разделе [Использование конфигурации контейнера разработки по умолчанию](#using-the-default-dev-container-configuration).

Файл `devcontainer.json` обычно находится в каталоге `.devcontainer` репозитория. Кроме того, его можно расположить непосредственно в корне репозитория, в этом случае имя файла должно начинаться с точки: `.devcontainer.json`. 

Если вы хотите выбирать конфигурации контейнеров разработки в репозитории, все альтернативы файлу `.devcontainer/devcontainer.json` (или `.devcontainer.json`) должны находиться в собственном подкаталоге по пути `.devcontainer/SUBDIRECTORY/devcontainer.json`. Например, вы можете иметь на выбор две конфигурации: 
* `.devcontainer/database-dev/devcontainer.json` 
* `.devcontainer/gui-dev/devcontainer.json`

При наличии нескольких файлов `devcontainer.json` в репозитории каждый codespace создается только из одной из конфигураций. Параметры нельзя импортировать или наследовать между файлами `devcontainer.json`. Если файл `devcontainer.json` в настраиваемом подкаталоге содержит зависимые файлы, такие как Dockerfile или сценарии, выполняемые командами в файле `devcontainer.json`, рекомендуется располагать эти файлы в этом же подкаталоге.

Сведения о том, как выбрать предпочтительную конфигурацию контейнера разработки при создании codespace, см. в разделе [Создание codespace для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

{% data reusables.codespaces.more-info-devcontainer %}

#### Использование файла devcontainer.json

Рекомендуется рассматривать файл `devcontainer.json` как предоставление "настройки", а не "персонализации". Следует включать только те вещи, которые всем пользователям, работающим с вашей базой кода, необходимы в качестве стандартных элементов среды разработки, а не как личные предпочтения. Такие вещи, как анализатор кода, полезно стандартизировать и требовать, чтобы они были установлены у всех, поэтому они хорошо подходят для включения в файл `devcontainer.json`. Такие элементы, как декораторы пользовательского интерфейса или темы, — это личный выбор каждого, и их не следует помещать в файл `devcontainer.json`.

Вы можете персонализировать свою среду codespace с помощью файлов с точкой и синхронизации параметров. Дополнительные сведения см. в разделе [Персонализация {% data variables.product.prodname_github_codespaces %} для учетной записи](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account).

### Dockerfile

Dockerfile можно добавить как часть конфигурации контейнера разработки. 

Dockerfile — это текстовый файл с инструкциями, необходимыми для создания образа контейнера Docker. Этот образ используется для создания контейнера разработки каждый раз, когда кто-то создает codespace с помощью файла `devcontainer.json`, который ссылается на этот файл Dockerfile. Инструкции в Dockerfile обычно начинаются со ссылки на родительский образ, на котором будет основан новый образ. За этим следуют команды, которые выполняются в процессе создания образа, например для установки пакетов программного обеспечения.

Файл Dockerfile для контейнера разработки обычно находится в папке `.devcontainer` вместе с файлом `devcontainer.json`, который на него ссылается. 

{% note %}

**Примечание.** В качестве альтернативы использованию Dockerfile можно использовать свойство `image` в файле `devcontainer.json` для ссылки непосредственно на существующий образ, который вы хотите использовать. Указанный здесь образ должен быть разрешен любой заданной политикой образов организации. Дополнительные сведения см. в разделе [Ограничение базового образа для codespace.](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces) Если ни файл Dockerfile ни образ не найдены, используется образ контейнера по умолчанию. Дополнительные сведения см. в разделе [Использование конфигурации контейнера разработки по умолчанию](#using-the-default-dev-container-configuration).

{% endnote %}

#### Простой пример файла Dockerfile

В следующем примере используются четыре инструкции:

`ARG` определяет переменную времени сборки.

`FROM` указывает родительский образ, на котором будет основан создаваемый образ Docker.

`COPY` копирует файл и добавляет его в файловую систему. 

`RUN` обновляет списки пакетов и запускает сценарий. Вы также можете использовать инструкцию `RUN` для установки программного обеспечения, как показано в комментариях. Чтобы выполнить несколько команд, используйте оператор `&&` для объединения команд в одну инструкцию `RUN`.

```Dockerfile{:copy}
ARG VARIANT="16-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

COPY library-scripts/github-debian.sh /tmp/library-scripts/
RUN apt-get update && bash /tmp/library-scripts/github-debian.sh
```

Дополнительные сведения об инструкциях в файле Dockerfile см. в [Справочнике по Dockerfile](https://docs.docker.com/engine/reference/builder) в документации по Docker.

#### Использование файла Dockerfile

Чтобы использовать файла Dockerfile в рамках конфигурации контейнера разработки, необходимо сделать ссылку на него в файле `devcontainer.json` с помощью свойства `dockerfile`.

```json{:copy}
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

Если вы хотите использовать существующую оркестрацию контейнеров в контейнере разработки, доступны различные параметры. Дополнительные сведения см. в разделе "Параметры оркестрации" [статьи Спецификация](https://containers.dev/implementors/spec/#orchestration-options) на веб-сайте "Контейнеры разработки".

## Использование конфигурации контейнера разработки по умолчанию

Если вы не определили конфигурацию в репозитории, {% data variables.product.prodname_dotcom %} создает codespace с помощью образа Linux по умолчанию. Этот образ Linux включает ряд версий среды выполнения для популярных языков, таких как Python, Node, PHP, Java, Go, C++, Ruby и .NET Core/C#. Используются последние или LTS-выпуски этих языков. Существуют также средства для поддержки обработки и анализа данных и машинного обучения, таких как JupyterLab и Conda. Этот образ также включает другие средства разработчика и служебные программы, такие как Git, GitHub CLI, yarn, openssh и vim. Чтобы просмотреть список всех языков, сред выполнения и средств, которые включены, используйте команду `devcontainer-info content-url` в терминале codespace и перейдите по URL-адресу, который выведет команда.

Сведения о том, что входит в образ Linux по умолчанию, см. в репозитории [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal) . 

Конфигурация по умолчанию является хорошим вариантом, если вы работаете над небольшим проектом, использующим языки и средства, которые предоставляет {% data variables.product.prodname_github_codespaces %}.

## Использование предопределенной конфигурации контейнера разработки

Если вы используете {% data variables.product.prodname_codespaces %} в {% data variables.product.prodname_vscode %} или в веб-браузере, вы можете создать конфигурацию контейнера разработки для репозитория, выбрав из списка предопределенных конфигураций. Эти конфигурации предоставляют общие параметры для конкретных типов проектов и помогут вам быстро приступить к работе с конфигурацией, которая уже имеет соответствующие параметры контейнера, параметры {% data variables.product.prodname_vscode %} и расширения {% data variables.product.prodname_vscode %}, которые необходимо установить.

Использование предопределенной конфигурации — это отличная идея, если требуется дополнительная расширяемость. Вы также можете начать с предопределенной конфигурации и изменять ее по мере необходимости в процессе развития проекта. Дополнительные сведения об определениях предопределенных контейнеров разработки см. в репозитории [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src) .

Можно добавить предопределенную конфигурацию контейнера разработки либо во время работы в codespace, либо при локальной работе с репозиторием. Чтобы сделать это в {% data variables.product.prodname_vscode_shortname %} во время работы локально и не подключены к codespace, необходимо установить и включить расширение Dev Containers. Дополнительные сведения об этом расширении см. в [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers). В следующей процедуре описывается процесс использования codespace. Действия в {% data variables.product.prodname_vscode_shortname %}, если вы не подключены к codespace, очень похожи.

{% data reusables.codespaces.command-palette-container %}
1. Щелкните определение, которое вы хотите использовать.

   ![Снимок экрана: список стандартных определений контейнеров](/assets/images/help/codespaces/predefined-container-definitions-list.png)

1. Следуйте инструкциям по настройке определения. Дополнительные сведения о параметрах настройки определения см. в разделе [Добавление дополнительных функций в файл `devcontainer.json`](#adding-additional-features-to-your-devcontainerjson-file).
1. Нажмите кнопку **ОК**.

   ![Снимок экрана: кнопка "ОК"](/assets/images/help/codespaces/prebuilt-container-ok-button.png)

1. Если вы работаете в codespace, примените изменения, нажав кнопку **Перестроить** в сообщении в правом нижнем углу окна. Дополнительные сведения о перестроении контейнера см. в разделе [Применение изменений к конфигурации](#applying-configuration-changes-to-a-codespace).

   ![Снимок экрана: запрос на "Перестроить сейчас"](/assets/images/help/codespaces/rebuild-prompt.png)

### Добавление дополнительных функций в файл `devcontainer.json`

{% data reusables.codespaces.about-features %} Дополнительные сведения см. в разделе [Добавление компонентов в `devcontainer.json` файл](/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file?tool=vscode).

## Создание настраиваемой конфигурации контейнера разработки

Если ни одна из предопределенных конфигураций не соответствует вашим потребностям, можно создать пользовательскую конфигурацию, написав собственный файл `devcontainer.json`.

* Если вы добавляете один файл `devcontainer.json`, который будет использоваться всеми, кто создает codespace из репозитория, создайте файл в каталоге `.devcontainer` в корне репозитория. 
* Если вы хотите предложить пользователям выбор конфигурации, можно создать несколько пользовательских файлов `devcontainer.json`, каждый из которых должен находится в отдельном подкаталоге каталога `.devcontainer`.

   {% note %}

   **Примечания**
   - Вы не можете найти файлы `devcontainer.json` в каталогах более чем на один уровень ниже `.devcontainer`. Например, файл в каталоге `.devcontainer/teamA/devcontainer.json` будет работать, а в `.devcontainer/teamA/testing/devcontainer.json` — нет.
   - {% data reusables.codespaces.configuration-choice-templates %} Дополнительные сведения см. в разделе [Настройка репозитория шаблонов для {% data variables.product.prodname_github_codespaces %}](/codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces).

   {% endnote %}

   Если в репозитории найдено несколько файлов `devcontainer.json`, они будут показаны на странице параметров создания codespace. Дополнительные сведения см. в разделе [Создание codespace для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

   ![Снимок экрана: выбор файлов конфигурации](/assets/images/help/codespaces/configuration-file-choice.png)

### `devcontainer.json` Добавление файла

Если у `devcontainer.json` вас еще нет файла в репозитории, его можно быстро добавить из {% data variables.product.prodname_dotcom_the_website %}.
1. Перейдите в репозиторий и щелкните раскрывающийся список **{% octicon "code" aria-label="The code icon" %} Code (Код).**
1. На вкладке **Codespaces** щелкните многоточие (**...**), а затем выберите **Настроить контейнер разработки**.

   ![Снимок экрана: раскрывающийся список "Код" с выделенным элементом "Настройка контейнера разработки"](/assets/images/help/codespaces/configure-dev-container.png)

В редакторе откроется новый `.devcontainer/devcontainer.json` файл. Файл будет содержать некоторые начальные свойства, включая `features` объект, в который можно добавить новые инструменты, библиотеки или среды выполнения. Дополнительные сведения см. в разделе [Добавление компонентов в `devcontainer.json` файл](/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file?tool=webui).

Если репозиторий уже содержит один или несколько `devcontainer.json` файлов, щелкните **Настроить контейнер разработки** , чтобы открыть существующий `devcontainer.json` файл с наивысшим приоритетом в соответствии со [спецификацией](https://containers.dev/implementors/spec/#devcontainerjson) containers.dev. 

### Выбор конфигурации по умолчанию во время создания пространства кода

Если файл `.devcontainer/devcontainer.json` или `.devcontainer.json` существует, он будет выбором по умолчанию в списке доступных файлов конфигурации при создании пространства кода. Если ни один из файлов не существует, будет выбрана конфигурация контейнера разработки по умолчанию. 

![Снимок экрана: выбор конфигурации по умолчанию](/assets/images/help/codespaces/configuration-file-choice-default.png)

### Изменение файла devcontainer.json

Можно добавлять и изменять поддерживаемые ключи конфигурации в файле `devcontainer.json`, чтобы указать аспекты среды codespace, например, какие расширения {% data variables.product.prodname_vscode_shortname %} будут установлены. {% data reusables.codespaces.more-info-devcontainer %}

Файл `devcontainer.json` записывается в формате JSONC (JSON с комментариями). Это позволяет включать комментарии в файл конфигурации. Дополнительные сведения см. в разделе [Редактирование JSON в {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/languages/json#_json-with-comments) в документации по {% data variables.product.prodname_vscode_shortname %}.

{% note %}

**Примечание.** Если вы используете анализатор кода для проверки файла `devcontainer.json`, убедитесь, что для него задано значение JSONC, а не JSON. В противном случае комментарии будут отображаться как ошибки.

{% endnote %}

### Параметры интерфейса для {% data variables.product.prodname_vscode_shortname %}

Параметры интерфейса для {% data variables.product.prodname_vscode_shortname %} можно настроить с тремя областями: Рабочая область, Удаленные [пространства кода] и Пользователь. Эти области можно просмотреть в редакторе параметров {% data variables.product.prodname_vscode_shortname %}.

![Снимок экрана: выбор областей в редакторе параметров](/assets/images/help/codespaces/scopes-for-vscode.png)

Если параметр определен в нескольких областях, в первую очередь приоритет имеют параметры рабочей области, затем параметры удаленного репозитория [Codespaces] , а затем пользователя.

Параметры интерфейса по умолчанию для {% data variables.product.prodname_vscode_shortname %} можно определить в двух местах.

* Параметры интерфейса, определенные в `.vscode/settings.json` файле в репозитории, применяются как параметры области рабочей области в codespace.
* Параметры интерфейса, определенные в `settings` ключе в `devcontainer.json` файле, применяются как удаленные [Codespaces] параметры в codespace.

## Применение изменений конфигурации к среде codespace

Изменения конфигурации будут применены при следующем создании codespace. Однако вы можете применить изменения к существующему пространству кода, перестроив контейнер. Это можно сделать в codespace в веб-клиенте или классическом приложении {% data variables.product.prodname_vscode_shortname %} или использовать {% data variables.product.prodname_cli %}.

### Перестроение контейнера разработки в веб-клиенте или классическом приложении {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %}

   ![Снимок экрана: сообщение об ошибке о режиме восстановления](/assets/images/help/codespaces/recovery-mode-error-message.png)

   - Диагностируйте проблему путем просмотра журналов создания. Для этого нажмите кнопку **Просмотр журнала создания**.
   - Чтобы устранить ошибки, выявленные в журналах, обновите файл `devcontainer.json`.
   - Чтобы применить изменения, перестройте контейнер. 

### Использование {% data variables.product.prodname_cli %} для перестроения контейнера разработки

Если вы изменили конфигурацию контейнера разработки за пределами VS Code (например, в {% data variables.product.prodname_dotcom_the_website %} или в интегрированной среде разработки JetBrains), вы можете использовать {% data variables.product.prodname_cli %} для перестроения контейнера разработки для существующего пространства кода.

1. В окне терминала введите следующую команду.

   ```
   gh cs rebuild
   ```

   В списке перечислены пространства кода.

1. Используйте клавиши со стрелками на клавиатуре, чтобы выделить требуемое кодовое пространство, а затем нажмите клавишу <kbd>ВВОД</kbd>.


## Дополнительные материалы

- [Предварительная сборка сред codespace](/codespaces/prebuilding-your-codespaces)
