## Organization pre-receive フック

Organization pre-receive フック API を使用すると、Organization で使用可能な pre-receive フックの適用を表示および変更できます。

### オブジェクトの属性

| 名前                               | 種類        | 説明                       |
| -------------------------------- | --------- | ------------------------ |
| `name`                           | `string`  | フックの名前。                  |
| `enforcement`                    | `string`  | このリポジトリでのフックの適用状態。       |
| `allow_downstream_configuration` | `boolean` | リポジトリが適用をオーバーライドできるかどうか。 |
| `configuration_url`              | `string`  | 適用設定されているエンドポイントの URL。   |

*適用*可能な値は、`enabled`、`disabled`、`testing` です。 `disabled` は、pre-receive フックが実行されないことを示します。 `enabled` は、それが実行され、ゼロ以外の状態になるプッシュを拒否することを示します。 `testing` は、スクリプトは実行されるが、プッシュが拒否されないことを示します。

`configuration_url` は、このエンドポイントまたはこのフックのグローバル設定へのリンクです。 サイトアドミンのみがグローバル設定にアクセスできます。