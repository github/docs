---
title: 关于企业策略
intro: 使用企业策略，您可以管理企业拥有的所有组织的策略。
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Policies
---

为了帮助您实施业务规则和法规遵从性，策略为企业帐户拥有的所有组织提供了单一管理点。

{% data reusables.enterprise.about-policies %}

例如，使用“基本权限”策略，您可以允许组织所有者为其组织配置“基本权限”策略，也可以为企业内的所有组织强制实施特定的基本权限级别，如“读取”。

默认情况下，不强制实施任何企业策略。 要确定应强制实施的策略以满足业务的独特要求，我们建议您从存储库管理策略开始，查看企业帐户中的所有可用策略。 更多信息请参阅“[在企业中实施仓库管理策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)”。

在配置企业策略时，为了帮助您了解更改每个策略的影响，您可以查看企业拥有的组织的当前配置。

{% ifversion ghes %}
在企业内强制实施标准的另一种方法是使用预接收挂钩，这些挂钩是在 {% data variables.product.product_location %} 上运行的脚本，用于实施质量检查。 更多信息请参阅“[使用预接收挂钩实施策略](/admin/policies/enforcing-policy-with-pre-receive-hooks)”。
{% endif %}

## 延伸阅读

- “[关于企业帐户](/admin/overview/about-enterprise-accounts)”
