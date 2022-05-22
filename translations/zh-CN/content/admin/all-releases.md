---
title: GitHub Enterprise Server 发行版
intro: '当前支持且先前废弃的 {{ site.data.variables.product.prodname_ghe_server }} 版本的文档。'
allowTitleToDifferFromFilename: true
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

## 当前支持

请参阅 [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise) 以获取最新版本的信息。

{% for supportedRelease in enterpriseServerReleases.supported %}
- [{% data variables.product.prodname_ghe_server %} {{supportedRelease}}](/enterprise-server@{{supportedRelease}})
{% endfor %}

## 已废弃

已弃用版本的文档仍然可用，但不再保留。

{% for deprecatedRelease in enterpriseServerReleases.deprecatedReleasesWithNewFormat %}
- [Enterprise Server {{deprecatedRelease}}](/enterprise-server@{{deprecatedRelease}})
{% endfor %}

{% for deprecatedReleaseLegacyFormat in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %}
- [Enterprise Server {{deprecatedReleaseLegacyFormat}}](/enterprise/{{deprecatedReleaseLegacyFormat}})
{% endfor %}

## 已弃用的开发者文档

已弃用版本的开发者文档仍然可用，但不再保留。

{% for deprecatedDevRelease in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %}
- [Enterprise Server {{deprecatedDevRelease}}](https://developer.github.com/enterprise/{{deprecatedDevRelease}})
{% endfor %}
