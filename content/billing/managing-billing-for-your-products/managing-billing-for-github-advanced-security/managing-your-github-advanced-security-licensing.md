---
title: Managing your GitHub Advanced Security licensing
intro: 'You can add or remove {% data variables.product.prodname_GH_advanced_security %} licenses for your enterprise.'
permissions: 'Enterprise owners can manage licensing for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas-ghec %}'
versions:
  ghec: '*'
type: how_to
redirect_from:
  - /billing/managing-billing-for-github-advanced-security/managing-your-github-advanced-security-licensing
topics:
  - Advanced Security
  - Enterprise
shortTitle: Manage Advanced Security licensing
---
## About licensing for {% data variables.product.prodname_GH_advanced_security %}

Each license for {% data variables.product.prodname_GH_advanced_security %} specifies a maximum number of accounts that can use these features. Each active committer to at least one repository with the feature enabled uses one license. A committer is considered active if one of their commits has been pushed to the repository within the last 90 days, regardless of when it was originally authored. For more information about committer numbers, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security). For information about purchasing a license, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/signing-up-for-github-advanced-security).

{% data reusables.advanced-security.ghas-products-tip %}

## Managing the number of committers in your subscription

{% ifversion security-configurations %}

{% data reusables.security-configurations.managing-GHAS-licenses %}

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Under "{% data variables.product.prodname_GH_advanced_security %}", click **Committers**.

   ![Screenshot of the {% data variables.product.prodname_GH_advanced_security %} licensing screen. The "Committers" dropdown is highlighted with an orange line.](/assets/images/help/enterprises/ghas-committers-dropdown.png)
1. Under "Committers", click **Manage committers**.
1. Under "Total committers", click the plus or minus buttons to add or remove committers.

   ![Screenshot of the {% data variables.product.prodname_GH_advanced_security %} committers screen. A text box with the number 5, with a minus and a plus button, are outlined in orange.](/assets/images/help/enterprises/ghas-add-committers.png)
1. Click **Update committers**.

## Canceling your {% data variables.product.prodname_GH_advanced_security %} subscription

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. To the right of "{% data variables.product.prodname_GH_advanced_security %}", click **Manage**, then click **Cancel Subscription**.

   ![Screenshot of the "Manage" dropdown in the {% data variables.product.prodname_GH_advanced_security %} licensing screen. The "Cancel Subscription" button is outlined in orange.](/assets/images/help/enterprises/ghas-cancel-subscription.png)
1. To confirm your cancellation, click **I understand, cancel Advanced Security**.
