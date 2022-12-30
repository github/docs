---
title: Сведения о списках задач
intro: 'Списки задач позволяют разбить работы или запросы на вытягивание на отдельные небольшие задачи, а затем отслеживать завершение всего набора таких работ.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-task-lists
  - /articles/about-task-lists
  - /github/managing-your-work-on-github/about-task-lists
  - /issues/tracking-your-work-with-issues/creating-issues/about-task-lists
  - /issues/tracking-your-work-with-issues/about-task-lists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
ms.openlocfilehash: dcb8d7972e83d8d35ed2425d57e2950d64ef1352
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159994'
---
{% ifversion projects-v2-tasklists %} {% note %}

**Примечание:** Дополнительные сведения о новой итерации списков задач, которая в настоящее время находится в закрытой бета-версии, см. в разделе [Сведения о списках задач](/issues/tracking-your-work-with-issues/about-tasklists).

{% endnote %} {% endif %}

## Сведения о списках задач

Список задач — это набор задач, каждая из которых отображается в отдельной строке, и для каждой задачи можно установить или снять флажок. Флажки устанавливаются или снимаются для того, чтобы пометить задачи как завершенные или незавершенные. 

Вы можете использовать Markdown, чтобы создать список задач в любом комментарии в {% data variables.product.product_name %}. {% ifversion fpt or ghec %}Если вы ссылаетесь на проблему, запрос на вытягивание или обсуждение в списке задач, ссылка будет разворачиваться для отображения заголовка и состояния.{% endif %} 

{% ifversion not fpt or ghec %} Вы можете просматривать сводные сведения списка задач в списках проблем и запросов на вытягивание, если список задач находится в первоначальном комментарии.
{% else %}

## Сведения о списках задач в проблемах

Если добавить список задач в текст проблемы, этот список будет иметь дополнительные функциональные возможности.

- Чтобы помочь вам отслеживать работу команды по проблеме, ход выполнения списка задач проблемы отображается в различных местах в {% data variables.product.product_name %}, например в списке проблем репозитория.
- Если задача ссылается на другую проблему, и кто-то закрывает эту проблему, задача автоматически помечается флажком как завершенная. 
- Если задача требует дальнейшего отслеживания или обсуждения, вы можете преобразовать задачу в проблему. Для этого наведите указатель на задачу и щелкните значок {% octicon "issue-opened" aria-label="The issue opened icon" %} в правом верхнем углу задачи. Чтобы добавить дополнительные сведения перед созданием проблемы, можно открыть новую форму проблемы с помощью сочетаний клавиш. Дополнительные сведения см. в разделе [Сочетания клавиш](/github/getting-started-with-github/using-github/keyboard-shortcuts#issues-and-pull-requests).
- Все проблемы, на которые есть ссылки в списке задач, указывают, что они отслеживаются в ссылающейся проблеме.

![Отрисованный список задач](/assets/images/help/writing/task-list-rendered.png)

{% endif %}

## Создание списков задач

{% data reusables.repositories.task-list-markdown %}

{% tip %}

**Совет.** Нельзя создавать элементы списка задач в закрытых проблемах или проблемах со связанными запросами на вытягивание.

{% endtip %}

## Изменение порядка задач

Вы можете изменить порядок элементов в списке задач, щелкнув слева от флажка задачи и перетащив задачу в новое место. Вы можете изменять порядок задач в разных списках в одном комментарии, но в разных комментариях это делать нельзя.

{% ifversion fpt %} ![Переупорядоченный список задач](/assets/images/help/writing/task-list-reordered.gif) {% else %} ![Переупорядоченный список задач](/assets/images/enterprise/writing/task-lists-reorder.gif) {% endif %}

{% ifversion fpt %}

## Навигация по отслеживаемым проблемам

Все проблемы, на которые есть ссылки в списке задач, указывают, что они отслеживаются проблемой, содержащей список задач. Чтобы перейти к отслеживающей проблеме из отслеживаемой проблемы, щелкните номер отслеживающей проблемы в разделе **Отслеживается в** рядом с состоянием проблемы.

![Пример отслеживающей проблемы](/assets/images/help/writing/task_list_tracked.png)

{% endif %}

## Дополнительные материалы

{% ifversion code-scanning-task-lists %}
* [Отслеживание оповещений {% data variables.product.prodname_code_scanning %} в проблемах с использованием списков задач](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/tracking-code-scanning-alerts-in-issues-using-task-lists){% endif %}
