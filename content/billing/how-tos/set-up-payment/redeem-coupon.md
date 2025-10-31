---
title: Redeeming a coupon
intro: 'If you have a coupon, you can redeem it towards a paid {% data variables.product.prodname_dotcom %} subscription.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/redeeming-a-coupon
  - /articles/where-do-i-add-a-coupon-code
  - /articles/redeeming-a-coupon-for-your-personal-account
  - /articles/redeeming-a-coupon-for-organizations
  - /articles/redeeming-a-coupon
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/redeeming-a-coupon
  - /billing/managing-your-github-billing-settings/redeeming-a-coupon
  - /billing/using-the-billing-platform/redeeming-a-coupon
  - /billing/using-the-new-billing-platform/redeeming-a-coupon
  - /billing/managing-your-billing/redeeming-a-coupon
versions:
  fpt: '*'
  ghec: '*'
product: 'Personal, organization, and enterprise account owners<br>Organization and enterprise billing managers'
topics:
  - Billing
  - Discounts
  - Fundamentals
  - Organizations
  - User account
shortTitle: Redeem coupon
contentType: how-tos
---

## Prerequisites

> [!IMPORTANT]
> {% data variables.product.company_short %} can't issue a refund if you apply a coupon to the wrong account or to an account that you have already paid for.

Before you redeem a coupon:
1. Confirm which account the coupon is intended for.
1. Verify that the account you want to apply the coupon to is not already paid for, see [AUTOTITLE](/billing/how-tos/set-up-payment/manage-payment-info).
1. Be aware that coupons cannot be used for paid plans for {% data variables.product.prodname_marketplace %} apps.

## Redeeming a coupon for your personal or organization account

{% data reusables.dotcom_billing.enter_coupon_code_on_redeem_page %}
1. Under "Redeem your coupon", click **Choose** next to the username of the account to apply the coupon to.
{% data reusables.dotcom_billing.redeem_coupon %}

## Redeeming a coupon for your enterprise

Redeeming a {% data variables.product.prodname_ghe_cloud %} coupon will create a new enterprise account. You can't redeem a coupon for an existing enterprise account yourself. If you have an existing enterprise account and want to redeem a coupon, you can [contact {% data variables.contact.github_support %}](/support/contacting-github-support).

{% data reusables.dotcom_billing.enter_coupon_code_on_redeem_page %}
1. Select the organization that you would like to add to your new enterprise.
{% data reusables.dotcom_billing.redeem_coupon %}

## When the coupon expires

If you use a coupon to pay for a subscription, when the coupon expires you will be charged the **full cost** for that subscription if you have a **payment method defined**.

If you **do not have a payment method defined**, your account will be affected:
* Personal accounts are downgraded to {% data variables.product.prodname_free_user %}
* Organization accounts are downgraded to {% data variables.product.prodname_free_team %}
* Enterprise accounts are locked until you add a payment method
