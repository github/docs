---
title: Charging business units
intro: 'Learn how to create and use cost centers to manage business units at scale.'
versions:
  ghec: '*'
redirect_from:
  - /billing/using-the-enhanced-billing-platform-for-enterprises/charging-business-units
type: how_to
topics:
  - Enterprise
product: '{% data reusables.billing.enhanced-billing-platform-product %}'
shortTitle: Charge business units
---

To drive accountability and control costs, the new billing platform lets you create cost centers. A cost center manages expenses without generating revenue. You can create cost centers and assign users, organizations, and repositories to them, and set budgets. This enhances spending control and resource allocation.

If your account is billed to Azure, you will have the option to add an Azure subscription ID. Cost centers allows for multiple Azure subscription IDs so that different business units, within an enterprise, can directly pay for their usage.

## Creating a cost center

Create cost centers to monitor and manage expenses for specific organizations or repositories. Multiple organizations, repositories, and users can be assigned to one cost center.

When you create a cost center, you can add **organizations** or **repositories**—which track spending for usage-based products like {% data variables.product.prodname_actions %}—via the user interface. To track spending for license-based products like {% data variables.product.prodname_copilot %}, you will need to add **users** to the cost center via the API after the cost center has been created. For guidance by product, see [Allocating spending to a cost center](#allocating-spending-to-a-cost-center).

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}
1. Click **Cost centers**.
1. Click **New cost center** in the upper-right corner.
1. In the text box under "Name", enter a name for your cost center.
1. If your account is billed to Azure, you have the option to add an Azure ID. Your credentials will be verified against Azure to ensure the Azure IDs associated to your account are available.
1. If the cost center will track spending for usage-based products like {% data variables.product.prodname_actions %}, under "Resources", select the organizations and/or repositories that will be a part of the cost center.

   >[!NOTE] An organization or repository can only be assigned to one cost center at a time.

1. Click **Create cost center**.

## Allocating spending to a cost center

To allocate spending to a cost center, you add repositories, organizations, or users to the cost center. Any usage that is not assigned to a specific cost center is categorized as "Enterprise Only" spending on your enterprise's "Usage" page.

