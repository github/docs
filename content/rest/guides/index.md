---
title: Guides
intro: 'Learn about getting started with the REST API, authentication, and how to use the REST API for a variety of tasks.'
redirect_from:
  - /guides
  - /v3/guides
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
children:
  - /getting-started-with-the-rest-api
  - /scripting-with-the-rest-api-and-javascript
  - /scripting-with-the-rest-api-and-ruby
  - /discovering-resources-for-a-user
  - /delivering-deployments
  - /rendering-data-as-graphs
  - /working-with-comments
  - /using-pagination-in-the-rest-api
  - /building-a-ci-server
  - /best-practices-for-using-the-rest-api
  - /using-the-rest-api-to-interact-with-your-git-database
  - /using-the-rest-api-to-interact-with-checks
  - /encrypting-secrets-for-the-rest-api
---
This section of the documentation is intended to get you up-and-running with
real-world {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API applications. We'll go over everything you need to know, from authentication to results manipulation to integrating results with other apps.
Every tutorial will include a project, and each project will be saved and documented in our public
[platform-samples](https://github.com/github/platform-samples) repository.
