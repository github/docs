---
title: Making changes to your GitHub Copilot license
shortTitle: License changes
intro: 'Learn how changes to {% data variables.product.prodname_copilot %} licenses affect billing and user access for organizations, enterprises, and personal accounts.'
versions:
  feature: copilot
category:
  - Learn about Copilot
allowTitleToDifferFromFilename: true
contentType: reference
---

License changes can affect access immediately or at the end of a billing cycle, depending on the plan and the action taken. Use the sections below for your account type and plan.

## Personal accounts

What you need to know about the following actions:

* **Upgrading:** If you upgrade your plan (for example, from {% data variables.copilot.copilot_pro_short %} to {% data variables.copilot.copilot_pro_plus_short %}), the change is **immediate**. You are charged the full price of the new plan, minus the amount you already paid for your current plan.
* **Downgrading/canceling:** Access remains until the end of the current billing cycle. **No refund for unused time**.

### Included monthly allowance reset

Paying for, renewing, upgrading, downgrading, converting from a trial, or resuming a plan after a lapse does not grant a fresh {% data variables.product.prodname_ai_credits_short %} allowance immediately. Your included monthly allowance resets at 00:00:00 UTC on the first day of each calendar month, regardless of your subscription billing date.

For example, if you exhaust your {% data variables.product.prodname_ai_credits_short %} on May 28 and renew or upgrade your plan on May 30, your allowance does not reset until June 1.

