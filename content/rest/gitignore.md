---
title: Gitignore
intro: Use the REST API to get `.gitignore` templates that can be used to ignore files and directories.
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

## About gitignore

When you create a new repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} via the API, you can specify a [.gitignore template](/github/getting-started-with-github/ignoring-files) to apply to the repository upon creation. You can use the REST API to get .gitignore templates from the {% data variables.product.product_name %} [.gitignore repository](https://github.com/github/gitignore).

You can use the `application/vnd.github.raw` custom media type when getting a gitignore template. For more information, see "[Media types](/rest/overview/media-types)."
