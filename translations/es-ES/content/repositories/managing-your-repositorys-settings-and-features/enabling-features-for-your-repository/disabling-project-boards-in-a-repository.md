---
title: 'Deshabilitación de {% data variables.projects.projects_v1_boards %} en un repositorio'
intro: 'Los administradores de repositorios pueden desactivar las instancias de {% data variables.projects.projects_v1_boards %} para un repositorio si tu equipo o tú administráis el trabajo de forma diferente.'
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
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110025'
---
Al deshabilitar {% data variables.projects.projects_v1_boards %}, ya no verás información de {% data variables.projects.projects_v1_board %} en escalas de tiempo ni [registros de auditoría](/articles/reviewing-your-security-log/).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. En "Características", desactive la casilla **Proyectos**.
  ![Casilla Quitar proyectos](/assets/images/help/projects/disable-projects-checkbox.png)

Una vez deshabilitados los datos {% data variables.projects.projects_v1_boards %}, los datos {% data variables.projects.projects_v1_boards %} no son accesibles en sus direcciones URL anteriores. {% data reusables.organizations.disable_project_board_results %}
