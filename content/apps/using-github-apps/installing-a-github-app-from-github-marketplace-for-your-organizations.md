---
title: Installing a GitHub App from GitHub Marketplace for your organizations
intro: >-
  You can install {% data variables.product.prodname_github_apps %} from {% data
  variables.product.prodname_marketplace %} to use on your organizations.
redirect_from:
  - /articles/installing-an-app-in-your-organization
  - /github/customizing-your-github-workflow/installing-an-app-in-your-organization
  - /github/customizing-your-github-workflow/purchasing-and-installing-apps-in-github-marketplace/installing-an-app-in-your-organization
  - /get-started/customizing-your-github-workflow/purchasing-and-installing-apps-in-github-marketplace/installing-an-app-in-your-organization
  - /apps/using-github-apps/installing-an-app-in-your-organization
  - /apps/using-github-apps/installing-a-github-app-in-your-organization
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Install from Marketplace for org
---

## About {% data variables.product.prodname_marketplace %}

This article applies to installing and purchasing {% data variables.product.prodname_github_apps %} from {% data variables.product.prodname_marketplace %}. For more information on installing {% data variables.product.prodname_github_apps %} from a source other than {% data variables.product.prodname_marketplace %}, see "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-a-third-party)."

If you install a {% data variables.product.prodname_github_app %} on your organization account and you choose a paid plan, you will pay for your app subscription on your organization's current billing date using your organization's existing payment method.

{% data reusables.marketplace.free-trials %}

For more information about installing an {% data variables.product.prodname_oauth_app %} instead of a {% data variables.product.prodname_github_app %} from {% data variables.product.prodname_marketplace %}, see "[AUTOTITLE](/apps/oauth-apps/using-oauth-apps/installing-an-oauth-app-in-your-organization)."

## About installing {% data variables.product.prodname_github_apps %}

{% data reusables.apps.about-installation %}

### Difference between installation and authorization

After you install a {% data variables.product.prodname_github_app %}, you may also be asked to authorize the app.

{% data reusables.apps.install-vs-authorize %}

For more information about authorizing {% data variables.product.prodname_github_apps %}, see "[AUTOTITLE](/apps/using-github-apps/authorizing-github-apps)."

## Requirements to install a {% data variables.product.prodname_github_app %} on an organization

Organization owners can install {% data variables.product.prodname_github_apps %} on their organization.

For enterprises that pay by credit card, enterprise owners who are also organization owners can install {% data variables.product.prodname_github_apps %} on organizations within their enterprise.

Admins of repositories that are owned by an organization can also install {% data variables.product.prodname_github_apps %} on the organization if they only grant the app access to repositories that they are an admin of and if the app does not request any organization permissions or the "repository administration" permission. Organization owners can prevent outside collaborators who are repository admins from installing {% data variables.product.prodname_github_apps %}.

The "app manager" role in an organization does not give a person the ability to install a {% data variables.product.prodname_github_app %} in the organization. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/about-github-app-managers)."

{% ifversion ghec %}

For enterprise managed user accounts, only enterprise owners can purchase and install a paid {% data variables.product.prodname_github_app %} for an organization in the enterprise. Enterprise members cannot purchase a paid {% data variables.product.prodname_github_app %}. Organization owners with an enterprise managed user account can still install a free {% data variables.product.prodname_github_app %}.

{% endif %}

## Installing a {% data variables.product.prodname_github_app %} in your organization

{% data reusables.marketplace.visit-marketplace %}
{% data reusables.marketplace.browse-to-app %}
{% data reusables.marketplace.choose-plan %}
{% data reusables.marketplace.install-buy %}
{% data reusables.marketplace.confirm-install-account-org %}
{% data reusables.marketplace.add-payment-method-org %}
{% data reusables.marketplace.complete-order-begin-installation %}
1. If the app requires access to repositories, select **All repositories** or **Only select repositories**.

   If the app creates any repositories, the app will automatically be granted access to those repositories as well.
{% data reusables.marketplace.select-installation-repos %}
{% data reusables.marketplace.review-app-perms-install %}

## Further reading

* "[AUTOTITLE](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)"
* "[AUTOTITLE](/apps/using-github-apps/installing-an-app-in-your-personal-account)"
