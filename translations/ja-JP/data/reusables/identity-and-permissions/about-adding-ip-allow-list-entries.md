---
ms.openlocfilehash: 6775f1ca71684e74de0fedce4cb7e6c6b15c2820
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147682895"
---
それぞれに IP アドレスまたはアドレス範囲を含むエントリを追加することで、IP 許可リストを作成できます。{% ifversion ip-allow-list-address-check %} エントリの追加が完了したら、特定の IP アドレスがリスト内のいずれかの有効なエントリによって許可されるかどうかを確認できます。{% endif %}

Enterprise 内の Organization が所有する {% ifversion ghae %}Enterprise{% else %} プライベート アセット{% endif %}へのアクセスがリストによって制限される前に、許可 IP アドレスも有効にする必要があります。