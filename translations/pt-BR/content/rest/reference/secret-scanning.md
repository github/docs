---
title: Varredura secreta
intro: 'Para recuperar e atualizar os alertas secretos de um repositório privado, você pode usar a API de digitalização secreta.'
versions:
  fpt: '*'
  ghes: '>=3.1'
  ghec: '*'
  ghae: '*'
miniTocMaxHeadingLevel: 3
---

{% data reusables.secret-scanning.api-beta %}

A API de {% data variables.product.prodname_secret_scanning %} permite que você{% ifversion fpt or ghec or ghes > 3.1 or ghae %}:

- Habilitar ou desabilitar {% data variables.product.prodname_secret_scanning %} para um repositório. Para obter mais informações, consulte "[Repositórios](/rest/reference/repos#update-a-repository)" na documentação da API REST.
- Recuperar e atualizar alertas de {% data variables.product.prodname_secret_scanning %} a partir de um repositório {% ifversion fpt or ghec %}privado {% endif %}. Para obter detalhes adicionais, consulte as seções abaixo.
{%- else %} recuperar e atualizar alertas de {% data variables.product.prodname_secret_scanning %} a partir de um repositório {% ifversion fpt or ghec %}privado{% endif %}.{% endif %}

Para obter mais informações sobre {% data variables.product.prodname_secret_scanning %}, consulte "[Sobre {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)."

{% include rest_operations_at_current_path %}
