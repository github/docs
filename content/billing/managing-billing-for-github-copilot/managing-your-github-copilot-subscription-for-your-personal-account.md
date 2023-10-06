---
title: Managing your GitHub Copilot subscription for your personal account
intro: 'Set up your {% data variables.product.prodname_copilot_for_individuals %} trial for your personal account and manage your subscription.'
product: '{% data reusables.gated-features.copilot-billing %}'
redirect_from:
  - /billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription
  - /billing/managing-billing-for-github-copilot/managing-your-github-copilot-for-individuals-subscription
versions:
  feature: copilot
type: how_to
topics:
  - Copilot
shortTitle: Your individual subscription
---

## About managing your {% data variables.product.prodname_copilot_for_individuals %} subscription

This article applies to setting up and managing a {% data variables.product.prodname_copilot %} subscription for your personal account. If you are an organization {% ifversion ghec %}or enterprise{% endif %} administrator and want to set up {% data variables.product.prodname_copilot %} for your organization{% ifversion ghec %} or enterprise{% endif %}, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-organization-or-enterprise)."

If you have access to {% data variables.product.prodname_copilot %} through a {% data variables.product.prodname_copilot_for_business %} seat, you will not be able to make administrative changes.

{% data reusables.billing.billing-info %}

{% data reusables.copilot.dotcom-settings %}

## Setting up a {% data variables.product.prodname_copilot %} trial or subscription for your personal account

Before you can start using {% data variables.product.prodname_copilot_for_individuals %}, you will need to set up a free trial or subscription.

{% data reusables.copilot.tp-users-trial-eligibility %}

{% data reusables.copilot.signup-procedure %}

## Modifying your {% data variables.product.prodname_copilot_individuals_short %} subscription

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
1. In the "{% data variables.product.prodname_copilot %}" section, select the **Edit** dropdown on the right.
   - If you are on a monthly billing cycle, select **Change to yearly billing**.
   - If you are on a yearly billing cycle, select **Change to monthly billing**.

## Canceling your {% data variables.product.prodname_copilot_individuals_short %} subscription

You can cancel your {% data variables.product.prodname_copilot_individuals_short %} subscription at any time. The cancellation will take effect at the end of your current billing cycle. You can also cancel your {% data variables.product.prodname_copilot_individuals_short %} trial, during the {% data reusables.copilot.trial-period %}-day trial period. For more information, see "[Canceling your {% data variables.product.prodname_copilot_individuals_short %} trial](#canceling-your-copilot-for-individuals-trial)."

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
1. Under "Add-ons", in the "{% data variables.product.prodname_copilot %}" section, select the **Manage subscription** dropdown on the right and then click **Cancel**.

     ![Screenshot of the {% data variables.product.prodname_copilot %} section of the "Plans and usage" page. The edit dropdown is expanded and the "Cancel" option is highlighted in dark orange.](/assets/images/help/copilot/copilot-cancel-cfi-subscription.png)

1. In the "Cancel {% data variables.product.prodname_copilot %}" modal, click **I understand, cancel {% data variables.product.prodname_copilot %}**

## Canceling your {% data variables.product.prodname_copilot_individuals_short %} trial

You can cancel your {% data variables.product.prodname_copilot_individuals_short %} trial at any time during your trial period. If you cancel during your {% data reusables.copilot.trial-period %}-day trial, you won't be charged. Your cancellation will take effect at the end of your trial period. If you do not cancel your trial, you will be automatically enrolled in a paid subscription at the end of your trial period, according to the billing preferences you set up when you started your trial.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
1. Under "Add-ons", in the "{% data variables.product.prodname_copilot %}" section, click **Cancel trial**.

   ![Screenshot of the {% data variables.product.prodname_copilot %} section of the "Plans and usage" page. The "Cancel trial" option is highlighted in dark orange.](/assets/images/help/copilot/copilot-cancel-trial.png)

## Further reading

- "[AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-for-individuals)"
- "[AUTOTITLE](/copilot/getting-started-with-github-copilot)"
