---
title: Lanzamientos
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

**Nota:** La API de Lanzamientos reemplaza a la API de Descargas. Puedes recuperar el conteo de descargas y la URL de descarga del buscador desde las terminales en esta API, las cuales devuelven los lanzamientos y los activos de éstos.

{% endnote %}

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Release assets

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'assets' %}{% include rest_operation %}{% endif %}
{% endfor %}
