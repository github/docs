---
title: 为企业实施 GitHub Actions 策略
intro: '企业管理员可以管理对企业中 {% data variables.product.prodname_actions %} 的访问。'
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: GitHub Actions policies
---

{% data reusables.actions.enterprise-beta %}

## 关于企业的 {% data variables.product.prodname_actions %} 权限

{% ifversion ghae %}{% else %}在 {% data variables.product.prodname_ghe_server %} 上启用 {% data variables.product.prodname_actions %} 时，它会对您企业中的所有组织启用。 {% endif %}您可以选择对企业中的所有组织禁用 {% data variables.product.prodname_actions %}，或只允许特定的组织。 您还可以限制公共操作的使用，以使人们只能使用您的企业中存在的本地操作。

## 管理企业的 {% data variables.product.prodname_actions %} 权限

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}

{% ifversion ghes > 2.22 or ghae %}
## 允许特定操作运行

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. 在 **Policies（策略）**下，选择 **Allow select actions（允许选择操作）**并将所需操作添加到列表中。
   {%- ifversion ghes or ghae-issue-5094 %}
   ![添加操作到允许列表](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png)
   {%- elsif ghae %}
   ![添加操作到允许列表](/assets/images/enterprise/github-ae/enterprise-actions-policy-allow-list.png)
   {%- endif %}
{% endif %}

{% ifversion ghes > 2.22 or ghae %}
## 为私有仓库复刻启用工作流程

{% data reusables.github-actions.private-repository-forks-overview %}

### 为企业配置私有复刻策略

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
