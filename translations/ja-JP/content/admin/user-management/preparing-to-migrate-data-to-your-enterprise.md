---
title: Preparing to migrate data to your enterprise
intro: '移行アーカイブを作成すると、ターゲットの {% data variables.product.prodname_ghe_server %} インスタンスにデータをインポートできます。 変更を恒久的にターゲットのインスタンスに適用する前に、潜在的なコンフリクトがないか変更をレビューできます。'
redirect_from:
  - /enterprise/admin/migrations/preparing-the-migrated-data-for-import-to-github-enterprise-server
  - /enterprise/admin/migrations/generating-a-list-of-migration-conflicts
  - /enterprise/admin/migrations/reviewing-migration-conflicts
  - /enterprise/admin/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings
  - /enterprise/admin/guides/migrations/preparing-the-migrated-data-for-import-to-github-enterprise/
  - /enterprise/admin/user-management/preparing-to-migrate-data-to-your-enterprise
versions:
  enterprise-server: '*'
---

### 移行したデータを {% data variables.product.prodname_ghe_server %} にインポートするための準備

1. [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) コマンドを使って、ソースインスタンスまたは Organization から生成された移行アーカイブを {% data variables.product.prodname_ghe_server %} ターゲットにコピーします:

    ```shell
    $ scp -P 122 <em>/path/to/archive/MIGRATION_GUID.tar.gz</em> admin@<em>hostname</em>:/home/admin/
    ```

{% data reusables.enterprise_installation.ssh-into-target-instance %}

3. `ghe-migrator prepare` コマンドを使ってターゲットインスタンスにインポートするためのアーカイブを準備し、次のステップで使用する新たな移行 GUID を生成します。

    ```shell
    ghe-migrator prepare /home/admin/<em>MIGRATION_GUID</em>.tar.gz
    ```

    * 新たにインポートを試みるには、再び `ghe-migrator prepare` を実行して、新しい Migration GUID を取得します。
    * {% data reusables.enterprise_migrations.specify-staging-path %}

### 移行のコンフリクトのリストの生成

1. `ghe-migrator conflicts` コマンドに移行 GUID を付けて実行し、*conflicts.csv* ファイルを生成します。
    ```shell
    $ ghe-migrator conflicts -g <em>MIGRATION_GUID</em> > conflicts.csv
    ```
    - If no conflicts are reported, you can safely import the data by following the steps in "[Migrating data to your enterprise](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/)".
