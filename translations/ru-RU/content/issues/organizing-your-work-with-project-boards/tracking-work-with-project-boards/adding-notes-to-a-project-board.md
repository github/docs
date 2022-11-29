---
title: 'Добавление заметок в {% data variables.product.prodname_project_v1 %}'
intro: 'В {% data variables.projects.projects_v1_board %} можно добавить заметки, чтобы не забыть о задачах или добавить сведения, связанные с {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-notes-to-a-project-board
  - /articles/adding-notes-to-a-project
  - /articles/adding-notes-to-a-project-board
  - /github/managing-your-work-on-github/adding-notes-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add notes to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: fc9df02b211056a08ed608a6c98b9d2f0b78c5b7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110142'
---
{% data reusables.projects.project_boards_old %}

{% tip %}

**Советы**
- Вы можете форматировать свои заметки с помощью синтаксиса Markdown. Например, можно использовать заголовки, ссылки, списки задач или эмодзи. Дополнительные сведения см. в разделе [Базовый синтаксис записи и форматирования](/articles/basic-writing-and-formatting-syntax).
- Вы можете использовать перетаскивание или сочетания клавиш для изменения порядка заметок и перемещения их между столбцами. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}
- Для добавления заметок в {% data variables.projects.projects_v1_board %} должен быть как минимум один столбец. Дополнительные сведения см. в разделе [Создание доски проекта](/articles/creating-a-project-board).

{% endtip %}

При добавлении URL-адреса проблемы, запроса на вытягивание или другого {% data variables.projects.projects_v1_board %} в заметку вы сможете предварительно его просмотреть в сводной карточке под текстом.

![Карточки доски проекта, показывающие предварительный просмотр проблемы и другой доски проекта](/assets/images/help/projects/note-with-summary-card.png)

## Добавление заметок в {% data variables.projects.projects_v1_board %}

1. Перейдите к {% data variables.projects.projects_v1_board %}, в который необходимо добавить заметки.
2. В столбце, в который нужно добавить заметку, щелкните {% octicon "plus" aria-label="The plus icon" %}.
![Значок плюса в заголовке столбца](/assets/images/help/projects/add-note-button.png)
3. Введите заметку и нажмите кнопку **Добавить**.
![Поле для ввода заметки и кнопка добавления карточки](/assets/images/help/projects/create-and-add-note-button.png)

  {% tip %}

  **Совет.** Вы можете ссылаться в заметке на проблему или запрос на вытягивание, введя в карточке соответствующий URL-адрес.

  {% endtip %}

## Преобразование заметки в проблему

Если вы создали заметку и обнаружили, что ее недостаточно для ваших потребностей, можно преобразовать ее в проблему.

При преобразовании заметки в проблему проблема создается автоматически с использованием содержимого из заметки. Первая строка заметки станет заголовком проблемы, а все дополнительное содержимое заметки будет добавлено в описание проблемы.

{% tip %}

**Совет.** Вы можете добавлять содержимое в текст заметки, чтобы @mention кого-то, связать с другой проблемой или запросом на вытягивание или добавить эмодзи. Эти возможности {% data variables.product.prodname_dotcom %} Flavored Markdown не поддерживаются в заметках для {% data variables.projects.projects_v1_board %}, но после преобразования заметки в проблему они будут отображаться правильно. Дополнительные сведения см. в разделе [Сведения о написании и форматировании в {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github).

{% endtip %}

1. Перейдите к заметке, которую хотите преобразовать в проблему.
{% data reusables.project-management.project-note-more-options %}
3. Нажмите кнопку **Преобразовать в проблему**.
  ![Кнопка "Преобразовать в проблему"](/assets/images/help/projects/convert-to-issue.png)
4. Если карточка находится в {% data variables.projects.projects_v1_board %} на уровне организации, в раскрывающемся меню выберите репозиторий, в который необходимо добавить проблему.
  ![Раскрывающееся меню со списком репозиториев, в которых можно создать проблему](/assets/images/help/projects/convert-note-choose-repository.png)
5. При необходимости измените предварительно заполненный заголовок проблемы и введите текст проблемы.
  ![Поля для заголовка и текста проблемы](/assets/images/help/projects/convert-note-issue-title-body.png)
6. Нажмите кнопку **Преобразовать в проблему**.
7. Заметка будет автоматически преобразована в проблему. В {% data variables.projects.projects_v1_board %} новая карточка проблемы будет находиться в том же расположении, что и предыдущая заметка.

## Изменение и удаление заметки

1. Перейдите к заметке, которую вы хотите изменить или удалить.
{% data reusables.project-management.project-note-more-options %}
3. Чтобы изменить содержимое заметки, нажмите кнопку **Изменить заметку**.
  ![Кнопка "Изменить заметку"](/assets/images/help/projects/edit-note.png)
4. Чтобы удалить содержимое заметок, нажмите кнопку **Удалить заметку**.
  ![Кнопка "Удалить заметку"](/assets/images/help/projects/delete-note.png)

## Дополнительные материалы

- "[Сведения о {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Создание {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board)"
- "[Редактирование {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"
- "[Добавление проблем и запросов на вытягивание в {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
