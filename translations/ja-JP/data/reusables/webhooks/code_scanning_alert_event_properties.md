---
ms.openlocfilehash: 0d90cfeda767e8df43964320baab50350a1d8ae4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145087534"
---
キー | Type | [説明]
----|------|-------------
`action` | `string` | 実行されたアクション。 これは、`created`、`reopened_by_user`、`closed_by_user`、`fixed`、`appeared_in_branch`、または `reopened` のいずれかです。
`alert` | `object` | このイベントに関わるCode Scanningのアラート。
`ref` | `string` | Code ScanningアラートのGit参照。 アクションが `reopened_by_user` または `closed_by_user` の場合、イベントは `sender` によってトリガーされたものであり、この値は空になります。
`commit_oid` | `string` | Code ScanningアラートのコミットSHA。 アクションが `reopened_by_user` または `closed_by_user` の場合、イベントは `sender` によってトリガーされたものであり、この値は空になります。
