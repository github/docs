---
title: 'Копирование {% data variables.product.prodname_project_v1 %}'
intro: 'Вы можете скопировать {% data variables.projects.projects_v1_board %}, чтобы быстро создать новый проект. Копирование часто используемых или настраиваемых {% data variables.projects.projects_v1_boards %} помогает стандартизировать рабочий процесс.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/copying-a-project-board
  - /articles/copying-a-project-board
  - /github/managing-your-work-on-github/copying-a-project-board
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 33f2822f338a2210c87ec9baad986231f11fe310
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108943'
---
{% data reusables.projects.project_boards_old %}

Копирование {% data variables.projects.projects_v1_board %} позволяет повторно использовать заголовок, описание и конфигурацию автоматизации {% data variables.projects.projects_v1_board %}. Вы можете скопировать {% data variables.projects.projects_v1_boards %}, чтобы исключить ручной процесс создания новых {% data variables.projects.projects_v1_boards %} для аналогичных рабочих процессов.

У вас должен быть доступ для чтения к {% data variables.projects.projects_v1_board %}, чтобы скопировать ее в репозиторий или организацию, в которых у вас есть доступ для записи.

Когда вы копируете {% data variables.projects.projects_v1_board %} в организацию, видимость {% data variables.projects.projects_v1_board %} по умолчанию будет "частный", но ее можно изменить. Дополнительные сведения см. в разделе [Изменение видимости {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility/).

Автоматизация {% data variables.projects.projects_v1_board %} также включена по умолчанию. Подробнее см. [Сведения об автоматизации компонента "{% data variables.product.prodname_projects_v1 %}"](/articles/about-automation-for-project-boards/).

1. Перейдите к {% data variables.projects.projects_v1_board %}, которую нужно скопировать.
{% data reusables.project-management.click-menu %}
3. Щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, а затем **Копировать**.
![Параметр копирования в раскрывающемся меню на боковой панели доски проекта](/assets/images/help/projects/project-board-copy-setting.png)
4. В разделе "Владелец" нужно использовать раскрывающееся меню и щелкнуть репозиторий или организацию, куда требуется скопировать доску проекта.
![Выбор владельца скопированной доски проекта в раскрывающемся меню](/assets/images/help/projects/copied-project-board-owner.png)
5. При необходимости в поле "Имя доски проекта" введите имя скопированной {% data variables.projects.projects_v1_board %}.
![Поле для ввода имени скопированной доски проекта](/assets/images/help/projects/copied-project-board-name.png)
6. При необходимости в разделе "Описание" следует ввести описание скопированной доски проекта, которое увидят другие люди.
![Поле для ввода описания скопированной доски проекта](/assets/images/help/projects/copied-project-board-description.png)
7. При необходимости в разделе "Параметры автоматизации" выберите, копировать ли настроенные автоматические рабочие процессы. По умолчанию параметр включен. Дополнительную информацию см. в разделе [Сведения об автоматизации для досок проектов](/articles/about-automation-for-project-boards/).
![Выбор параметров автоматизации для скопированной доски проекта](/assets/images/help/projects/copied-project-board-automation-settings.png) {% data reusables.project-management.choose-visibility %}
9. Щелкните **Копировать проект**.
![Кнопка "Подтвердить копирование"](/assets/images/help/projects/confirm-copy-project-board.png)
