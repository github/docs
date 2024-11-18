---
title: Installing a GitHub App from GitHub Marketplace for your personal account
intro: 'You can install {% data variables.product.prodname_github_apps %} from {% data variables.product.prodname_marketplace %} to use on your personal account.'
redirect_from:
  - /articles/installing-an-app-in-your-personal-account
  - /github/customizing-your-github-workflow/installing-an-app-in-your-personal-account
  - /github/customizing-your-github-workflow/purchasing-and-installing-apps-in-github-marketplace/installing-an-app-in-your-personal-account
  - /get-started/customizing-your-github-workflow/purchasing-and-installing-apps-in-github-marketplace/installing-an-app-in-your-personal-account
  - /apps/using-github-apps/installing-an-app-in-your-personal-account
  - /apps/using-github-apps/installing-a-github-app-in-your-personal-account
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Install from Marketplace for user
---

## About {% data variables.product.prodname_marketplace %}

This article applies to installing and purchasing {% data variables.product.prodname_github_apps %} from {% data variables.product.prodname_marketplace %}. For more information on installing {% data variables.product.prodname_github_apps %} from a source other than {% data variables.product.prodname_marketplace %}, see "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-a-third-party)."

If you install a {% data variables.product.prodname_github_app %} on your personal account and you choose a paid plan, you will pay for your app subscription on your personal account's current billing date using your existing payment method.

{% data reusables.marketplace.free-trials %}

For more information about installing an {% data variables.product.prodname_oauth_app %} instead of a {% data variables.product.prodname_github_app %} from {% data variables.product.prodname_marketplace %}, see "[AUTOTITLE](/apps/oauth-apps/using-oauth-apps/installing-an-oauth-app-in-your-personal-account)."

## About installing {% data variables.product.prodname_github_apps %}

{% data reusables.apps.about-installation %}

### Difference between installation and authorization

After you install a {% data variables.product.prodname_github_app %}, you may also be asked to authorize the app.

{% data reusables.apps.install-vs-authorize %}

For more information about authorizing {% data variables.product.prodname_github_apps %}, see "[AUTOTITLE](/apps/using-github-apps/authorizing-github-apps)."

## Installing a {% data variables.product.prodname_github_app %} in your personal account

{% data reusables.marketplace.visit-marketplace %}
{% data reusables.marketplace.browse-to-app %}
{% data reusables.marketplace.choose-plan %}
{% data reusables.marketplace.install-buy %}
{% data reusables.marketplace.confirm-install-account-personal %}
{% data reusables.marketplace.add-payment-method-personal %}
{% data reusables.marketplace.complete-order-begin-installation %}
1. If the app requires access to repositories, select **All repositories** or **Only select repositories**.

   If the app creates any repositories, the app will automatically be granted access to those repositories as well.
{% data reusables.marketplace.select-installation-repos %}
{% data reusables.marketplace.review-app-perms-install %}

## Further reading

* "[AUTOTITLE](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)"
* "[AUTOTITLE](/apps/using-github-apps/installing-an-app-in-your-organization)"
