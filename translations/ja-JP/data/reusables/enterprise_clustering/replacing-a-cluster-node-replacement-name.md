---
ms.openlocfilehash: 973fe98cbaff849fa234134175d35ae042510638
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145111782"
---
1. プライマリ MySQL または Redis ノードを置き換える場合は、`cluster.conf` で `mysql-master` または `redis-master` の値を置換ノード名に変更します。

  たとえば、この変更された `cluster.conf` ファイルは、プライマリ MySQL および Redis ノードとして、新しくプロビジョニングされたクラスター ノード `ghe-replacement-data-node-1` を指定します。

  <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
