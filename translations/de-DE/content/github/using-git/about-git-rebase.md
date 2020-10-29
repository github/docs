---
title: Informationen zu Git-Rebase
redirect_from:
  - /rebase/
  - articles/interactive-rebase/
  - /articles/about-git-rebase
intro: 'Mit dem Befehl „git rebase“ kannst Du eine Reihe von Commits einfach ändern und den Verlauf Deines Repositorys anpassen. Du kannst Commits neu anordnen, bearbeiten oder miteinander squashen.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



In der Regel verwendest Du `git rebase` in folgenden Fällen:

* Frühere Commit-Mitteilungen bearbeiten
* Mehrere Commits zu einem einzigen zusammenfassen
* Commits, die nicht mehr benötigt werden, löschen oder rückgängig machen

{% warning %}

**Warnung**: Da die Änderung Deines Commit-Verlaufs zu Schwierigkeiten für alle anderen Benutzer des Repositorys führen kann, gilt ein Commit-Rebase nach dem Übertragen an ein Repository als schlechte Praxis. Informationen zu einem sicheren Rebase auf {% data variables.product.product_location %} findest Du unter „[Informationen zum Zusammenführen von Pull Requests](/articles/about-pull-request-merges).“

{% endwarning %}

### Commit-Rebase gegen einen Branch

Um ein Rebase für alle Commits zwischen einem anderen Branch und dem aktuellen Branch-Status durchzuführen, kannst Du den folgenden Befehl in Deiner Shell eingeben (entweder die Eingabeaufforderung unter Windows oder das Terminal unter Mac und Linux):

```shell
$ git rebase --interactive <em>other_branch_name</em>
```

### Commit-Rebase anhand eines Zeitpunkts

Um ein Rebase für die letzten Commits in Deinem aktuellen Branch durchzuführen, kannst Du den folgenden Befehl in Deiner Shell eingeben:

```shell
$ git rebase --interactive HEAD~7
```

### Während des Rebasings verfügbare Befehle

Beim Rebasing stehen sechs Befehle zur Verfügung:

<dl>
<dt><code>pick</code></dt>
<dd><code>pick</code> bedeutet einfach, dass der Commit enthalten ist. Wenn Du die Reihenfolge der <code>pick</code>-Befehle neu anordnest, ändert sich die Reihenfolge der Commits während des Rebase. Wenn Du keinen Commit einbeziehen möchtest, solltest Du die gesamte Zeile löschen. </dd>

<dt><code>reword</code></dt>
<dd>Der Befehl <code>reword</code> ist ähnlich wie <code>pick</code>, aber nachdem Du ihn verwendet hast, wird der Rebase-Prozess angehalten, sodass Du die Commit-Mitteilung ändern kannst. Die Änderungen, die durch den Commit vorgenommen werden, sind davon nicht betroffen. </dd>

<dt><code>edit</code></dt>
<dd>Wenn Du <code>edit</code> für einen Commit wählst, hast Du die Möglichkeit, den Commit zu ändern, was bedeutet, dass Du den Commit hinzufügen oder komplett ändern kannst. Du kannst auch zusätzliche Commits erstellen, bevor Du mit dem Rebasing fortfährst. Auf diese Weise kannst Du einen großen Commit in kleinere aufteilen oder fehlerhafte Änderungen, die in einem Commit vorgenommen wurden, entfernen. </dd>

<dt><code>squashen</code></dt>
<dd>Mit diesem Befehl kannst Du zwei oder mehr Commits zu einem einzigen Commit zusammenfassen. Ein Commit wird in den Commit darüber eingefügt. Git gibt Dir die Möglichkeit, eine neue Commit-Mitteilung zu schreiben, die beide Änderungen beschreibt.</dd>

<dt><code>fixup</code></dt>
<dd>Dies ist ähnlich wie <code>squash</code>, aber die Mitteilung des zusammenzuführenden Commits wird verworfen. Der Commit wird einfach in den Commit darüber zusammengefügt, und die Mitteilung des vorstehenden Commits wird verwendet, um beide Änderungen zu beschreiben.</dd>

<dt><code>exec</code></dt>
<dd>Hiermit kannst Du beliebige Shell-Befehle auf einem Commit ausführen.</dd>
</dl>

### Beispiel für die Verwendung von `git rebase`

Unabhängig davon, welchen Befehl Du verwendest, startet Git [Deinen Standardtexteditor](/articles/associating-text-editors-with-git) und öffnet eine Datei, die die Commits in dem von Dir gewählten Bereich beschreibt. Diese Datei sieht in etwa so aus:

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B

# Rebase 41a72e6..7b36971 onto 41a72e6
#
# Befehle:
#  p, pick = Commit verwenden
#  r, reword = Commit verwenden, aber die Commit-Mitteilung bearbeiten
#  e, edit = Commit verwenden, aber zum Ändern unterbrechen
#  s, squash = Commit verwenden, aber mit dem vorherigen Commit verschmelzen
#  f, fixup = wie "squash", aber die Protokollnachricht dieses Commits verwerfen
#  x, exec = Befehl (der Rest der Zeile) mit Shell ausführen
#
# Wenn Du hier eine Zeile entfernst, GEHT DIESER COMMIT VERLOREN.
# Wenn Du jedoch alles entfernst, wird das Rebasing abgebrochen.
#
```

Wenn man diese Informationen von oben nach unten betrachtet, wird Folgendes deutlich:

- Es werden sieben Commits aufgelistet, was darauf hindeutet, dass es sieben Änderungen zwischen unserem Startpunkt und unserem aktuellen Branch-Status gab.
- Die Commits, die Du für das Rebasing ausgewählt hast, werden in der Reihenfolge der ältesten Änderungen (oben) bis hin zu den neuesten Änderungen (unten) sortiert.
- In jeder Zeile sind ein Befehl (standardmäßig `pick`), der Commit-SHA und die Commit-Mitteilung aufgeführt. Der gesamte `git rebase`-Prozess dreht sich um Deine Manipulation dieser drei Spalten. Die Änderungen, die Du vornimmst, sind ein *Rebase * Deines Repositorys.
- Nach den Commits teilt Dir Git mit, mit welchem Bereich von Commits wir arbeiten (`41a72e6..7b36971`).
- Schließlich bietet Git etwas Unterstützung, indem es Dir die Befehle nennt, die Dir beim Rebasing von Commits zur Verfügung stehen.

### Weiterführende Informationen

- „[Git-Rebase verwenden](/articles/using-git-rebase)“
- [Kapitel „Git-Branching“ aus dem _Pro Git_-Buch](https://git-scm.com/book/en/Git-Branching-Rebasing)
- [Kapitel „Interaktives Rebasing“ aus dem _Pro Git_-Buch](https://git-scm.com/book/en/Git-Tools-Rewriting-History#_changing_multiple)
- „[Squashing von Commits mit Rebase](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)“
- „[Ihren Branch synchronisieren](/desktop/contributing-to-projects/syncing-your-branch)" in der {% data variables.product.prodname_desktop %}-Dokumentation
