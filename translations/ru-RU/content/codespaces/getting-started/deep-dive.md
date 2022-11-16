---
title: 'Подробные сведения о {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Deep dive into {% data variables.product.prodname_codespaces %}'
intro: 'Узнайте, как работает {% data variables.product.prodname_github_codespaces %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
ms.openlocfilehash: 5f97a137ec09191d5cbaa9c10aa280e10f11bbc0
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158648'
---
{% data variables.product.prodname_github_codespaces %} — это современная облачная среда разработки, которая использует контейнер для предоставления популярных языков, инструментов и служебных программ для разработки. {% data variables.product.prodname_github_codespaces %} также можно настроить, что позволяет создать настраиваемую среду разработки для проекта. Настроив пользовательскую среду разработки для проекта, вы получите воспроизводимую конфигурацию кодового пространства для всех пользователей проекта.

## Создание кодового пространства

Кодовое пространство можно создавать в нескольких точках входа:

- Из шаблона {% data variables.product.company_short %} или любого репозитория шаблонов в {% data variables.product.prodname_dotcom_the_website %} для запуска нового проекта
- Из ветви в репозитории для работы с новыми функциями
- Из открытого запроса на вытягивание для просмотра хода выполнения
- Из фиксации в журнале репозитория для исследования ошибки в определенный момент времени

{% data reusables.codespaces.ways-to-create-a-codespace %}
  
Кодовое пространство может быть временным, если вам нужно протестировать что-то или вернуться в то же кодовое пространство для выполнения более долгосрочных задач. 

Дополнительные сведения см. в разделах [Создание codespace для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository), [Создание codespace на основе шаблона](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template) и [Открытие существующего codespace](/codespaces/developing-in-codespaces/opening-an-existing-codespace).

{% note %}

**Примечание.** Вы можете создать несколько codespace для каждого репозитория или даже для каждой ветви. Однако количество создаваемых сред codespace ограничено, как и количество одновременно выполняемых сред codespace. Если вы достигнете максимального количества сред codespace и попытаетесь создать еще одну среду, появится сообщение о том, что необходимо удалить существующую среду codespace, прежде чем создать новую.

{% endnote %}

### Процесс создания codespace

При создании codespace различные действия выполняются в фоновом режиме, прежде чем codespace будет доступно.

### Шаг 1. Кодовому пространству назначаются виртуальная машина и хранилище

При создании codespace создается [неглубокий клон](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/) репозитория или репозитория шаблонов, если вы создаете codespace на основе шаблона. Репозиторий клонируется в виртуальную машину Linux, которая является как выделенной, так и частной. Выделение виртуальной машины обеспечит вам полный набор вычислительных ресурсов, доступных на этом компьютере. При необходимости это также позволит вам получить полный корневой доступ к контейнеру.

### Шаг 2. Создается контейнер

{% data variables.product.prodname_github_codespaces %} использует контейнер в качестве среды разработки. Этот контейнер создается на основе конфигураций, которые можно определить в `devcontainer.json` файле и, при необходимости, в Dockerfile. Если вы создаете codespace из пустого шаблона {% data variables.product.company_short %} или из репозитория без `devcontainer.json` файла, {% data variables.product.prodname_github_codespaces %} использует образ по умолчанию, для которого доступно множество языков и сред выполнения. Дополнительные сведения см. в статье [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers). Дополнительные сведения о том, что содержит образ по умолчанию, см. в репозитории [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux) .

{% note %}

