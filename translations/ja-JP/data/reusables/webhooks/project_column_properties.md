---
ms.openlocfilehash: c29755014aac40c0ab7e96f879d19a3fb06d79fb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145088951"
---
キー | Type | 説明
----|------|-------------
`action`|`string` | プロジェクト列で実行されたアクション。 `created`、`edited`、または `moved`、`deleted` のいずれかになります。
`changes`|`object` | アクションが `edited` だった場合のプロジェクト列への変更。
`changes[name][from]` |`string` | アクションが `edited` だった場合の以前のバージョンの名前。
`after_id`|`integer` | アクションが"moved"だった場合、この列がフォローするようになった列のid。 それがプロジェクトの最初の列の場合は `null` になります。
`project_column`|`object` | [プロジェクト列](/rest/reference/projects#columns)自体。
