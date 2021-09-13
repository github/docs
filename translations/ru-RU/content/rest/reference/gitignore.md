---
title: Gitignore
redirect_from:
  - /v3/gitignore
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

When you create a new {% data variables.product.product_name %} repository via the API, you can specify a [.gitignore template](/github/getting-started-with-github/ignoring-files) to apply to the repository upon creation. The .gitignore templates API lists and fetches templates from the {% data variables.product.product_name %} [.gitignore repository](https://github.com/github/gitignore).

### Custom media types for gitignore

You can use this custom media type when getting a gitignore template.

    application/vnd.github.VERSION.raw

For more information, see "[Media types](/rest/overview/media-types)."

{% include rest_operations_at_current_path %}
