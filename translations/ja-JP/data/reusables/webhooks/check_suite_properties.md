---
ms.openlocfilehash: 67fd6cd7e895b7e121c0972702473305fc560b24
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147116194"
---
キー | Type | 説明
----|------|-------------
`action`|`string` | 実行されるアクション。 次の値をとります。<ul><li>`completed` - チェック スイート内のすべてのチェック ランが完了しました。</li><li>`requested` - アプリケーションのリポジトリに新しいコードがプッシュされたときに発生します。 `requested` アクション イベントを受け取ったら、[新しいチェック ランを作成する](/rest/reference/checks#create-a-check-run)必要があります。</li><li>`rerequested` - 誰かがチェック スイート全体の再実行を pull request UI からリクエストしたときに発生します。 `rerequested` アクション イベントを受け取ったら、[新しいチェック ランを作成する](/rest/reference/checks#create-a-check-run)必要があります。 GitHub UI について詳しくは、[状態チェック](/articles/about-status-checks#checks)に関する記事を参照してください。</li></ul>
`check_suite`|`object` | [check_suite](/rest/reference/checks#suites)。
`check_suite[head_branch]`|`string` | 変更があるヘッドブランチ名。
`check_suite[head_sha]`|`string` | このチェックスイートに対する最新のコミットのSHA。
`check_suite[status]`|`string` | チェックスイートの一部であるすべてのチェックランのサマリステータス。 `queued`、`requested`、`in_progress`、または `completed` を指定できます。
`check_suite[conclusion]`|`string`| チェックスイートの一部であるすべてのチェックランのサマリの結論。 `success`、`failure`、`neutral`、`cancelled`、`timed_out`、`action_required` または `stale` のいずれかになります。 チェック ランが `completed` になるまで、この値は `null` になります。
`check_suite[url]`|`string` | チェックスイートAPIのリソースを指すURL。
`check_suite[pull_requests]`|`array`| このチェックスイートにマッチするPull Requestの配列。 pull request がチェック スイートに合致するのは、それらが同じ `head_branch` を持っている場合です。<br/><br/>**注:**<ul><li>後続のプッシュが pull request になる場合、チェック スイートの `head_sha` は PR の `sha` とは異なる場合があります。</li><li>チェック スイートの `head_branch` がフォークされたリポジトリ内にある場合、それは `null` になり、`pull_requests` 配列は空になります。</li></ul>
