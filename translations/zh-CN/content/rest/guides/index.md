---
title: 指南
intro: 了解如何开始使用 REST API、身份验证以及如何使用 REST API 完成各种任务。
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
  - /basics-of-authentication
  - /discovering-resources-for-a-user
  - /delivering-deployments
  - /rendering-data-as-graphs
  - /working-with-comments
  - /traversing-with-pagination
  - /building-a-ci-server
  - /best-practices-for-integrators
  - /getting-started-with-the-git-database-api
  - /getting-started-with-the-checks-api
---

文档的这一部分旨在让您使用实际 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 应用程序开始运行。 We'll go over everything you need to know, from authentication to results manipulation to integrating results with other apps. Every tutorial will include a project, and each project will be saved and documented in our public [platform-samples](https://github.com/github/platform-samples) repository. ![The Octocat](/assets/images/electrocat.png)
