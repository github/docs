---
title: Ändern des Standardbranchs
intro: 'Wenn dein Repository mehr als einen Branch enthält, kannst du jeden beliebigen Branch als Standardbranch konfigurieren.'
permissions: People with admin permissions to a repository can change the default branch for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/administering-a-repository/setting-the-default-branch
  - /articles/setting-the-default-branch
  - /github/administering-a-repository/changing-the-default-branch
  - /github/administering-a-repository/managing-branches-in-your-repository/changing-the-default-branch
topics:
  - Repositories
shortTitle: Change the default branch
ms.openlocfilehash: e8f88499ab258e5855804288a4f811b38237df97
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145132393'
---
## Informationen zum Ändern des Standardbranchs

Du kannst den Standardbranch für ein Repository auswählen. Der Standardbranch ist der Basisbranch für Pull Requests und Codecommits. Weitere Informationen zum Standardbranch findest du unter [Informationen zu Branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch).

{% ifversion not ghae %} {% note %}

**Hinweis**: Wenn du die Git-Subversion-Brücke verwendest, wirkt sich das Ändern des Standardbranchs beim Auflisten von Verweisen für das Remoterepository auf den angezeigten `trunk`-Branchinhalt und den `HEAD` aus. Weitere Informationen findest du unter [Support für Subversion-Clients](/github/importing-your-projects-to-github/support-for-subversion-clients) und unter [git-ls-remote](https://git-scm.com/docs/git-ls-remote.html) in der Git-Dokumentation.

{% endnote %} {% endif %}

Du kannst auch den Standardbranch umbenennen. Weitere Informationen findest du unter [Umbenennen eines Branchs](/github/administering-a-repository/renaming-a-branch).

{% data reusables.branches.set-default-branch %}

## Voraussetzungen

Um den Standardbranch zu ändern, muss dein Repository mehrere Branches aufweisen. Weitere Informationen findest du unter [Erstellen und Löschen von Branches innerhalb deines Repositorys](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch).

## Ändern des Standardbranchs

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. Klicke unter „Standardbranch“ rechts neben dem Standardbranchnamen auf {% octicon "arrow-switch" aria-label="The switch icon with two arrows" %}.
   ![Wechselsymbol mit zwei Pfeilen rechts neben dem aktuellen Standardbranchnamen](/assets/images/help/repository/repository-options-defaultbranch-change.png)
1. Verwende das Dropdownfeld, und klicke dann auf einen Branchnamen.
   ![Dropdownliste zum Auswählen eines neuen Standardbranchs](/assets/images/help/repository/repository-options-defaultbranch-drop-down.png)
1. Klicken Sie auf **Aktualisieren**.
   ![Schaltfläche „Aktualisieren“ nach der Auswahl eines neuen Standardbranchs](/assets/images/help/repository/repository-options-defaultbranch-update.png)
1. Lies die Warnung, und klicke dann auf **Verstanden, Standardbranch aktualisieren**.
   ![Verstanden, Standardbranch aktualisieren Schaltfläche zum Ausführen des Updates](/assets/images/help/repository/repository-options-defaultbranch-i-understand.png)

