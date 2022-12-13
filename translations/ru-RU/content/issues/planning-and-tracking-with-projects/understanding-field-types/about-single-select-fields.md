---
title: Сведения об отдельных полях выбора
shortTitle: About single select fields
intro: Вы можете создать поля одиночного выбора с определенными вариантами, которые можно выбрать в раскрывающемся меню.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
- Projects
ms.openlocfilehash: 1dfb11e43de04bd55f544a9fb97a0a9346a22d96
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109255"
---
Вы можете выполнять фильтрацию по полям одиночного выбора, указав вариант, например: `fieldname:option`. Вы можете отфильтровать несколько значений, указав разделенный запятыми список параметров, например: `fieldname:option,option` Дополнительные сведения см. в статье [Фильтрация проектов](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).

Поля с одиночным выбором могут содержать до 50 вариантов. 

## Добавление поля одиночного выбора

{% data reusables.projects.new-field %}
1. Выбор **Одиночный выбор**
   ![Снимок экрана: параметры "Одиночный выбор"](/assets/images/help/projects-v2/new-field-single-select.png)
1. Под полем "Параметры" введите первый параметр.
   ![Снимок экрана: параметр "Одиночный выбор"](/assets/images/help/projects-v2/single-select-create-with-options.png)
   - Чтобы добавить дополнительные варианты, нажмите **Добавить вариант**.
1. Выберите команду **Сохранить**.
   ![Снимок экрана: кнопка "Сохранить"](/assets/images/help/projects-v2/new-field-save.png)

Или откройте палитру команд проекта, нажав {% data variables.projects.command-palette-shortcut %}, и начните вводить "создать поле".

## Изменение поля одиночного выбора

{% data reusables.projects.project-settings %}
1. Щелкните имя поля одиночного выбора, которое вы хотите настроить.
   ![Снимок экрана: поле одиночного выбора](/assets/images/help/projects-v2/select-single-select.png)
1. Измените существующие параметры или нажмите **Добавить вариант**.
   ![Снимок экрана: параметр "Одиночный выбор"](/assets/images/help/projects-v2/single-select-edit-options.png)
1. Чтобы удалить вариант, щелкните {% octicon "x" aria-label="The x icon" %}.
   ![Снимок экрана: кнопка "Удалить"](/assets/images/help/projects-v2/single-select-delete.png)
1. Нажмите **Сохранить варианты**.
   ![Снимок экрана: кнопка "Сохранить"](/assets/images/help/projects-v2/save-options.png)
