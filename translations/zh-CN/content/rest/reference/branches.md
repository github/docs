---
title: 分支
intro: The branches API allows you to modify branches and their protection settings.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## 受保护分支
{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'branch-protection' %}{% include rest_operation %}{% endif %}
{% endfor %}
