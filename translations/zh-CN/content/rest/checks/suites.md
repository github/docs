---
title: 检查套件
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

  **注：**GitHub 应用程序针对每个提交 SHA 只接收一个 [`check_suite`](/webhooks/event-payloads/#check_suite) 事件，即使您将提交 SHA 推送到多个分支。 要了解提交 SHA 何时推送到分支，您可以订阅分支 [`create`](/webhooks/event-payloads/#create) 事件。

{% endnote %}
