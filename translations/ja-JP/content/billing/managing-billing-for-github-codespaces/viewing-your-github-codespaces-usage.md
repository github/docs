---
title: GitHub Codespaces の使用状況の表示
shortTitle: Viewing your usage
intro: '{% data variables.product.prodname_github_codespaces %} によって使用されるコンピューティング時間とストレージを見ることができます。'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
ms.openlocfilehash: 67e29ee71b1881ee2ae6e9ca872fd7969f86afca
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158742'
---
## 個人アカウントの {% data variables.product.prodname_github_codespaces %} の使用状況を表示する

現在の月単位の請求期間でこれまでに使用した個人アカウントに含まれている使用状況を確認できます。 支払い方法を設定し、使用制限を設定し、含まれているすべての使用量を使用している場合は、当月の請求書を確認することもできます。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. [{% data variables.product.prodname_codespaces %}] で、現在の請求月にこれまでに使用した {% data variables.product.prodname_github_codespaces %} コンピューティング使用量と GB 月のストレージのコア時間を確認できます。

   ![個人の使用状況の初期ビューのスクリーンショット](/assets/images/help/codespaces/view-personal-usage-collapsed.png)

   "コア時間" と "GB 月" の詳細については、「[{% data variables.product.prodname_github_codespaces %} の課金について](/enterprise-cloud@latest/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)」をご覧ください。

1. 必要に応じて、 **[使用時間]** と **[ストレージ]** をクリックして詳細を表示します。

   ![個人の使用状況の展開されたビューのスクリーンショット](/assets/images/help/codespaces/view-personal-usage-expanded.png)

   **[含まれる]** 列には、今月これまでに使用したコンピューティング使用量のコア時間数、またはストレージの GB 月、アカウントに含まれる無料使用量が表示されます。 **[有料]** 列には、使用した使用量の請求済みのコア時間、またはストレージの GB 月が表示されます。 図は 1 時間ごとに 1 回更新されます。

   上のスクリーンショットでは、月に含まれるストレージのクォータ全体が使用されています。 含まれているコンピューティング使用量またはストレージのいずれかをすべて使用した場合 (どちらか早く到達した方)、現在の請求月中に {% data variables.product.prodname_github_codespaces %} を引き続き使用するには、支払い方法と使用制限を設定する必要があります。 詳細については、「[支払い方法の追加または編集](/enterprise-cloud@latest/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)」および「[{% data variables.product.prodname_github_codespaces %} の使用制限の管理](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-the-github-codespaces-spending-limit-for-your-personal-account)」を参照してください。

{% data reusables.codespaces.usage-report-download %}

## 組織アカウントの {% data variables.product.prodname_github_codespaces %} の使用状況を表示する

組織については、組織所有者と支払いマネージャーが {% data variables.product.prodname_github_codespaces %} の使用状況を表示できます。

{% data reusables.organizations.billing-settings %}
1. [{% data variables.product.prodname_codespaces %}] で、今月これまでに使用されたコンピューティング時間とストレージについて詳しく説明します。

   ![コンピューティング使用量とストレージの詳細のスクリーンショット](/assets/images/help/billing/codespaces-compute-storage.png)

   現在の使用制限を確認して更新することもできます。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の利用上限の管理](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)」をご覧ください。

   {% note %}

   **注**: 
   * ここで示されるコストは、現在の月単位の請求期間内の累積コストです。 このページに表示される {% data variables.product.prodname_github_codespaces %} の測定されたコストは、各月次請求期間の開始時にゼロにリセットされます。 前月の未払いコストは表示されません。
   * このページの図は 1 時間ごとに更新されます。

   {% endnote %}

{% data reusables.codespaces.usage-report-download %}

{% ifversion ghec %}
## エンタープライズ アカウントの {% data variables.product.prodname_codespaces %} の使用状況を表示する

Enterprise アカウントについては、Enterprise 所有者と課金マネージャーが {% data variables.product.prodname_github_codespaces %} の使用状況を確認できます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. [{% data variables.product.prodname_codespaces %} の 1 か月間の使用量] で、Enterprise アカウント内の各 Organization の使用状況の詳細を確認します。
{% data reusables.codespaces.usage-report-download %} {% endif %}

## 参考資料

- [組織内の codespace を一覧表示する](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)
