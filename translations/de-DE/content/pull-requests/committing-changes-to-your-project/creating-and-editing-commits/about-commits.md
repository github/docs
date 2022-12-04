---
title: Informationen zu Commits
intro: Aussagekräftige Änderungen können in kleinen Gruppen als Commits gespeichert werden.
redirect_from:
  - /articles/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/about-commits
  - /github/committing-changes-to-your-project/creating-and-editing-commits/about-commits
  - /pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/commit-branch-and-tag-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 6847b0a2e69fb17e648b7841a9ae250eaa9b38fa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410523'
---
## Informationen zu Commits

{% data reusables.commits.about-commits %}

{% ifversion commit-signoffs %} Wenn Commits für das Repository, das du committest, abgezeichnet werden müssen und du den Commit über die Webschnittstelle durchführst, zeichnest du den Commit automatisch im Rahmen des Commitvorgangs ab. Weitere Informationen findest du unter [Verwalten der Richtlinie zum Abzeichnen von Commits für dein Repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository). {% endif %}

Du kannst Commits, an denen du mitarbeitest, einen Co-Autor hinzufügen. Weitere Informationen findest du unter [Erstellen eines Commits mit mehreren Autor*innen](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors).

{% ifversion fpt or ghec %} Du kannst auch einen Commit im Namen einer Organisation erstellen. Weitere Informationen findest du unter [Erstellen eines Commits im Namen einer Organisation](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization).{% endif %}

Mit Rebasing kannst du mehrere Commits ändern und die Reihenfolge der Commits auf deiner Zeitachse ändern. Weitere Informationen findest du unter [Informationen zu „git rebase“](/github/getting-started-with-github/about-git-rebase).

## Informationen zu Commitbranches und Tagbezeichnungen

Anhand der Bezeichnungen unter dem Commit auf der Commitseite kannst du erkennen, zu welchem Branch ein Commit gehört.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-commit-page %}
1. Navigiere zum Commit. Klicke dazu auf den Link für die Commit-Mitteilung.
   ![Screenshot des Commits mit hervorgehobenem Link zur Commitnachricht](/assets/images/help/commits/commit-message-link.png)
2. Über die Bezeichnung unter der Commitnachricht kannst du herausfinden, zu welchem Branch der Commit gehört.
   ![Screenshot des Commits mit hervorgehobenem Bezeichner des Commitbranches](/assets/images/help/commits/commit-branch-indicator.png)

Wenn sich dein Commit nicht im Standardbranch (`main`) befindet, zeigt die Bezeichnung an, welche Branches den Commit enthalten. Wenn der Commit Teil eines nicht zusammengeführten Pull Requests ist, kannst du auf den Link klicken, um zum Pull Request zu wechseln.

Sobald sich der Commit auf dem Standardbranch befindet, werden alle Tags angezeigt, die den Commit enthalten, und der Standardbranch wird als einziger Branch aufgeführt. Weitere Informationen zu Tags findest du in der Git-Dokumentation unter [Git-Grundlagen – Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging).

![Screenshot des Commits mit hervorgehobenem Committag](/assets/images/help/commits/commit-tag-label.png)

{% ifversion commit-tree-view %}

## Verwenden der Dateistruktur

Du kannst auch mithilfe der Dateistruktur zwischen Dateien in einem Commit navigieren.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-commit-page %}
1. Navigiere zum Commit. Klicke dazu auf den Link für die Commit-Mitteilung.
   ![Screenshot des Commits mit hervorgehobenem Link zur Commitnachricht](/assets/images/help/commits/commit-message-link.png)
1. Klicke auf eine Datei in der Dateistruktur, um die entsprechenden Datei-Diff-Ansicht anzuzeigen. Wenn die Dateistruktur ausgeblendet ist, klicke auf {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %}, um sie anzuzeigen.

  {% note %}

  **Hinweis:** Die Dateistruktur wird nicht angezeigt, wenn der Bildschirm nicht breit genug ist oder der Commit nur eine Datei enthält.

  {% endnote %}
  
  ![Screenshot des Suchfelds „Geänderte Dateien filtern“ und der hervorgehobenen Dateistruktur](/assets/images/help/repository/file-tree.png)
1. Um nach Dateipfad zu filtern, gib den Dateipfad ganz oder teilweise im Suchfeld **Nach geänderten Dateien filtern** ein.

{% endif %}

## Weiterführende Themen
- [Committen und Überprüfen von Änderungen an deinem Projekt](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#about-commits) in {% data variables.product.prodname_desktop %}
