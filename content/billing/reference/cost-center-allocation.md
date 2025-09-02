---
title: Cost center allocation for different products
intro: 'Learn how your spending is assigned to cost centers for licensed and metered products.'
shortTitle: Cost center allocation
versions:
  feature: enhanced-billing-platform
topics:
  - Billing
  - Enterprise
  - Team
contentType: reference
product: '{% data variables.product.prodname_ghe_cloud %}'
---

This article contains reference information for how spending is assigned to cost centers. To create and manage cost centers, see [AUTOTITLE](/billing/tutorials/use-cost-centers).

## Overview

{% data reusables.billing.cost-center-allocation %}

## Breakdown by product

| Product | A cost center is charged if it contains this resource |
| ------- | ----------------------------------------------------- |
| {% data variables.product.prodname_actions %} | The repository or organization where the workflow runs. |
| {% data variables.product.prodname_github_codespaces %} | The repository or organization where the codespace is created. |
| {% data variables.product.prodname_copilot %} | The user who receives the license (priority), or the organization that is billed for the {% data variables.product.prodname_copilot_short %} license. |
| Git Large File Storage | The repository or organization where Git LFS is used. |
| {% data variables.product.prodname_GH_cs_and_sp %} | The user who receives the license. |
| {% data variables.product.prodname_enterprise %} | The user who receives the license. |
| {% data variables.product.prodname_registry %} | The repository or organization that owns the package. |

## Details for license-based products

To ensure your cost centers reflect spending as intended, it's important to understand how spending is allocated to cost centers for license-based products like {% data variables.product.prodname_copilot %}, and how changes are reflected in your bill.

### {% data variables.product.prodname_copilot %}

* If a user belongs to a cost center, all usage associated with the user is charged to the cost center.
* If a user does not belong to any cost center but the organization that is billed for the {% data variables.product.prodname_copilot_short %} license does, all usage associated with the user is charged to that cost center.
* If the user receives access to {% data variables.product.prodname_copilot_short %} through **multiple organizations**, only one of the organizations is billed, and any cost center containing that organization is charged accordingly. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-subscription-for-your-enterprise/about-billing-for-github-copilot-in-your-enterprise#about-seat-assignment-for-copilot-in-your-enterprise).

### {% data variables.product.prodname_GH_cs_and_sp %}

* If a user belongs to a cost center, licenses consumed by the user are charged to the cost center.
* If a user does not belong to any cost center, licenses consumed by the user are charged to the enterprise.

### {% data variables.product.prodname_enterprise %}

* If a user belongs to a cost center, the license consumed by the user is charged to the cost center.
* If a user does not belong to any cost center, the license consumed by the user is charged to the enterprise.

## Understanding cost center usage and attribution

To view usage by cost center, go to the "Usage" page and group or filter by cost center. Any usage that is not assigned to a specific cost center is categorized as "Enterprise Only" when grouping by cost center. See [AUTOTITLE](/billing/tutorials/gather-insights).

To understand how usage for a specific resource is being attributed to cost centers, request a detailed usage report and refer to the `cost_center_name` column. See [AUTOTITLE](/billing/reference/usage-reports).

## Effects of changes to cost centers

You can change the included resources of a cost center or delete a cost center at any time. This affects the cost center in different ways.

### Deleting a cost center

If a cost center is deleted, future usage of its resources will be charged to the enterprise. Usage before deletion is charged to the cost center.

You can still view the cost center even after you delete it. To do so, select the "Deleted" tab on the cost center page.

### Adding or removing a member

If you add a member to a cost center, any future usage will be charged to the cost center. If you remove a member from a cost center, any future usage will be charged to the enterprise. For example:

| Date | Scenario | Effect |
| ---- | -------- | ------ |
| May 1 | An enterprise has three {% data variables.product.prodname_copilot_short %} users. | The charges for all three users are charged to the enterprise. |
| May 10 | You create two cost centers: Cost Center 1 with User A and User B as members, and Cost Center 2 with User C. | Future charges for Users A and B are charged to Cost Center 1, and for User C to Cost Center 2. |
| May 20 | You remove User A from Cost Center 1. | Future charges for User A are charged to the enterprise. |

### Deleting a user from the enterprise

Removing a user from an enterprise will not remove the user from the cost center. This ensures that the remaining usage attributable to the user will be allocated to the cost center.

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

All users have a license for **{% data variables.product.prodname_copilot %}** provided by `org-1` and **{% data variables.product.prodname_enterprise %}** (GHE).

**{% data variables.product.prodname_GH_secret_protection %}** (GHSP) is enabled in `org-1`, where all users are active committers.

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

|             | Copilot charges | GHSP charges | GHE charges | Explanation |
| ----------- | --------------- | ------------ | ----------- | ----------- |
| Cost Center A | `user-1`, `user-3` | `user-1`, `user-3` | `user-1`, `user-3` | These users are assigned directly to the cost center. |
| Cost Center B | `user-2`, `user-4` | {% octicon "dash" aria-label="Not applicable" %} | {% octicon "dash" aria-label="Not applicable" %} | These users aren't directly assigned to a cost center, so Copilot charges are assigned based on organization membership, whereas GHSP and GHE default to enterprise spending. |
| Enterprise Only (default) | {% octicon "dash" aria-label="Not applicable" %} | `user-2`, `user-4` | `user-2`, `user-4` | These users aren't directly assigned to a cost center, so GHSP and GHE default to enterprise spending. |

{% endrowheaders %}
