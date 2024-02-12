---
title: API Versions
shortTitle: API Versions
intro: Learn how to specify which REST API version to use whenever you make a request to the REST API.
versions:
  feature: api-date-versioning
---

## About API versioning

{% data reusables.rest-api.about-api-versions %}

{% ifversion ghes %}

## About {% data variables.product.prodname_ghe_server %} versioning and REST API versioning

{% data variables.product.prodname_ghe_server %} versions are decoupled from REST API versions. You can upgrade your {% data variables.product.prodname_ghe_server %} version but keep the same REST API version, as long as the API version is included in the {% data variables.product.prodname_ghe_server %} version. Similarly, you can upgrade your REST API version without updating your {% data variables.product.prodname_ghe_server %} version, as long as the new REST API version you choose is available for your {% data variables.product.prodname_ghe_server %} version.

The {% data variables.product.prodname_ghe_server %} release notes will state when a REST API version is no longer supported. For more information, see "[AUTOTITLE](/admin/release-notes)."

{% endif %}

## Specifying an API version

You should use the `X-GitHub-Api-Version` header to specify an API version. For example:

```shell
curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

Requests without the `X-GitHub-Api-Version` header will default to use the `{{ initialRestVersioningReleaseDate }}` version.

If you specify an API version that is no longer supported, you will receive a `400` error.

## Upgrading to a new API version

Before upgrading to a new REST API version, you should read the changelog of breaking changes for the new API version to understand what breaking changes are included and to learn more about how to upgrade to that specific API version. For more information, see "[AUTOTITLE](/rest/overview/breaking-changes)."

When you update your integration to specify the new API version in the `X-GitHub-Api-Version` header, you'll also need to make any changes required for your integration to work with the new API version.

Once your integration is updated, test your integration to verify that it works with the new API version.

## Supported API versions

The following REST API versions are currently supported:

{% for apiVersion in allVersions[currentVersion].apiVersions %}
{{ apiVersion }}
{% endfor %}

You can also make an API request to get all of the supported API versions. For more information, see "[AUTOTITLE](/rest/meta#get-all-api-versions)."
