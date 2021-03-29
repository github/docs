---
title: 更改项目板可见性
intro: '作为组织所有者或项目板管理员，您可以将项目板设为{% if currentVersion == "github-ae@latest" %}内部{% else %}公共{% endif %}或私有。'
redirect_from:
  - /articles/changing-project-board-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 拉取请求
---

{% data reusables.project-management.project-board-visibility %}

{% tip %}

**提示：**将项目板设为{% if currentVersion == "github-ae@latest" %}内部{% else %}公共{% endif %}时，组织成员默认获得读取权限。 您可以为特定组织成员提供写入或管理权限，方法是为他们所在的团队提供项目板访问权限或将他们作为协作者添加到项目板。 更多信息请参阅“[组织的项目板权限](/articles/project-board-permissions-for-an-organization)”。

{% endtip %}

1. 导航到要设为

{% if currentVersion == "github-ae@latest" %}内部{% else %}公共{% endif %}或私有的项目板。
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.choose-visibility %}
1. 单击 **Save（保存）**。
