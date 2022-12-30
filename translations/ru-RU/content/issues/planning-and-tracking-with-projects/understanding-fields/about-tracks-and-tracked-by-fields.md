---
title: Сведения о дорожках и отслеживаемых по полям
shortTitle: About Tracks and Tracked by fields
intro: Вы можете просмотреть подзадачи проблем в проектах.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-tasklists
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 44c1fcf3ed4495b57a0f2dbe3e92076f0e815502
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180748'
---
{% data reusables.projects.tasklists-release-stage %}

Вы можете включить поля Track и Tracked by в проектах, чтобы увидеть связи между проблемами при добавлении подзадач в списках задач. Дополнительные сведения о создании иерархий проблем в списках задач см. в разделе [Сведения о списках задач](/issues/tracking-your-work-with-issues/about-tasklists).

Поле Отслеживается по можно использовать для группировки элементов, создавая представление, в которое четко отображаются подзадачи каждой проблемы и работа, необходимая для их завершения. Дополнительные сведения см. в разделе [Группирование по значениям полей в макете таблицы](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#grouping-by-field-values-in-table-layout).

Вы также можете отфильтровать по полю Отслеживаемые, чтобы отобразить только элементы, которые отслеживаются определенными проблемами. Либо начните вводить "tracked-by" и выберите проблему из списка, либо, если вы знаете репозиторий и номер проблемы, вы можете ввести фильтр ниже в полном объеме.

```
tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"
```

Чтобы использовать фильтр, замените `<OWNER>` владельцем репозитория, `<REPO>` именем репозитория и `<ISSUE NUMBER>` номером проблемы. Дополнительные сведения см. в статье [Фильтрация проектов](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).

### Включение поля Отслеживается по

Вы можете включить поле Отслеживаемое по, чтобы узнать, какие проблемы отслеживают элемент в проекте.

1. В представлении таблицы в самом правом заголовке поля щелкните {% octicon "plus" aria-label="the plus icon" %}.
   
   ![Снимок экрана: кнопка "Создать поле"](/assets/images/help/projects-v2/new-field-button.png)
   
1. В разделе "Скрытые поля" нажмите кнопку **Отслеживать**.
   
   ![Снимок экрана: меню полей](/assets/images/help/projects-v2/select-tracked-by-field.png)
   

### Включение поля "Дорожки"

Вы можете включить поле "Дорожки", чтобы узнать, какие другие проблемы отслеживает элемент в проекте.

1. В представлении таблицы в самом правом заголовке поля щелкните {% octicon "plus" aria-label="the plus icon" %}.
   
   ![Снимок экрана: кнопка "Создать поле"](/assets/images/help/projects-v2/new-field-button.png)
   
1. В разделе "Скрытые поля" щелкните **Дорожки**.
   
   ![Снимок экрана: меню полей](/assets/images/help/projects-v2/select-tracks-field.png)
   
