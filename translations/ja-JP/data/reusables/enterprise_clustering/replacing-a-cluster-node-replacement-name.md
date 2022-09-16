---
ms.openlocfilehash: 973fe98cbaff849fa234134175d35ae042510638
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880477"
---
1. プライマリ MySQL または Redis ノードを置き換える場合は、`cluster.conf` で `mysql-master` または `redis-master` の値を置換ノード名に変更します。

  たとえば、この変更された `cluster.conf` ファイルは、プライマリ MySQL および Redis ノードとして、新しくプロビジョニングされたクラスター ノード `ghe-replacement-data-node-1` を指定します。

  <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
