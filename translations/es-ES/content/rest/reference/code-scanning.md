---
title: Escaneo de código
redirect_from:
  - /v3/code-scanning
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}

La API del {% data variables.product.prodname_code_scanning %} te permite recuperar y actualizar las alertas de escaneo de código de un repositorio. Puedes utilizar las terminales para crear reportes automatizados para las alertas de escaneo de código en una organización o cargar los resultados de análisis que se generan utilizando herramientas de escaneo de código fuera de línea. Para obtener más información, consulta la sección "[Encontrar vulnerabilidades de seguridad y errores en tu código](/github/finding-security-vulnerabilities-and-errors-in-your-code)".

{% include rest_operations_at_current_path %}
