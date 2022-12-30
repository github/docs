---
title: Unterschiede zwischen Subversion und Git
intro: SVN-Repositorys (Subversion) ähneln Git-Repositorys. In Bezug auf die Architektur Deiner Projekte bestehen jedoch mehrere Unterschiede.
redirect_from:
  - /articles/what-are-the-differences-between-svn-and-git
  - /articles/what-are-the-differences-between-subversion-and-git
  - /github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/what-are-the-differences-between-subversion-and-git
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Subversion & Git differences
ms.openlocfilehash: cbe328bf3d2fbf3a603f6eef1559715ad48ca7fe
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145131217'
---
## Verzeichnisstruktur

Jeder *Verweis* oder jede bezeichnete Momentaufnahme eines Commits in einem Projekt ist in bestimmten Unterverzeichnissen organisiert, etwa `trunk`, `branches` und `tags`. Beispielsweise kann ein SVN-Projekt mit zwei in Entwicklung befindlichen Features wie folgt aussehen:

      sample_project/trunk/README.md
      sample_project/trunk/lib/widget.rb
      sample_project/branches/new_feature/README.md
      sample_project/branches/new_feature/lib/widget.rb
      sample_project/branches/another_new_feature/README.md
      sample_project/branches/another_new_feature/lib/widget.rb

Ein SVN-Workflow sieht wie folgt aus:

* Das Verzeichnis `trunk` stellt die neueste stabile Veröffentlichung eines Projekts dar.
* Aktive Funktionsarbeit wird innerhalb von Unterverzeichnissen unter `branches` entwickelt.
* Nach Abschluss einer Funktion wird das Funktionsverzeichnis in `trunk` überführt und entfernt.

Git-Projekte werden zudem in einem einzelnen Verzeichnis gespeichert. Git verbirgt jedoch die Details seiner Verweise, indem sie in einem speziellen *.git*-Verzeichnis gespeichert werden. Beispielsweise kann ein Git-Projekt mit zwei in Entwicklung befindlichen Features wie folgt aussehen:

      sample_project/.git
      sample_project/README.md
      sample_project/lib/widget.rb

Ein Git-Workflow sieht wie folgt aus:

* Ein Git-Repository speichert den vollständigen Verlauf all seiner Branches und Tags im *.git*-Verzeichnis.
* Der Standardbranch enthält die neueste stabile Veröffentlichung.
* Aktive Funktionsarbeiten werden auf separaten Branches entwickelt.
* Nach Abschluss einer Funktion wird der Featurebranch in den Standardbranch überführt und gelöscht.

Im Gegensatz zu SVN bleibt die Verzeichnisstruktur mit Git identisch. Basierend auf Deinem Branch ändern sich jedoch die Dateiinhalte.

## Subprojekte einbeziehen

Ein *Subprojekt* ist ein Projekt, das außerhalb deines Hauptprojekts entwickelt und verwaltet wird. In der Regel importierst Du ein Subprojekt, um Deinem Projekte einige Funktionen hinzuzufügen, ohne den Code selbst verwalten zu müssen. Sobald das Subprojekt aktualisiert wird, kannst Du es mit Deinem Projekt synchronisieren, um sicherzustellen, dass alles aktuell ist.

In SVN wird ein Subprojekt als *SVN-extern* bezeichnet. In Git wird es als ein *Git-Submodul* bezeichnet. Obwohl sich beide konzeptionell ähneln, werden Git-Submodule nicht automatisch auf dem neuesten Stand gehalten. Du musst explizit darum bitten, dass eine neue Version in Dein Projekt eingelesen wird.

Weitere Informationen findest du in der Git-Dokumentation unter [Git-Tools – Untermodule](https://git-scm.com/book/en/Git-Tools-Submodules).

## Verlauf beibehalten

SVN geht davon aus, dass sich der Verlauf eines Projekts niemals ändert. Git ermöglicht es dir, vorherige Commits und Änderungen mithilfe von Tools wie [`git rebase`](/github/getting-started-with-github/about-git-rebase) anzupassen.

{% tip %}

[GitHub unterstützt Subversion-Clients](/articles/support-for-subversion-clients), die möglicherweise unerwartete Ergebnisse erzeugen, wenn du Git und SVN im selben Projekt verwendest. Falls Du den Commit-Verlauf von Git geändert hast, verbleiben genau die gleichen Commits immer im Verlauf von SVN. Wenn du versehentlich vertrauliche Daten committet hast, findest du in [diesem Artikel](/articles/removing-sensitive-data-from-a-repository) Informationen zum Entfernen dieser Daten aus dem Git-Verlauf.

{% endtip %}

## Weitere Informationsquellen

- [Von GitHub unterstützte Subversion-Eigenschaften](/articles/subversion-properties-supported-by-github)
- [„Branching und Merging“ im Buch _Git SCM_](https://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging)
- [Importieren von Quellcode in GitHub](/articles/importing-source-code-to-github)
- [Tools für die Quellcodemigration](/articles/source-code-migration-tools)
