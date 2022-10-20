---
title: Managing GitHub Actions settings for a repository
intro: 'You can disable or configure {% data variables.product.prodname_actions %} for a specific repository.'
redirect_from:
  - /github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-or-limiting-github-actions-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Permissions
  - Pull requests
shortTitle: Manage GitHub Actions settings
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About {% data variables.product.prodname_actions %} permissions for your repository

{% data reusables.actions.disabling-github-actions %} For more information about {% data variables.product.prodname_actions %}, see "[About {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

You can enable {% data variables.product.prodname_actions %} for your repository. {% data reusables.actions.enabled-actions-description %} You can disable {% data variables.product.prodname_actions %} for your repository altogether. {% data reusables.actions.disabled-actions-description %}

Alternatively, you can enable {% data variables.product.prodname_actions %} in your repository but limit the actions {% ifversion actions-workflow-policy %}and reusable workflows{% endif %} a workflow can run.

## Managing {% data variables.product.prodname_actions %} permissions for your repository

You can disable {% data variables.product.prodname_actions %} for a repository, or set a policy that configures which actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} can be used in the repository.

{% note %}

**Note:** You might not be able to manage these settings if your organization has an overriding policy or is managed by an enterprise that has overriding policy. For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" or "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)."

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
1. Under "Actions permissions", select an option.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %}
   ![Set actions policy for this repository](/assets/images/help/repository/actions-policy-with-workflows.png)
   {%- else %}
   ![Set actions policy for this repository](/assets/images/help/repository/actions-policy.png)
   {%- endif %}
1. Click **Save**.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
1. Under "Actions permissions", select {% data reusables.actions.policy-label-for-select-actions-workflows %} and add your required actions to the list.

   {% ifversion actions-workflow-policy%}
   ![Add actions and reusable workflows to the allow list](/assets/images/help/repository/actions-policy-allow-list-with-workflows.png)
   {%- elsif ghes %}
   ![Add actions to the allow list](/assets/images/help/repository/actions-policy-allow-list.png)
   {%- else %}
   ![Add actions to the allow list](/assets/images/enterprise/github-ae/repository/actions-policy-allow-list.png)
   {%- endif %}
1. Click **Save**.

{% ifversion fpt or ghec %}
## Controlling changes from forks to workflows in public repositories

{% data reusables.actions.workflow-run-approve-public-fork %}

You can configure this behavior for a repository using the procedure below. Modifying this setting overrides the configuration set at the organization or enterprise level.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
{% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}
{% endif %}

## Enabling workflows for forks of private repositories

{% data reusables.actions.private-repository-forks-overview %}

If a policy is disabled for an {% ifversion ghec or ghae or ghes %}enterprise or{% endif %} organization, it cannot be enabled for a repository.

{% data reusables.actions.private-repository-forks-options %}

### Configuring the fork policy for a private repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
{% data reusables.actions.private-repository-forks-configure %}

## Setting the permissions of the `GITHUB_TOKEN` for your repository

{% data reusables.actions.workflow-permissions-intro %}

The default permissions can also be configured in the organization settings. If your repository belongs to an organization and a more restrictive default has been selected in the organization settings, the same option is selected in your repository settings and the permissive option is disabled.

{% data reusables.actions.workflow-permissions-modifying %}

### Configuring the default `GITHUB_TOKEN` permissions

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
By default, when you create a new repository in your personal account, `GITHUB_TOKEN` only has read access for the `contents` scope. If you create a new repository in an organization, the setting is inherited from what is configured in the organization settings.
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
1. Under "Workflow permissions", choose whether you want the `GITHUB_TOKEN` to have read and write access for all scopes, or just read access for the `contents` scope.

   {% ifversion allow-actions-to-approve-pr-with-ent-repo %}
   ![Set GITHUB_TOKEN permissions for this repository](/assets/images/help/settings/actions-workflow-permissions-repository-with-pr-approval.png)
   {% else %}
   ![Set GITHUB_TOKEN permissions for this repository](/assets/images/help/settings/actions-workflow-permissions-repository.png)
   {% endif %}

1. Click **Save** to apply the settings.

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### Preventing {% data variables.product.prodname_actions %} from creating or approving pull requests

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

