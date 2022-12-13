---
ms.openlocfilehash: 31301d6de4160cc4a94b864a72232dd32cefd1cb
ms.sourcegitcommit: 872c4751a3fc255671295a5dea6a2081c66b7b71
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 08/30/2022
ms.locfileid: "145089183"
---
{% ifversion fpt %}
1. セルフホステッド ランナー グループが登録されている、リポジトリまたは Organization のメイン ページに移動します。
2. {% octicon "gear" aria-label="The Settings gear" %} **[設定]** をクリックします。
{% data reusables.organizations.settings-sidebar-actions-runner-groups %} {% elsif ghec or ghes or ghae %}
1. セルフホステッド ランナー グループが配置されている場所に移動します:
   * **Organization 内**: メイン ページに移動して、{% octicon "gear" aria-label="The Settings gear" %} **[設定]** をクリックします。
   * **Enterprise レベルのグループを使用している場合**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. [ランナー グループ] 設定に移動します:
   * **Organization 内**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runner-groups spaces=5 %}
   * **Enterprise レベルのグループを使用している場合**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runner-groups-tab spaces=5 %} {% endif %}
