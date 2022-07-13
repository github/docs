---
title: フォークを同期する
intro: リポジトリのフォークを最新に保つために上流リポジトリと同期します。
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
2. Select the **Fetch upstream** drop-down. !["Fetch upstream" drop-down](/assets/images/help/repository/fetch-upstream-drop-down.png)
3. Review the details about the commits from the upstream repository, then click **Fetch and merge**. !["Fetch and merge" button](/assets/images/help/repository/fetch-and-merge-button.png)

If the changes from the upstream repository cause conflicts, {% data variables.product.company_short %} will prompt you to create a pull request to resolve the conflicts.

## Syncing a fork branch with the {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} {% data variables.product.prodname_cli %}について学ぶには、「[{% data variables.product.prodname_cli %}について](/github-cli/github-cli/about-github-cli)」を参照してください。

To update the remote fork from its parent, use the `gh repo sync -b BRANCHNAME` subcommand and supply your fork and branch name as arguments.

```shell
$ gh repo sync owner/cli-fork -b BRANCHNAME
```

If the changes from the upstream repository cause conflict then the {% data variables.product.prodname_cli %} can't sync. You can set the `-force` flag to overwrite the destination branch.

## Syncing a fork branch from the command line

上流リポジトリとフォークを同期する前に、Git で[上流リポジトリをポイントするリモートの設定](/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork)をする必要があります。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. ワーキングディレクトリをローカルプロジェクトに変更します。
3. 上流リポジトリから、ブランチと各ブランチのコミットをフェッチします。 `BRANCHNAME` へのコミットは、ローカルブランチ `upstream/BRANCHNAME` に保存されます。

  ```shell
  $ git fetch upstream
  > remote: Counting objects: 75, done.
  > remote: Compressing objects: 100% (53/53), done.
  > remote: Total 62 (delta 27), reused 44 (delta 9)
  > Unpacking objects: 100% (62/62), done.
  > From https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>
  >  * [new branch]      main     -> upstream/main
  ```

4. フォークのローカルのデフォルトブランチを確認してください。この場合は、`main` を使用します。

  ```shell
  $ git checkout main
  > Switched to branch 'main'
  ```

5. 上流のデフォルトブランチ (この場合は `upstream/main`) からの変更をローカルのデフォルトブランチにマージします。 これにより、ローカルの変更を失うことなく、フォークのデフォルトブランチが上流リポジトリと同期されます。

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
  If your local branch had unique commits, you may need to resolve conflicts. 詳細は「[マージコンフリクトに対処する](/github/collaborating-with-pull-requests/addressing-merge-conflicts)」を参照してください。

{% tip %}

**参考**: フォークの同期は、リポジトリのローカルコピーだけをアップデートします。 {% data variables.product.product_location %} 上のフォークをアップデートするには、[変更をプッシュする](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)必要があります。

{% endtip %}
