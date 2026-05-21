---
title: API Versions
shortTitle: API Versions
intro: Learn how to specify which REST API version to use whenever you make a request to the REST API.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /rest/overview/api-versions
category:
  - Learn about the REST API
---

## About API versioning

{% data reusables.rest-api.about-api-versions %}

{% ifversion ghes %}

## About {% data variables.product.prodname_ghe_server %} versioning and REST API versioning

{% data variables.product.prodname_ghe_server %} versions are decoupled from REST API versions. You can upgrade your {% data variables.product.prodname_ghe_server %} version but keep the same REST API version, as long as the API version is included in the {% data variables.product.prodname_ghe_server %} version. Similarly, you can upgrade your REST API version without updating your {% data variables.product.prodname_ghe_server %} version, as long as the new REST API version you choose is available for your {% data variables.product.prodname_ghe_server %} version.

The {% data variables.product.prodname_ghe_server %} release notes will state when a REST API version is no longer supported. For more information, see [AUTOTITLE](/admin/release-notes).

{% endif %}

## Specifying an API version

You should use the `X-GitHub-Api-Version` header to specify an API version. For example:

```shell
curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

Requests without the `X-GitHub-Api-Version` header will default to use the `{{ defaultRestApiVersion }}` version.

If you specify an API version that is no longer supported, you will receive a `410 Gone` response.

## Upgrading to a new API version

Before upgrading to a new REST API version, you should read the changelog of breaking changes for the new API version to understand what breaking changes are included and to learn more about how to upgrade to that specific API version. For more information, see [AUTOTITLE](/rest/overview/breaking-changes).

When you update your integration to specify the new API version in the `X-GitHub-Api-Version` header, you'll also need to make any changes required for your integration to work with the new API version.

Once your integration is updated, test your integration to verify that it works with the new API version.

## API version {% data variables.release-phases.closing_down %}

API versions are supported for 24 months after a newer API version is released.

While a version is within its support window but approaching  {% data variables.release-phases.closing_down %}, {% data variables.product.github %} includes the following headers in API responses to help you prepare for migration:

* `Deprecation` — The date when the API version will be {% data variables.release-phases.closing_down %}, formatted as an HTTP date per [RFC 7231](https://tools.ietf.org/html/rfc7231#section-7.1.1.1). For example: `Wed, 27 Nov 2019 14:34:29 GMT`. <!-- markdownlint-disable-line GHD046 -->
* `Sunset` — The date when the API version will be completely removed ({% data variables.release-phases.retired %}), after which requests will return a `410 Gone` response. Follows [RFC 8594](https://tools.ietf.org/html/rfc8594). For example: `Fri, 27 Nov 2020 14:34:29 GMT`. <!-- markdownlint-disable-line GHD046 -->

After the support window ends:

* Requests that specify a {% data variables.release-phases.closing_down %} API version receive a `410 Gone` response.
* Requests that do not specify an API version default to the next oldest supported version, not the {% data variables.release-phases.closing_down %} version. If you rely on unversioned requests, you may observe behavioral changes as older versions are removed from support.

For more information on migrating to a newer API version, see [AUTOTITLE](/rest/about-the-rest-api/breaking-changes).

## Exceptions to standard versioning

In rare cases, {% data variables.product.github %} may make changes outside the normal API versioning cadence. These are exceptional interventions that do not alter the standard versioning guarantees for most integrators.

### Security, availability, and reliability issues

Critical security vulnerabilities, data exposure risks, or severe reliability issues may require changes outside the normal release schedule. {% data variables.product.github %} may release an unscheduled API version, backport fixes to supported versions, or in rare cases, introduce a breaking change to an existing version to protect users and platform integrity.

{% data variables.product.github %} will communicate such changes through release notes, changelogs, and direct communication explaining what changed and why. Where feasible, advance notice will be provided. Immediate action may be taken without advance notice when required.

### Low-usage services

For certain services with very low usage, {% data variables.product.github %} may deprecate functionality outside the standard versioning process. In these cases, {% data variables.product.github %} will communicate the intent and reach out to affected integrators directly.

## Supported API versions

The following REST API versions are currently supported.

| API version | End of support date |
| --- | --- |
{%- for apiVersion in allVersions[currentVersion].apiVersions %}
{%- assign versionData = tables.rest-api-versions.versions[apiVersion] %}
| `{{ apiVersion }}` | {{ versionData.end_of_support | default: "Not yet scheduled" }} |
{%- endfor %}

You can also make an API request to get all of the supported API versions. For more information, see [AUTOTITLE](/rest/meta/meta#get-all-api-versions).
