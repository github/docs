---
title: 项目
intro: 项目 API 允许您在仓库中创建、列出、更新、删除和自定义项目。
redirect_from:
  - /v3/projects
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
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
