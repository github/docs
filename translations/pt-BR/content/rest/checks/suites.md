---
title: conjuntos de verificações
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

  **Observação:** Um aplicativo GitHub recebe apenas um evento [`check_suite`](/webhooks/event-payloads/#check_suite) por SHA de commit SHA, mesmo se você fizer push do SHA do commit para mais de um branch. Para descobrir quando um SHA do commit é enviado para um branch, você pode assinar os eventos do branch [`criar`](/webhooks/event-payloads/#create).

{% endnote %}
