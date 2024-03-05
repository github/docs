---
title: Canceling a GitHub Marketplace app
intro: 'You can cancel and remove a {% data variables.product.prodname_marketplace %} app from your account at any time.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/canceling-a-github-marketplace-app
  - /articles/canceling-an-app-for-your-personal-account
  - /articles/canceling-an-app-for-your-organization
  - /articles/canceling-a-github-marketplace-app
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-marketplace-apps/canceling-a-github-marketplace-app
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Cancellation
  - Marketplace
  - Organizations
  - Trials
  - User account
shortTitle: Cancel a Marketplace app
---
When you cancel an app, your subscription remains active until the end of your current billing cycle. The cancellation takes effect on your next billing date. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace)."

When you cancel a free trial on a paid plan, your subscription is immediately canceled and you will lose access to the app. If you don't cancel your free trial within the trial period, the payment method on file for your account will be charged for the plan you chose at the end of the trial period. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace)."

{% data reusables.marketplace.downgrade-marketplace-only %}

## Canceling an app for your personal account

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
{% data reusables.marketplace.cancel-app-billing-settings %}
{% data reusables.marketplace.cancel-app %}

## Canceling a free trial for an app for your personal account

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
{% data reusables.marketplace.cancel-free-trial-billing-settings %}
{% data reusables.marketplace.cancel-app %}

## Canceling an app for your organization

{% data reusables.marketplace.marketplace-org-perms %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
{% data reusables.marketplace.cancel-app-billing-settings %}
{% data reusables.marketplace.cancel-app %}

## Canceling a free trial for an app for your organization

{% data reusables.marketplace.marketplace-org-perms %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
{% data reusables.marketplace.cancel-free-trial-billing-settings %}
{% data reusables.marketplace.cancel-app %}

## Canceling an app in your enterprise

{% data reusables.marketplace.marketplace-enterprise-account %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.billing-tab %}
1. In the "Marketplace apps" tab, find the app you want to cancel.
1. Next to the organization where you want to cancel the app, select **{% octicon "kebab-horizontal" aria-label="More" %}** and then click **Cancel plan**.
1. Click **Confirm**.
