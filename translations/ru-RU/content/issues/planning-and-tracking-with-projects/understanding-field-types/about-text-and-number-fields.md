---
title: О текстовых и числовых полях
shortTitle: About text and number fields
intro: В проект можно добавить настраиваемые текстовые и числовые поля.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
- Projects
ms.openlocfilehash: 2ef01bbd4ec13e37fdcd95e2a536e73c6da2304d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109264"
---
Текстовые поля можно использовать для добавления в проект заметок или любого другого текста.

Текстовые поля можно использовать в фильтрах, например: `field:"exact text"`. Текстовые поля и заголовки элементов также будут использоваться при фильтрации текста без указания поля. 

Числовые поля также можно использовать в фильтрах. Для фильтрации по числовому полю можно использовать диапазоны `>`, `>=`, `<`, `<=` и `..`. Пример: `field:5..15` или `field:>=20`. Дополнительные сведения см. в статье [Фильтрация проектов](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).

## Добавление текстового поля

{% data reusables.projects.new-field %}
1. Выберите **Текст**
   ![Снимок экрана: вариант "Текст"](/assets/images/help/projects-v2/new-field-text.png)
1. Выберите команду **Сохранить**.
   ![Снимок экрана: кнопка "Сохранить"](/assets/images/help/projects-v2/new-field-save.png)

Или откройте палитру команд проекта, нажав {% data variables.projects.command-palette-shortcut %}, и начните вводить "создать поле".

## Добавление числового поля

{% data reusables.projects.new-field %}
1. Выберите **Число**
   ![Снимок экрана: вариант "Число"](/assets/images/help/projects-v2/new-field-number.png)
1. Выберите команду **Сохранить**.
   ![Снимок экрана: кнопка "Сохранить"](/assets/images/help/projects-v2/new-field-save.png)

Или откройте палитру команд проекта, нажав {% data variables.projects.command-palette-shortcut %}, и начните вводить "создать поле".
