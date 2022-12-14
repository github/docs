---
title: GitHub Copilot の使用状況の表示
intro: 'Enterprise 内のすべての Organization で {% data variables.product.prodname_copilot %} にアクセスできるユーザーの数を確認できます。'
product: '{% data reusables.gated-features.copilot-billing %}'
miniTocMaxHeadingLevel: 3
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_copilot %} in their enterprise.'
versions:
  ghec: '*'
type: how_to
topics:
  - Copilot
shortTitle: View your usage
ms.openlocfilehash: 9b481cfd11a3c96ce98175d3b30e3b26889c4148
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193423'
---
## {% data variables.product.prodname_copilot %} の使用状況について

Enterprise 内の {% data variables.product.prodname_copilot %} の使用状況情報は、Organization 別に分類したり、Organization 内でシート割り当て状態別に分類したりして表示できます。 Enterprise レベルでは、この情報には、各 Organization で割り当てられているシートの数や、現在の請求期間において各 Organization に関連付けられている合計支出が含まれます。 Organization レベルでは、この情報には、シートの合計数、前の請求期間から引き継がれたシート、現在の期間中に追加された新しいシート、および現在の期間の終了時に削除されるシートが含まれます。 

Organization の管理者が現在の請求期間の途中で 1 つまたは複数のシートを割り当てた場合、Enterprise レベルの情報にはシート数が 10 進数で表示されます。 たとえば、Organization が 3 つのシートを割り当てて請求期間を開始し、その期間の途中で追加のシートを割り当てた場合に、シートの使用状況情報に表示されるシート数が 3.5 となるとします。 "3" は期間の開始時に割り当てられたシート数を表し、"0.5" は期間の途中で割り当てられた追加のシート数を表します。 

支出情報には、現在の請求期間における各 Organization の合計支出が表示されます。 現在の期間での Organization の合計支出は、通常、割り当てられたシート数に、シートあたりのコスト (1 シートあたり月額 19 ドル) を掛けたものになります。 ただし、同じ Organization メンバーに複数の Organization のシートが割り当てられている場合、そのシートの使用状況は各 Organization に反映されます。ただし、Enterprise が課金されるのは 1 回だけであるため、その支出は、最初にシートが割り当てられた Organization にのみ反映されます。

## {% data variables.product.prodname_copilot_for_business %} の使用状況の表示

### Enterpriseレベル

{% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. [{% data variables.product.prodname_copilot_short %} の月次使用状況] の下で、{% data variables.product.prodname_copilot %} の使用状況の内訳を確認できます。
    - [シートの使用状況] の下に、Organization ごとに現在割り当てられているシートの総数が表示されます。10 進数は、現在の請求期間の途中で割り当てられたシート数を表します。
    - [支出] では、Organization ごとに現在の請求期間での {% data variables.product.prodname_copilot_for_business %} の合計コストを確認できます。

   ![[{% data variables.product.prodname_copilot %} 使用状況] ページのスクリーンショット](/assets/images/help/copilot/monthly-usage-enterprise.png)

### Organizationレベル

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. サイドバーの [アクセス] セクションで、 **[{% octicon "credit-card" aria-label="The credit card icon" %} 課金とプラン]** をクリックします。
1. [{% data variables.product.prodname_copilot_short %}] の下で、{% data variables.product.prodname_copilot %} の使用状況の内訳と、Organization における今後の変更を確認できます。
 
   ![Organization レベルの {% data variables.product.prodname_copilot %} シートの使用状況ページのスクリーンショット](/assets/images/help/copilot/org-level-seat-view.png)
