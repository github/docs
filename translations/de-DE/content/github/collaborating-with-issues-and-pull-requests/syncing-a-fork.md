---
title: Fork synchronisieren
intro: Synchronisiere den Fork eines Repositorys, um ihn auf dem aktuellen Stand mit dem vorgelagerten Repository zu halten.
redirect_from:
  - /articles/syncing-a-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Bevor Du einen Fork mit dem ihm vorgelagerten Repository synchronisieren kannst, musst Du in Git [ein Remote-Repository konfigurieren, das auf das vorgelagerte Repository verweist](/articles/configuring-a-remote-for-a-fork).

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Wechsle Dein aktuelles Arbeitsverzeichnis in das lokale Projekt.
3. Rufe die Branches und die jeweiligen Commits aus dem vorgelagerten Repository ab. Commits am `master`-Branch werden in einem lokalen Branch mit dem Namen `upstream/master` gespeichert.
  ```shell
  $ git fetch upstream
  > remote: Counting objects: 75, done.
  > remote: Compressing objects: 100% (53/53), done.
  > remote: Total 62 (delta 27), reused 44 (delta 9)
  > Unpacking objects: 100% (62/62), done.
  > From https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>
  >  * [new branch]      master     -> upstream/master
  ```
4. Checke den lokalen `master`-Branch Deiner Fork aus.
  ```shell
  $ git checkout master
  > Switched to branch 'master'
  ```
5. Führe die Änderungen aus dem Branch `upstream/master` in Deinen lokalen `master`-Branch zusammen. Dadurch wird der `master`-Branch Deiner Fork ohne Verlust der lokalen Änderungen mit dem vorgelagerten Repository synchronisiert.
  ```shell
  $ git merge upstream/master
  > Updating a422352..5fdff0f
  > Fast-forward
  >  README                    |    9 -------
  >  README.md                 |    7 ++++++
  >  2 files changed, 7 insertions(+), 9 deletions(-)
  >  delete mode 100644 README
  >  create mode 100644 README.md
  ``` If your local branch didn't have any unique commits, Git will instead perform a "fast-forward":
  ```shell
  $ git merge upstream/master
  > Updating 34e91da..16c56ad
  > Fast-forward
  >  README.md                 |    5 +++--
  >  1 file changed, 3 insertions(+), 2 deletions(-)
  ```

{% tip %}

**Tipp**: Das Synchronisieren Deiner Fork wird nur die lokale Kopie Deines Repositorys aktualisiert. Für eine Aktualisierung Ihres Forks auf {% data variables.product.product_location %} müssen Sie [Ihre Änderungen per Push übertragen](/articles/pushing-commits-to-a-remote-repository/).

{% endtip %}
