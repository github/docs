---
title: 'Verknüpfen eines Repositorys mit einem {% data variables.product.prodname_project_v1 %}'
intro: 'Du kannst ein Repository mit einem {% data variables.projects.projects_v1_board %} deiner Organisation oder deines persönlichen Kontos verknüpfen.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/linking-a-repository-to-a-project-board
  - /articles/linking-a-repository-to-a-project-board
  - /github/managing-your-work-on-github/linking-a-repository-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Link repository to board
allowTitleToDifferFromFilename: true
ms.openlocfilehash: d0893b64551be80577547b9791e7a7ed6a432de0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109695'
---
{% data reusables.projects.project_boards_old %}

Jede Person mit Schreibberechtigungen für ein {% data variables.projects.projects_v1_board %} kann Repositorys der Organisation oder deines persönlichen Kontos mit dem {% data variables.projects.projects_v1_board %} verknüpfen. Weitere Informationen findest du unter [{% data variables.product.prodname_project_v1_caps %}-Berechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization/) oder [Berechtigungsstufen für benutzereigene {% data variables.product.prodname_projects_v1 %}](/articles/permission-levels-for-user-owned-project-boards/).

{% data reusables.project-management.link-repos-to-project-board %} Du kannst Issues und Pull Requests aus nicht verknüpften Repositorys hinzufügen, indem du die URL des Issues oder Pull Requests in eine Karte eingibst. Weitere Informationen findest du unter [Hinzufügen von Issues und Pull Requests zu einem {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board).

1. Navigiere zu dem {% data variables.projects.projects_v1_board %}, das du mit einem Repository verknüpfen möchtest.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
4. Klicke in der linken Seitenleiste auf **Linked repositories** (Verknüpfte Repositories).
![Menüoption „Linked repositories“ (Verknüpfte Repositories) in der linken Seitenleiste](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. Klicke auf **Link a repository** (Ein Repository verknüpfen).
![Schaltfläche „Link a repository“ (Ein Repository verknüpfen) auf der Registerkarte „Linked repositories“ (Verknüpfte Repositories)](/assets/images/help/projects/link-repository-button.png)
6. Suche das Repository, das du verknüpfen möchtest.
![Suchfeld im Fenster „Link a repository“ (Ein Repository verknüpfen)](/assets/images/help/projects/search-to-link-repository.png)
7. Klicke auf **Link** (Verknüpfen). Klicke zum Aufheben der Verknüpfung auf **Unlink** (Verknüpfung aufheben).
![Schaltfläche „Link“ (Verknüpfen)](/assets/images/help/projects/link-button.png)

{% note %}

**Hinweis:** Zum Verknüpfen eines Repositorys mit der Organisation oder dem benutzereigenen {% data variables.projects.projects_v1_board %} müssen Issues für das Repository aktiviert sein. Dies heißt, dass das Repository über eine Registerkarte „Issues“ verfügt (in kopierten Repositorys sind Issues standardmäßig deaktiviert).  Informationen zum Aktivieren oder Deaktivieren von Issues für ein Repository findest du im Artikel zum [Deaktivieren von Issues für ein Repository](/github/managing-your-work-on-github/disabling-issues).

{% endnote %}

## Weiterführende Themen

- [Informationen zu {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)
