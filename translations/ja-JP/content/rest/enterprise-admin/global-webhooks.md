---
title: グローバル Webhook
intro: グローバル webhook は Enterprise にインストールされています。 グローバル webhook を使用して、Engerprise のユーザ、Organization、Team、およびリポジトリのルールを自動的に監視、対応、強制することができます。
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 66186eeba470274d91b61aaae700e25716c26ef5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067227'
---
グローバル Webhook は、[Organization](/developers/webhooks-and-events/webhook-events-and-payloads#organization)、[ユーザー](/developers/webhooks-and-events/webhook-events-and-payloads#user)、[リポジトリ](/developers/webhooks-and-events/webhook-events-and-payloads#repository)、[チーム](/developers/webhooks-and-events/webhook-events-and-payloads#team)、[メンバー](/developers/webhooks-and-events/webhook-events-and-payloads#member)、[メンバーシップ](/developers/webhooks-and-events/webhook-events-and-payloads#membership)、[フォーク](/developers/webhooks-and-events/webhook-events-and-payloads#fork)、および [ping](/developers/webhooks-and-events/about-webhooks#ping-event) イベントの種類をサブスクライブできます。

*この API は、[認証された](/rest/overview/resources-in-the-rest-api#authentication)サイト管理者のみが使えます。* 通常のユーザーは、アクセスしようとすると `404` 応答を受け取ります。 グローバル Webhook を構成する方法については、「[グローバル Webhook について](/enterprise/admin/user-management/about-global-webhooks)」を参照してください。
