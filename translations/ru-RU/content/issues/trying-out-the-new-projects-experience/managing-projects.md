---
title: Управление проектами (бета-версия)
intro: Вы можете закрыть и повторно открыть проекты или окончательно удалить их.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 04910fd85d28fd525f3bbfbfa931fd13b9e8874f
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "146139418"
---
## <a name="deleting-a-project"></a>Удаление проекта

Проект можно удалить без возможности восстановления.

{% data reusables.projects.project-settings %}
1. В нижней части страницы нажмите кнопку **Удалить этот проект**. 
   ![Снимок экрана: кнопка удаления проекта](/assets/images/help/issues/delete-project-button.png)
1. Ознакомьтесь с предупреждениями, а затем введите имя проекта в текстовое поле.
   ![Снимок экрана: подтверждение удаления проекта](/assets/images/help/issues/project-delete-confirm.png)
1. Нажмите **Я понимаю последствия, удалить этот проект**.

## <a name="closing-a-project"></a>Закрытие проекта

Вы можете закрыть проект, чтобы удалить его из списка проектов, но сохранить содержимое и возможность повторно открыть проект позже. 

{% data reusables.projects.project-settings %}
1. В нижней части страницы нажмите кнопку **Закрыть этот проект**. 
   ![Снимок экрана: кнопка закрытия проекта](/assets/images/help/issues/close-project-button.png)

## <a name="re-opening-an-organization-project"></a>Повторное открытие проекта организации

Вы можете повторно открыть ранее закрытый проект.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.projects.reopen-a-project %}

## <a name="re-opening-a-user-project"></a>Повторное открытие проекта пользователя

Вы можете повторно открыть ранее закрытый проект.

{% data reusables.profile.access_profile %} {% data reusables.projects.reopen-a-project %}
