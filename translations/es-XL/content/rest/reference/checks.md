---
title: Verificaciones
redirect_from:
  - /v3/checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

La API de Verificaciones te permite crear GitHub Apps que ejecuten verificaciones poderosas contra los cámbios de código en un repositorio. Puedes crear apps que lleven a cabo integración contínua, limpieza de código, o servicios de escaneo de código y que proporcionen retroalimentación detallada en las confirmaciones. Para obtener más información, consulta la sección "[Empezar con la API de verificaciones](/rest/guides/getting-started-with-the-checks-api)" y "[Crear pruebas de IC con la API de verificaciones](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/)".

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Ejecuciones de Verificación

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'runs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Comprobar Suites

{% note %}

  **Nota:** Una GitHub App solo recibe un evento de [`check_suite`](/webhooks/event-payloads/#check_suite) por SHA de confirmación, aún si cargas este SHA en más de una rama. Para saber cuándo se carga un SHA de confirmación a una rama, puedes suscribirte a los eventos de [`create`](/webhooks/event-payloads/#create) de la misma.

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'suites' %}{% include rest_operation %}{% endif %}
{% endfor %}
