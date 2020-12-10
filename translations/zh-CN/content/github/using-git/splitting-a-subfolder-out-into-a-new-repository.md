---
title: 将子文件夹拆分成新仓库
redirect_from:
  - /articles/splitting-a-subpath-out-into-a-new-repository/
  - /articles/splitting-a-subfolder-out-into-a-new-repository
intro: 您可以将 Git 仓库内的文件夹变为全新的仓库。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

如果您创建仓库的新克隆副本，则将文件夹拆分为单独的仓库时不会丢失任何 Git 历史记录或更改。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 将当前工作目录更改为您要创建新仓库的位置。
3. 克隆包含该子文件夹的仓库。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY-NAME</em>
  ```
4. 将当前工作目录更改为您克隆的仓库。
  ```shell
  $ cd <em>REPOSITORY-NAME</em>
  ```
5. 要从仓库中的其余文件过滤出该子文件夹，请运行 [`git filter-branch`](https://git-scm.com/docs/git-filter-branch)，提供以下信息：
    - `FOLDER-NAME`：项目中您要从其创建单独仓库的文件夹。

    {% windows %}

      {% tip %}

      **提示：**Windows 用户应使用 `/` 来分隔文件夹。

      {% endtip %}

    {% endwindows %}
    - `BRANCH-NAME`: The default branch for your current project, for example, `main` or `gh-pages`.
    ```shell
    $ git filter-branch --prune-empty --subdirectory-filter <em>FOLDER-NAME  BRANCH-NAME </em>
    # Filter the specified branch in your directory and remove empty commits
    > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (89/89)
    > Ref 'refs/heads/<em>BRANCH-NAME</em>' was rewritten
    ```
  现在，该仓库应仅包含您的子文件夹中的文件。

6. 在 {% data variables.product.product_name %} 上[创建新仓库](/articles/creating-a-new-repository/)。
7. 在新 {% data variables.product.product_name %} 仓库 Quick Setup（快速设置）页面的顶部，单击 {% octicon "clippy" aria-label="The copy to clipboard icon" %} 可复制远程仓库 URL。 ![创建远程仓库 URL 字段](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

  {% tip %}

  **提示：** 有关 HTTPS 与 SSH URL 之间的差异，请参阅“[我应使用哪种远程 URL？](/articles/which-remote-url-should-i-use)”

  {% endtip %}

8. 检查仓库现有的远程名称。 例如，`源仓库`或`上游仓库`是两种常见选择。
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY-NAME</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY-NAME</em>.git (push)
  ```

9. 使用现有的远程名称和您在步骤 7 中复制的远程仓库 URL 为新仓库设置新的远程 URL。
  ```shell
  git remote set-url origin https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git
  ```
10. 使用新仓库名称验证远程 URL 是否已更改。
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git (push)
  ```
11. 将您的更改推送到 {% data variables.product.product_name %} 上的新仓库。
  ```shell
  git push -u origin <em>BRANCH-NAME</em>
  ```