By default, when you create a new repository in your personal account, workflows are not allowed to create or approve pull requests. If you create a new repository in an organization, the setting is inherited from what is configured in the organization settings.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
1. Under "Workflow permissions", use the **Allow GitHub Actions to create and approve pull requests** setting to configure whether `GITHUB_TOKEN` can create and approve pull requests.

   ![Set GITHUB_TOKEN permissions for this repository](/assets/images/help/settings/actions-workflow-permissions-repository-with-pr-approval.png)
1. Click **Save** to apply the settings.
{% endif %}

{% ifversion ghes > 3.3 or ghae > 3.3 or ghec %}
## Allowing access to components in an internal repository

Members of your enterprise can use internal repositories to work on projects without sharing information publicly. For information, see "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)."

You can use the steps below to configure whether {% ifversion internal-actions%}actions and {% endif %}workflows in an internal repository can be accessed from outside the repository.{% ifversion internal-actions %} For more information, see "[Sharing actions and workflows with your enterprise](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)." Alternatively, you can use the REST API to set, or get details of, the level of access. For more information, see "[Get the level of access for workflows outside of the repository](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#get-the-level-of-access-for-workflows-outside-of-the-repository)" and "[Set the level of access for workflows outside of the repository](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#set-the-level-of-access-for-workflows-outside-of-the-repository)."{% endif %}

1. On {% data variables.product.prodname_dotcom %}, navigate to the main page of the internal repository.
1. Under your repository name, click {% octicon "gear" aria-label="The gear icon" %} **Settings**.
{% data reusables.repositories.settings-sidebar-actions-general %}
1. Under **Access**, choose one of the access settings:

   {% ifversion ghes > 3.4 or ghae > 3.4 or ghec %}![Set the access to Actions components](/assets/images/help/settings/actions-access-settings.png){% else %}![Set the access to Actions components](/assets/images/enterprise/3.4/actions-access-settings.png){% endif %}

   * **Not accessible** - Workflows in other repositories cannot access this repository.
   * **Accessible from repositories in the 'ORGANIZATION NAME' organization** - {% ifversion ghes > 3.4 or ghae > 3.4 or ghec %}Workflows in other repositories that are part of the 'ORGANIZATION NAME' organization can access the actions and workflows in this repository. Access is allowed only from private or internal repositories.{% else %}Workflows in other repositories can use workflows in this repository if they are part of the same organization and their visibility is private or internal.{% endif %}
   * **Accessible from repositories in the 'ENTERPRISE NAME' enterprise** - {% ifversion ghes > 3.4 or ghae > 3.4 or ghec %}Workflows in other repositories that are part of the 'ENTERPRISE NAME' enterprise can access the actions and workflows in this repository. Access is allowed only from private or internal repositories.{% else %}Workflows in other repositories can use workflows in this repository if they are part of the same enterprise and their visibility is private or internal.{% endif %}
1. Click **Save** to apply the settings.
{% endif %}

## Configuring the retention period for {% data variables.product.prodname_actions %} artifacts and logs in your repository

You can configure the retention period for {% data variables.product.prodname_actions %} artifacts and logs in your repository.

{% data reusables.actions.about-artifact-log-retention %}

You can also define a custom retention period for a specific artifact created by a workflow. For more information, see "[Setting the retention period for an artifact](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)."

## Setting the retention period for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
{% data reusables.actions.change-retention-period-for-artifacts-logs  %}

{% ifversion actions-cache-policy-apis %}

## Configuring cache storage for a repository

{% data reusables.actions.cache-default-size %} However, these default sizes might be different if an enterprise owner has changed them. {% data reusables.actions.cache-eviction-process %}

You can set a total cache storage size for your repository up to the maximum size allowed by the {% ifversion actions-cache-admin-ui %}organization or{% endif %} enterprise policy setting{% ifversion actions-cache-admin-ui %}s{% endif %}.

{% ifversion actions-cache-admin-ui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
{% data reusables.actions.change-cache-size-limit  %}

{% else %}

The repository settings for {% data variables.product.prodname_actions %} cache storage can currently only be modified using the REST API:

* To view the current cache storage limit for a repository, see "[Get GitHub Actions cache usage policy for a repository](/rest/actions/cache#get-github-actions-cache-usage-policy-for-a-repository)."
* To change the cache storage limit for a repository, see "[Set GitHub Actions cache usage policy for a repository](/rest/actions/cache#set-github-actions-cache-usage-policy-for-a-repository)."

{% data reusables.actions.cache-no-org-policy %}

{% endif %}

{% endif %}
