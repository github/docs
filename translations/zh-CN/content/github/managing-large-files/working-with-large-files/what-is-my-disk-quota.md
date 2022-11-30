---
title: 我的磁盘配额是多少？
redirect_from:
  - /articles/what-is-the-size-limit-for-a-repository/
  - /articles/what-is-my-disk-quota
  - /github/managing-large-files/what-is-my-disk-quota
intro: '{% data variables.product.product_name %} 尝试为所有 Git 仓库提供丰富的存储空间，尽管文件和仓库大小存在硬性限制。'
versions:
  free-pro-team: '*'
---

{% data reusables.large_files.use_lfs_tip %}

### 文件和仓库大小限制

为确保用户的性能和可靠性，我们积极监控整个仓库运行状况的信号。 仓库运行状况是各种交互因素共同作用的结果，包括大小、提交频率、内容和结构。

建议仓库保持较小，理想情况下小于 1 GB，强烈建议小于 5 GB。 较小的仓库克隆速度更快，使用和维护更容易。 仓库中的单个文件严格限于 {% data variables.large_files.max_github_size %} 的大小上限。 更多信息请参阅“[使用大文件](/github/managing-large-files/working-with-large-files)”。

如果您的仓库过度影响我们的基础架构，您可能会收到来自 {% data variables.contact.github_support %} 的电子邮件，要求您采取纠正措施。 我们力求灵活，特别是对于拥有很多协作者的大型项目，并且尽可能与您一起找到解决方案。 您可以有效地管理仓库的大小和整体运行状况，以免您的仓库影响我们的基础架构。 在 [`github/git-sizer`](https://github.com/github/git-sizer) 仓库中可以找到用于仓库分析的建议和工具。

{% note %}

**注：**如果您通过浏览器将文件添加到仓库，该文件不得大于 {% data variables.large_files.max_github_browser_size %}。 更多信息请参阅“[添加文件到仓库](/github/managing-files-in-a-repository/adding-a-file-to-a-repository)”。

{% endnote %}

### 备份

Git 未设计为用作备份工具。 但有许多专门设计用于执行备份的解决方案例如 [Arq](https://www.arqbackup.com/)、[Carbonite](http://www.carbonite.com/) 和 [CrashPlan](https://www.crashplan.com/en-us/)。

### 数据库转储

版本控制系统（如 Git）未设计用于处理大型 SQL 文件。 要与其他开发者共享大型数据库，建议使用 [Dropbox](https://www.dropbox.com/)。

Git 不应该用于备份生产服务器。 更多信息请参阅“[备份](/github/managing-large-files/what-is-my-disk-quota#backups)”。

### 外部依赖项

外部依赖项可能导致 Git 仓库变得非常大。 为避免外部依赖项填满仓库，建议您使用包管理器。 常用语言的热门包管理器包括 [Bundler](http://bundler.io/)、[Node's Package Manager](http://npmjs.org/) 和 [Maven](http://maven.apache.org/)。 这些包管理器支持直接使用 Git 仓库，因此不需要预打包的来源。

### 打包的发行版本

我们不建议分发仓库中已编译的代码和预先打包的发行版。 更多信息请参阅“[分发大型二进制文件](/github/managing-large-files/distributing-large-binaries)”。

### 更改现有仓库的历史记录

如果仓库已经很大，可以从仓库历史记录中删除大型文件来减小仓库。 更多信息请参阅“[从仓库的历史记录中删除文件](/github/managing-large-files/removing-files-from-a-repositorys-history)”。
