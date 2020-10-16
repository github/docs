---
title: Subversion 和 Git 有哪些区别？
intro: 'Subversion (SVN) 仓库与 Git 仓库类似，但涉及项目架构时有一些区别。'
redirect_from:
  - /articles/what-are-the-differences-between-svn-and-git/
  - /articles/what-are-the-differences-between-subversion-and-git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 目录结构

项目中的每个*引用*或标记的提交快照均在特定子目录中组织，例如 `trunk`、`branches` 和 `tags`。 例如，具有两项正在开发的功能的 SVN 项目可能类似如下：

      sample_project/trunk/README.md
      sample_project/trunk/lib/widget.rb
      sample_project/branches/new_feature/README.md
      sample_project/branches/new_feature/lib/widget.rb
      sample_project/branches/another_new_feature/README.md
      sample_project/branches/another_new_feature/lib/widget.rb

SVN 工作流程可能类似如下：

* `trunk` 目录表示项目的最新稳定发行版。
* 活动功能工作在 `branches` 下的子目录内进行开发。
* 功能完成后，该功能目录将合并到 `trunk` 中并删除。

Git 项目也存储在一个目录中。 不过，Git 通过将其引用存储在一个特殊的 *.git* 目录中来模糊其详细信息。 例如，具有两项正在开发的功能的 Git 项目可能类似如下：

      sample_project/.git
      sample_project/README.md
      sample_project/lib/widget.rb

Git 工作流程可能类似如下：

* Git 仓库在 *.git* 目录中存储所有其分支和标记的完整历史记录。
* The latest stable release is contained within the default branch.
* 活动功能工作在单独的分支中进行开发。
* When a feature is finished, the feature branch is merged into the default branch and deleted.

与 SVN 不同的是，使用 Git 时目录结构保持不变，但文件内容会根据您的分支而变化。

### 包括子项目

*子项目*是在主项目之外的某个位置开发和管理的项目。 您通常导入子项目以将一些功能添加到您的项目，而无需自行维护代码。 每当子项目更新时，您可以将其与您的项目同步，以确保所有内容都是最新的。

在 SVN 中，子项目称为 *SVN 外部*。 在 Git 中，它称为 *Git 子模块*。 尽管在概念上类似，但 Git 子模块不会自动保持最新状态；您必须明确要求才能将新版本带入您的项目。

更多信息请参阅 Git 文档中的“[Git 工具子模块](https://git-scm.com/book/en/Git-Tools-Submodules)”。

### 保留历史记录

SVN 配置为假设项目的历史记录永不更改。 Git 允许您使用 [`git rebase`](/articles/about-git-rebase) 等工具修改以前的提交和更改。

{% tip %}

[GitHub 支持 Subversion 客户端](/articles/support-for-subversion-clients)，如果您在同一项目内同时使用 Git 和 SVN，可能会产生一些意外的结果。 如果您操纵了 Git 的提交历史记录，这些相同的提交在 SVN 的历史记录中将始终保留。 如果意外提交了一些敏感数据，我们有[一篇文章可帮助您将其从 Git 的历史中删除](/articles/removing-sensitive-data-from-a-repository)。

{% endtip %}

### 延伸阅读

- “[GitHub 支持的 Subversion 属性](/articles/subversion-properties-supported-by-github)”
- [_Git SCM_ 书籍中的“分支与合并”](https://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging)
- “[将源代码导入到 GitHub](/articles/importing-source-code-to-github)”
- "[源代码迁移工具](/articles/source-code-migration-tools)"
