---
title: About billing for Codespaces
shortTitle: About billing
intro: 'View pricing and see how to manage {% data variables.product.prodname_codespaces %} billing for your organization.'
permissions: 'To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
type: overview
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
  - Billing
---

{% data reusables.codespaces.codespaces-trial-period %}

## {% data variables.product.prodname_codespaces %} pricing

{% data variables.product.prodname_codespaces %} usage is billed for all accounts on the Team and Enterprise plans, and does not include any entitlements. Individual accounts are not currently billed for {% data variables.product.prodname_codespaces %} usage. 

{% data variables.product.prodname_codespaces %} usage is billed according to the units of measure in the following table:

 Product              | SKU      | Unit of measure | Price |
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

If you purchased {% data variables.product.prodname_enterprise %} through a Microsoft Enterprise Agreement, you can connect your Azure Subscription ID to your enterprise account to enable and pay for {% data variables.product.prodname_codespaces %} usage. For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."

## Setting a spending limit

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

For information on managing and changing your account's spending limit, see "[Managing your spending limit for {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)."

## How billing is handled for forked repositories

{% data variables.product.prodname_codespaces %} can only be used in organizations where a billable owner has been defined. To incur charges to the organization, the user must be a member or collaborator, otherwise they cannot create a codespace. 

For example, a user in a private organization can fork a repository within that organization, and can subsequently use a codespace billed to the organization; this is because the organization is the owner of the parent repository, which can remove the user's access, the forked repository, and the codespace.
  
## How billing is handled when a repository is transferred

Usage is billed and reported on every hour. As such, you pay for any usage when a repository is within your organization. When a repository is transferred out of your organization, any codespaces in that repository are removed as part of the transfer process.

## What happens when users are removed

If a user is removed from an organization or repository, their codespaces are automatically deleted. 
