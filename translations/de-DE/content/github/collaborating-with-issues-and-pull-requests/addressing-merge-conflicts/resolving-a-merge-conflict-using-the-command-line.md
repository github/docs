---
title: Mergekonflikt in der Befehlszeile beheben
intro: Mergekonflikte kannst Du in der Befehlszeile und in einem Texteditor beheben.
redirect_from:
  - /articles/resolving-a-merge-conflict-from-the-command-line/
  - /articles/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
Mergekonflikte entstehen, wenn in der gleichen Zeile derselben Datei von verschiedenen Personen konkurrierende Änderungen vorgenommen werden oder wenn eine Person eine Datei bearbeitet und eine andere Person die Datei löscht. Weitere Informationen findest Du unter „[Informationen zu Mergekonflikten](/articles/about-merge-conflicts/).“

{% tip %}

**Tipp:** Zur Behebung von Mergekonflikten aufgrund konkurrierender Änderungen in der gleichen Zeile kannst Du den Konflikteditor von {% data variables.product.product_name %} verwenden, sofern der Konflikt zwischen den Branches eines Pull Requests auftritt. Weitere Informationen findest Du unter „[Mergekonflikt auf GitHub beheben](/articles/resolving-a-merge-conflict-on-github).“

{% endtip %}

### Mergekonflikte durch konkurrierende Änderungen in der gleichen Zeile

Zur Behebung eines Mergekonflikts durch konkurrierende Änderungen in der gleichen Zeile in zwei verschiedenen Branches musst Du entscheiden, welche der Änderungen in einem neuen Commit übernommen werden sollen.

Ein Beispiel: Du und eine andere Person haben die gleichen Zeilen der Datei _styleguide.md_ in verschiedenen Branches des gleichen Git-Repositorys bearbeitet. Beim Versuch, diese Branches zusammenzuführen, erhältst Du nun einen Mergekonflikt. Diesen Mergekonflikt musst Du durch einen neuen Commit beheben, um die beiden Branches zusammenführen zu können.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navigiere zu dem lokalen Git-Repository, in dem der Mergekonflikt auftritt.
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
3. Generiere eine Liste der Dateien, die von diesem Mergekonflikt betroffen sind. In diesem Beispiel enthält die Datei *styleguide.md* einen Mergekonflikt.
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
4. Öffne Deinen bevorzugten Texteditor, beispielsweise [Atom](https://atom.io/), und navigiere zu der Datei mit den Mergekonflikten.
5. Um in der Datei an den Anfang des Mergekonflikts zu gelangen, durchsuche die Datei nach dem Konflikthinweis `<<<<<<<`. Wenn Du die Datei in Deinem Texteditor öffnest, siehst Du die Änderungen im Head- oder Basis-Branch nach der Zeile `<<<<<<< HEAD`. Danach siehst Du `=======`, was Deine Änderungen von den Änderungen im anderen Branch abtrennt. Danach folgt `>>>>>>> BRANCH-NAME`. In diesem Beispiel gab eine Person im Basis- oder Head-Branch „open an issue“ ein, eine andere Person im Vergleichs-Branch (`branch-a`) hingegen „ask your question in IRC“.

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
8. Gib Deine Änderungen frei. Füge Deinem Commit dabei einen Kommentar hinzu.
  ```shell
  $ git commit -m "Resolved merge conflict by incorporating both suggestions."
  ```

Du kannst die Branches nun in der Befehlszeile zusammenführen oder [die Änderungen mittels Push an Dein Remote-Repository auf {% data variables.product.product_name %} übertragen](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) und [Deine Änderungen mit einem Pull Request zusammenführen](/articles/merging-a-pull-request/).

### Mergekonflikte durch das Entfernen einer Datei

Zur Behebung eines Mergekonflikts, der entsteht, wenn eine Person eine Datei in einem Branch löscht und eine andere Person die gleiche Datei in einem anderen Branch bearbeitet, müssen Sie entscheiden, ob die Datei in einem neuen Commit gelöscht oder beibehalten werden soll.

Ein Beispiel: Du hast eine Datei bearbeitet, beispielsweise die Datei *README.md*, und eine andere Person hat die gleiche Datei in einem anderen Branch des gleichen Git-Repositorys gelöscht. Beim Zusammenführen beider Branches erhältst Du einen Mergekonflikt. Diesen Mergekonflikt musst Du durch einen neuen Commit beheben, um die beiden Branches zusammenführen zu können.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navigiere zu dem lokalen Git-Repository, in dem der Mergekonflikt auftritt.
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
2. Generiere eine Liste der Dateien, die von diesem Mergekonflikt betroffen sind. In diesem Beispiel enthält die Datei *README.md* einen Mergekonflikt.
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
3. Öffne Deinen bevorzugten Texteditor, beispielsweise [Atom](https://atom.io/), und navigiere zu der Datei mit den Mergekonflikten.
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
7. Gib Deine Änderungen frei. Füge Deinem Commit dabei einen Kommentar hinzu.
  ```shell
  $ git commit -m "Resolved merge conflict by keeping README.md file."
  > [branch-d 6f89e49] Merge branch 'branch-c' into branch-d
  ```

Du kannst die Branches nun in der Befehlszeile zusammenführen oder [die Änderungen mittels Push an Dein Remote-Repository auf {% data variables.product.product_name %} übertragen](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) und [Deine Änderungen mit einem Pull Request zusammenführen](/articles/merging-a-pull-request/).

### Weiterführende Informationen

- „[Informationen zu Mergekonflikten](/articles/about-merge-conflicts)“
- „[Pull Requests lokal auschecken](/articles/checking-out-pull-requests-locally/)“
