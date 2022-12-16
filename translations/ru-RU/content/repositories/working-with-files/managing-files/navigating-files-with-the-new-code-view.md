---
title: Навигация по файлам с помощью нового представления кода (бета-версия)
intro: С помощью нового представления кода (бета-версия) вы можете просматривать код в контексте с легко перемещаемым деревом файлов и интегрированным поиском символов.
allowTitleToDifferFromFilename: true
versions:
  feature: file-tree-view
topics:
  - Repositories
shortTitle: New code view (beta)
ms.openlocfilehash: 0c0fe588c92f67c92d7f3ffaa09716da39ac4551
ms.sourcegitcommit: 57bef7d45acfa987d82e320c7581c87df320a28a
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172190'
---
{% note %}

**Примечание**. {% data reusables.search.code-search-code-view-beta-note %} 

{% data reusables.search.code-search-link %}

{% endnote %}

## Сведения о новом представлении кода (бета-версия)
Бета-версия нового представления кода улучшает навигацию с помощью представления дерева файлов, упрощает редактирование файлов, предоставляет панель символов для поиска и навигации по символам, а также обновляет представление blame для поддержания контекста файла. Новое представление кода интегрировано с новой системой поиска кода и интерфейсом поиска в ограниченной общедоступной бета-версии {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.search.code-search-link %}

