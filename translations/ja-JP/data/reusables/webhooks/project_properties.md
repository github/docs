---
ms.openlocfilehash: f41668ecc39ec7b3efc30deaf59bdf406a60d0cb
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878575"
---
キー | Type | 説明
----|------|-------------
`action`|`string` | プロジェクトで実行されたアクション。 `created`、`edited`、`closed`、`reopened`、`deleted` のいずれかになります。
`changes`|`object` | アクションが `edited` だった場合のプロジェクトへの変更。
`changes[name][from]` |`string` | アクションが `edited` だった場合の以前のバージョンの名前。
`changes[body][from]` |`string` | アクションが `edited` だった場合の以前のバージョンのタイトル。
`project`|`object` | [プロジェクト](/rest/reference/projects)自体。
