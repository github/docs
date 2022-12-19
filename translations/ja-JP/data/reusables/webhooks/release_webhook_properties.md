---
ms.openlocfilehash: e25410532059b625a9d72984993f3d6d2fcec565
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145069173"
---
キー | Type | [説明]
----|------|-------------
`action`|`string` | 実行されたアクション。 次のいずれかになります。<ul><li>`published`: リリース、プレリリース、またはリリースのドラフトが公開された</li><li>`unpublished`: リリースまたはプレリリースが削除された</li><li>`created`: ドラフトが保存された、または以前にドラフトとして保存されることなくリリースもしくはプレリリースが公開された</li><li>`edited`: リリース、プレリリース、またはドラフトのリリースが編集された</li><li>`deleted`: リリース、プレリリース、またはドラフトのリリースが削除された</li><li>`prereleased`: プレリリースが作成された</li><li>`released`: リリースが公開されているか、プレリリースがリリースに変更されている</li>
