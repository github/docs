---
ms.openlocfilehash: 563e9f384acbc3e6e243db8d2dae5eb05d833d04
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883773"
---
キー | Type | [説明]
----|------|------------
`action` | `string` | 実行されたアクション。 次のいずれかになります。<ul><li>`resolved` - pull request のコメント スレッドが解決済みとしてマークされました。</li><li>`unresolved` - pull request の前に解決されたコメント スレッドが未解決とマークされました。</li></ul>
`pull_request` | `object` | スレッドに関連する [pull request](/rest/reference/pulls)。
`thread` | `object` | 影響を受けたスレッド。
