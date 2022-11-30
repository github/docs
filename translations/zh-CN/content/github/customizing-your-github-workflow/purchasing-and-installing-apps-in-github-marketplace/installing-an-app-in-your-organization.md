---
title: 在组织中安装应用程序
intro: '您可以从 {% data variables.product.prodname_marketplace %} 安装要在组织中使用的应用程序。'
redirect_from:
  - /articles/installing-an-app-in-your-organization
  - /github/customizing-your-github-workflow/installing-an-app-in-your-organization
versions:
  free-pro-team: '*'
---
{% data reusables.marketplace.marketplace-apps-only %}

{% data reusables.marketplace.marketplace-org-perms %}

如果选择付费计划，则要使用组织现有的支付方式，在组织的当前结算日期支付应用程序订阅。

{% data reusables.marketplace.free-trials %}

### 在组织中安装 {% data variables.product.prodname_github_app %}

{% data reusables.marketplace.visit-marketplace %}
{% data reusables.marketplace.browse-to-app %}
{% data reusables.marketplace.choose-plan %}
{% data reusables.marketplace.install-buy %}
{% data reusables.marketplace.confirm-install-account-org %}
{% data reusables.marketplace.add-payment-method-org %}
{% data reusables.marketplace.complete-order-begin-installation %}
8. 如果应用程序需要访问仓库，请决定允许应用程序访问您的所有仓库还是某些仓库，然后选择 **All repositories（所有仓库）**或 **Only select repositories（仅所选仓库）**。 ![用于在所有仓库或某些仓库上安装应用程序的选项单选按钮](/assets/images/help/marketplace/marketplace-choose-repo-install-option.png)
{% data reusables.marketplace.select-installation-repos %}
{% data reusables.marketplace.review-app-perms-install %}

### 在组织中安装 {% data variables.product.prodname_oauth_app %}

{% data reusables.saml.saml-session-oauth %}

{% data reusables.marketplace.visit-marketplace %}
{% data reusables.marketplace.browse-to-app %}
{% data reusables.marketplace.choose-plan %}
{% data reusables.marketplace.install-buy %}
{% data reusables.marketplace.confirm-install-account-org %}
{% data reusables.marketplace.add-payment-method-org %}
{% data reusables.marketplace.complete-order-begin-installation %}
8. 检查有关应用程序对您的个人帐户、组织和数据访问权限的信息，然后单击 **Authorize application（授权应用程序）**。

### 延伸阅读

- "[更新组织的支付方式](/articles/updating-your-organization-s-payment-method)"
- "[在个人帐户中安装应用程序](/articles/installing-an-app-in-your-personal-account)"
