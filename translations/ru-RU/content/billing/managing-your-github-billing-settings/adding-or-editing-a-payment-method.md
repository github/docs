---
title: Добавление или изменение способа оплаты
intro: Вы можете в любое время добавить способ оплаты в свою учетную запись или обновить существующий способ оплаты для учетной записи.
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145087867'
---
{% data reusables.dotcom_billing.payment-methods %} {% data reusables.dotcom_billing.same-payment-method %}

Мы не выставляем счета и не принимаем заказы на покупку для личных учетных записей. Мы отправляем квитанции по электронной почте ежемесячно или ежегодно в дату выставления счетов для вашей учетной записи. Если согласно требованиям вашей компании, страны или бухгалтера в квитанциях должны указываться более подробные сведения, вы также можете [добавить в них дополнительную информацию](/articles/adding-information-to-your-personal-account-s-receipts).

## Обновление способа оплаты в личной учетной записи

{% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.update_payment_method %}
1. Если у вашей учетной записи есть сведения о выставлении счетов, которые требуется обновить, нажмите кнопку **Изменить**.
![Кнопка создания карты для оплаты](/assets/images/help/billing/billing-information-edit-button.png) {% data reusables.dotcom_billing.enter-billing-info %}
1. Если у вашей учетной записи есть существующий способ оплаты, который требуется обновить, нажмите кнопку **Изменить**.
![Кнопка создания карты для оплаты](/assets/images/help/billing/billing-payment-method-edit-button.png) {% data reusables.dotcom_billing.enter-payment-info %}

## Обновление способа оплаты в организации

{% data reusables.dotcom_billing.org-billing-perms %}

Если ваша организация находится за пределами США или вы оплачиваете оплаты {% data variables.product.product_name %} через корпоративный расчетный счет, удобно использовать PayPal.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.update_payment_method %}
1. Если у вашей учетной записи есть кредитная карта, которую вы хотите обновить, нажмите кнопку **Создать карту**.
![Кнопка создания карты для оплаты](/assets/images/help/billing/billing-new-card-button.png) {% data reusables.dotcom_billing.enter-payment-info %}
