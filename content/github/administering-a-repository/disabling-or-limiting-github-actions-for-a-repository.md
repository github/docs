---
title: Disabling or limiting GitHub Actions for a repository
intro: 'Repository owners can disable, enable, and limit {% data variables.product.prodname_actions %} for a specific repository.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### About {% data variables.product.prodname_actions %} permissions for your repository

{% data reusables.github-actions.disabling-github-actions %} For more information about {% data variables.product.prodname_actions %}, see "[About {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

You can enable {% data variables.product.prodname_actions %} for your repository. {% data reusables.github-actions.enabled-actions-description %} You can disable {% data variables.product.prodname_actions %} for your repository altogether. {% data reusables.github-actions.disabled-actions-description %}

Alternatively, you can enable {% data variables.product.prodname_actions %} in your repository but limit the actions a workflow can run. {% data reusables.github-actions.enabled-local-github-actions %}

### Managing {% data variables.product.prodname_actions %} permissions for your repository

{% note %}

**Note:** You might not be able to manage these settings if your organization has an overriding policy or is managed by an enterprise that has overriding policy. For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)" or {% if currentVersion == "free-pro-team@latest" %}"[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account)."{% else if currentVersion ver_gt "enterprise-server@2.21"%}"[Enforcing {% data variables.product.prodname_actions %} policies for your enterprise](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."{% endif %} 

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
4. Under "Actions permissions", select an option.
  ![Enable, disable, or limits actions for this repository](/assets/images/help/repository/enable-repo-actions.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Enabling workflows for private repository forks

{% data reusables.github-actions.private-repository-forks-overview %}

#### Configuring the private fork policy for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
