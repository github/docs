---
title: 解决迁移冲突或设置自定义映射
intro: 在导入迁移数据之前，您可以进行修改以解决冲突、重命名传入的记录或将传入的记录映射到现有记录。
redirect_from:
  - /enterprise/admin/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings
versions:
  enterprise-server: '*'
---

以下步骤可用于解决冲突或向迁移添加自定义映射。

### 解决冲突

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

### 添加自定义映射

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

### 应用修改的迁移数据

1. 进行更改后，请使用 [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) 命令将修改后的 *conflicts.csv*（或格式正确的任何其他映射 csv）应用到目标实例：

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@<em>hostname</em>:/home/admin/
    ```

2. 使用 `ghe-migrator map` 命令重新映射迁移数据，并传入修改后的 csv 文件的路径和迁移 GUID：

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g <em>MIGRATION_GUID</em>
    ```

3. 如果 `ghe-migrator map -i conflicts.csv  -g MIGRATION_GUID` 命令报告冲突仍然存在，请重新运行迁移冲突解决流程。
