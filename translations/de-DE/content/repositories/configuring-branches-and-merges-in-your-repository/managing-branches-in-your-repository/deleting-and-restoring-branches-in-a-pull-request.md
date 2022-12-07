---
title: Branches in einem Pull Request löschen und wiederherstellen
intro: 'Wenn du Schreibzugriff auf ein Repository hast, kannst du Branches löschen, die mit geschlossenen oder zusammengeführten Pull Requests verknüpft sind. Branches, die mit offenen Pull Requests verbunden sind, kannst du nicht löschen.'
redirect_from:
  - /articles/tidying-up-pull-requests
  - /articles/restoring-branches-in-a-pull-request
  - /articles/deleting-unused-branches
  - /articles/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Delete & restore branches
ms.openlocfilehash: 48007869ae43d39553e0f8948f90e89b7fb73af0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132369'
---
## Löschen eines Branches, der für einen Pull-Request verwendet wurde

Du kannst einen mit einem Pull Request verbundenen Branch löschen, wenn der Pull Request zusammengeführt oder geschlossen wurden und wenn keine weiteren, offenen Pull Request mit Referenz zum Branch vorhanden sind. Informationen zum Schließen von Branches, die nicht Pull Requests zugeordnet sind, findest du unter „[Erstellen und Löschen von Branches innerhalb deines Repositorys](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.list-closed-pull-requests %}
4. Klicke in der Liste der Pull Requests auf den Pull Request, der mit dem Branch verknüpft ist, den Du löschen möchtest.
5. Klicke am unteren Rand des Pull Requests auf **Branch löschen**.
   ![Schaltfläche Branch löschen](/assets/images/help/pull_requests/delete_branch_button.png)

   Diese Schaltfläche wird nicht angezeigt, wenn es aktuell einen offenen Pull Request für diesen Branch hat.

## Einen gelöschten Branch wiederherstellen

Du kannst den Head-Branch eines geschlossenen Pull Requests wiederherstellen.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.list-closed-pull-requests %}
4. Klicke in der Liste der Pull Requests auf den Pull Request, der mit dem Branch verknüpft ist, den Du wiederherstellen möchtest.
5. Klicke am unteren Rand des Pull Requests auf **Branch wiederherstellen**.
   ![Schaltfläche Branch wiederherstellen](/assets/images/help/branches/branches-restore-deleted.png)

## Weiterführende Themen

- [Erstellen und Löschen von Branches innerhalb deines Repositorys](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)
- „[Automatische Löschung von Branches verwalten](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)“
