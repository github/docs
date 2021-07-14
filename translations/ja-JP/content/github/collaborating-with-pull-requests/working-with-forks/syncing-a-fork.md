---
title: フォークを同期する
intro: リポジトリのフォークを最新に保つために上流リポジトリと同期します。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/syncing-a-fork
  - /articles/syncing-a-fork
  - /github/collaborating-with-issues-and-pull-requests/syncing-a-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

上流リポジトリとフォークを同期する前に、Git で[上流リポジトリをポイントするリモートの設定](/articles/configuring-a-remote-for-a-fork)をする必要があります。

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
