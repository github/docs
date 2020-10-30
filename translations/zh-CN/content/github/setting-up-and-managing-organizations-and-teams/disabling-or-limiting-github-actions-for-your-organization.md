---
title: 禁用或限制组织的 GitHub 操作
intro: '组织所有者可禁用、启用和限制组织的 GitHub 操作。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
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

You can disable all workflows for an organization or set a policy that configures which actions can be used in an organization.

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**Note:** You might not be able to manage these settings if your organization is managed by an enterprise that has overriding policy. For more information, {% if currentVersion == "free-pro-team@latest" %}"[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account)."{% else %}"[Enforcing {% data variables.product.prodname_actions %} policies for your enterprise](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."{% endif %}

{% endnote %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Under **Policies**, select an option. ![Set actions policy for this organization](/assets/images/help/organizations/actions-policy.png)
1. 单击 **Save（保存）**。

### Allowing specific actions to run

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Under **Policies**, select **Allow specific actions** and add your required actions to the list. ![Add actions to allow list](/assets/images/help/organizations/actions-policy-allow-list.png)
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
