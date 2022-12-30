---
ms.openlocfilehash: 1f368a08409f4b10daa8b9e45340886ba8d9a47d
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878504"
---
キー | Type | 説明
----|------|-------------
`action`|`string` | 実行されるアクション。 次のいずれかになります。 <ul><li> `queued` - 新しいジョブが作成されました。</li><li> `in_progress` - ジョブがランナーで処理を開始しました。</li><li> `completed` - ジョブの `status` は `completed` です。</li></ul>
`workflow_job`|`object`| ワークフロー ジョブ。 多くの `started_at` キー (`workflow_job`、`head_sha`、`conclusion` など) は、[`check_run`](#check_run) オブジェクト内のものと同じです。
`workflow_job[status]`|`string`| ジョブの現在の状態。 `queued`、`in_progress`、または `completed` を指定できます。
`workflow_job[labels]`|`array`| ジョブのカスタム ラベル。 ワークフロー YAML の [`"runs-on"` 属性](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on) によって指定されます。
`workflow_job[runner_id]`|`integer`| このジョブを実行しているランナーの ID。 これは、`workflow_job[status]` が `queued` である限り `null` になります。
`workflow_job[runner_name]`|`string`| このジョブを実行しているランナーの名前。 これは、`workflow_job[status]` が `queued` である限り `null` になります。
`workflow_job[runner_group_id]`|`integer`| このジョブを実行しているランナー グループの ID。 これは、`workflow_job[status]` が `queued` である限り `null` になります。
`workflow_job[runner_group_name]`|`string`| このジョブを実行しているランナー グループの名前。 これは、`workflow_job[status]` が `queued` である限り `null` になります。
