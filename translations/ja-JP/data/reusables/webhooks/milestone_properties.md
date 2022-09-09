---
ms.openlocfilehash: 59b68e124208e167e58e295905ff993ecf0530ef
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145088991"
---
キー | Type | [説明]
----|------|-------------
`action` |`string` | 実行されたアクション。 `created`、`closed`、`opened` (閉じたマイルストーンが再び開かれる)、`edited`、または `deleted` のいずれかを指定できます。
`milestone`  |`object` | マイルストーン自体。
`changes`|`object`| アクションが `edited` の場合、マイルストーンへの変更。
`changes[description][from]`|`string` | アクションが `edited` の場合、以前のバージョンの説明。
`changes[due_on][from]`|`string` | アクションが `edited` の場合、以前のバージョンの期限。
`changes[title][from]`|`string` | アクションが `edited` の場合の以前のバージョンのタイトル。
