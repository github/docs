---
title: Pages
intro: 'The GitHub Pages API allows you to interact with GitHub Pages sites and build information.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

The {% data variables.product.prodname_pages %} API retrieves information about your {% data variables.product.prodname_pages %} configuration, and the statuses of your builds. Information about the site and the builds can only be accessed by authenticated owners{% ifversion not ghae %}, even if the websites are public{% endif %}. For more information, see "[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)."

In {% data variables.product.prodname_pages %} API endpoints with a `status` key in their response, the value can be one of:
* `null`: The site has yet to be built.
* `queued`: The build has been requested but not yet begun.
* `building`:The build is in progress.
* `built`: The site has been built.
* `errored`: Indicates an error occurred during the build.

In {% data variables.product.prodname_pages %} API endpoints that  return GitHub Pages site information, the JSON responses include these fields:
* `html_url`: The absolute URL (including scheme) of the rendered Pages site. For example, `https://username.github.io`.
* `source`: An object that contains the source branch and directory for the rendered Pages site. This includes:
   - `branch`: The repository branch used to publish your [site's source files](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). For example, _main_ or _gh-pages_.
   - `path`: The repository directory from which the site publishes. Will be either `/` or `/docs`.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pages' %}{% include rest_operation %}{% endif %}
{% endfor %}