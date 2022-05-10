---
title: チェックスイート
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

  **注釈:** コミット SHA を複数のブランチにプッシュした場合でも、GitHub App はコミット SHA ごとに 1 つの [`check_suite`](/webhooks/event-payloads/#check_suite) イベントのみを受け取ります。 ブランチ [`create`](/webhooks/event-payloads/#create) イベントをサブスクライブして、コミット SHA がブランチにプッシュされたタイミングを確認することができます。

{% endnote %}
