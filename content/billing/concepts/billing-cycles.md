---
title: Billing cycles
intro: 'Learn about the billing cycles for self-serve, Azure, and invoiced payment methods.'
shortTitle: Billing cycles
versions:
  feature: enhanced-billing-platform
redirect_from:
  - /billing/using-the-enhanced-billing-platform-for-enterprises/about-the-billing-cycle
  - /billing/using-the-billing-platform/viewing-your-subscriptions-and-billing-date
  - /billing/using-the-billing-platform/changing-the-duration-of-your-billing-cycle
  - /billing/using-the-new-billing-platform/viewing-your-subscriptions-and-billing-date
  - /billing/using-the-new-billing-platform/about-the-billing-cycle
  - /billing/managing-your-billing/about-the-billing-cycle
topics:
  - Billing
  - Enterprise
  - Team
product: '{% data reusables.billing.enhanced-billing-platform-product %}'
contentType: concepts
---

Your billing experience depends on whether your products are metered, volume-based, or a combination of both. Some products, like {% data variables.product.prodname_enterprise %} and {% data variables.product.prodname_GHAS %}, can be either volume-based or metered, depending on when and how your account was created.

* **Metered**: Pay monthly for the number of licenses you use
* **Volume-based**: Traditional annual subscriptions with a fixed number of licenses

## Billing cycles for metered products

Metered products have a fixed **billing period** that starts at 00:00:00 UTC on the first day of each month and ends at 23:59:59 UTC on the last day of the month.

At the end of each month, your metered usage is calculated and scheduled to be billed on your **bill cycle day**.

{% ifversion fpt %}For personal accounts and organizations, your bill cycle day is typically the day you started a paid plan (not necessarily when the account was created).{% elsif ghec %}Your bill cycle day is typically determined by when you converted from a trial to a paid enterprise account.{% endif %} For example, if you {% ifversion fpt %}started a paid plan{% elsif ghec %}converted from a trial{% endif %} on the 15th of a month, you will be billed on the 15th of each subsequent month.

> [!NOTE] If you are paying via an Azure subscription ID, your **billing period** will run from the first day of each month to the last day of the month. To access your specific **bill cycle day**, please visit the Azure commerce portal.

## Billing cycles for volume-based products

Volume-based licenses may follow a different billing cycle. These products are often billed based on the anniversary date of your subscription rather than by calendar month.

You can switch between annual and monthly billing from the "Licensing" page under "Billing and licensing", see [AUTOTITLE](/copilot/how-tos/manage-your-account/view-and-change-your-copilot-plan#changing-your-billing-cycle).

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
