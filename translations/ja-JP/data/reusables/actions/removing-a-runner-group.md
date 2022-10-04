---
ms.openlocfilehash: 62e8c6a4133d8402083e84402453b5fb6820bac3
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147764049"
---
ランナーは、そのグループが削除されると自動的に既定のグループに戻ります。

{% ifversion ghes or ghae or ghec %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
1. グループの一覧で、削除するグループの右側にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックします。
2. グループを削除するには、 **[グループの削除]** をクリックします。
3. 確認プロンプトを確認し、 **[Remove this runner group]\(このランナー グループの削除\)** をクリックします。 このグループのすべてのランナーは、既定のグループに自動的に移動します。ここでは、このグループに割り当てられたアクセス許可を継承します。

{% endif %}