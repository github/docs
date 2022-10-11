---
title: GitHub Marketplace アプリケーションの支払いプランをアップグレードする
intro: '{% data variables.product.prodname_marketplace %} アプリケーションを別のプランにいつでもアップグレードすることができます。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-the-billing-plan-for-a-github-marketplace-app
  - /articles/upgrading-an-app-for-your-personal-account/
  - /articles/upgrading-an-app-for-your-organization/
  - /articles/upgrading-the-billing-plan-for-a-github-marketplace-app
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-the-billing-plan-for-a-github-marketplace-app
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-marketplace-apps/upgrading-the-billing-plan-for-a-github-marketplace-app
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Marketplace
  - Organizations
  - Upgrades
  - User account
---

アプリケーションをアップグレードすると、支払い方法により、次の請求日までの残り時間に基づいて比例配分額を請求されます。 詳しい情報については、[{% data variables.product.prodname_marketplace %}の支払いについて](/articles/about-billing-for-github-marketplace)を参照してください。

### 個人アカウントのアプリケーションをアップグレードする

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
{% data reusables.marketplace.upgrade-app-billing-settings %}
{% data reusables.marketplace.choose-new-plan %}
{% data reusables.marketplace.choose-new-quantity %}
{% data reusables.marketplace.issue-plan-changes %}

### Organization のアプリケーションをアップグレードする

{% data reusables.marketplace.marketplace-org-perms %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
{% data reusables.marketplace.upgrade-app-billing-settings %}
{% data reusables.marketplace.choose-new-plan %}
{% data reusables.marketplace.choose-new-quantity %}
{% data reusables.marketplace.issue-plan-changes %}
