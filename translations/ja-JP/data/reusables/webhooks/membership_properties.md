---
ms.openlocfilehash: e2df86df5d4919f4c55bb1963b66e9114eb03e44
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145088992"
---
キー | Type | [説明]
----|------|-------------
`action` |`string` | 実行されたアクション。 `added` または `removed` を指定できます。
`scope`  |`string` | メンバーシップのスコープ。 現時点では、`team` のみが可能です。
`member` |`object` | 追加または削除された[ユーザー](/rest/reference/users)。
`team`   |`object` | メンバーシップの[チーム](/rest/reference/teams)。
