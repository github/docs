---
title: 从头开始创建新组织
intro: 创建组织以对仓库应用更细化的访问权限。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /articles/creating-a-new-organization-from-scratch
  - /admin/user-management/creating-organizations
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch
topics:
  - Organizations
  - Teams
shortTitle: 创建新组织
---

从头开始创建新组织时，它没有任何与之关联的仓库。 有关为组织添加仓库的更多信息，请参阅“[创建新仓库](/articles/creating-a-new-repository)”和“[转让仓库](/articles/transferring-a-repository)”。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.organizations %}
{% data reusables.organizations.new-organization %}
4. 按照提示创建组织。 {% ifversion fpt or ghec %}要详细了解可用于您的团队的计划，请参阅“[{% data variables.product.prodname_dotcom %} 的产品](/articles/githubs-products)”。{% endif %}

## 延伸阅读

{% ifversion fpt or ghec %}
- "[设置帐单邮箱](/articles/setting-your-billing-email)"{% endif %}
- "[关于组织](/articles/about-organizations)"
