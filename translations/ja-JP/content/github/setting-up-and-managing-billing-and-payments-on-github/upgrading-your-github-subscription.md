---
title: GitHub のプランをアップグレードする
intro: 'どのタイプの {{ site.data.variables.product.product_name }} アカウントのプランもいつでもアップグレードできます。'
redirect_from:
  - /articles/upgrading-your-personal-account-s-billing-plan/
  - /articles/upgrading-your-personal-account/
  - /articles/upgrading-your-personal-account-from-free-to-a-paid-account/
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-a-credit-card/
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-paypal/
  - /articles/500-error-while-upgrading/
  - /articles/upgrading-your-organization-s-billing-plan/
  - /articles/changing-your-organization-billing-plan/
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-a-credit-card/
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-paypal/
  - /articles/upgrading-your-organization-account/
  - /articles/switching-from-per-repository-to-per-user-pricing/
  - /articles/adding-seats-to-your-organization/
  - /articles/upgrading-your-github-billing-plan/
  - /articles/upgrading-your-github-subscription
versions:
  free-pro-team: '*'
---

### 個人アカウントのプランをアップグレードする

個人アカウントを {{ site.data.variables.product.prodname_free_user }} から {{ site.data.variables.product.prodname_pro }} にアップグレードして、プライベートリポジトリの高度なコードレビューツールを手に入れることができます。 {{ site.data.reusables.gated-features.more-info }}

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.billing }}
{{ site.data.reusables.user_settings.subscriptions-tab }}
4. [{{ site.data.variables.product.prodname_free_user }}] の隣で、[**Upgrade**] をクリックします。 ![アップグレードボタン](/assets/images/help/billing/settings_billing_user_upgrade.png)
{{ site.data.reusables.dotcom_billing.choose-monthly-or-yearly-billing }}
{{ site.data.reusables.dotcom_billing.show-plan-details }}
{{ site.data.reusables.dotcom_billing.enter-payment-info }}
{{ site.data.reusables.dotcom_billing.finish_upgrade }}

### Organization のプランをアップグレードする

Organization を {{ site.data.variables.product.prodname_free_team }} から {{ site.data.variables.product.prodname_team }} にアップグレードすると、チーム用の高度なコラボレーションおよび管理ツールにアクセスできます。また、{{ site.data.variables.product.prodname_ghe_cloud }} にアップグレードすると、セキュリティ、コンプライアンス、およびデプロイメントの管理を強化できます。 {{ site.data.reusables.gated-features.more-info-org-products }}

{{ site.data.reusables.dotcom_billing.org-billing-perms }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.user_settings.subscriptions-tab }}
{{ site.data.reusables.dotcom_billing.upgrade_org }}
{{ site.data.reusables.dotcom_billing.choose_org_plan }}
{{ site.data.reusables.dotcom_billing.choose-monthly-or-yearly-billing }}
{{ site.data.reusables.dotcom_billing.show-plan-details }}
{{ site.data.reusables.dotcom_billing.enter-payment-info }}
{{ site.data.reusables.dotcom_billing.owned_by_business }}
{{ site.data.reusables.dotcom_billing.finish_upgrade }}

#### {{ site.data.variables.product.prodname_ghe_cloud }} を使用する Organization の次のステップ

Organization を {{ site.data.variables.product.prodname_ghe_cloud }} にアップグレードした場合は、ここで Organization の ID とアクセス管理を設定できます。 詳細は「[Organization で SAML シングルサインオンを管理する](/articles/managing-saml-single-sign-on-for-your-organization)」を参照してください。

{{ site.data.variables.product.prodname_ghe_cloud }} で Enterprise アカウントを使いたい場合は、{{ site.data.variables.contact.contact_enterprise_sales }} に連絡してください。 詳細は「[Enterprise アカウントについて](/articles/about-enterprise-accounts)」を参照してください。

### Organization にシートを追加する

{{ site.data.variables.product.prodname_team }} Organization のプライベートリポジトリにアクセスできるユーザを追加したい場合、いつでもシートを買い足すことができます。

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.user_settings.subscriptions-tab }}
{{ site.data.reusables.dotcom_billing.add-seats }}
{{ site.data.reusables.dotcom_billing.number-of-seats }}
{{ site.data.reusables.dotcom_billing.confirm-add-seats }}

### Organization をリポジトリごとからユーザごとに切り替える

{{ site.data.reusables.dotcom_billing.switch-legacy-billing }} 詳細は「[ユーザごとの価格付けについて](/articles/about-per-user-pricing)」を参照してください。

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
5. プラン名の右にある [**Edit**] ドロップダウンメニューで、[**Edit plan**] を選択します。 ![[Edit] ドロップダウンメニュー](/assets/images/help/billing/per-user-upgrade-button.png)
6. [Advanced tools for teams] の右にある [**Upgrade now**] をクリックします。 ![[Upgrade now] ボタン](/assets/images/help/billing/per-user-upgrade-now-button.png)
{{ site.data.reusables.dotcom_billing.choose_org_plan }}
{{ site.data.reusables.dotcom_billing.choose-monthly-or-yearly-billing }}
{{ site.data.reusables.dotcom_billing.owned_by_business }}
{{ site.data.reusables.dotcom_billing.finish_upgrade }}

### アップグレード時の 500 エラーのトラブルシューティング

{{ site.data.reusables.dotcom_billing.500-error }}

### 参考リンク

- "[{{ site.data.variables.product.prodname_dotcom }}の製品](/articles/github-s-products)"
- [アップグレードあるいはダウングレードの支払いプロセスへの影響は？](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)
- 「[{{ site.data.variables.product.prodname_dotcom }} の支払いについて](/articles/about-billing-on-github)」
