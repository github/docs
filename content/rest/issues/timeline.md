---
title: Timeline events
allowTitleToDifferFromFilename: true
shortTitle: Timeline
intro: The Timeline events API can return different types of events triggered by timeline activity in issues and pull requests.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Timeline events API

The Timeline events API can return different types of events triggered by timeline activity in issues and pull requests. For more information about the specific events that you can receive from the Issue Events API, see "[Issue event types](/developers/webhooks-and-events/issue-event-types)." An events API for GitHub activity outside of issues and pull requests is also available. For more information, see the "[GitHub Events API](/developers/webhooks-and-events/github-event-types)."

You can use this API to display information about issues and pull request or determine who should be notified of issue comments.

{% data reusables.pull_requests.issues-pr-shared-api %}
