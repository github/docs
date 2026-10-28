---
title: Managing cloud sandboxes for your organization or enterprise
shortTitle: Manage cloud sandboxes
allowTitleToDifferFromFilename: true
intro: 'Decide which members can use {% data variables.product.prodname_copilot_short %} features that run in cloud sandboxes, and keep cloud sandbox spending under control.'
permissions: Enterprise owners and organization owners
redirect_from:
  - /copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-and-local-sandboxes-for-your-organization
versions:
  feature: copilot
contentType: how-tos
category:
  - Manage cloud and local sandboxes for your organization
---

## About managing cloud sandboxes

Cloud sandboxes don't have their own access setting, and you can't opt out of them separately from {% data variables.product.prodname_copilot_short %} policies. {% data variables.product.prodname_copilot_short %} uses a cloud sandbox when a member starts a cloud session from any {% data variables.product.prodname_copilot_short %} client. To manage cloud sandboxes, you control access to those features with {% data variables.product.prodname_copilot_short %} policies, and you control spending with budgets.

For more information about cloud sandboxes, see [AUTOTITLE](/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes).

## Controlling who can use cloud sandboxes

If members get {% data variables.product.prodname_copilot_short %} through your organization or enterprise, the **{% data variables.copilot.copilot_in_the_cloud_short %}** policy controls whether they can run {% data variables.product.prodname_copilot_short %} agents in a cloud environment that {% data variables.product.github %} manages, from any {% data variables.product.prodname_copilot_short %} client. The policy is enabled by default. When the policy is disabled, {% data variables.product.prodname_copilot_short %} can't create cloud sandboxes for those members.

* To set the policy for an organization, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-copilot-in-the-cloud).
* To set the policy for an enterprise, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/manage-copilot-in-the-cloud).

## Controlling spending on cloud sandboxes

To monitor and limit cloud sandbox spending, set a budget for cloud sandbox usage. You can create a budget for all cloud sandbox usage or for a specific cloud sandbox SKU. See [AUTOTITLE](/billing/concepts/product-billing/cloud-and-local-sandboxes#managing-your-budget-for-cloud-sandboxes).
