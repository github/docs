---
title: Upgrading your GitHub subscription
intro: 'You can upgrade the subscription for any type of {% data variables.product.product_name %} account at any time.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-your-github-subscription
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
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/upgrading-your-github-subscription
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Organizations
  - Troubleshooting
  - Upgrades
  - User account
---

### Upgrading your personal account's subscription

You can upgrade your personal account from {% data variables.product.prodname_free_user %} to {% data variables.product.prodname_pro %} to get advanced code review tools on private repositories. {% data reusables.gated-features.more-info %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
1. Next to "Current plan", click **Upgrade**. ![Upgrade button](/assets/images/help/billing/settings_billing_user_upgrade.png)
2. Under "Pro" on the "Compare plans" page, click **Upgrade to Pro**.
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.show-plan-details %}
{% data reusables.dotcom_billing.enter-payment-info %}
{% data reusables.dotcom_billing.finish_upgrade %}

### Upgrading your organization's subscription

You can upgrade your organization from {% data variables.product.prodname_free_team %} for an organization to {% data variables.product.prodname_team %} to access advanced collaboration and management tools for teams, or upgrade your organization to {% data variables.product.prodname_ghe_cloud %} for additional security, compliance, and deployment controls. {% data reusables.gated-features.more-info-org-products %}

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.upgrade_org %}
{% data reusables.dotcom_billing.choose_org_plan %}
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.show-plan-details %}
{% data reusables.dotcom_billing.enter-payment-info %}
{% data reusables.dotcom_billing.owned_by_business %}
{% data reusables.dotcom_billing.finish_upgrade %}

#### Next steps for organizations using {% data variables.product.prodname_ghe_cloud %}

If you upgraded your organization to {% data variables.product.prodname_ghe_cloud %}, you can set up identity and access management for your organization. For more information, see "[Managing SAML single sign-on for your organization](/organizations/managing-saml-single-sign-on-for-your-organization)."

If you'd like to use an enterprise account with {% data variables.product.prodname_ghe_cloud %}, contact {% data variables.contact.contact_enterprise_sales %}. For more information, see "[About enterprise accounts](/articles/about-enterprise-accounts)."

### Adding seats to your organization

If you'd like additional users to have access to your {% data variables.product.prodname_team %} organization's private repositories, you can purchase more seats anytime.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

### Switching your organization from per-repository to per-user pricing

{% data reusables.dotcom_billing.switch-legacy-billing %} For more information, see "[About per-user pricing](/articles/about-per-user-pricing)."

{% data reusables.organizations.billing-settings %}
5. To the right of your plan name, use the **Edit** drop-down menu, and select **Edit plan**. ![Edit drop-down menu](/assets/images/help/billing/per-user-upgrade-button.png)
6. To the right of "Advanced tools for teams", click **Upgrade now**. ![Upgrade now button](/assets/images/help/billing/per-user-upgrade-now-button.png)
{% data reusables.dotcom_billing.choose_org_plan %}
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.owned_by_business %}
{% data reusables.dotcom_billing.finish_upgrade %}

### Troubleshooting a 500 error when upgrading

{% data reusables.dotcom_billing.500-error %}

### 더 읽을거리

- "[{% data variables.product.prodname_dotcom %}'s products](/articles/github-s-products)"
- "[How does upgrading or downgrading affect the billing process?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)"
- "[About billing on {% data variables.product.prodname_dotcom %}](/articles/about-billing-on-github)."
