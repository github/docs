---
title: 检查迁移数据
intro: 在迁移的每一步后，您都可以检查迁移数据的状态。 您将能够确保记录正确映射或重命名，在导入步骤后为记录获取新的 url，以及列出迁移失败的任何记录。
redirect_from:
  - '/enterprise/{{ currentVersion }}/admin/guides/migrations/reviewing-the-imported-data/'
  - /enterprise/admin/migrations/reviewing-migration-data
versions:
  enterprise-server: '*'
---

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

| 记录状态            | Description |
| --------------- | ----------- |
| `export`        | 将导出记录。      |
| `import`        | 将导入记录。      |
| `map`           | 将映射记录。      |
| `rename`        | 将重命名记录。     |
| `合并`            | 将合并记录。      |
| `exported`      | 已成功导出记录。    |
| `imported`      | 已成功导入记录。    |
| `mapped`        | 已成功映射记录。    |
| `renamed`       | 已成功重命名记录。   |
| `merged`        | 已成功合并记录。    |
| `failed_export` | 记录导出失败。     |
| `failed_import` | 记录导入失败。     |
| `failed_map`    | 记录映射失败。     |
| `failed_rename` | 记录重命名失败。    |
| `failed_merge`  | 记录合并失败。     |

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
