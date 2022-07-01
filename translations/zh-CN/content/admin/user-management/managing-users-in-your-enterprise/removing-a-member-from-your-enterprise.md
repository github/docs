---
title: 从企业中删除成员
intro: 您可以从企业拥有的所有组织中删除成员。
permissions: Enterprise owners can remove an enterprise member from the enterprise.
versions:
  feature: remove-enterprise-members
type: how_to
topics:
  - Enterprise
shortTitle: 删除成员
---

## 关于删除企业成员

从企业中删除企业成员时，该成员将从企业拥有的所有组织中删除。

如果要删除的企业成员是企业拥有的组织的最后一个所有者，您将成为该组织的所有者。

如果您的企业或您的企业拥有的任何组织使用身份提供程序 (IdP) 来管理组织成员身份，则 IdP 可能会将成员添加回组织。 确保还要对 IdP 进行任何必要的更改。

## 从企业中删除成员

{% note %}

**注意：** 如果企业成员仅使用 {% data variables.product.prodname_ghe_server %}，而不使用 {% data variables.product.prodname_ghe_cloud %}，则无法以这种方式删除企业成员。

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. 在要删除的人员的右侧，选择 {% octicon "gear" aria-label="The gear icon" %} 下拉菜单，然后单击 **Remove from enterprise（从企业中删除）**。

   ![企业成员的 "从企业中删除" 选项的屏幕截图](/assets/images/help/business-accounts/remove-member.png)
