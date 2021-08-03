---
title: Installing an app in your organization
intro: 'You can install apps from {% data variables.product.prodname_marketplace %} to use in your organization.'
redirect_from:
  - /articles/installing-an-app-in-your-organization
  - /github/customizing-your-github-workflow/installing-an-app-in-your-organization
versions:
  free-pro-team: '*'
---
{% data reusables.marketplace.marketplace-apps-only %}

{% data reusables.marketplace.marketplace-org-perms %}

If you choose a paid plan, you'll pay for your app subscription on your organization's current billing date using your organization's existing payment method.

{% data reusables.marketplace.free-trials %}

### Installing a {% data variables.product.prodname_github_app %} in your organization

{% data reusables.marketplace.visit-marketplace %}
{% data reusables.marketplace.browse-to-app %}
{% data reusables.marketplace.choose-plan %}
{% data reusables.marketplace.install-buy %}
{% data reusables.marketplace.confirm-install-account-org %}
{% data reusables.marketplace.add-payment-method-org %}
{% data reusables.marketplace.complete-order-begin-installation %}
8. If the app requires access to repositories, decide whether to give the app access to all of your repositories or to certain repositories, then select **All repositories** or **Only select repositories**.
  ![Radio buttons with options to install an app on all of your repositories or certain repositories](/assets/images/help/marketplace/marketplace-choose-repo-install-option.png)
{% data reusables.marketplace.select-installation-repos %}
{% data reusables.marketplace.review-app-perms-install %}

### Installing an {% data variables.product.prodname_oauth_app %} in your organization

{% data reusables.saml.saml-session-oauth %}

{% data reusables.marketplace.visit-marketplace %}
{% data reusables.marketplace.browse-to-app %}
{% data reusables.marketplace.choose-plan %}
{% data reusables.marketplace.install-buy %}
{% data reusables.marketplace.confirm-install-account-org %}
{% data reusables.marketplace.add-payment-method-org %}
{% data reusables.marketplace.complete-order-begin-installation %}
8. Review the information about the app's access to your personal account, organizations, and data, then click **Authorize application**.

### Further reading

- "[Updating your organization's payment method](/articles/updating-your-organization-s-payment-method)"
- "[Installing an app in your personal account](/articles/installing-an-app-in-your-personal-account)"
