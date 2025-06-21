---
title: About billing for GitHub Copilot
shortTitle: GitHub Copilot
intro: '{% data variables.product.prodname_dotcom %} offers several {% data variables.product.prodname_copilot_short %} plans for enterprises, organizations, and individual developers.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /billing/managing-billing-for-github-copilot/about-billing-for-github-copilot
  - /billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot
  # Redirect for old maptopic
  - /billing/managing-billing-for-your-products/managing-billing-for-github-copilot
  - /billing/managing-billing-for-github-copilot
---

## {% data variables.product.prodname_copilot %} in your enterprise

Enterprises on {% data variables.product.prodname_ghe_cloud %} can subscribe to either {% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %}, or a mixture of both across different organizations within an enterprise. Both plans are available on a monthly cycle, and pricing varies. For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-subscription-for-your-enterprise/about-billing-for-github-copilot-in-your-enterprise).

## {% data variables.product.prodname_copilot %} in your organization

{% data variables.product.github %} bills {% data variables.copilot.copilot_business_short %} on a monthly cycle, for {% data variables.copilot.cfb_price_per_month %} per user per month. For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-the-copilot-subscription-for-your-organization/about-billing-for-github-copilot-in-your-organization).

## {% data variables.product.prodname_copilot %} as an individual

{% data variables.copilot.copilot_pro %} and {% data variables.copilot.copilot_pro_plus %} plans are available on a monthly or yearly cycle:

* **{% data variables.copilot.copilot_pro_short %}**: {% data variables.copilot.cfi_price_per_month %} per calendar month or {% data variables.copilot.cfi_price_per_year %} per year.
* **{% data variables.copilot.copilot_pro_plus_short %}**: {% data variables.copilot.cpp_price_per_month %} per calendar month or {% data variables.copilot.cpp_price_per_year %} per year.

See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-subscription/about-billing-for-github-copilot-individual).

> [!NOTE] {% data reusables.copilot.copilot-one-account %}

If you want to try {% data variables.product.prodname_copilot_short %} before subscribing, you can use {% data variables.copilot.copilot_free %} for a limited experience. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/about-github-copilot-free).

## Managing requests in {% data variables.product.prodname_copilot_short %}

Some {% data variables.product.prodname_copilot_short %} features use premium requests, which count toward your monthly usage allowance. To learn how premium requests work, which features use them, and how to manage your usage, see [AUTOTITLE](/copilot/managing-copilot/understanding-and-managing-copilot-usage/understanding-and-managing-requests-in-copilot).

## Migrating between {% data variables.product.prodname_copilot_short %} plans

When transitioning between different {% data variables.product.prodname_copilot_short %} plans, you may encounter situations that require support.

### Trial expiration notices

If you see a trial expiration notice but have an active paid subscription, this is a display issue and does not affect your access. If this persists, contact {% data variables.contact.contact_support_page %}.

### Migrations requiring support assistance

Some migrations cannot be completed through self-service options.

* **Non-enterprise to enterprise environment migrations**: When moving from standalone {% data variables.product.prodname_copilot_short %} plans to a {% data variables.product.prodname_enterprise %} environment, contact {% data variables.contact.contact_support_page %} or your account manager for assistance to avoid service interruption.

* **Changing between {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}**: If you need to migrate between these plans within your enterprise and the option isn't available in your "Billing & Licensing" settings, contact {% data variables.contact.contact_support_page %} or your account manager for assistance.

## Allowance usage for {% data variables.copilot.copilot_coding_agent %}

Within your monthly usage allowance for {% data variables.product.prodname_actions %} and {% data variables.product.prodname_copilot %} premium requests, you can ask {% data variables.product.prodname_copilot_short %} to work on coding tasks without incurring any additional costs.

When {% data variables.product.prodname_copilot_short %} works on coding tasks, {% data variables.copilot.copilot_coding_agent %} uses:

* **{% data variables.product.prodname_actions %} minutes** from your account's monthly allowance of free minutes for {% data variables.product.prodname_dotcom %}-hosted runners.

  This allowance of free minutes is shared with all {% data variables.product.prodname_actions %} workflows in your account.

  For details of the free minutes allowance for your {% data variables.product.github %} plan, see [AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#included-storage-and-minutes).

* **Premium requests** from your account's monthly allowance of premium {% data variables.product.prodname_copilot_short %} requests.

  This allowance of free premium requests is shared with other {% data variables.product.prodname_copilot_short %} features, such as {% data variables.copilot.copilot_chat_short %}.

  When you use {% data variables.copilot.copilot_coding_agent %}, {% data variables.product.prodname_copilot_short %} may make multiple premium requests to complete a single task. This includes both user-initiated prompts and follow-up actions {% data variables.product.prodname_copilot_short %} takes on your behalf. The total premium requests used will depend on the complexity of the task and the number of steps involved. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/monitoring-usage-and-entitlements/avoiding-unexpected-copilot-costs).

For more information about {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/using-github-copilot/coding-agent/about-assigning-tasks-to-copilot).

### What happens if you have used up your monthly quota?

If you run out of free Actions minutes or free premium requests, and you have set up a payment method for billing, you will be charged at the normal rates for additional minutes and premium requests. See [AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) and [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests#additional-premium-requests).

If you run out of free minutes or premium requests, and you have _not_ set up billing, a message is displayed explaining why {% data variables.product.prodname_copilot_short %} cannot work on the task.

### Monitoring your use of Actions minutes and premium requests

You can track your monthly usage of {% data variables.product.prodname_actions %} minutes and premium requests, to help you get the most value from your {% data variables.product.prodname_copilot_short %} plan. See [AUTOTITLE](/enterprise-cloud@latest/billing/managing-billing-for-your-products/managing-billing-for-github-actions/viewing-your-github-actions-usage) and [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/understanding-and-managing-copilot-usage/monitoring-your-copilot-usage-and-entitlements).

## Further reading

* [AUTOTITLE](/copilot/about-github-copilot/subscription-plans-for-github-copilot)
