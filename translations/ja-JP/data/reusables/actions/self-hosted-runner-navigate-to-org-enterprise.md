---
ms.openlocfilehash: e63c220aff35a6efc7b2b2e2738b2b7645386d43
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145067962"
---
{% ifversion fpt %}
1. セルフホステッド ランナーが登録されている、Organization のメイン ページに移動します。
2. {% octicon "gear" aria-label="The Settings gear" %} **[設定]** をクリックします。
{% data reusables.organizations.settings-sidebar-actions-runners %} {% elsif ghec or ghes or ghae %}
1. セルフホストランナーが登録されているところへアクセスしてください:
   * **Organization 内**: メイン ページに移動して、{% octicon "gear" aria-label="The Settings gear" %} **[設定]** をクリックします。
   * **Enterprise レベルのランナーを使用している場合**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
1. {% data variables.product.prodname_actions %}設定にアクセスしてください:
   * **Organization 内**: 

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %}
   * **Enterprise レベルのランナーを使用している場合**: 

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %} {% endif %}
