---
title: 准备将数据迁移到企业
intro: '生成迁移存档后，您可以将数据导入目标 {% data variables.product.prodname_ghe_server %} 实例。 在将变更永久应用到目标实例之前，您需要检查变更，查看有无潜在的冲突。'
redirect_from:
  - /enterprise/admin/migrations/preparing-the-migrated-data-for-import-to-github-enterprise-server
  - /enterprise/admin/migrations/generating-a-list-of-migration-conflicts
  - /enterprise/admin/migrations/reviewing-migration-conflicts
  - /enterprise/admin/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings
  - /enterprise/admin/guides/migrations/preparing-the-migrated-data-for-import-to-github-enterprise
  - /enterprise/admin/user-management/preparing-to-migrate-data-to-your-enterprise
  - /admin/user-management/preparing-to-migrate-data-to-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
shortTitle: Prepare to migrate data
ms.openlocfilehash: 7b552f2bc0d79eb1a70a09d61b8384983b0908fc
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145098941'
---
## 准备迁移的数据以导入到 {% data variables.product.prodname_ghe_server %}

1. 使用 [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) 命令，将从源实例或组织生成的迁移存档复制到 {% data variables.product.prodname_ghe_server %} 目标：

    ```shell
    $ scp -P 122 <em>/path/to/archive/MIGRATION_GUID.tar.gz</em> admin@<em>hostname</em>:/home/admin/
    ```

{% data reusables.enterprise_installation.ssh-into-target-instance %}

3. 使用 `ghe-migrator prepare` 命令准备要在目标实例上导入的存档，并生成新的迁移 GUID 供你在后续步骤中使用：

    ```shell
    ghe-migrator prepare /home/admin/<em>MIGRATION_GUID</em>.tar.gz
    ```

    * 若要启动新的导入尝试，请再次运行 `ghe-migrator prepare` 并获取新的迁移 GUID。
    * {% data reusables.enterprise_migrations.specify-staging-path %}

## 生成迁移冲突列表

1. 将 `ghe-migrator conflicts` 命令与迁移 GUID 配合使用，生成 conflicts.csv 文件：
    ```shell
    $ ghe-migrator conflicts -g <em>MIGRATION_GUID</em> > conflicts.csv
    ```
    - 如果未报告任何冲突，则可以按照“[将数据迁移到企业](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/)”中的步骤安全地导入数据。
2. 如果存在冲突，请使用 [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) 命令将 conflicts.csv 复制到本地计算机：
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:conflicts.csv ~/Desktop
  ```
3. 继续执行“[解决迁移冲突或设置自定义映射](#resolving-migration-conflicts-or-setting-up-custom-mappings)”。

## 检查迁移冲突

1. 使用文本编辑器或者[与 CSV 兼容的电子表格软件](https://en.wikipedia.org/wiki/Comma-separated_values#Application_support)，打开 conflicts.csv。
2. 按照示例中的指导和下面的参考表检查 conflicts.csv 文件，确保导入时将发生正确的操作。

conflicts.csv 文件包含冲突的迁移映射和建议操作。  迁移映射列出了数据的迁移来源和数据应用到目标的方式。

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map` |
| `organization` | `https://example-gh.source/octo-org` | `https://example-gh.target/octo-org` | `map` |
| `repository`   | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/widgets` | `rename` |
| `team`         | `https://example-gh.source/orgs/octo-org/teams/admins` | `https://example-gh.target/orgs/octo-org/teams/admins` | `merge` |

conflicts.csv 中的每一行都提供了以下信息：

|    名称      | 说明   |
|--------------|---------------|
| `model_name` | 正在更改的数据的类型。 |
| `source_url` | 数据的源 URL。 |
| `target_url` | 数据的预期目标 URL。  |
| `recommended_action` | 导入数据时 `ghe-migrator` 将执行的首选操作。  |

### 每个记录类型的可能映射

转移数据时，`ghe-migrator` 可以执行多种不同的映射操作：

| `action`      | 说明 | 适用的模型 |
|------------------------|-------------|-------------------|
| `import`      | （默认）源中的数据将导入目标。 | 所有记录类型
| `map`         | 源中的数据将被目标上的现有数据替换。 | 用户、组织和仓库
| `rename`      | 源中的数据将重命名，然后复制到目标。 | 用户、组织和仓库
| `map_or_rename` | 如果存在目标，请映射到该目标。 否则，请重命名导入的模型。 | 用户
| `merge`       | 源中的数据将与目标中的现有数据合并。 | Teams

强烈建议查看 conflicts.csv文件，并使用该 [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) 文件来确保执行适当的操作。 如果一切正常，可以继续执行“[将数据迁移到企业](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server)”。


## 解决迁移冲突或设置自定义映射

如果你认为 `ghe-migrator` 将执行不正确的变更，可以通过更改 conflicts.csv 中的数据进行修改。 可以更改 conflicts.csv 中的任意行。

例如，假设你注意到 `octocat` 源中的用户正映射到目标上的 `octocat`：

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map`

您可以选择将用户映射到目标上的其他用户。 假设你知道 `octocat` 实际上应该是位于目标上的 `monalisa`。 可以更改 conflicts.csv 中的 `target_url` 列以引用 `monalisa`：

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `map`

再举一个例子，如果要在目标实例上将 `octo-org/widgets` 存储库重命名为 `octo-org/amazing-widgets`，请将 `target_url` 更改为 `octo-org/amazing-widgets`，将 `recommend_action` 更改为 `rename`：

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `repository`   | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/amazing-widgets` | `rename`   |

### 添加自定义映射

迁移过程中一个常见的情况是，迁移用户的用户名在目标上与在源上不同。

如果拥有源中的用户名列表和目标上的用户名列表，您可以通过自定义映射构建一个 CSV 文件，然后应用此文件，确保迁移结束时每个用户的用户名和内容都有正确的映射。

可以使用 [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) 命令，以 CSV 格式快速生成应用自定义映射所需的正在迁移的用户的 CSV：

```shell
$ ghe-migrator audit -m user -g <em>MIGRATION_GUID</em> > users.csv
```

现在，你可以编辑该 CSV，并为你想要映射或重命名的每个用户输入新 URL，然后根据需要将第四列更新为包含 `map` 或 `rename`。

例如，若要在目标 `https://example-gh.target` 上将用户 `octocat` 重命名为 `monalisa`，需创建包含以下内容的行：

| `model_name`   | `source_url`   | `target_url` | `state` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `rename`

可以使用相同的流程为支持自定义映射的每个记录创建映射。 有关详细信息，请参阅[有关记录的可能映射的表](/enterprise/admin/guides/migrations/reviewing-migration-conflicts#possible-mappings-for-each-record-type)。

### 应用修改的迁移数据

1. 进行更改后，使用 [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) 命令将修改后的 conflicts.csv（或具有正确格式的任何其他映射 .csv 文件）应用于目标实例： 

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@<em>hostname</em>:/home/admin/
    ```

2. 使用 `ghe-migrator map` 命令重新映射迁移数据，并传入修改后的 .csv 文件的路径和迁移 GUID：

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g <em>MIGRATION_GUID</em>
    ```

3. 如果 `ghe-migrator map -i conflicts.csv  -g MIGRATION_GUID` 命令报告冲突仍然存在，请再次运行迁移冲突解决过程。
