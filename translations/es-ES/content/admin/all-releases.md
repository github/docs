---
title: Lanzamientos de GitHub Enterprise Server
intro: 'Documentación para las versiones actualmente compatibles y previamente obsoletizadas de {{ site.data.variables.product.prodname_ghe_server }}.'
allowTitleToDifferFromFilename: true
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

## Actualmente compatibles

Consulta la sección [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise) para obtener más información sobre el último lanzamiento.

{% for supportedRelease in enterpriseServerReleases.supported %}
- [{% data variables.product.prodname_ghe_server %} {{supportedRelease}}](/enterprise-server@{{supportedRelease}})
{% endfor %}

## Obsoletizado

La documentación dlae s versiones obsoletizadas sigue estando disponible pero ya no se le da mantenimiento.

{% for deprecatedRelease in enterpriseServerReleases.deprecatedReleasesWithNewFormat %}
- [Enterprise Server {{deprecatedRelease}}](/enterprise-server@{{deprecatedRelease}})
{% endfor %}

{% for deprecatedReleaseLegacyFormat in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %}
- [Enterprise Server {{deprecatedReleaseLegacyFormat}}](/enterprise/{{deprecatedReleaseLegacyFormat}})
{% endfor %}

## Documentación obsoletizada para desarrolladores

La documentación para desarrolladores para las versiones obsoletizadas sigue disponible, pero ya no se le da mantenimiento.

{% for deprecatedDevRelease in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %}
- [Enterprise Server {{deprecatedDevRelease}}](https://developer.github.com/enterprise/{{deprecatedDevRelease}})
{% endfor %}
