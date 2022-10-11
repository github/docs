---
title: 迁移到内部仓库
intro: '您可以迁移到内部仓库，以便为同时使用 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 的开发者统一内源体验。'
redirect_from:
  - /enterprise/admin/installation/migrating-to-internal-repositories
  - /enterprise/admin/user-management/migrating-to-internal-repositories
  - /admin/user-management/migrating-to-internal-repositories
permissions: Site administrators can migrate to internal repositories.
versions:
  enterprise-server: '>=2.20'
type: how_to
topics:
  - Enterprise
  - Privacy
  - Repositories
  - Security
---

### 关于内部仓库

内部仓库适用于 {% data variables.product.prodname_ghe_server %} 2.20+。 {% data reusables.repositories.about-internal-repos %} 更多信息请参阅“[关于仓库可见性](/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)。”

在未来版本的 {% data variables.product.prodname_ghe_server %} 中，我们将调整仓库可见性的工作方式，以便公共、内部和私有术语对 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 上的开发者具有统一的含义。

要为这些变更做准备，如果您已启用私有模式，可在实例上运行迁移，将公共仓库转换为内部仓库。 此迁移目前是可选操作，可用于测试非生产实例的变更。 此迁移未来将变成强制操作。

运行迁移时，实例上的组织拥有的所有公共仓库都将变成内部仓库。 如果其中任何仓库有分支，分支将变为私有。 私有仓库依然保持私有。

实例上的用户帐户拥有的所有公共仓库都将变成私有仓库。 如果其中任何仓库有分支，分支也将变为私有。 每个分支的所有者将得到对分支父项的读取权限。

每个变为内部或私有仓库的公共仓库都将禁用匿名 Git 读取权限。

如果仓库当前的默认可见性为公共，默认值将变为内部。 如果当前默认值为私有，默认值将保持不变。 您可以随时更改默认值。 更多信息请参阅“[在企业中实施仓库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-the-default-visibility-of-new-repositories-in-your-enterprise)”。

实例的仓库创建策略将更改为禁用公共仓库，允许私有和内部仓库。 您可以随时更新此策略。 更多信息请参阅“[限制在实例中创建仓库](/enterprise/admin/user-management/restricting-repository-creation-in-your-instance)。”

如果您未启用私有模式，迁移脚本将无效。

### 运行迁移

1. 连接到管理 shell。 更多信息请参阅“[访问管理 shell (SSH)](/enterprise/admin/installation/accessing-the-administrative-shell-ssh)。”
{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
2. 运行迁移命令。
   ```shell
   github-env bin/safe-ruby lib/github/transitions/20191210220630_convert_public_ghes_repos_to_internal.rb --verbose -w |  tee -a /tmp/convert_public_ghes_repos_to_internal.log
   ```
{% else %}
2. 导航至 `/data/github/current` 目录。
   ```shell
   cd /data/github/current
   ```
3. 运行迁移命令。
   ```shell
   sudo bin/safe-ruby lib/github/transitions/20191210220630_convert_public_ghes_repos_to_internal.rb --verbose -w | tee -a /tmp/convert_public_ghes_repos_to_internal.log
   ```
{% endif %}

日志输出将显示在终端和 `/tmp/convert_public_ghes_repos_to_internal.log` 中。

### 延伸阅读

- "[启用私人模式](/enterprise/admin/installation/enabling-private-mode)"
