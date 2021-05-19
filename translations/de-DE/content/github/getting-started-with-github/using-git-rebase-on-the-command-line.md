---
title: Git rebase an der Befehlszeile verwenden
redirect_from:
  - /articles/using-git-rebase/
  - /articles/using-git-rebase-on-the-command-line
  - /github/using-git/using-git-rebase-on-the-command-line
intro: Im Folgenden findest Du ein kurzes Tutorial zur Verwendung von „git rebase“ an der Befehlszeile.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Using Git rebase

In diesem Beispiel werden mit Ausnahme von `exec` alle verfügbaren `git rebase`-Befehle vorgestellt.

Wir geben zunächst am Terminal `git rebase --interactive HEAD~7` ein, um den Rebase-Vorgang zu starten. Unser bevorzugter Texteditor zeigt die folgenden Zeilen an:

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B
```

Im folgenden Beispiel

* squashen wir mittels `squash` den fünften Commit (`fa39187`) in den Commit `"Patch A"` (`1fc6c95`),
* verschieben wir den letzten Commit (`7b36971`) direkt vor den Commit `"Patch B"` (`6b2481b`) und behalten ihn als `pick` bei,
* mergen wir den Commit `"A fix for Patch B"` (`c619268`) in den Commit `"Patch B"` (`6b2481b`) und ignorieren die Commit-Mitteilung mittels `fixup`,
* teilen wir den dritten Commit (`dd1475d`) mittels `edit` in zwei kleinere Commits auf,
* korrigieren wir mittels `reword` den fehlerhaften Commit in der Commit-Mitteilung.

Puh! Klingt nach jeder Menge Arbeit, doch indem wir die Schritte einzeln durchführen, können wir diese Änderungen ohne Weiteres vornehmen.

Zunächst müssen wir die Befehle in der Datei wie folgt ändern:

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

Wir haben den Befehl jeder Zeile von `pick` in den gewünschten Befehl geändert.

Speichere nun den Vorgang und schließe den Editor. Dadurch wird der interaktive Rebase-Vorgang gestartet.

Git überspringt den ersten Rebase-Befehl `pick 1fc6c95`, da nichts vorgenommen werden muss. Git springt zum nächsten Befehl `squash fa39187`. Da für diesen Vorgang Deine Eingabe erforderlich ist, öffnet Git den Texteditor erneut. Die geöffnete Datei sieht in etwa wie folgt aus:

```
# This is a combination of two commits.
# The first commit's message is:

Patch A

# This is the 2nd commit message:

something to add to patch A

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# Not currently on any branch.
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
# modified:   a
#
```

Die Datei zeigt an, welche Aktionen mit diesem `squash` durchgeführt werden. Darin werden die Mitteilung des ersten Commits (`"Patch A"`) und die Mitteilung des zweiten Commits (`"something to add to patch A"`) aufgelistet. Wenn Du mit diesen Commit-Mitteilungen zufrieden bist, kannst Du die Datei speichern und den Editor schließen. Andernfalls kannst Du einfach den Text der Commit-Mitteilung ändern.

Wenn der Editor geschlossen ist, wird der Rebase-Vorgang fortgesetzt:

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

Git verarbeitet die zwei `pick`-Befehle (für `pick 7b36971` und `pick 6b2481b`). *Ebenfalls* wird der Befehl `fixup` (`fixup c619268`) verarbeitet, da er keine Interaktion erfordert. `fixup` überführt die Änderungen von `c619268` in den darüberliegenden Commit `6b2481b`. Beide Änderungen weisen dieselbe Commit-Mitteilung auf: `"Patch B"`.

Git gelangt zum `edit dd1475d`-Vorgang, hält an und gibt im Terminal die folgende Meldung aus:

```shell
You can amend the commit now, with

        git commit --amend

Once you are satisfied with your changes, run

        git rebase --continue
```

An diesem Punkt kannst Du die Dateien in Deinem Projekt bearbeiten, um zusätzliche Änderungen vorzunehmen. Für jede von Dir vorgenommene Änderung musst Du einen neuen Commit durchführen. Gib dazu den Befehl `git commit --amend` ein. Nachdem Du alle Deine Änderungen durchgeführt hast, kannst Du `git rebase --continue` ausführen.

Anschließend gelangt Git zum Befehl `reword 4ca2acc`.  Daraufhin wird Dein Texteditor erneut geöffnet und die folgenden Informationen werden angezeigt:

```
i cant' typ goods

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# Not currently on any branch.
# Changes to be committed:
#   (use "git reset HEAD^1 <file>..." to unstage)
#
# modified:   a
#
```

Git zeigt erneut die zu bearbeitende Commit-Mitteilung an. Du kannst den Text (`"i cant' typ goods"`) ändern, die Datei speichern und den Editor schließen. Git schließt den Rebase-Vorgang ab, und Du kehrst zum Terminal zurück.

### Code mit Rebasing an GitHub übertragen

Der gewöhnliche Befehl `git push origin` funktioniert **nicht**, da Du den Git-Verlauf geändert hast. Du musst den Befehl ändern, indem Du Deine neuesten Änderungen per erzwungenem Push-Vorgang überträgst:

```shell
# Don't override changes
$ git push origin main --force-with-lease

# Override changes
$ git push origin main --force
```

{% warning %}

Force pushing has serious implications because it changes the historical sequence of commits for the branch. Use it with caution, especially if your repository is being accessed by multiple people.

{% endwarning %}

### Weiterführende Informationen

* „[Mergekonflikte nach einem Git-Rebase beheben](/github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase)“
