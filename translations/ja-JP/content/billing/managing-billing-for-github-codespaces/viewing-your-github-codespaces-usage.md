---
title: GitHub Codespaces の使用状況の表示
shortTitle: Viewing your usage
intro: '{% data variables.product.prodname_github_codespaces %}によるコンピュートの分とストレージを見ることができます。'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
ms.openlocfilehash: c3024840f48bda68470b9ab12693f4a79daddb48
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107150'
---
## 組織の {% data variables.product.prodname_github_codespaces %} の使用状況を表示する

組織については、組織所有者と支払いマネージャーが {% data variables.product.prodname_github_codespaces %} の使用状況を管理できます。 Enterprise アカウントによって管理されている Organization の所有者は、Organization の課金ページで {% data variables.product.prodname_github_codespaces %} の使用状況を見ることができ、Enterprise の管理者は Enterprise 全体の使用状況を見ることができます。

{% data reusables.organizations.billing-settings %}
1. [{% data variables.product.prodname_codespaces %}] で、今月これまでに使用されたコンピューティング時間とストレージについて詳しく説明します。

   ![分単位の使用状況の詳細](/assets/images/help/billing/codespaces-compute-storage.png)

   現在の使用制限を確認して更新することもできます。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の利用上限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)」をご覧ください。

   {% note %}

   **注**: 
   * ここで示されるコストは、現在の月単位の請求期間内の累積コストです。 このページに表示される {% data variables.product.prodname_github_codespaces %} の測定されたコストは、各月次請求期間の開始時にゼロにリセットされます。 前月の未払いコストは表示されません。
   * このページの図は 1 時間ごとに更新されます。

   {% endnote %}

{% data reusables.dotcom_billing.actions-packages-report-download-org-account %}このレポートに使われるデータは毎日更新されます。 
1. `Product` フィールドで "Codespaces" に言及している行のみが表示されるように、レポートをフィルター処理します。

   ![Codespaces でフィルター処理された使用状況レポート](/assets/images/help/codespaces/CSV-usage-report.png)

{% ifversion ghec %}
## エンタープライズ アカウントの {% data variables.product.prodname_codespaces %} の使用状況を表示する

Enterprise アカウントについては、Enterprise 所有者と課金マネージャーが {% data variables.product.prodname_github_codespaces %} の使用状況を確認できます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. [{% data variables.product.prodname_codespaces %} の 1 か月間の使用量] で、Enterprise アカウント内の各 Organization の使用状況の詳細を確認します。
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}

## 参考資料

- [組織内の codespace を一覧表示する](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)
