---
ms.openlocfilehash: 55d2a154539d7cc6b73f248c5616bd0016a561aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145087438"
---
キー | Type | [説明]
----|------|-------------
`pages`|`array` | 更新されたページ。
`pages[][page_name]`|`string` | ページの名前です。
`pages[][title]`|`string` |  現在のページ タイトル。
`pages[][action]`|`string` |  ページ上で実行されたアクション。 `created` または `edited` を指定できます。
`pages[][sha]`|`string` | ページの最新のコミットSHA。
`pages[][html_url]`|`string` | HTMLのwikiページを指す。
