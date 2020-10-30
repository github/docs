---
title: Syncing a fork
intro: Sync a fork of a repository to keep it up-to-date with the upstream repository.
redirect_from:
  - /articles/syncing-a-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Before you can sync your fork with an upstream repository, you must [configure a remote that points to the upstream repository](/articles/configuring-a-remote-for-a-fork) in Git.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Change the current working directory to your local project.
3. Fetch the branches and their respective commits from the upstream repository. Commits to `master` will be stored in a local branch, `upstream/master`.
  ```shell
  $ git fetch upstream
  > remote: Counting objects: 75, done.
  > remote: Compressing objects: 100% (53/53), done.
  > remote: Total 62 (delta 27), reused 44 (delta 9)
  > Unpacking objects: 100% (62/62), done.
  > From https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>
  >  * [new branch]      master     -> upstream/master
  ```
4. Check out your fork's local `master` branch.
  ```shell
  $ git checkout master
  > Switched to branch 'master'
  ```
5. Merge the changes from `upstream/master` into your local `master` branch. This brings your fork's `master` branch into sync with the upstream repository, without losing your local changes.
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

**Tip**: Syncing your fork only updates your local copy of the repository. To update your fork on {% data variables.product.product_location %}, you must [push your changes](/articles/pushing-commits-to-a-remote-repository/).

{% endtip %}
