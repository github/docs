---
title: Сведения о полях Track и Tracked-by
shortTitle: About Tracks and Tracked-by fields
intro: Вы можете просмотреть подзадачи проблем в проектах.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-tasklists
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 74cd26d20882a00ac8c7ac1d109cc6810286cec6
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160037'
---
{% data reusables.projects.tasklists-release-stage %}

Вы можете включить поля Track и Tracked-by в проектах, чтобы увидеть связи между проблемами при добавлении подзадач в списки задач. Дополнительные сведения о создании иерархий проблем в списках задач см. в разделе [Сведения о списках задач](/issues/tracking-your-work-with-issues/about-tasklists).

Поле Отслеживаемое можно использовать для группировки элементов, создавая представление, в которое четко отображаются подзадачи каждой проблемы и работа, необходимая для их завершения. Дополнительные сведения см. в разделе [Группирование по значениям полей в макете таблицы](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#grouping-by-field-values-in-table-layout).

Можно также выполнить фильтрацию по полю Отслеживаемое, чтобы отобразить только элементы, которые отслеживаются определенными проблемами. Начните вводить "отслеживается" и выберите проблему из списка или, если вы знаете репозиторий и номер проблемы, вы можете ввести фильтр ниже в полном объеме.

```
tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"
```

Чтобы использовать фильтр, замените `<OWNER>` на владельца репозитория, `<REPO>` на имя репозитория и `<ISSUE NUMBER>` на номер проблемы. Дополнительные сведения см. в статье [Фильтрация проектов](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).

### Включение поля отслеживаемого

Вы можете включить поле Отслеживаемое, чтобы узнать, какие проблемы отслеживают элемент в проекте.

1. В представлении таблицы в самом правом заголовке поля щелкните {% octicon "plus" aria-label="the plus icon" %}.
   
   ![Снимок экрана: кнопка "Создать поле"](/assets/images/help/projects-v2/new-field-button.png)
   
1. В разделе "Скрытые поля" нажмите кнопку **Отслеживать**.
   
   ![Снимок экрана: меню поля](/assets/images/help/projects-v2/select-tracked-by-field.png)
   

### Включение поля "Дорожки"

Вы можете включить поле Треки, чтобы узнать, какие другие проблемы отслеживает элемент в проекте.

1. В представлении таблицы в самом правом заголовке поля щелкните {% octicon "plus" aria-label="the plus icon" %}.
   
   ![Снимок экрана: кнопка "Создать поле"](/assets/images/help/projects-v2/new-field-button.png)
   
1. В разделе "Скрытые поля" щелкните **Треки**.
   
   ![Снимок экрана: меню поля](/assets/images/help/projects-v2/select-tracks-field.png)
   
