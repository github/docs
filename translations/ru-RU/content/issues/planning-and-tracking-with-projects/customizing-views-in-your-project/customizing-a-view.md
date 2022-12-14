---
title: Настройка представления
intro: Отображение необходимых сведений путем изменения макета, группировки и сортировки в проекте.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
- /issues/trying-out-the-new-projects-experience/customizing-your-project-views
type: tutorial
topics:
- Projects
ms.openlocfilehash: 0a7d1076fcf1a9d7f20b65a5e0a75b7d8029f834
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148106776"
---
## Изменение макета проекта

Проект можно просматривать в виде таблицы или доски.

{% data reusables.projects.open-view-menu %}
1. В разделе "Макет" щелкните **Таблица** или **Доска**.
   ![Снимок экрана: параметр "Макет"](/assets/images/help/projects-v2/table-or-board.png)

 

Или откройте палитру команд проекта, нажав {% data variables.projects.command-palette-shortcut %}, и начните вводить "переключить макет".

## Отображение и скрытие полей

Вы можете отобразить или скрыть определенное поле.

{% data reusables.projects.open-view-menu %}
1. В разделе "Конфигурация" щелкните {% octicon "note" aria-label="the note icon" %} и список отображаемых полей.
   ![Снимок экрана: пункт меню "Показать и скрыть поля"](/assets/images/help/projects-v2/show-hide-fields-menu-item.png)
1. Выберите или отмените выбор полей, которые следует показать или скрыть.
   ![Снимок экрана: меню "Показать и скрыть поля"](/assets/images/help/projects-v2/show-hide-fields.png)

Вы также можете скрыть отдельные поля в представлении таблицы.

1. Рядом с полем, которое вы хотите скрыть, щелкните {% octicon "kebab-horizontal" aria-label="the kebab icon" %}.
   ![Снимок экрана: значок меню поля](/assets/images/help/projects-v2/modify-field-menu.png)
1. Щелкните {% octicon "eye-closed" aria-label="the eye closed icon" %} **Скрыть поле**.
   ![Снимок экрана: пункт меню "Скрыть поле"](/assets/images/help/projects-v2/hide-field-via-menu.png)

Или откройте палитру команд проекта, нажав {% data variables.projects.command-palette-shortcut %}, и начните вводить "показать", "скрыть" или имя поля.

## Изменение порядка полей

Вы можете изменить порядок полей в макете таблицы.

1. Щелкните заголовок поля.
   ![Снимок экрана: заголовок поля](/assets/images/help/projects-v2/select-field-header.png)
2. Перетащите поле в нужное место.

## Изменение порядка строк

Вы можете изменить порядок строк в макете таблицы.

1. Щелкните номер в начале строки.
   ![Снимок экрана: номер строки](/assets/images/help/projects-v2/select-row-number.png)
2. Перетащите строку в нужное место.

## Сортировка по значениям полей

В макете таблицы вы можете сортировать элементы по значению поля.

{% note %}

**Примечание**. В отсортированной таблице нельзя изменить порядок строк вручную.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. Нажмите кнопку **Сортировать**.
   ![Снимок экрана: пункт меню "Сортировать"](/assets/images/help/projects-v2/sort-menu-item.png)
1. Выберите поле, по которому нужно выполнить сортировку.
   ![Снимок экрана: меню "Сортировать"](/assets/images/help/projects-v2/sort-menu.png)
2. Чтобы изменить направление сортировки, щелкните {% octicon "sort-desc" aria-label="the sort icon" %}.
   ![Снимок экрана: параметр "Порядок сортировки"](/assets/images/help/projects-v2/sort-order.png)
3. Чтобы удалить сортировку, щелкните {% octicon "x" aria-label="the x icon" %} **Без сортировки** в нижней части списка.
   ![Снимок экрана: "Без сортировки"](/assets/images/help/projects-v2/no-sorting.png)

Или откройте палитру команд проекта, нажав {% data variables.projects.command-palette-shortcut %}, и начните вводить "сортировать".

