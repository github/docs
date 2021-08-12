---
title: 从仓库的历史记录中删除文件
intro: '要从仓库中删除大文件，必须将其从本地仓库和 {% data variables.product.product_location %} 中完全删除。'
redirect_from:
  - /articles/removing-files-from-a-repository-s-history
  - /articles/removing-files-from-a-repositorys-history
  - /github/managing-large-files/removing-files-from-a-repositorys-history
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

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
