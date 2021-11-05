---
title: 将仓库中的文件移至 Git Large File Storage
intro: '如果设置 {% data variables.large_files.product_name_short %}，并且仓库中具有需要在 {% data variables.large_files.product_name_short %} 中跟踪的文件，则需要先将其从仓库中删除。'
redirect_from:
  - /articles/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: 移动文件到 Git LFS
---

在安装 {% data variables.large_files.product_name_short %} 和配置 {% data variables.large_files.product_name_short %} 跟踪后，您可以将文件从 Git 的常规跟踪移至 {% data variables.large_files.product_name_short %}。 更多信息请参阅“[安装 {% data variables.large_files.product_name_long %}](/github/managing-large-files/installing-git-large-file-storage)”和“[配置 {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage)”。

{% data reusables.large_files.resolving-upload-failures %}

{% tip %}

**Tip:** 如果在尝试推送文件到 Git 时收到错误“这超过 {% data variables.large_files.product_name_short %} 的文件限制 {% data variables.large_files.max_github_size %}”，您可以使用 `git lfs migrate` 而不使用 `filter branch` 或 BFG Repo Cleaner，以将大文件移至 {% data variables.large_files.product_name_long %}。 有关 `git lfs migrate` 命令的更多信息，请参阅 [Git LFS 2.2.0](https://github.com/blog/2384-git-lfs-2-2-0-released) 发行公告。

{% endtip %}

1.  使用 `filter-branch` 命令或 BFG Repo-Cleaner 从仓库的 Git 历史记录中删除文件。 有关使用这些命令或工具的详细信息，请参阅“[从仓库中删除敏感数据](/articles/removing-sensitive-data-from-a-repository)”。
2. 配置文件跟踪并将其推送到 {% data variables.large_files.product_name_short %}。 有关此程序的更多信息，请参阅“[配置 {% data variables.large_files.product_name_long %}](/articles/configuring-git-large-file-storage)”。

## 延伸阅读

- "[关于 {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)"
- “[使用 {% data variables.large_files.product_name_long %} 进行协作](/articles/collaboration-with-git-large-file-storage/)”
- "[安装 {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage)"
