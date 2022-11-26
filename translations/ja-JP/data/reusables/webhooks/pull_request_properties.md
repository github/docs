---
ms.openlocfilehash: 33034d7d2f00ba494e16629a57ab07ec9d34810b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148008730"
---
`number`|`integer` | pull request 番号。
`changes`|`object` | アクションが `edited` の場合のコメントの変更。
`changes[title][from]`|`string` | アクションが `edited` の場合の以前のバージョンのタイトル。
`changes[body][from]`|`string` | アクションが `edited` だった場合の本文の以前のバージョン。
`pull_request`|`object` | [pull request](/rest/reference/pulls) 自体。{% ifversion fpt or ghec %} `reason`|`string` | アクションが `dequeued` である場合に、pull request がマージ キューから削除された理由。{% endif %}
