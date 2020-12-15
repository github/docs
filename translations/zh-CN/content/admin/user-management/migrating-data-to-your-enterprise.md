---
title: 将数据迁移到企业
intro: '生成迁移存档后，您可以将数据导入目标 {% data variables.product.prodname_ghe_server %} 实例。 在将变更永久应用到目标实例之前，您需要检查变更，查看有无潜在的冲突。'
redirect_from:
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise/
  - /enterprise/admin/migrations/applying-the-imported-data-on-github-enterprise-server
  - /enterprise/admin/migrations/reviewing-migration-data
  - /enterprise/admin/migrations/completing-the-import-on-github-enterprise-server
  - /enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise/
  - /enterprise/admin/guides/migrations/reviewing-the-imported-data/
  - /enterprise/admin/guides/migrations/completing-the-import-on-github-enterprise/
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise-server/
  - /enterprise/admin/user-management/migrating-data-to-your-enterprise
versions:
  enterprise-server: '*'
---

### 在 {% data variables.product.prodname_ghe_server %} 上应用导入的数据

{% data reusables.enterprise_installation.ssh-into-target-instance %}

2. 使用 `ghe-migrator import` 命令启动导入过程。 您需要：
    * 迁移 GUID.
    * 用于身份验证的个人访问令牌。 您使用的个人访问令牌仅用于站点管理员身份验证，不需要任何特定范围。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。

    ```shell
    $ ghe-migrator import /home/admin/<em>MIGRATION_GUID</em>.tar.gz -g <em>MIGRATION_GUID</em> -u <em>username</em> -p <em>TOKEN</em>

    > Starting GitHub::Migrator
    > Import 100% complete /
    ```

    * {% data reusables.enterprise_migrations.specify-staging-path %}

### 检查迁移数据

默认情况下，`ghe-migrator audit` 将返回每一条记录。 它还可以让您按以下方式筛选记录：

  * 记录的类型。
  * 记录的状态。

记录类型与[迁移的数据](/enterprise/admin/guides/migrations/about-migrations/#migrated-data)中的类型匹配。

### 记录类型筛选器

| 记录类型           | 筛选器名称                         |
| -------------- | ----------------------------- |
| 用户             | `用户`                          |
| 组织             | `组织`                          |
| 仓库             | `仓库`                          |
| 团队             | `团队`                          |
| 里程碑            | `里程碑`                         |
| 项目板            | `project`                     |
| 议题             | `议题`                          |
| 问题评论           | `issue_comment`               |
| 拉取请求           | `pull_request`                |
| 拉取请求审查         | `pull_request_review`         |
| 提交注释           | `commit_comment`              |
| 拉取请求审查评论       | `pull_request_review_comment` |
| 版本发布           | `发行版`                         |
| 在拉取请求或问题上进行的操作 | `issue_event`                 |
| 受保护分支          | `protected_branch`            |

### 记录状态筛选器

| 记录状态            | 描述        |
| --------------- | --------- |
| `export`        | 将导出记录。    |
| `import`        | 将导入记录。    |
| `map`           | 将映射记录。    |
| `rename`        | 将重命名记录。   |
| `合并`            | 将合并记录。    |
| `exported`      | 已成功导出记录。  |
| `imported`      | 已成功导入记录。  |
| `mapped`        | 已成功映射记录。  |
| `renamed`       | 已成功重命名记录。 |
| `merged`        | 已成功合并记录。  |
| `failed_export` | 记录导出失败。   |
| `failed_import` | 记录导入失败。   |
| `failed_map`    | 记录映射失败。   |
| `failed_rename` | 记录重命名失败。  |
| `failed_merge`  | 记录合并失败。   |

### 筛选审核的记录

借助 `ghe-migrator audit` 命令，您可以使用 `-m` 标志基于记录类型进行筛选。 类似地，您可以使用 `-s` 标志基于导入状态进行筛选。 命令如下所示：

```shell
$ ghe-migrator audit -m <em>RECORD_TYPE</em> -s <em>STATE</em> -g <em>MIGRATION_GUID</em>
```

例如，要查看每个成功导入的组织和团队，您可以输入：
```shell
$ ghe-migrator audit -m organization,team -s mapped,renamed -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> organization,https://gh.source/octo-org/,https://ghe.target/octo-org/,renamed
```

**我们强烈建议您检查失败的每个导入。**要进行检查，您可以输入：
```shell
$ ghe-migrator audit -s failed_import,failed_map,failed_rename,failed_merge -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> user,https://gh.source/octocat,https://gh.target/octocat,failed
> repository,https://gh.source/octo-org/octo-project,https://ghe.target/octo-org/octo-project,failed
```

如果您对失败的导入有任何疑问，请联系 {% data variables.contact.contact_ent_support %}。

### 在 {% data variables.product.prodname_ghe_server %} 上完成导入

在迁移应用到目标实例并且您已审查迁移后，您需要解锁仓库并将其从源中删除。 我们建议等待两周再删除您的源数据，以便确保所有数据都能按预期运行。

### 在目标实例上解锁仓库

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}

### 在源上解锁仓库

#### 从 {% data variables.product.prodname_dotcom_the_website %} 上的组织解锁仓库

要在 {% data variables.product.prodname_dotcom_the_website %} 组织中解锁仓库，您需要向<a href="/rest/reference/migrations#unlock-an-organization-repository" class="dotcom-only">迁移解锁端点</a>发送 `DELETE` 请求。 您需要：
  * 身份验证的访问令牌
  * 迁移的唯一 `id`
  * 要解锁的仓库的名称
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  -H "Accept: application/vnd.github.wyandotte-preview+json" \
  https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/repos/<em>repo_name</em>/lock
```

#### 从 {% data variables.product.prodname_dotcom_the_website %} 上的组织中删除仓库

在解锁 {% data variables.product.prodname_dotcom_the_website %} 组织的仓库后，您应当使用[仓库删除端点](/rest/reference/repos/#delete-a-repository)删除之前迁移的每一个仓库。 您需要身份验证的访问令牌：
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  https://api.github.com/repos/<em>orgname</em>/<em>repo_name</em>
```

#### 从 {% data variables.product.prodname_ghe_server %} 实例解锁仓库

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}
