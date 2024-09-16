---
title: Upgrading your account's plan
intro: 'You can upgrade the plan for any type of account on {% data variables.product.prodname_dotcom %} at any time.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-your-github-subscription
  - /articles/upgrading-your-personal-account-s-billing-plan
  - /articles/upgrading-your-personal-account
  - /articles/upgrading-your-personal-account-from-free-to-a-paid-account
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-a-credit-card
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-paypal
  - /articles/500-error-while-upgrading
  - /articles/upgrading-your-organization-s-billing-plan
  - /articles/changing-your-organization-billing-plan
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-a-credit-card
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-paypal
  - /articles/upgrading-your-organization-account
  - /articles/switching-from-per-repository-to-per-user-pricing
  - /articles/adding-seats-to-your-organization
  - /articles/upgrading-your-github-billing-plan
  - /articles/upgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/upgrading-your-github-subscription
  - /billing/managing-billing-for-your-github-account/upgrading-your-github-subscription
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Troubleshooting
  - Upgrades
  - User account
shortTitle: Upgrade your plan
---

## About upgrades

{% data reusables.accounts.accounts-billed-separately %}

Upgrading your plan does not affect other subscriptions or usage-based billing for your account. See "[AUTOTITLE](/billing/managing-your-github-billing-settings/about-billing-on-github)."

## Upgrading your personal account's plan

You can upgrade your personal account from {% data variables.product.prodname_free_user %} to {% data variables.product.prodname_pro %} to get advanced code review tools on private repositories owned by your personal account.

Upgrading your personal account does not affect any organizations you may manage or repositories owned by those organizations. {% data reusables.gated-features.more-info %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
1. Next to "Current plan", click **Upgrade**.
1. Under "Pro" on the "Compare plans" page, click **Upgrade to Pro**.
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.show-plan-details %}
{% data reusables.dotcom_billing.enter-billing-info %}
{% data reusables.dotcom_billing.enter-payment-info %}
{% data reusables.dotcom_billing.finish_upgrade %}

## Managing your organization's plan

You can upgrade your organization's plan, add seats to your existing plan, or switch from per-repository to per-user pricing.

### Upgrading your organization's plan

You can upgrade your organization from {% data variables.product.prodname_free_team %} for an organization to {% data variables.product.prodname_team %} to access advanced collaboration and management tools for teams, or upgrade your organization to {% data variables.product.prodname_ghe_cloud %} for additional security, compliance, and deployment controls.

Upgrading an organization does not affect your personal account or repositories owned by your personal account. {% data reusables.gated-features.more-info-org-products %}

{% data reusables.dotcom_billing.org-billing-perms %}

>[!NOTE] {% data reusables.actions.org-to-enterprise-actions-permissions %}

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.upgrade_org %}
{% data reusables.dotcom_billing.choose_org_plan %}
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.show-plan-details %}
{% data reusables.dotcom_billing.enter-payment-info %}
{% data reusables.dotcom_billing.owned_by_business %}
{% data reusables.dotcom_billing.finish_upgrade %}

### Next steps for organizations using {% data variables.product.prodname_ghe_cloud %}

As part of your upgrade to {% data variables.product.prodname_ghe_cloud %}, you set up an enterprise account. An enterprise account allows you to manage multiple organizations. Optionally, you can set up identity and access management for an individual organization or enterprise account. See "[AUTOTITLE](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)" and "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-through-githubcom-with-additional-saml-access-restriction){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

{% data reusables.enterprise.create-an-enterprise-account %} See "[AUTOTITLE](/enterprise-cloud@latest/admin/managing-your-enterprise-account/creating-an-enterprise-account){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

### Adding seats to your organization

If you'd like additional users to have access to your {% data variables.product.prodname_team %} organization's private repositories, you can purchase more seats anytime.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

### Switching your organization from per-repository to per-user pricing

{% data reusables.dotcom_billing.switch-legacy-billing %} See "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing)."

{% data reusables.organizations.billing-settings %}
1. To the right of your plan name, select the **Edit** dropdown menu, then click **Edit plan**.
1. To the right of "Advanced tools for teams", click **Upgrade now**.
{% data reusables.dotcom_billing.choose_org_plan %}
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.owned_by_business %}
{% data reusables.dotcom_billing.finish_upgrade %}

{% ifversion ghec %}

## Adding seats to your enterprise account

If you have access to the enhanced billing platform, you can add seats to your enterprise account through the "Licensing" page. See, "[AUTOTITLE](/billing/using-the-enhanced-billing-platform-for-enterprises/adding-seats-to-your-enterprise-account)."

{% data reusables.enterprise-accounts.billing-perms %}

>[!NOTE] If your enterprise account is invoiced, you cannot add seats on {% data variables.product.prodname_dotcom %}. Instead, contact {% data variables.contact.contact_enterprise_sales %}.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.manage-seats %}

{% endif %}

## Troubleshooting a 500 error when upgrading

{% data reusables.dotcom_billing.500-error %}

## Further reading

* "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)"
* "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/how-does-upgrading-or-downgrading-affect-the-billing-process)"
* "[AUTOTITLE](/billing/managing-your-github-billing-settings/about-billing-on-github)."
