---
ms.openlocfilehash: 8acbacc0b39b108fdd05473ceb85e65bfe0e92d0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145117014"
---
ジョブをコンテナ内で実行するように設定すれば、ジョブとサービスコンテナ間のネットワーク設定が単純になります。 同じユーザ定義ブリッジネットワーク上にあるDockerコンテナは、すべてのポートを互いに公開するので、サービスコンテナのポートをDockerホストにマップする必要がありません。 ワークフロー中で設定したラベルを使って、ジョブコンテナからサービスコンテナにアクセスできます。
