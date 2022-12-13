---
title: 'Отключение {% ifversion projects-v2 %}проектов{% else %}досок проектов{% endif %} в организации'
intro: 'Владельцы могут отключать {% ifversion projects-v2 %}{% data variables.projects.projects_v2 %} уровня организации, {% data variables.projects.projects_v1_boards %} уровня организации и {% data variables.projects.projects_v1_boards %} уровня репозитория{% else %}доски проектов уровня организации и уровня репозитория{% endif %} внутри своей организации.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-your-organization
  - /articles/disabling-project-boards-in-your-organization
  - /github/managing-your-work-on-github/disabling-project-boards-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Disable projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e1e2aed1e7c689bee83dabc4a6750f8976206f4a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423327'
---
После отключения панелей проектов на уровне организации вы не сможете создать новые доски проектов на уровне организации, и все существующие панели проектов на уровне организации будут недоступны по прежним URL-адресам. Это не затрагивает панели проектов в репозиториях в организации. {% ifversion projects-v2 %}Эти параметры применяют {% data variables.projects.projects_v2 %} и {% data variables.projects.projects_v1_boards %}.{% endif %}

После отключения панелей проектов репозитория в организации нельзя будет создать новые панели проектов в любых репозиториях в организации, а все существующие панели проектов в репозиториях в организации будут недоступны по прежним URL-адресам. Панели проектов на уровне организации не затрагиваются.


При отключении панелей проектов вы больше не будете видеть сведения о панели проекта на [временных шкалах или в журналах аудита](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization).


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. В разделе "Планирование и автоматизация кода" на боковой панели щелкните **{% octicon "table" aria-label="The table icon" %} Проекты**.
{% endif %}
1. Решите, следует ли отключить панели проектов в масштабах всей организации, отключить панели проектов репозитория в организации или выполнить оба эти действия. Затем в разделе "Проекты":
    - Чтобы отключить панели проектов в масштабах всей организации, снимите флажок **Включить проекты для организации**.
    - Чтобы отключить панели проектов репозитория в организации, отмените выбор параметра **Включить проекты для всех репозиториев**.
  ![Флажки отключения проектов для организации или для всех репозиториев организации](/assets/images/help/projects/disable-org-projects-checkbox.png)
1. Выберите команду **Сохранить**.

{% data reusables.organizations.disable_project_board_results %}

## Дополнительные материалы

{% ifversion projects-v2 %}- [Сведения о компоненте "{% data variables.product.prodname_projects_v2 %}"](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects){% endif %}
- [Сведения о компоненте "{% data variables.product.prodname_projects_v1 %}"](/articles/about-project-boards)
- [Закрытие компонента "{% data variables.projects.projects_v1_board %}"](/articles/closing-a-project-board)
- [Удаление компонента "{% data variables.projects.projects_v1_board %}"](/articles/deleting-a-project-board)
- [Отключение компонента "{% data variables.projects.projects_v1_boards %}" в репозитории](/articles/disabling-project-boards-in-a-repository)
