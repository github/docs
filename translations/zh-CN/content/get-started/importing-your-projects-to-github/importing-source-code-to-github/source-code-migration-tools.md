---
title: 源代码迁移工具
intro: 您可以使用外部工具将项目移动到 GitHub。
redirect_from:
  - /articles/importing-from-subversion
  - /articles/source-code-migration-tools
  - /github/importing-your-projects-to-github/source-code-migration-tools
  - /github/importing-your-projects-to-github/importing-source-code-to-github/source-code-migration-tools
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: 代码迁移工具
---

{% ifversion fpt or ghec %}

我们建议使用 [GitHub 导入工具](/articles/about-github-importer)从 Subversion、Mercurial、Team Foundation Version Control (TFVC) 或其他 Git 仓库导入项目。 您还可以使用这些外部工具将项目转换为 Git。

{% endif %}

## 从 Subversion 导入

在典型 Subversion 环境中，多个项目存储在一个根仓库中。 在 GitHub 上，这些项目的每一个通常都将映射到用户帐户或组织的单独 Git 仓库。 以下情况时，我们建议将 Subversion 仓库的每一部分导入到单独的 GitHub 仓库：

* 协作者需要检出或提交到独立于项目其他部分的部分
* 您想要不同的部分有其自己的访问权限

我们建议使用以下工具将 Subversion 仓库转换为 Git：

- [`git-svn`](https://git-scm.com/docs/git-svn)
- [svn2git](https://github.com/nirvdrum/svn2git)

## 从 Mercurial 导入

我们建议使用 [hg-fast-export](https://github.com/frej/fast-export) 将 Mercurial 仓库转换为 Git。

## 从 TFVC 导入

我们建议 [git-tfs](https://github.com/git-tfs/git-tfs) 用于在TFVC 和 Git 之间移动更改。

For more information about moving from TFVC (a centralized version control system) to Git, see "[Plan your Migration to Git](https://docs.microsoft.com/devops/develop/git/centralized-to-git)" from the Microsoft docs site.

{% tip %}

**提示：**在成功地将项目转换为 Git 后，您可以[将其推送到 {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)。

{% endtip %}

{% ifversion fpt or ghec %}

## 延伸阅读

- “[关于 GitHub 导入工具](/articles/about-github-importer)”
- "[使用 GitHub 导入工具导入仓库](/articles/importing-a-repository-with-github-importer)"
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})

{% endif %}
