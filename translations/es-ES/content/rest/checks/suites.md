---
title: Conjuntos de Verificaciones
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

{% note %}

  **Nota:** Una GitHub App solo recibe un evento de [`check_suite`](/webhooks/event-payloads/#check_suite) por SHA de confirmación, aún si cargas este SHA en más de una rama. Para saber cuándo se carga un SHA de confirmación a una rama, puedes suscribirte a los eventos de [`create`](/webhooks/event-payloads/#create) de la misma.

{% endnote %}
