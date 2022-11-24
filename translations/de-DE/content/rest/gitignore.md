---
title: Gitignore
intro: The Gitignore API fetches `.gitignore` templates that can be used to ignore files and directories.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/gitignore
---

## About the Gitignore API

When you create a new repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} via the API, you can specify a [.gitignore template](/github/getting-started-with-github/ignoring-files) to apply to the repository upon creation. The .gitignore templates API lists and fetches templates from the {% data variables.product.product_name %} [.gitignore repository](https://github.com/github/gitignore).

### Custom media types for gitignore

You can use this custom media type when getting a gitignore template.

    application/vnd.github.VERSION.raw

For more information, see "[Media types](/rest/overview/media-types)."
