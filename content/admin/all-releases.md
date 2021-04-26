---
title: Enterprise Server releases
intro: A list of the currently supported and previously deprecated Enterprise Server releases.
allowTitleToDifferFromFilename: true
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

## Currently supported

See [GitHub Enterprise](https://github.com/enterprise) for information about the latest release.

{% for supportedRelease in enterpriseServerReleases.supported %}
- [Enterprise Server {{supportedRelease}}](/enterprise-server@{{supportedRelease}})
{% endfor %}

## Deprecated

These docs remain available but are no longer maintained:

{% for deprecatedRelease in enterpriseServerReleases.deprecatedReleasesWithNewFormat %}
- [Enterprise Server {{deprecatedRelease}}](/enterprise-server@{{deprecatedRelease}})
{% endfor %}

{% for deprecatedReleaseLegacyFormat in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %}
- [Enterprise Server {{deprecatedReleaseLegacyFormat}}](/enterprise/{{deprecatedReleaseLegacyFormat}})
{% endfor %}

## Deprecated on developer.github.com

These docs remain available on the legacy [developer site](https://developer.github.com) but are no longer maintained:

{% for deprecatedDevRelease in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %}
- [Enterprise Server {{deprecatedDevRelease}}](https://developer.github.com/enterprise/{{deprecatedDevRelease}})
{% endfor %}