---
title: Disabling or limiting GitHub Actions for your organization
intro: 'Organization owners can disable, enable, and limit GitHub Actions for an organization.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Disable or limit actions
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About {% data variables.product.prodname_actions %} permissions for your organization

{% data reusables.actions.disabling-github-actions %} For more information about {% data variables.product.prodname_actions %}, see "[About {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

You can enable {% data variables.product.prodname_actions %} for all repositories in your organization. {% data reusables.actions.enabled-actions-description %} You can disable {% data variables.product.prodname_actions %} for all repositories in your organization. {% data reusables.actions.disabled-actions-description %}

Alternatively, you can enable {% data variables.product.prodname_actions %} for all repositories in your organization but limit the actions a workflow can run. {% data reusables.actions.enabled-local-github-actions %}

## Managing {% data variables.product.prodname_actions %} permissions for your organization

You can disable all workflows for an organization or set a policy that configures which actions can be used in an organization.

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**Note:** You might not be able to manage these settings if your organization is managed by an enterprise that has overriding policy. For more information, see "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)."

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
1. Under **Policies**, select an option.
  ![Set actions policy for this organization](/assets/images/help/organizations/actions-policy.png)
1. Click **Save**.

## Allowing specific actions to run

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
1. Under **Policies**, select **Allow select actions** and add your required actions to the list.
   {%- ifversion ghes %}
   ![Add actions to allow list](/assets/images/help/organizations/actions-policy-allow-list.png)
   {%- else %}
   ![Add actions to allow list](/assets/images/enterprise/github-ae/organizations/actions-policy-allow-list.png)
   {%- endif %}
1. Click **Save**.

{% ifversion fpt or ghec %}
## Configuring required approval for workflows from public forks

{% data reusables.actions.workflow-run-approve-public-fork %}

You can configure this behavior for an organization using the procedure below. Modifying this setting overrides the configuration set at the enterprise level.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
{% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}
{% endif %}

{% ifversion fpt or ghes or ghec %}
## Enabling workflows for private repository forks

{% data reusables.actions.private-repository-forks-overview %}

{% ifversion ghec or ghae or ghes %}If a policy is disabled for an enterprise, it cannot be enabled for organizations.{% endif %} If a policy is disabled for an organization, it cannot be enabled for repositories. If an organization enables a policy, the policy can be disabled for individual repositories.

{% data reusables.actions.private-repository-forks-options %}

### Configuring the private fork policy for an organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
{% data reusables.actions.private-repository-forks-configure %}
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
## Setting the permissions of the `GITHUB_TOKEN` for your organization

{% data reusables.actions.workflow-permissions-intro %}

You can set the default permissions for the `GITHUB_TOKEN` in the settings for your organization or your repositories. If you choose the restricted option as the default in your organization settings, the same option is auto-selected in the settings for repositories within your organization, and the permissive option is disabled. If your organization belongs to a {% data variables.product.prodname_enterprise %} account and the more restricted default has been selected in the enterprise settings, you won't be able to choose the more permissive default in your organization settings.

{% data reusables.actions.workflow-permissions-modifying %}

### Configuring the default `GITHUB_TOKEN` permissions

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
1. Under **Workflow permissions**, choose whether you want the `GITHUB_TOKEN` to have read and write access for all scopes, or just read access for the `contents` scope.
  ![Set GITHUB_TOKEN permissions for this organization](/assets/images/help/settings/actions-workflow-permissions-organization.png)
1. Click **Save** to apply the settings.
{% endif %}
