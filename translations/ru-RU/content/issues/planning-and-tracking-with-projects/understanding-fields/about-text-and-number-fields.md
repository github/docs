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
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-text-and-number-fields
ms.openlocfilehash: 531931f74afd1d4fdc206002742d8d27bca67dc4
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160090'
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
