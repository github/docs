---
title: Eine Commit-Mitteilung ändern
redirect_from:
  - /articles/can-i-delete-a-commit-message
  - /articles/changing-a-commit-message
  - /github/committing-changes-to-your-project/changing-a-commit-message
  - /github/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message
intro: 'Wenn eine Commitnachricht unklare, falsche oder vertrauliche Informationen enthält, kannst du sie lokal ändern und einen neuen Commit mit einer neuen Nachricht zu {% data variables.product.product_name %} pushen. Du kannst auch fehlende Informationen zu einer Commitnachricht hinzufügen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: fa4966da0fe443e6635b43fc9b3b11108d57cf6e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132573'
---
## Die letzte Commit-Mitteilung erneut schreiben

Du kannst die neueste Commitnachricht mithilfe des Befehls `git commit --amend` ändern.

In Git ist der Text der Commit-Mitteilung Teil des Commits. Durch das Ändern der Commit-Mitteilung ändert sich auch die Commit-ID, also die SHA1-Prüfsumme, die den Commit benennt. Effektiv erstellst du einen neuen Commit, der den alten ersetzt.

## Commit wurde nicht online veröffentlicht

Wenn der Commit nur in deinem lokalen Repository enthalten ist und nicht zu {% data variables.product.product_location %} gepusht wurde, kannst du die Commitnachricht mit dem Befehl `git commit --amend` ändern.

1. Navigiere in der Befehlszeile zu dem Repository, das den Commit enthält, den du ändern möchtest.
2. Gib `git commit --amend` ein, und drücke die **EINGABETASTE**.
3. Bearbeite in einem Texteditor die Commit-Mitteilung, und speichere den Commit.
    - Du kannst einen Co-Autor hinzufügen, indem du einen Trailer zum Commit hinzufügst. Weitere Informationen findest du unter [Erstellen eines Commits mit mehreren Autor*innen](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors).
{% ifversion fpt or ghec %}
    - Du kannst Commits im Namen deiner Organisation erstellen, indem du einen Trailer zum Commit hinzufügst. Weitere Informationen findest du unter [Erstellen eines Commits im Namen einer Organisation](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization).{% endif %}

Der neue Commit und die neue Commit-Mitteilung werden beim nächsten Push auf {% data variables.product.product_location %} angezeigt.

{% tip %}

Du kannst den standardmäßigen Text-Editor für Git ändern, indem du die Einstellung `core.editor` änderst. Weitere Informationen findest du im Git-Handbuch unter [Grundlegende Clientkonfiguration](https://git-scm.com/book/en/Customizing-Git-Git-Configuration#_basic_client_configuration).

{% endtip %}

## Ältere oder mehrere Commit-Mitteilungen ändern

Wenn du den Commit bereits zu {% data variables.product.product_location %} gepusht hast, musst du den Push des Commits mit einer geänderten Mitteilung erzwingen.

{% warning %}

Wir raten dringend von einem erzwungenen Push ab, da sich dadurch der Verlauf deines Repositorys ändert. Wenn du den Push erzwingst, müssen alle, die dein Repository bereits geklont haben, ihren lokalen Verlauf manuell korrigieren. Weitere Informationen findest du im Git-Handbuch unter [Wiederherstellen von einem Upstream-Rebase](https://git-scm.com/docs/git-rebase#_recovering_from_upstream_rebase).

{% endwarning %}

**Ändern der Nachricht des zuletzt gepushten Commits**

1. Führe die [oben genannten Schritte](/articles/changing-a-commit-message#commit-has-not-been-pushed-online) aus, um die Commitnachricht zu ändern.
2. Verwende den Befehl `push --force-with-lease`, um das Pushen über den alten Commit zu erzwingen.
  ```shell
  $ git push --force-with-lease origin <em>example-branch</em>
  ```

**Ändern der Nachricht älterer oder mehrerer Commits**

Wenn du die Mitteilungen für mehrere Commits oder für ältere Commits ändern musst, kannst du den interaktive Rebase nutzen und anschließend den Push zum Ändern des Commit-Verlaufs erzwingen.

1. Navigiere in der Befehlszeile zu dem Repository, das den Commit enthält, den du ändern möchtest.
2. Verwende den Befehl `git rebase -i HEAD~n`, um eine Liste der letzten `n` Commits in deinem standardmäßigen Text-Editor anzuzeigen.

    ```shell
    # Displays a list of the last 3 commits on the current branch
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
3. Ersetze vor jeder Commitnachricht, die du ändern möchtest, `pick` durch `reword`.
  ```shell
  pick e499d89 Delete CNAME
  reword 0c39034 Better README
  reword f7fde4a Change the commit message but push the same commit.
  ```
4. Speichere und schließe die Datei mit der Commit-Liste.
5. Gib in jeder resultierenden Commit-Datei die neue Commit-Mitteilung ein, speichere die Datei, und schließe sie.
6. Wenn du bereit bist, deine Änderungen an GitHub zu pushen, verwendest du den Befehl „push --force“, um das Pushen über den alten Commit zu erzwingen.
```shell
$ git push --force origin <em>example-branch</em>
```

Weitere Informationen zu einem interaktiven Rebase findest du im Git-Handbuch unter [Interaktiver Modus](https://git-scm.com/docs/git-rebase#_interactive_mode).

{% tip %}

Auch hier gilt: Das Ändern der Commit-Mitteilung führt zu einem neuen Commit mit einer neuen ID. In diesem Fall erhält aber auch jeder Commit, der nach dem geänderten Commit folgt, eine neue ID, da jeder Commit auch die ID des übergeordneten Commits enthält.

{% endtip %}

{% warning %}

Wenn eine Commit-Mitteilung vertrauliche Informationen enthält, wird beim erzwungenen Push eines Commits mit geändertem Commit der ursprüngliche Commit möglicherweise nicht von {% data variables.product.product_name %} entfernt. Der alte Commit wird nicht Teil eines nachfolgenden Klons, kann aber noch auf {% data variables.product.product_name %} zwischengespeichert und über die Commit-ID zugänglich sein. Wende dich mit der alten Commit-ID an {% data variables.contact.contact_support %}, um ihn vom Remote-Repository löschen zu lassen.

{% endwarning %}

## Weitere Informationsquellen

* [Signieren von Commits](/articles/signing-commits)
