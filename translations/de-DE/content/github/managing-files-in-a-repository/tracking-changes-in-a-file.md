---
title: Änderungen an einer Datei verfolgen
intro: Du kannst die Änderungen an den einzelnen Zeilen einer Datei verfolgen und so feststellen, wie sich die Datei im Lauf der Zeit entwickelt hat.
redirect_from:
  - /articles/using-git-blame-to-trace-changes-in-a-file/
  - /articles/tracing-changes-in-a-file/
  - /articles/tracking-changes-in-a-file
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

In der Blame-Ansicht kannst Du den Revisionsverlauf einer vollständigen Datei Zeile für Zeile sehen oder durch klicken auf {% octicon "versions" aria-label="The prior blame icon" %} auch nur den Verlauf einer einzelnen Zeile anzeigen. Mit jedem Klick auf {% octicon "versions" aria-label="The prior blame icon" %} siehst Du die vorangegangene Revisionsinformation zur betreffenden Zeile, einschließlich des Committers und des Commit-Zeitpunkts der Änderung.

![Git Blame-Ansicht](/assets/images/help/repository/git_blame.png)

In einer Datei oder einem Pull Request kannst Du Git Blame für eine bestimmte Zeile oder einen Zeilenbereich auch über das Menü {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} aufrufen.

![Kebab-Menü mit Option zum Anzeigen von Git Blame für eine ausgewählte Zeile](/assets/images/help/repository/view-git-blame-specific-line.png)

{% tip %}

**Tipp:** Den Revisionsverlauf der Zeilen einer Datei kannst Du auch über die Befehlszeile mit dem Befehl `git blame` anzeigen. Weitere Informationen findest Du in der [Dokumentation von Git zu `git blame`](https://git-scm.com/docs/git-blame).

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Zum Öffnen klicke auf die Datei, deren Zeilenverlauf Du anzeigen möchtest.
3. Klicke rechts oben in der Dateiansicht auf **Blame**, um die Blame-Ansicht zu öffnen. ![Schaltfläche „Blame“](/assets/images/help/repository/blame-button.png)
4. Wenn Sie frühere Revisionen einer bestimmten Zeile anzeigen möchten, klicken Sie so oft auf {% octicon "versions" aria-label="The prior blame icon" %}, bis Sie die Informationen, die Sie interessieren, gefunden haben. ![Schaltfläche „Prior Blame“ (Vorheriges Blame)](/assets/images/help/repository/prior-blame-button.png)
