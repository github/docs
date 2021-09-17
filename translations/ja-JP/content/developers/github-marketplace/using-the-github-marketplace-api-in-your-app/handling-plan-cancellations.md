---
title: プランのキャンセルの処理
intro: '{% data variables.product.prodname_marketplace %}アプリケーションをキャンセルすると、[`marketplace_purchase`イベント](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) webhookが`cancelled`アクション付きでトリガされます。これによって、キャンセルのフローが開始されます。'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/cancelling-plans/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans/
  - /marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /developers/github-marketplace/handling-plan-cancellations
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---

支払いに関連するキャンセルについての詳しい情報は、「[{% data variables.product.prodname_marketplace %}での顧客の支払い](/apps//marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace)」を参照してください。

### ステップ 1. キャンセルイベント

顧客が{% data variables.product.prodname_marketplace %}の注文をキャンセルすることにした場合、GitHubは[`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) webhookを`cancelled`というアクション付きで、キャンセルが有効になった時点でアプリケーションに送信します。 顧客が無料トライアル中にキャンセルした場合、アプリケーションはすぐにこのイベントを受け取ります。 顧客が有料プランをキャンセルした場合、キャンセルは顧客の支払いサイクルの終了時に行われます。

### ステップ 2. 顧客のアカウントのアクティベーション解除

顧客が無料もしくは有料のプランをキャンセルした場合、アプリケーションはキャンセルを完了するために以下のステップを実行しなければなりません。

1. プランをキャンセルした顧客のアカウントのアクティベーションを解除する。
1. 顧客用にアプリケーションが受け取ったOAuthトークンを取り消す。
1. アプリケーションがOAuthアプリケーションの場合、リポジトリ用にアプリケーションが作成したすべてのwebhookを削除する。
1. `cancelled`イベントを受け取ってから30日以内に顧客のすべてのデータを削除する。

{% note %}

**ノート:** プランの変更がいつ生じるのかを知るために[`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) webhookの`effective_date`を利用し、定期的に[プランのリストアカウント](/rest/reference/apps#list-accounts-for-a-plan)を同期することをおすすめします。 webhookに関する詳しい情報については「[{% data variables.product.prodname_marketplace %}のwebhookイベント](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)」を参照してください。

{% endnote %}
