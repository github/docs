---
title: Making changes to your GitHub Copilot license
shortTitle: License changes
intro: 'Learn how changes to {% data variables.product.prodname_copilot %} licenses affect billing and user access for organizations, enterprises, and personal accounts.'
versions:
  feature: copilot
topics:
  - Copilot
allowTitleToDifferFromFilename: true
contentType: reference
---

This article provides details about what happens when you add or remove {% data variables.product.prodname_copilot_short %} licenses, for organizations, enterprises, and personal accounts. Use it to check:
* **What** happens to billing and access
* **When** those changes take effect
* **How** proration or refunds are handled

## Personal accounts

What you need to know about the following actions:

* **Upgrading:** If you move from a monthly to a yearly plan, the change is **immediate**. You are charged a prorated amount for the new plan.
* **Downgrading/canceling:**
  * **Monthly plan:** Access remains until the end of the current cycle. **No refund for unused time**.
  * **Yearly plan:** Access remains until the end of the annual term already paid for.
* **Switching plans:** Proration applies when switching between monthly and yearly, and the new plan starts **right away**.

## Organizations

What you need to know about the following actions:

### Adding seats

* **Billing:** Additional {% data variables.product.prodname_copilot_short %} seats are billed for the remainder of the current billing cycle. Charges are prorated based on the date seats are added.
* **Access:** Users assigned to new seats get access **immediately** after assignment.

### Removing seats

* **Billing:**
  * Billing for that user stops at the end of the cycle.
  * Reduced seat count takes effect at the start of the **next billing cycle**.
  * **No refunds are issued for unused time in the current cycle.**
* **Access:**
  * If a seat is unassigned during a billing cycle, the affected user can still access {% data variables.product.prodname_copilot_short %} until the end of the cycle.
  * If a seat is revoked, users lose access **immediately.**

Additionally:

* If **{% data variables.product.prodname_copilot_short %} is disabled at the organization level or licensed users are removed from the organization**: Affected users lose access to {% data variables.product.prodname_copilot_short %} immediately. Billing for affected users stops at the end of the cycle. If a user is restored to the organization or {% data variables.product.prodname_copilot_short %} is reenabled during the billing cycle, the users regain access to {% data variables.product.prodname_copilot_short %} **immediately**.

## Enterprises

What you need to know about the following actions:

### Adding seats

* **Billing:** Additional seats are billed on a prorated basis for the remainder of the current billing cycle.
* **Access:** Assigned users gain **immediate access** to {% data variables.product.prodname_copilot_short %}.

### Removing seats

* **Billing:**
  * Billing for that user stops at the end of the cycle.
  * Reduced seat count takes effect at the start of the **next billing cycle.**
  * **No refunds are issued for unused time in the current cycle.**
* **Access:**
  * If a seat is unassigned during a billing cycle, the affected user can still access {% data variables.product.prodname_copilot_short %} until the end of the cycle.
  * If a seat is revoked, users lose access **immediately.**

Additionally:

* **If an organization with {% data variables.product.prodname_copilot_short %} seats is removed from an enterprise**: Billing for those seats will stop at the end of the billing cycle. The users who had seats assigned by the removed organization will lose access to {% data variables.product.prodname_copilot_short %} unless they receive a seat through another organization.

* **If {% data variables.product.prodname_copilot_short %} is disabled at the enterprise level**: Any user with a {% data variables.product.prodname_copilot_short %} license will lose access to {% data variables.product.prodname_copilot_short %} immediately. Billing for that user stops at the end of the cycle. If {% data variables.product.prodname_copilot_short %} is reenabled, users regain access to {% data variables.product.prodname_copilot_short %} immediately.

## In summary

* **Proration:** Applies when adding seats/licenses or upgrading plans. You pay only for the portion of the billing cycle remaining.
* **Access:** Assignments and plan changes are effective immediately for affected users.
* **Removing or canceling:** No refunds are issued for unused time; access continues until the end of the cycle paid for, unless a seat/license is revoked.

| Scenario                        | Plan                | When is billing affected? | Is proration applied? | When does access change? | Refund for unused time? |
|----------------------------------|---------------------|--------------------------|----------------------|--------------------------|-------------------------|
| Add seat/license                 | {% data variables.copilot.copilot_business_short %}, {% data variables.copilot.copilot_enterprise_short %}| Next bill             | Yes                  | Immediately              | N/A                     |
| Remove seat/license              | {% data variables.copilot.copilot_business_short %}, {% data variables.copilot.copilot_enterprise_short %}e| Next bill             | N/A                  | Immediately              | No                      |
| Cancel subscription              | All plans           | End of cycle            | N/A                  | End of cycle            | No                      |
| Upgrade/downgrade/switch plan    | All plans           | Immediate                | Yes                  | Immediately              | N/A (proration instead) |
