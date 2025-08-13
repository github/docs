---
title: Viewing and changing your GitHub Copilot plan
shortTitle: View and change your Copilot plan
intro: 'Learn how to view, cancel, or update your {% data variables.product.prodname_copilot_short %} plan, and update your billing cycle.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/modifying-your-copilot-subscription-as-an-individual-user
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-subscription/modifying-your-copilot-subscription-as-an-individual-user
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-github-copilot-pro-subscription/modifying-your-copilot-pro-subscription-as-an-individual-user
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/modifying-your-copilot-pro-subscription-as-an-individual-user
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/canceling-copilot-as-an-individual-user
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-subscription/canceling-copilot-as-an-individual-user
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-github-copilot-pro-subscription/canceling-copilot-pro-as-an-individual-user
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/canceling-copilot-pro-as-an-individual-user
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/canceling-your-copilot-pro-trial-as-an-individual-user
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/canceling-your-copilot-trial-as-an-individual-user
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-subscription/canceling-your-copilot-trial-as-an-individual-user
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-github-copilot-pro-subscription/canceling-your-copilot-pro-trial-as-an-individual-user
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/canceling-your-copilot-plan
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/viewing-and-changing-your-copilot-plan
  - /copilot/how-tos/manage-your-account/viewing-and-changing-your-copilot-plan
contentType: how-tos
---

You can view your current plan details in your {% data variables.product.github %} account settings. From there, you can change or cancel your plan, or switch between monthly and yearly billing based on your needs.

If you have access to {% data variables.product.prodname_copilot %} through an organization{% ifversion ghec %} or enterprise{% endif %}, you will not be able to modify your plan or billing cycle.

## Viewing your {% data variables.product.prodname_copilot_short %} plan

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing-plans-two-platforms %}

Under "Current plan", you can see which plan you're currently using.

## Changing your {% data variables.product.prodname_copilot_short %} plan

You can upgrade or downgrade your {% data variables.product.prodname_copilot_short %} plan at any time from your account settings.

### Upgrading your {% data variables.product.prodname_copilot_short %} plan

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing-plans-two-platforms %}

1. In the "{% data variables.product.prodname_copilot %}" section, click the option to upgrade on the right.

   * If you're on {% data variables.copilot.copilot_free_short %}, click **Upgrade {% data variables.product.prodname_copilot_short %}** to choose a paid plan.
   * If you're on {% data variables.copilot.copilot_pro_short %}, click **Upgrade to {% data variables.copilot.copilot_pro_plus_short %}**.

1. Follow the prompts to confirm your selection and billing details.

### Downgrading your {% data variables.copilot.copilot_pro_plus_short %} plan

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing-plans-two-platforms %}

1. In the "{% data variables.product.prodname_copilot %}" section, select the **Manage subscription** dropdown on the right and then click **Downgrade to {% data variables.copilot.copilot_pro_short %}**.
1. In the downgrade modal, you'll see options to:

   * **Keep {% data variables.copilot.copilot_pro_plus_short %}**, which cancels the downgrade process.
   * **Downgrade to {% data variables.copilot.copilot_pro_short %}**, which switches you to {% data variables.copilot.copilot_pro_short %} at the start of your next billing cycle.

   Select **Downgrade to {% data variables.copilot.copilot_pro_short %}** to confirm.

## Canceling your {% data variables.product.prodname_copilot_short %} plan

You can cancel your {% data variables.product.prodname_copilot_short %} plan or trial at any time. You’ll retain access to your current features until your billing cycle ends. You will automatically be downgraded to {% data variables.copilot.copilot_free_short %} at the end of your billing cycle.

If you have been granted a free access to {% data variables.copilot.copilot_pro_short %} as a verified student, teacher, or maintainer of a popular open source project, you won’t be able to cancel your plan. If you have access to {% data variables.product.prodname_copilot_short %} through an organization{% ifversion ghec %} or enterprise{% endif %}, you will not be able to cancel your plan. In these cases, you can disable {% data variables.product.prodname_copilot_short %} in your environment. See [AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-in-your-environment).

{% data reusables.copilot.copilot-one-account-short %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing-plans-two-platforms %}

1. In the "{% data variables.product.prodname_copilot %}" section, select the **Manage subscription** dropdown on the right and then click **Cancel subscription**.
1. Select **Cancel {% data variables.copilot.copilot_pro_plus_short %}/{% data variables.copilot.copilot_pro_short %}** to cancel your plan at the end of your current billing cycle.

## Canceling your {% data variables.copilot.copilot_pro_short %} trial

You can cancel your {% data variables.copilot.copilot_pro_short %} trial at any time during your trial period. If you cancel during your {% data reusables.copilot.trial-period %}-day trial, you won't be charged. Your cancellation will take effect at the end of your trial period. If you do not cancel your trial, you will be automatically enrolled in a paid plan at the end of your trial period, according to the billing preferences you set up when you started your trial.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing-plans-two-platforms %}

1. In the "{% data variables.product.prodname_copilot_short %}" section, click **Cancel trial**.

## Changing your billing cycle

If you're on a paid {% data variables.product.prodname_copilot_short %} plan, you can switch between monthly and yearly billing at any time. The change will take effect at the start of your next billing cycle.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing-plans-two-platforms %}

1. In the "{% data variables.product.prodname_copilot %}" section, select the **Edit** dropdown on the right.
1. Choose the option to switch your billing cycle:

   * If you're billed monthly, click **Change to yearly billing**.
   * If you're billed yearly, click **Change to monthly billing**.

1. Follow the prompts to confirm your change.

{% data reusables.billing.billing-info %}
