---
title: Varredura de código
intro: The Code Scanning API enables you to retrieve and update the code scanning alerts and analyses from a repository.
redirect_from:
  - /v3/code-scanning
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - API
  - Code scanning
  - REST
miniTocMaxHeadingLevel: 3
---

{% data reusables.code-scanning.beta %}

A API de {% data variables.product.prodname_code_scanning %} permite que você recupere e atualize alertas de {% data variables.product.prodname_code_scanning %} alertas de um repositório. Você pode usar os pontos de extremidade para criar relatórios automatizados para os alertas de {% data variables.product.prodname_code_scanning %} em uma organização ou fazer upload dos resultados de análise gerados usando as ferramentas off-line de {% data variables.product.prodname_code_scanning %}. Para obter mais informações, consulte "[Encontrar vulnerabilidades e erros de segurança no seu código](/github/finding-security-vulnerabilities-and-errors-in-your-code).

{% ifversion fpt or ghes > 3.0 or ghae %}
### Tipo de mídia personalizada para {% data variables.product.prodname_code_scanning %}

Existe um tipo de mídia personalizada com suporte para a API REST de {% data variables.product.prodname_code_scanning %}. 

    application/sarif+json

Você pode usar isso com solicitações de `GET` enviadas para o ponto de extremidade `/analyes/{analysis_id}`. Para obter mais informações sobre esta operação, consulte "[Obter uma análise de {% data variables.product.prodname_code_scanning %} para um repositório](#get-a-code-scanning-analysis-for-a-repository)". Ao usar este tipo de mídia com esta operação, a resposta inclui um subconjunto dos dados reais que foram enviados para a análise especificada, em vez do resumo da análise que é retornada quando você usa o tipo de mídia padrão. A resposta também inclui dados adicionais como as propriedades `github/alertNumber` e `github/alertUrl`. Os dados estão formatados como [SARIF versão 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).

Para obter mais informações, consulte "[Tipos de mídia](/rest/overview/media-types)".
{% endif %}

{% include rest_operations_at_current_path %}
