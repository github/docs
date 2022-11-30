---
title: プランのキャンセルの処理
intro: '{% data variables.product.prodname_marketplace %} アプリをキャンセルすると、`cancelled` アクションを含む [`marketplace_purchase` イベント](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) Webhook がトリガーされ、キャンセル フローが開始されます。'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/cancelling-plans
  - /apps/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /developers/github-marketplace/handling-plan-cancellations
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Plan cancellations
ms.openlocfilehash: 253506f1ac32f55649dd533559a7a16508cca98f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089615'
---
請求に関連するキャンセルの詳細については、[{% data variables.product.prodname_marketplace %} での顧客への課金](/apps//marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace)に関するページを参照してください。

## 手順 1. キャンセルイベント

顧客が {% data variables.product.prodname_marketplace %} の注文をキャンセルすることを選択した場合、キャンセルが有効になると、GitHub から [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) Webhook と `cancelled` アクションがアプリに送信されます。 顧客が無料トライアル中にキャンセルした場合、アプリケーションはすぐにこのイベントを受け取ります。 顧客が有料プランをキャンセルした場合、キャンセルは顧客の支払いサイクルの終了時に行われます。

## 手順 2. 顧客のアカウントのアクティベーション解除

顧客が無料もしくは有料のプランをキャンセルした場合、アプリケーションはキャンセルを完了するために以下のステップを実行しなければなりません。

1. プランをキャンセルした顧客のアカウントのアクティベーションを解除する。
1. 顧客用にアプリケーションが受け取ったOAuthトークンを取り消す。
1. アプリケーションがOAuthアプリケーションの場合、リポジトリ用にアプリケーションが作成したすべてのwebhookを削除する。
1. `cancelled` イベントを受信してから 30 日以内にすべての顧客データを削除する。

{% note %}

**注:** [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) Webhook の `effective_date` を使用して、プランの変更がいつ発生するかを判断し、[プランのアカウントの一覧表示](/rest/reference/apps#list-accounts-for-a-plan)を定期的に同期することをお勧めします。 Webhook の詳細については、[{% data variables.product.prodname_marketplace %} Webhook イベント](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)に関するページを参照してください。

{% endnote %}
