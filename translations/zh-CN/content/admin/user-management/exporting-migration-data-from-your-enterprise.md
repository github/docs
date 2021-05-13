---
title: 从企业导出迁移数据
intro: '要更改平台或从试用实例迁移到生产实例，可以通过准备实例、锁定仓库和生成迁移存档来从 {% data variables.product.prodname_ghe_server %} 实例导出迁移数据。'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-migration-data-from-github-enterprise/
  - /enterprise/admin/migrations/exporting-migration-data-from-github-enterprise-server
  - /enterprise/admin/migrations/preparing-the-github-enterprise-server-source-instance
  - /enterprise/admin/migrations/exporting-the-github-enterprise-server-source-repositories
  - /enterprise/admin/guides/migrations/preparing-the-github-enterprise-source-instance/
  - /enterprise/admin/guides/migrations/exporting-the-github-enterprise-source-repositories/
  - /enterprise/admin/user-management/exporting-migration-data-from-your-enterprise
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### 准备 {% data variables.product.prodname_ghe_server %} 源实例

1. 验证您在 {% data variables.product.prodname_ghe_server %} 源上是站点管理员。 最好的方式是验证您可以[通过 SSH 访问实例](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)。

2. 在 {% data variables.product.prodname_ghe_server %} 源实例上{% data reusables.enterprise_migrations.token-generation %}。

{% data reusables.enterprise_migrations.make-a-list %}

### 导出 {% data variables.product.prodname_ghe_server %} 源仓库

{% data reusables.enterprise_migrations.locking-repositories %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 要准备需要导出的仓库，请使用 `ghe-migrator add` 命令和仓库的 URL：
    * 如果您要锁定仓库，请在命令后附加 `--lock`。 如果您执行的是试运行，则不需要 `--lock`。
      ```shell
      $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>reponame</em> --lock
      ```
    * 您可以将 `--exclude_attachments` 附加到命令，排除文件附件。 {% data reusables.enterprise_migrations.exclude-file-attachments %}
    * 要一次准备多个将导出的仓库，请创建一个文本文件并在单独的行中列出每个仓库 URL，然后运行包含 `-i` 标志和您的文本文件路径的 `ghe-migrator add` 命令。
      ```shell
      $ ghe-migrator add -i <em>PATH</em>/<em>TO</em>/<em>YOUR</em>/<em>REPOSITORY_URLS</em>.txt
      ```

3. 出现提示时，请输入您的 {% data variables.product.prodname_ghe_server %} 用户名：
  ```shell
  Enter username authorized for migration:  admin
  ```
4. 出现输入个人访问令牌的提示时，请输入您在“[准备 {% data variables.product.prodname_ghe_server %} 源实例](#preparing-the-github-enterprise-server-source-instance)”中创建的访问令牌：
  ```shell
  Enter personal access token:  **************
  ```
5. 在 `ghe-migrator add` 完成后，它将打印自身生成并用于标识此导出的唯一的“迁移 GUID”以及添加到导出中的资源列表。 在后续的 `ghe-migrator add` 和 `ghe-migrator export` 步骤中，您将使用它生成的迁移 GUID 指示 `ghe-migrator` 继续在同一个导出上操作。
  ```shell
  > 101 models added to export
  > Migration GUID: <em>example-migration-guid</em>
  > Number of records in this migration:
  > users                        |  5
  > organizations                |  1
  > repositories                 |  1
  > teams                        |  3
  > protected_branches           |  1
  > pull_request_reviews         |  1
  > milestones                   |  1
  > issues                       |  3
  > pull_requests                |  5
  > pull_request_review_comments |  4
  > commit_comments              |  2
  > issue_comments               | 10
  > issue_events                 | 63
  > releases                     |  3
  > attachments                  |  4
  > projects                     |  2
  ```
  每次您添加包含现有迁移 GUID 的新仓库时，它都会更新现有导出。 如果您在没有迁移 GUID的情况下再次运行 `ghe-migrator add`，将会启动新的导出并生成新的迁移 GUID。 **开始准备要导入的迁移时，不要再次使用在导出过程中生成的迁移 GUID**。

3. 如果您锁定了源仓库，则可以使用 `ghe-migrator target_url` 命令，在链接到仓库新位置的仓库页面上设置自定义锁定消息。 传递源仓库 URL、目标仓库 URL 和第 5 步中的迁移 GUID：

  ```shell
  $ ghe-migrator target_url https://<em>hostname</em>/<em>username</em>/<em>reponame</em> https://<em>target_hostname</em>/<em>target_username</em>/<em>target_reponame</em> -g <em>MIGRATION_GUID</em>
  ```

6. 要向同一个导出添加更多仓库，请使用包含 `-g` 标志的 `ghe-migrator add` 命令。 您需要传入新仓库 URL 和第 5 步中的迁移 GUID：
  ```shell
  $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>other_reponame</em> -g <em>MIGRATION_GUID</em> --lock
  ```
7. 添加完仓库后，请使用包含 `-g` 标志和第 5 步中的迁移 GUID 的 `ghe-migrator export` 命令生成迁移存档：
    ```shell
    $ ghe-migrator export -g <em>MIGRATION_GUID</em>
    > Archive saved to: /data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz
    ```
    * {% data reusables.enterprise_migrations.specify-staging-path %}

8. 关闭与 {% data variables.product.product_location %} 的连接：
  ```shell
  $ exit
  > logout
  > Connection to <em>hostname</em> closed.
  ```
9. 使用 [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) 命令将迁移存档复制到您的计算机。 存档文件将使用迁移 GUID 命名：
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:/data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz ~/Desktop
  ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
