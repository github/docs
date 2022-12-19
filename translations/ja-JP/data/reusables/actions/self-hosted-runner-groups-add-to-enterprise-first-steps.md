---
ms.openlocfilehash: dcb31ab7b27f6f3ebe89699a3a2e96dd1e78a5db
ms.sourcegitcommit: 872c4751a3fc255671295a5dea6a2081c66b7b71
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 08/30/2022
ms.locfileid: "145067994"
---
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.enterprise-accounts.actions-runner-groups-tab %}
1. **[New runner group]\(新しいランナー グループ\)** をクリックします。
{%- elsif ghes < 3.4 or ghae %} {% data reusables.enterprise-accounts.actions-runners-tab %}
1. **[新規追加]** ドロップダウンを使用し、 **[新しいグループ]** を選択します。
{%- endif %}
1. [グループ名] に、ランナー グループの名前を入力します。
