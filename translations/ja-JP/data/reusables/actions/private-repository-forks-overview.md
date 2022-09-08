---
ms.openlocfilehash: 0734336906d60a230cc3295722758d6e48629a6d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145089336"
---
プライベート リポジトリのフォークの利用に依存している場合、`pull_request` イベントの際にユーザーがどのようにワークフローを実行できるかを制御するポリシーを構成できます。 プライベート {% ifversion ghec or ghes or ghae %}リポジトリと内部{% endif %}リポジトリでのみ使用でき、{% ifversion ghec %}エンタープライズ{% elsif ghes or ghae %}エンタープライズ{% endif %}、組織、またはリポジトリに対してこれらのポリシー設定を構成できます。