2. コンフリクトがある場合は、[`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) コマンドを使って *conflicts.csv* をローカルコンピュータにコピーします。
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:conflicts.csv ~/Desktop
  ```
3. 「[移行コンフリクトの解決もしくはカスタムマッピングのセットアップ](#resolving-migration-conflicts-or-setting-up-custom-mappings)」に進みます。

### 移行コンフリクトのレビュー

1. テキストエディタもしくは[CSV互換のスプレッドシートソフトウェア](https://en.wikipedia.org/wiki/Comma-separated_values#Application_support)を使って*conflicts.csv*をオープンしてください。
2. 以下の例とリファレンスのガイダンスと共に*conflicts.csv*ファイルをレビューし、インポートの際に適切なアクションが取られることを確認してください。

*conflicts.csv*ファイルには、コンフリクトの*移行マップ*と推奨アクションが含まれています。 移行マップは、ソースから移行されるデータと、そのデータがどのようにターゲットに適用されるかのリストです。

| `model_name`   | `source_url`                                           | `target_url`                                           | `recommended_action` |
| -------------- | ------------------------------------------------------ | ------------------------------------------------------ | -------------------- |
| `ユーザ`          | `https://example-gh.source/octocat`                    | `https://example-gh.target/octocat`                    | `map`                |
| `Organization` | `https://example-gh.source/octo-org`                   | `https://example-gh.target/octo-org`                   | `map`                |
| `リポジトリ`        | `https://example-gh.source/octo-org/widgets`           | `https://example-gh.target/octo-org/widgets`           | `rename`             |
| `Team`         | `https://example-gh.source/orgs/octo-org/teams/admins` | `https://example-gh.target/orgs/octo-org/teams/admins` | `マージ`                |

*conflicts.csv*の各行には以下の情報があります。

| 名前                   | 説明                                      |
| -------------------- | --------------------------------------- |
| `model_name`         | 変更されるデータの種類。                            |
| `source_url`         | データのソースURL。                             |
| `target_url`         | 期待されるデータのターゲットURL。                      |
| `recommended_action` | データをインポートする際に`ghe-migrator`が行う推奨のアクション。 |

#### 各レコードタイプで可能なマッピング

データの転送時に`ghe-migrator`が行えるマッピングアクションは複数あります。

| `action`        | 説明                                                         | 適用可能なモデル                         |
| --------------- | ---------------------------------------------------------- | -------------------------------- |
| `import`        | （デフォルト）ソースからのデータがターゲットにインポートされます。                          | すべてのレコードタイプ                      |
| `map`           | ソースからのデータがターゲット上の既存のデータで置き換えられます。                          | Users、organizations、repositories |
| `rename`        | ソースからのデータは名前が変更されてターゲットにコピーされます。                           | Users、organizations、repositories |
| `map_or_rename` | ターゲットが存在する場合、そのターゲットにマップします。 そうでない場合はインポートされたモデルの名前を変更します。 | ユーザ                              |
| `マージ`           | ソースからのデータはターゲット上の既存のデータと組み合わされます。                          | Team                             |

**We strongly suggest you review the *conflicts.csv* file and use [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) to ensure that the proper actions are being taken.** If everything looks good, you can continue to "[Migrating data to your enterprise](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server)".


### 移行コンフリクトの解決もしくはカスタムマッピングのセットアップ

`ghe-migrator`が正しくない変更を行うと考えられるときは、*conflicts.csv*内でデータを変更することによって修正をかけられます。 *conflicts.csv*内の任意の行を変更できます。

たとえばソースの`octocat`ユーザがターゲットの`octocat`にマップされていることに気づいたとしましょう。

| `model_name` | `source_url`                        | `target_url`                        | `recommended_action` |
| ------------ | ----------------------------------- | ----------------------------------- | -------------------- |
| `ユーザ`        | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map`                |

このユーザをターゲット上の他のユーザにマップさせることができます。 `octocat`が実際にはターゲットの`monalisa`だということを知っているとしましょう。 *conflicts.csv*の `target_url`を`monalisa`を指すように変更できます。

| `model_name` | `source_url`                        | `target_url`                         | `recommended_action` |
| ------------ | ----------------------------------- | ------------------------------------ | -------------------- |
| `ユーザ`        | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `map`                |

もう1つの例として、もしも`octo-org/widgets`リポジトリをターゲットインスタンス上では`octo-org/amazing-widgets`に名前を変えたいとすれば、`target_url`を`octo-org/amazing-widgets`に、`recommend_action`を`rename`に変更してください。

| `model_name` | `source_url`                                 | `target_url`                                         | `recommended_action` |
| ------------ | -------------------------------------------- | ---------------------------------------------------- | -------------------- |
| `リポジトリ`      | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/amazing-widgets` | `rename`             |

#### カスタムマッピングの追加

移行における一般的なシナリオは、移行されたユーザがターゲット上ではソース上とは異なるユーザ名を持つことです。

ソースのユーザ名のリストとターゲットのユーザー名のリストがあれば、カスタムマッピングのCSVファイルを構築し、各ユーザのユーザ名とコンテンツが移行の終了時点で正しく割り当てられているようにそのファイルを適用できます。

[`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data)を使えば、カスタムマッピングを適用するのに必要なCSV形式で、移行されるユーザのCSVを素早く生成できます。

```shell
$ ghe-migrator audit -m user -g <em>MIGRATION_GUID</em> > users.csv
```

これで、このCSVを編集してマップあるいは名前を変更したい各ユーザに新しいURLを入力し、4番目の列を`map`あるいは`rename`を適切に更新できます。

たとえばユーザ`octocat`の名前をターゲット`https://example-gh.target`上で`monalisa`に変更したいのであれば、以下の内容の行を作成します。

| `model_name` | `source_url`                        | `target_url`                         | `state`  |
| ------------ | ----------------------------------- | ------------------------------------ | -------- |
| `ユーザ`        | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `rename` |

同じプロセスは、カスタムマッピングをサポートする各レコードのマッピングを作成するために使うことができます。 詳しい情報については[レコードに可能なマッピング上のテーブル](/enterprise/admin/guides/migrations/reviewing-migration-conflicts#possible-mappings-for-each-record-type)を参照してください。

#### 修正された移行データの適用

1. 変更を加えた後、修正された *conflicts.csv* (または適切な形式のその他のマッピング CSV) を [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) コマンドを使ってターゲットインスタンスに適用します。

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@<em>hostname</em>:/home/admin/
    ```

2. 修正された CSV ファイルへのパスと移行 GUID を渡して、`ghe-migrator map` を使い、移行データを再マップします。

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g <em>MIGRATION_GUID</em>
    ```

3. `ghe-migrator map -i conflicts.csv  -g MIGRATION_GUID` がまだコンフリクトがあると報告してきた場合、移行のコンフリクト解決のプロセスをもう一度行ってください。
