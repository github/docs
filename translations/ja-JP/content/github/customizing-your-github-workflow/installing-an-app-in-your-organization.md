---
title: Organization でアプリケーションをインストールする
intro: '{% data variables.product.prodname_marketplace %}から、Organization で使うアプリケーションをインストールできます。'
redirect_from:
  - /articles/installing-an-app-in-your-organization
versions:
  free-pro-team: '*'
---

{% data reusables.marketplace.marketplace-apps-only %}

{% data reusables.marketplace.marketplace-org-perms %}

有料プランを選択している場合は、Organization のこれまでの支払い方法を使って、現在の請求日にアプリケーション プランの料金を支払います。

{% data reusables.marketplace.free-trials %}

### Organization で {% data variables.product.prodname_github_app %}をインストールする

{% data reusables.marketplace.visit-marketplace %}
{% data reusables.marketplace.browse-to-app %}
{% data reusables.marketplace.choose-plan %}
{% data reusables.marketplace.install-buy %}
{% data reusables.marketplace.confirm-install-account-org %}
{% data reusables.marketplace.add-payment-method-org %}
{% data reusables.marketplace.complete-order-begin-installation %}
8. アプリケーションでリポジトリにアクセスする必要がある場合は、すべてのリポジトリへのアクセスを許可するか、特定のリポジトリへのアクセスのみを許可するかに応じて、[**All repositories**] または [**Only select repositories**] を選択します。 ![すべてのリポジトリまたは特定のリポジトリにアプリをインストールするオプションを備えたラジオボタン](/assets/images/help/marketplace/marketplace-choose-repo-install-option.png)
{% data reusables.marketplace.select-installation-repos %}
{% data reusables.marketplace.review-app-perms-install %}

### Organization で {% data variables.product.prodname_oauth_app %} をインストールする

{% data reusables.saml.saml-session-oauth %}

{% data reusables.marketplace.visit-marketplace %}
{% data reusables.marketplace.browse-to-app %}
{% data reusables.marketplace.choose-plan %}
{% data reusables.marketplace.install-buy %}
{% data reusables.marketplace.confirm-install-account-org %}
{% data reusables.marketplace.add-payment-method-org %}
{% data reusables.marketplace.complete-order-begin-installation %}
8. 個人アカウント、Organization、データに対するアプリケーションのアクセスについての情報を確認し、[**Authorize application**] をクリックします。

### 参考リンク

- [Organization の支払いプランをアップグレードする](/articles/updating-your-organization-s-payment-method)
- 「[個人アカウントでアプリケーションをインストールする](/articles/installing-an-app-in-your-personal-account)」
