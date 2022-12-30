---
title: 'Deaktivieren von {% data variables.projects.projects_v1_boards %} in einem Repository'
intro: 'Repositoryadministrator*innen können {% data variables.projects.projects_v1_boards %} für ein Repository deaktivieren, wenn du oder dein Team die Arbeit anders verwalten.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109526'
---
Wenn du {% data variables.projects.projects_v1_boards %} deaktivierst, werden in Zeitachsen oder [Überwachungsprotokollen](/articles/reviewing-your-security-log/) keine {% data variables.projects.projects_v1_board %}informationen mehr angezeigt.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Deaktiviere unter "Features" (Funktionen) das Kontrollkästchen **"Projects" (Projekte)** .
  ![Kontrollkästchen "Remove Projects" (Projekte entfernen)](/assets/images/help/projects/disable-projects-checkbox.png)

Nach Deaktivierung von {% data variables.projects.projects_v1_boards %} sind vorhandene {% data variables.projects.projects_v1_boards %} unter ihren vorherigen URLs nicht mehr zugänglich. {% data reusables.organizations.disable_project_board_results %}
