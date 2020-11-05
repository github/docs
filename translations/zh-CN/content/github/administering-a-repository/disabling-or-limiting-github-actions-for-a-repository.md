---
title: 禁用或限制仓库的 GitHub 操作
intro: '仓库所有者可禁用、启用和限制特定仓库的 {% data variables.product.prodname_actions %}。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 关于仓库的 {% data variables.product.prodname_actions %} 权限

{% data reusables.github-actions.disabling-github-actions %} 有关 {% data variables.product.prodname_actions %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)”。

您可以对您的仓库启用 {% data variables.product.prodname_actions %}。 {% data reusables.github-actions.enabled-actions-description %} 您可以对您的仓库完全禁用 {% data variables.product.prodname_actions %}。 {% data reusables.github-actions.disabled-actions-description %}

此外，您可以在您的仓库中启用 {% data variables.product.prodname_actions %}，但限制工作流程可以运行的操作。 {% data reusables.github-actions.enabled-local-github-actions %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}

### 管理仓库的 {% data variables.product.prodname_actions %} 权限

{% note %}

**注：**如果您的组织有覆盖策略或由具有覆盖策略的企业帐户管理，则可能无法管理这些设置。 For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)" or {% if currentVersion == "free-pro-team@latest" %}"[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)."{% elsif currentVersion ver_gt "enterprise-server@2.21"%}"[Enforcing {% data variables.product.prodname_actions %} policies for your enterprise](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."{% endif %}

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
4. 在“Actions permissions（操作权限）”下，选择一个选项。 ![启用、禁用或限制此仓库的操作](/assets/images/help/repository/enable-repo-actions.png)

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

### 管理仓库的 {% data variables.product.prodname_actions %} 权限

您可以禁用仓库的所有工作流程，或者设置策略来配置哪些动作可用于仓库中。

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**注：**如果您的组织有覆盖策略或由具有覆盖策略的企业帐户管理，则可能无法管理这些设置。 For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)" or {% if currentVersion == "free-pro-team@latest" %}"[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)."{% elsif currentVersion ver_gt "enterprise-server@2.21" %}"[Enforcing {% data variables.product.prodname_actions %} policies for your enterprise](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."

{% endif %}

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. 在 **Actions permissions（操作权限）**下，选择一个选项。 ![设置此组织的操作策略](/assets/images/help/repository/actions-policy.png)
1. 单击 **Save（保存）**。

### 允许特定操作运行

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. 在 **Actions permissions（操作权限）**下，选择 **Allow specific actions（允许特定操作）**并将所需操作添加到列表中。 ![添加操作到允许列表](/assets/images/help/repository/actions-policy-allow-list.png)
2. 单击 **Save（保存）**。
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### 为私有仓库复刻启用工作流程

{% data reusables.github-actions.private-repository-forks-overview %}

#### 为仓库配置私有复刻策略

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
