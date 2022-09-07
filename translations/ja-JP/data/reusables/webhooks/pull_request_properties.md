---
ms.openlocfilehash: e2c781f830b789fbb8fdaaa9403fe4c7a37c63b5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145164831"
---
`number`|`integer` | pull request 番号。
`changes`|`object` | アクションが `edited` の場合のコメントの変更。
`changes[title][from]`|`string` | アクションが `edited` の場合の以前のバージョンのタイトル。
`changes[body][from]`|`string` | アクションが `edited` だった場合の本文の以前のバージョン。
`pull_request`|`object` | [pull request](/rest/reference/pulls) 自体。
