---
title: Projetos
intro: 'A API dos Projetos permite que você crie, liste, atualize, exclua e personalize projetos em um repositório.'
redirect_from:
  - /v3/projects
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
