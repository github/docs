---
title: Breaking changes
shortTitle: Breaking changes
intro: Learn about breaking changes that were introduced in each REST API version.
versions:
  feature: api-date-versioning
---

## About breaking changes in the REST API

{% data reusables.rest-api.about-api-versions %}

For more information about API versions, see "[AUTOTITLE](/rest/overview/api-versions)."

## Upgrading to a new API version

Before upgrading to a new REST API version, you should read the section on this page that corresponds to the new API version to understand what breaking changes are included and to learn more about how to upgrade to that API version.

When you update your integration to specify the new API version in the `X-GitHub-Api-Version` header, you'll also need to make any changes required for your integration to work with the new API version.

Once your integration is updated, test your integration to verify that it works with the new API version.

## Breaking changes for {{ initialRestVersioningReleaseDate }}

Version `{{ initialRestVersioningReleaseDate }}` is the first version of the {% data variables.product.product_name %} REST API after date-based versioning was introduced. This version does not include any breaking changes.