## Группировка по значениям полей в макете таблицы

В макете таблицы можно группировать элементы по значению настраиваемого поля. Если перетащить элемент в новую группу, к нему будет применено значение этой группы. Допустим, выполнена группировка по полю "Состояние". В таком случае, если перетащить элемент с состоянием `In progress` в группу `Done`, ему будет присвоено состояние `Done`. Соответственно, при добавлении нового элемента в группу он получает значение группы.

{% note %}

**Примечание**. Не поддерживается группировка по заголовку, меткам, рецензентам или связанным запросам на вытягивание.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. Щелкните {% octicon "rows" aria-label="the rows icon" %} **Группировать**.
   ![Снимок экрана: пункт меню "Группировать"](/assets/images/help/projects-v2/group-menu-item.png)
1. Выберите поле, по которому нужно выполнять группировку.
   ![Снимок экрана: меню "Группировать"](/assets/images/help/projects-v2/group-menu.png)
2. Чтобы отключить группировку, щелкните {% octicon "x" aria-label="the x icon" %} **Без группировки** в нижней части списка.
   ![Снимок экрана: "Без группировки"](/assets/images/help/projects-v2/no-grouping.png)

Или откройте палитру команд проекта, нажав {% data variables.projects.command-palette-shortcut %}, и начните вводить "группировать".

{% ifversion projects-v2-numeric-summary %}

## Отображение суммы числового поля

Представление можно настроить для отображения суммы одного из нескольких числовых полей, включая количество элементов в группе или столбце. Например, если у вас есть числовое поле, отслеживающее количество часов, которое может занять каждый элемент, можно отобразить сумму этих часов для каждой группы или столбца.

В макете доски суммы полей отображаются в верхней части каждого столбца. В макете таблицы при включении группировки по полю суммы полей включаются в заголовок каждой группы.

{% data reusables.projects.open-view-menu %}
1. Щелкните {% octicon "number" aria-label="значок числа" %} **Сумма поля**.
   
   ![Снимок экрана: пункт меню "Сумма полей"](/assets/images/help/projects-v2/field-sum-menu.png)
   
1. Выберите поля, которые вы хотите включить.
   
   ![Снимок экрана: меню "Сумма полей"](/assets/images/help/projects-v2/field-sum-select-field.png)
   

{% endif %}

## Настройка поля столбца в макете доски

В макете доски можно выбрать любое отдельное поле выбора или итерации для столбцов. При перетаскивании элемента в новый столбец к нему применяется значение этого столбца. Допустим, для столбцов доски используется поле "Состояние". В таком случае, если перетащить элемент с состоянием `In progress` в столбец `Done`, ему будет присвоено состояние `Done`.

{% data reusables.projects.open-view-menu %}
1. Щелкните {% octicon "columns" aria-label="the columns icon" %} **Поле столбца**.
   ![Снимок экрана: пункт меню "Поле столбца"](/assets/images/help/projects-v2/column-field-menu-item.png)
1. Выберите поле, которое необходимо использовать.
   ![Снимок экрана: меню "Поле столбце"](/assets/images/help/projects-v2/column-field-menu.png)

Или откройте палитру команд проекта, нажав {% data variables.projects.command-palette-shortcut %}, и начните вводить "поле столбца".

{% ifversion projects-v2-column-visibility %}

## Отображение и скрытие столбцов в макете платы

В макете доски можно выбрать отображаемые столбцы. Доступные столбцы состоят из содержимого выбранного поля столбца.

1. В макете доски прокрутите страницу справа от столбцов и выберите {% octicon "plus" aria-label="значок плюса" %}.
   
   ![Снимок экрана: кнопка "плюс"](/assets/images/help/projects-v2/board-add-column.png)
   
1. Выберите столбцы, которые нужно отобразить.
   
   ![Снимок экрана: список столбцов](/assets/images/help/projects-v2/board-select-columns.png)
   
{% endif %}
