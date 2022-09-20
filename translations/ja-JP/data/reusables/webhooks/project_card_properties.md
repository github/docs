---
ms.openlocfilehash: 4c9dffae916ec9dd367a0d8b92a3a1831a6e9b41
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145088952"
---
キー | Type | [説明]
----|------|-------------
`action`|`string` | プロジェクトカードで行われたアクション。 `created`、`edited`、`moved`、`converted`、または `deleted` を指定できます。
`changes`|`object` | アクションが `edited` または `converted` である場合のプロジェクト カードへの変更。
`changes[note][from]` |`string` | アクションが `edited` または `converted` である場合の以前のバージョンのメモ。
`after_id`|`integer` | アクションが"moved"だった場合、このカードがフォローするようになったカードのid。 列の最初のカードである場合、`null` なります。
`project_card`|`object` | [プロジェクト カード](/rest/reference/projects#cards)自体。
