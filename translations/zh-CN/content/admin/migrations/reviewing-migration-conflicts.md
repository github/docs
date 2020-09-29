---
title: 检查迁移冲突
intro: 在生成迁移冲突列表后，您应当进行检查，以确保您同意解决冲突时将发生默认操作 `ghe-migrator`。
redirect_from:
  - /enterprise/admin/migrations/reviewing-migration-conflicts
versions:
  enterprise-server: '*'
---

1. 使用文本编辑器或[与 CSV 兼容的电子表格软件](https://en.wikipedia.org/wiki/Comma-separated_values#Application_support)打开 *conflicts.csv*。
2. 按照示例中的指导和下面的参考表检查 *conflicts.csv* 文件，确保导入时将发生正确的操作。

*conflicts.csv* 文件包含冲突的*迁移映射*和建议操作。 迁移映射列出了数据的迁移来源和数据应用到目标的方式。

| `model_name` | `source_url`                                           | `target_url`                                           | `recommended_action` |
| ------------ | ------------------------------------------------------ | ------------------------------------------------------ | -------------------- |
| `用户`         | `https://example-gh.source/octocat`                    | `https://example-gh.target/octocat`                    | `map`                |
| `组织`         | `https://example-gh.source/octo-org`                   | `https://example-gh.target/octo-org`                   | `map`                |
| `仓库`         | `https://example-gh.source/octo-org/widgets`           | `https://example-gh.target/octo-org/widgets`           | `rename`             |
| `团队`         | `https://example-gh.source/orgs/octo-org/teams/admins` | `https://example-gh.target/orgs/octo-org/teams/admins` | `合并`                 |

*conflicts.csv* 中的每一行都提供了以下信息：

| 名称                   | Description                   |
| -------------------- | ----------------------------- |
| `model_name`         | 正在更改的数据的类型。                   |
| `source_url`         | 数据的源 URL。                     |
| `target_url`         | 数据的预期目标 URL。                  |
| `recommended_action` | 导入数据时，将发生首选操作 `ghe-migrator`。 |

### 每个记录类型的可能映射

转移数据时，`ghe-migrator` 可以进行多种不同的映射操作：

| `action`        | 描述                            | 适用的模型    |
| --------------- | ----------------------------- | -------- |
| `import`        | （默认）源中的数据将导入目标。               | 所有记录类型   |
| `map`           | 源中的数据将被目标上的现有数据替换。            | 用户、组织和仓库 |
| `rename`        | 源中的数据将重命名，然后复制到目标。            | 用户、组织和仓库 |
| `map_or_rename` | 如果存在目标，请映射到该目标。 否则，请重命名导入的模型。 | 用户       |
| `合并`            | 源中的数据将与目标中的现有数据合并。            | 团队       |

**我们强烈建议您检查 *conflicts.csv* 文件并使用 [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data)，以便确保进行正确的操作。**如果一切正常，您可以继续“[在 {% data variables.product.prodname_ghe_server %} 上应用导入的数据](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server)”。
