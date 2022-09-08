---
ms.openlocfilehash: 4dec7e56b1ae0aef9251a60bcb100208c7251f4e
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145089128"
---
{% ifversion fpt %}
1. セルフホステッド ランナー グループが登録されている、Organization またはリポジトリのメイン ページに移動します。
2. {% octicon "gear" aria-label="The Settings gear" %} **[設定]** をクリックします。
{% data reusables.organizations.settings-sidebar-actions-runners %} {% elsif ghec or ghes or ghae %}
1. セルフホストランナーが登録されているところへアクセスしてください:
   * **Organization またはリポジトリ内**: メイン ページに移動して、{% octicon "gear" aria-label="The Settings gear" %} **[設定]** をクリックします。
   * **Enterprise レベルのランナーを使用している場合**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. {% data variables.product.prodname_actions %}設定にアクセスしてください:
   * **Organization またはリポジトリ内**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %} {%- ifversion ghec or ghae or ghes %}
   * **Enterprise レベルのランナーを使用している場合**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %} {%- endif %} {% endif %}
