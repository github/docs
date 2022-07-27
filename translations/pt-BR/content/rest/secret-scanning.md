---
title: Varredura secreta
intro: Use a API a digitalização de segredo para recuperar e atualizar alertas de segredos de um repositório.
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/secret-scanning
---

{% data reusables.secret-scanning.api-beta %}

## Sobre a API de digitalização de segredo

A API de {% data variables.product.prodname_secret_scanning %} permite que você:

- Habilite ou desabilite {% data variables.product.prodname_secret_scanning %}{% ifversion secret-scanning-push-protection %} e faça push da proteção{% endif %} para um repositório. Para obter mais informações, consulte "[Repositórios](/rest/repos/repos#update-a-repository)" e expanda as "Propriedades do objeto `security_and_analysis` " na documentação da API REST.
- Recuperar e atualizar alertas de {% data variables.product.prodname_secret_scanning_GHAS %} a partir de um repositório. Para obter detalhes adicionais, consulte as seções abaixo.

Para obter mais informações sobre {% data variables.product.prodname_secret_scanning %}, consulte "[Sobre {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)."
