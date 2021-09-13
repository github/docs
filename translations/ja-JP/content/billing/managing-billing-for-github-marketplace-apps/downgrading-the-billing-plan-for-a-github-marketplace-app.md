---
title: GitHub Marketplace アプリケーションの支払いプランをダウングレード
intro: '別の支払いプランを使用したい場合は、{% data variables.product.prodname_marketplace %} アプリケーションをいつでもダウングレードできます。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-the-billing-plan-for-a-github-marketplace-app
  - /articles/downgrading-an-app-for-your-personal-account/
  - /articles/downgrading-an-app-for-your-organization/
  - /articles/downgrading-the-billing-plan-for-a-github-marketplace-app
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-the-billing-plan-for-a-github-marketplace-app
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-marketplace-apps/downgrading-the-billing-plan-for-a-github-marketplace-app
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Downgrades
  - Marketplace
  - Organizations
  - User account
---

アプリケーションをダウングレードしても、現在の支払いサイクルが終了するまでプランは有効のままです。 ダウングレードは次回の支払い日に有効となります。 詳しい情報については、[{% data variables.product.prodname_marketplace %}の支払いについて](/articles/about-billing-for-github-marketplace)を参照してください。

{% data reusables.marketplace.downgrade-marketplace-only %}

### 個人アカウントのアプリケーションをダウングレードする

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
{% data reusables.marketplace.downgrade-app-billing-settings %}
{% data reusables.marketplace.choose-new-plan %}
{% data reusables.marketplace.choose-new-quantity %}
{% data reusables.marketplace.issue-plan-changes %}

### Organization のアプリケーションをダウングレードする

{% data reusables.marketplace.marketplace-org-perms %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
{% data reusables.marketplace.downgrade-app-billing-settings %}
{% data reusables.marketplace.choose-new-plan %}
{% data reusables.marketplace.choose-new-quantity %}
{% data reusables.marketplace.issue-plan-changes %}

### 参考リンク

- "[{% data variables.product.prodname_marketplace %}アプリケーションをキャンセルする](/articles/canceling-a-github-marketplace-app/)"
