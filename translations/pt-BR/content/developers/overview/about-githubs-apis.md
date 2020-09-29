---
title: Sobre as APIs do GitHub
intro: 'Saiba mais sobre as APIs dos {% data variables.product.prodname_dotcom %} para estender e personalizar sua experiência no {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v3/versions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt '2.9' %}

Existem duas versões estáveis da API do GitHub: a [API REST](/v3/) e a [API do GraphQL](/v4/).

{% else %}

A última versão estável da API do GitHub é a [API REST](/v3/).

{% endif %}

Ao usar a API REST, incentivamos que você a [solicite a v3 por meio do cabeçalho `Aceitar`](/v3/media/#request-specific-version).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt '2.9' %}

Para obter informações sobre como usar a API do GraphQL, consulte a [documentação da v4](/v4/).

{% endif %}

## Versões obsoletas

### beta

A API beta tornou-se obsoleta em 22 de abril de 2014.

### v2

Removemos o suporte à API v2 em 12 de Junho de 2012.

### v1

Removemos o suporte à API v1 em 12 de Junho de 2012.
