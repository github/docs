---
title: Upgrading the billing plan for a GitHub Marketplace app
intro: 'You can upgrade your {% data variables.product.prodname_marketplace %} app to a different plan at any time.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-the-billing-plan-for-a-github-marketplace-app
  - /articles/upgrading-an-app-for-your-personal-account
  - /articles/upgrading-an-app-for-your-organization
  - /articles/upgrading-the-billing-plan-for-a-github-marketplace-app
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-marketplace-apps/upgrading-the-billing-plan-for-a-github-marketplace-app
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Marketplace
  - Organizations
  - Upgrades
  - User account
shortTitle: Upgrade billing plan
---
When you upgrade an app, your payment method is charged a prorated amount based on the time remaining until your next billing date. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace)."

## Upgrading an app for your personal account

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
{% data reusables.marketplace.upgrade-app-billing-settings %}
{% data reusables.marketplace.choose-new-plan %}
{% data reusables.marketplace.choose-new-quantity %}
{% data reusables.marketplace.issue-plan-changes %}

## Upgrading an app for your organization

{% data reusables.marketplace.marketplace-org-perms %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
{% data reusables.marketplace.upgrade-app-billing-settings %}
{% data reusables.marketplace.choose-new-plan %}
{% data reusables.marketplace.choose-new-quantity %}
{% data reusables.marketplace.issue-plan-changes %}

## Upgrading an app in your enterprise

{% data reusables.marketplace.marketplace-enterprise-account %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.billing-tab %}
1. In the "Marketplace apps" tab, find the app you want to upgrade.
1. Next to the organization where you want to upgrade the app, select **{% octicon "kebab-horizontal" aria-label="More" %}** and then click **Change plan**.
1. Select the **Edit your plan** dropdown and click an account's plan to edit.
{% data reusables.marketplace.choose-new-plan %}
{% data reusables.marketplace.choose-new-quantity %}
{% data reusables.marketplace.issue-plan-changes %}