Чтобы получить доступ к новому представлению кода (бета-версия) вместе с новым поиском кода, можно зарегистрироваться в [списке ожидания](https://github.com/features/code-search-code-view/signup).

Чтобы оставить отзыв о бета-версии нового представления кода, ознакомьтесь с [форумом для обсуждения](https://github.com/orgs/community/discussions/categories/repositories).

## Включение и отключение нового поиска кода и представления кода (бета-версия)

{% data reusables.search.enabling-and-disabling-code-search-and-view-beta %}

## Использование представления дерева файлов
Новое представление дерева файлов — это панель, которая отображает каталоги и файлы репозитория в легкодоступном дереве. Вы можете быстро перемещаться между каталогами и файлами и понимать контекст для каждого просматриваемого элемента.

1. Выберите репозиторий, а затем щелкните каталог или файл в этом репозитории, чтобы открыть представление дерева файлов.

  ![Снимок экрана: репозиторий github/docs с акцентом на представление дерева файлов](/assets/images/help/repository/file-tree-view-directory-selected.png)

1. Чтобы найти определенный каталог или файл, щелкните {% octicon "filter" aria-label="The filter icon" %} **Перейти к** панели поиска файлов, а затем введите имя каталога или файла и выберите каталог или файл из результатов. Вы можете просмотреть путь к файлу для каталога или файла под каждым результатом поиска.

  ![Снимок экрана: представление дерева файлов с акцентом на панели поиска "Перейти к файлу"](/assets/images/help/repository/file-tree-view-jump-to-file.png)

     - Для поиска в репозитории с помощью панели поиска {% data variables.product.prodname_dotcom %} щелкните {% octicon "search" aria-label="The search icon" %}.

        ![Снимок экрана: представление дерева файлов с акцентом на значке поиска](/assets/images/help/repository/file-tree-view-search-icon.png)

1. Чтобы переключиться между ветвями, выберите раскрывающееся меню {% octicon "git-branch" aria-label="The branch icon" %} и выберите нужную ветвь в результатах. Чтобы просмотреть все ветви для репозитория, щелкните **Просмотреть все ветви**.

  ![Снимок экрана: представление дерева файлов с акцентом на вкладке "Ветви" раскрывающегося меню ветви](/assets/images/help/repository/file-tree-view-branch-dropdown.png)

1. Чтобы переключаться между тегами, выберите в раскрывающемся меню ветвь {% octicon "git-branch" aria-label="The branch icon" %}, **перейдите** на вкладку Теги и выберите нужный тег в результатах. Чтобы просмотреть все теги для репозитория, щелкните **Просмотреть все теги**.

  ![Снимок экрана: представление дерева файлов с акцентом на вкладке "Теги" раскрывающегося меню ветви](/assets/images/help/repository/file-tree-view-branch-dropdown-tags.png)

## Работа с файлами
Новое представление кода также содержит обновления о способах работы с файлами. Существующие функции, такие как редактирование файла, создание или отправка файла, а также удаление файла или каталога, были оптимизированы. Теперь у вас есть быстрый доступ к редактированию файла в github.dev или {% data variables.product.prodname_desktop %} и встроенной функции поиска в файле. 

1. Выберите репозиторий, а затем щелкните файл в этом репозитории, чтобы открыть новое представление кода.

  ![Снимок экрана: репозиторий github/docs с акцентом на выбранный файл в представлении дерева файлов](/assets/images/help/repository/file-tree-view-file-selected.png)

1. Чтобы изменить файл во встроенном редакторе файлов, щелкните {% octicon "pencil" aria-label="The pencil icon" %}.

  ![Снимок экрана: редактор файлов в новом представлении кода с акцентом на значке редактирования](/assets/images/help/repository/code-view-edit-icon.png)

1. Чтобы изменить файл на github.dev {% data variables.codespaces.serverless %} или {% data variables.product.prodname_desktop %}, выберите {% octicon "triangle-down" aria-label="The down triangle icon" the down-the down" aria-label="The pencil-label icon" %} рядом с {% octicon "pencil" aria-label="The pencil icon" %}, а затем щелкните **github.dev** или **{% data variables.product.prodname_desktop %}**.

  {% note %}

  **Примечание:** Сейчас github.dev {% data variables.codespaces.serverless %} находится в бета-версии. Вы можете оставить отзыв [в наших обсуждениях](https://github.com/community/community/discussions/categories/general).

  {% endnote %}

  ![Снимок экрана: редактор файлов в новом представлении кода с акцентом на раскрывающееся меню редактирования](/assets/images/help/repository/code-view-edit-dropdown.png)

1. Чтобы найти определенные символы в файле, просмотрите необработанный код файла, нажав кнопку **Код** . Затем нажмите <kbd>клавиши COMMAND</kbd>+<kbd>F</kbd> (Mac) или <kbd>CTRL</kbd>+<kbd>F</kbd> (Windows/Linux) и введите нужные символы. Для перехода между результатами можно нажать клавишу <kbd>RETURN</kbd> (Mac) или <kbd>ВВОД</kbd> (Windows/Linux) или щелкнув {% octicon "chevron-down" aria-label="The downs-chevron icon" %} и {% octicon "chevron-up" aria-label="The up chevron icon" %}.

  {% note %}

  **Примечание:** Чтобы использовать функцию поиска по умолчанию в браузере, дважды нажмите <kbd>клавиши COMMAND</kbd>+<kbd>F</kbd> (Mac) или <kbd>CTRL</kbd>+<kbd>F</kbd> (Windows/Linux). Имейте в виду, что функция поиска по умолчанию в браузере не сможет выполнять поиск по всему большому файлу, в то время как поиск, интегрированный в новое представление кода, будет выполняться.

  {% endnote %}

  ![Снимок экрана: функция "Найти в файле" в новом представлении кода](/assets/images/help/repository/code-view-find-in-file.png)

1. Чтобы добавить новый файл в определенный каталог, щелкните этот каталог, а затем щелкните {% octicon "plus" aria-label="The plus sign icon" %} **Новый файл** или щелкните {% octicon "plus" aria-label="The plus icon" %} в представлении дерева файлов.

  ![Снимок экрана: представление дерева файлов с выделением значка "плюс"](/assets/images/help/repository/file-tree-view-new-file-icon.png)

1. Чтобы удалить каталог или файл, перейдите к каталогу или файлу и щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} . Затем щелкните **Удалить каталог** или **Удалить файл**.

  ![Снимок экрана: меню параметров в новом представлении кода с акцентом на параметр "Удалить каталог"](/assets/images/help/repository/code-view-delete-directory.png)

1. Чтобы отправить файл, перейдите в выбранный каталог, а затем щелкните {% octicon "upload" aria-label="The upload icon" %} **Отправить файлы** или перетащите файл в браузер.

  ![Снимок экрана: кнопка "Отправить файлы" в новом представлении кода](/assets/images/help/repository/code-view-upload-files.png)

## Использование панели символов
Теперь вы можете быстро просматривать символы, такие как функции или классы, и перемещаться между ними в коде с помощью панели символов. Вы можете искать символы в одном файле, во всех файлах репозитория или даже во всех общедоступных репозиториях в {% data variables.product.prodname_dotcom %}.

Поиск символов — это функция нового поиска кода (бета-версия). Дополнительные сведения см. в разделе [Основные сведения о синтаксисе поиска кода GitHub (бета-версия)](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier)".

1. Выберите репозиторий, а затем перейдите к файлу с символами.
2. Чтобы открыть область символов, щелкните {% octicon "code-square" aria-label="The code square icon" %}.

  ![Снимок экрана: значок области символов в новом представлении кода](/assets/images/help/repository/code-view-symbols-pane-icon.png)

  Кроме того, можно открыть область символов, щелкнув подходящий символ в файле. Нажимаемые символы выделяются желтым цветом при наведении на них указателя мыши.

  ![Снимок экрана: файл в новом представлении кода с акцентом на символе, который можно щелкнуть](/assets/images/help/repository/code-view-clickable-symbol.png)

1. Щелкните нужный символ в области символов или в самом файле.

  ![Снимок экрана: область символов с акцентом на автоматически заполненный символ](/assets/images/help/repository/code-view-symbols-pane-symbol.png)

   - Чтобы найти символ в репозитории в целом, щелкните **Поиск этого символа в этом репозитории**. Чтобы найти символ во всех репозиториях в {% data variables.product.prodname_dotcom %}, щелкните **все репозитории**.

      ![Снимок экрана: область символов с акцентом на параметры для расширения области поиска символов](/assets/images/help/repository/code-view-symbols-pane-expand-search.png)

1. Чтобы перейти между ссылками на символ, щелкните {% octicon "chevron-down" aria-label="The downs-chevron icon" %} или {% octicon "chevron-up" aria-label="The up-up chevron icon" %}.

  ![Снимок экрана: область символов с акцентом на навигационные шевроны поиска](/assets/images/help/repository/code-view-symbol-result-navigation.png)

1. Чтобы перейти к определенной ссылке на символ, щелкните результат поиска символов в разделе {% octicon "chevron-down" aria-label="The down-down chevron icon" %} **В этом файле**.

  ![Снимок экрана: область символов с акцентом на результат поиска символов](/assets/images/help/repository/code-view-symbol-search-result.png)

1. Чтобы выйти из поиска определенного символа, щелкните {% octicon "arrow-left" aria-label="The left arrow icon" %} **Все символы**.

  ![Снимок экрана: область символов с акцентом на кнопке "Все символы"](/assets/images/help/repository/code-view-symbols-pane-all-symbols.png)

## Использование представления "Вина"
Вместо того чтобы потерять контекст файла при входе в представление blame, вы можете использовать новое представление кода, чтобы быстро переключаться между представлением blame, представлением необработанного кода и предварительным просмотром файла (в зависимости от типа файла).

1. Выберите репозиторий, а затем щелкните файл в этом репозитории, чтобы открыть новое представление кода.

  ![Снимок экрана: репозиторий github/docs с акцентом на выбранный файл в представлении дерева файлов](/assets/images/help/repository/file-tree-view-file-selected.png)

1. Чтобы просмотреть журнал исправлений файла, нажмите кнопку **Обвинить**. Это представление предоставляет построчный журнал исправлений с кодом в файле, разделенным фиксацией. Каждая фиксация содержит автора, описание фиксации и дату фиксации.

  ![Снимок экрана: новое представление кода с акцентом на кнопке "Обвинить"](/assets/images/help/repository/code-view-blame-button.png)

   - Чтобы просмотреть версии файла перед определенной фиксацией, щелкните {% octicon "versions" aria-label="The versions icon" %}.

      ![Снимок экрана: фиксация в представлении "Обвинения" с акцентом на значке версий](/assets/images/help/repository/code-view-blame-hide-commit.png)

   - Чтобы просмотреть дополнительные сведения о конкретных фиксациях, щелкните описание фиксации.

      ![Снимок экрана: фиксация в представлении "Обвинения" с акцентом на описании фиксации](/assets/images/help/repository/code-view-blame-commit-description.png)

1. Чтобы вернуться к представлению необработанного кода, щелкните **Код**.

  ![Снимок экрана: панель инструментов представления кода с акцентом на кнопке представления кода](/assets/images/help/repository/code-view-button.png)

   - При просмотре файла Markdown можно также нажать кнопку **Предварительный просмотр** , чтобы вернуться к представлению с примененным форматированием Markdown.

      ![Снимок экрана: панель инструментов представления кода с акцентом на кнопке предварительного просмотра Markdown](/assets/images/help/repository/code-view-preview-button.png)

## Дополнительные материалы

- ["Перемещение файла в новое расположение](/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location)"
- [Сведения о поиске кода GitHub (бета-версия)](/search-github/github-code-search/about-github-code-search)"
