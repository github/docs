---
title: 'Закрытие и удаление {% data variables.projects.projects_v2 %}'
shortTitle: 'Closing and deleting {% data variables.projects.projects_v2 %}'
intro: 'Сведения о закрытии, повторном открытии и окончательном удалении {% data variables.projects.project_v2 %}.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: cfd4db85e8bd046e667b108c5c8d8c23102e0d29
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110066'
---
## Удаление проекта

Проект можно удалить без возможности восстановления.

{% data reusables.projects.project-settings %}
1. В нижней части страницы нажмите кнопку **Удалить этот проект**. 
   ![Снимок экрана: кнопка удаления проекта](/assets/images/help/issues/delete-project-button.png)
1. Ознакомьтесь с предупреждениями, а затем введите имя проекта в текстовое поле.
   ![Снимок экрана: подтверждение удаления проекта](/assets/images/help/issues/project-delete-confirm.png)
1. Нажмите **Я понимаю последствия, удалить этот проект**.

## Закрытие проекта

Вы можете закрыть проект, чтобы удалить его из списка проектов, но сохранить содержимое и возможность повторно открыть проект позже. 

{% data reusables.projects.project-settings %}
1. В нижней части страницы нажмите кнопку **Закрыть этот проект**. 
   ![Снимок экрана: кнопка закрытия проекта](/assets/images/help/issues/close-project-button.png)

## Повторное открытие проекта организации

Вы можете повторно открыть ранее закрытый проект.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.projects.reopen-a-project %}

## Повторное открытие проекта пользователя

Вы можете повторно открыть ранее закрытый проект.

{% data reusables.profile.access_profile %} {% data reusables.projects.reopen-a-project %}
