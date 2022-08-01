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
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About {% data variables.product.prodname_actions %} permissions for your organization

{% data reusables.actions.disabling-github-actions %} For more information about {% data variables.product.prodname_actions %}, see "[About {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

You can enable {% data variables.product.prodname_actions %} for all repositories in your organization. {% data reusables.actions.enabled-actions-description %} You can disable {% data variables.product.prodname_actions %} for all repositories in your organization. {% data reusables.actions.disabled-actions-description %}

Alternatively, you can enable {% data variables.product.prodname_actions %} for all repositories in your organization but limit the actions {% ifversion actions-workflow-policy %}and reusable workflows{% endif %} a workflow can run.

## Managing {% data variables.product.prodname_actions %} permissions for your organization

You can choose to disable {% data variables.product.prodname_actions %} for all repositories in your organization, or only allow specific repositories. You can also limit the use of public actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %}, so that people can only use local actions {% ifversion actions-workflow-policy %}and reusable workflows{% endif %} that exist in your {% ifversion ghec or ghes or ghae %}enterprise{% else %}organization{% endif %}.

{% note %}

**Note:** You might not be able to manage these settings if your organization is managed by an enterprise that has overriding policy. For more information, see "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)."

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
1. Under "Policies", select an option.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %}
   ![Set actions policy for this organization](/assets/images/help/organizations/actions-policy-with-workflows.png)
   {%- else %}
   ![Set actions policy for this organization](/assets/images/help/organizations/actions-policy.png)
   {%- endif %}
1. Click **Save**.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
1. Under "Policies", select {% data reusables.actions.policy-label-for-select-actions-workflows %} and add your required actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} to the list.

   {% ifversion actions-workflow-policy %}
   ![Add actions and reusable workflows to the allow list](/assets/images/help/organizations/actions-policy-allow-list-with-workflows.png)
   {%- elsif ghes %}
   ![Add actions to the allow list](/assets/images/help/organizations/actions-policy-allow-list.png)
   {%- else %}
   ![Add actions to the allow list](/assets/images/enterprise/github-ae/organizations/actions-policy-allow-list.png)
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

## Setting the permissions of the `GITHUB_TOKEN` for your organization

{% data reusables.actions.workflow-permissions-intro %}

You can set the default permissions for the `GITHUB_TOKEN` in the settings for your organization or your repositories. If you select a restrictive option as the default in your organization settings, the same option is selected in the settings for repositories within your organization, and the permissive option is disabled. If your organization belongs to a {% data variables.product.prodname_enterprise %} account and a more restrictive default has been selected in the enterprise settings, you won't be able to select the more permissive default in your organization settings.

{% data reusables.actions.workflow-permissions-modifying %}

### Configuring the default `GITHUB_TOKEN` permissions

{% ifversion allow-actions-to-approve-pr-with-ent-repo  %}
By default, when you create a new organization, `GITHUB_TOKEN` only has read access for the `contents` scope.
{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
1. Under "Workflow permissions", choose whether you want the `GITHUB_TOKEN` to have read and write access for all scopes, or just read access for the `contents` scope.

   ![Set GITHUB_TOKEN permissions for this organization](/assets/images/help/settings/actions-workflow-permissions-organization{% ifversion allow-actions-to-approve-pr %}-with-pr-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creation-{% endif %}approval{% endif %}.png)
1. Click **Save** to apply the settings.

{% ifversion allow-actions-to-approve-pr %}
### Preventing {% data variables.product.prodname_actions %} from {% ifversion allow-actions-to-approve-pr-with-ent-repo %}creating or {% endif %}approving pull requests

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

By default, when you create a new organization, workflows are not allowed to {% ifversion allow-actions-to-approve-pr-with-ent-repo %}create or {% endif %}approve pull requests.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
1. Under "Workflow permissions", use the **Allow GitHub Actions to {% ifversion allow-actions-to-approve-pr-with-ent-repo %}create and {% endif %}approve pull requests** setting to configure whether `GITHUB_TOKEN` can {% ifversion allow-actions-to-approve-pr-with-ent-repo %}create and {% endif %}approve pull requests.

   ![Set GITHUB_TOKEN pull request approval permission for this organization](/assets/images/help/settings/actions-workflow-permissions-organization{% ifversion allow-actions-to-approve-pr %}-with-pr-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creation-{% endif %}approval{% endif %}.png)
1. Click **Save** to apply the settings.

{% endif %}
