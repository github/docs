---
title: Check Suites
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

{% note %}

  **Note:** A GitHub App only receives one [`check_suite`](/webhooks/event-payloads/#check_suite) event per commit SHA, even if you push the commit SHA to more than one branch. To find out when a commit SHA is pushed to a branch, you can subscribe to branch [`create`](/webhooks/event-payloads/#create) events.

{% endnote %}