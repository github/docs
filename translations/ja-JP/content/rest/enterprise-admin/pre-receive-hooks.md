---
title: pre-receive フック
intro: pre-receive フック API を使用すると、pre-receive フックを作成、一覧表示、更新、および削除できます。
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

*[認証された](/rest/overview/resources-in-the-rest-api#authentication)サイト管理者のみが使用できます。*通常のユーザがアクセスしようとすると、`404` レスポンスを受け取ります。

### オブジェクトの属性

#### pre-receive フック

| 名前                               | 種類        | 説明                                   |
| -------------------------------- | --------- | ------------------------------------ |
| `name`                           | `string`  | フックの名前。                              |
| `script`                         | `string`  | フックが実行するスクリプト。                       |
| `script_repository`              | `オブジェクト`  | スクリプトが保存されているGitHubリポジトリ。            |
| `environment`                    | `オブジェクト`  | スクリプトが実行される pre-receive 環境。          |
| `enforcement`                    | `string`  | このフックの適用状態。                          |
| `allow_downstream_configuration` | `boolean` | 適用の Org レベルまたは repo レベルでのオーバーライドの可否。 |

*適用*可能な値は、`enabled`、`disabled`、`testing` です。 `disabled` は、pre-receive フックが実行されないことを示します。 `enabled` は、それが実行され、ゼロ以外の状態になるプッシュを拒否することを示します。 `testing` は、スクリプトは実行されるが、プッシュが拒否されないことを示します。
