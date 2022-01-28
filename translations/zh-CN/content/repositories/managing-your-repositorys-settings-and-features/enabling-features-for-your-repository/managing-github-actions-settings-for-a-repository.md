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

## 关于仓库的 {% data variables.product.prodname_actions %} 权限

{% data reusables.github-actions.disabling-github-actions %} 有关 {% data variables.product.prodname_actions %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)”。

您可以对您的仓库启用 {% data variables.product.prodname_actions %}。 {% data reusables.github-actions.enabled-actions-description %} 您可以对您的仓库完全禁用 {% data variables.product.prodname_actions %}。 {% data reusables.github-actions.disabled-actions-description %}

此外，您可以在您的仓库中启用 {% data variables.product.prodname_actions %}，但限制工作流程可以运行的操作。 {% data reusables.github-actions.enabled-local-github-actions %}

## 管理仓库的 {% data variables.product.prodname_actions %} 权限

您可以禁用仓库的所有工作流程，或者设置策略来配置哪些动作可用于仓库中。

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**注：**如果您的组织有覆盖策略或由具有覆盖策略的企业帐户管理，则可能无法管理这些设置。 For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" or "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)."

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. 在 **Actions permissions（操作权限）**下，选择一个选项。

  ![设置此组织的操作策略](/assets/images/help/repository/actions-policy.png)

1. 单击 **Save（保存）**。

## 允许特定操作运行

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. 在 **Actions permissions（操作权限）**下，选择 **Allow select actions（允许选择操作）**并将所需操作添加到列表中。

   {%- ifversion ghes > 3.0 %}
   ![添加操作到允许列表](/assets/images/help/repository/actions-policy-allow-list.png)
   {%- else %}
   ![添加操作到允许列表](/assets/images/enterprise/github-ae/repository/actions-policy-allow-list.png)
   {%- endif %}

1. 单击 **Save（保存）**。

{% ifversion fpt or ghec %}
## 配置公共复刻工作流程所需的批准

{% data reusables.actions.workflow-run-approve-public-fork %}

You can configure this behavior for a repository using the procedure below. 修改此设置会覆盖组织或企业级别的配置集。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}
{% endif %}

## 为私有仓库复刻启用工作流程

{% data reusables.github-actions.private-repository-forks-overview %}

### 为仓库配置私有复刻策略

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
## 为您的仓库设置 `GITHUB_TOKENN` 的权限

{% data reusables.github-actions.workflow-permissions-intro %}

默认权限也可以在组织设置中配置。 如果在组织设置中选择了更受限制的默认值，则在仓库设置中自动选择相同的选项，并禁用许可的选项。

{% data reusables.github-actions.workflow-permissions-modifying %}

### 配置默认 `GITHUB_TOKENN` 权限

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. 在 **Workflow permissions（工作流程权限）**下，选择您是否想要 `GITHUB_TOKENN` 读写所有范围限， 或者只读`内容`范围。

  ![为此仓库设置 GITHUB_TOKENN 权限](/assets/images/help/settings/actions-workflow-permissions-repository.png)

1. 单击 **Save（保存）**以应用设置。
{% endif %}

{% ifversion ghes > 3.3 or ghae-issue-4757 or ghec %}
## Allowing access to components in an internal repository

Members of your enterprise can use internal repositories to work on projects without sharing information publicly. For information, see "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)."

You can configure whether {% if internal-actions%}actions and {% endif %}workflows in an internal repository can be accessed from outside the repository.{% if internal-actions %} For more information, see "[Sharing actions and workflows with your enterprise](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)."{% endif %}

1. On {% data variables.product.prodname_dotcom %}, navigate to the main page of the internal repository.
1. Under your repository name, click {% octicon "gear" aria-label="The gear icon" %} **Settings**.
{% data reusables.repositories.settings-sidebar-actions %}
1. Under **Access**, choose one of the access settings:

   {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}![Set the access to Actions components](/assets/images/help/settings/actions-access-settings.png){% else %}![Set the access to Actions components](/assets/images/enterprise/3.4/actions-access-settings.png){% endif %}

   * **Not accessible** - Workflows in other repositories cannot access this repository.
   * **Accessible from repositories in the 'ORGANIZATION NAME' organization** - {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Workflows in other repositories that are part of the 'ORGANIZATION NAME' organization can access the actions and workflows in this repository. Access is allowed only from private or internal repositories.{% else %}Workflows in other repositories can use workflows in this repository if they are part of the same organization and their visibility is private or internal.{% endif %}
   * **Accessible from repositories in the 'ENTERPRISE NAME' enterprise** - {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Workflows in other repositories that are part of the 'ENTERPRISE NAME' enterprise can access the actions and workflows in this repository. Access is allowed only from private or internal repositories.{% else %}Workflows in other repositories can use workflows in this repository if they are part of the same enterprise and their visibility is private or internal.{% endif %}
1. 单击 **Save（保存）**以应用设置。
{% endif %}

## Configuring the retention period for {% data variables.product.prodname_actions %} artifacts and logs in your repository

您可以为仓库中的 {% data variables.product.prodname_actions %} 构件和日志配置保留期。

{% data reusables.actions.about-artifact-log-retention %}

您还可以为工作流程创建的特定构件自定义保留期。 更多信息请参阅“[设置构件的保留期](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)”。

## 设置仓库的保留期

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}
