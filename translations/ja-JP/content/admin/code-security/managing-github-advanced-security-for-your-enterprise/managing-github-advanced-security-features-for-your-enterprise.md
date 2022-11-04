---
title: Enterprise 用の GitHub Advanced Security 機能の管理
intro: 'Enterprise が所有するすべての Organization でコードをセキュリティで保護して分析する {% data variables.product.prodname_GH_advanced_security %} 機能を制御できます。'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_advanced_security %} features for organizations in an enterprise.'
versions:
  feature: secret-scanning-enterprise-level
type: how_to
topics:
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Manage GitHub Advanced Security
ms.openlocfilehash: 0d48863d55805c5386435b7fef52a61a4ba7d43c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107206'
---
## {% data variables.product.prodname_advanced_security %} 機能の管理について

{% data variables.product.prodname_advanced_security %} 機能を使用して、Enterprise 内の Organization のセキュリティを強化できます。 {% data variables.product.prodname_advanced_security %} の管理を効率化するために、Enterprise が所有する Organization 内のすべての既存のリポジトリまたは新しいリポジトリに対して、各機能を有効または無効にすることができます。

{% ifversion ghes or ghec %}{% data variables.product.prodname_GH_advanced_security %} のライセンスを購入する方法については、「[{% data variables.product.prodname_GH_advanced_security %} の課金について](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)」を参照してください。{% elsif ghae %}ベータ版リリース中、{% data variables.product.prodname_ghe_managed %} で {% data variables.product.prodname_GH_advanced_security %} に対する料金は発生しません。{% endif %}

Organization に対して {% data variables.product.prodname_GH_advanced_security %} を許可していない場合、その Organization は、既存のすべてのリポジトリまたはすべての新しいリポジトリに対して機能を有効にしても影響を受けません。 Organization に対して {% data variables.product.prodname_GH_advanced_security %} を許可しないようにする方法について詳しくは、[Enterprise での Advanced Security のポリシーの適用](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise)に関するページを参照してください。

既存のリポジトリで 1 つまたは複数のセキュリティと分析機能を有効にすると、数分のうちに {% data variables.product.prodname_dotcom %} 上に結果が表示されます。

{% data reusables.security.security-and-analysis-features-enable-read-only %}

## {% data variables.product.prodname_advanced_security %} 機能の管理

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. 左側のサイドバーで、 **[コードのセキュリティと分析]** をクリックします。 
1. 必要に応じて、既存のすべてのリポジトリに対して機能を有効または無効にします。

   - その機能の右にある **[すべて無効にする]** または **[すべて有効にする]** をクリックします。 {% ifversion ghes or ghec %}[{% data variables.product.prodname_GH_advanced_security %}] のコントロールが無効になっている場合は、{% data variables.product.prodname_GH_advanced_security %} ライセンスに使用できるシートがありません。{% endif %}
   
   ![[セキュリティと分析の構成] 機能の [すべて有効にする] または [すべて無効にする] ボタンのスクリーンショット](/assets/images/enterprise/security/enterprise-security-and-analysis-disable-or-enable-all.png)

   - 変更を確定するには、 **[すべて有効にする] または [すべて無効にする]** あるいは **[対象リポジトリの有効化] または [対象リポジトリの無効化]** をクリックします。
   
     ![Organization 内のすべての対象リポジトリの機能を有効にするボタンのスクリーンショット](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-secret-scanning.png)

1. 必要に応じて、新しいリポジトリが追加されたときに機能を自動的に有効または無効にするには、その機能の下にあるチェックボックスをオンにします。
   
   ![新しいリポジトリに対して機能を有効にするチェックボックスのスクリーンショット](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-or-disable-feature-checkbox.png){% ifversion secret-scanning-custom-link-on-block %}

1. メンバーがシークレットのプッシュを試みると表示されるメッセージ内にリソース リンクを含めるには、必要に応じて、 **[コミットがブロックされたらリソース リンクを CLI と Web UI に追加する]** を選んでから、URL を入力し、 **[リンクの保存]** をクリックします。
  
  {% note %}

  **注**: カスタム リンクが Organization 用に構成されている場合、Organization レベルの値により、Enterprise に設定されたカスタム リンクがオーバーライドされます。 詳しくは、「[シークレット スキャンによるプッシュの保護](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)」を参照してください。

  {% endnote %}

   ![カスタム リンクを有効にするためのチェックボックスとテキスト フィールドを示すスクリーンショット](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}

