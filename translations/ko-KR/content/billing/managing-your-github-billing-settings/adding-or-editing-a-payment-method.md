---
title: 결제 방법 추가 또는 편집
intro: 언제든지 계정에 결제 방법을 추가하거나 계정의 기존 결제 방법을 업데이트할 수 있습니다.
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/adding-or-editing-a-payment-method
  - /articles/updating-your-personal-account-s-payment-method
  - /articles/how-do-i-update-my-credit-card
  - /articles/updating-your-account-s-credit-card
  - /articles/updating-your-personal-account-s-credit-card
  - /articles/updating-your-personal-account-s-paypal-information
  - /articles/does-github-provide-invoicing
  - /articles/switching-payment-methods-for-your-personal-account
  - /articles/paying-for-your-github-organization-account
  - /articles/updating-your-organization-s-credit-card
  - /articles/updating-your-organization-s-paypal-information
  - /articles/updating-your-organization-s-payment-method
  - /articles/switching-payment-methods-for-your-organization
  - /articles/adding-or-editing-a-payment-method
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/adding-or-editing-a-payment-method
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - User account
shortTitle: Manage a payment method
ms.openlocfilehash: 1fd85d480a7ed5085b9f142c82314f738fa6ffc6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145087868'
---
{% data reusables.dotcom_billing.payment-methods %} {% data reusables.dotcom_billing.same-payment-method %}

Microsoft에서는 개인 계정에 대해서는 청구를 제거하거나 구매 주문을 지원하지 않습니다. Microsoft에서는 계정의 청구 날짜에 영수증을 월 1회 또는 연 1회 이메일로 보냅니다. 회사, 국가 또는 회계사가 영수증에 더 자세한 정보가 포함되어야 한다고 요구하는 경우 영수증에 [다른 정보를 추가](/articles/adding-information-to-your-personal-account-s-receipts)할 수도 있습니다.

## 개인 계정의 결제 방법 업데이트

{% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.update_payment_method %}
1. 계정에 업데이트할 기존 청구 정보가 있는 경우 **편집** 을 클릭합니다.
![새 카드 청구 단추](/assets/images/help/billing/billing-information-edit-button.png) {% data reusables.dotcom_billing.enter-billing-info %}
1. 계정에 업데이트할 기존 결제 방법이 있는 경우 **편집** 을 클릭합니다.
![새 카드 청구 단추](/assets/images/help/billing/billing-payment-method-edit-button.png) {% data reusables.dotcom_billing.enter-payment-info %}

## 조직의 결제 방법 업데이트

{% data reusables.dotcom_billing.org-billing-perms %}

조직이 미국 외부에 있거나 회사 확인 계정을 사용하여 {% data variables.product.product_name %}에 대한 비용을 지불하는 경우에는 PayPal이 유용한 결제 방법일 수 있습니다.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.update_payment_method %}
1. 계정에 업데이트할 기존 신용 카드가 있는 경우 **새 카드** 를 클릭합니다.
![새 카드 청구 단추](/assets/images/help/billing/billing-new-card-button.png) {% data reusables.dotcom_billing.enter-payment-info %}
