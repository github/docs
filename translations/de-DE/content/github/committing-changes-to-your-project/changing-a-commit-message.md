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

In Git, the text of the commit message is part of the commit. Changing the commit message will change the commit ID--i.e., the SHA1 checksum that names the commit. Effectively, you are creating a new commit that replaces the old one.

### Commit has not been pushed online

If the commit only exists in your local repository and has not been pushed to {% data variables.product.product_location %}, you can amend the commit message with the `git commit --amend` command.

1. Navigiere in der Befehlszeile zu dem Repository, das den Commit enthält, den Du ändern möchtest.
2. Gib `git commit --amend` ein, und drücke die **Eingabetaste**.
3. Bearbeite in einem Texteditor die Commit-Mitteilung, und speichere den Commit.
    - Du kannst einen Co-Autor hinzufügen, indem Du einen Trailer zum Commit hinzufügst. Weitere Informationen findest Du unter „[Commit mit mehreren Autoren erstellen](/articles/creating-a-commit-with-multiple-authors).“
{% if currentVersion == "free-pro-team@latest" %}
    - Du kannst Commits im Namen Deiner Organisation erstellen, indem Du einen Trailer zum Commit hinzufügst. Weitere Informationen findest Du unter „[Einen Commit im Namen einer Organisation erstellen](/articles/creating-a-commit-on-behalf-of-an-organization).“
{% endif %}

Der neue Commit und die neue Commit-Mitteilung werden beim nächsten Push auf {% data variables.product.product_location %} angezeigt.

{% tip %}

You can change the default text editor for Git by changing the `core.editor` setting. For more information, see "[Basic Client Configuration](https://git-scm.com/book/en/Customizing-Git-Git-Configuration#_basic_client_configuration)" in the Git manual.

{% endtip %}

### Amending older or multiple commit messages

If you have already pushed the commit to {% data variables.product.product_location %}, you will have to force push a commit with an amended message.

{% warning %}

We strongly discourage force pushing, since this changes the history of your repository. If you force push, people who have already cloned your repository will have to manually fix their local history. For more information, see "[Recovering from upstream rebase](https://git-scm.com/docs/git-rebase#_recovering_from_upstream_rebase)" in the Git manual.

{% endwarning %}

**Changing the message of the most recently pushed commit**

1. Führe die [obigen Schritte](/articles/changing-a-commit-message#commit-has-not-been-pushed-online) aus, um die Commit-Mitteilung zu ändern.
2. Erzwinge mit dem Befehl `push --force` den Push über den alten Commit hinweg.
  ```shell
  $ git push --force <em>example-branch</em>
  ```

**Changing the message of older or multiple commit messages**

If you need to amend the message for multiple commits or an older commit, you can use interactive rebase, then force push to change the commit history.

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

For more information on interactive rebase, see "[Interactive mode](https://git-scm.com/docs/git-rebase#_interactive_mode)" in the Git manual.

{% tip %}

As before, amending the commit message will result in a new commit with a new ID. However, in this case, every commit that follows the amended commit will also get a new ID because each commit also contains the id of its parent.

{% endtip %}

{% warning %}

If you have included sensitive information in a commit message, force pushing a commit with an amended commit may not remove the original commit from {% data variables.product.product_name %}. The old commit will not be a part of a subsequent clone; however, it may still be cached on {% data variables.product.product_name %} and accessible via the commit ID. You must contact {% data variables.contact.contact_support %} with the old commit ID to have it purged from the remote repository.

{% endwarning %}

### Weiterführende Informationen

* „[Commits signieren](/articles/signing-commits)“
