---
title: GitHub のプランをアップグレードする
intro: '{% data variables.product.product_location %}のいずれの種類のアカウントでも、いつでもプランをアップグレードできます。'
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

## プランのアップグレードについて

{% data reusables.accounts.accounts-billed-separately %}

アカウントのプランをアップグレードすると、そのアカウントで利用できる有料機能が変更され、使用している他のアカウントでは変更されません。

## 個人アカウントのプランをアップグレードする

個人アカウントを{% data variables.product.prodname_free_user %}から{% data variables.product.prodname_pro %}にアップグレードして、個人アカウントが所有するプライベートリポジトリで高度なコードレビューツールを使えるようにすることができます。 個人アカウントをアップグレードしても、管理するOrganizationや、それらのOrganizationが所有するリポジトリには影響しません。 {% data reusables.gated-features.more-info %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
1. "Current plan（現在のプラン）"の隣で**Upgrade（アップグレード）**をクリックしてください。 ![アップグレードボタン](/assets/images/help/billing/settings_billing_user_upgrade.png)
2. "Compare plans（プランの比較）"ページの"Pro（プロ）"の下で、**Upgrade to Pro（プロにアップグレード）**をクリックしてください。
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.show-plan-details %}
{% data reusables.dotcom_billing.enter-billing-info %}
{% data reusables.dotcom_billing.enter-payment-info %}
{% data reusables.dotcom_billing.finish_upgrade %}

## Organizationのプランの管理

Organizationのプランを様々な製品にアップグレードしたり、既存の製品にシートを追加したり、リポジトリごとの価格付けからユーザごとの価格付けに切り替えたりできます。

### Organization のプランをアップグレードする

Organization を {% data variables.product.prodname_free_team %} から {% data variables.product.prodname_team %} にアップグレードすると、チーム用の高度なコラボレーションおよび管理ツールにアクセスできます。また、{% data variables.product.prodname_ghe_cloud %} にアップグレードすると、セキュリティ、コンプライアンス、およびデプロイメントの管理を強化できます。 Organizationをアップグレードしても、個人アカウントや個人アカウントが所有するリポジトリには影響しません。 {% data reusables.gated-features.more-info-org-products %}

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

Organization を {% data variables.product.prodname_ghe_cloud %} にアップグレードした場合は、ここで Organization の ID とアクセス管理を設定できます。 詳しい情報については{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %}ドキュメンテーション中の{% else %}{% endif %}「[OrganizationでのSAMLシングルサインオンの管理](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization)」を参照してください。

{% data variables.product.prodname_ghe_cloud %} で Enterprise アカウントを使いたい場合は、{% data variables.contact.contact_enterprise_sales %} に連絡してください。 詳しい情報については{% ifversion fpt %}、{% data variables.product.prodname_ghe_cloud %}ドキュメンテーションの{% else %}、{% endif %}「[Enterpriseアカウントについて](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)を参照してください。

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
