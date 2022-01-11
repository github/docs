---
title: Releases
intro: 'The releases API allows you to create, modify, and delete releases and release assets.'
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

{% note %}

**Note:** The Releases API replaces the Downloads API. You can retrieve the download count and browser download URL from the endpoints in this API that return releases and release assets.

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'releases' %}{% include rest_operation %}{% endif %}
{% endfor %}