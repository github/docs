---
title: 移行コンフリクトの解決もしくはカスタムマッピングのセットアップ
intro: 移行データをインポートする前に、コンフリクトを解決するために修正をしたり、入力レコードの名前を変えたり、入力レコードを既存のレコードにマップしたりできます。
redirect_from:
  - /enterprise/admin/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings
versions:
  enterprise-server: '*'
---

コンフリクトを解決したり、移行にカスタムマッピングを追加したりするために、以下のステップが利用できます。

### コンフリクトの解決

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

### カスタムマッピングの追加

移行における一般的なシナリオは、移行されたユーザがターゲット上ではソース上とは異なるユーザ名を持つことです。

ソースのユーザ名のリストとターゲットのユーザー名のリストがあれば、カスタムマッピングのCSVファイルを構築し、各ユーザのユーザ名とコンテンツが移行の終了時点で正しく割り当てられているようにそのファイルを適用できます。

[`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data)を使えば、カスタムマッピングを適用するのに必要なCSV形式で、移行されるユーザのCSVを素早く生成できます。

```shell
$ ghe-migrator audit -m user -g <em>MIGRATION_GUID</em> > users.csv
```

これで、このCSVを編集してマップあるいは名前を変更したい各ユーザに新しいURLを入力し、4番目の列を`map`あるいは`rename`を適切に更新できます。

たとえばユーザ`octocat`の名前をターゲット`https://example-gh.target`上で`monalisa`に変更したいのであれば、以下の内容の行を作成します。

| `model_name` | `source_url`                        | `target_url`                         | `状態`     |
| ------------ | ----------------------------------- | ------------------------------------ | -------- |
| `ユーザ`        | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `rename` |

同じプロセスは、カスタムマッピングをサポートする各レコードのマッピングを作成するために使うことができます。 詳しい情報については[レコードに可能なマッピング上のテーブル](/enterprise/admin/guides/migrations/reviewing-migration-conflicts#possible-mappings-for-each-record-type)を参照してください。

### 修正された移行データの適用

1. 変更を加えた後、修正された *conflicts.csv* (または適切な形式のその他のマッピング CSV) を [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) コマンドを使ってターゲットインスタンスに適用します。

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@<em>hostname</em>:/home/admin/
    ```

2. 修正された CSV ファイルへのパスと移行 GUID を渡して、`ghe-migrator map` を使い、移行データを再マップします。

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g <em>MIGRATION_GUID</em>
    ```

3. `ghe-migrator map -i conflicts.csv  -g MIGRATION_GUID` がまだコンフリクトがあると報告してきた場合、移行のコンフリクト解決のプロセスをもう一度行ってください。
