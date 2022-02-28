---
title: Versões
intro: 'A API de versões permite que você crie, modifique e exclua versões e ativos de versões.'
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

**Observação:** A API de versões substitui a API de Downloads. Você pode recuperar a contagem de download e a URL de download do navegador a partir dos pontos de extremidades nesta API que retornam versões e liberam ativos.

{% endnote %}

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Ativos de versões

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'assets' %}{% include rest_operation %}{% endif %}
{% endfor %}
