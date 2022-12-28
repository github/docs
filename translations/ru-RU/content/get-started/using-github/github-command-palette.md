---
title: Палитра команд GitHub
intro: 'Используйте палитру команд в {% data variables.product.product_name %} для навигации, поиска и выполнения команд непосредственно с клавиатуры.'
versions:
  feature: command-palette
shortTitle: GitHub Command Palette
ms.openlocfilehash: 5c6b739f2422be780cef6fa0e44e5d75663cc036
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159056'
---
{% data reusables.command-palette.beta-note %}

## Сведения о {% data variables.product.prodname_command_palette %}

Вы можете искать команды, переходить по ним и выполнять их в {% data variables.product.product_name %} с помощью {% data variables.product.prodname_command_palette %}. Палитра команд — это средство отображения предложений по запросу в зависимости от текущего контекста и ресурсов, которые вы недавно использовали. Палитру команд можно открыть с помощью сочетания клавиш из любого места в {% data variables.product.product_name %}, что экономит время и избавляет от необходимости пользоваться мышью.

### Быстрая навигация

Предложения палитры команд упрощают доступ к страницам верхнего уровня, например странице "Проблемы", из любого места в репозитории, личной учетной записи или организации. Если нужное расположение не указано, начните вводить название или номер расположения, чтобы уточнить предложения.

![Предложения для репозитория на палитре команд](/assets/images/help/command-palette/command-palette-navigation-repo-default.png)

### Простой доступ к командам

Возможность выполнять команды непосредственно с клавиатуры без перехода по нескольким меню может изменить подход к работе с {% data variables.product.prodname_dotcom %}. Например, вы можете переключаться между темами несколькими нажатиями клавиш, что упрощает их смену по мере изменения потребностей.

![Изменение темы на палитре команд](/assets/images/help/command-palette/command-palette-command-change-theme.png)

## Открытие {% data variables.product.prodname_command_palette %}

Открыть палитру команд можно с помощью одного из следующих сочетаний клавиш по умолчанию:
- Windows и Linux: <kbd>CTRL</kbd>+<kbd>K</kbd> или <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>K</kbd>
- Mac: <kbd>COMMAND</kbd>+<kbd>K</kbd> или <kbd>COMMAND</kbd>+<kbd>OPTION</kbd>+<kbd>K</kbd>

