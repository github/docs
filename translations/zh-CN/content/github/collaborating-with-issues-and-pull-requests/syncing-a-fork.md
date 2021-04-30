---
title: 同步复刻
intro: 同步仓库的复刻以通过上游仓库使其保持最新。
redirect_from:
  - /articles/syncing-a-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 拉取请求
---

必须在 Git 中[配置指向上游仓库的远程仓库](/articles/configuring-a-remote-for-a-fork)，然后才能将您的复刻与上游仓库同步。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 将当前工作目录更改为您的本地仓库。
3. 从上游仓库获取分支及其各自的提交。 对 `BRANCHNAME` 的提交将存储在本地分支 `upstream/BRANCHNAME` 中。
  ```shell
  $ git fetch upstream
  > remote: Counting objects: 75, done.
  > remote: Compressing objects: 100% (53/53), done.
  > remote: Total 62 (delta 27), reused 44 (delta 9)
  > Unpacking objects: 100% (62/62), done.
  > From https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>
  >  * [new branch]      main     -> upstream/main
  ```
4. 检出复刻的本地默认分支 - 在本例中，我们使用 `main`。
  ```shell
  $ git checkout main
  > Switched to branch 'main'
  ```
5. 将上游默认分支 - 本例中为 `upstream/main` - 的更改合并到本地默认分支。 这会使复刻的默认分支与上游仓库同步，而不会丢失本地更改。
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

**提示**：同步复刻仅更新仓库的本地副本。 要在 {% data variables.product.product_location %} 上更新复刻，您必须[推送更改](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)。

{% endtip %}
