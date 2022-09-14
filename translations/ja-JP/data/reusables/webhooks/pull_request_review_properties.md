---
ms.openlocfilehash: 6b8d3bb77c6a40a43ab22ffd0e60e61cd049fa61
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879024"
---
キー | Type | [説明]
----|------|------------
`action` | `string` | 実行されたアクション。 次のいずれかになります。<ul><li>`submitted` - pull request レビューが保留中ではない状態に送信されます。</li><li>`edited` - レビューの本文が編集されました。</li><li>`dismissed` - レビューが却下されました。</li></ul>
`pull_request` | `object` | レビューが関連する [pull request](/rest/reference/pulls)。
`review` | `object` | 影響されるレビュー。
`changes[body][from]`|`string` | アクションが `edited` だった場合の以前のバージョンのタイトル。
