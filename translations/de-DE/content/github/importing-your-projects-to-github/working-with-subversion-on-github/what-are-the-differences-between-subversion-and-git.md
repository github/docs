---
title: Unterschiede zwischen Subversion und Git
intro: SVN-Repositorys (Subversion) ähneln Git-Repositorys. In Bezug auf die Architektur Deiner Projekte bestehen jedoch mehrere Unterschiede.
redirect_from:
  - /articles/what-are-the-differences-between-svn-and-git/
  - /articles/what-are-the-differences-between-subversion-and-git
  - /github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
### Verzeichnisstruktur

Jede *Referenz* oder gekennzeichnete Snapshot eines Commits in einem Projekt ist in bestimmten Unterverzeichnissen organisiert, beispielsweise `trunk`, `branches` und `tags`. Beispielsweise kann ein SVN-Projekt mit zwei in Entwicklung befindlichen Features wie folgt aussehen:

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

Git-Projekte werden zudem in einem einzelnen Verzeichnis gespeichert. Git verbirgt jedoch die Details seiner Referenzen, indem sie in einem speziellen *.git*-Verzeichnis gespeichert werden. Beispielsweise kann ein Git-Projekt mit zwei in Entwicklung befindlichen Features wie folgt aussehen:

      sample_project/.git
      sample_project/README.md
      sample_project/lib/widget.rb

Ein Git-Workflow sieht wie folgt aus:

* Ein Git-Repository speichert den vollständigen Verlauf all seiner Branches und Tags im *.git*-Verzeichnis.
* The latest stable release is contained within the default branch.
* Aktive Funktionsarbeiten werden auf separaten Branches entwickelt.
* When a feature is finished, the feature branch is merged into the default branch and deleted.

Im Gegensatz zu SVN bleibt die Verzeichnisstruktur mit Git identisch. Basierend auf Deinem Branch ändern sich jedoch die Dateiinhalte.

### Subprojekte einbeziehen

Ein *Subprojekt* ist ein Projekt, das außerhalb Deines Hauptprojekts entwickelt und verwaltet wird. In der Regel importierst Du ein Subprojekt, um Deinem Projekte einige Funktionen hinzuzufügen, ohne den Code selbst verwalten zu müssen. Sobald das Subprojekt aktualisiert wird, kannst Du es mit Deinem Projekt synchronisieren, um sicherzustellen, dass alles aktuell ist.

In SVN wird ein Subprojekt als *SVN-extern* bezeichnet. In Git wird es als ein *Git-Submodul* bezeichnet. Obwohl sich beide konzeptionell ähneln, werden Git-Submodule nicht automatisch auf dem neuesten Stand gehalten. Du musst explizit darum bitten, dass eine neue Version in Dein Projekt eingelesen wird.

Weitere Informationen findest Du unter „[Git Tools Submodule](https://git-scm.com/book/en/Git-Tools-Submodules)" in der Git-Dokumentation.

### Verlauf beibehalten

SVN geht davon aus, dass sich der Verlauf eines Projekts niemals ändert. Git allows you to modify previous commits and changes using tools like [`git rebase`](/github/getting-started-with-github/about-git-rebase).

{% tip %}

[GitHub unterstützt Subversion-Clients](/articles/support-for-subversion-clients), was allenfalls zu unerwarteten Ergebnissen führen kann, falls Du Git und SVN im selben Projekt verwendest. Falls Du den Commit-Verlauf von Git geändert hast, verbleiben genau die gleichen Commits immer im Verlauf von SVN. Falls Du versehentlich einige vertrauliche Daten freigegeben hast, findest Du [hier](/articles/removing-sensitive-data-from-a-repository) einen Artikel, der Dich dabei unterstützt, diese aus dem Git-Verlauf zu entfernen.

{% endtip %}

### Weiterführende Informationen

- „[Von GitHub unterstützte Subversion-Eigenschaften](/articles/subversion-properties-supported-by-github)“
- [„Branching und Merging“ im Buch _Git SCM_](https://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging)
- „[Quellcode in GitHub importieren](/articles/importing-source-code-to-github)“
- „[Tools für die Quellcode-Migration](/articles/source-code-migration-tools)“
