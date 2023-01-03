---
ms.openlocfilehash: 81cfff3e9391616c64b73a3d7fc3d180e6760502
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109752"
---
登録プロセス中にランナー グループを指定しない場合、新しいランナーは、自動的に既定のグループに割り当てられ、その後別のグループへの移動が可能となります。

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %} {% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}
1. "ランナー" の一覧で、構成するランナーをクリックします。
2. **[ランナー グループ]** ドロップダウンを選択します。
3. "ランナーをグループに移動" で、ランナーの移動先グループを選択します。
{% elsif ghae < 3.4 or ghes < 3.4 %}
1. 設定ページの{% ifversion ghes or ghae %} [ランナー グループ] {% endif %}セクションで、移動するランナーの現在のグループを見つけて、グループ メンバーの一覧を展開します。
    ![ランナー グループのメンバーを表示](/assets/images/help/settings/actions-org-runner-group-members.png)
2. セルフホスト ランナーのチェックボックスをオンにし、 **[グループに移動]** をクリックして、利用可能な移動先を確認します。
    ![ランナー グループのメンバーを移動](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. 移動先のグループをクリックして、ランナーを移動します。
    ![ランナー グループのメンバーを移動](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png) {% endif %}
