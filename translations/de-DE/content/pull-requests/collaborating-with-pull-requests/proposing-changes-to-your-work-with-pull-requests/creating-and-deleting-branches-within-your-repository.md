---
title: Erstellen und Löschen von Branches in deinem Repository
intro: 'Du kannst Branches direkt in {% data variables.product.product_name %} erstellen oder löschen.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository
  - /articles/deleting-branches-in-a-pull-request
  - /articles/creating-and-deleting-branches-within-your-repository
  - /github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Create & delete branches
ms.openlocfilehash: 44b56d8a1884e5cbfe0832f291cdc244b57a3810
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526630'
---
## Branch erstellen
Du kannst einen Branch in {% data variables.product.product_name %} auf verschiedene Arten erstellen.

{% note %}

**Hinweis:** Du kannst einen Branch nur in einem Repository erstellen, auf das zu Pushzugriff hast.

{% endnote %}

{% ifversion create-branch-from-overview %}
### Erstellen eines Branches mit der Branchübersicht
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. Klicke auf **Neuer Branch**.
   ![Screenshot der Seite „Branchübersicht“ mit hervorgehobener Schaltfläche „Neuer Branch“](/assets/images/help/branches/new-branch-button.png)
2. Gib im Dialogfeld den Branchnamen ein, und ändere optional die Branchquelle.  
   Wenn das Repository ein Fork ist, kannst du auch das Upstreamrepository als Branchquelle auswählen.
   ![Screenshot des modalen Dialogfelds für die Brancherstellung für ein Fork mit hervorgehobener Branchquelle](/assets/images/help/branches/branch-creation-popup-branch-source.png)
3. Klicke auf **Branch erstellen**.
   ![Screenshot der modalen Brancherstellung mit hervorgehobener Schaltfläche „Branch“](/assets/images/help/branches/branch-creation-popup-button.png) {% endif %}

### Erstellen eines Branches mit Branchdropdownliste
{% data reusables.repositories.navigate-to-repo %}
1. Wenn du den neuen Branch aus einem anderen Branch als dem Standardbranch des Repositorys erstellen möchtest, klicke optional auf {% octicon "git-branch" aria-label="The branch icon" %} **Branches**, und wähle dann einen anderen Branch aus.
    ![Branchlink auf der Übersichtsseite](/assets/images/help/branches/branches-overview-link.png)
1. Klicke auf das Branch-Auswahlmenü.
    ![Branchauswahlmenü](/assets/images/help/branch/branch-selection-dropdown.png)
1. Gib einen eindeutigen Namen für den neuen Branch ein, und wähle dann **Branch erstellen** aus.
    ![Textfeld zur Brancherstellung](/assets/images/help/branch/branch-creation-text-box.png)
    
{% ifversion fpt or ghec or ghes > 3.4 %}
### Erstellen eines Branches für ein Problem
Du kannst direkt auf der Issueseite einen Branch zum Arbeiten an dem Issue erstellen und sofort beginnen. Weitere Informationen findest du unter [Erstellen eines Branch zum Arbeiten an einem Issue](/issues/tracking-your-work-with-issues/creating-a-branch-for-an-issue).
{% endif %}

## Branch löschen

{% data reusables.pull_requests.automatically-delete-branches %}

{% note %}

**Hinweis:** Wenn der zu löschende Branch der Standardbranch des Repositorys ist, musst du vor dem Löschen des Branchs einen neuen Standardbranch auswählen. Weitere Informationen findest du unter [Ändern des Standardbranchs](/github/administering-a-repository/changing-the-default-branch).

{% endnote %}

Wenn der zu löschende Branch einem geöffneten Pull Request zugeordnet ist, musst du den Pull Request vor dem Löschen des Branchs mergen oder schließen. Weitere Informationen findest du unter [Mergen eines Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) oder [Schließen eines Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. Scrolle zum Branch, den du löschen möchtest, und klicke auf {% octicon "trash" aria-label="The trash icon to delete the branch" %}.
    ![Löschen des Branchs](/assets/images/help/branches/branches-delete.png) {% ifversion fpt or ghes > 3.5 or ghae-issue-6763 or ghec %}
1. Wenn du versuchst, einen Branch zu löschen, der mindestens einem geöffneten Pull Request zugeordnet ist, musst du bestätigen, dass du den/die Pull Request(s) schließen möchten.
   
   ![Bestätigen des Löschens eines Branchs](/assets/images/help/branches/confirm-deleting-branch.png){% endif %}

{% data reusables.pull_requests.retargeted-on-branch-deletion %} Weitere Informationen findest du unter [Informationen zu Branches](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches).

## Weiterführende Themen

- [Informationen zu Branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
- [Anzeigen von Branches in deinem Repository](/github/administering-a-repository/viewing-branches-in-your-repository)
- [Löschen und Wiederherstellen von Branches in einem Pull Request](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)
