---
title: Fork synchronisieren
intro: 'Synchronisiere den Fork eines Repositorys, um ihn auf dem aktuellen Stand mit dem vorgelagerten Repository zu halten.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/syncing-a-fork
  - /articles/syncing-a-fork
  - /github/collaborating-with-issues-and-pull-requests/syncing-a-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
---

{% ifversion fpt or ghes > 3.1 or ghae-next %}

## Syncing a fork from the web UI

1. On {% data variables.product.product_name %}, navigate to the main page of the forked repository that you want to sync with the upstream repository.
1. Select the **Fetch upstream** drop-down. !["Fetch upstream" drop-down](/assets/images/help/repository/fetch-upstream-drop-down.png)
1. Review the details about the commits from the upstream repository, then click **Fetch and merge**. !["Fetch and merge" button](/assets/images/help/repository/fetch-and-merge-button.png)

If the changes from the upstream repository cause conflicts, {% data variables.product.company_short %} will prompt you to create a pull request to resolve the conflicts.

## Syncing a fork from the command line

{% endif %}
Bevor Du einen Fork mit dem ihm vorgelagerten Repository synchronisieren kannst, musst Du in Git [ein Remote-Repository konfigurieren, das auf das vorgelagerte Repository verweist](/articles/configuring-a-remote-for-a-fork).

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Wechsle Dein aktuelles Arbeitsverzeichnis in das lokale Projekt.
3. Rufe die Branches und die jeweiligen Commits aus dem vorgelagerten Repository ab. Commits to `BRANCHNAME` will be stored in the local branch `upstream/BRANCHNAME`.
  ```shell
  $ git fetch upstream
  > remote: Counting objects: 75, done.
  > remote: Compressing objects: 100% (53/53), done.
  > remote: Total 62 (delta 27), reused 44 (delta 9)
  > Unpacking objects: 100% (62/62), done.
  > From https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>
  >  * [new branch]      main     -> upstream/main
  ```
4. Check out your fork's local default branch - in this case, we use `main`.
  ```shell
  $ git checkout main
  > Switched to branch 'main'
  ```
5. Merge the changes from the upstream default branch - in this case, `upstream/main` - into your local default branch. This brings your fork's default branch into sync with the upstream repository, without losing your local changes.
  ```shell
  $ git merge upstream/main
  > Updating a422352..5fdff0f
  > Fast-forward
  >  README                    |    9 -------
  >  README.md                 |    7 ++++++
  >  2 files changed, 7 insertions(+), 9 deletions(-)
  >  delete mode 100644 README
  >  create mode 100644 README.md
  ``` If your local branch didn't have any unique commits, Git will instead perform a "fast-forward":
  ```shell
  $ git merge upstream/main
  > Updating 34e91da..16c56ad
  > Fast-forward
  >  README.md                 |    5 +++--
  >  1 file changed, 3 insertions(+), 2 deletions(-)
  ```

{% tip %}

**Tipp**: Das Synchronisieren Deiner Fork wird nur die lokale Kopie Deines Repositorys aktualisiert. To update your fork on {% data variables.product.product_location %}, you must [push your changes](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

{% endtip %}
