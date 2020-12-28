---
title: Viewing people in your enterprise
intro: 'To audit access to enterprise-owned resources or user license usage, enterprise owners can view every administrator and member of the enterprise.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Viewing enterprise owners{% if currentVersion == "free-pro-team@latest" %} and billing managers{% endif %}

You can view enterprise owners {% if currentVersion == "free-pro-team@latest" %} and billing managers, {% endif %}as well as a list of pending invitations to become owners{% if currentVersion == "free-pro-team@latest" %} and billing managers. You can filter the list of enterprise administrators by role{% endif %}. 您可以通过搜索其用户名或全名查找特定人员。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
{% if currentVersion == "free-pro-team@latest" %}1. Optionally, to view a list of pending invitations, click **_NUMBER_ pending**.
  !["NUMBER pending" button to the right of search and filter options](/assets/images/help/enterprises/administrators-pending.png){% endif %}

### 查看成员和外部协作者

您可以查看待处理成员和外部协作者的数量。 You can filter the list of members by {% if currentVersion == "free-pro-team@latest" %}deployment ({% data variables.product.prodname_ghe_cloud %} or {% data variables.product.prodname_ghe_server %}),{% endif %}role {% if currentVersion == "free-pro-team@latest" %}, and{% elsif currentVersion == "github-ae@latest" %}or {% endif %}organization. 您可以按协作者具有访问权限的仓库的可见性来过滤外部协作者列表。 您可以通过搜索其用户名或显示名称查找特定人员。

You can view {% if currentVersion == "free-pro-team@latest" %}all the {% data variables.product.prodname_ghe_cloud %} organizations and {% data variables.product.prodname_ghe_server %} instances that a member belongs to, and {% endif %}which repositories an outside collaborator has access to{% if currentVersion == "free-pro-team@latest" %}, {% endif %} by clicking on the person's name.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. （可选）要查看外部协作者列表而不是成员列表，请单击 **Outside collaborators（外部协作者）**。 ![组织成员页面上的外部协作者选项卡](/assets/images/help/business-accounts/outside-collaborators-tab.png)
{% if currentVersion == "free-pro-team@latest" %}1. Optionally, to view a list of pending invitations, click **_NUMBER_ pending**.
  !["NUMBER pending" button to the right of search and filter options](/assets/images/help/enterprises/members-pending.png){% endif %}

### 延伸阅读

- "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)"
