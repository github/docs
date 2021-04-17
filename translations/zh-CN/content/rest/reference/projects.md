---
title: 项目
redirect_from:
  - /v3/projects
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## 卡

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'cards' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 协作者

此 API 允许您与组织的项目进行交互。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'collaborators' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 列

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'columns' %}{% include rest_operation %}{% endif %}
{% endfor %}
