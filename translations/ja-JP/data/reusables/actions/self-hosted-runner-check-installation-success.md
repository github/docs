---
ms.openlocfilehash: a9030eae8492863ee750f2a02eeac584fd13513a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145068026"
---

### セルフホストランナーの追加に成功したことの確認

セルフホステッド ランナーを追加する手順を完了すると、ランナーとその状態が {% ifversion fpt または ghec %}"ランナー"{% elsif ghae または ghes %}"セルフホステッド ランナー"{% endif %} の下に表示されます。

ジョブをランナーが受け付けるためには、セルフホストランナーアプリケーションが動作していなければなりません。 ランナー アプリケーションが {% data variables.product.product_name %} に接続されており、ジョブの受信準備ができたら、以下のメッセージがコンピューターのターミナルに表示されます。

{% data reusables.actions.self-hosted-runner-connected-output %}
