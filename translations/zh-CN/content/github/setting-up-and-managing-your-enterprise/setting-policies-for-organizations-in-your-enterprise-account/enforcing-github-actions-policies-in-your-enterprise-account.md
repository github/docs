---
title: 在企业帐户中实施 GitHub Actions 策略
intro: '企业所有者可以对企业帐户禁用、启用和限制 {% data variables.product.prodname_actions %}。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---
### 关于企业帐户的 {% data variables.product.prodname_actions %} 权限

默认情况下，在企业帐户拥有的所有组织中启用 {% data variables.product.prodname_actions %}。 您可以选择对企业账户拥有的所有组织禁用 {% data variables.product.prodname_actions %}，或只对指定的组织启用。 您还可以限制公共操作的使用，以使人们只能使用您的组织中存在的本地操作。

有关 {% data variables.product.prodname_actions %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)”。

### 管理企业帐户的 {% data variables.product.prodname_actions %} 权限

您可以禁用企业的所有工作流程，或者设置策略来配置哪些操作可用于组织中。

{% data reusables.actions.actions-use-policy-settings %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}
1. 单击 **Save（保存）**。

### 允许特定操作运行

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. 在 **Policies（策略）**下，选择 **Allow select actions（允许选择操作）**并将所需操作添加到列表中。 ![添加操作到允许列表](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png)

### 为私有仓库复刻启用工作流程

{% data reusables.github-actions.private-repository-forks-overview %}

#### 为企业帐户配置私有复刻策略

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}

### 为您的企业设置 `GITHUB_TOKENN` 的权限

{% data reusables.github-actions.workflow-permissions-intro %}

您可以在企业、组织或仓库的设置中为 `GITHUB_TOKEN` 设置默认权限。 如果您在企业设置中选择受限制的选项为默认值，这将防止在组织或仓库设置中选择更多的允许设置。

{% data reusables.github-actions.workflow-permissions-modifying %}

#### 配置默认 `GITHUB_TOKENN` 权限

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. 在 **Workflow permissions（工作流程权限）**下，选择您是否想要 `GITHUB_TOKENN` 读写所有范围限， 或者只读`内容`范围。 ![为此企业设置 GITHUB_TOKENN 权限](/assets/images/help/settings/actions-workflow-permissions-enterprise.png)
1. 单击 **Save（保存）**以应用设置。
