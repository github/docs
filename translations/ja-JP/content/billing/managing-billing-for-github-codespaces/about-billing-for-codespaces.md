---
title: Codespaces の支払いについて
shortTitle: 支払いについて
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

| 製品                 | SKU   | Unit of measure | Price |
| ------------------ | ----- | --------------- | ----- |
| Codespaces Compute | 2コア   | 1 hour          | $0.18 |
|                    | 4コア   | 1 hour          | $0.36 |
|                    | 8コア   | 1 hour          | $0.72 |
|                    | 16コア  | 1 hour          | $1.44 |
|                    | 32コア  | 1 hour          | $2.88 |
| Codespaces Storage | ストレージ | 1 GB-month      | $0.07 |

## {% data variables.product.prodname_codespaces %}の支払いについて

{% data reusables.codespaces.codespaces-billing %}

{% data variables.product.prodname_codespaces %} の利用については、アカウントの既存の請求日、支払い方法、領収書が共有されます。 {% data reusables.dotcom_billing.view-all-subscriptions %}

{% ifversion ghec %}
If you purchased {% data variables.product.prodname_enterprise %} through a Microsoft Enterprise Agreement, you can connect your Azure Subscription ID to your enterprise account to enable and pay for {% data variables.product.prodname_codespaces %} usage. 詳しい情報については、「[Azure サブスクリプションを Enterprise に接続する](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)」を参照してください。
{% endif %}

{% data reusables.dotcom_billing.pricing_cal %}

## Setting a spending limit

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

アカウントの利用上限の管理と変更については、「[{% data variables.product.prodname_codespaces %} の利用上限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)」を参照してください。

{% data reusables.codespaces.exporting-changes %}

## How billing is handled for forked repositories

{% data variables.product.prodname_codespaces %} can only be used in organizations where a billable owner has been defined. To incur charges to the organization, the user must be a member or collaborator, otherwise they cannot create a codespace.

For example, a user in a private organization can fork a repository within that organization, and can subsequently use a codespace billed to the organization; this is because the organization is the owner of the parent repository, which can remove the user's access, the forked repository, and the codespace.

## How billing is handled when a repository is transferred

Usage is billed and reported on every hour. As such, you pay for any usage when a repository is within your organization. When a repository is transferred out of your organization, any codespaces in that repository are removed as part of the transfer process.

## What happens when users are removed

If a user is removed from an organization or repository, their codespaces are automatically deleted. 
