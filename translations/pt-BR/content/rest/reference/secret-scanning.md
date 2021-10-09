---
title: Varredura secreta
intro: 'Para recuperar e atualizar os alertas secretos de um repositório privado, você pode usar a API de digitalização secreta.'
versions:
  fpt: '*'
  ghes: '>=3.1'
miniTocMaxHeadingLevel: 3
---

{% data reusables.secret-scanning.api-beta %}

A API de {% data variables.product.prodname_secret_scanning %} permite recuperar e atualizar alertas de varredura de segredo de um repositório {% ifversion fpt %}privado {% endif %}. Para obter mais informações sobre a varredura de segredo, consulte "[Sobre o varredura de secredo](/code-security/secret-security/about-secret-scanning)".

{% include rest_operations_at_current_path %}
