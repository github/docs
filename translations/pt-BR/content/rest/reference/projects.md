---
title: Projetos
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

## Cartões

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'cards' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Colaboradores

Esta API permite que você interaja com os projetos de uma organização.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'collaborators' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Colunas

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'columns' %}{% include rest_operation %}{% endif %}
{% endfor %}
