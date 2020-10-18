---
title: About GitHub's APIs
intro: 'Learn about {% data variables.product.prodname_dotcom %}''s APIs to extend and customize your {% data variables.product.prodname_dotcom %} experience.'
redirect_from:
  - /v3/versions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt '2.9' %}

There are two stable versions of the GitHub API: the [REST API](/v3/) and the [GraphQL API](/v4/).

{% else %}

The latest stable version of the GitHub API is the [REST API](/v3/).

{% endif %}

When using the REST API, we encourage you to [request v3 via the `Accept` header](/v3/media/#request-specific-version).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt '2.9' %}

For information on using the GraphQL API, see the [v4 docs](/v4/).

{% endif %}

## Deprecated versions

### 测试版

We deprecated the beta API on April 22, 2014.

### v2

We removed support for API v2 on June 12, 2012.

### v1

We removed support for API v1 on June 12, 2012.
