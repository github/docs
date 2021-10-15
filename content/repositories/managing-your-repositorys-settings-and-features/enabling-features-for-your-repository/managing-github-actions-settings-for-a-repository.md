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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About {% data variables.product.prodname_actions %} permissions for your repository

{% data reusables.github-actions.disabling-github-actions %} For more information about {% data variables.product.prodname_actions %}, see "[About {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

You can enable {% data variables.product.prodname_actions %} for your repository. {% data reusables.github-actions.enabled-actions-description %} You can disable {% data variables.product.prodname_actions %} for your repository altogether. {% data reusables.github-actions.disabled-actions-description %}

Alternatively, you can enable {% data variables.product.prodname_actions %} in your repository but limit the actions a workflow can run. {% data reusables.github-actions.enabled-local-github-actions %}

{% ifversion ghes < 3.0 %}

## Managing {% data variables.product.prodname_actions %} permissions for your repository

{% note %}

**Note:** You might not be able to manage these settings if your organization has an overriding policy or is managed by an enterprise that has overriding policy. For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" or "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)."

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
4. Under "Actions permissions", select an option.
  ![Enable, disable, or limits actions for this repository](/assets/images/help/repository/enable-repo-actions.png)

{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae-next or ghec %}

## Managing {% data variables.product.prodname_actions %} permissions for your repository

You can disable all workflows for a repository or set a policy that configures which actions can be used in a repository.

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**Note:** You might not be able to manage these settings if your organization has an overriding policy or is managed by an enterprise that has overriding policy. For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" or "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)."

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Under **Actions permissions**, select an option.
  ![Set actions policy for this organization](/assets/images/help/repository/actions-policy.png)
1. Click **Save**.

## Allowing specific actions to run

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Under **Actions permissions**, select **Allow select actions** and add your required actions to the list.
   {%- ifversion ghes %}
   ![Add actions to allow list](/assets/images/help/repository/actions-policy-allow-list.png)
   {%- else %}
   ![Add actions to allow list](/assets/images/enterprise/github-ae/repository/actions-policy-allow-list.png)
   {%- endif %}
2. Click **Save**.
{% endif %}

{% ifversion fpt or ghec %}
## Configuring required approval for workflows from public forks

{% data reusables.actions.workflow-run-approve-public-fork %}

You can configure this behavior for a repository using the procedure below. Modifying this setting overrides the configuration set at the organization or enterprise level.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}
{% endif %}

{% ifversion fpt or ghes > 2.22 or ghec %}
## Enabling workflows for private repository forks

{% data reusables.github-actions.private-repository-forks-overview %}

### Configuring the private fork policy for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
## Setting the permissions of the `GITHUB_TOKEN` for your repository

{% data reusables.github-actions.workflow-permissions-intro %}

The default permissions can also be configured in the organization settings. If the more restricted default has been selected in the organization settings, the same option is auto-selected in your repository settings and the permissive option is disabled.

{% data reusables.github-actions.workflow-permissions-modifying %}

### Configuring the default `GITHUB_TOKEN` permissions

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Under **Workflow permissions**, choose whether you want the `GITHUB_TOKEN` to have read and write access for all scopes, or just read access for the `contents` scope.
  ![Set GITHUB_TOKEN permissions for this repository](/assets/images/help/settings/actions-workflow-permissions-repository.png)
1. Click **Save** to apply the settings.
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## Allowing access to components in an internal repository

{% note %}

**Note:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

Members of your enterprise can use internal repositories to work on projects without sharing information publicly. For information, see "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)." 

To configure whether workflows in an internal repository can be accessed from outside the repository:

1. On {% data variables.product.prodname_dotcom %}, navigate to the main page of the internal repository.
1. Under your repository name, click {% octicon "gear" aria-label="The gear icon" %} **Settings**.
{% data reusables.repositories.settings-sidebar-actions %}
1. Under **Access**, choose one of the access settings:
   ![Set the access to Actions components](/assets/images/help/settings/actions-access-settings.png)
   * **Not accessible** - Workflows in other repositories can't use workflows in this repository.
   * **Accessible by any repository in the organization** - Workflows in other repositories can use workflows in this repository as long as they are part of the same organization.
   * **Accessible by any repository in the enterprise** - Workflows in other repositories can use workflows in this repository as long as they are part of the same enterprise.
1. Click **Save** to apply the settings.
{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae or ghec %}
## Configuring the retention period for {% data variables.product.prodname_actions %} artifacts and logs in your repository

You can configure the retention period for {% data variables.product.prodname_actions %} artifacts and logs in your repository.

{% data reusables.actions.about-artifact-log-retention %}

You can also define a custom retention period for a specific artifact created by a workflow. For more information, see "[Setting the retention period for an artifact](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)."

## Setting the retention period for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}
{% endif %}
