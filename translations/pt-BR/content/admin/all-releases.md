---
title: Versões do GitHub Enterprise Server
intro: 'Documentação para as versões atualmente compatíveis e obsoletas do {{ site.data.variables.product.prodname_ghe_server }}.'
allowTitleToDifferFromFilename: true
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

## Atualmente compatível

Consulte [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise) para obter informações sobre a versão mais recente.

{% for supportedRelease in enterpriseServerReleases.supported %}
- [{% data variables.product.prodname_ghe_server %} {{supportedRelease}}](/enterprise-server@{{supportedRelease}})
{% endfor %}

## Obsoleto

A documentação para versões obsoletas permanece disponível, mas não é mais mantida.

{% for deprecatedRelease in enterpriseServerReleases.deprecatedReleasesWithNewFormat %}
- [Enterprise Server {{deprecatedRelease}}](/enterprise-server@{{deprecatedRelease}})
{% endfor %}

{% for deprecatedReleaseLegacyFormat in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %}
- [Enterprise Server {{deprecatedReleaseLegacyFormat}}](/enterprise/{{deprecatedReleaseLegacyFormat}})
{% endfor %}

## Documentação de desenvolvedor descontinuada

A documentação do desenvolvedor para versões obsoletas permanece disponível, mas não é mais mantida.

{% for deprecatedDevRelease in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %}
- [Enterprise Server {{deprecatedDevRelease}}](https://developer.github.com/enterprise/{{deprecatedDevRelease}})
{% endfor %}
