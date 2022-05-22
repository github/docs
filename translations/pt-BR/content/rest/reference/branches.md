---
title: Branches
intro: 'The branches API allows you to modify branches and their protection settings.'
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

## Branches
{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'branches' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Merging

The Repo Merging API supports merging branches in a repository. This accomplishes
essentially the same thing as merging one branch into another in a local repository
and then pushing to {% data variables.product.product_name %}. The benefit is that the merge is done on the server side and a local repository is not needed. This makes it more appropriate for automation and other tools where maintaining local repositories would be cumbersome and inefficient.

The authenticated user will be the author of any merges done through this endpoint.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'merging' %}{% include rest_operation %}{% endif %}
{% endfor %}