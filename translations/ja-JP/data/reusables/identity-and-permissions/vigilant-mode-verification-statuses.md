---
ms.openlocfilehash: 383458a6038400299b6ab8759b8bbfd1ebbd3a2d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145109885"
---
| 状態         | 説明 |
| -------------- | ----------- |
| **Verified**   | コミットは署名され、署名の検証も成功しており、コミッターは警戒モードを有効化した唯一の作者。 
| **Partially&nbsp;verified** | コミットは署名され、署名の検証も成功しているが、コミットには a) コミッターではなく b) 警戒モードを有効化した 作者がいる。 この場合、コミットの署名は作者の合意を保証しないので、コミットは部分的にのみ検証されています。
| **Unverified** | 次のうち当てはまるものはどれですか?<br>- コミットは署名されていますが、署名を確認できませんでした。<br>- コミットが署名されておらず、コミッターが警戒モードを有効にしています。<br>- コミットが署名されておらず、作成者が警戒モードを有効にしています。<br>
