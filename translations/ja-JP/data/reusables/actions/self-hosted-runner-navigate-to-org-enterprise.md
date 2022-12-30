---
ms.openlocfilehash: 48dc95869bae901bf79df320e83b65979dedfd65
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763749"
---
{% ifversion fpt %}
1. セルフホステッド ランナーが登録されている、Organization のメイン ページに移動します。
2. {% octicon "gear" aria-label="The Settings gear" %} **[設定]** をクリックします。
{% data reusables.organizations.settings-sidebar-actions-runners %} {% elsif ghec or ghes or ghae %}
1. ランナーが登録されている場所に移動します。
   * **Organization 内**: メイン ページに移動して、{% octicon "gear" aria-label="The Settings gear" %} **[設定]** をクリックします。
   * **Enterprise レベルのランナーを使用している場合**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
1. {% data variables.product.prodname_actions %}設定にアクセスしてください:
   * **Organization 内**: 

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %}
   * **Enterprise レベルのランナーを使用している場合**: 

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %} {% endif %}
