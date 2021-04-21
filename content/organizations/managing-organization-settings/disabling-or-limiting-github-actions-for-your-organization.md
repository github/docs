---
title: Disabling or limiting GitHub Actions for your organization
intro: 'Organization owners can disable, enable, and limit GitHub Actions for an organization.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - organizations
  - teams
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### About {% data variables.product.prodname_actions %} permissions for your organization

{% data reusables.github-actions.disabling-github-actions %} For more information about {% data variables.product.prodname_actions %}, see "[About {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

You can enable {% data variables.product.prodname_actions %} for all repositories in your organization. {% data reusables.github-actions.enabled-actions-description %} You can disable {% data variables.product.prodname_actions %} for all repositories in your organization. {% data reusables.github-actions.disabled-actions-description %}

Alternatively, you can enable {% data variables.product.prodname_actions %} for all repositories in your organization but limit the actions a workflow can run. {% data reusables.github-actions.enabled-local-github-actions %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}

### Managing {% data variables.product.prodname_actions %} permissions for your organization

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Under **Local and third-party Actions**, select an option.
  ![Enable, disable, or limit actions for this organization](/assets/images/help/repository/enable-org-actions.png)
1. Click **Save**.

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

### Managing {% data variables.product.prodname_actions %} permissions for your organization

You can disable all workflows for an organization or set a policy that configures which actions can be used in an organization. 

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**Note:** You might not be able to manage these settings if your organization is managed by an enterprise that has overriding policy. For more information, {% if currentVersion == "free-pro-team@latest" %}"[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)."{% else %}"[Enforcing {% data variables.product.prodname_actions %} policies for your enterprise](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."{% endif %}

{% endnote %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Under **Policies**, select an option.
  ![Set actions policy for this organization](/assets/images/help/organizations/actions-policy.png)
1. Click **Save**.

### Allowing specific actions to run

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Under **Policies**, select **Allow select actions** and add your required actions to the list.
  ![Add actions to allow list](/assets/images/help/organizations/actions-policy-allow-list.png)
1. Click **Save**.

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Enabling workflows for private repository forks

{% data reusables.github-actions.private-repository-forks-overview %}

#### Configuring the private fork policy for an organization

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
### Setting the permissions of the `GITHUB_TOKEN` for your organization

{% data reusables.github-actions.workflow-permissions-intro %}

You can set the default permissions for the `GITHUB_TOKEN` in the settings for your organization or your repositories. If you choose the restricted option as the default in your organization settings, the same option is auto-selected in the settings for repositories within your organization, and the permissive option is disabled. If your organization belongs to a {% data variables.product.prodname_enterprise %} account and the more restricted default has been selected in the enterprise settings, you won't be able to choose the more permissive default in your organization settings.

{% data reusables.github-actions.workflow-permissions-modifying %}

#### Configuring the default `GITHUB_TOKEN` permissions

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Under **Workflow permissions**, choose whether you want the `GITHUB_TOKEN` to have read and write access for all scopes, or just read access for the `contents` scope.
  ![Set GITHUB_TOKEN permissions for this organization](/assets/images/help/settings/actions-workflow-permissions-organization.png)
1. Click **Save** to apply the settings.
{% endif %}
