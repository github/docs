---
title: GitHub Enterprise Server releases
intro: 'Documentation for the currently supported and previously deprecated versions of {{ site.data.variables.product.prodname_ghe_server }}.'
allowTitleToDifferFromFilename: true
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

## Currently supported

See [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise) for information about the latest release.

{% for supportedRelease in enterpriseServerReleases.supported %}
- [{% data variables.product.prodname_ghe_server %} {{supportedRelease}}](/enterprise-server@{{supportedRelease}})
{% endfor %}

## Deprecated

Documentation for deprecated versions remains available but is no longer maintained.

{% for deprecatedRelease in enterpriseServerReleases.deprecatedReleasesWithNewFormat %}
- [Enterprise Server {{deprecatedRelease}}](/enterprise-server@{{deprecatedRelease}})
{% endfor %}

{% for deprecatedReleaseLegacyFormat in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %}
- [Enterprise Server {{deprecatedReleaseLegacyFormat}}](/enterprise/{{deprecatedReleaseLegacyFormat}})
{% endfor %}

## Deprecated developer documentation

Developer documentation for deprecated versions remains available but is no longer maintained.

{% for deprecatedDevRelease in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %}
- [Enterprise Server {{deprecatedDevRelease}}](https://developer.github.com/enterprise/{{deprecatedDevRelease}})
{% endfor %}
