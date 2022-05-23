---
title: About billing for Codespaces
shortTitle: About billing
intro: 'View pricing and see how to manage {% data variables.product.prodname_codespaces %} billing for your organization.'
permissions: 'To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
  - Billing
---

## {% data variables.product.prodname_codespaces %} pricing

{% data variables.product.prodname_codespaces %} usage is billed for all organization and enterprise accounts on {% data variables.product.prodname_team %} and {% data variables.product.prodname_enterprise %}, which do not include any free minutes or storage. Personal accounts are not currently billed for {% data variables.product.prodname_codespaces %} usage. 

{% data variables.product.prodname_codespaces %} usage is billed according to the units of measure in the following table:

| Product             | SKU      | Unit of measure | Price |
| ------------------- | -------- | --------------- | ----- |
| Codespaces Compute  |  2 core  | 1 hour          | $0.18 |
|                     |  4 core  | 1 hour          | $0.36 |
|                     |  8 core  | 1 hour          | $0.72 |
|                     |  16 core | 1 hour          | $1.44 |
|                     |  32 core | 1 hour          | $2.88 |
| Codespaces Storage  |  Storage | 1 GB-month      | $0.07 |

## About billing for {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.codespaces-billing %}

Your {% data variables.product.prodname_codespaces %} usage shares your account's existing billing date, payment method, and receipt. {% data reusables.dotcom_billing.view-all-subscriptions %}

{% ifversion ghec %}
If you purchased {% data variables.product.prodname_enterprise %} through a Microsoft Enterprise Agreement, you can connect your Azure Subscription ID to your enterprise account to enable and pay for {% data variables.product.prodname_codespaces %} usage. For more information, see "[Connecting an Azure subscription to your enterprise](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)."
{% endif %}

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_codespaces %}

### Billing for {% data variables.product.prodname_codespaces %} prebuilds

{% data reusables.codespaces.prebuilds-beta-note %}

{% data reusables.codespaces.billing-for-prebuilds %} 

## Setting a spending limit

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

For information on managing and changing your account's spending limit, see "[Managing your spending limit for {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)."

{% data reusables.codespaces.exporting-changes %}

## Limiting the choice of machine types

By default the machine type with the lowest valid resources is used when a codespace is created. However, users may be able to choose a machine type with more resources. They can do this either when they create a codespace, or they can change the machine type of an existing codespace. For more information, see "[Creating a codespace"](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)" and "[Changing the machine type for your codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)."

If a machine type that has more resources is chosen, this will affect the per-minute charge for that codespace, as shown above. 

Organization owners can create a policy to restrict the machine types that are available to users. For more information, see "[Restricting access to machine types](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

## How billing is handled for forked repositories

{% data variables.product.prodname_codespaces %} can only be used in organizations where a billable owner has been defined. To incur charges to the organization, the user must be a member or collaborator, otherwise they cannot create a codespace. 

For example, a user in a private organization can fork a repository within that organization, and can subsequently use a codespace billed to the organization; this is because the organization is the owner of the parent repository, which can remove the user's access, the forked repository, and the codespace.
  
## How billing is handled when a repository is transferred

Usage is billed and reported on every hour. As such, you pay for any usage when a repository is within your organization. When a repository is transferred out of your organization, any codespaces in that repository are removed as part of the transfer process.

## What happens when users are removed

If a user is removed from an organization or repository, their codespaces are automatically deleted. 