Any additional usage beyond the included allowance is charged separately and is unaffected by this monthly reset. See [AUTOTITLE](/copilot/concepts/billing-and-usage/individuals/billing) and [AUTOTITLE](/billing/how-tos/set-up-budgets#managing-budgets-for-your-personal-account).

## Organizations

These rules apply to {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} seats assigned through organizations.

### Adding seats

* **Billing:** Additional {% data variables.product.prodname_copilot_short %} seats are billed for the remainder of the current billing cycle. Charges are prorated based on the date seats are added. If you pay by credit card or PayPal, you will need to pay the prorated amount for new seats upfront.
* **Ability to use {% data variables.product.prodname_copilot_short %}:** Users assigned to new seats get access **immediately** after assignment.

### Removing seats

* **Billing:**
  * Billing for that user stops at the end of the cycle.
  * Reduced seat count takes effect at the start of the **next billing cycle**.
  * **No refunds are issued for unused time in the current cycle.**
* **Ability to use {% data variables.product.prodname_copilot_short %}:**
  * If a seat is unassigned during a billing cycle, the affected user can still access {% data variables.product.prodname_copilot_short %} until the end of the cycle.
  * If a seat is revoked, users lose access **immediately.**

Additionally:

* If **{% data variables.product.prodname_copilot_short %} is disabled at the organization level or licensed users are removed from the organization**: Affected users lose access to {% data variables.product.prodname_copilot_short %} immediately. Billing for affected users stops at the end of the cycle. If a user is restored to the organization or {% data variables.product.prodname_copilot_short %} is reenabled during the billing cycle, the users regain access to {% data variables.product.prodname_copilot_short %} **immediately**.

## Enterprises

Enterprise owners can change seat assignments. Billing and access effects depend on how the enterprise pays for {% data variables.product.prodname_copilot_short %}.

<a name="copilot-access"></a>

### {% data variables.product.prodname_copilot_short %} access billing model

This billing model is available through {% data variables.product.prodname_ghe_cloud %} or as {% data variables.copilot.copilot_standalone_short %}.

#### Removing seats

The member-level **Remove access** action removes the member's {% data variables.product.prodname_copilot_short %} seat, including assignments inherited from default, enterprise team, or organization settings. You do not need to remove the member from those teams or organizations.

* **Billing:** For a user with a {% data variables.product.prodname_ghe_cloud %} license, there is no change to the $0 {% data variables.product.prodname_copilot_short %} seat charge.
* **Ability to use {% data variables.product.prodname_copilot_short %}:** The member can still use {% data variables.product.prodname_copilot_short %} until the end of the billing cycle.

#### Losing a {% data variables.product.prodname_ghe_cloud %} license

Removing a member from all organizations in the enterprise causes them to lose their underlying {% data variables.product.prodname_ghe_cloud %} license.

* **Billing:** The {% data variables.product.prodname_ghe_cloud %} license charge continues for the current month. The user is not automatically converted to {% data variables.copilot.copilot_standalone_short %}.
* **Ability to use {% data variables.product.prodname_copilot_short %}:** The user's seat is removed, and their ability to use {% data variables.product.prodname_copilot_short %} ends immediately.

> [!WARNING]
> {% data reusables.copilot.enterprise-license-loss %}

#### Receiving a {% data variables.product.prodname_ghe_cloud %} license

When a {% data variables.copilot.copilot_standalone_short %} user receives a {% data variables.product.prodname_ghe_cloud %} license:

* **Billing:** The {% data variables.product.prodname_copilot_short %} seat charge changes from {% data variables.copilot.copilot_standalone_price_per_month %} per month to $0 immediately. {% data variables.product.prodname_ghe_cloud %} license billing applies.
* **Ability to use {% data variables.product.prodname_copilot_short %}:** The user's seat is retained and reclassified as included access. They can continue using {% data variables.product.prodname_copilot_short %} without interruption.

#### Leaving the enterprise

* **Billing:** Charges continue through the end of the month.
* **Ability to use {% data variables.product.prodname_copilot_short %}:** The user's seat is removed, and their ability to use {% data variables.product.prodname_copilot_short %} ends immediately.

### {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}

These plans charge per assigned seat and include a monthly usage allowance.

#### Adding seats

* **Billing:** Additional seats are billed on a prorated basis for the remainder of the current billing cycle. Included {% data variables.product.prodname_ai_credits_short %} may also be prorated. If you pay by credit card or PayPal, you will need to pay the prorated amount for new seats upfront.
* **Ability to use {% data variables.product.prodname_copilot_short %}:** Assigned users gain **immediate access** to {% data variables.product.prodname_copilot_short %}.

#### Removing seats

* **Billing:**
  * Billing for that user stops at the end of the cycle.
  * Reduced seat count takes effect at the start of the **next billing cycle.**
  * **No refunds are issued for unused time in the current cycle.**
* **Ability to use {% data variables.product.prodname_copilot_short %}:**
  * If a seat is unassigned during a billing cycle, the affected user can still access {% data variables.product.prodname_copilot_short %} until the end of the cycle.
  * If a seat is revoked, users lose access **immediately.**

Additionally:

* **If an organization with {% data variables.product.prodname_copilot_short %} seats is removed from an enterprise**: Billing for those seats will stop at the end of the billing cycle. The users who had seats assigned by the removed organization will lose access to {% data variables.product.prodname_copilot_short %} unless they receive a seat through another organization.

* **If {% data variables.product.prodname_copilot_short %} is disabled at the enterprise level**: Any user with a {% data variables.product.prodname_copilot_short %} license will lose access to {% data variables.product.prodname_copilot_short %} immediately. Billing for that user stops at the end of the cycle. If {% data variables.product.prodname_copilot_short %} is reenabled, users regain access to {% data variables.product.prodname_copilot_short %} immediately.

## Summary for personal plans, {% data variables.copilot.copilot_business_short %}, and {% data variables.copilot.copilot_enterprise_short %}

For personal, {% data variables.copilot.copilot_business_short %}, and {% data variables.copilot.copilot_enterprise_short %} plans:

* **Proration:** Applies when adding seats/licenses. You pay only for the portion of the billing cycle remaining. Included {% data variables.product.prodname_ai_credits_short %} may also be prorated.
* **Upgrading a personal plan:** You are charged the full price of the new plan, minus the amount you already paid for your current plan.
* **Ability to use {% data variables.product.prodname_copilot_short %}:** Assignments and upgrades are effective immediately for affected users. Downgrades take effect at the end of the billing cycle.
* **Removing or canceling:** No refunds are issued for unused time; access continues until the end of the cycle paid for, unless a seat/license is revoked.

| Scenario                        | Plan                | When is billing affected? | Is proration applied? | When does access change? | Refund for unused time? |
|----------------------------------|---------------------|--------------------------|----------------------|--------------------------|-------------------------|
| Add seat/license                 | {% data variables.copilot.copilot_business_short %}, {% data variables.copilot.copilot_enterprise_short %}| Immediately (upfront payment for credit card or PayPal)             | Yes                  | Immediately  ({% data variables.product.prodname_ai_credits_short %} may be prorated)            | N/A                     |
| Remove seat/license              | {% data variables.copilot.copilot_business_short %}, {% data variables.copilot.copilot_enterprise_short %}| End of cycle             | N/A                  | End of cycle (immediately if revoked) | No                      |
| Cancel subscription              | Personal, {% data variables.copilot.copilot_business_short %}, and {% data variables.copilot.copilot_enterprise_short %} plans           | End of cycle            | N/A                  | End of cycle            | No                      |
| Upgrade plan    | {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, and {% data variables.copilot.copilot_max_short %}           | Immediate                | No                  | Immediately              | N/A |
| Downgrade plan  | Personal, {% data variables.copilot.copilot_business_short %}, and {% data variables.copilot.copilot_enterprise_short %} plans           | End of cycle                | No                  | End of cycle              | No |
