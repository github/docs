---
title: Projects
redirect_from:
  - /v3/projects
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Cards

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'cards' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Collaborators

This API allows you to interact with an organization's projects.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'collaborators' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Columns

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'columns' %}{% include rest_operation %}{% endif %}
{% endfor %}
