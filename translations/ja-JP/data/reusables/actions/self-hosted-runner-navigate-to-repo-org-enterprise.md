---
ms.openlocfilehash: 8e533fd0a00968e8a7d9e05db91c69e8c6a2a47b
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763773"
---
{% ifversion fpt %}
1. セルフホステッド ランナー グループが登録されている、Organization またはリポジトリのメイン ページに移動します。
2. {% octicon "gear" aria-label="The Settings gear" %} **[設定]** をクリックします。
{% data reusables.organizations.settings-sidebar-actions-runners %} {% elsif ghec or ghes or ghae %}
1. ランナーが登録されている場所に移動します。
   * **Organization またはリポジトリ内**: メイン ページに移動して、{% octicon "gear" aria-label="The Settings gear" %} **[設定]** をクリックします。
   * **Enterprise レベルのランナーを使用している場合**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. {% data variables.product.prodname_actions %}設定にアクセスしてください:
   * **Organization またはリポジトリ内**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %} {%- ifversion ghec or ghae or ghes %}
   * **Enterprise レベルのランナーを使用している場合**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %} {%- endif %} {% endif %}
