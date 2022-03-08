---
title: 禁用或限制组织的 GitHub Actions
intro: 组织所有者可禁用、启用和限制组织的 GitHub Actions。
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
shortTitle: 禁用或限制操作
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于组织的 {% data variables.product.prodname_actions %} 权限

{% data reusables.actions.disabling-github-actions %} 有关 {% data variables.product.prodname_actions %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)”。

您可以对组织中的所有仓库启用 {% data variables.product.prodname_actions %}。 {% data reusables.actions.enabled-actions-description %} 您可以对组织中的所有仓库禁用 {% data variables.product.prodname_actions %}。 {% data reusables.actions.disabled-actions-description %}

此外，您可以对组织中的所有仓库启用 {% data variables.product.prodname_actions %}，但限制工作流程可以运行的操作。 {% data reusables.actions.enabled-local-github-actions %}

## 管理组织的 {% data variables.product.prodname_actions %} 权限

您可以禁用组织的所有工作流程，或者设置策略来配置哪些操作可用于组织中。

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**注：**如果您的组织由具有覆盖策略的企业管理，您可能无法管理这些设置。 更多信息请参阅“[在企业中执行 {% data variables.product.prodname_actions %} 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)”。

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. 在 **Policies（策略）**下，选择一个选项。 ![设置此组织的操作策略](/assets/images/help/organizations/actions-policy.png)
1. 单击 **Save（保存）**。

## 允许特定操作运行

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. 在 **Policies（策略）**下，选择 **Allow select actions（允许选择操作）**并将所需操作添加到列表中。
   {%- ifversion ghes %}
   ![添加操作到允许列表](/assets/images/help/organizations/actions-policy-allow-list.png)
   {%- else %}
   ![添加操作到允许列表](/assets/images/enterprise/github-ae/organizations/actions-policy-allow-list.png)
   {%- endif %}
1. 单击 **Save（保存）**。

{% ifversion fpt or ghec %}
## 配置公共复刻工作流程所需的批准

{% data reusables.actions.workflow-run-approve-public-fork %}

您可以使用以下程序为组织配置此行为。 修改此设置会覆盖企业级别的配置集。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
{% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}
{% endif %}

{% ifversion fpt or ghes or ghec %}
## 为私有仓库复刻启用工作流程

{% data reusables.actions.private-repository-forks-overview %}

{% ifversion ghec or ghae or ghes %}如果对企业禁用了某个策略，则无法对组织启用该策略。{% endif %} 如果对组织禁用了某个策略，则无法对仓库启用该策略。 如果组织启用了某个策略，则可以对个别仓库禁用该策略。

{% data reusables.actions.private-repository-forks-options %}

### 为组织配置私有复刻策略

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
{% data reusables.actions.private-repository-forks-configure %}
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
## 为您的组织设置 `GITHUB_TOKENN` 的权限

{% data reusables.actions.workflow-permissions-intro %}

您可以在组织或仓库的设置中为 `GITHUB_TOKEN` 设置默认权限。 如果您在组织设置中选择受限制的选项为默认值，则在您的组织内仓库的设置中，自动选择相同的选项，允许选项也会被禁用。 如果您的组织属于 {% data variables.product.prodname_enterprise %} 帐户，并且在企业设置中选择了更受限制的默认值，则您将无法在组织设置中选择更宽松的默认值。

{% data reusables.actions.workflow-permissions-modifying %}

### 配置默认 `GITHUB_TOKENN` 权限

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. 在 **Workflow permissions（工作流程权限）**下，选择您是否想要 `GITHUB_TOKENN` 读写所有范围限， 或者只读`内容`范围。 ![为此组织设置 GITHUB_TOKENN 权限](/assets/images/help/settings/actions-workflow-permissions-organization.png)
1. 单击 **Save（保存）**以应用设置。
{% endif %}
