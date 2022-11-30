---
title: プラン変更の処理
intro: '{% data variables.product.prodname_marketplace %} アプリをアップグレードまたはダウングレードすると、`changed` アクションで [`marketplace_purchase` イベント](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) Webhook がトリガーされて、アップグレード フローまたはダウングレード フローが始まります。'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/upgrading-or-downgrading-plans
  - /apps/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans
  - /marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans
  - /developers/github-marketplace/handling-plan-changes
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: fd5cc838c01130ab9e8a1f7c040b254655cbaef0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131303'
---
支払いに関連するアップグレードとダウングレードについて詳しくは、[{% data variables.product.prodname_marketplace %} API との統合](/marketplace/integrating-with-the-github-marketplace-api/)に関する記事を参照してください。

## 手順 1. 料金プランの変更イベント

顧客が {% data variables.product.prodname_marketplace %} の注文に対して次のいずれかの変更を行うと、GitHub は `changed` アクションを含む `marketplace_purchase` Webhook をお客様のアプリに送信します。
* より高価な価格プランへのアップグレードあるいは低価格なプランへのダウングレード
* 既存のプランへのシートの追加あるいはシートの削除
* 支払いサイクルの変更

GitHubは、変更が有効になるとwebhookを送信します。 たとえば、顧客がプランをダウングレードすると、その顧客の支払いサイクルの終了時点でwebhookを送信します。 顧客がプランをアップグレードした場合には、新しいサービスをすぐに利用できるようにするため、GitHubは即座にアプリケーションにwebhookを送信します。 顧客が支払いサイクルを月次から年次に切り替えた場合は、アップグレードと見なされます。 アップグレードまたはダウングレードと見なされるアクションの詳細については、[{% data variables.product.prodname_marketplace %} での顧客への課金](/marketplace/selling-your-app/billing-customers-in-github-marketplace/)に関する記事を参照してください。

`marketplace_purchase` Webhook から `effective_date`、`marketplace_purchase`、`previous_marketplace_purchase` を読み取り、プランの開始日を更新して、顧客の請求サイクルと価格プランを変更します。 `marketplace_purchase` イベント ペイロードの例については、[{% data variables.product.prodname_marketplace %} Webhook イベント](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)に関する記事を参照してください。

アプリで無料試用版が提供されている場合は、無料試用の期限が切れると、`changed` アクションを含む `marketplace_purchase` Webhook を受け取ります。 顧客の無料トライアル期間が終了したら、その顧客を無料トライアルプランの有料バージョンにアップグレードしてください。

## 手順 2. 顧客アカウントの更新

顧客が{% data variables.product.prodname_marketplace %}の注文に対して行った支払いサイクルや価格プランの変更を反映させるために、顧客のアカウント情報を更新しなければなりません。 `changed` アクションの Webhook を受け取ったら、Marketplace アプリの Web サイトまたはアプリの UI で、価格プラン、`seat_count` (ユニットごとの価格プランの場合)、請求サイクルに対するアップグレードを表示します。

顧客がプランをダウングレードした場合には、顧客がプランの制限を超えているかをレビューし、UIで直接関わるか、電話やメールで連絡することをおすすめします。

アップグレードを促すために、アップグレードのURLをアプリケーションのUIに表示できます。 詳細については、「[アップグレード URL について](#about-upgrade-urls)」を参照してください。

{% note %}

**注:** `GET /marketplace_listing/plans/:id/accounts` を使って定期的に同期を行い、各アカウントについてアプリのプラン、請求サイクル情報、ユニット数 (ユニット単位の料金の場合) が正しくなるようにすることをお勧めします。

{% endnote %}

## アップグレードの支払いの失敗

{% data reusables.marketplace.marketplace-failed-purchase-event %}

## アップグレードURLについて

アップグレードURLを使い、ユーザをアプリケーションのUIからGitHub上でのアップグレードへリダイレクトできます。

```text
https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>
```

たとえば、顧客が5人のプランを使っていて、10人のプランに移行する必要があることに気づいた場合、アプリケーションのUIに「アップグレードの方法はこちら」というボタンを表示したり、アップグレードURLへのリンクを持つバナーを表示したりできます。 アップグレードURLは顧客をリストされたプランのアップグレードの確認ページへ移動させます。

顧客が購入を望むプランの `LISTING_PLAN_NUMBER` を使用します。 新しい価格プランを作成すると、リスト全体でプランごとに固有の `LISTING_PLAN_NUMBER` と、{% data variables.product.prodname_marketplace %} においてプランごとに固有の `LISTING_PLAN_ID` を受け取ります。 [プランを一覧表示する](/rest/reference/apps#list-plans)とこれらの値を確認でき、それはリストの価格プランを示します。 `CUSTOMER_ACCOUNT_ID` を取得するには、`LISTING_PLAN_ID` と "[プランのアカウント一覧取得](/rest/reference/apps#list-accounts-for-a-plan)" エンドポイントを使用します。


{% note %}

**注:** 顧客がアップグレードしてユニット (シートなど) を追加した場合、アプリでは購入に対して適切なプランにそれを送信できますが、GitHub はその時点では `unit_count` パラメーターをサポートできません。

{% endnote %}
