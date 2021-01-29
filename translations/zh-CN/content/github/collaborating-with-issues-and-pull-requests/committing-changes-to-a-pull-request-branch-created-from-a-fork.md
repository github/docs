---
title: 将更改提交到从复刻创建的拉取请求分支
intro: 在拉取请求创建者的许可下，您可以在从仓库复刻创建的拉取请求分支上提交更改。
redirect_from:
  - /articles/committing-changes-to-a-pull-request-branch-created-from-a-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

在拉取请求分支上进行提交必须满足以下条件：
- 该拉取请求分支在您拥有推送权限的仓库中打开，并且是从仓库的复刻创建的
- 在用户拥有的复刻上
- 拥有拉取请求创建者授予的许可
- 没有阻止您提交的[分支限制](/github/administering-a-repository/about-protected-branches#restrict-who-can-push-to-matching-branches)

只有创建拉取请求的用户才能授予您向用户拥有的复刻推送提交的权限。 更多信息请参阅“[允许更改从复刻创建的拉取请求分支](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)”。

{% note %}

**注：**还可以通过创建自己的仓库复刻副本（或复刻）并将更改提交到创建原始拉取请求更改的头部分支，从而通过 {% data variables.product.product_location %} 向仓库复刻的拉取请求分支进行提交。 有关一些一般准则，请参阅“[从复刻创建拉取请求](/articles/creating-a-pull-request-from-a-fork)”。

{% endnote %}

1. 在

{% data variables.product.product_name %} 上，导航到创建拉取请求分支的复刻（或仓库副本）的主页面。
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
 {% tip %}

 **提示：**如果要使用 {% data variables.product.prodname_desktop %} 克隆复刻，请参阅“[将仓库克隆到 {% data variables.product.prodname_desktop %}](/articles/cloning-a-repository/#cloning-a-repository-to-github-desktop)”。

 {% endtip %}
4. 将当前工作目录更改为要下载克隆目录的位置。
  ```shell
  $ cd open-source-projects
  ```
5. 键入 `git clone`，然后粘贴在第 3 步中复制的 URL。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  ```
6. 按 **Enter** 键。 将创建您的本地克隆。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  > Cloning into `FORK-OF-THE-REPOSITORY`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```
 {% tip %}

 **提示：**错误消息“致命错误：目标路径 'REPOSITORY-NAME' 已存在并且不是空目录”表示您当前的工作目录已包含同名仓库。 要解决此错误，必须将复刻克隆到另一个目录中。

 {% endtip %}
7. 导航到新的克隆仓库。
  ```shell
  $ cd <em>FORK-OF-THE-REPOSITORY</em>
  ```
7. 将分支切换到进行原始更改的拉取请求的比较分支。 如果您导航到原始拉取请求，您将在拉取请求的顶部看到比较分支。 ![比较分支示例](/assets/images/help/pull_requests/compare-branch-example.png) 在此例中，比较分支为 `test-branch`：
  ```shell
  $ git checkout <em>test-branch</em>
  ```

 {% tip %}

 **提示：**有关拉取请求分支的更多信息，包括示例，请参阅“[创建拉取请求](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository)”。

 {% endtip %}
8. 现在，您可以使用此分支执行任何操作。 您可以向该分支推送新提交、运行一些本地测试或将其他分支合并到其中。 根据需要进行修改。
9. 在更改提交到拉取请求的头部分支后，您可以将更改直接推送到原始拉取请求。 在此例中，头部分支为 `test-branch`：
  ```shell
  $ git push origin <em>test-branch</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>.git
  > 12da2e9..250e946  <em>test-branch</em> -> <em>test-branch</em>
  ```

您的新提交将反映在 {% data variables.product.product_location %} 上的原始拉取请求中。

### 延伸阅读

- "[关于复刻](/articles/about-forks)"
