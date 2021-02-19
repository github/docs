---
title: Varredura de código
redirect_from:
  - /v3/code-scanning
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}

A API de {% data variables.product.prodname_code_scanning %} permite que você recupere e atualize alertas de código em um repositório. Você pode usar os pontos de extremidade para criar relatórios automatizados para os alertas de varredura de código em uma organização ou fazer upload dos resultados de análise gerados usando ferramentas de varredura de código off-line. Para obter mais informações, consulte "[Encontrar vulnerabilidades e erros de segurança no seu código](/github/finding-security-vulnerabilities-and-errors-in-your-code).

{% include rest_operations_at_current_path %}
