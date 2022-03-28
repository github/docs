---
title: Codespaces の支払いについて
shortTitle: 支払いについて
intro: '価格を見て、Organizationでの{% data variables.product.prodname_codespaces %}の支払いの管理方法を確認してください。'
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

## {% data variables.product.prodname_codespaces %}の価格

{% data variables.product.prodname_codespaces %} usage is billed for all accounts on the Team and Enterprise plans, and does not include any entitlements. 現在の処、個人のアカウントは{% data variables.product.prodname_codespaces %}の利用に対して課金されません。

{% data variables.product.prodname_codespaces %}の利用については、以下の表に示す計測単位に従って課金されます。

| 製品                 | SKU   | 計測単位  | 価格    |
| ------------------ | ----- | ----- | ----- |
| Codespaces Compute | 2コア   | 1時間   | $0.18 |
|                    | 4コア   | 1時間   | $0.36 |
|                    | 8コア   | 1時間   | $0.72 |
|                    | 16コア  | 1時間   | $1.44 |
|                    | 32コア  | 1時間   | $2.88 |
| Codespaces Storage | ストレージ | 1GB-月 | $0.07 |

## {% data variables.product.prodname_codespaces %}の支払いについて

{% data reusables.codespaces.codespaces-billing %}

{% data variables.product.prodname_codespaces %} の利用については、アカウントの既存の請求日、支払い方法、領収書が共有されます。 {% data reusables.dotcom_billing.view-all-subscriptions %}

{% ifversion ghec %}
Microsoft Enterprise Agreement を通じて {% data variables.product.prodname_enterprise %} を購入した場合、Azure サブスクリプションID をEnterpriseアカウントに接続して、 {% data variables.product.prodname_codespaces %} の使用を有効にして支払うことができます。 詳しい情報については、「[Azure サブスクリプションを Enterprise に接続する](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)」を参照してください。
{% endif %}

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_codespaces %}

### {% data variables.product.prodname_codespaces %}プレビルドに対する支払い

{% data reusables.codespaces.prebuilds-beta-note %}

{% data reusables.codespaces.billing-for-prebuilds %}

## 利用限度の設定

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

アカウントの利用上限の管理と変更については、「[{% data variables.product.prodname_codespaces %} の利用上限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)」を参照してください。

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
