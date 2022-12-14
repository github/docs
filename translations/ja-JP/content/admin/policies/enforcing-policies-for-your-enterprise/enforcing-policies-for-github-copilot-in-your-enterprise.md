---
title: エンタープライズで GitHub Copilot のポリシーを適用する
intro: 'エンタープライズの Organization 内で {% data variables.product.prodname_copilot_for_business %} に対してポリシーを適用したり、各 Organization でポリシーを設定したりできます。'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_copilot_for_business %} in an enterprise.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  ghec: '*'
type: how_to
topics:
  - Copilot
  - Enterprise
  - Organizations
  - Policies
shortTitle: GitHub Copilot policies
ms.openlocfilehash: f87fa318a6390c9e254c3c115638325b8bfc474a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193439'
---
## エンタープライズの {% data variables.product.prodname_copilot %} のポリシーについて

{% data reusables.copilot.about-copilot %}

エンタープライズの Organization 内で {% data variables.product.prodname_copilot_for_business %} に対してポリシーを適用したり、各 Organization でポリシーを設定したりできます。 

{% data variables.product.prodname_copilot_for_business %} のサブスクリプションを設定する場合は、エンタープライズ内の Organization の {% data variables.product.prodname_copilot %} へのアクセスを許可および取り消すことができます。 {% data variables.product.prodname_copilot %} へのアクセスを Organization に許可すると、その Organization の管理者は個人とチームにアクセスを許可できます。 詳しくは、「[Organization で {% data variables.product.prodname_copilot %} の設定を構成する](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)」を参照してください。

{% data variables.product.prodname_copilot_for_business %} サブスクリプションは、エンタープライズ内のユーザーに割り当てられた {% data variables.product.prodname_copilot %} シートの数に基づいて月単位で課金されます。 詳しくは、「[{% data variables.product.prodname_copilot %} の {% data variables.product.prodname_ghe_cloud %} の価格](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#github-copilot-pricing-for-github-enterprise-cloud)」を参照してください。

{% data variables.product.prodname_copilot %} には、{% data variables.product.prodname_dotcom %} のパブリック コードと一致するコード候補を検出するフィルターが含まれています。 {% data variables.product.prodname_copilot_for_business %} を使用すると、エンタープライズ レベルでフィルターを有効または無効にするか、Organization の管理者が Organization レベルで決定するかを選べます。 フィルターが有効になっていると、{% data variables.product.prodname_copilot %} によって、周囲の約 150 文字のコードに関するコード候補が、{% data variables.product.prodname_dotcom %} でのパブリック コードに対してチェックされます。 一致または近い一致がある場合、候補は表示されません。

## エンタープライズで {% data variables.product.prodname_copilot_for_business %} の使用を管理するポリシーを適用する 

{% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.copilot-tab %}
1. [{% data variables.product.prodname_copilot %} への Organization のアクセスを管理する] で、{% data variables.product.prodname_copilot %} サブスクリプションのアクセスを構成します。 
    - エンタープライズ内のすべての Organization に対して {% data variables.product.prodname_copilot %} を無効にするには、 **[無効]** を選びます。
    - 現在と将来の両方で、エンタープライズ内のすべての Organization に対して {% data variables.product.prodname_copilot %} を有効にするには、 **[すべての Organization に許可する]** を選びます。
    - 特定の Organization に対して {% data variables.product.prodname_copilot %} を有効にするには、 **[特定の Organization に許可する]** を選びます。
    
    ![{% data variables.product.prodname_copilot %} への Organization のアクセス設定のスクリーンショット](/assets/images/help/copilot/manage-org-access-enterprise.png)
    
1. **[特定の Organization に許可する]** を選んだ場合は、{% data variables.product.prodname_copilot %} を有効にする Organization を選びます。 または、{% data variables.product.prodname_copilot %} へのアクセスを無効にする Organization を選ぶこともできます。
    - **[Organization のアクセス許可の設定]** をクリックし、 **[有効]** または **[無効]** を選び、指定した Organization の {% data variables.product.prodname_copilot %} へのアクセスを許可または拒否します。

    ![{% data variables.product.prodname_copilot %} への Organization のアクセス許可が有効または無効になっている設定のスクリーンショット](/assets/images/help/copilot/set-org-permissions-enterprise.png)
   
1. **[変更を保存]** をクリックします。
  
   ![{% data variables.product.prodname_copilot %} で Organization のアクセス許可を保存するスクリーンショット](/assets/images/help/copilot/save-org-settings-enterprise.png)

## エンタープライズ内のパブリック コードに一致する {% data variables.product.prodname_copilot %} の提案の使用を管理するためのポリシーを適用する

{% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.copilot-tab %}
1. [パブリック コードに一致する候補] で、ドロップダウン メニューをクリックし、適用するポリシーを選びます。
    - パブリック コードに一致する {% data variables.product.prodname_copilot %} の提案を許可するには、 **[許可]** を選びます。
    - パブリック コードに一致する {% data variables.product.prodname_copilot %} の提案をブロックするには、 **[ブロック]** を選びます。
    - パブリック コードに一致する {% data variables.product.prodname_copilot %} の提案の使用について各 Organization が独自のポリシーを設定できるようにするには、 **[ポリシーなし (各 Organization が決定できるようにする)]** を選びます。
    
    ![パブリック コード設定に一致する {% data variables.product.prodname_copilot %} の提案のスクリーンショット](/assets/images/help/copilot/duplication-detection-enterprise-dropdown.png)

## 参考資料

- 「[{% data variables.product.prodname_copilot_for_business %} プライバシーに関する声明](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)」
