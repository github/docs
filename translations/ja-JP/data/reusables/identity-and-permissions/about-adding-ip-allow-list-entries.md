---
ms.openlocfilehash: db4c80c49c4e3effe99073f29010147f3a1efc08
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108934"
---
それぞれに IP アドレスまたはアドレス範囲を含むエントリを追加することで、IP 許可リストを作成できます。{% ifversion ip-allow-list-address-check %} エントリの追加が完了したら、特定の IP アドレスがリスト内のいずれかの有効なエントリによって許可されるかどうかを確認できます。{% endif %}

Enterprise 内の Organization が所有する {% ifversion ghae %}Enterprise{% else %} プライベート アセット{% endif %}へのアクセスがリストによって制限される前に、許可 IP アドレスも有効にする必要があります。
