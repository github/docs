---
title: Synchronisieren eines Pull Requests mit dem Basisbranch
intro: 'Nachdem du ein Pull Request geöffnet hast, kannst du den Headbranch, der deine Änderungen enthält, mit allen Änderungen aktualisieren, die im Basisbranch vorgenommen wurden.'
permissions: People with write permissions to the repository to which the head branch of the pull request belongs can update the head branch with changes that have been made in the base branch.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Update the head branch
ms.openlocfilehash: d7819b45cf3290c09e3b231825e494fd1d82daea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145133905'
---
## Informationen zum Synchronisieren deines Pull Request

Bevor du deine Pull Requests mergst, werden möglicherweise andere Änderungen in den Basisbranch gemergt, sodass der Hauptbranch des Pull Requests nicht synchronisiert ist. Wenn du deinen Pull Request mit den neuesten Änderungen am Hauptbranch aktualisierst, kannst du Probleme vor dem Mergen ermitteln.

Du kannst den Hauptbranch eines Pull Requests über die Befehlszeile oder die Seite für Pull Requests aktualisieren. Die Schaltfläche **Branch aktualisieren** wird angezeigt, wenn alle der folgenden Bedingungen erfüllt sind:

* Es bestehen keine Mergekonflikte zwischen dem Branch des Pull Requests und dem Basisbranch.
* Der Branch des Pull Requests ist nicht auf dem gleichen Stand wie der Basisbranch.
* Der Basisbranch erfordert, dass Branches vor dem Mergen auf dem neuesten Stand sind{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}, oder die Einstellung zum stetigen Vorschlagen der Aktualisierung von Branches ist aktiviert{% endif %}.

Weitere Informationen findest du unter [Erfordern von Statusüberprüfungen vor dem Mergen](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches){% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} und [Verwalten von Vorschlägen zum Aktualisieren von Pull-Request-Branches](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-suggestions-to-update-pull-request-branches){% endif %}.

Wenn Änderungen am Basisbranch vorgenommen wurden, die zu Mergekonflikten in deinem Pull-Request-Branch führen, kannst du den Branch erst aktualisieren, wenn alle Konflikte gelöst wurden. Weitere Informationen findest du unter [Informationen zu Mergekonflikten](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts).

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} Auf der Pull-Request-Seite kannst du deinen Pull-Request-Branch mit einem herkömmlichen Mergevorgang oder einem Rebasing aktualisieren. Ein herkömmlicher Mergevorgang führt zu einem Mergecommit, der den Basisbranch in den Hauptbranch des Pull Requests mergt. Beim Rebasing werden die Änderungen aus _deinem_ Branch auf die neueste Version des Basisbranchs angewendet. Dies führt zu einem Branch mit einem linearen Verlauf, da kein Mergecommit erstellt wird.
{% else %} Wenn du deinen Branch über die Pull-Request-Seite aktualisierst, wird ein herkömmlicher Mergevorgang ausgeführt. Der resultierende Mergecommit mergt den Basisbranch in den Hauptbranch des Pull Requests.
{% endif %}

## Aktualisieren des Pull-Request-Branchs

{% data reusables.repositories.sidebar-pr %}

1. Klicke in der Liste „Pull Requests“ auf den Pull Request, den du aktualisieren möchtest.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}
1. Im Mergeabschnitt unten auf der Seite hast du folgende Möglichkeiten:
   - Klicke auf **Branch aktualisieren**, um einen herkömmlichen Mergevorgang auszuführen.
   ![Schaltfläche zum Aktualisieren des Branchs](/assets/images/help/pull_requests/pull-request-update-branch-with-dropdown.png)
   - Klicke auf das Dropdownmenü „Branch aktualisieren“, wähle **Durch Rebase aktualisieren**, und klicke dann auf **Rebase für Branch ausführen**, um den Branch durch die Ausführung eines Rebasings für den Basisbranch zu aktualisieren.
   ![Dropdownmenü mit den Optionen für Mergevorgang und Rebase](/assets/images/help/pull_requests/pull-request-update-branch-rebase-option.png) {% else %}
1. Klicke im Mergeabschnitt unten auf der Seite auf **Branch aktualisieren**, um einen herkömmlichen Mergevorgang auszuführen.
  ![Schaltfläche zum Aktualisieren des Branchs](/assets/images/help/pull_requests/pull-request-update-branch.png) {% endif %}

## Weitere Informationsquellen

- [Informationen zu Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [Ändern der Phase eines Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)
- [Committen von Änderungen an einen Pull-Request-Branch, der aus einem Fork erstellt wurde](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)
