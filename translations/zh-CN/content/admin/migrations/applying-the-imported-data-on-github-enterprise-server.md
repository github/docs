---
title: 在 GitHub Enterprise Server 上应用导入的数据
intro: 审查完迁移数据后，您可以向目标实例永久应用变更。
redirect_from:
  - /enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise/
  - /enterprise/admin/migrations/applying-the-imported-data-on-github-enterprise-server
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_installation.ssh-into-target-instance %}

2. 使用 `ghe-migrator import` 命令启动导入过程。 您需要：
    * 迁移 GUID.
    * 用于身份验证的个人访问令牌。 您使用的个人访问令牌仅用于站点管理员身份验证，不需要任何特定范围。 For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."

    ```shell
    $ ghe-migrator import /home/admin/<em>MIGRATION_GUID</em>.tar.gz -g <em>MIGRATION_GUID</em> -u <em>username</em> -p <em>TOKEN</em>

    > Starting GitHub::Migrator
    > Import 100% complete /
    ```

    * {% data reusables.enterprise_migrations.specify-staging-path %}
