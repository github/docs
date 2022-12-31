---
title: GitHub Codespaces の利用制限の管理
intro: '{% data variables.product.prodname_github_codespaces %} に対して使用制限を設定できます。'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
product: '{% data reusables.gated-features.codespaces %}'
topics:
- Codespaces
- Enterprise
- Organizations
- Spending limits
- User account
- Billing
shortTitle: Spending limits
redirect_from:
- /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces
ms.openlocfilehash: 562b4406c06370869b9ae185cedaa803700ad63e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147111621"
---
## {% data variables.product.prodname_github_codespaces %} の利用上限について

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

使用上限に達すると、Organizationあるいはリポジトリではそれ以上新しいcodespaceを作成できなくなり、既存のcodespaceも起動できなくなります。 まだ実行中の既存のcodespaceはシャットダウンされません。使用上限を変更しなければ、上限を超えた分に対する支払いは生じません。

{% data variables.product.prodname_codespaces %} の使用に対する価格の詳細については、「[{% data variables.product.prodname_github_codespaces %} の支払いについて](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)」を参照してください。

{% ifversion ghec %}
## Azureサブスクリプションの利用
Microsoft Enterprise Agreement を通じて {% data variables.product.prodname_enterprise %} を購入した場合、Azure サブスクリプションID をEnterpriseアカウントに接続して、 {% data variables.product.prodname_codespaces %} の使用を有効にして支払うことができます。 詳細については、「[Azure サブスクリプションを Enterprise に接続する](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)」を参照してください。
{% endif %}

## 組織の {% data variables.product.prodname_codespaces %} に対する利用上限を管理する

組織の {% data variables.product.prodname_codespaces %} については、組織所有者と支払いマネージャーが利用上限を管理できます。

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## エンタープライズ アカウントの {% data variables.product.prodname_codespaces %} に対する利用上限を管理する

エンタープライズ アカウントの {% data variables.product.prodname_codespaces %} の利用上限は、エンタープライズ所有者と支払いマネージャーが管理できます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. [{% data variables.product.prodname_codespaces %} monthly usage]\(GitHub Actions および Packages の月次使用量\) の上にある **[Spending Limit]\(利用上限\)** をクリックします。
  ![[Spending Limit]\(利用上限\) タブ](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## 利用上限に達した際の変更のエクスポート

{% data reusables.codespaces.exporting-changes %}
## 使用状況の管理と利用上限のメール通知

メール通知は、利用量がアカウントの利用上限の50%、75%、90%、100%に達したときに、アカウントのオーナーと支払いマネージャーに送信されます。 

これらの通知は、 **[Spending Limit]\(利用上限\)** ページの下部に移動していつでも無効にすることができます。

![支払いのメール通知設定のスクリーンショット](/assets/images/help/billing/codespaces-spending-limit-notifications.png)

## 参考資料

- 「[コンピューターの種類へのアクセスを制限する](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)」
- 「[Organization で {% data variables.product.prodname_github_codespaces %} の課金を管理する](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization)」
