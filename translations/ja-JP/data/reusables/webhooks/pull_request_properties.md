---
ms.openlocfilehash: e2c781f830b789fbb8fdaaa9403fe4c7a37c63b5
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878527"
---
`number`|`integer` | pull request 番号。
`changes`|`object` | アクションが `edited` の場合のコメントの変更。
`changes[title][from]`|`string` | アクションが `edited` の場合の以前のバージョンのタイトル。
`changes[body][from]`|`string` | アクションが `edited` だった場合の本文の以前のバージョン。
`pull_request`|`object` | [pull request](/rest/reference/pulls) 自体。
