---
title: Varredura secreta
intro: Use the Secret scanning API to retrieve and update secret alerts from a repository.
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

## About the Secret scanning API

A API de {% data variables.product.prodname_secret_scanning %} permite que você{% ifversion fpt or ghec or ghes > 3.1 or ghae %}:

- Enable or disable {% data variables.product.prodname_secret_scanning %}{% if secret-scanning-push-protection %} and push protection{% endif %} for a repository. Para obter mais informações, consulte "[Repositórios](/rest/reference/repos#update-a-repository)" e expanda as "Propriedades do objeto `security_and_analysis` " na documentação da API REST.
- Retrieve and update {% data variables.product.prodname_secret_scanning_GHAS %} alerts from a repository. For further details, see the sections below.
{%- else %} retrieve and update {% data variables.product.prodname_secret_scanning %} alerts from a repository.{% endif %}

Para obter mais informações sobre {% data variables.product.prodname_secret_scanning %}, consulte "[Sobre {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)."
