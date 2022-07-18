---
title: 关于 GitHub 上的大文件
intro: '{% data variables.product.product_name %} 限制了可以在常规 Git 存储库中跟踪的文件大小。 了解如何跟踪或删除超出限制的文件。'
redirect_from:
  - /articles/distributing-large-binaries
  - /github/managing-large-files/distributing-large-binaries
  - /github/managing-large-files/working-with-large-files/distributing-large-binaries
  - /articles/removing-files-from-a-repository-s-history
  - /articles/removing-files-from-a-repositorys-history
  - /github/managing-large-files/removing-files-from-a-repositorys-history
  - /github/managing-large-files/working-with-large-files/removing-files-from-a-repositorys-history
  - /articles/conditions-for-large-files
  - /github/managing-large-files/conditions-for-large-files
  - /github/managing-large-files/working-with-large-files/conditions-for-large-files
  - /articles/what-is-the-size-limit-for-a-repository
  - /articles/what-is-my-disk-quota
  - /github/managing-large-files/what-is-my-disk-quota
  - /github/managing-large-files/working-with-large-files/what-is-my-disk-quota
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: 大文件
---

## 关于 {% data variables.product.product_name %} 的大小限制

{% ifversion fpt or ghec %}
{% data variables.product.product_name %} 尝试为所有 Git 仓库提供丰富的存储空间，尽管文件和仓库大小存在硬性限制。 为确保用户的性能和可靠性，我们积极监控整个仓库运行状况的信号。 仓库运行状况是各种交互因素共同作用的结果，包括大小、提交频率、内容和结构。

### 文件大小限制
{% endif %}

{% data variables.product.product_name %} 限制存储库中允许的文件大小。 如果尝试添加或更新大于 {% data variables.large_files.warning_size %} 的文件，您将从 Git 收到警告。 更改仍将成功推送到仓库，但您可以考虑删除提交，以尽量减少对性能的影响。 更多信息请参阅“[从仓库的历史记录中删除文件](#removing-files-from-a-repositorys-history)”。

{% note %}

**注：**如果您通过浏览器将文件添加到仓库，该文件不得大于 {% data variables.large_files.max_github_browser_size %}。 更多信息请参阅“[添加文件到仓库](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)”。

{% endnote %}

{% ifversion ghes %}默认情况下， {% endif %}{% data variables.product.product_name %} 阻止超过 {% data variables.large_files.max_github_size %} 的推送。 {% ifversion ghes %}但站点管理员可为您的 {% data variables.product.product_location %} 配置不同的限制。  更多信息请参阅“[设置 Git 推送限制](/enterprise/admin/guides/installation/setting-git-push-limits)”。{% endif %}

要跟踪超出此限制的文件，必须使用 {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %})。 更多信息请参阅“[关于 {% data variables.large_files.product_name_long %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)”。

如果需要在存储库中分发大文件，则可以在 {% data variables.product.product_location %} 上创建版本，而不是跟踪文件。 更多信息请参阅“[分发大型二进制文件](#distributing-large-binaries)”。

Git 不是为处理大型 SQL 文件而设计的。 要与其他开发者共享大型数据库，建议使用 [Dropbox](https://www.dropbox.com/)。

{% ifversion fpt or ghec %}
### 存储库大小限制

建议仓库保持较小，理想情况下小于 1 GB，强烈建议小于 5 GB。 较小的仓库克隆速度更快，使用和维护更容易。 如果您的仓库过度影响我们的基础架构，您可能会收到来自 {% data variables.contact.github_support %} 的电子邮件，要求您采取纠正措施。 我们力求灵活，特别是对于拥有很多协作者的大型项目，并且尽可能与您一起找到解决方案。 您可以有效地管理仓库的大小和整体运行状况，以免您的仓库影响我们的基础架构。 在 [`github/git-sizer`](https://github.com/github/git-sizer) 仓库中可以找到用于仓库分析的建议和工具。

外部依赖项可能导致 Git 仓库变得非常大。 为避免外部依赖项填满仓库，建议您使用包管理器。 常用语言的热门包管理器包括 [Bundler](http://bundler.io/)、[Node's Package Manager](http://npmjs.org/) 和 [Maven](http://maven.apache.org/)。 这些包管理器支持直接使用 Git 仓库，因此不需要预打包的来源。

Git 未设计为用作备份工具。 但有许多专门设计用于执行备份的解决方案例如 [Arq](https://www.arqbackup.com/)、[Carbonite](http://www.carbonite.com/) 和 [CrashPlan](https://www.crashplan.com/en-us/)。
{% endif %}

## 从仓库的历史记录中删除文件

{% warning %}

**警告**：这些步骤将从您的计算机和 {% data variables.product.product_location %} 上的仓库中永久删除文件。 如果文件很重要，请在仓库外部的目录中创建本地备份副本。

{% endwarning %}

### 删除在最近未推送的提交中添加的文件

如果文件使用最近的提交添加，而您尚未推送到 {% data variables.product.product_location %}，您可以删除文件并修改提交：

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
3. 要删除文件，请输入 `git rm --cached`：
  ```shell
  $ git rm --cached <em>giant_file</em>
  # Stage our giant file for removal, but leave it on disk
  ```
4. 使用 `--amend -CHEAD` 提交此更改：
  ```shell
  $ git commit --amend -CHEAD
  # Amend the previous commit with your change
  # Simply making a new commit won't work, as you need
  # to remove the file from the unpushed history as well
  ```
5. 将提交推送到 {% data variables.product.product_location %}：
  ```shell
  $ git push
  # Push our rewritten, smaller commit
  ```

### 删除之前提交中添加的文件

如果在之前的提交中添加了文件，则需要将其从仓库历史记录中删除。 要从仓库历史记录中删除文件，可以使用 BFG Repo-Cleaner 或 `git filter-branch` 命令。 更多信息请参阅“[从仓库中删除敏感数据](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)”。

## 分发大型二进制文件

如果需要在仓库内分发大型文件，您可以在 {% data variables.product.product_location %} 上创建发行版。 发行版允许您打包软件、发行说明和指向二进制文件的链接，以供其他人使用。 更多信息请参阅“[关于发行版](/github/administering-a-repository/about-releases)”。

{% ifversion fpt or ghec %}

我们不限制二进制发行版文件的总大小，也不限制用于传递它们的带宽。 但每个文件必须小于 {% data variables.large_files.max_lfs_size %}。

{% endif %}

