---
title: Verificações
intro: 'With the Checks API, you can build {% data variables.product.prodname_github_apps %} that run powerful checks against the code changes in a repository.'
redirect_from:
  - /v3/checks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Você pode criar os aplicativos que realizam integração contínua, linting ou serviços de varredura de código e fornecem feedback detalhado sobre commits. Para mais informações, consulte "[Começar com a API de verificações](/rest/guides/getting-started-with-the-checks-api)" e "[Criar testes de CI com a API de verificações](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/)".

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Execuções de verificação

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'runs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## conjuntos de verificações

{% note %}

  **Observação:** Um aplicativo GitHub recebe apenas um evento [`check_suite`](/webhooks/event-payloads/#check_suite) por SHA de commit SHA, mesmo se você fizer push do SHA do commit para mais de um branch. Para descobrir quando um SHA do commit é enviado para um branch, você pode assinar os eventos do branch [`criar`](/webhooks/event-payloads/#create).

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'suites' %}{% include rest_operation %}{% endif %}
{% endfor %}
