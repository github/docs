---
title: Mergekonflikt in der Befehlszeile beheben
intro: Mergekonflikte kannst du in der Befehlszeile und in einem Texteditor beheben.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
  - /articles/resolving-a-merge-conflict-from-the-command-line
  - /articles/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Resolve merge conflicts in Git
ms.openlocfilehash: 1d4ff97c2a93d3e5a7aebaa8752810e284203bc1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883457'
---
Mergekonflikte entstehen, wenn in der gleichen Zeile derselben Datei von verschiedenen Personen konkurrierende Änderungen vorgenommen werden oder wenn eine Person eine Datei bearbeitet und eine andere Person die Datei löscht. Weitere Informationen findest du unter [Informationen zu Mergekonflikten](/articles/about-merge-conflicts/).

{% tip %}

**Tipp**: Du kannst den Konflikt-Editor von {% data variables.product.product_name %} verwenden, um Mergekonflikte aufgrund konkurrierender Zeilenänderungen zwischen Branches zu lösen, die zu einem Pull Request gehören. Weitere Informationen findest du unter [Auflösen eines Mergekonflikts auf GitHub](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github).

{% endtip %}

## Mergekonflikte durch konkurrierende Änderungen in der gleichen Zeile

Zur Behebung eines Mergekonflikts durch konkurrierende Änderungen in der gleichen Zeile in zwei verschiedenen Branches musst Du entscheiden, welche der Änderungen in einem neuen Commit übernommen werden sollen.

Ein Beispiel: Zwei Personen (du und eine andere Person) haben dieselben Zeilen der Datei _styleguide.md_ in verschiedenen Branches desselben Git-Repositorys bearbeitet. Beim Versuch, diese Branches zu mergen, erhältst du einen Mergekonfliktfehler. Diesen Mergekonflikt musst Du durch einen neuen Commit beheben, um die beiden Branches zusammenführen zu können.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navigiere zu dem lokalen Git-Repository, in dem der Mergekonflikt auftritt.
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
3. Generiere eine Liste der Dateien, die von diesem Mergekonflikt betroffen sind. In diesem Beispiel tritt in der Datei *styleguide.md* ein Mergekonflikt auf.
  ```shell
  $ git status
  > # On branch branch-b
  > # You have unmerged paths.
  > #   (fix conflicts and run "git commit")
  > #
  > # Unmerged paths:
  > #   (use "git add <file>..." to mark resolution)
  > #
  > # both modified:      styleguide.md
  > #
  > no changes added to commit (use "git add" and/or "git commit -a")
  ```
4. Öffne deinen bevorzugten Text-Editor, beispielsweise [Atom](https://atom.io/), und navigiere zu der Datei mit den Mergekonflikten.
5. Um in der Datei an den Anfang des Mergekonflikts zu gelangen, durchsuche die Datei nach dem Konfliktmarker `<<<<<<<`. Wenn du die Datei in im Text-Editor öffnest, siehst du die Änderungen im Head- oder Basisbranch nach der Zeile `<<<<<<< HEAD`. Als Nächstes siehst du `=======`, wodurch deine Änderungen von den Änderungen im anderen Branch getrennt werden, gefolgt von `>>>>>>> BRANCH-NAME`. In diesem Beispiel hat eine Person im Basis- oder Headbranch „open an issue“ eingegeben, eine andere Person hat im Vergleichsbranch bzw. `branch-a` hingegen „ask your question in IRC“ geschrieben.

    ```
    If you have questions, please
    <<<<<<< HEAD
    open an issue
    =======
    ask your question in IRC.
    >>>>>>> branch-a
    ```
{% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %} In diesem Beispiel werden beide Änderungen in den Merge übernommen:

  ```shell
  If you have questions, please open an issue or ask in our IRC channel if it's more urgent.
  ```
7. Füge Deine Änderungen hinzu bzw. stelle sie für das Staging bereit.
  ```shell
  $ git add .
  ```
8. Gib Deine Änderungen mit einem Kommentar frei.
  ```shell
  $ git commit -m "Resolved merge conflict by incorporating both suggestions."
  ```

Du kannst jetzt die Branches in der Befehlszeile mergen oder Folgendes tun: [Pushen deiner Änderungen an dein Remoterepository](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) auf {% data variables.product.product_name %} pushen und [Mergen deiner Änderungen](/articles/merging-a-pull-request/) in einem Pull Request.

## Mergekonflikte durch das Entfernen einer Datei

Zur Behebung eines Mergekonflikts, der entsteht, wenn eine Person eine Datei in einem Branch löscht und eine andere Person die gleiche Datei in einem anderen Branch bearbeitet, musst Du entscheiden, ob die Datei in einem neuen Commit gelöscht oder beibehalten werden soll.

Ein Beispiel: Du hast eine Datei bearbeitet, beispielsweise die Datei *README.md*, und eine andere Person hat dieselbe Datei aus einem anderen Branch desselben Git-Repositorys entfernt. Beim Mergen beider Branches erhältst du einen Mergekonfliktfehler. Diesen Mergekonflikt musst Du durch einen neuen Commit beheben, um die beiden Branches zusammenführen zu können.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navigiere zu dem lokalen Git-Repository, in dem der Mergekonflikt auftritt.
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
2. Generiere eine Liste der Dateien, die von diesem Mergekonflikt betroffen sind. In diesem Beispiel tritt in der Datei *README.md* ein Mergekonflikt auf.
  ```shell
  $ git status
  > # On branch main
  > # Your branch and 'origin/main' have diverged,
  > # and have 1 and 2 different commits each, respectively.
  > #  (use "git pull" to merge the remote branch into yours)
  > # You have unmerged paths.
  > #  (fix conflicts and run "git commit")
  > #
  > # Unmerged paths:
  > #  (use "git add/rm <file>..." as appropriate to mark resolution)
  > #
  > #   deleted by us:   README.md
  > #
  > # no changes added to commit (use "git add" and/or "git commit -a")
  ```
3. Öffne deinen bevorzugten Text-Editor, beispielsweise [Atom](https://atom.io/), und navigiere zu der Datei mit den Mergekonflikten.
6. Entscheide, ob Du die gelöschte Datei behalten möchtest. Meist empfiehlt es sich vor dieser Entscheidung, die letzten Änderungen an der gelöschten Datei im Texteditor anzuzeigen.

 So fügst Du die gelöschte Datei wieder zu Deinem Repository hinzu:
  ```shell
  $ git add README.md
  ```
 So löschst Du die Datei aus Deinem Repository:
  ```shell
  $ git rm README.md
  > README.md: needs merge
  > rm 'README.md'
  ```
7. Gib Deine Änderungen mit einem Kommentar frei.
  ```shell
  $ git commit -m "Resolved merge conflict by keeping README.md file."
  > [branch-d 6f89e49] Merge branch 'branch-c' into branch-d
  ```

Du kannst jetzt die Branches in der Befehlszeile mergen oder Folgendes tun: [Pushen deiner Änderungen an dein Remoterepository](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) auf {% data variables.product.product_name %} pushen und [Mergen deiner Änderungen](/articles/merging-a-pull-request/) in einem Pull Request.

## Weiterführende Themen

- [Informationen zu Mergekonflikten](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)
- [Lokales Auschecken von Pull Requests](/articles/checking-out-pull-requests-locally/)
