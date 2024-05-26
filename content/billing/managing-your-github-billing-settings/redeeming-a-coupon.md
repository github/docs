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
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Discounts
  - Fundamentals
  - Organizations
  - User account
---
{% data variables.product.company_short %} can't issue a refund if you pay for an account before applying a coupon. We also can't transfer a redeemed coupon or give you a new coupon if you apply it to the wrong account. Confirm that you're applying the coupon to the correct account before you redeem a coupon.

{% data reusables.dotcom_billing.coupon-expires %}

> [!NOTE]
> You cannot apply coupons to paid plans for {% data variables.product.prodname_marketplace %} apps.

## Redeeming a coupon for your personal account

{% data reusables.dotcom_billing.enter_coupon_code_on_redeem_page %}
1. Under "Redeem your coupon", click **Choose** next to your _personal_ account's username.
{% data reusables.dotcom_billing.redeem_coupon %}

## Redeeming a coupon for your organization

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.dotcom_billing.enter_coupon_code_on_redeem_page %}
1. Under "Redeem your coupon", click **Choose** next to the _organization_ you want to apply the coupon to. If you'd like to apply your coupon to a new organization that doesn't exist yet, click **Create a new organization**.
{% data reusables.dotcom_billing.redeem_coupon %}

{% ifversion ghec %}

## Redeeming a coupon for your enterprise

Redeeming a {% data variables.product.prodname_ghe_cloud %} coupon will create a new enterprise account. You can't redeem a coupon for an existing enterprise account yourself. If you have an existing enterprise account and want to redeem a coupon, you can [contact {% data variables.contact.github_support %}](/support/contacting-github-support).

{% data reusables.dotcom_billing.enter_coupon_code_on_redeem_page %}
1. Select the organization that you would like to add to your new enterprise.
{% data reusables.dotcom_billing.redeem_coupon %}

{% endif %}
