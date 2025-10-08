---
title: Introduction to billing and licensing
intro: 'Learn about the billing platform''s key functionalities, and how they can help you manage your spending more effectively.'
versions:
  feature: enhanced-billing-platform
redirect_from:
  - /billing/using-the-enhanced-billing-platform-for-enterprises/about-the-enhanced-billing-platform-for-enterprises
  - /billing/using-the-new-billing-platform/about-the-new-billing-platform-for-enterprises
  - /billing/using-the-new-billing-platform/about-the-new-billing-platform
  - /billing/using-the-new-billing-platform/getting-started-with-the-new-billing-platform
  - /billing/managing-your-billing/about-the-new-billing-platform
topics:
  - Billing
  - Personal account
  - Enterprise
  - Team
shortTitle: Introduction to billing
contentType: get-started
---

## Key functionalities

The billing and licensing pages on {% data variables.product.github %} contain views and options to help you understand and manage the cost of using paid products, plans, and subscriptions. Key tasks you can perform are:

* **Prevent overspending**: Use budgets and alerts to track and control your spending.
* **Observe and understand spending**: Understand how your spending is distributed across products.
* **Estimate future spending**: View trends in your spending based on the usage across cost centers (enterprise accounts only) and budgets (all accounts).
* **Gather insights and data**: Generate usage reports to share with your team or stakeholders, and know if you're on track with your budget.
* **Allocate costs to centers**: Improve accountability by creating and assigning organizations, repositories, and members to cost centers.

## Accessing the billing pages

You can only access billing information for an account where you are an owner, a billing manager, or have equivalent permissions. For more information, see [AUTOTITLE](/billing/reference/billing-roles).

1. In the upper-right corner of any page on {% data variables.product.prodname_dotcom %}, click your profile picture.

   * For **personal accounts**, click **Settings**: https://github.com/settings/billing.
   * For **organizations**, click **Your organizations**, then next to the organization, click **Settings**.
   * For **enterprises**, click **Your enterprises**, then click **Settings**.

1. Click **Billing & Licensing**.

   * For **personal accounts** and **organizations**, the option is displayed under "Access" in the side bar. Then click **Overview**.
   * For **enterprises**, the **Billing & Licensing** option is displayed as a separate tab, next to the "Settings" tab.

If you have questions, please contact {% data variables.contact.contact_support_page %}.

{% data reusables.billing.actions-usage-delay %}

## Accessing billing information programmatically

You can use the REST API to download the usage report for a personal or organization account. First you will need to create a fine-grained access token with the permissions defined by the end point, see:

* [Get billing usage report for a user](/rest/billing/enhanced-billing?apiVersion=2022-11-28#get-billing-usage-report-for-a-user)
* [Get billing usage report for an organization](/rest/billing/enhanced-billing?apiVersion=2022-11-28#get-billing-usage-report-for-an-organization)
* [Get billing usage report for an enterprise](/rest/enterprise-admin/billing?apiVersion=2022-11-28#get-billing-usage-report-for-an-enterprise)

For more information, see [AUTOTITLE](/enterprise-cloud@latest/billing/managing-your-billing/automating-usage-reporting).

## Next steps

* [AUTOTITLE](/billing/how-tos/products/view-product-use)
* [AUTOTITLE](/billing/tutorials/set-up-budgets)
* [AUTOTITLE](/billing/tutorials/use-cost-centers)
