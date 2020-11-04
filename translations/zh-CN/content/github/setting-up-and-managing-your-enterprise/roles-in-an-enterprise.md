---
title: Roles in an enterprise
intro: 'Everyone in an enterprise is a member of the enterprise. To control access to your enterprise''s settings and data, you can assign different roles to members of your enterprise.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account/
  - /articles/roles-for-an-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About roles in an enterprise

Everyone in an enterprise is a member of the enterprise. You can also assign administrative roles to members of your enterprise. Each administrator role maps to business functions and provides permissions to do specific tasks within the enterprise.

{% data reusables.enterprise-accounts.enterprise-administrators %}

For more information about adding people to your enterprise, see "{% if currentVersion == "free-pro-team@latest" %}[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise){% else %}[Authentication](/admin/authentication){% endif %}".

### 企业所有者

Enterprise owners have complete control over the enterprise and can take every action, including:
- 管理管理员
- {% if currentVersion == "free-pro-team@latest" %}Adding and removing {% elsif currentVersion == "github-ae@latest" %}Managing{% endif %} organizations {% if currentVersion == "free-pro-team@latest" %}to and from {% elsif currentVersion == "github-ae@latest" %} in{% endif %} the enterprise
- 管理企业设置
- 在组织范围内强制实施政策
{% if currentVersion == "free-pro-team@latest" %}- Managing billing settings{% endif %}

企业所有者无法访问组织设置或内容，除非将其设为组织所有者或授予直接访问组织所拥有仓库的权限。 Similarly, owners of organizations in your enterprise do not have access to the enterprise itself unless you make them enterprise owners.

You can add as many enterprise owners as you'd like to your enterprise. {% if currentVersion == "free-pro-team@latest" %}Enterprise owners must have a personal account on {% data variables.product.prodname_dotcom %}.{% endif %} As a best practice, we recommend making only a few people in your company enterprise owners, to reduce the risk to your business.

### 企业成员

Members of organizations owned by your enterprise are also automatically members of the enterprise. Members can collaborate in organizations and may be organization owners, but members cannot access or configure enterprise settings{% if currentVersion == "free-pro-team@latest" %}, including billing settings{% endif %}.

People in your enterprise may have different levels of access to the various organizations owned by your enterprise and to repositories within those organizations. 您可以查看每个人具有访问权限的资源。 For more information, see "[Viewing people in your enterprise](/github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise)."

有关组织级权限的更多信息，请参阅“[组织的权限级别](/articles/permission-levels-for-an-organization)”。

People with outside collaborator access to repositories owned by your organization are also listed in your enterprise's People tab, but are not enterprise members and do not have any access to the enterprise. 有关外部协作者的更多信息，请参阅“[组织的权限级别](/articles/permission-levels-for-an-organization#outside-collaborators)”。

{% if currentVersion == "free-pro-team@latest" %}

### 帐单管理员

Billing managers only have access to your enterprise's billing settings. Billing managers for your enterprise can:
- 查看和管理用户许可证、{% data variables.large_files.product_name_short %} 包以及其他计费设置
- 查看帐单管理员列表
- 添加或删除其他帐单管理员

Billing managers do not have access to organizations or repositories in your enterprise, and cannot add or remove enterprise owners. 帐单管理员必须在 {% data variables.product.prodname_dotcom %} 上拥有个人帐户。

### 延伸阅读

- “[关于企业帐户](/articles/about-enterprise-accounts)”

{% endif %}
