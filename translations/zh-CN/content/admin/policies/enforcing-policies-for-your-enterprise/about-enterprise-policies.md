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

For example, with the "Base permissions" policy, you can allow organization owners to configure the "Base permissions" policy for their organization, or you can enforce a specific base permissions level, such as "Read", for all organizations within the enterprise.

By default, no enterprise policies are enforced. To identify policies that should be enforced to meet the unique requirements of your business, we recommend reviewing all the available policies in your enterprise account, starting with repository management policies. For more information, see "[Enforcing repository management polices in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)."

While you're configuring enterprise policies, to help you understand the impact of changing each policy, you can view the current configurations for the organizations owned by your enterprise.

{% ifversion ghes %}
Another way to enforce standards within your enterprise is to use pre-receive hooks, which are scripts that run on {% data variables.product.product_location %} to implement quality checks. 更多信息请参阅“[使用预接收挂钩实施策略](/admin/policies/enforcing-policy-with-pre-receive-hooks)”。
{% endif %}

## 延伸阅读

- “[关于企业帐户](/admin/overview/about-enterprise-accounts)”
