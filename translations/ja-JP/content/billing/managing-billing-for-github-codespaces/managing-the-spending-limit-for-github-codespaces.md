---
title: GitHub Codespaces の使用制限の管理
intro: '{% data variables.product.prodname_github_codespaces %} に対して使用制限を設定できます。'
shortTitle: Spending limit
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Enterprise
  - Organizations
  - Spending limits
  - User account
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces
ms.openlocfilehash: 87dd5204bb41ddaef911562cfb4662125e04139a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160299'
---
## {% data variables.product.prodname_github_codespaces %} の使用制限について

{% data reusables.codespaces.codespaces-free-for-personal-intro %} 詳細については、「[{% data variables.product.prodname_github_codespaces %} の課金について](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)」を参照してください。

{% data reusables.codespaces.codespaces-spending-limit-requirement %} {% data reusables.codespaces.codespaces-monthly-billing %} 

使用制限に達した場合、それ以上新しい codespace を作成できなくなり、既存の codespace も起動できなくなります。 まだ実行されている既存の codespace は間もなくシャットダウンされますが、使用制限に達した後は使用量に対して課金されません。

{% ifversion ghec %}
## Azureサブスクリプションの利用
Microsoft Enterprise Agreement を通じて {% data variables.product.prodname_enterprise %} を購入した場合、Azure サブスクリプション ID を Enterprise アカウントに接続して、{% data variables.product.prodname_github_codespaces %} の使用を有効にして支払うことができます。 詳細については、「[Azure サブスクリプションを Enterprise に接続する](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)」を参照してください。
{% endif %}

## 個人アカウントの {% data variables.product.prodname_github_codespaces %} の使用制限の管理

自分の個人アカウントの {% data variables.product.prodname_github_codespaces %} の使用制限を設定できます。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

## 組織アカウントの {% data variables.product.prodname_github_codespaces %} の使用制限の管理

組織の {% data variables.product.prodname_github_codespaces %} については、組織所有者と支払いマネージャーが使用制限を管理できます。

{% note %}

**注**: エンタープライズ アカウントが所有する組織は、エンタープライズ設定で指定されているため、独自の使用制限を指定することはできません。

{% endnote %}

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## エンタープライズ アカウントの {% data variables.product.prodname_github_codespaces %} の使用制限の管理

エンタープライズ アカウントの {% data variables.product.prodname_github_codespaces %} の使用制限は、エンタープライズ所有者と支払いマネージャーが管理できます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. **[使用制限]** をクリックします。

   ![[使用制限] タブ](/assets/images/help/settings/spending-limit-tab-enterprise.png)

{% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## 利用上限に達した際の変更のエクスポート

{% data reusables.codespaces.exporting-changes %}

## 使用状況の管理と利用上限のメール通知

メール通知は、利用量がアカウントの使用制限の 75%、90%、100% に達したときに、アカウント オーナーと支払いマネージャーに送信されます。 

これらの通知は、[課金とプラン/月単位の使用制限] ページの下部に移動し、 **[使用制限アラート]** チェックボックスをオフにすることで、いつでもオフにすることができます。

個人アカウントの場合のみ、個人アカウントに含まれる無料使用の 75%、90%、100% を使用したときに送信されるメール通知をオフにすることもできます。 これを行うには、 **[含まれているリソースのアラート]** チェック ボックスをオフにします。

![支払いのメール通知設定のスクリーンショット](/assets/images/help/codespaces/codespaces-spending-limit-notifications.png)

## 参考資料

- 「[コンピューターの種類へのアクセスを制限する](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)」
- [Organization で {% data variables.product.prodname_github_codespaces %} のコストを管理する](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)
