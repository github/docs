---
title: 支払いサイクル期間の変更
intro: アカウントのプランや、その他有料機能、有料製品は、月次または年次のサイクルで支払うことができます。
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/changing-the-duration-of-your-billing-cycle
  - /articles/monthly-and-yearly-billing
  - /articles/switching-between-monthly-and-yearly-billing-for-your-personal-account
  - /articles/switching-between-monthly-and-yearly-billing-for-your-organization
  - /articles/changing-the-duration-of-your-billing-cycle
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Repositories
  - User account
shortTitle: Billing cycle
ms.openlocfilehash: 164b0192f1b055b95ad83fc2845e9af59058b6a7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145087863'
---
支払いサイクル期間を変更すると、{% data variables.product.prodname_dotcom %}のプランおよびその他の有料機能、有料製品は、次の支払日から新しい支払いサイクルに移行します。

## 個人アカウントの支払いサイクル期間の変更

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.change_plan_duration %} {% data reusables.dotcom_billing.confirm_duration_change %}

## Organization の支払いサイクル期間の変更

{% data reusables.dotcom_billing.org-billing-perms %}

### ユーザ単位プランの期間の変更

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.change_plan_duration %} {% data reusables.dotcom_billing.confirm_duration_change %}

### 過去のリポジトリ単位プランの期間の変更

{% data reusables.organizations.billing-settings %}
4. [課金の概要] で、 **[プランの変更]** をクリックします。
  ![課金概要のプラン変更ボタン](/assets/images/help/billing/billing_overview_change_plan.png)
5. 右上隅にある **[月次支払いに切り替える]** または **[年次支払いに切り替える]** をクリックします。
  ![支払い情報セクション](/assets/images/help/billing/settings_billing_organization_plans_switch_to_yearly.png)
