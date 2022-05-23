---
title: 从第三方版本控制系统导入数据
intro: '使用工具的 git-import 套件，您可以将数据从 Subversion、Mercurial 和 Team Foundation Version Control 导入 {% data variables.product.prodname_ghe_server %} 上的 Git 仓库。'
redirect_from:
  - /enterprise/admin/migrations/importing-data-from-third-party-version-control-systems
  - /enterprise/admin/user-management/importing-data-from-third-party-version-control-systems
  - /admin/user-management/importing-data-from-third-party-version-control-systems
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
shortTitle: 从另一个 VCS 导入
---

## 从 Mercurial 导入项目

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 使用以下命令对项目进行原始克隆，并指定源项目的 URL 和临时仓库的路径：
  ```shell
  $ git-import-hg-raw <em>HG-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. 使用 CSV 文件重写作者和分支：
  ```shell
  $ git-import-rewrite --flavor hg --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. 如果您还没有创建，请[在 {% data variables.product.prodname_ghe_server %} 上创建新的空仓库](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository)。
{% data reusables.command_line.switching_directories_procedural %}
7. 将导入的仓库推送到 {% data variables.product.prodname_ghe_server %}：
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

## 从 Subversion 导入项目

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 使用以下命令对项目进行原始克隆，并指定源项目的 URL 和临时仓库的路径：
  ```shell
  $ git-import-svn-raw <em>SVN-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. 使用 CSV 文件重写作者和分支：
  ```shell
  $ git-import-rewrite --flavor svn --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. 如果您还没有创建，请[在 {% data variables.product.prodname_ghe_server %} 上创建新的空仓库](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository)。
{% data reusables.command_line.switching_directories_procedural %}
7. 将导入的仓库推送到 {% data variables.product.prodname_ghe_server %}：
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

## 从 Team Foundation Version Control 导入项目

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 使用以下命令对项目进行原始克隆，并指定源项目的 URL 和临时仓库的路径：
  ```shell
  $ git-import-tfs-raw <em>TEAM-FOUNDATION-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. 使用 CSV 文件重写作者和分支：
  ```shell
  $ git-import-rewrite --flavor tfs --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. 如果您还没有创建，请[在 {% data variables.product.prodname_ghe_server %} 上创建新的空仓库](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository)。
{% data reusables.command_line.switching_directories_procedural %}
7. 将导入的仓库推送到 {% data variables.product.prodname_ghe_server %}：
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

## 延伸阅读

- "[命令行实用程序](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities/#import-and-export)"
