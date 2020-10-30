---
title: 生成迁移冲突列表
intro: 如果 `ghe-migrator` 在准备要导入的数据时报告冲突，您必须先生成这些冲突的列表，然后再准备使用自定义映射加以解决。
redirect_from:
  - /enterprise/admin/migrations/generating-a-list-of-migration-conflicts
versions:
  enterprise-server: '*'
---

1. 使用包含迁移 GUID 的 `ghe-migrator conflicts` 命令生成一个 *conflicts.csv* 文件：
    ```shell
    $ ghe-migrator conflicts -g <em>MIGRATION_GUID</em> > conflicts.csv
    ```
    - 如果未报告冲突，您可以按照“[在 {% data variables.product.prodname_ghe_server %} 上应用导入的数据](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/)”中的步骤操作，安全地导入数据。
2. 如果存在冲突，请使用 [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) 命令将 *conflicts.csv* 复制到您的本地计算机：
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:conflicts.csv ~/Desktop
  ```
3. 继续“[解决迁移冲突或设置自定义映射](/enterprise/admin/guides/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings/)”。
