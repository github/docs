---
title: タイムラインイベント
allowTitleToDifferFromFilename: true
shortTitle: タイムライン
intro: Timeline events APIは、Issue及びPull Request中のタイムラインアクティビティによってトリガーされる様々なタイプのイベントを返します。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Timeline events APIについて

Timeline events APIは、Issue及びPull Request中のタイムラインアクティビティによってトリガーされる様々なタイプのイベントを返します。 Issue Events APIから受信できる特定のイベントに関する詳しい情報については「[Issueイベントタイプ](/developers/webhooks-and-events/issue-event-types)」を参照してください。 Issue及びPull Request以外のGitHubアクティビリティに対するイベントAPIも利用できます。 詳細は、「[GitHub イベント API](/developers/webhooks-and-events/github-event-types)」を参照してください。

この API を使用すると、Issue およびPull Requestに関する情報を表示したり、Issue コメントを通知する相手を決定したりできます。

{% data reusables.pull_requests.issues-pr-shared-api %}
