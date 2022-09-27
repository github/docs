---
title: Enterprise へのデータ移行の準備
intro: '移行アーカイブを作成すると、ターゲットの {% data variables.product.prodname_ghe_server %} インスタンスにデータをインポートできます。 変更を恒久的にターゲットのインスタンスに適用する前に、潜在的なコンフリクトがないか変更をレビューできます。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145116197'
---
## 移行したデータを {% data variables.product.prodname_ghe_server %} にインポートするための準備

1. [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) コマンドを使用して、ソース インスタンスまたは Organization から生成された移行アーカイブを {% data variables.product.prodname_ghe_server %} ターゲットにコピーします。

    ```shell
    $ scp -P 122 <em>/path/to/archive/MIGRATION_GUID.tar.gz</em> admin@<em>hostname</em>:/home/admin/
    ```

{% data reusables.enterprise_installation.ssh-into-target-instance %}

3. `ghe-migrator prepare` コマンドを使ってターゲット インスタンスにインポートするためのアーカイブを準備し、以降の手順で使用する新しい移行 GUID を生成します。

    ```shell
    ghe-migrator prepare /home/admin/<em>MIGRATION_GUID</em>.tar.gz
    ```

    * 新しいインポートの試行を開始するには、もう一度 `ghe-migrator prepare` を実行し、新しい移行 GUID を取得します。
    * {% data reusables.enterprise_migrations.specify-staging-path %}

## 移行のコンフリクトのリストの生成

1. 移行 GUID を指定した `ghe-migrator conflicts` コマンドを使用して、*conflicts.csv* ファイルを生成します。
    ```shell
    $ ghe-migrator conflicts -g <em>MIGRATION_GUID</em> > conflicts.csv
    ```
    - 競合が報告されない場合は、「[Enterprise にデータを移行する](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/)」の手順に従って、データを安全にインポートできます。
2. 競合がある場合は、[`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) コマンドを使用して、*conflicts.csv* をローカル コンピューターにコピーします。
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:conflicts.csv ~/Desktop
  ```
3. 「[移行コンフリクトの解決もしくはカスタム マッピングのセットアップ](#resolving-migration-conflicts-or-setting-up-custom-mappings)」に進みます。

## 移行コンフリクトのレビュー

1. テキスト エディターまたは [CSV 互換のスプレッドシート ソフトウェア](https://en.wikipedia.org/wiki/Comma-separated_values#Application_support)を使用して、*conflicts.csv* を開きます。
2. 以下の例と参照表のガイダンスを使用して、*conflicts.csv* ファイルを確認し、確実にインポート時に適切なアクションが実行されるようにします。

*conflicts.csv* ファイルには、競合の ''*移行マップ*'' と推奨アクションが含まれています。 移行マップは、ソースから移行されるデータと、そのデータがどのようにターゲットに適用されるかのリストです。

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map` |
| `organization` | `https://example-gh.source/octo-org` | `https://example-gh.target/octo-org` | `map` |
| `repository`   | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/widgets` | `rename` |
| `team`         | `https://example-gh.source/orgs/octo-org/teams/admins` | `https://example-gh.target/orgs/octo-org/teams/admins` | `merge` |

*conflicts.csv* の各行には次の情報が示されます。

|    名前      | 説明   |
|--------------|---------------|
| `model_name` | 変更されるデータの種類。 |
| `source_url` | データのソースURL。 |
| `target_url` | 期待されるデータのターゲットURL。  |
| `recommended_action` | データのインポート時に推奨されるアクション `ghe-migrator` が実行されます。  |

### 各レコードタイプで可能なマッピング

データの転送時に `ghe-migrator` で実行できるいくつかの異なるマッピング アクションがあります。

| `action`      | 説明 | 適用可能なモデル |
|------------------------|-------------|-------------------|
| `import`      | （デフォルト）ソースからのデータがターゲットにインポートされます。 | すべてのレコードタイプ
| `map`         | ソースからのデータがターゲット上の既存のデータで置き換えられます。 | Users、organizations、repositories
| `rename`      | ソースからのデータは名前が変更されてターゲットにコピーされます。 | Users、organizations、repositories
| `map_or_rename` | ターゲットが存在する場合、そのターゲットにマップします。 そうでない場合はインポートされたモデルの名前を変更します。 | ユーザー
| `merge`       | ソースからのデータはターゲット上の既存のデータと組み合わされます。 | Teams

***conflicts.csv* ファイルを確認し、[`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) を使用して、確実に適切なアクションが実行されるようにすることを強くお勧めします。** すべて問題ないようであれば、「[Enterprise にデータを移行する](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server)」に進むことができます。


## 移行コンフリクトの解決もしくはカスタムマッピングのセットアップ

`ghe-migrator` で正しくない変更が行われると思われる場合は、*conflicts.csv* 内でデータを変更することによって修正できます。 *conflicts.csv* 内の任意の行を変更できます。

たとえば、ソースの `octocat` ユーザーがターゲットの `octocat` にマップされていることに気付いたとしましょう。

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map`

このユーザをターゲット上の他のユーザにマップさせることができます。 `octocat` が実際にはターゲットの `monalisa` であるべきだとわかっているとします。 `monalisa` を示すように、*conflicts.csv* の `target_url` 列を変更することができます。

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `map`

別の例として、`octo-org/widgets` リポジトリの名前をターゲット インスタンスの `octo-org/amazing-widgets` に変更する場合は、`target_url` を `octo-org/amazing-widgets`、および `recommend_action` を `rename` に変更します。

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `repository`   | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/amazing-widgets` | `rename`   |

### カスタムマッピングの追加

移行における一般的なシナリオは、移行されたユーザがターゲット上ではソース上とは異なるユーザ名を持つことです。

ソースのユーザ名のリストとターゲットのユーザー名のリストがあれば、カスタムマッピングのCSVファイルを構築し、各ユーザのユーザ名とコンテンツが移行の終了時点で正しく割り当てられているようにそのファイルを適用できます。

[`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) コマンドを使用して、カスタム マッピングを適用するために必要な CSV 形式で、移行されるユーザーの CSV をすばやく生成できます。

```shell
$ ghe-migrator audit -m user -g <em>MIGRATION_GUID</em> > users.csv
```

これで、その CSV を編集し、マップまたは名前を変更する各ユーザーの新しい URL を入力してから、4 番目の列を更新し、適宜、`map` または `rename` が含まれるようにすることができます。

たとえば、ユーザー `octocat` の名前をターゲット `https://example-gh.target` の `monalisa` に変更するには、次の内容の行を作成します。

| `model_name`   | `source_url`   | `target_url` | `state` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `rename`

同じプロセスは、カスタムマッピングをサポートする各レコードのマッピングを作成するために使うことができます。 詳細については、[レコードで可能なマッピングに関する表](/enterprise/admin/guides/migrations/reviewing-migration-conflicts#possible-mappings-for-each-record-type)を参照してください。

### 修正された移行データの適用

1. 変更を行った後、[`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) コマンドを使用して、変更した *conflicts.csv* (または正しい形式の他のマッピング *.csv* ファイル) をターゲット インスタンスに適用します。

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@<em>hostname</em>:/home/admin/
    ```

2. `ghe-migrator map` コマンドを使用して移行データを再マップし、変更した *.csv* ファイルと移行 GUID へのパスを渡します。

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g <em>MIGRATION_GUID</em>
    ```

3. `ghe-migrator map -i conflicts.csv  -g MIGRATION_GUID` コマンドで競合がまだ存在することが報告された場合は、移行の競合解決プロセスをもう一度実行します。
