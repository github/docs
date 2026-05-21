---
title: Requesting Copilot code review with the REST API
shortTitle: Request Copilot code review
allowTitleToDifferFromFilename: true
intro: 'Use the REST API to request a {% data variables.copilot.copilot_code-review_short %} on a pull request and manage per-PR review preferences.'
versions:
  fpt: '*'
  ghec: '*'
category:
  - Manage issues, pull requests, and projects
---

## About requesting a {% data variables.copilot.copilot_code-review_short %}

You can use the REST API to ask {% data variables.product.prodname_copilot_short %} to review a pull request, optionally telling it how much effort to spend on the review and whether to re-review the pull request automatically on every new push.

This endpoint is preferred over adding the `copilot-pull-request-reviewer[bot]` user as a reviewer through the `requested_reviewers` endpoint. Both flows produce the same Copilot review under the hood, but the dedicated endpoint accepts per-PR preferences and returns a structured response.

These endpoints are only available on {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_ghe_cloud %}. They return `404` on {% data variables.product.prodname_ghe_server %}.