* For **usage-based** products like {% data variables.product.prodname_actions %}, cost centers are charged based on the repositories or organizations that you add. You can add these to a cost center in the UI. See [Creating a cost center](#creating-a-cost-center).
* For **license-based** products like {% data variables.product.prodname_copilot %}, cost centers are charged based on the users that you add.
  * You must add users to a cost center with the API. See [AUTOTITLE](/rest/enterprise-admin/billing#add-users-to-a-cost-center). Note that the API currently supports adding or removing up to **50** resources in a single operation.
  * If a licensed user isn't assigned to cost center, costs either default to "Enterprise Only" spending or are assigned to a cost center based on the user's organization membership. This depends on the product. For a detailed explanation, see [Cost center allocation for license-based products](#cost-center-allocation-for-license-based-products).

### Breakdown by product

| Product | A cost center is charged if it contains this resource |
| ------- | ----------------------------------------------------- |
| {% data variables.product.prodname_actions %} | The repository or organization where the workflow runs. |
| {% data variables.product.prodname_github_codespaces %} | The repository or organization where the codespace is created. |
| {% data variables.product.prodname_copilot %} | The user who receives the license (priority), or the organization where they are a member. |
| Git Large File Storage | The repository or organization where Git LFS is used. |
| {% data variables.product.prodname_GH_advanced_security %} | The user who receives the license. |
| {% data variables.product.prodname_enterprise %} | The user who receives the license. |
| {% data variables.product.prodname_registry %} | The repository or organization that owns the package. |

## Adding a budget to a cost center

After you create a cost center, you can add a monthly budget and receive alerts from the cost center to monitor your spending and usage. See [AUTOTITLE](/billing/using-the-enhanced-billing-platform-for-enterprises/preventing-overspending).

## Viewing cost center usage

You can view the usage of your cost centers and download the usage data for further analysis. See [AUTOTITLE](/billing/using-the-enhanced-billing-platform-for-enterprises/gathering-insights-on-your-spending).

## Viewing, editing, and deleting cost centers

You can view, edit, and delete cost centers to manage your business units effectively.

To add or remove members from a cost center, you can use the API. See [AUTOTITLE](/rest/enterprise-admin/billing).

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}
1. Click **Cost centers**.
1. Select {% octicon "kebab-horizontal" aria-label="Cost center dropdown" %} to the right of a cost center, then click **View details**, **Edit**, or **Delete**.
1. Follow the prompts.

### Effects of removing a member from a cost center

If you add a member to a cost center, any usage accrued (for example, a {% ifversion enterprise-licensing-language %}license{% else %}seat{% endif %}) will immediately start being billed against the cost center. If you remove a member from a cost center, any usage from that point will be billed against the enterprise. For example:

* On May 1st, an enterprise has three {% data variables.product.prodname_copilot_short %} users. The charges for all three users ($39 each) are billed to the enterprise.
* On May 10th, you create two cost centers: Cost Center 1 and Cost Center 2. User A and User B are assigned to Cost Center 1, and User C to Cost Center 2. Future charges for Users A and B go to Cost Center 1, and for User C to Cost Center 2.
* On May 20th, you remove User A from Cost Center 1. From then on, User A's charges are billed to the enterprise, while User B's charges remain with Cost Center 1, and User C's charges with Cost Center 2.

The "{% data variables.product.prodname_copilot_short %} Seats Used" tile on the "Overview" page will show fractional usage instead of whole numbers.

### Effects of deleting a cost center

If a cost center is deleted, future usage of its resources will be charged to the enterprise. Usage before deletion is billed to the cost center until the end of the billing cycle.

You can still view the cost center even after you delete it. To do so, select the "Deleted" tab on the cost center page.

## Cost center allocation for license-based products

To ensure your cost centers reflect spending as intended, it's important to understand how spending is allocated to cost centers for license-based products like {% data variables.product.prodname_copilot %}, and how changes are reflected in your bill.

### Cost center allocation for {% data variables.product.prodname_copilot %}

* If a user belongs to a cost center, all charges associated with the user are billed to the cost center.
* If a user does not belong to any cost center, usage is billed to the organization where the user receives their {% data variables.product.prodname_copilot_short %} license. If _that organization_ is part of a cost center, the charges are billed to that cost center.
* If the user receives access to {% data variables.product.prodname_copilot_short %} through **multiple organizations**, one of the organizations is chosen at random each month to be billed, and the cost center that contains the organization is charged accordingly. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-subscription-for-your-enterprise/about-billing-for-github-copilot-in-your-enterprise#about-seat-assignment-for-copilot-in-your-enterprise),

### Cost center allocation for {% data variables.product.prodname_GH_advanced_security %}

* If a user belongs to a cost center, all charges associated with the user are billed to the cost center.
* If a user does not belong to any cost center, usage is charged to the enterprise's default payment method and grouped under "Enterprise Only" spending on the usage page.

### Cost center allocation for {% data variables.product.prodname_enterprise %}

* If a user belongs to a cost center, all charges associated with that user are billed to the cost center.
* If a user does not belong to any cost center, usage is billed to the enterprise's default payment method and grouped under "Enterprise Only" spending on the usage page.

### How changes are reflected in cost centers

Adding or removing users from a cost center affects billing for license-based products in different ways.

* For {% data variables.product.prodname_copilot %}: A change to add or remove a user from a cost center is reflected the **next day**.
* For {% data variables.product.prodname_GH_advanced_security %}: A change to add or remove a user from a cost center is reflected in the **next billing cycle**.
* For {% data variables.product.prodname_enterprise %}: A change to add or remove a user from a cost center is reflected the **next day**.

If a user is already part of a cost center and _then_ receives a license, the license is immediately billed to the cost center.

If a user who already has a license is added to a cost center, the license will be billed to the cost center from the next billing cycle.

## Example for license-based products

The following example illustrates how usage is assigned to cost centers for license-based products. Based on four licensed users, their organization membership, and how cost centers are set up, you will see how usage is allocated to cost centers.

### The users

There are four users, each a member of one or more organizations in the enterprise.

| User | Organization membership |
| ---- | ----------------------- |
| `user-1` | `org-1`, `org-2` |
| `user-2` | `org-1` |
| `user-3` | `org-1` |
| `user-4` | `org-1`, `org-2` |

All users have a license for **{% data variables.product.prodname_copilot %}** and **{% data variables.product.prodname_enterprise %}** (GHE).

**{% data variables.product.prodname_GH_advanced_security %}** (GHAS) is enabled in `org-1`, where all users are active committers.

### The cost centers

There are two cost centers in the enterprise, each with different users or organizations assigned.

| Cost center | Assigned resources |
| ---- | ----------------------- |
| Cost Center A | `user-1`, `user-3` |
| Cost Center B | `org-1` |

`user-2`, `user-4`, and `org-2` are **not** assigned to any cost center.

### How usage is allocated

The following table illustrates how spending for each user is allocated to a cost center based on their membership of an organization or cost center. Any usage not assigned to a cost center is categorized as "Enterprise Only" spending.

{% rowheaders %}

|             | Copilot charges | GHAS charges | GHE charges | Explanation |
| ----------- | --------------- | ------------ | ----------- | ----------- |
| Cost Center A | `user-1`, `user-3` | `user-1`, `user-3` | `user-1`, `user-3` | These users are assigned directly to the cost center. |
| Cost Center B | `user-2`, `user-4` | {% octicon "dash" aria-label="Not applicable" %} | {% octicon "dash" aria-label="Not applicable" %} | These users aren't directly assigned to a cost center, so Copilot charges are assigned based on organization membership, whereas GHAS and GHE default to enterprise spending.
| Enterprise Only (default) | {% octicon "dash" aria-label="Not applicable" %} | `user-2`, `user-4` | `user-2`, `user-4` | These users aren't directly assigned to a cost center, so GHAS and GHE default to enterprise spending. |

{% endrowheaders %}

## Further reading

* [AUTOTITLE](/rest/enterprise-admin/billing)
