---
title: Users
intro: 'The Users API allows to get public and private information about the authenticated user.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Many of the resources on the users API provide a shortcut for getting information about the currently authenticated user. If a request URL does not include a `{username}` parameter then the response will be for the logged in user (and you must pass [authentication information](/rest/overview/resources-in-the-rest-api#authentication) with your request).{% ifversion fpt or ghes or ghec %} Additional private information, such as whether a user has two-factor authentication enabled, is included when authenticated through basic auth or OAuth with the `user` scope.{% endif %}