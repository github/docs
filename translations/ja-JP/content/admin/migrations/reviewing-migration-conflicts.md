---
title: 移行コンフリクトのレビュー
intro: 移行コンフリクトのリストを生成した後、それらをレビューして解決の際に`ghe-migrator`が行うデフォルトのアクションで良いことを確認します。
redirect_from:
  - /enterprise/admin/migrations/reviewing-migration-conflicts
versions:
  enterprise-server: '*'
---

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

### 各レコードタイプで可能なマッピング

データの転送時に`ghe-migrator`が行えるマッピングアクションは複数あります。

| `action`        | 説明                                                         | 適用可能なモデル                         |
| --------------- | ---------------------------------------------------------- | -------------------------------- |
| `import`        | （デフォルト）ソースからのデータがターゲットにインポートされます。                          | すべてのレコードタイプ                      |
| `map`           | ソースからのデータがターゲット上の既存のデータで置き換えられます。                          | Users、organizations、repositories |
| `rename`        | ソースからのデータは名前が変更されてターゲットにコピーされます。                           | Users、organizations、repositories |
| `map_or_rename` | ターゲットが存在する場合、そのターゲットにマップします。 そうでない場合はインポートされたモデルの名前を変更します。 | ユーザ                              |
| `マージ`           | ソースからのデータはターゲット上の既存のデータと組み合わされます。                          | Team                             |

***conflicts.csv* ファイルを見直し、[`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) を使って適切なアクションがとられることを確認するよう強くお勧めします。**問題がないようであれば、「[インポートされたデータを {% data variables.product.prodname_ghe_server %} に適用する](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server)」に進んでいただけます。
