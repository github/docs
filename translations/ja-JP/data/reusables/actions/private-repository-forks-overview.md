---
ms.openlocfilehash: 0734336906d60a230cc3295722758d6e48629a6d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879494"
---
プライベート リポジトリのフォークの利用に依存している場合、`pull_request` イベントの際にユーザーがどのようにワークフローを実行できるかを制御するポリシーを構成できます。 プライベート {% ifversion ghec or ghes or ghae %}リポジトリと内部{% endif %}リポジトリでのみ使用でき、{% ifversion ghec %}エンタープライズ{% elsif ghes or ghae %}エンタープライズ{% endif %}、組織、またはリポジトリに対してこれらのポリシー設定を構成できます。
