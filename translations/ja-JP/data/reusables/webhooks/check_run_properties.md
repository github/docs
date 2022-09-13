---
ms.openlocfilehash: 32ab126dadd891784d769bd869cf563c6783aedc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145067269"
---
キー | Type | 説明
----|------|-------------
`action`|`string` | 実行されるアクション。 次のいずれかになります。 <ul><li> `created` - 新しいチェックランが作成されました。</li><li> `completed` - チェックランの `status` は `completed` です。</li><li> `rerequested` - 誰かが pull request UI からチェックランの再実行を要求しました。 GitHub UI について詳しくは、[状態チェック](/articles/about-status-checks#checks)に関する記事をご覧ください。 `rerequested` アクションを受け取ったら、[新しいチェックランを作成する](/rest/reference/checks#create-a-check-run)必要があります。 誰かがチェックの再実行を要求した {% data variables.product.prodname_github_app %} だけが `rerequested` ペイロードを受け取ります。</li><li> `requested_action` - 誰かが、アプリが提供するアクションの実行を要求しました。 誰かがアクションの実行を要求した {% data variables.product.prodname_github_app %} だけが `requested_action` ペイロードを受け取ります。 チェックランと要求されたアクションについて詳しくは、[チェックランと要求されたアクション](/rest/reference/checks#check-runs-and-requested-actions)に関するページをご覧ください。</li></ul>
`check_run`|`object` | [check_run](/rest/reference/checks#get-a-check-run)。
`check_run[status]`|`string` | チェックランの現在のステータス。 `queued`、`in_progress`、または `completed` を指定できます。
`check_run[conclusion]`|`string` | 完了したチェックランの結果。 `success`、`failure`、`neutral`、`cancelled`、`timed_out`、`action_required` または `stale` のいずれかになります。 チェックランが `completed` になるまで、この値は `null` になります。
`check_run[name]`|`string` | チェックランの名前。
`check_run[check_suite][id]`|`integer` | このチェックランが一部になっているチェックスイートのid。
`check_run[check_suite][pull_requests]`|`array`| このチェックスイートにマッチするPull Requestの配列。 pull request がチェック スイートに合致するのは、それらが同じ `head_branch` を持っている場合です。<br/><br/>**注:**<ul><li>後続のプッシュが pull request になる場合、チェック スイートの `head_sha` は PR の `sha` とは異なる場合があります。</li><li>チェック スイートの `head_branch` がフォークされたリポジトリ内にある場合、それは `null` になり、`pull_requests` 配列は空になります。</li></ul>
`check_run[check_suite][deployment]`|`object`| リポジトリ環境へのデプロイメント。 これは、チェックランが環境を参照する {% data variables.product.prodname_actions %} ワークフロー ジョブによって作成された場合にのみ設定されます。
`requested_action`|`object` | ユーザによってリクエストされたアクション。
`requested_action[identifier]`|`string` | ユーザによってリクエストされたアクションのインテグレーター参照。
