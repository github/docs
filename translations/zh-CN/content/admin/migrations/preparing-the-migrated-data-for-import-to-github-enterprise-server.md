---
title: 准备要导入 GitHub Enterprise Server 的迁移数据
intro: 在将迁移的数据应用到您的目标实例之前，您需要将迁移存档复制到目标实例，并针对导入进行准备。
redirect_from:
  - /enterprise/admin/guides/migrations/preparing-the-migrated-data-for-import-to-github-enterprise/
  - /enterprise/admin/migrations/preparing-the-migrated-data-for-import-to-github-enterprise-server
versions:
  enterprise-server: '*'
---

1. 使用 [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) 命令将从源实例或组织生成的迁移存档复制到 {% data variables.product.prodname_ghe_server %} 目标：

    ```shell
    $ scp -P 122 <em>/path/to/archive/MIGRATION_GUID.tar.gz</em> admin@<em>hostname</em>:/home/admin/
    ```

{% data reusables.enterprise_installation.ssh-into-target-instance %}

3. 使用 `ghe-migrator prepare` 命令准备要在目标实例上导入的存档，并生成新的迁移 GUID 供您在后续步骤中使用：

    ```shell
    ghe-migrator prepare /home/admin/<em>MIGRATION_GUID</em>.tar.gz
    ```

    * 要开始新的导入尝试，请再次运行 `ghe-migrator prepare` 并获取新的迁移 GUID。
    * {% data reusables.enterprise_migrations.specify-staging-path %}
