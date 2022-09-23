---
ms.openlocfilehash: c5f96449d1a353d5be663dafe0b2f0507befbd59
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763984"
---
登録プロセス中にランナー グループを指定しない場合、新しいランナーは、自動的に既定のグループに割り当てられ、その後別のグループへの移動が可能となります。

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %} {% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
1. "ランナー" の一覧で、構成するランナーをクリックします。
2. **[ランナー グループ]** ドロップダウンを選択します。
3. "ランナーをグループに移動" で、ランナーの移動先グループを選択します。
{% elsif ghae or ghes < 3.4 %}
1. 設定ページの{% ifversion ghes or ghae %} [ランナー グループ] {% endif %}セクションで、移動するランナーの現在のグループを見つけて、グループ メンバーの一覧を展開します。
    ![ランナー グループのメンバーを表示](/assets/images/help/settings/actions-org-runner-group-members.png)
2. セルフホスト ランナーのチェックボックスをオンにし、 **[グループに移動]** をクリックして、利用可能な移動先を確認します。
    ![ランナー グループのメンバーを移動](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. 移動先のグループをクリックして、ランナーを移動します。
    ![ランナー グループのメンバーを移動](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png) {% endif %}