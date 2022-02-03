---
title: GitHub のプランをアップグレードする
intro: 'You can upgrade the subscription for any type of account on {% data variables.product.product_location %} at any time.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-your-github-subscription
  - /articles/upgrading-your-personal-account-s-billing-plan
  - /articles/upgrading-your-personal-account
  - /articles/upgrading-your-personal-account-from-free-to-a-paid-account
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-a-credit-card
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-paypal
  - /articles/500-error-while-upgrading
  - /articles/upgrading-your-organization-s-billing-plan
  - /articles/changing-your-organization-billing-plan
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-a-credit-card
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-paypal
  - /articles/upgrading-your-organization-account
  - /articles/switching-from-per-repository-to-per-user-pricing
  - /articles/adding-seats-to-your-organization
  - /articles/upgrading-your-github-billing-plan
  - /articles/upgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/upgrading-your-github-subscription
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Troubleshooting
  - Upgrades
  - User account
shortTitle: サブスクリプションのアップグレード
---

## About subscription upgrades

{% data reusables.accounts.accounts-billed-separately %}

When you upgrade the subscription for an account, the upgrade changes the paid features available for that account only, and not any other accounts you use.

## 個人アカウントのプランをアップグレードする

You can upgrade your personal account from {% data variables.product.prodname_free_user %} to {% data variables.product.prodname_pro %} to get advanced code review tools on private repositories owned by your user account. Upgrading your personal account does not affect any organizations you may manage or repositories owned by those organizations. {% data reusables.gated-features.more-info %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
1. "Current plan（現在のプラン）"の隣で**Upgrade（アップグレード）**をクリックしてください。 ![アップグレードボタン](/assets/images/help/billing/settings_billing_user_upgrade.png)
2. "Compare plans（プランの比較）"ページの"Pro（プロ）"の下で、**Upgrade to Pro（プロにアップグレード）**をクリックしてください。
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.show-plan-details %}
{% data reusables.dotcom_billing.enter-billing-info %}
{% data reusables.dotcom_billing.enter-payment-info %}
{% data reusables.dotcom_billing.finish_upgrade %}

## Managing your organization's subscription

You can upgrade your organization's subscription to a different product, add seats to your existing product, or switch from per-repository to per-user pricing.

### Organization のプランをアップグレードする

Organization を {% data variables.product.prodname_free_team %} から {% data variables.product.prodname_team %} にアップグレードすると、チーム用の高度なコラボレーションおよび管理ツールにアクセスできます。また、{% data variables.product.prodname_ghe_cloud %} にアップグレードすると、セキュリティ、コンプライアンス、およびデプロイメントの管理を強化できます。 Upgrading an organization does not affect your personal account or repositories owned by your personal account. {% data reusables.gated-features.more-info-org-products %}

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.upgrade_org %}
{% data reusables.dotcom_billing.choose_org_plan %}
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.show-plan-details %}
{% data reusables.dotcom_billing.enter-payment-info %}
{% data reusables.dotcom_billing.owned_by_business %}
{% data reusables.dotcom_billing.finish_upgrade %}

### {% data variables.product.prodname_ghe_cloud %} を使用する Organization の次のステップ

Organization を {% data variables.product.prodname_ghe_cloud %} にアップグレードした場合は、ここで Organization の ID とアクセス管理を設定できます。 For more information, see "[Managing SAML single sign-on for your organization](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

{% data variables.product.prodname_ghe_cloud %} で Enterprise アカウントを使いたい場合は、{% data variables.contact.contact_enterprise_sales %} に連絡してください。 For more information, see "[About enterprise accounts](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

### Organization にシートを追加する

{% data variables.product.prodname_team %} Organization のプライベートリポジトリにアクセスできるユーザを追加したい場合、いつでもシートを買い足すことができます。

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

### Organization をリポジトリごとからユーザごとに切り替える

{% data reusables.dotcom_billing.switch-legacy-billing %} 詳細は「[ユーザごとの価格付けについて](/articles/about-per-user-pricing)」を参照してください。

{% data reusables.organizations.billing-settings %}
5. プラン名の右にある [**Edit**] ドロップダウンメニューで、[**Edit plan**] を選択します。 ![[Edit] ドロップダウンメニュー](/assets/images/help/billing/per-user-upgrade-button.png)
6. [Advanced tools for teams] の右にある [**Upgrade now**] をクリックします。 ![[Upgrade now] ボタン](/assets/images/help/billing/per-user-upgrade-now-button.png)
{% data reusables.dotcom_billing.choose_org_plan %}
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.owned_by_business %}
{% data reusables.dotcom_billing.finish_upgrade %}

## アップグレード時の 500 エラーのトラブルシューティング

{% data reusables.dotcom_billing.500-error %}

## 参考リンク

- "[{% data variables.product.prodname_dotcom %}の製品](/articles/github-s-products)"
- [アップグレードあるいはダウングレードの支払いプロセスへの影響は？](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)
- 「[{% data variables.product.prodname_dotcom %} の支払いについて](/articles/about-billing-on-github)」
