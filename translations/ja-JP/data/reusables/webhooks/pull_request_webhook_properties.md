---
ms.openlocfilehash: 154c75025c0c83ff96a9da096d824a6d8541a3b3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148008729"
---
キー | Type | [説明]
----|------|-------------
`action`|`string` | 実行されたアクション。 次のいずれかになります。<ul><li>`assigned`</li><li>`auto_merge_disabled`</li><li>`auto_merge_enabled`</li><li>`closed`: アクションが `closed` であり、`merged` キーが `false` である場合、プル要求はマージされていないコミットで閉じられました。 アクションが `closed` であり、`merged` キーが `true` である場合、プル要求はマージされました。</li><li>`converted_to_draft`</li>{% ifversion fpt or ghec %}<li>`dequeued`: pull request がマージ キューから削除されるとトリガーされます</li>{% endif %}<li>`edited`</li>{% ifversion fpt or ghec %}<li>`enqueued`: pull request がマージ キューに追加されるとトリガーされます</li>{% endif %}<li>`labeled`</li><li>`locked`</li><li>`opened`</li><li>`ready_for_review`</li><li>`reopened`</li><li>`review_request_removed`</li><li>`review_requested`</li><li>`synchronize`: プル要求のヘッド ブランチが更新されたときにトリガーされます。 たとえば、ヘッド ブランチがベース ブランチから更新されたとき、新しいコミットがヘッド ブランチにプッシュされたとき、またはベース ブランチが変更されたときなどです。</li><li>`unassigned`</li><li>`unlabeled`</li><li>`unlocked`</li></ul>
