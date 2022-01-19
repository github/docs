---
title: フォークを同期する
intro: リポジトリのフォークを最新に保つために上流リポジトリと同期します。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/syncing-a-fork
  - /articles/syncing-a-fork
  - /github/collaborating-with-issues-and-pull-requests/syncing-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/syncing-a-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}

## Syncing a fork from the web UI

1. On {% data variables.product.product_name %}, navigate to the main page of the forked repository that you want to sync with the upstream repository.
1. Select the **Fetch upstream** drop-down. !["Fetch upstream" drop-down](/assets/images/help/repository/fetch-upstream-drop-down.png)
1. Review the details about the commits from the upstream repository, then click **Fetch and merge**. !["Fetch and merge" button](/assets/images/help/repository/fetch-and-merge-button.png)

If the changes from the upstream repository cause conflicts, {% data variables.product.company_short %} will prompt you to create a pull request to resolve the conflicts.

## Syncing a fork from the command line

{% endif %}
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
  ``` If your local branch didn't have any unique commits, Git will instead perform a "fast-forward":
  ```shell
  $ git merge upstream/main
  > Updating 34e91da..16c56ad
  > Fast-forward
  >  README.md                 |    5 +++--
  >  1 file changed, 3 insertions(+), 2 deletions(-)
  ```

{% tip %}

**参考**: フォークの同期は、リポジトリのローカルコピーだけをアップデートします。 {% data variables.product.product_location %} 上のフォークをアップデートするには、[変更をプッシュする](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)必要があります。

{% endtip %}
