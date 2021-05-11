---
title: 查看企业中的人员
intro: 要审核对企业拥有的资源或用户许可证使用的访问权限，企业所有者可以查看企业的每个管理员和成员。
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---

### 查看企业所有者{% if currentVersion == "free-pro-team@latest" %}和帐单管理员{% endif %}

您可以查看企业所有者{% if currentVersion == "free-pro-team@latest" %}和帐单管理员，{% endif %}以及待处理邀请成为所有者{% if currentVersion == "free-pro-team@latest" %}和帐单管理员的列表。 您可以按角色过滤企业管理员列表{% endif %}。 您可以通过搜索其用户名或全名查找特定人员。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
{% if currentVersion == "free-pro-team@latest" %}1. （可选）要查看待处理邀请列表，请单击 **_NUMBER_ pending（待处理）**。
  ![搜索和过滤选项右侧的 "NUMBER 待处理" 按钮](/assets/images/help/enterprises/administrators-pending.png){% endif %}

### 查看成员和外部协作者

您可以查看待处理成员和外部协作者的数量。 您可以按{% if currentVersion == "free-pro-team@latest" %}部署（{% data variables.product.prodname_ghe_cloud %} 或 {% data variables.product.prodname_ghe_server %}）、{% endif %}角色{% if currentVersion == "free-pro-team@latest" %}和{% else %}或{% endif %}组织过滤成员列表。 您可以按协作者具有访问权限的仓库的可见性来过滤外部协作者列表。 您可以通过搜索其用户名或显示名称查找特定人员。

通过单击人员姓名，您可以查看{% if currentVersion == "free-pro-team@latest" %}该成员所属的所有 {% data variables.product.prodname_ghe_cloud %} 组织和 {% data variables.product.prodname_ghe_server %} 实例，以及{% endif %}外部协作者能够访问的仓库{% if currentVersion == "free-pro-team@latest" %} {% endif %} 。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. （可选）要查看外部协作者列表而不是成员列表，请单击 **Outside collaborators（外部协作者）**。 ![组织成员页面上的外部协作者选项卡](/assets/images/help/business-accounts/outside-collaborators-tab.png)
{% if currentVersion == "free-pro-team@latest" %}1. （可选）要查看待处理邀请列表，请单击 **_NUMBER_ pending（待处理）**。
  ![搜索和过滤选项右侧的 "NUMBER 待处理" 按钮](/assets/images/help/enterprises/members-pending.png){% endif %}

### 延伸阅读

- "[企业中的角色](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)"
