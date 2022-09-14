---
title: GitHub Marketplace APIのためのwebhookイベント
intro: '{% data variables.product.prodname_marketplace %}アプリケーションは、ユーザのプランに対する変更に関する情報を、Marketplaceの購入イベントwebhookから受け取ります。 Marketplaceの購入イベントは、ユーザが支払いプランの購入、キャンセル、変更をした場合にトリガーされます。'
redirect_from:
  - /apps/marketplace/setting-up-github-marketplace-webhooks/about-webhook-payloads-for-a-github-marketplace-listing
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /developers/github-marketplace/webhook-events-for-the-github-marketplace-api
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Webhook events
ms.openlocfilehash: 63b99005c5b0da23c59794d8fd7ad724f5afd13a
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710404'
---
## {% data variables.product.prodname_marketplace %}購入webhookのペイロード

Webhook の `POST` 要求には特別なヘッダーがあります。 詳細については、[Webhook の配信ヘッダー](/webhooks/event-payloads/#delivery-headers)を参照してください。 GitHubは、失敗した配信の試行を再送信しません。 GitHubが送信したすべてのwebhookのペイロードを、アプリケーションが確実に受信できるようにしてください。

キャンセル及びダウングレードは、次の支払いサイクルの初日に有効になります。 ダウングレードとキャンセルのイベントは、次の支払いサイクルの開始時に新しいプランが有効になったときに送信されます。 新規の購入とアップグレードのイベントは、すぐに開始されます。 Webhook ペイロードで `effective_date` を使用して、変更が開始されるタイミングを決定します。

{% data reusables.marketplace.marketplace-malicious-behavior %}

各 `marketplace_purchase` Webhook ペイロードには、次の情報が含まれます。


キー | Type | 説明
----|------|-------------
`action` | `string` | webhookを生成するために行われたアクション。 `purchased`、`cancelled`、`pending_change`、`pending_change_cancelled`、または `changed` を指定できます。 詳しい情報については、以下のwebhookペイロードの例を参照してください。 **注:** `pending_change` と `pending_change_cancelled` の各ペイロードには、[`changed` ペイロードの例](#example-webhook-payload-for-a-changed-event)に示されているのと同じキーが含まれています。
`effective_date` | `string` | `action` が有効になる日付。
`sender` | `object` | Webhook をトリガーした `action` を実行した人。
`marketplace_purchase` | `object` | {% data variables.product.prodname_marketplace %}の購入情報。

`marketplace_purchase` オブジェクトには、次のキーがあります。

キー | Type | 説明
----|------|-------------
`account` | `object` | サブスクリプションに関連付けられている `organization` または `user` のアカウント。 Organization アカウントには、Organization の管理用メール アドレスである `organization_billing_email` が含まれます。 個人用アカウントのメール アドレスを検索するには、[認証されたユーザー エンドポイントの取得](/rest/reference/users#get-the-authenticated-user)を使用できます。
`billing_cycle` | `string` | `yearly` または `monthly` を指定できます。 `account` の所有者が無料の GitHub プランを持っていて、無料の {% data variables.product.prodname_marketplace %} プランを購入した場合、`billing_cycle` は `nil` になります。
`unit_count`  | `integer` | 購入したユーザ数。
`on_free_trial` | `boolean` | `true` が無料試用版の場合は `account`。
`free_trial_ends_on` | `string` | 無料トライアルが期限切れになる日付。
`next_billing_date` | `string` | 次の支払いサイクルが始まる日付。 `account` の所有者が無料の GitHub.com プランを持っていて、無料の {% data variables.product.prodname_marketplace %} プランを購入した場合、`next_billing_date` は `nil` になります。
`plan` | `object` | `user` または `organization` によって購入されたプラン。

`plan` オブジェクトには、次のキーがあります。

キー | Type | 説明
----|------|-------------
`id` | `integer` | このプランの一意の識別子。
`name` | `string` | プラン名。
`description` | `string` | プランの説明。
`monthly_price_in_cents` | `integer` | このプランのセント (米国の通貨) 単位の月額。 たとえば、月額10米ドルのリストは1000セントです。
`yearly_price_in_cents` | `integer` | このプランのセント (米国の通貨) 単位の年額。 たとえば、月額 100 米ドルのリストは 120000 セントになりす。
`price_model` | `string` | このリストの価格モデル。 `flat-rate`、`per-unit`、`free` のいずれかを指定できます。
`has_free_trial` | `boolean` | このリストが無料試用版を提供している場合は `true`。
`unit_name` | `string` | ユニットの名前。 価格モデルが `per-unit` でない場合、これは `nil` になります。
`bullet` | `array of strings` | 価格プランに設定されている箇条書きの名前。

<br/>

### `purchased` イベントの Webhook ペイロードの例
この例では、`purchased` イベント ペイロードを提供します。

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

### `changed` イベントの Webhook ペイロードの例

プランの変更には、アップグレードとダウンロードがあります。 この例は、`changed`、`pending_change`、`pending_change_cancelled` の各イベント ペイロードを表しています。 このアクションは、これら3つのイベントのうちどれが発生したかを示します。

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.changed }}

### `cancelled` イベントの Webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.cancelled }}
