---
title: pre-receive フック
intro: pre-receive フック API を使用すると、pre-receive フックを作成、一覧表示、更新、および削除できます。
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: dd776e7ec95a970f025d4de1ec03f07b2a7b29f7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066155'
---
*[認証された](/rest/overview/resources-in-the-rest-api#authentication)サイト管理者のみが使用できます。* 通常のユーザーは、アクセスしようとすると `404` 応答を受け取ります。

### オブジェクトの属性

#### pre-receive フック

| 名前                             | 型      | 説明                                                     |
|----------------------------------|-----------|-----------------------------------------------------------------|
| `name`                           | `string`  | フックの名前。                                           |
| `script`                         | `string`  | フックが実行するスクリプト。                                  |
| `script_repository`              | `object`  | スクリプトが保存されているGitHubリポジトリ。                 |
| `environment`                    | `object`  | スクリプトが実行される pre-receive 環境。       |
| `enforcement`                    | `string`  | このフックの適用状態。                         |
| `allow_downstream_configuration` | `boolean` | 適用の Org レベルまたは repo レベルでのオーバーライドの可否。 |

*適用* に使用できる値は `enabled`、`disabled`と`testing`です。 `disabled` は、pre-receive フックが実行されないことを示します。 `enabled` は、それが実行され、ゼロ以外の状態になるプッシュを拒否することを示します。 `testing` は、スクリプトは実行されるが、プッシュが拒否されないことを示します。
