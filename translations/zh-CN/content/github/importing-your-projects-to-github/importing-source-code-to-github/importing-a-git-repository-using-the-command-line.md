---
title: 使用命令行导入 Git 仓库
intro: '{% if currentVersion == "free-pro-team@latest" %}如果 [GitHub Importer](/articles/importing-a-repository-with-github-importer) 不适用于您的目的，例如，如果您现有的代码托管在私有网络上，则我们建议使用命令行导入。{% else %}当您现有的代码托管在私有网络上时，适合使用命令行导入 Git 项目。{% endif %}'
redirect_from:
  - /articles/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-a-git-repository-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

在开始之前，请确保您知道：

- 您的 {% data variables.product.product_name %} 用户名
- 外部仓库的克隆 URL，如 `https://external-host.com/user/repo.git` 或 `git://external-host.com/user/repo.git`（或许 `external-host.com` 域名前面是 `user@`）

{% tip %}

为便于示范，我们将使用：

- 外部帐户 **extuser**
- 外部 Git 主机 `https://external-host.com`
- {% data variables.product.product_name %} 个人用户帐户 **ghuser**
- {% data variables.product.product_name %} 仓库 **repo.git**

{% endtip %}

1. [在 {% data variables.product.product_name %} 上创建新仓库](/articles/creating-a-new-repository)。 您将在此新仓库中导入外部 Git 仓库。
2. 在命令行上，使用外部克隆 URL 创建仓库的“裸”克隆。 这会创建数据的完整副本，但没有编辑文件的工作目录，并确保干净、新鲜地导出所有旧数据。
  ```shell
  $ git clone --bare https://external-host.com/<em>extuser</em>/<em>repo.git</em>
  # Makes a bare clone of the external repository in a local directory
  ```
3. 使用“镜像”选项将本地克隆的仓库推送到 {% data variables.product.product_name %}，以确保所有引用（如分支和标记）都复制到导入的仓库。
  ```shell
  $ cd <em>repo.git</em>
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>ghuser</em>/<em>repo.git</em>
  # Pushes the mirror to the new {% data variables.product.product_name %} repository
  ```
4. 删除临时本地仓库。
  ```shell
  $ cd ..
  $ rm -rf <em>repo.git</em>
  ```
