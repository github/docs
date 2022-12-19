---
title: 'Отключение {% data variables.projects.projects_v1_boards %} в репозитории'
intro: 'Администраторы репозитория могут отключить {% data variables.projects.projects_v1_boards %} для репозитория, если вы или ваша команда другим образом организует работу.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-a-repository
  - /articles/disabling-project-boards-in-a-repository
  - /github/managing-your-work-on-github/disabling-project-boards-in-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-project-boards-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 'Disable {% data variables.projects.projects_v1_boards %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 8c550cd9ebc767327298e39dc0b3a6a11368dc3f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109527'
---
После отключения {% data variables.projects.projects_v1_boards %} вы больше не сможете просматривать сведения о {% data variables.projects.projects_v1_board %} на временных шкалах или в [журналах аудита](/articles/reviewing-your-security-log/).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. В разделе «Компоненты» снимите флажок **Проекты**.
  ![Флажок «Удалить проекты»](/assets/images/help/projects/disable-projects-checkbox.png)

После отключения {% data variables.projects.projects_v1_boards %} существующие {% data variables.projects.projects_v1_boards %} будет невозможно открыть по их старым URL-адресам. {% data reusables.organizations.disable_project_board_results %}