**Примечание.** Если вы хотите использовать перехватчики Git в кодовом пространстве и применить что-то из [каталога шаблонов Git](https://git-scm.com/docs/git-init#_template_directory) к своему кодовому пространству, перехватчики необходимо настроить при выполнении шага 4 после того, как будет создан контейнер.

Поскольку репозиторий клонируется на виртуальную машину узла до создания контейнера, никакое содержимое [каталога шаблонов Git](https://git-scm.com/docs/git-init#_template_directory) не будет применяться в вашем кодовом пространстве, пока вы не настроите перехватчики в файле конфигурации `devcontainer.json` с помощью `postCreateCommand` в шаге 4. Дополнительные сведения см. в разделе [Шаг 4. Настройка после создания](#step-4-post-creation-setup).

{% endnote %}

### Шаг 3. Подключение к кодовому пространству

После создания контейнера и выполнения любой другой инициализации вы будете подключены к своему кодовому пространству. К нему можно подключиться с помощью:

* Ваш веб-браузер
* [Visual Studio Code](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)
* [Интегрированная среда разработки JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)
* [{% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)

### Шаг 4. Настройка после создания

После подключения к codespace автоматическая установка может продолжить сборку на основе конфигурации, указанной в `devcontainer.json` файле. Могут быть выполнены команды `postCreateCommand` и `postAttachCommand`.

Если вы хотите использовать перехватчики Git в codespace, настройте перехватчики с помощью [`devcontainer.json` скриптов жизненного цикла, таких](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts) как `postCreateCommand`. Дополнительные сведения [см. в справочнике по `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) в документации по {% data variables.product.prodname_vscode_shortname %}.

Если у вас есть общедоступный репозиторий файлов с точкой для {% data variables.product.prodname_github_codespaces %}, его можно включить для использования с новыми кодовыми пространствами. Если он включен, файлы с точкой будут клонированы в контейнер и будет вызван скрипт установки. Дополнительные сведения см. в разделе [Персонализация {% data variables.product.prodname_github_codespaces %} для вашей учетной записи](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles). 

Наконец, если вы создали codespace из репозитория, весь журнал репозитория копируется с полным клоном. Если вы создали codespace на основе шаблона, полный журнал репозитория шаблонов не сохраняется; Вместо этого, если вы не используете пустой шаблон, вы начнете с начальной фиксации для содержимого репозитория шаблонов.

В процессе настройки после создания можно использовать интегрированный терминал и вносить изменения в файлы, но нужно стараться избегать любых конфликтов между работой и выполняемыми командами.
## Жизненный цикл {% data variables.product.prodname_codespaces %}

### Сохранение файлов в кодовом пространстве

Сохраняйте изменения в файлах обычным способом в зависимости от используемого редактора.

Если вы работаете с codespaces в {% data variables.product.prodname_vscode %}, можно включить [автоматическое сохранение](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) , чтобы изменения сохранялись всегда. 

### Закрытие или остановка кодового пространства

Codespace будет продолжать работать, пока вы используете его, но время ожидания будет истекать после периода бездействия. Изменения в файлах из выходных данных редактора и терминала учитываются как действия, поэтому время ожидания codespace не будет истекает, если выходные данные терминала продолжаются. Время ожидания бездействия по умолчанию составляет 30 минут. Вы можете определить личный параметр времени ожидания для создаваемых codespace, но это может быть отказано в политике времени ожидания организации. Дополнительные сведения см. в статье "[Настройка периода ожидания для Codespaces](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces)". 

Если время ожидания codespace будет прекращено, но его можно перезапустить на вкладке браузера (если вы использовали codespace в браузере), из {% data variables.product.prodname_vscode_shortname %} или из списка codespace в [https://github.com/codespaces](https://github.com/codespaces).

Чтобы остановить codespace, вы можете

* В браузере: в списке codespaces по адресу [https://github.com/codespaces](https://github.com/codespaces)щелкните многоточие (**...**) справа от codespace, которое нужно остановить, и щелкните **Остановить codespace**.
* В {% data variables.product.prodname_vscode_shortname %}: откройте [{% data variables.product.prodname_vscode_command_palette %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces#suspending-or-stopping-a-codespace) ( например, нажав <kbd>клавиши CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>ВВОД</kbd> (Windows/Linux) или <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) и `Codespaces: stop` нажмите клавишу <kbd>ВВОД</kbd>.
* В клиенте JetBrains нажмите кнопку остановки в верхней части окна инструментов {% data variables.product.prodname_github_codespaces %}. Дополнительные сведения см. на вкладке "Среды ИНДЕ JetBrains" статьи "[Остановка и запуск codespace](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)".
* В окне терминала используйте команду `gh codespace stop`{% data variables.product.prodname_cli %} . Дополнительные сведения см. в разделе [Использование {% data variables.product.prodname_github_codespaces %} с {% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli#gh-commands-for-github-codespaces).

Если выйти из codespace без выполнения команды stop (например, закрыв вкладку браузера) или оставить codespace запущенным без взаимодействия, кодовое пространство и его выполняемые процессы будут продолжаться в течение периода времени ожидания бездействия. 

При закрытии или остановке кодового пространства все незафиксированные изменения сохраняются, пока вы не подключитесь к кодовому пространству еще раз.

## Запуск приложения

Переадресация портов обеспечивает доступ к TCP-портам, работающим в кодовом пространстве. Например, если веб-приложение выполняется через порт 4000 в кодовом пространстве, можно настроить автоматическую переадресацию этого порта с тем, чтобы приложение было доступно из браузера.

Переадресация портов определяет, какие порты будут вам доступны с удаленного компьютера. Даже если вы не переадресуете порт, он будет по-прежнему доступен другим процессам, выполняемым в самом кодовом пространстве.

![Схема, показывающая, как работает переадресация портов в кодовом пространстве](/assets/images/help/codespaces/port-forwarding.png)

Когда приложение, работающее в {% data variables.product.prodname_github_codespaces %}, выводит порт в консоль, {% data variables.product.prodname_github_codespaces %} обнаруживает шаблон URL-адреса localhost и автоматически перенаправит порт. Чтобы открыть порт в браузере, щелкните URL-адрес в терминале или ссылку во всплывающем уведомлении, которое появится в правом нижнем углу {% data variables.product.prodname_vscode_shortname %}. По умолчанию {% data variables.product.prodname_github_codespaces %} пересылает порт по протоколу HTTP. Дополнительные сведения о переадресации портов см. в разделе [Переадресация портов в кодовом пространстве](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).

Порты могут переадресовываться автоматически, но не являются общедоступными в Интернете. По умолчанию все порты являются частными, но любой порт можно сделать доступным для вашей организации или общедоступным, а затем предоставить к нему доступ по URL-адресу. Дополнительные сведения см. в разделе [Общий доступ к порту](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#sharing-a-port).

Запуск приложения при первом подключении к кодовому пространству может сопровождаться быстрым внутренним циклом разработки. При редактировании изменения автоматически сохраняются и становятся доступными через переадресованный порт. Для просмотра изменений вернитесь на вкладку запущенного приложения в браузере и обновите ее.

## Фиксация и отправка изменений

Git устанавливается по умолчанию в codespace, поэтому вы можете полагаться на существующий рабочий процесс Git. Вы можете работать с Git в codespace с помощью терминала или с помощью функций управления версиями {% data variables.product.prodname_vscode_shortname %} или JetBrains.

Если вы работаете с существующим репозиторием, вы можете создать codespace из любой ветви, фиксации или запроса на вытягивание в репозитории или переключиться на новую или существующую ветвь из активного пространства кода. Поскольку среда {% data variables.product.prodname_github_codespaces %} предназначена для временного использования, она может служить изолированной средой для экспериментов, проверки запроса на вытягивание, созданного членом команды, или устранения конфликтов слияния.

Если вы работаете в codespace, созданном на основе шаблона, Git будет установлен по умолчанию, но вам потребуется опубликовать codespace в удаленный репозиторий, чтобы сохранить работу и поделиться ею с другими пользователями. Если вы начинаете с пустого шаблона {% data variables.product.company_short %}, необходимо сначала инициализировать рабочую область в качестве репозитория Git (например, введя `git init`), чтобы начать использовать систему управления версиями в codespace.

Дополнительные сведения см. в статье [Использование системы управления версиями в кодовом пространстве](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace).

{% note %}

**Примечание.** Фиксации из кодового пространства будут соотнесены с именем и общедоступный адресом электронной почты, настроенным в https://github.com/settings/profile. Токен, ограниченный репозиторием, включается в среду как `GITHUB_TOKEN`, а для проверки подлинности используются учетные данные GitHub.

{% endnote %}

## Персонализация codespace с помощью расширений или подключаемых модулей

Вы можете добавить подключаемые модули и расширения в codespace, чтобы персонализировать интерфейс в JetBrains и {% data variables.product.prodname_vscode_shortname %} соответственно.

### Расширения {% data variables.product.prodname_vscode_shortname %}

Если вы работаете с codespace в классическом приложении {% data variables.product.prodname_vscode_shortname %} или веб-клиенте, вы можете добавить любые необходимые расширения из {% data variables.product.prodname_vscode_marketplace %}. Сведения о том, как модули работают в {% data variables.product.prodname_github_codespaces %}, см. в разделах [Поддержка удаленной разработки и {% data variables.product.prodname_github_codespaces %}](https://code.visualstudio.com/api/advanced-topics/remote-extensions) документации по {% data variables.product.prodname_vscode_shortname %}. 

Если вы уже используете {% data variables.product.prodname_vscode_shortname %}, вы можете использовать [синхронизацию параметров](https://code.visualstudio.com/docs/editor/settings-sync) для автоматической синхронизации расширений, параметров, тем и сочетаний клавиш между локальным экземпляром и любыми создаваемыми вами пространствами кода.

### Подключаемые модули JetBrains

Если вы работаете с codespace в интегрированной среде разработки JetBrains, вы можете добавить подключаемые модули из JetBrains Marketplace.

1. Щелкните **Клиент JetBrains**, а затем — **Параметры**.
1. В диалоговом окне Параметры щелкните **Подключаемые модули на узле** , чтобы установить подключаемый модуль в полной интегрированной среде разработки JetBrains, которая работает удаленно, или **Подключаемые модули** , чтобы установить подключаемый модуль на локальном клиенте, например для изменения темы пользовательского интерфейса. 
1. Перейдите на вкладку **Marketplace** .

   ![Снимок экрана: вкладка Marketplace для "Подключаемые модули на узле"](/assets/images/help/codespaces/jetbrains-preferences-plugins.png)

1. Щелкните **Установить** рядом с требуемым подключаемым модулем.

## Дополнительные материалы

- [Включение {% data variables.product.prodname_github_codespaces %} для вашей организации](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)
- [Управление затратами на {% data variables.product.prodname_github_codespaces %} в организации](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)
- [Добавление конфигурации контейнера разработки в репозиторий](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)
- [Жизненный цикл codespace](/codespaces/developing-in-codespaces/the-codespace-lifecycle)
