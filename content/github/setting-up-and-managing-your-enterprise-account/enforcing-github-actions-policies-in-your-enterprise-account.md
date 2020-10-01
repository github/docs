---
title: Enforcing GitHub Actions policies in your enterprise account
intro: 'Enterprise owners can disable, enable, and limit {% data variables.product.prodname_actions %} for an enterprise account.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
---

### About {% data variables.product.prodname_actions %} permissions for your enterprise account

By default, {% data variables.product.prodname_actions %} is enabled in all organizations owned by an enterprise account. You can choose to disable {% data variables.product.prodname_actions %} for all organizations owned by an enterprise account, or only allow specified organizations. You can also limit the use of public actions, so that people can only use local actions that exist in your organization. 

For more information about {% data variables.product.prodname_actions %}, see "[About {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

### Managing {% data variables.product.prodname_actions %} permissions for your enterprise account

You can disable all workflows for an enterprise or set a policy that configures which actions can be used in an organization. 

{% data reusables.actions.actions-use-policy-settings %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}
1. Click **Save**.

### Allowing specific actions to run

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Under **Policies**, select **Allow specific actions** and add your required actions to the list.
  ![Add actions to allow list](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png)

### Enabling workflows for private repository forks

{% data reusables.github-actions.private-repository-forks-overview %}

#### Configuring the private fork policy for your enterprise account

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}
