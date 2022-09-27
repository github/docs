---
ms.openlocfilehash: 905d4497bb48d1c5bfab91a1bb06389e5cd197e1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145067251"
---
`issue`|`object` | [Issue](/rest/reference/issues) 自体。
`changes`|`object`| アクションが `edited` の場合の Issue に対する変更。
`changes[title][from]`|`string` | アクションが `edited` の場合の以前のバージョンのタイトル。
`changes[body][from]`|`string` | アクションが `edited` だった場合の本文の以前のバージョン。
`assignee`|`object` | Issue の割り当てまたは割り当て解除を行った省略可能なユーザー。
`label`|`object` | Issue に対して追加または削除された省略可能なラベル。
