---
title: 准备将数据迁移到企业
intro: '生成迁移存档后，您可以将数据导入目标 {% data variables.product.prodname_ghe_server %} 实例。 在将变更永久应用到目标实例之前，您需要检查变更，查看有无潜在的冲突。'
redirect_from:
  - /enterprise/admin/migrations/preparing-the-migrated-data-for-import-to-github-enterprise-server
  - /enterprise/admin/migrations/generating-a-list-of-migration-conflicts
  - /enterprise/admin/migrations/reviewing-migration-conflicts
  - /enterprise/admin/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings
  - /enterprise/admin/guides/migrations/preparing-the-migrated-data-for-import-to-github-enterprise/
  - /enterprise/admin/user-management/preparing-to-migrate-data-to-your-enterprise
  - /admin/user-management/preparing-to-migrate-data-to-your-enterprise
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Migration
---

### 准备迁移的数据以导入到 {% data variables.product.prodname_ghe_server %}

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

### 生成迁移冲突列表

1. 使用包含迁移 GUID 的 `ghe-migrator conflicts` 命令生成一个 *conflicts.csv* 文件：
    ```shell
    $ ghe-migrator conflicts -g <em>MIGRATION_GUID</em> > conflicts.csv
    ```
    - 如果未报告冲突，您可以按照“[将数据迁移到企业](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/)”中的步骤操作，安全地导入数据。
2. 如果存在冲突，请使用 [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) 命令将 *conflicts.csv* 复制到您的本地计算机：
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:conflicts.csv ~/Desktop
  ```
3. 继续“[解决迁移冲突或设置自定义映射](#resolving-migration-conflicts-or-setting-up-custom-mappings)”。

### 检查迁移冲突

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

| 名称                   | 描述                            |
| -------------------- | ----------------------------- |
| `model_name`         | 正在更改的数据的类型。                   |
| `source_url`         | 数据的源 URL。                     |
| `target_url`         | 数据的预期目标 URL。                  |
| `recommended_action` | 导入数据时，将发生首选操作 `ghe-migrator`。 |

#### 每个记录类型的可能映射

转移数据时，`ghe-migrator` 可以进行多种不同的映射操作：

| `action`        | 描述                            | 适用的模型    |
| --------------- | ----------------------------- | -------- |
| `import`        | （默认）源中的数据将导入目标。               | 所有记录类型   |
| `map`           | 源中的数据将被目标上的现有数据替换。            | 用户、组织和仓库 |
| `rename`        | 源中的数据将重命名，然后复制到目标。            | 用户、组织和仓库 |
| `map_or_rename` | 如果存在目标，请映射到该目标。 否则，请重命名导入的模型。 | 用户       |
| `合并`            | 源中的数据将与目标中的现有数据合并。            | 团队       |

**我们强烈建议您检查 *conflicts.csv* 文件并使用 [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data)，以确保正确的操作。**如果一切正常，您可以继续“[将数据迁移到企业](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server)”。


### 解决迁移冲突或设置自定义映射

如果您认为 `ghe-migrator` 将执行不正确的变更，可以更改 *conflicts.csv* 中的数据，进行修改。 您可以更改 *conflicts.csv* 中的任意行。

例如，我们假设您注意到源中的 `octocat` 用户正在被映射到目标上的 `octocat`：

| `model_name` | `source_url`                        | `target_url`                        | `recommended_action` |
| ------------ | ----------------------------------- | ----------------------------------- | -------------------- |
| `用户`         | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map`                |

您可以选择将用户映射到目标上的其他用户。 假设您知道 `octocat` 在目标上应当是 `monalisa`。 您可以更改 *conflicts.csv* 中的 `target_url` 列以指代 `monalisa`：

| `model_name` | `source_url`                        | `target_url`                         | `recommended_action` |
| ------------ | ----------------------------------- | ------------------------------------ | -------------------- |
| `用户`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `map`                |

另外，如果您想在目标实例上将 `octo-org/widgets` 仓库重命名为 `octo-org/amazing-widgets`，请将 `target_url` 更改为 `octo-org/amazing-widgets`，以及将 `recommend_action` 更改为 `rename`：

| `model_name` | `source_url`                                 | `target_url`                                         | `recommended_action` |
| ------------ | -------------------------------------------- | ---------------------------------------------------- | -------------------- |
| `仓库`         | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/amazing-widgets` | `rename`             |

#### 添加自定义映射

迁移过程中一个常见的情况是，迁移用户的用户名在目标上与在源上不同。

如果拥有源中的用户名列表和目标上的用户名列表，您可以通过自定义映射构建一个 CSV 文件，然后应用此文件，确保迁移结束时每个用户的用户名和内容都有正确的映射。

您可以使用 [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) 命令，快速生成应用自定义映射所需的迁移用户的 CSV 文件：

```shell
$ ghe-migrator audit -m user -g <em>MIGRATION_GUID</em> > users.csv
```

现在，您可以编辑该 CSV，并为您想要映射或重命名的每个用户输入新的 URL，然后根据需要将第四列更新为 `map` 或 `rename`。

例如，要在目标 `https://example-gh.target` 上将用户 `octocat` 重命名为 `monalisa`，您需要创建一个包含以下内容的行：

| `model_name` | `source_url`                        | `target_url`                         | `state`  |
| ------------ | ----------------------------------- | ------------------------------------ | -------- |
| `用户`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `rename` |

可以使用相同的流程为支持自定义映射的每个记录创建映射。 更多信息请参见[记录的可能映射表](/enterprise/admin/guides/migrations/reviewing-migration-conflicts#possible-mappings-for-each-record-type)。

#### 应用修改的迁移数据

1. 进行更改后，请使用 [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) 命令将修改后的 *conflicts.csv*（或格式正确的任何其他映射 *.csv* 文件）应用到目标实例：

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@<em>hostname</em>:/home/admin/
    ```

2. 使用 `ghe-migrator map` 命令重新映射迁移数据，并传入修改后的 *.csv* 文件的路径和迁移 GUID：

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g <em>MIGRATION_GUID</em>
    ```

3. 如果 `ghe-migrator map -i conflicts.csv  -g MIGRATION_GUID` 命令报告冲突仍然存在，请重新运行迁移冲突解决流程。
