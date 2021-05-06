---
title: GitHub Marketplace APIのためのwebhookイベント
intro: '{% data variables.product.prodname_marketplace %}アプリケーションは、ユーザのプランに対する変更に関する情報を、Marketplaceの購入イベントwebhookから受け取ります。 Marketplaceの購入イベントは、ユーザが支払いプランの購入、キャンセル、変更をした場合にトリガーされます。'
redirect_from:
  - /apps/marketplace/setting-up-github-marketplace-webhooks/about-webhook-payloads-for-a-github-marketplace-listing/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---



### {% data variables.product.prodname_marketplace %}購入webhookのペイロード

webhookの`POST`リクエストには、特別なヘッダがあります。 詳細については「[webhookの配信ヘッダ](/webhooks/event-payloads/#delivery-headers)」を参照してください。 GitHubは、失敗した配信の試行を再送信しません。 GitHubが送信したすべてのwebhookのペイロードを、アプリケーションが確実に受信できるようにしてください。

キャンセル及びダウングレードは、次の支払いサイクルの初日に有効になります。 ダウングレードとキャンセルのイベントは、次の支払いサイクルの開始時に新しいプランが有効になったときに送信されます。 新規の購入とアップグレードのイベントは、すぐに開始されます。 変更がいつ始まるかを判断するには、webhookのペイロード中の`effective_date`を使ってください。

{% data reusables.marketplace.marketplace-malicious-behavior %}

それぞれの`marketplace_purchase` webhookのペイロードは、以下の情報を持ちます。


| キー                     | 種類       | 説明                                                                                                                                                                                                                                                                                                           |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `action`               | `string` | webhookを生成するために行われたアクション。 `purchased`、`cancelled`、`pending_change`、`pending_change_cancelled`、`changed`のいずれかになります。 詳しい情報については、以下のwebhookペイロードの例を参照してください。 **ノート:** `pending_change`及び`pending_change_cancelled`ペイロードには、[`changed`ペイロードの例](#example-webhook-payload-for-a-changed-event)に示されているものと同じキーが含まれます。 |
| `effective_date`       | `string` | `action`が有効になる日付。                                                                                                                                                                                                                                                                                            |
| `sender`               | `object` | webhookをトリガーした`action`を行った人。                                                                                                                                                                                                                                                                                 |
| `marketplace_purchase` | `object` | {% data variables.product.prodname_marketplace %}の購入情報。                                                                                                                                                                                                                                                      |

`marketplace_purchase`オブジェクトは、以下のキーを持ちます。

| キー                   | 種類        | 説明                                                                                                                                                                                                                                      |
| -------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `account`            | `object`  | サブスクリプションに関連づけられた`organization`もしくあは`user`アカウント。 Organizationアカウントは、そのOrganizationの管理者のメールアドレスである`organization_billing_email`を含みます。 個人アカウントのメールアドレスを知るには、[認証されたユーザの取得](/rest/reference/users#get-the-authenticated-user)エンドポイントが利用できます。 |
| `billing_cycle`      | `string`  | `yearly`もしくは`monthly`のいずれかになります。 `account`の所有者が無料のGitHubのプランを使っており、無料の{% data variables.product.prodname_marketplace %}プランを購入した場合、`billing_cycle`は`nil`になります。                                                                           |
| `unit_count`         | `integer` | 購入したユーザ数。                                                                                                                                                                                                                               |
| `on_free_trial`      | `boolean` | `account`が無料トライアル中の場合`true`になります。                                                                                                                                                                                                       |
| `free_trial_ends_on` | `string`  | 無料トライアルが期限切れになる日付。                                                                                                                                                                                                                      |
| `next_billing_date`  | `string`  | 次の支払いサイクルが始まる日付。 `account`の所有者が無料のGitHub.comのプランを使っており、無料の{% data variables.product.prodname_marketplace %}プランを購入した場合、`next_billing_date`は`nil`になります。                                                                                   |
| `plan`               | `オブジェクト`  | `user`または`organization`が購入したプラン。                                                                                                                                                                                                        |

`plan`オブジェクトには以下のキーがあります。

| キー                       | 種類                 | 説明                                                     |
| ------------------------ | ------------------ | ------------------------------------------------------ |
| `id`                     | `integer`          | このプランの一意の識別子。                                          |
| `name`                   | `string`           | プラン名。                                                  |
| `説明`                     | `string`           | プランの説明。                                                |
| `monthly_price_in_cents` | `integer`          | このプランのセント (米国の通貨) 単位の月額。 たとえば、月額10米ドルのリストは1000セントです。   |
| `yearly_price_in_cents`  | `integer`          | このプランのセント (米国の通貨) 単位の年額。 たとえば、月額100米ドルのリストは10000セントです。 |
| `price_model`            | `string`           | このリストの価格モデル。 `flat-rate`、`per-unit`、`free`のいずれかです。     |
| `has_free_trial`         | `boolean`          | このリストが無料トライアルを提供する場合は`true`になります。                      |
| `unit_name`              | `string`           | ユニットの名前。 価格モデルが`per-unit`でない場合、これは`nil`になります。          |
| `bullet`                 | `array of strings` | 価格プランに設定されている箇条書きの名前。                                  |

<br/>

#### `purchased`イベントのサンプルwebhookペイロード
次の例は、`purchased`イベントのペイロードを示しています。

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

#### `changed`イベントのサンプルwebhookペイロード

プランの変更には、アップグレードとダウンロードがあります。 この例は、`changed`、`pending_change`、および`pending_change_cancelled`イベントのペイロードを表しています。 このアクションは、これら3つのイベントのうちどれが発生したかを示します。

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.changed }}

#### `cancelled`イベントのサンプルwebhookペイロード

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.cancelled }}
