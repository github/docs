---
title: Syncing a fork
intro: Sync a fork of a repository to keep it up-to-date with the upstream repository.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/syncing-a-fork
  - /articles/syncing-a-fork
  - /github/collaborating-with-issues-and-pull-requests/syncing-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/syncing-a-fork
  - /pull-requests/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
  - /articles/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
permissions: People with write access for a forked repository can sync the fork to the upstream repository.
---

## Syncing a fork branch from the web UI

1. On {% data variables.product.product_name %}, navigate to the main page of the forked repository that you want to sync with the upstream repository.
2. Select the **Fetch upstream** drop-down.
    !["Fetch upstream" drop-down](/assets/images/help/repository/fetch-upstream-drop-down.png)
3. Review the details about the commits from the upstream repository, then click **Fetch and merge**.
    !["Fetch and merge" button](/assets/images/help/repository/fetch-and-merge-button.png)

If the changes from the upstream repository cause conflicts, {% data variables.product.company_short %} will prompt you to create a pull request to resolve the conflicts.

## Syncing a fork branch with the {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} To learn more about {% data variables.product.prodname_cli %}, see "[About {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)."

To update the remote fork from its parent, use the `gh repo sync -b BRANCHNAME` subcommand and supply your fork and branch name as arguments.

```shell
$ gh repo sync owner/cli-fork -b BRANCHNAME
```

If the changes from the upstream repository cause conflict then the {% data variables.product.prodname_cli %} can't sync. You can set the `-force` flag to overwrite the destination branch.

## Syncing a fork branch from the command line

Before you can sync your fork with an upstream repository, you must [configure a remote that points to the upstream repository](/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork) in Git.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Change the current working directory to your local project.
3. Fetch the branches and their respective commits from the upstream repository. Commits to `BRANCHNAME` will be stored in the local branch `upstream/BRANCHNAME`.

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
  ```
  
  If your local branch didn't have any unique commits, Git will perform a fast-forward. For more information, see [Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) in the Git documentation.
  ```shell
  $ git merge upstream/main
  > Updating 34e91da..16c56ad
  > Fast-forward
  >  README.md                 |    5 +++--
  >  1 file changed, 3 insertions(+), 2 deletions(-)
  ``` 
  If your local branch had unique commits, you may need to resolve conflicts. For more information, see "[Addressing merge conflicts](/github/collaborating-with-pull-requests/addressing-merge-conflicts)."

{% tip %}

**Tip**: Syncing your fork only updates your local copy of the repository. To update your fork on {% data variables.product.product_location %}, you must [push your changes](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

{% endtip %}
