---
title: сочетания клавиш
intro: 'Для почти каждой страницы на {% data variables.product.prodname_dotcom %} имеется сочетание клавиш для ускоренного выполнения действий.'
redirect_from:
  - /articles/using-keyboard-shortcuts
  - /categories/75/articles
  - /categories/keyboard-shortcuts
  - /articles/keyboard-shortcuts
  - /github/getting-started-with-github/keyboard-shortcuts
  - /github/getting-started-with-github/using-github/keyboard-shortcuts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ad75d2afe5750ee2596d2695334ab5c7101aee79
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180780'
---
## Сведения о сочетаниях клавиш

Если ввести <kbd>?</kbd> в {% data variables.product.prodname_dotcom %}, откроется диалоговое окно со списком сочетаний клавиш, доступных для текущей страницы. С помощью этих сочетаний клавиш можно выполнять действия на сайте без использования мыши.

{% ifversion keyboard-shortcut-accessibility-setting %} В параметрах специальных возможностей можно отключить сочетания символьных клавиш, сохранив сочетания клавиш-модификаторов. Дополнительные сведения см. в разделе [Управление параметрами специальных возможностей](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-accessibility-settings).{% endif %}

{% ifversion command-palette %} С помощью {% data variables.product.prodname_command_palette %} можно также получить быстрый доступ ко множеству действий без необходимости запоминать сочетания клавиш. Дополнительные сведения см. в разделе [{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette).{% endif %}

В следующих разделах перечислены некоторые доступные сочетания клавиш, упорядоченные по страницам, на которых их можно использовать в {% data variables.location.product_location %}.

## Сочетания клавиш на уровне сайта

| Сочетание клавиш | Описание:
|-----------|------------
|<kbd>S</kbd> или <kbd>/</kbd> | Установка фокуса на панели поиска. Дополнительные сведения см. в разделе [Сведения о поиске в {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github).
|<kbd>G</kbd> <kbd>N</kbd> | Переход к уведомлениям. Дополнительные сведения см. в разделе [Сведения об уведомлениях](/github/managing-subscriptions-and-notifications-on-github/about-notifications).
|<kbd>ESC</kbd> | Когда фокус находится на всплывающем окне с информацией о пользователе, проблеме или запросе на вытягивание, это всплывающее окно закрывается и фокус снова устанавливается на элементе, к которому оно относится.
{% ifversion command-palette %}|<kbd>COMMAND</kbd>+<kbd>K</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>K</kbd> (Windows и Linux) | Открывается {% data variables.product.prodname_command_palette %}. При редактировании текста Markdown открыть палитру команд можно с помощью сочетания клавиш <kbd>COMMAND</kbd>+<kbd>OPTION</kbd>+<kbd>K</kbd> или <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>K</kbd>. Дополнительные сведения см. в разделе [{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette).{% endif %}

## Репозитории

| Сочетание клавиш | Описание:
|-----------|------------
|<kbd>G</kbd> <kbd>C</kbd> | Переход на вкладку **Код**.
|<kbd>G</kbd> <kbd>I</kbd> | Переход на вкладку **Проблемы**. Дополнительные сведения см. в разделе [Сведения о проблемах](/articles/about-issues).
|<kbd>G</kbd> <kbd>P</kbd> | Переход на вкладку **Запросы на вытягивание**. Дополнительные сведения см. в разделе [Сведения о запросах на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).{% ifversion fpt or ghes or ghec %}
|<kbd>G</kbd> <kbd>A</kbd> | Переход на вкладку **Действия**. Дополнительные сведения см. в разделе [Сведения о действиях](/actions/getting-started-with-github-actions/about-github-actions).{% endif %}
|<kbd>G</kbd> <kbd>B</kbd> | Переход на вкладку **Проекты**. Дополнительные сведения см. в разделе [Сведения о досках проектов](/articles/about-project-boards).
|<kbd>G</kbd> <kbd>W</kbd> | Переход на вкладку **Вики**. Дополнительные сведения см. в разделе [Сведения о вики-сайтах](/communities/documenting-your-project-with-wikis/about-wikis).{% ifversion discussions %}
|<kbd>G</kbd> <kbd>G</kbd> | Переход на вкладку **Обсуждения**. Дополнительные сведения см. в разделе [Сведения об обсуждениях](/discussions/collaborating-with-your-community-using-discussions/about-discussions).{% endif %}

## Редактирование исходного кода

| Сочетание клавиш | Описание |-----------|------------{% ifversion fpt or ghec %} |<kbd>.</kbd> | Открывает репозиторий или запрос на вытягивание в веб-редакторе на той же вкладке браузера. Для использования редактора необходимо войти в систему. Дополнительные сведения см. в разделе [Веб-редактор](/codespaces/developing-in-codespaces/web-based-editor).
|<kbd>></kbd> | Открывает репозиторий или запрос на вытягивание в веб-редакторе на новой вкладке браузера. Для использования редактора необходимо войти в систему. Дополнительные сведения см. в разделе [Веб-редактор](/codespaces/developing-in-codespaces/web-based-editor).{% endif %} |<kbd>COMMAND</kbd>+<kbd>B</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>B</kbd> (Windows и Linux) | Вставка форматирования Markdown для выделения текста полужирным шрифтом |<kbd>COMMAND</kbd>+<kbd>I</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>I</kbd> (Windows и Linux) | Вставка форматирования Markdown для выделения текста курсивом |<kbd>COMMAND</kbd>+<kbd>K</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>K</kbd> (Windows и Linux) | Вставка форматирования Markdown для создания ссылки{% ifversion fpt or ghec or ghae or ghes > 3.3 %} |<kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>7</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>7</kbd> (Windows и Linux) | Вставка форматирования Markdown для создания упорядоченного списка |<kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>8</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>8</kbd> (Windows и Linux) | Вставка форматирования Markdown для создания неупорядоченного списка |<kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>.</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>.</kbd> (Windows и Linux) | Вставка форматирования Markdown для создания цитаты{% endif %} | <kbd>E</kbd> | Открытие файла исходного кода на вкладке **Изменение файла** |<kbd>COMMAND</kbd>+<kbd>F</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>F</kbd> (Windows и Linux) | Начало поиска в редакторе файлов |<kbd>COMMAND</kbd>+<kbd>G</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>G</kbd> (Windows и Linux) | Найти далее |<kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>G</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>G</kbd> (Windows и Linux) | Найти ранее |<kbd>COMMAND</kbd>+<kbd>OPTION</kbd>+<kbd>F</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>F</kbd> (Windows и Linux) | Заменить |<kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>OPTION</kbd>+<kbd>F</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>R</kbd> (Windows и Linux) | Заменить все |<kbd>ALT</kbd>+<kbd>G</kbd> | Перейти к строке |<kbd>COMMAND</kbd>+<kbd>Z</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>Z</kbd> (Windows и Linux) | Отмена |<kbd>COMMAND</kbd>+<kbd>Y</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>Y</kbd> (Windows и Linux) | Повторить |<kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> | Переключение между вкладками **Изменение файла** и **Предварительный просмотр изменений** |<kbd>COMMAND</kbd>+<kbd>S</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>S</kbd> (Windows и Linux) | Запись сообщения о фиксации

Дополнительные сочетания клавиш см. в [документации по CodeMirror](https://codemirror.net/doc/manual.html#commands).

## Просмотр исходного кода

| Сочетание клавиш | Описание:
|-----------|------------
|<kbd>T</kbd> | Активация средства поиска файлов
|<kbd>L</kbd> | Переход к строке кода
|<kbd>W</kbd> | Переключение на новую ветвь или тег
|<kbd>да</kbd> | Развертывание URL-адреса в каноническую форму. Дополнительные сведения см. в разделе [Получение постоянных ссылок на файлы](/articles/getting-permanent-links-to-files).
|<kbd>I</kbd> | Отображение или скрытие комментариев к изменениям. Дополнительные сведения см. в разделе [Комментарий к изменению запроса на вытягивание](/articles/commenting-on-the-diff-of-a-pull-request).
|<kbd>А</kbd> | Отображение или скрытие заметок к изменениям
|<kbd>B</kbd> | Открытие представления blame. Дополнительные сведения см. в разделе [Трассировка изменений в файле](/articles/tracing-changes-in-a-file).

## Комментарии

| Сочетание клавиш | Описание:
|-----------|------------
|<kbd>COMMAND</kbd>+<kbd>B</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>B</kbd> (Windows и Linux) | Вставка форматирования Markdown для выделения текста полужирным шрифтом
|<kbd>COMMAND</kbd>+<kbd>I</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>I</kbd> (Windows и Linux) | Вставка форматирования Markdown для выделения текста курсивом
|<kbd>COMMAND</kbd>+<kbd>E</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>E</kbd> (Windows и Linux) | Вставляет форматирование Markdown для кода или команды в строке{% ifversion fpt or ghae > 3.3 or ghes or ghec %}
|<kbd>COMMAND</kbd>+<kbd>K</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>K</kbd> (Windows и Linux) | Вставляет форматирование Markdown для создания ссылки{% endif %}{% ifversion fpt or ghae > 3.5 or ghes > 3.5 or ghec %}
|<kbd>COMMAND</kbd>+<kbd>V</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>V</kbd> (Windows и Linux) | Создание ссылки Markdown при применении к выделенному тексту{% endif %}
|<kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> (Windows и Linux) | Переключение между вкладками комментариев **Запись** и **Предварительный просмотр**{% ifversion fpt or ghae or ghes > 3.4 or ghec %}
|<kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>V</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>V</kbd> (Windows и Linux) | Вставляет html-ссылку в виде обычного текста{% endif %}
|<kbd>Команды</kbd>+ <kbd>Shift</kbd>+ <kbd>Параметр</kbd>+ <kbd>V</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>ALT</kbd>+<kbd>V</kbd> (Windows и Linux) | Вставка html-ссылки в виде обычного текста
|<kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>7</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>7</kbd> (Windows и Linux) | Вставка форматирования Markdown для создания упорядоченного списка
|<kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>8</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>8</kbd> (Windows и Linux) | Вставка форматирования Markdown для неупорядоченного списка
|<kbd>COMMAND</kbd>+<kbd>ВВОД</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>ВВОД</kbd> (Windows и Linux) | Отправка комментария
|<kbd>CTRL</kbd>+ <kbd>.</kbd> затем <kbd>CTRL</kbd>+<kbd>[номер сохраненного ответа]</kbd> | Открытие меню сохраненных ответов и автоматическое заполнение поля комментария сохраненным ответом. Дополнительные сведения см. в статье [Сохраненные ответы Azure](/articles/about-saved-replies).
|<kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>.</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>.</kbd> (Windows/Linux) | Вставляет форматирование Markdown для цитаты{% ifversion fpt or ghec %}
|<kbd>COMMAND</kbd>+<kbd>G</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>G</kbd> (Windows и Linux) | Вставка предложения. Дополнительные сведения см. в разделе [Просмотр предлагаемых изменений в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request). |{% endif %}
|<kbd>R</kbd> | Цитирование выделенного текста в ответе. Дополнительные сведения см. в разделе [Базовый синтаксис записи и форматирования](/articles/basic-writing-and-formatting-syntax#quoting-text). |

## Списки проблем и запросов на вытягивание

| Сочетание клавиш | Описание:
|-----------|------------
|<kbd>C</kbd> | Создать проблему
|<kbd>COMMAND</kbd>+<kbd>/</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>/</kbd> (Windows и Linux) | Установка курсора на панель поиска проблем или запросов на вытягивание. Дополнительные сведения см. в статье [Фильтрация и поиск проблем и запросов на вытягивание](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests).||
|<kbd>U</kbd> | Фильтрация по автору
|<kbd>L</kbd> | Фильтрация по меткам или их изменение. Дополнительные сведения см. в разделе [Фильтрация проблем и запросов на вытягивание по меткам](/articles/filtering-issues-and-pull-requests-by-labels).
|<kbd>ALT</kbd> и щелчок мышью | Исключение меток при фильтрации по ним. Дополнительные сведения см. в разделе [Фильтрация проблем и запросов на вытягивание по меткам](/articles/filtering-issues-and-pull-requests-by-labels).
|<kbd>M</kbd> | Фильтрация по вехам или их изменение. Дополнительные сведения см. в разделе [Фильтрация проблем и запросов на вытягивание по вехам](/articles/filtering-issues-and-pull-requests-by-milestone).
|<kbd>А</kbd> | Фильтрация по уполномоченным или их изменение. Дополнительные сведения см. в разделе [Фильтрация проблем и запросов на вытягивание по уполномоченным](/articles/filtering-issues-and-pull-requests-by-assignees).
|<kbd>O</kbd> или <kbd>ВВОД</kbd> | Открытие проблемы

## Проблемы и запросы на вытягивание
| Сочетание клавиш | Описание:
|-----------|------------
|<kbd>Q</kbd> | Запрос рецензента. Дополнительные сведения см. в разделе [Запрос проверки запроса на вытягивание](/articles/requesting-a-pull-request-review/).
|<kbd>M</kbd> | Задание вехи. Дополнительные сведения см. в разделе [Связывание вех с проблемами и запросами на вытягивание](/articles/associating-milestones-with-issues-and-pull-requests/).
|<kbd>L</kbd> | Применение метки. Дополнительные сведения см. в разделе [Применение меток к проблемам и запросам на вытягивание](/articles/applying-labels-to-issues-and-pull-requests/).
|<kbd>А</kbd> | Задание уполномоченного. Дополнительные сведения см. в разделе [Назначение проблем и запросов на вытягивание другим пользователям {% data variables.product.company_short %}](/articles/assigning-issues-and-pull-requests-to-other-github-users/).
|<kbd>X</kbd> | Связывание с проблемой или запросом на вытягивание из того же репозитория. Дополнительные сведения см. в разделе [Связывание запроса на вытягивание с проблемой](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue/).
|<kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> (Windows и Linux) | Переключение между вкладками **Запись** и **Предварительный просмотр**{% ifversion fpt or ghec %}
|<kbd>ALT</kbd> и щелчок мышью | При создании проблемы из списка задач откройте форму новой проблемы на текущей вкладке, удерживая клавишу <kbd>ALT</kbd> и щелкнув {% octicon "issue-opened" aria-label="The issue opened icon" %} в правом верхнем углу задачи. Дополнительные сведения см. в разделе [Сведения о списках задач](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists).
|<kbd>SHIFT</kbd> и щелчок мышью | При создании проблемы из списка задач откройте форму новой проблемы на новой вкладке, удерживая нажатой клавишу <kbd>SHIFT</kbd> и щелкнув {% octicon "issue-opened" aria-label="The issue opened icon" %} в правом верхнем углу задачи. Дополнительные сведения см. в разделе [Сведения о списках задач](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists).
|<kbd>COMMAND</kbd> и щелчок мышью (Mac) или </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd> и щелчок мышью (Windows и Linux) | При создании проблемы из списка задач откройте форму новой проблемы в новом окне, удерживая клавишу <kbd>COMMAND</kbd> или клавиши <kbd>CTRL</kbd>+<kbd>SHIFT</kbd> и щелкнув {% octicon "issue-opened" aria-label="The issue opened icon" %} в правом верхнем углу задачи. Дополнительные сведения см. в разделе [Сведения о списках задач](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists).{% endif %}

## Вкладка "Измененные файлы" в запросах на вытягивание

| Сочетание клавиш | Описание:
|-----------|------------
|<kbd>C</kbd> | Откройте раскрывающееся меню **Фиксации** , чтобы отфильтровать, какие фиксации отображаются в различиях.
|<kbd>T</kbd> | Перемещение курсора в поле "Фильтр измененных файлов"
|<kbd>Команды</kbd>+ <kbd>Shift</kbd>+ <kbd>Ввод</kbd> (Mac) или <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>ВВОД</kbd> (Windows/Linux) | Отправка комментария к отзыву |
|<kbd>Параметр</kbd> и щелкните (Mac) или <kbd>ALT</kbd> и щелкните (Windows/Linux) | Переключение между свертыванием и расширением всех устаревших или разрешенных комментариев проверки в запросе на вытягивание (например, удерживая нажатой клавишу <kbd>ALT</kbd> и нажав кнопку **Показать устаревшие** или **Скрыть устаревшие**). |
|Щелчок мышью, затем <kbd>SHIFT</kbd> и щелчок мышью | Чтобы прокомментировать несколько строк запроса на вытягивание, щелкните номер строки, удерживайте нажатой клавишу <kbd>SHIFT</kbd>, а затем щелкните другой номер строки. Дополнительные сведения см. в разделе [Комментарий к запросу на вытягивание](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request).|

{% ifversion projects-v2 %}

## {% data variables.projects.projects_v2_caps %}

### Навигация по проекту

| Сочетание клавиш | Описание:
|-----------|------------
|<kbd>Команды</kbd>+ <kbd>f</kbd> (Mac) или <kbd>CTRL</kbd>+<kbd>f</kbd> (Windows/Linux) | Поле фильтра фокусировки
|<kbd>←</kbd> | Перемещение фокуса на ячейку влево
|<kbd>→</kbd> | Перемещение фокуса на ячейку вправо
|<kbd>↑</kbd> | Перемещение фокуса на ячейку вверх
|<kbd>↓</kbd> | Перемещение фокуса на ячейку вниз

### Управление проектом

| Сочетание клавиш | Описание:
|-----------|------------
|<kbd>ВВОД</kbd> | Переключение режима редактирования для ячейки с фокусом
|<kbd>ESCAPE</kbd> | Отмена редактирования для ячейки с фокусом
|<kbd>Команды</kbd>+ <kbd>Shift</kbd>+<kbd>\</kbd> (Mac) или <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>\</kbd> (Windows/Linux) | Открытие меню действий со строками
|<kbd>SHIFT</kbd>+<kbd>ПРОБЕЛ</kbd> | Выбор элемента
|<kbd>ПРОБЕЛ</kbd> | Открытие выбранного элемента
|<kbd>e</kbd> | Архивация выбранных элементов

{% endif %}

## {% data variables.product.prodname_projects_v1_caps %}

### Перемещение столбца

| Сочетание клавиш | Описание:
|-----------|------------
|<kbd>ВВОД</kbd> или <kbd>ПРОБЕЛ</kbd> | Начало перемещения столбца с фокусом
|<kbd>ESC</kbd> | Отмена выполняемого перемещения
|<kbd>ВВОД</kbd> | Завершение выполняемого перемещения
|<kbd>←</kbd> или <kbd>H</kbd> | Перемещение столбца влево
|<kbd>COMMAND</kbd>+<kbd>←</kbd> или <kbd>COMMAND</kbd>+<kbd>H</kbd> (Mac) либо </br> <kbd>CTRL</kbd>+<kbd>←</kbd> или <kbd>CTRL</kbd>+<kbd>H</kbd> (Windows и Linux) | Перемещение столбца в крайнюю левую позицию
|<kbd>→</kbd> или <kbd>L</kbd> | Перемещение столбца вправо
|<kbd>COMMAND</kbd>+<kbd>→</kbd> или <kbd>COMMAND</kbd>+<kbd>L</kbd> (Mac) либо </br> <kbd>CTRL</kbd>+<kbd>→</kbd> или <kbd>CTRL</kbd>+<kbd>L</kbd> (Windows и Linux) | Перемещение столбца в крайнюю правую позицию

### Перемещение карточки

| Сочетание клавиш | Описание:
|-----------|------------
|<kbd>ВВОД</kbd> или <kbd>ПРОБЕЛ</kbd> | Начало перемещения карточки с фокусом
|<kbd>ESC</kbd> | Отмена выполняемого перемещения
|<kbd>ВВОД</kbd> | Завершение выполняемого перемещения
|<kbd>↓</kbd> или <kbd>J</kbd> | Перемещение карточки вниз
|<kbd>COMMAND</kbd>+<kbd>↓</kbd> или <kbd>COMMAND</kbd>+<kbd>J</kbd> (Mac) либо </br> <kbd>CTRL</kbd>+<kbd>↓</kbd> или <kbd>CTRL</kbd>+<kbd>J</kbd> (Windows и Linux) | Перемещение карточки вниз столбца
|<kbd>↑</kbd> или <kbd>K</kbd> | Перемещение карточки вверх
|<kbd>COMMAND</kbd>+<kbd>↑</kbd> или <kbd>COMMAND</kbd>+<kbd>K</kbd> (Mac) либо </br> <kbd>CTRL</kbd>+<kbd>↑</kbd> или <kbd>CTRL</kbd>+<kbd>K</kbd> (Windows и Linux) | Перемещение карточки вверх столбца
|<kbd>←</kbd> или <kbd>H</kbd> | Перемещение карточки вниз столбца слева
|<kbd>SHIFT</kbd>+<kbd>←</kbd> или <kbd>SHIFT</kbd>+<kbd>H</kbd> | Перемещение карточки вверх столбца слева
|<kbd>COMMAND</kbd>+<kbd>←</kbd> или <kbd>COMMAND</kbd>+<kbd>H</kbd> (Mac) либо </br> <kbd>CTRL</kbd>+<kbd>←</kbd> или <kbd>CTRL</kbd>+<kbd>H</kbd> (Windows и Linux) | Перемещение карточки вниз крайнего левого столбца
|<kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>←</kbd> или <kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>H</kbd> (Mac) либо </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>←</kbd> или <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>H</kbd> (Windows и Linux) | Перемещение карточки вверх крайнего левого столбца
|<kbd>→</kbd> | Перемещение карточки вниз крайнего правого столбца
|<kbd>SHIFT</kbd>+<kbd>→</kbd> или <kbd>SHIFT</kbd>+<kbd>L</kbd> | Перемещение карточки вверх крайнего правого столбца
|<kbd>COMMAND</kbd>+<kbd>→</kbd> или <kbd>COMMAND</kbd>+<kbd>L</kbd> (Mac) либо </br> <kbd>CTRL</kbd>+<kbd>→</kbd> или <kbd>CTRL</kbd>+<kbd>L</kbd> (Windows и Linux) | Перемещение карточки вниз крайнего правого столбца
|<kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>→</kbd> или <kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>L</kbd> (Mac) либо </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>→</kbd> или <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>L</kbd> (Windows и Linux) | Перемещение карточки вниз крайнего правого столбца

### Предварительный просмотр карточки

| Сочетание клавиш | Описание:
|-----------|------------
|<kbd>ESC</kbd> | Закрытие области предварительного просмотра карточки

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_actions %}

| Сочетание клавиш | Описание:
|-----------|------------
|<kbd>COMMAND</kbd>+<kbd>ПРОБЕЛ</kbd> (Mac) или </br> <kbd>CTRL</kbd>+<kbd>ПРОБЕЛ</kbd> (Windows и Linux) | Получение предложений для файла рабочего процесса в редакторе рабочих процессов.
|<kbd>G</kbd> <kbd>F</kbd> | Переход к файлу рабочего процесса
|<kbd>SHIFT</kbd>+<kbd>T</kbd> или <kbd>T</kbd> | Переключение меток времени в журналах
|<kbd>SHIFT</kbd>+<kbd>F</kbd> или <kbd>F</kbd> | Переключение журналов в полноэкранный режим
|<kbd>ESC</kbd> | Выход из полноэкранного режима журналов

{% endif %}

## Уведомления

| Сочетание клавиш | Описание:
|-----------|------------
|<kbd>E</kbd> | Пометить как выполненное
|<kbd>SHIFT</kbd>+<kbd>U</kbd>| Отметить как непрочитанное
|<kbd>SHIFT</kbd>+<kbd>I</kbd>| Пометить как прочитанное
|<kbd>SHIFT</kbd>+<kbd>M</kbd> | Unsubscribe (отмена подписки).

## Сетевая диаграмма

| Сочетание клавиш | Описание:
|-----------|------------
|<kbd>←</kbd> или <kbd>H</kbd> | Прокрутить влево
|<kbd>→</kbd> или <kbd>L</kbd> | Прокрутить вправо
|<kbd>↑</kbd> или <kbd>K</kbd> | Прокрутка вверх
|<kbd>↓</kbd> или <kbd>J</kbd> | Прокрутка вниз
|<kbd>SHIFT</kbd>+<kbd>←</kbd> (Mac) или </br> <kbd>SHIFT</kbd>+<kbd>H</kbd> (Windows и Linux) | Прокрутка до конца влево
|<kbd>SHIFT</kbd>+<kbd>→</kbd> (Mac) или </br> <kbd>SHIFT</kbd>+<kbd>L</kbd> (Windows и Linux) | Прокрутка до конца вправо
|<kbd>SHIFT</kbd>+<kbd>↑</kbd> (Mac) или </br> <kbd>SHIFT</kbd>+<kbd>K</kbd> (Windows и Linux) | Прокрутка до конца вверх
|<kbd>SHIFT</kbd>+<kbd>↓</kbd> (Mac) или </br> <kbd>SHIFT</kbd>+<kbd>J</kbd> (Windows и Linux) | Прокрутка до конца вниз
