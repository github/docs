---
ms.openlocfilehash: 8acbacc0b39b108fdd05473ceb85e65bfe0e92d0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145117014"
---
ジョブをコンテナ内で実行するように設定すれば、ジョブとサービスコンテナ間のネットワーク設定が単純になります。 同じユーザ定義ブリッジネットワーク上にあるDockerコンテナは、すべてのポートを互いに公開するので、サービスコンテナのポートをDockerホストにマップする必要がありません。 ワークフロー中で設定したラベルを使って、ジョブコンテナからサービスコンテナにアクセスできます。
