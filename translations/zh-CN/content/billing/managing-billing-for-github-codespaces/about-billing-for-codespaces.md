---
title: 关于代码空间的计费
shortTitle: 关于计费
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

{% data variables.product.prodname_codespaces %} usage is billed for all accounts on the Team and Enterprise plans, and does not include any entitlements. Individual accounts are not currently billed for {% data variables.product.prodname_codespaces %} usage.

{% data variables.product.prodname_codespaces %} usage is billed according to the units of measure in the following table:

| 产品                 | SKU    | Unit of measure | Price |
| ------------------ | ------ | --------------- | ----- |
| Codespaces Compute | 2 个内核  | 1 hour          | $0.18 |
|                    | 4 个内核  | 1 hour          | $0.36 |
|                    | 8 个内核  | 1 hour          | $0.72 |
|                    | 16 个内核 | 1 hour          | $1.44 |
|                    | 32 个内核 | 1 hour          | $2.88 |
| Codespaces Storage | 存储器    | 1 GB-month      | $0.07 |

## 关于 {% data variables.product.prodname_codespaces %} 的计费

{% data reusables.codespaces.codespaces-billing %}

您的 {% data variables.product.prodname_codespaces %} 使用将共用帐户的现有计费日期、付款方式和收据。 {% data reusables.dotcom_billing.view-all-subscriptions %}

{% ifversion ghec %}
If you purchased {% data variables.product.prodname_enterprise %} through a Microsoft Enterprise Agreement, you can connect your Azure Subscription ID to your enterprise account to enable and pay for {% data variables.product.prodname_codespaces %} usage. 更多信息请参阅“[将 Azure 订阅连接到您的企业](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”。
{% endif %}

{% data reusables.dotcom_billing.pricing_cal %}

## Setting a spending limit

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

有关管理和更改帐户支出限制的信息，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”。

{% data reusables.codespaces.exporting-changes %}

## Limiting the choice of machine types

The type of machine a user chooses when they create a codespace affects the per-minute charge for that codespace, as shown above.

Organization owners can create a policy to restrict the machine types that are available to users. For more information, see "[Restricting access to machine types](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

## How billing is handled for forked repositories

{% data variables.product.prodname_codespaces %} can only be used in organizations where a billable owner has been defined. To incur charges to the organization, the user must be a member or collaborator, otherwise they cannot create a codespace.

For example, a user in a private organization can fork a repository within that organization, and can subsequently use a codespace billed to the organization; this is because the organization is the owner of the parent repository, which can remove the user's access, the forked repository, and the codespace.

## How billing is handled when a repository is transferred

Usage is billed and reported on every hour. As such, you pay for any usage when a repository is within your organization. When a repository is transferred out of your organization, any codespaces in that repository are removed as part of the transfer process.

## What happens when users are removed

If a user is removed from an organization or repository, their codespaces are automatically deleted. 
