---
title: 'Архивирование элементов из {% data variables.projects.project_v2 %}'
shortTitle: Archiving items
intro: 'Вы можете архивировать элементы, чтобы их потом можно было восстановить, или окончательно удалять их.'
miniTocMaxHeadingLevel: 2
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 2348805c920e456e2b8388c2ac41d4badd757703
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107720'
---
## Архивирование элементов

Элемент можно архивировать, чтобы сохранить контекст его выполнения в проекте, но удалить из представлений проекта. {% ifversion projects-v2-auto-archive %} Вы также можете настроить встроенные рабочие процессы проекта для автоматического архивирования элементов, соответствующих определенным критериям. Дополнительные сведения см. в разделе "[Архивация элементов автоматически](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically)". {% endif %}

{% data reusables.projects.select-an-item %} {% data reusables.projects.open-item-menu %}
1. Нажмите кнопку **Архивировать**.
   ![Снимок экрана: параметр "Архивировать"](/assets/images/help/projects-v2/archive-menu-item.png)
1. При появлении запроса подтвердите свой выбор, нажав кнопку **Архивировать**.
   ![Снимок экрана: запрос на архивирование](/assets/images/help/projects-v2/archive-item-prompt.png)

## Восстановление архивированных элементов

1. Перейдите к своему проекту
1. В правом верхнем углу щелкните {% octicon "kebab-horizontal" aria-label="The menu icon" %}, чтобы открыть меню.
  ![Снимок экрана: значок меню](/assets/images/help/projects-v2/open-menu.png)
1. В меню щелкните {% octicon "archive" aria-label="The archive icon" %} **Архивированные элементы**.
  ![Снимок экрана: пункт меню "Архивированные элементы"](/assets/images/help/projects-v2/archived-items-menu-item.png)
1. При необходимости можно отфильтровать отображаемые архивированные элементы, для этого введите фильтр в текстовое поле над списком элементов. Дополнительные сведения о доступных фильтрах см. в статье [Фильтрация проектов](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).
   ![Снимок экрана: поле фильтрации архивированных элементов](/assets/images/help/issues/filter-archived-items.png)   
1. Выберите элементы, которые хотите восстановить, щелкнув поле слева от их названий.
   ![Снимок экрана: флажки рядом с архивированными элементами](/assets/images/help/issues/select-archived-item.png)   
1. Чтобы восстановить выбранные элементы, щелкните **Восстановить** над списком элементов. 
   ![Снимок экрана: кнопка "Восстановить"](/assets/images/help/issues/restore-archived-item-button.png)

## Удаление элементов

Также можно полностью удалить элемент из проекта.

{% data reusables.projects.select-an-item %} {% data reusables.projects.open-item-menu %}
1. Нажмите **Удалить из проекта**.
   ![Снимок экрана: кнопка "Удалить"](/assets/images/help/projects-v2/delete-menu-item.png)
1. При появлении запроса подтвердите свой выбор, нажав кнопку **Удалить**.
   ![Снимок экрана: запрос на удаление](/assets/images/help/projects-v2/delete-item-prompt.png)
