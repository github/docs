---
ms.openlocfilehash: f41668ecc39ec7b3efc30deaf59bdf406a60d0cb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145088944"
---
キー | Type | 説明
----|------|-------------
`action`|`string` | プロジェクトで実行されたアクション。 `created`、`edited`、`closed`、`reopened`、`deleted` のいずれかになります。
`changes`|`object` | アクションが `edited` だった場合のプロジェクトへの変更。
`changes[name][from]` |`string` | アクションが `edited` だった場合の以前のバージョンの名前。
`changes[body][from]` |`string` | アクションが `edited` だった場合の以前のバージョンのタイトル。
`project`|`object` | [プロジェクト](/rest/reference/projects)自体。
