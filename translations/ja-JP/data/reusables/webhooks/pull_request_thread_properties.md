---
ms.openlocfilehash: 563e9f384acbc3e6e243db8d2dae5eb05d833d04
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145087371"
---
キー | Type | [説明]
----|------|------------
`action` | `string` | 実行されたアクション。 次のいずれかになります。<ul><li>`resolved` - pull request のコメント スレッドが解決済みとしてマークされました。</li><li>`unresolved` - pull request の前に解決されたコメント スレッドが未解決とマークされました。</li></ul>
`pull_request` | `object` | スレッドに関連する [pull request](/rest/reference/pulls)。
`thread` | `object` | 影響を受けたスレッド。
