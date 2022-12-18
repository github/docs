---
title: Issues und Pull Requests anderen GitHub-Benutzern zuweisen
intro: 'Zugewiesene Bearbeiter stellen klar, wer bestimmte Issues und Pull Requests bearbeitet.'
permissions: 'Anyone with write access to a repository can assign issues and pull requests. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/assigning-issues-and-pull-requests-to-other-github-users
  - /articles/assigning-issues-and-pull-requests-to-other-github-users
  - /github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users
  - /issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Assign issues & PRs
ms.openlocfilehash: 0e1f4029ddcd180e892e43257ae3a75d0046ce1d
ms.sourcegitcommit: 219fb805abddaef3e5547638bd798da890020bfd
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876822'
---
## Informationen zu den zugewiesenen Personen für Issues und Pull Requests

Du kannst jedem Issue oder Pull Request mehrere Personen zuweisen: dich selbst, jede Person, die das Issue oder den Pull Request kommentiert hat, jede Person, die Schreibberechtigungen für das Repository hat, sowie Organisationsmitglieder mit Leseberechtigung für das Repository. Weitere Informationen findest du unter [Zugriffsberechtigungen für {% data variables.product.prodname_dotcom %}](/articles/access-permissions-on-github).

Issues und Pull Requests in öffentlichen Repositorys und in privaten Repositorys für ein kostenpflichtiges Konto können bis zu 10 Personen zugewiesen werden. Private Repositorys im kostenlosen Plan sind auf eine Person pro Issue oder Pull Request beschränkt.

## Zuweisen eines einzelnen Issues oder Pull Requests

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Öffne das Issue oder den Pull Request, das bzw. den du einer Person zuweisen möchtest.
4. Wenn einem Issue oder Pull Request keine Person zugewiesen ist, klicke auf **Selbst zuweisen**, um dich selbst zuzuweisen.
  ![Element zum Zuweisen der eigenen Person](/assets/images/help/issues/assign_yourself.png)
5. Klicke im Menü auf der rechten Seite auf **Zugewiesene Personen**.
   ![Menüelement „Zugewiesene Personen“](/assets/images/help/issues/assignee_menu.png)
6. Um das Issue oder den Pull Request Benutzer*innen zuzuweisen, beginne die entsprechenden Benutzernamen einzugeben. Wenn sie angezeigt werden, kannst du sie auswählen. Du kannst bis zu zehn Bearbeiter auswählen und zu einem Issue oder Pull Request hinzufügen.
  ![Dropdownmenü für das Zuweisen von Issues](/assets/images/help/issues/issues_assigning_dropdown.png)

## Zuweisen mehrerer Issues oder Pull Requests

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Aktiviere das Kontrollkästchen neben den Elementen, die Du jemandem zuweisen möchtest.
  ![Kontrollkästchen für Issuemetadaten](/assets/images/help/issues/issues_assign_checkbox.png)
4. Klicke rechts oben auf **Zuweisen**.
5. Um die Elemente einem Benutzer zuzuweisen, beginne den entsprechenden Benutzernamen einzugeben. Wenn er angezeigt wird, wähle ihn aus. Du kannst bis zu zehn Bearbeiter auswählen und zu einem Issue oder Pull Request hinzufügen.
  ![Dropdownmenü für das Zuweisen von Issues](/assets/images/help/issues/issues_assigning_dropdown.png)

## Weiterführende Themen

* [Filtern von Issues und Pull Requests nach zugewiesene Personen](/articles/filtering-issues-and-pull-requests-by-assignees)
