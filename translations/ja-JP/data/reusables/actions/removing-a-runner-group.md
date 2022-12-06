---
ms.openlocfilehash: d3eda8a12037f1da8ec915c4652fa658f34fcc6b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109751"
---
ランナーは、そのグループが削除されると自動的に既定のグループに戻ります。

{% ifversion ghes or ghae or ghec %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
1. グループの一覧で、削除するグループの右側にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックします。
2. グループを削除するには、 **[グループの削除]** をクリックします。
3. 確認プロンプトを確認し、 **[Remove this runner group]\(このランナー グループの削除\)** をクリックします。 このグループのすべてのランナーは、既定のグループに自動的に移動します。ここでは、このグループに割り当てられたアクセス許可を継承します。

{% endif %}
