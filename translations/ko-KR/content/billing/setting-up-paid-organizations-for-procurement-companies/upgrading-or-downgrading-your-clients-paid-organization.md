---
title: 클라이언트의 유료 조직 업그레이드 또는 다운그레이드
intro: 청구 관리자는 언제든지 클라이언트의 유료 조직을 업그레이드하거나 다운그레이드할 수 있습니다.
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-or-downgrading-your-clients-paid-organization
  - /articles/upgrading-or-downgrading-your-client-s-paid-organization
  - /articles/upgrading-or-downgrading-your-clients-paid-organization
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/upgrading-or-downgrading-your-clients-paid-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Upgrades
shortTitle: Upgrade or downgrade
ms.openlocfilehash: 2309c89fabf2a81aab18df90b8c545f0f3f684e1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145087751'
---
{% data reusables.organizations.reseller-ask-to-become-billing-manager %}

{% tip %}

**팁**:
- 클라이언트의 조직을 업그레이드하기 전에 [조직의 파일에서 결제 방법을 보거나 업데이트](/articles/adding-or-editing-a-payment-method)할 수 있습니다.
- 이러한 지침은 사용자별 구독에서 조직을 업그레이드하고 다운그레이드하기 위한 것입니다. 클라이언트가 레거시 리포지토리별 플랜을 사용하여 {% data variables.product.product_name %}에 대한 요금을 지불하는 경우 레거시 플랜을 업그레이드하거나 [다운그레이드](/articles/downgrading-your-github-subscription)하거나 [조직을 사용자별 가격 책정으로 전환](/articles/upgrading-your-github-subscription)할 수 있습니다.

{% endtip %}

## 조직의 유료 사용자 수 업그레이드

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

사용자를 추가한 후 조직의 파일의 결제 방법에는 추가하는 사용자 수와 청구 기간에 남은 시간에 따라 비례 배분 금액이 청구됩니다.

## 조직의 유료 좌석 수를 무료로 다운그레이드

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.downgrade-org-to-free %} {% data reusables.dotcom_billing.confirm_cancel_org_plan %}
