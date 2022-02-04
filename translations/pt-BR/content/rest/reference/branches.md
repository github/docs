---
title: Branches
intro: A API de branches permite que você modifique os branches e as configurações de proteção.
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

## Branches protegidos
{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'branch-protection' %}{% include rest_operation %}{% endif %}
{% endfor %}
