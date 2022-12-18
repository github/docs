---
title: 청구 주기 기간 변경
intro: 월간 또는 연간 청구 주기에서 계정의 구독 및 기타 유료 기능 및 제품에 대한 요금을 결제할 수 있습니다.
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
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145087862'
---
청구 주기 기간을 변경하면 {% data variables.product.prodname_dotcom %} 구독과 다른 유료 기능 및 제품이 다음 청구 날짜에 새 청구 주기로 이동됩니다.

## 개인 계정 청구 주기 변경

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.change_plan_duration %} {% data reusables.dotcom_billing.confirm_duration_change %}

## 조직 청구 주기 변경

{% data reusables.dotcom_billing.org-billing-perms %}

### 사용자별 구독 기간 변경

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.change_plan_duration %} {% data reusables.dotcom_billing.confirm_duration_change %}

### 레거시 리포지토리별 플랜 기간 변경

{% data reusables.organizations.billing-settings %}
4. "청구 개요"에서 **플랜 변경** 을 클릭합니다.
  ![청구 개요 변경 계획 단추](/assets/images/help/billing/billing_overview_change_plan.png)
5. 오른쪽 위 모서리에서 **월간 청구로 전환** 또는 **연간 청구로 전환** 을 클릭합니다.
  ![청구 정보 섹션](/assets/images/help/billing/settings_billing_organization_plans_switch_to_yearly.png)
