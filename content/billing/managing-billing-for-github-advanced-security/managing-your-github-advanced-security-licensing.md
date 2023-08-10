---
title: Managing your GitHub Advanced Security licensing
intro: 'You can add or remove {% data variables.product.prodname_GH_advanced_security %} licenses for your enterprise.'
permissions: 'Enterprise owners can manage licensing for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas-ghec %}'
versions:
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: Manage Advanced Security licensing
---
## About licensing for GitHub Advanced Security

Each license for {% data variables.product.prodname_GH_advanced_security %} specifies a maximum number of accounts that can use these features. Each active committer to at least one repository with the feature enabled uses one {% ifversion ghas-billing-UI-update %}license{% else %}seat{% endif %}. A committer is considered active if one of their commits has been pushed to the repository within the last 90 days, regardless of when it was originally authored. For more information about committer numbers, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)." For information about purchasing a license, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/signing-up-for-github-advanced-security)."

## Managing the number of GitHub Advanced Security committers

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Under "{% data variables.product.prodname_GH_advanced_security %} GitHub Advanced Security", click **Committers**.

   ![Screenshot of the {% data variables.product.prodname_GH_advanced_security %} licensing screen. The "Committers" dropdown is highlighted with an orange line.](/assets/images/help/enterprises/ghas-committers-dropdown.png)
1. Under "Committers", click **Manage committers**.
1. Under "Total committers", click the plus or minus buttons to add or remove committers.

   ![Screenshot of the {% data variables.product.prodname_GH_advanced_security %} committers screen. A text box with the number 5, a minus button on its left, and a plus button on its right, are highlighted in an orange outline.](/assets/images/help/enterprises/ghas-add-committers.png)
1. Click **Update committers**.

## Canceling your {% data variables.product.prodname_GH_advanced_security %} subscription

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. To the right of "GitHub Advanced Security", click **Manage**, then click **Cancel Subscription**.

   ![Screenshot of the "Manage" dropdown in the {% data variables.product.prodname_GH_advanced_security %} licensing screen. The "Cancel Subscription" button is highlighted with an orange outline.](/assets/images/help/enterprises/ghas-cancel-subscription.png)
1. To confirm your cancellation, click **I understand, cancel Advanced Security**.
