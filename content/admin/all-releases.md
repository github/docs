---
title: GitHub Enterprise Server releases
intro: "{% data variables.product.company_short %} releases new versions of {% data variables.product.product_name %} regularly. You can review supported versions, see deprecation dates, and browse documentation for the release you've deployed."
allowTitleToDifferFromFilename: true
versions:
  ghes: '*'
topics:
  - Enterprise
  - Upgrades
shortTitle: Releases
---

## About releases of {% data variables.product.product_name %}

{% data reusables.enterprise.constantly-improving %} {% data variables.product.company_short %} supports the four most recent feature releases. For more information, see "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)."

You can see what's new for each release in the [release notes](/admin/release-notes), and you can view administrator and user documentation for all releases here on {% data variables.product.prodname_docs %}. When you read the documentation, make sure to select the version that reflects your product. For more information, see "[About versions of {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)."

## Currently supported releases

{% data variables.product.company_short %} supports the following releases of {% data variables.product.product_name %}. For more information about the latest release, see the [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise) website.

| Version | Release | Deprecation | Release notes | Documentation |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.supported %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} release notes](/enterprise-server@{{version}}/admin/release-notes) | [{{version}} documentation](/enterprise-server@{{version}}) |
{%- endfor %}

## Deprecated releases

{% data variables.product.company_short %} provides documentation for deprecated versions, but does not maintain or update the documentation.

| Version | Release | Deprecation | Release notes | Documentation |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesWithNewFormat %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} release notes](/enterprise-server@{{version}}/admin/release-notes) | [{{version}} documentation](/enterprise-server@{{version}}) |
{%- endfor %}
{%- for version in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} release notes](https://enterprise.github.com/releases/series/{{version}}) | [{{version}} documentation](/enterprise/{{version}}) |
{%- endfor %}

### Deprecated developer documentation

{% data variables.product.company_short %} hosted developer documentation for {% data variables.product.product_name %} on a separate site until the 2.17 release. {% data variables.product.company_short %} continues to provide developer documentation for version 2.16 and earlier, but does not maintain or update the documentation.

| Version | Release | Deprecation | Developer documentation |
| :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} developer documentation](https://developer.github.com/enterprise/{{version}}) |
{%- endfor %}
