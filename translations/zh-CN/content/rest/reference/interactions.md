---
title: 互动
redirect_from:
  - /v3/interactions
versions:
  free-pro-team: '*'
---

用户通过评论、开设议题和创建拉取请求与仓库进行交互。 交互 API 允许具有所有者或管理员权限的用户临时限制某些用户与公共仓库交互。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## 组织

组织交互 API 允许组织所有者临时限制哪些用户可以在组织的公共仓库中发表评论、开设议题或创建拉取请求。 {% data reusables.interactions.interactions-detail %} 以下是有关 {% data variables.product.product_name %} 用户组的更多信息：

* 组织中的 {% data reusables.interactions.existing-user-limit-definition %}。
* 组织中的 {% data reusables.interactions.contributor-user-limit-definition %}。
* 组织中的 {% data reusables.interactions.collaborator-user-limit-definition %}。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 仓库

仓库交互 API 允许具有所有者或管理员权限的用户临时限制哪些用户可以在公共存储库中发表评论、开设议题或创建拉取请求。 {% data reusables.interactions.interactions-detail %} 以下是有关 {% data variables.product.product_name %} 用户组的更多信息：

* 仓库中的 {% data reusables.interactions.existing-user-limit-definition %}。
* 仓库中的 {% data reusables.interactions.contributor-user-limit-definition %}。
* 仓库中的 {% data reusables.interactions.collaborator-user-limit-definition %}。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repos' %}{% include rest_operation %}{% endif %}
{% endfor %}
