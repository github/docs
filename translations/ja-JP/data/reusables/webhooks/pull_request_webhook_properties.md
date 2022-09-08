---
ms.openlocfilehash: b7fde4d22f9d5e5e8b7a3d8f55b3ab19dee1185a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145087366"
---
キー | Type | [説明]
----|------|-------------
`action`|`string` | 実行されたアクション。 次のいずれかになります。<ul><li>`assigned`</li><li>`auto_merge_disabled`</li><li>`auto_merge_enabled`</li><li>`closed`: アクションが `closed` であり、`merged` キーが `false` である場合、プル要求はマージされていないコミットで閉じられました。 アクションが `closed` であり、`merged` キーが `true` である場合、プル要求はマージされました。</li><li>`converted_to_draft`</li><li>`edited`</li><li>`labeled`</li><li>`locked`</li><li>`opened`</li><li>`ready_for_review`</li><li>`reopened`</li><li>`review_request_removed`</li><li>`review_requested`</li><li>`synchronize`: プル要求のヘッド ブランチが更新されたときにトリガーされます。 たとえば、ヘッド ブランチがベース ブランチから更新されたとき、新しいコミットがヘッド ブランチにプッシュされたとき、またはベース ブランチが変更されたときなどです。</li><li>`unassigned`</li><li>`unlabeled`</li><li>`unlocked`</li></ul>
