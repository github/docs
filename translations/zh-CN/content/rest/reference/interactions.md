---
title: 互动
redirect_from:
  - /v3/interactions
versions:
  free-pro-team: '*'
---

用户通过评论、开设议题和创建拉取请求与仓库进行交互。 交互 API 允许具有公共仓库所有者或具有管理员访问权限的用户临时将与公共仓库的交互限于特定类型的用户。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## 组织

组织交互 API 允许组织所有者临时限制哪类用户可以在组织的公共仓库中发表评论、开设议题或创建拉取请求。 {% data reusables.interactions.interactions-detail %} 以下是有关 {% data variables.product.product_name %} 用户类型的更多信息：

* 组织中的 {% data reusables.interactions.existing-user-limit-definition %}。
* 组织中的 {% data reusables.interactions.contributor-user-limit-definition %}。
* 组织中的 {% data reusables.interactions.collaborator-user-limit-definition %}。

在组织级别设置交互限制将覆盖为组织拥有的各个仓库设置的任何交互限制。 要为组织拥有的各个仓库设置不同的交互限制，请改用[仓库](#repository)交互端点。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 仓库

仓库交互 API 允许具有所有者或管理员权限的用户临时限制哪类用户可以在公共仓库中发表评论、开设议题或创建拉取请求。 {% data reusables.interactions.interactions-detail %} 以下是有关 {% data variables.product.product_name %} 用户类型的更多信息：

* 仓库中的 {% data reusables.interactions.existing-user-limit-definition %}。
* 仓库中的 {% data reusables.interactions.contributor-user-limit-definition %}。
* 仓库中的 {% data reusables.interactions.collaborator-user-limit-definition %}。

如果对拥有该仓库的用户或组织启用了交互限制，单个仓库的限制就不能更改。 而应使用[用户](#user)或[组织](#organization)交互端点来更改交互限制。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repos' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 用户

用户交互 API 允许您临时限制哪类用户可以在公共仓库上发表评论、开设问题或创建拉取请求。 {% data reusables.interactions.interactions-detail %} 以下是有关 {% data variables.product.product_name %} 用户类型的更多信息：

* 与仓库交互产生的 {% data reusables.interactions.existing-user-limit-definition %}。
* 与仓库交互产生的 {% data reusables.interactions.contributor-user-limit-definition %}。
* 与仓库交互产生的 {% data reusables.interactions.collaborator-user-limit-definition %}。

在用户级别设置交互限制将覆盖为用户拥有的各个仓库设置的任何交互限制。 要为用户拥有的个别仓库设置不同的交互限制，请使用[仓库](#repository)交互端点。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'user' %}{% include rest_operation %}{% endif %}
{% endfor %}
