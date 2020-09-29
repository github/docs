---
title: 個人アカウントでアプリケーションをインストールする
intro: '{% data variables.product.prodname_marketplace %} から、個人アカウントで使うアプリケーションをインストールできます。'
redirect_from:
  - /articles/installing-an-app-in-your-personal-account
versions:
  free-pro-team: '*'
---

{% data reusables.marketplace.marketplace-apps-only %}

有料プランを使用している場合は、Organization のこれまでの支払い方法を使って、現在の請求日にアプリケーション プランの料金を支払います。

{% data reusables.marketplace.free-trials %}

### 個人アカウントで {% data variables.product.prodname_github_app %} をインストールする

{% data reusables.marketplace.visit-marketplace %}
{% data reusables.marketplace.browse-to-app %}
{% data reusables.marketplace.choose-plan %}
{% data reusables.marketplace.install-buy %}
{% data reusables.marketplace.confirm-install-account-personal %}
{% data reusables.marketplace.add-payment-method-personal %}
{% data reusables.marketplace.complete-order-begin-installation %}
8. すべてのリポジトリへのアクセスを許可するか、特定のリポジトリへのアクセスのみを許可するかに応じて、[**All repositories**] または [**Only select repositories**] を選択します。 ![すべてのリポジトリまたは特定のリポジトリにアプリをインストールするオプションを備えたラジオボタン](/assets/images/help/marketplace/marketplace-choose-repo-install-option.png)
{% data reusables.marketplace.select-installation-repos %}
{% data reusables.marketplace.review-app-perms-install %}

### 個人アカウントで {% data variables.product.prodname_oauth_app %}をインストールする

{% data reusables.saml.saml-session-oauth %}

{% data reusables.marketplace.visit-marketplace %}
{% data reusables.marketplace.browse-to-app %}
{% data reusables.marketplace.choose-plan %}
{% data reusables.marketplace.install-buy %}
{% data reusables.marketplace.confirm-install-account-personal %}
{% data reusables.marketplace.add-payment-method-personal %}
{% data reusables.marketplace.complete-order-begin-installation %}
8. 個人アカウントおよびデータに対するアプリケーションのアクセスについての情報を確認し、[**Authorize application**] をクリックします。

### 参考リンク

- 「[個人アカウントの支払い方法を更新する](/articles/updating-your-personal-account-s-payment-method)」
- 「[Organization でアプリケーションをインストールする](/articles/installing-an-app-in-your-organization)」
