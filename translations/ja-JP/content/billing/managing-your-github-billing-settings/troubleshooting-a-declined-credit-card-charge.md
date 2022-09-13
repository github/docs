---
title: クレジットカードへの請求が拒否された場合のトラブルシューティング
intro: '{% data variables.product.product_name %} への支払いに使っているクレジットカードが拒否された場合、支払いが行われるように、そして、自分のアカウントから締め出されなくするための、いくつかのステップがあります。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/troubleshooting-a-declined-credit-card-charge
  - /articles/what-do-i-do-if-my-card-is-declined
  - /articles/troubleshooting-a-declined-credit-card-charge
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/troubleshooting-a-declined-credit-card-charge
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Troubleshooting
shortTitle: Declined credit card charge
ms.openlocfilehash: 44ed836d24e23ceb7e805cccdad6e70203381bf5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884222'
---
カードが拒否された場合、その支払いが拒否された理由についてメールが送られます。 再び請求される前、その問題を解決するための数日間の猶予があります。

## カードの期限の日付の確認

カードが期限切れの場合、アカウントの支払い情報をアップデートする必要があります。 詳細については、「[支払い方法を追加または編集する](/articles/adding-or-editing-a-payment-method)」を参照してください。

## カードの制限についての銀行のポリシーの確認

一定の国際的な銀行は、国際、E コマースおよび自動的な定期取引について制限をしています。 国際的なクレジットカードでの支払いの実行のトラブルの場合、あなたのカードに対する制限があるか銀行に確認してください。

PayPal での支払いもサポートしています。 詳細については、「[支払い方法を追加または編集する](/articles/adding-or-editing-a-payment-method)」を参照してください。

## 取引の詳細についての銀行への連絡

実行しようとした取引について具体的に問い合わせると、拒否された支払いについて銀行からさらに情報を得られます。 カードに制限があり、銀行に問い合わせる必要がある場合、この情報を銀行に提供してください:

- **課金対象の金額。** サブスクリプションの金額は、アカウントの領収書に表示されます。 詳細については、「[支払い履歴と領収書を表示する](/articles/viewing-your-payment-history-and-receipts)」を参照してください。
- **{% data variables.product.product_name %} が請求する日付。** お客様のアカウントの請求日は領収書に表示されています。
- **トランザクション ID 番号。** お客様のアカウントのトランザクション ID は領収書に表示されています。
- **マーチャント名。** マーチャント名は {% data variables.product.prodname_dotcom %} です。
- **銀行が請求を拒否して送信したエラー メッセージ。** 銀行のエラー メッセージは、請求が拒否されたときに送信されるメールに記載されています。
