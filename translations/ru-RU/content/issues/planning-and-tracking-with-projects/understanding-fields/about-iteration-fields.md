---
title: Сведения о полях итерации
shortTitle: About iteration fields
intro: Вы можете создавать итерации для планирования предстоящих работ и группирования элементов.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-iterations
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-iteration-fields
type: tutorial
topics:
  - Projects
ms.openlocfilehash: ae598dc481c54adfb817e110794f43f0f80a7c16
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159893'
---
Можно создать поле итерации для связывания элементов с определенными повторяющимися блоками времени. Итерации можно задать в любое время, они могут включать перерывы и их можно изменять по отдельности для изменения имени и диапазона дат. С помощью проектов можно выполнять группировку по итерации, чтобы визуализировать баланс предстоящей работы, использовать фильтры для фокуса на одной итерации и выполнять сортировку по итерации.

Вы можете фильтровать итерации, указав имя итерации или `@current` для текущей итерации, `@previous` для предыдущей итерации и `@next` — для следующей. Можно также использовать операторы, такие как `>`, `>=`, `<`, `<=` и `..`.  Например, `iteration:>"Iteration 4"` и `iteration:<@current`. Дополнительные сведения см. в статье [Фильтрация проектов](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).

При первом создании поля итерации автоматически создаются три итерации.  Вы можете добавить дополнительные итерации и внести другие изменения на страницу параметров проекта.

![Снимок экрана: параметры поля итерации](/assets/images/help/issues/iterations-example.png)

## Добавление поля итерации

{% data reusables.projects.new-field %}
1. Выберите **Итерация**
   ![Снимок экрана: параметр "Итерация"](/assets/images/help/projects-v2/new-field-iteration.png)
2. Если вы не хотите, чтобы итерация началась сегодня, выберите раскрывающийся список календаря рядом с пунктом "Начало" и выберите дату начала.
   ![Снимок экрана: дата начала итерации](/assets/images/help/projects-v2/iteration-field-starts.png)
3. Чтобы изменить длительность каждой итерации, введите новое значение, а затем щелкните раскрывающийся список и выберите единицы измерения: **дни** или **недели**.
   ![Снимок экрана: длительность итерации](/assets/images/help/projects-v2/iteration-field-duration.png)
4. Выберите команду **Сохранить**.
   ![Снимок экрана: кнопка "Сохранить"](/assets/images/help/projects-v2/new-field-save-and-create.png)

Или откройте палитру команд проекта, нажав {% data variables.projects.command-palette-shortcut %}, и начните вводить "создать поле".

## Добавление новых итераций

{% data reusables.projects.project-settings %}
1. Щелкните имя поля итерации, которое вы хотите настроить.
   ![Снимок экрана: поле итерации](/assets/images/help/projects-v2/select-iteration-field.png)
1. Чтобы добавить новую итерацию той же длительности, щелкните **Add iteration** (Добавить итерацию).
   ![Снимок экрана: кнопка "Добавить итерацию"](/assets/images/help/projects-v2/add-iteration.png)
1. При необходимости, чтобы настроить длительность и время начала новой итерации, щелкните {% octicon "triangle-down" aria-label="The triangle icon" %} **Дополнительные параметры**, выберите начальную дату и длительность и нажмите кнопку **Добавить**.
   ![Снимок экрана: форма параметров добавления итерации](/assets/images/help/projects-v2/add-iteration-options.png)
1. Нажмите кнопку **Сохранить изменения**.
   ![Снимок экрана: кнопка "Сохранить"](/assets/images/help/projects-v2/iteration-save.png)

## Редактирование итерации

Вы можете изменять итерации в параметрах проекта. Вы также можете получить доступ к параметрам поля итерации, щелкнув {% octicon "triangle-down" aria-label="The triangle icon" %} в заголовке таблицы для поля и нажав кнопку **Изменить значения**.

{% data reusables.projects.project-settings %}
1. Щелкните имя поля итерации, которое вы хотите настроить.
   ![Снимок экрана: поле итерации](/assets/images/help/projects-v2/select-iteration-field.png)
1. Чтобы изменить имя итерации, щелкните имя и начните вводить текст.
   ![Снимок экрана: поле заголовка для переименования итерации](/assets/images/help/projects-v2/iteration-rename.png)
1. Чтобы изменить дату или длительность итерации, щелкните дату, чтобы открыть календарь. Щелкните день начала, затем — день окончания и нажмите кнопку **Применить**.
   ![Снимок экрана: даты итерации](/assets/images/help/projects-v2/iteration-date.png)
1. При необходимости, чтобы удалить итерацию, щелкните {% octicon "trash" aria-label="The trash icon" %}.
   ![Снимок экрана: кнопка "Удалить"](/assets/images/help/projects-v2/iteration-delete.png)
2. Нажмите кнопку **Сохранить изменения**.
   ![Снимок экрана: кнопка "Сохранить"](/assets/images/help/projects-v2/iteration-save.png)

## Вставка перерыва

Вы можете добавлять в итерации перерывы, которые обозначают периоды отвлечения от запланированной работы. Длительность нового перерыва по умолчанию равна длине последней созданной итерации.

{% data reusables.projects.project-settings %}
1. Щелкните имя поля итерации, которое вы хотите настроить.
   ![Снимок экрана: поле итерации](/assets/images/help/projects-v2/select-iteration-field.png)
2. На линии деления над итерацией справа нажмите кнопку **Вставить перерыв**.
   ![Снимок экрана: расположение кнопки "Вставить перерыв"](/assets/images/help/issues/iteration-insert-break.png)
3. При необходимости, чтобы изменить продолжительность перерыва, щелкните дату, чтобы открыть календарь. Щелкните день начала, затем — день окончания и нажмите кнопку **Применить**.
4. Нажмите кнопку **Сохранить изменения**.
   ![Снимок экрана: кнопка "Сохранить"](/assets/images/help/projects-v2/iteration-save.png)
