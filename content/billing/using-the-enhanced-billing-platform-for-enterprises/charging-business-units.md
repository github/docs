---
title: Charging business units
intro: 'Learn how to create and use cost centers to manage business units at scale.'
versions:
  feature: enhanced-billing-platform
type: how_to
topics:
  - Enterprise
permissions: The enhanced billing platform is available to all enterprise accounts, and organizations owned by enterprise accounts, created after June 2, 2024. Enterprises that participated in the beta program also have access to the enhanced billing platform.
shortTitle: Charge business units
---

To drive accountability and control costs, the enhanced billing platform lets you create cost centers. A cost center manages expenses without generating revenue. You can create cost centers and assign users, organizations, and repositories to them, and set budgets. This enhances spending control and resource allocation.

If your account is billed to Azure, you will have the option to add an Azure subscription ID. Cost centers allows for multiple Azure subscription IDs so that different business units, within an enterprise, can directly pay for their usage.

{% ifversion metered-ghe-ghas %}

## Cost center billing for seat-based products

For seat-based products like {% data variables.product.prodname_enterprise %}, {% data variables.product.prodname_GH_advanced_security %}, and {% data variables.product.prodname_copilot %}, cost centers are based on **users**. Changes to users (additions or deletions) will affect billing as follows:

* Any new usage after the change will be billed to the cost center immediately.
* Seats added before a user is added to a cost center are only reflected at the start of the next month.
* Deletion of a user from a cost center is reflected at the start of the next month.

For example, if you add a user to a cost center, any new usage for that user will be billed to the cost center right away. However, if the usage (seat) for the user was added _before_ the user was added to the cost center, then the user’s seat will only start being billed to the cost center at the start of the next billing cycle.
{% endif %}

## Creating a cost center

Create cost centers to monitor and manage expenses for specific organizations or repositories. Multiple organizations and repositories can be assigned to one cost center.

This method can be used to track only non-seat based products usage such as:

* {% data variables.product.prodname_actions %}
* {% data variables.product.prodname_github_codespaces %}
* {% data variables.product.prodname_registry %}
* {% data variables.large_files.product_name_short %}

For seat-based products like usage-based billing for {% data variables.product.prodname_enterprise %} and {% data variables.product.prodname_GH_advanced_security %}, and {% data variables.product.prodname_copilot %}, assign users to the cost center via the API.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}
1. Click **Cost centers**.
1. Click **New cost center** in the upper-right corner.
1. In the text box under "Name", enter a name for your cost center.
1. If your account is billed to Azure, you have the option to add an Azure ID. Your credentials will be verified against Azure to ensure the Azure IDs associated to your account are available.
1. Under "Resources", select the organizations and/or repositories that will be a part of the cost center.

   >[!NOTE] An organization or repository can only be assigned to one cost center at a time.

1. Click **Create cost center**.

## Adding a budget to a cost center

After you create a cost center, you can add a monthly budget and receive alerts from the cost center to monitor your spending and usage. See "[AUTOTITLE](/billing/using-the-enhanced-billing-platform-for-enterprises/preventing-overspending)."

## Viewing cost center usage

You can view the usage of your cost centers and download the usage data for further analysis. See "[AUTOTITLE](/billing/using-the-enhanced-billing-platform-for-enterprises/gathering-insights-on-your-spending)."

## Viewing, editing, and deleting cost centers

You can view, edit, and delete cost centers to manage your business units effectively.

To add or remove members from a cost center, you can use the API. See "[AUTOTITLE](/rest/enterprise-admin/billing)."

>[!NOTE] For {% data variables.product.prodname_copilot_short %} seats, {% data variables.product.company_short %} checks if a user is part of a cost center. If they are, their usage is shown under that cost center. If not, their usage is displayed under their organization. In this case, costs are assumed to belong to the first organization the user was assigned to.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}
1. Click **Cost centers**.
1. Select {% octicon "kebab-horizontal" aria-label="Cost center dropdown" %} to the right of a cost center, then click **View details**, **Edit**, or **Delete**.
1. Follow the prompts.

### Effects of removing a member from a cost center

If you add a member to a cost center, any usage accrued (for example, a seat) will immediately start being billed against the cost center. If you remove a member from a cost center, any usage from that point will be billed against the enterprise. For example:

* On May 1st, an enterprise has three {% data variables.product.prodname_copilot_short %} users. The charges for all three users ($39 each) are billed to the enterprise.
* On May 10th, you create two cost centers: Cost Center 1 and Cost Center 2. User A and User B are assigned to Cost Center 1, and User C to Cost Center 2. Future charges for Users A and B go to Cost Center 1, and for User C to Cost Center 2.
* On May 20th, you remove User A from Cost Center 1. From then on, User A's charges are billed to the enterprise, while User B's charges remain with Cost Center 1, and User C's charges with Cost Center 2.

The "{% data variables.product.prodname_copilot_short %} Seats Used" tile on the "Overview" page will show fractional usage instead of whole numbers.

### Effects of deleting a cost center

If a cost center is deleted, future usage of its resources will be charged to the enterprise. Usage before deletion is billed to the cost center until the end of the billing cycle.

You can still view the cost center even after you delete it. To do so, select the "Deleted" tab on the cost center page.

## Further reading

* "[AUTOTITLE](/rest/enterprise-admin/billing)"
