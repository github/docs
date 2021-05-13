---
title: 禁用或限制组织的 GitHub Actions
intro: 组织所有者可禁用、启用和限制组织的 GitHub Actions。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 关于组织的 {% data variables.product.prodname_actions %} 权限

{% data reusables.github-actions.disabling-github-actions %} 有关 {% data variables.product.prodname_actions %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)”。

您可以对组织中的所有仓库启用 {% data variables.product.prodname_actions %}。 {% data reusables.github-actions.enabled-actions-description %} 您可以对组织中的所有仓库禁用 {% data variables.product.prodname_actions %}。 {% data reusables.github-actions.disabled-actions-description %}

此外，您可以对组织中的所有仓库启用 {% data variables.product.prodname_actions %}，但限制工作流程可以运行的操作。 {% data reusables.github-actions.enabled-local-github-actions %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}

### 管理组织的 {% data variables.product.prodname_actions %} 权限

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. 在 **Local and third-party Actions（本地和第三方操作）**下，选择一个选项。 ![启用、禁用或限制此组织的操作](/assets/images/help/repository/enable-org-actions.png)
1. 单击 **Save（保存）**。

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

### 管理组织的 {% data variables.product.prodname_actions %} 权限

您可以禁用组织的所有工作流程，或者设置策略来配置哪些操作可用于组织中。

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**注：**如果您的组织由具有覆盖策略的企业管理，您可能无法管理这些设置。 更多信息请参阅{% if currentVersion == "free-pro-team@latest" %}“[在企业帐户中实施 {% data variables.product.prodname_actions %} 策略](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)”。{% else %}“[实施企业的 {% data variables.product.prodname_actions %} 策略](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)”。{% endif %}

{% endnote %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. 在 **Policies（策略）**下，选择一个选项。 ![设置此组织的操作策略](/assets/images/help/organizations/actions-policy.png)
1. 单击 **Save（保存）**。

### 允许特定操作运行

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. 在 **Policies（策略）**下，选择 **Allow select actions（允许选择操作）**并将所需操作添加到列表中。 ![添加操作到允许列表](/assets/images/help/organizations/actions-policy-allow-list.png)
1. 单击 **Save（保存）**。

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### 为私有仓库复刻启用工作流程

{% data reusables.github-actions.private-repository-forks-overview %}

#### 为组织配置私有复刻策略

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