Вы можете настроить сочетания клавиш, используемые для открытия палитры команд, в [разделе "Специальные возможности"](https://github.com/settings/accessibility) параметров пользователя. Дополнительные сведения см. в разделе [Настройка сочетаний клавиш для {% data variables.product.prodname_command_palette %}](#customizing-your-github-command-palette-keyboard-shortcuts).

При открытии палитры команд расположение (например, организация `mashed-avocado`) отображается в левом верхнем углу и используется в качестве контекста для предложений.

![Запуск палитры команд](/assets/images/help/command-palette/command-palette-launch.png)

{% note %}

**Примечания.**
- При редактировании текста Markdown для открытия палитры команд используйте сочетание клавиш <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>K</kbd> (Windows и Linux) или <kbd>COMMAND</kbd>+<kbd>OPTION</kbd>+<kbd>K</kbd> (Mac).{% ifversion projects-v2 %}
- Если у вас в работе {% data variables.projects.project_v2 %}, отобразится другая палитра команд, относящаяся к проекту. Дополнительные сведения: [Настройка представления](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view).{% endif %}

{% endnote %}

### Настройка сочетаний клавиш для {% data variables.product.prodname_command_palette %}


Сочетания клавиш, используемые по умолчанию для открытия палитры команд, могут конфликтовать с сочетаниями клавиш по умолчанию в операционной системе или браузере. Настроить сочетания клавиш можно в [разделе "Специальные возможности"](https://github.com/settings/accessibility) параметров учетной записи. В параметрах палитры команд можно настроить сочетания клавиш для открытия палитры команд как в режиме поиска, так и в режиме команд. 

![Настройка сочетаний клавиш для палитры команд](/assets/images/help/command-palette/command-palette-keyboard-shortcut-settings.png)
## Навигация с помощью {% data variables.product.prodname_command_palette %}

Палитру команд можно использовать для перехода на любую страницу, к которой у вас есть доступ на {% data variables.product.product_name %}.

{% data reusables.command-palette.open-palette %}

2. Начните вводить путь, по которому нужно перейти. Предложения в палитре команд изменяются в соответствии с введенным текстом.

   ![Текущая область навигации в палитре команд](/assets/images/help/command-palette/command-palette-navigation-current-scope.png)

{% data reusables.command-palette.change-scope %}

   Вы также можете использовать нажатия клавиш, чтобы сузить поиск. Дополнительные сведения см. в разделе [Функции нажатия клавиш](#keystroke-functions).

4. Завершите ввод пути или используйте клавиши со стрелками, чтобы выделить нужный путь в списке предложений.

5. Нажмите клавишу <kbd>ВВОД</kbd>, чтобы перейти к выбранному расположению. Кроме того, можно открыть расположение на новой вкладке браузера, нажав клавиши <kbd>CTRL</kbd>+<kbd>ВВОД</kbd> (Windows и Linux) или <kbd>COMMAND</kbd>+<kbd>ВВОД</kbd> (Mac).

## Поиск с помощью {% data variables.product.prodname_command_palette %}

Палитру команд можно использовать для поиска в {% data variables.location.product_location %}.

{% data reusables.command-palette.open-palette %}

{% data reusables.command-palette.change-scope %}

3. При необходимости используйте нажатия клавиш для поиска ресурсов определенных типов:

   - <kbd>#</kbd> — поиск проблем, запросов на вытягивание, обсуждений и проектов;
   - <kbd>!</kbd> — поиск проектов;
   - <kbd>@</kbd> — поиск пользователей, организаций и репозиториев;
   - <kbd>/</kbd> — поиск файлов в области репозитория.

   ![Поиск файлов в палитре команд](/assets/images/help/command-palette/command-palette-search-files.png)

4. Начните вводить условия поиска. Палитра команд предложит ряд поисковых запросов в зависимости от области поиска.

   {% tip %}

   В палитре команд можно также использовать полный синтаксис встроенного поиска {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Поиск сведений на {% data variables.product.prodname_dotcom %}](/search-github).

   {% endtip %}

5. Используйте клавиши со стрелками, чтобы выделить нужный результат поиска, и нажмите клавишу <kbd>ВВОД</kbd>, чтобы перейти к выбранному расположению. Кроме того, можно открыть расположение на новой вкладке браузера, нажав клавиши <kbd>CTRL</kbd>+<kbd>ВВОД</kbd> (Windows и Linux) или <kbd>COMMAND</kbd>+<kbd>ВВОД</kbd> (Mac).

## Выполнение команд из {% data variables.product.prodname_command_palette %}

{% data variables.product.prodname_command_palette %} позволяет выполнять команды. Например, можно создать репозиторий или проблему либо сменить тему. При выполнении команды расположение действия определяется базовой страницей или областью, показанной в палитре команд.

- Команды для запросов на вытягивание и проблем всегда выполняются на базовой странице.
- Команды более высокого уровня, например для репозиториев, выполняются в области, показанной в палитре команд.

Полный список поддерживаемых команд см. в разделе [Справка по {% data variables.product.prodname_command_palette %}](#github-command-palette-reference).

1. Сочетания клавиш по умолчанию для открытия палитры команд в командном режиме: <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>K</kbd> (Windows и Linux) или <kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>K</kbd> (Mac). Если палитра команд уже открыта, нажмите <kbd>></kbd>, чтобы перейти в командный режим. {% data variables.product.prodname_dotcom %} предлагает команды в зависимости от расположения.

   ![Командный режим палитры команд](/assets/images/help/command-palette/command-palette-command-mode.png)

{% data reusables.command-palette.change-scope %}

3. Если нужная команда не отображается, проверьте область, а затем начните вводить имя команды в текстовом поле.

4. Используйте клавиши со стрелками, чтобы выделить нужную команду, и нажмите клавишу <kbd>ВВОД</kbd> для ее запуска.


## Закрытие палитры команд

Если палитра команд активна, ее можно закрыть, нажав одно из следующих сочетаний клавиш:

- Режим поиска и навигации: <kbd>ESC</kbd> или <kbd>CTRL</kbd>+<kbd>K</kbd> (Windows и Linux); <kbd>COMMAND</kbd>+<kbd>K</kbd> (Mac)
- Командный режим: <kbd>ESC</kbd> или <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>K</kbd> (Windows и Linux); <kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>K</kbd> (Mac)

Если вы настроили сочетания клавиш для палитры команд в параметрах специальных возможностей, настроенные сочетания клавиш будут использоваться как для открытия, так и для закрытия палитры команд.  

## Справка по {% data variables.product.prodname_command_palette %}

### Функции нажатия клавиш

Эти нажатия клавиш доступны, если палитра команд находится в режиме навигации и поиска, то есть они недоступны в командном режиме.

| Клавиши | Компонент |
| :- | :- |
|<kbd>></kbd>| Вход в командный режим. Дополнительные сведения см. в разделе [Выполнение команд из {% data variables.product.prodname_command_palette %}](#running-commands-from-the-github-command-palette). |
|<kbd>#</kbd>| Поиск проблем, запросов на вытягивание, обсуждений и проектов. Дополнительные сведения см. в разделе [Поиск с помощью {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette).|
|<kbd>@</kbd>| Поиск пользователей, организаций и репозиториев. Дополнительные сведения см. в разделе [Поиск с помощью {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette).|
|<kbd>/</kbd>| Поиск файлов в области репозитория или репозиториев в области организации. Дополнительные сведения см. в разделе [Поиск с помощью {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette). |
|<kbd>!</kbd>| Поиск только проектов. Дополнительные сведения см. в разделе [Поиск с помощью {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette).|
|<kbd>CTRL</kbd>+<kbd>C</kbd> или <kbd>COMMAND</kbd>+<kbd>C</kbd>| Копирование URL-адреса поиска или навигации для выделенного результата в буфер обмена.|
|<kbd>ВВОД</kbd>| Переход к выделенному результату или выполнение выделенной команды.|
|<kbd>CTRL</kbd>+<kbd>ВВОД</kbd> или <kbd>COMMAND</kbd>+<kbd>ВВОД</kbd>| Открытие выделенного результата поиска или навигации на новой вкладке браузера.|
|<kbd>?</kbd>| Отображение справки в палитре команд.|

### Глобальные команды

Эти команды доступны во всех областях.

| Команда | Поведение|
| :- | :- | :- |
|`Import repository`|Создание репозитория путем импорта проект из другой системы управления версиями. Дополнительные сведения см. в разделе [Импорт репозитория с помощью средства импорта GitHub](/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer).  |
|`New gist`|Открытие нового объекта gist. Дополнительные сведения см. в разделе [Создание объекта gist](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists). |
|`New organization`|Создание организации. Дополнительные сведения см. в статье "[Создание новой организации с нуля](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)". |
|`New project`|Создание доски проекта. Дополнительные сведения см. в разделе [Создание проекта](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project).  |
|`New repository`|Создание репозитория с нуля. Дополнительные сведения см. в разделе [Создание репозитория](/repositories/creating-and-managing-repositories/creating-a-new-repository). |
|`Switch theme to <theme name>`|Переключение на другую тему пользовательского интерфейса. Дополнительные сведения см. в разделе [Управление параметрами темы](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings). |


### Команды для организации

Эти команды доступны только в области организации.

| Команда | Поведение|
| :- | :- |
| `New team`| Создание команды в текущей организации. Дополнительные сведения см. в статье "[Создание команды](/organizations/organizing-members-into-teams/creating-a-team)".

### Команды для репозитория

Большинство этих команд доступны только на домашней странице репозитория. Если команда также доступна на других страницах, это указано в столбце "Поведение".

| Команда | Поведение|
| :- | :- |
|`Clone repository: <URL type>`|Копирование URL-адреса, необходимого для клонирования репозитория с помощью {% data variables.product.prodname_cli %}, HTTPS или SSH, в буфер обмена. Дополнительные сведения см. в разделе [Клонирование репозитория](/repositories/creating-and-managing-repositories/cloning-a-repository).|
|`New discussion`|Создание обсуждения в репозитории. Дополнительные сведения см. в разделе [Создание обсуждения](/discussions/quickstart#creating-a-new-discussion).|
|`New file`|Создание файла с любой страницы репозитория. Дополнительные сведения см. в разделе [Добавление файла в репозиторий](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).
|`New issue`|Открытие новой проблемы с любой страницы репозитория. Дополнительные сведения см. в статье "[Создание проблемы](/issues/tracking-your-work-with-issues/creating-an-issue)".|
|`Open in new codespace`|Создание и открытие codespace для этого репозитория. Дополнительные сведения см. в разделе [Создание пространства кода для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).|
|`Open in github.dev editor`|Открытие текущего репозитория в редакторе github.dev. Дополнительные сведения см. в разделе [Открытие веб-редактора](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor).|

### Команды для файла

Эти команды доступны только при открытии палитры команд из файла в репозитории.

| Команда | Поведение|
| :- | :- |
|`Copy permalink`|Создание ссылки на файл с SHA текущей фиксации и ее копирование в буфер обмена. Дополнительные сведения см. в разделе [Получение постоянных ссылок на файлы](/repositories/working-with-files/using-files/getting-permanent-links-to-files#press-y-to-permalink-to-a-file-in-a-specific-commit).
|`Open in github.dev editor`|Открытие текущего отображаемого файла в редакторе github.dev. Дополнительные сведения см. в разделе [Открытие веб-редактора](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor).|

### Команды для обсуждения

Эти команды доступны только при открытии палитры команд из обсуждения. Они выполняются на текущей странице, и на них не влияет область, заданная в палитре команд.

| Команда | Поведение|
| :- | :- |
|`Delete discussion...`|Окончательное удаление обсуждения. Дополнительные сведения см. в разделе [Управление обсуждениями](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion).
|`Edit discussion body`|Открытие основного текста обсуждения для редактирования.
|`Subscribe`/`unsubscribe`|Отказ или согласие на получение уведомлений о добавлении содержимого к обсуждению. Дополнительные сведения см. в разделе [Сведения об уведомлениях](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications).
|`Transfer discussion...`|Перемещение обсуждения в другой репозиторий. Дополнительные сведения см. в разделе [Управление обсуждениями](/discussions/managing-discussions-for-your-community/managing-discussions#transferring-a-discussion).

### Команды для проблемы

Эти команды доступны только при открытии палитры команд из проблемы. Они выполняются на текущей странице, и на них не влияет область, заданная в палитре команд.

| Команда | Поведение|
| :- | :- |
|`Close`/`reopen issue`|Закрытие или повторное открытие текущей проблемы. Дополнительные сведения см. в разделе [Сведения о проблемах](/issues/tracking-your-work-with-issues/about-issues).|
|`Convert issue to discussion...`|Преобразование текущей проблемы в обсуждение. Дополнительные сведения см. в разделе [Модерация обсуждений](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion).
|`Delete issue...`|Удаление текущей проблемы. Дополнительные сведения см. в разделе [Удаление проблемы](/issues/tracking-your-work-with-issues/deleting-an-issue).|
|`Edit issue body`|Открытие основного текста проблемы для редактирования.
|`Edit issue title`|Открытие заголовка проблемы для редактирования.
|`Lock issue`|Запрет на добавление новых комментариев пользователями без доступа на запись в репозиторий. Дополнительные сведения см. в разделе [Блокировка бесед](/communities/moderating-comments-and-conversations/locking-conversations).
|`Pin`/`unpin issue`|Отображение или скрытие проблемы в разделе закрепленных проблем репозитория. Дополнительные сведения см. в разделе [Закрепление проблемы в репозитории](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository).|
|`Subscribe`/`unsubscribe`|Отказ или согласие на получение уведомлений об изменениях в проблеме. Дополнительные сведения см. в разделе [Сведения об уведомлениях](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications).
|`Transfer issue...`|Перенос проблемы в другой репозиторий. Дополнительные сведения см. в разделе [Перенос проблемы в другой репозиторий](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository).|

### Команды для запроса на вытягивание

Эти команды доступны только при открытии палитры команд из запроса на вытягивание. Они выполняются на текущей странице, и на них не влияет область, заданная в палитре команд.

| Команда | Поведение|
| :- | :- |
|`Close`/`reopen pull request`|Закрытие или повторное открытие текущего запроса на вытягивание. Дополнительные сведения см. в разделе [Сведения о запросах на вытягивание](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).|
|`Convert to draft`/`Mark pull request as ready for review`|Изменение состояния запроса на вытягивание: готов или не готов к проверке. Дополнительные сведения см. в разделе [Изменение состояния запроса на вытягивание](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request).|
|`Copy current branch name`| Добавление имени главной ветви запроса на вытягивание в буфер обмена.
|`Edit pull request body`|Открытие основного текста запроса на вытягивание для редактирования.
|`Edit pull request title`|Открытие заголовка запроса на вытягивание для редактирования.
|`Open in new codespace`|Создание и открытие codespace для главной ветви запроса на вытягивание. Дополнительные сведения см. в разделе [Создание пространства кода для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).
|`Subscribe`/`unsubscribe`|Отказ или согласие на получение уведомлений об изменениях в запросе на вытягивание. Дополнительные сведения см. в разделе [Сведения об уведомлениях](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications).
|`Update current branch`|Обновление главной ветви запроса на вытягивание с учетом изменений из базовой ветви. Доступно только для запросов на вытягивание, предназначенных для ветви репозитория по умолчанию. Дополнительные сведения см. в разделе [Сведения о ветвях](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches).|
