---
title: グローバル webhook
intro: グローバルwebhookはEnterpriseにインストールされます。 グローバル webhook を使用して、Engerprise のユーザ、Organization、Team、およびリポジトリのルールを自動的に監視、対応、強制することができます。
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

グローバル webhook は、[Organization](/developers/webhooks-and-events/webhook-events-and-payloads#organization)、[ユーザ](/developers/webhooks-and-events/webhook-events-and-payloads#user)、[リポジトリ](/developers/webhooks-and-events/webhook-events-and-payloads#repository)、[Team](/developers/webhooks-and-events/webhook-events-and-payloads#team)、[メンバー](/developers/webhooks-and-events/webhook-events-and-payloads#member)、[メンバーシップ](/developers/webhooks-and-events/webhook-events-and-payloads#membership)、[フォーク](/developers/webhooks-and-events/webhook-events-and-payloads#fork)、[ping](/developers/webhooks-and-events/about-webhooks#ping-event) イベントタイプをサブスクライブできます。

*この API は、[認証された](/rest/overview/resources-in-the-rest-api#authentication)サイト管理者のみが使用できます。*通常のユーザがアクセスしようとすると、`404` レスポンスを受け取ります。 グローバル webhook の設定方法については、[グローバル webhookについて](/enterprise/admin/user-management/about-global-webhooks)を参照してください。
