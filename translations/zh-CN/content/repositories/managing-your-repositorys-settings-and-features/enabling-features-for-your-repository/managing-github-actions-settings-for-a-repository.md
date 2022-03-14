---
title: 管理存储库的 GitHub Actions 设置
intro: '您可以对特定仓库禁用或配置 {% data variables.product.prodname_actions %}。'
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
shortTitle: 管理 GitHub Actions 设置
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于仓库的 {% data variables.product.prodname_actions %} 权限

{% data reusables.actions.disabling-github-actions %} 有关 {% data variables.product.prodname_actions %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)”。

您可以对您的仓库启用 {% data variables.product.prodname_actions %}。 {% data reusables.actions.enabled-actions-description %} 您可以对您的仓库完全禁用 {% data variables.product.prodname_actions %}。 {% data reusables.actions.disabled-actions-description %}

此外，您可以在您的仓库中启用 {% data variables.product.prodname_actions %}，但限制工作流程可以运行的操作。 {% data reusables.actions.enabled-local-github-actions %}

## 管理仓库的 {% data variables.product.prodname_actions %} 权限

您可以禁用仓库的所有工作流程，或者设置策略来配置哪些动作可用于仓库中。

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**注：**如果您的组织有覆盖策略或由具有覆盖策略的企业帐户管理，则可能无法管理这些设置。 更多信息请参阅“[禁用或限制组织的 {% data variables.product.prodname_actions %}](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)”或“[在企业帐户中实施 {% data variables.product.prodname_actions %} 策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)”。

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

   {%- ifversion ghes %}
   ![添加操作到允许列表](/assets/images/help/repository/actions-policy-allow-list.png)
   {%- else %}
   ![添加操作到允许列表](/assets/images/enterprise/github-ae/repository/actions-policy-allow-list.png)
   {%- endif %}

1. 单击 **Save（保存）**。

{% ifversion fpt or ghec %}
## 配置公共复刻工作流程所需的批准

{% data reusables.actions.workflow-run-approve-public-fork %}

您可以使用以下过程为存储库配置此行为。 修改此设置会覆盖组织或企业级别的配置集。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}
{% endif %}

## 为私有仓库复刻启用工作流程

{% data reusables.actions.private-repository-forks-overview %}

如果为 {% ifversion ghec or ghae or ghes %}企业或{% endif %} 组织禁用了某个策略，则无法为存储库启用该策略。

{% data reusables.actions.private-repository-forks-options %}

### 为仓库配置私有复刻策略

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.actions.private-repository-forks-configure %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
## 为您的仓库设置 `GITHUB_TOKENN` 的权限

{% data reusables.actions.workflow-permissions-intro %}

默认权限也可以在组织设置中配置。 如果在组织设置中选择了更受限制的默认值，则在仓库设置中自动选择相同的选项，并禁用许可的选项。

{% data reusables.actions.workflow-permissions-modifying %}

### 配置默认 `GITHUB_TOKENN` 权限

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. 在 **Workflow permissions（工作流程权限）**下，选择您是否想要 `GITHUB_TOKENN` 读写所有范围限， 或者只读`内容`范围。

  ![为此仓库设置 GITHUB_TOKENN 权限](/assets/images/help/settings/actions-workflow-permissions-repository.png)

1. 单击 **Save（保存）**以应用设置。
{% endif %}

{% ifversion ghes > 3.3 or ghae-issue-4757 or ghec %}
## 允许访问内部存储库中的组件

企业成员可以使用内部存储库来处理项目，而无需公开共享信息。 更多信息请参阅“[关于仓库](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)”。

您可以使用以下步骤配置是否可以从存储库外部访问内部存储库中的 {% if internal-actions%}操作和 {% endif %}工作流程。{% if internal-actions %} 更多信息请参阅“[与企业共享操作和工作流程](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)”。 或者，您可以使用 REST API 来设置或获取访问级别的详细信息。 更多信息请参阅“[获取存储库外部工作流程的访问级别](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#get-the-level-of-access-for-workflows-outside-of-the-repository)”和“[设置存储库外部工作流程的访问级别](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#set-the-level-of-access-for-workflows-outside-of-the-repository)”。{% endif %}

1. 在 {% data variables.product.prodname_dotcom %} 上，导航到内部仓库的主页面。
1. 在仓库名称下，单击 {% octicon "gear" aria-label="The gear icon" %}**Settings（设置）**。
{% data reusables.repositories.settings-sidebar-actions %}
1. 在 **Access（访问）**下，选择以下访问设置之一：

   {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}![Set the access to Actions components](/assets/images/help/settings/actions-access-settings.png){% else %}![Set the access to Actions components](/assets/images/enterprise/3.4/actions-access-settings.png){% endif %}

   * **Not accessible（无法访问）**- 其他存储库中的工作流程无法访问此存储库。
   * **可从 'ORGANIZATION NAME' 组织中的存储库访问** - {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}属于 'ORGANIZATION NAME' 组织的其他存储库中的工作流程可以访问此存储库中的操作和工作流程。 仅允许从私有或内部存储库进行访问。{% else %}如果其他存储库中的工作流程属于同一组织，并且其可见性是私有或内部，则可以使用此存储库中的工作流程。{% endif %}
   * **可从 ''ENTERPRISE NAME' 企业中的存储库访问** - {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}属于 ''ENTERPRISE NAME' 企业的其他存储库中的工作流程可以访问此存储库中的操作和工作流程。 仅允许从私有或内部存储库进行访问。{% else %}如果其他存储库中的工作流程属于同一企业，并且其可见性是私有或内部，则可以使用此存储库中的工作流程。{% endif %}
1. 单击 **Save（保存）**以应用设置。
{% endif %}

## 为仓库中构件和日志的 {% data variables.product.prodname_actions %} 配置保留期

您可以为仓库中的 {% data variables.product.prodname_actions %} 构件和日志配置保留期。

{% data reusables.actions.about-artifact-log-retention %}

您还可以为工作流程创建的特定构件自定义保留期。 更多信息请参阅“[设置构件的保留期](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)”。

## 设置仓库的保留期

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.actions.change-retention-period-for-artifacts-logs  %}
