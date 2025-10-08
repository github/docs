---
title: Impact of changing your plan on billing
intro: Learn how upgrading or downgrading your plan is reflected in billing.
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/how-does-upgrading-or-downgrading-affect-the-billing-process
  - /articles/how-does-upgrading-or-downgrading-affect-the-billing-process
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/how-does-upgrading-or-downgrading-affect-the-billing-process
  - /billing/managing-billing-for-your-github-account/how-does-upgrading-or-downgrading-affect-the-billing-process
  - /billing/managing-the-plan-for-your-github-account/how-does-upgrading-or-downgrading-affect-the-billing-process
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Billing
  - Fundamentals
  - Organizations
  - Upgrades
  - User account
shortTitle: Impact of plan changes
contentType: concepts
---

## How plan changes affect billing

When you change your paid plan, the impact on billing depends on the type of change:

| Scenario                        | When is billing affected? | Is proration applied? | When does access change? |
|---------------------------------|---------------------------|----------------------|--------------------------|
| Upgrade plan                    | Immediate                 | Yes                  | Immediately              |
| Downgrade or cancel plan        | End of current cycle      | No                   | End of current cycle     |
| Add paid seats/licenses         | Immediate (prorated)      | Yes                  | Immediately              |
| Remove paid seats/licenses      | Next billing cycle        | No                   | End of current cycle (unless access revoked) |

Key takeaways:

* Upgrades are billed and applied immediately.
* Downgrades and cancellations take effect only after the current billing cycle ends.
* Adding seats is prorated and grants immediate access.
* Removing seats takes effect in the next cycle, unless access is manually revoked.

{% data reusables.accounts.accounts-billed-separately %}

Making a change to the {% data variables.product.github %} plan for your personal account, organization, or enterprise account does not affect billing for use of {% data variables.product.github %} features, such as {% data variables.product.prodname_copilot_short %} or paid apps purchased in {% data variables.product.prodname_marketplace %}.

For more information, see [AUTOTITLE](/get-started/learning-about-github/githubs-plans) and [AUTOTITLE](/billing/using-the-billing-platform/about-billing-on-github).

## Examples

The following examples illustrate how billing rules are applied in practice:

* **Canceling a monthly subscription:** Kumiko pays on the 5th of each month. She cancels on October 10th. Her subscription remains active until November 4th, then downgrades on November 5th.
* **Switching from yearly to monthly:** Ravi has a yearly subscription billed October 5th. He switches on December 10th, but the change won’t apply until the next renewal on October 5th the following year.
* **Adding paid seats:** Mada’s organization pays for 25 seats on the 15th. She adds 10 more on June 4th. She’s immediately charged a prorated amount for June 4–14, and billed for 35 seats starting June 15th.
* **Removing paid seats:** Stefan’s organization pays for 50 seats annually on May 20th. On September 30th, he removes 20 seats. The change takes effect on the next renewal (May 20th), when the organization will pay for 30 seats.

## Further reading

* [AUTOTITLE](/billing/managing-the-plan-for-your-github-account)
* [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-marketplace-apps)
* [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-git-large-file-storage)
* [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing)
