---
title: About the billing cycle
intro: Learn about the billing cycle for the new billing platform.
versions:
  feature: enhanced-billing-platform
redirect_from:
  - /billing/using-the-enhanced-billing-platform-for-enterprises/about-the-billing-cycle
type: overview
topics:
  - Enterprise
  - Team
product: '{% data reusables.billing.enhanced-billing-platform-product %}'
---

>[!IMPORTANT] {% ifversion fpt %}If you signed up for a personal user account before February 13, 2025, this article does not apply to you. However, if you created a new personal account (on {% data variables.product.prodname_free_user %} or {% data variables.product.prodname_pro %}) after this date, the information in this article applies.{% elsif ghec %}If you have not migrated to the new billing platform, this article does not apply to you.{% endif %}
>
> To check if you are on the new billing platform, see [How do I know if I can access the new billing platform?](/billing/using-the-new-billing-platform/about-the-new-billing-platform-for-enterprises#how-do-i-know-if-i-can-access-the-enhanced-billing-platform).

Your billing experience depends on whether your products are metered, volume-based, or a combination of both. Some products, like {% data variables.product.prodname_enterprise %} and {% data variables.product.prodname_GHAS %}, can be either volume-based or metered, depending on when and how your account was created.

* **Metered**: Pay monthly for the number of licenses you use
* **Volume-based**: Traditional annual subscriptions with a fixed number of licenses

## Billing cycles for metered products

If your {% data variables.enterprise.enterprise_or_org %} {% ifversion fpt %}or personal account{% endif %} uses the new billing platform for **metered** products, you have a fixed **billing period** that runs from the first day of each month to the last day of the month.

At the end of each month, your metered usage is calculated and scheduled to be billed on your **bill cycle day**.

{% ifversion fpt %}For personal accounts and organizations, your bill cycle day is typically the day you started a paid plan (not necessarily when the account was created).{% elsif ghec %}Your bill cycle day is typically determined by when you converted from a trial to a paid enterprise account.{% endif %} For example, if you {% ifversion fpt %}started a paid plan{% elsif ghec %}converted from a trial{% endif %} on the 15th of a month, you will be billed on the 15th of each subsequent month.

## Billing cycles for volume-based products

Volume-based licenses may follow a different billing cycle, even if your account is on the new billing platform. These products are often billed based on the anniversary date of your subscription rather than by calendar month.

## How mid-cycle changes affect your billing

Mid-cycle changes to your account can affect your bill.

### Changes to metered products

Metered products (such as {% data variables.product.prodname_actions %} minutes, {% data variables.product.prodname_registry %} storage, or {% data variables.product.prodname_codespaces %} compute) are billed based on your actual usage throughout the month. For more information on how usage is calculated for a specific product, see [Where to find usage details for specific products](#where-to-find-usage-details-for-specific-products).

### Changes to volume-based products

Volume-based products are billed per user, seat, or resource. Changes to these mid-cycle won’t always immediately change your bill—but they may affect your next invoice.

#### Adding users or resources

* **Add users or licenses**: For license-based products like {% data variables.product.prodname_copilot_short %}, {% data variables.product.prodname_enterprise %}, or {% data variables.product.prodname_GHAS %}, you'll be billed a **prorated amount** based on how many days remain in the current billing cycle.
* **Add organizations or repositories**: These will also result in **prorated charges**, which appear on your next invoice.

#### Removing users or resources

* **Remove users or seats**: The user’s access is revoked immediately, but you'll still be billed for the **full billing cycle**. Removing a user won't reduce your current bill.
* **Remove organizations or repositories**: Charges **stop immediately** when removed, but you'll still be billed for any usage **up to that point**.

#### Transferring users or resources

* **Within the same billing account**: No double-billing. Moving users or resources between organizations under the same account is handled automatically.
* **Between different billing accounts**: Each account is billed according to its own cycle. You may see charges in both accounts if the move overlaps billing periods.

## Where to find usage details for specific products

Find product-specific guidance on how usage is calculated and billed.

* [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-actions/about-billing-for-github-actions)
* [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)
* [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-packages/about-billing-for-github-packages)
* [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot)
* [AUTOTITLE](/billing/managing-billing-for-your-products/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise#about-licenses-for-visual-studio-subscriptions-with-github-enterprise-cloud)
* [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage)
