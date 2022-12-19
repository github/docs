---
title: Фильтрация файлов в запросе на вытягивание
intro: 'Чтобы быстро просмотреть изменения в большом запросе на вытягивание, можно отфильтровать измененные файлы{% ifversion pr-tree-view %} или использовать дерево файлов для перехода между файлами{% endif %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
  - /articles/filtering-files-in-a-pull-request-by-file-type
  - /articles/filtering-files-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/filtering-files-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filter files
ms.openlocfilehash: 1ca50334e4329d40ee164cd01523abc69e127ab3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884176'
---
Можно отфильтровать файлы в запросе на вытягивание по типу расширения файла, например, `.html` или `.js`, отсутствию расширения, владению кодом или файлам с точкой.{% ifversion pr-tree-view %} Также можно использовать дерево файлов для фильтрации по пути к файлу, навигации между файлами или просмотру представления на высоком уровне измененных файлов. {% endif %}

## Использование раскрывающегося списка фильтра файлов

{% tip %}

**Совет.** Чтобы упростить просмотр различий запросов на вытягивание, можно также временно скрыть удаленные или уже просмотренные файлы в различиях запросов на вытягивание, в раскрывающемся меню фильтра файлов.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. В списке щелкните запрос на вытягивание, который нужно отфильтровать.
{% data reusables.repositories.changed-files %}
4. Используйте раскрывающееся меню фильтра файлов и выберите, отмените выбор или щелкните нужные фильтры.
  ![Параметр фильтра файлов над различием запросов на вытягивание](/assets/images/help/pull_requests/file-filter-option.png)
5. При необходимости, чтобы очистить выделение фильтра, на вкладке **Измененные файлы** щелкните **Очистить**.
  ![Очистка выделения фильтра файлов](/assets/images/help/pull_requests/clear-file-filter.png)

{% ifversion pr-tree-view %}
## Использование дерева файлов

{% data reusables.repositories.sidebar-pr %}
1. В списке щелкните запрос на вытягивание, который нужно отфильтровать.
{% data reusables.repositories.changed-files %}

1. Щелкните файл в дереве файлов, чтобы просмотреть соответствующее различие файлов. Если дерево файлов скрыто, щелкните {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %}, чтобы отобразить его.

   {% note %}

   **Примечание**. Дерево файлов не будет отображаться, если ширина экрана слишком узкая или если запрос на вытягивание содержит только один файл.

   {% endnote %}
   
   ![Снимок экрана: поле поиска "Отфильтровать измененные файлы" с выделенным деревом файлов](/assets/images/help/repository/file-tree.png)
1. Чтобы выполнить фильтрацию по пути к файлу, введите часть или весь путь к файлу в поле поиска **Отфильтровать измененные файлы**. В качестве альтернативы используйте раскрывающийся список фильтров файлов. Дополнительные сведения см. в разделе [Использование раскрывающегося списка фильтров файлов](#using-the-file-filter-dropdown).

{% endif %}

## Дополнительные материалы

- [Сравнение ветвей в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)
- [Поиск измененных методов и функций в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request)
