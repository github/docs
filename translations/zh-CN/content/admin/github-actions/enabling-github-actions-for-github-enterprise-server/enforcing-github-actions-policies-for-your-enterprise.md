---
title: 为企业实施 GitHub Actions 策略
intro: '企业管理员可以管理对企业中 {% data variables.product.prodname_actions %} 的访问。'
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
  github-ae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
---
{% data reusables.actions.ae-beta %}
{% data reusables.actions.enterprise-beta %}

### 关于企业的 {% data variables.product.prodname_actions %} 权限

{% if currentVersion == "github-ae@latest" %}{% else %}在 {% data variables.product.prodname_ghe_server %} 上启用 {% data variables.product.prodname_actions %} 时，它会对您企业中的所有组织启用。 {% endif %}您可以选择对企业中的所有组织禁用 {% data variables.product.prodname_actions %}，或只允许特定的组织。 您还可以限制公共操作的使用，以使人们只能使用您的企业中存在的本地操作。

### 管理企业的 {% data variables.product.prodname_actions %} 权限

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest"%}
### 为私有仓库复刻启用工作流程

{% data reusables.github-actions.private-repository-forks-overview %}

#### 为企业配置私有复刻策略

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
