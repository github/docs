---
title: Eine Commit-Mitteilung ändern
redirect_from:
  - /articles/can-i-delete-a-commit-message/
  - /articles/changing-a-commit-message
intro: 'Wenn eine Commit-Mitteilung unklare, falsche oder vertrauliche Informationen enthält, können Sie sie lokal ändern und einen neuen Commit mit einer neuen Mitteilung zu {% data variables.product.product_name %} pushen. Du kannst auch fehlende Informationen zu einer Commit-Mitteilung hinzufügen.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Die letzte Commit-Mitteilung erneut schreiben

Die letzte Commit-Mitteilung kannst Du mit dem Befehl `git commit --amend` ändern.

In Git ist der Text der Commit-Mitteilung Teil des Commits. Durch das Ändern der Commit-Mitteilung ändert sich auch die Commit-ID, also die SHA1-Prüfsumme, die den Commit benennt. Effektiv erstellst Du einen neuen Commit, der den alten ersetzt.

### Commit wurde nicht online veröffentlicht

Wenn der Commit nur in Ihrem lokalen Repository vorhanden ist und nicht zu {% data variables.product.product_location %} gepusht wurde, können Sie die Commit-Mitteilung mit dem Befehl `git comimt --amend` ändern.

1. Navigiere in der Befehlszeile zu dem Repository, das den Commit enthält, den Du ändern möchtest.
2. Gib `git commit --amend` ein, und drücke die **Eingabetaste**.
3. Bearbeite in einem Texteditor die Commit-Mitteilung, und speichere den Commit.
    - Du kannst einen Co-Autor hinzufügen, indem Du einen Trailer zum Commit hinzufügst. Weitere Informationen findest Du unter „[Commit mit mehreren Autoren erstellen](/articles/creating-a-commit-with-multiple-authors).“
{% if currentVersion == "free-pro-team@latest" %}
    - Du kannst Commits im Namen Deiner Organisation erstellen, indem Du einen Trailer zum Commit hinzufügst. Weitere Informationen findest Du unter „[Einen Commit im Namen einer Organisation erstellen](/articles/creating-a-commit-on-behalf-of-an-organization).“
{% endif %}

Der neue Commit und die neue Commit-Mitteilung werden beim nächsten Push auf {% data variables.product.product_location %} angezeigt.

{% tip %}

Du kannst den standardmäßigen Texteditor für Git ändern, indem Du die Einstellung `core.editor` änderst. Weitere Informationen findest Du unter „[Grundlegende Client-Konfiguration](https://git-scm.com/book/en/Customizing-Git-Git-Configuration#_basic_client_configuration)“ im Git-Handbuch.

{% endtip %}

### Ältere oder mehrere Commit-Mitteilungen ändern

Wenn Sie den Commit bereits zu {% data variables.product.product_location %} gepusht haben, müssen Sie den Push des Commits mit einer geänderten Mitteilung erzwingen.

{% warning %}

Wir raten dringend von einem erzwungenen Push ab, da sich dadurch der Verlauf Deines Repositorys ändert. Wenn Du den Push erzwingst, müssen alle, die Dein Repository bereits geklont haben, ihren lokalen Verlauf manuell korrigieren. Weitere Informationen findest Du unter „[Von einem vorgelagerten Rebase wiederherstellen](https://git-scm.com/docs/git-rebase#_recovering_from_upstream_rebase)“ im Git-Handbuch.

{% endwarning %}

**Changing the message of the most recently pushed commit**

1. Führe die [obigen Schritte](/articles/changing-a-commit-message#commit-has-not-been-pushed-online) aus, um die Commit-Mitteilung zu ändern.
2. Erzwinge mit dem Befehl `push --force` den Push über den alten Commit hinweg.
  ```shell
  $ git push --force <em>example-branch</em>
  ```

**Changing the message of older or multiple commit messages**

Wenn Du die Mitteilungen für mehrere Commits oder für ältere Commits ändern musst, kannst Du den interaktive Rebase nutzen und anschließend den Push zum Ändern des Commit-Verlaufs erzwingen.

1. Navigiere in der Befehlszeile zu dem Repository, das den Commit enthält, den Du ändern möchtest.
2. Gib den Befehl `git rebase -i HEAD~n` ein, um eine Liste der letzten `n` Commits in Deinem standardmäßigen Texteditor anzuzeigen.

    ```shell
    # Zeige eine Liste der 2 letzten Commits des aktuellen Branch
    $ git rebase -i HEAD~3
    ```
    Die Liste sieht ähnlich aus wie folgende:

    ```shell
    pick e499d89 Delete CNAME
    pick 0c39034 Better README
    pick f7fde4a Change the commit message but push the same commit.

    # Rebase 9fdb3bd..f7fde4a onto 9fdb3bd
    #
    # Commands:
    # p, pick = use commit
    # r, reword = use commit, but edit the commit message
    # e, edit = use commit, but stop for amending
    # s, squash = use commit, but meld into previous commit
    # f, fixup = like "squash", but discard this commit's log message
    # x, exec = run command (the rest of the line) using shell
    #
    # These lines can be re-ordered; they are executed from top to bottom.
    #
    # If you remove a line here THAT COMMIT WILL BE LOST.
    #
    # However, if you remove everything, the rebase will be aborted.
    #
    # Note that empty commits are commented out
    ```
3. Ersetze vor jeder Commit-Mitteilung, die Du ändern möchtest, `pick` durch `reword`.
  ```shell
  pick e499d89 Delete CNAME
  reword 0c39034 Better README
  reword f7fde4a Change the commit message but push the same commit.
  ```
4. Speichere und schließe die Datei mit der Commit-Liste.
5. Gib in jeder resultierenden Commit-Datei die neue Commit-Mitteilung ein, speichere die Datei, und schließe sie.
6. When you're ready to push your changes to GitHub, use the push --force command to force push over the old commit.
```shell
$ git push --force <em>example-branch</em>
```

Weitere Informationen zur interaktiven Rebase findest Du unter „[Interaktiver Modus](https://git-scm.com/docs/git-rebase#_interactive_mode)“ im Git-Handbuch.

{% tip %}

Auch hier gilt: Das Ändern der Commit-Mitteilung führt zu einem neuen Commit mit einer neuen ID. In diesem Fall erhält aber auch jeder Commit, der nach dem geänderten Commit folgt, eine neue ID, da jeder Commit auch die ID des übergeordneten Commits enthält.

{% endtip %}

{% warning %}

Wenn eine Commit-Mitteilung vertrauliche Informationen enthält, wird beim erzwungenen Push eines Commits mit geändertem Commit der ursprüngliche Commit möglicherweise nicht von {% data variables.product.product_name %} entfernt. Der alte Commit wird nicht Teil eines nachfolgenden Klons, kann aber noch auf {% data variables.product.product_name %} zwischengespeichert und über die Commit-ID zugänglich sein. Wenden Sie sich mit der alten Commit-ID an {% data variables.contact.contact_support %}, um ihn vom Remote-Repository löschen zu lassen.

{% endwarning %}

### Weiterführende Informationen

* „[Commits signieren](/articles/signing-commits)“
