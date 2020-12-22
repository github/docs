---
title: プラン変更の処理
intro: '{% data variables.product.prodname_marketplace %} アプリケーションのアップグレードあるいはダウングレードによって、[`marketplace_purchase` イベント](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) webhookが`changed`アクション付きでトリガされ、それによってアップグレードあるいはダウングレードのフローが開始されます。'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/upgrading-or-downgrading-plans/
  - /apps/marketplace/administering-listing-plans-and-user-accounts/upgrading-or-downgrading-plans/
  - /marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans
versions:
  free-pro-team: '*'
---



支払いに関連するアップグレード及びダウングレードに関する詳しい説明については「[{% data variables.product.prodname_marketplace %} APIとのインテグレーション](/marketplace/integrating-with-the-github-marketplace-api/)」を参照してください。

### ステップ 1. 料金プランの変更イベント

顧客が{% data variables.product.prodname_marketplace %}の注文に対して以下のいずれかの変更を行うと、GitHubは`marketplace_purchase` webhookを`changed`アクション付きでアプリケーションに送信します。
* より高価な価格プランへのアップグレードあるいは低価格なプランへのダウングレード
* 既存のプランへのシートの追加あるいはシートの削除
* 支払いサイクルの変更

GitHubは、変更が有効になるとwebhookを送信します。 たとえば、顧客がプランをダウングレードすると、その顧客の支払いサイクルの終了時点でwebhookを送信します。 顧客がプランをアップグレードした場合には、新しいサービスをすぐに利用できるようにするため、GitHubは即座にアプリケーションにwebhookを送信します。 顧客が支払いサイクルを月次から年次に切り替えた場合は、アップグレードと見なされます。 どういったアクションがアップグレードやダウングレードと見なされるかを詳しく学ぶには、「[{% data variables.product.prodname_marketplace %}での顧客への課金](/marketplace/selling-your-app/billing-customers-in-github-marketplace/)」を参照してください。

プランの開始日を更新し、顧客の支払いサイクルと価格プランを変更するために、`marketplace_purchase`から`effective_date`、`marketplace_purchase`、`previous_marketplace_purchase`を読み取ってください。 `marketplace_purchase`イベントペイロードの例については「[{% data variables.product.prodname_marketplace %} webhookイベント](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)」を参照してください。

アプリケーションが無料トライアルを提供しているなら、無料トライアルの有効期限が切れると`marketplace_purchase` webhookを`changed`アクション付きで受け取ります。 顧客の無料トライアル期間が終了したら、その顧客を無料トライアルプランの有料バージョンにアップグレードしてください。

### ステップ 2. 顧客アカウントの更新

顧客が{% data variables.product.prodname_marketplace %}の注文に対して行った支払いサイクルや価格プランの変更を反映させるために、顧客のアカウント情報を更新しなければなりません。 `changed`アクションwebhookを受信した際に、MarketplaceアプリケーションのWebサイトか、アプリケーションのUIに、価格プラン、`seat_count`（ユニット単位の価格プランの場合）、支払いサイクルのアップグレードを表示してください。

顧客がプランをダウングレードした場合には、顧客がプランの制限を超えているかをレビューし、UIで直接関わるか、電話やメールで連絡することをおすすめします。

アップグレードを促すために、アップグレードのURLをアプリケーションのUIに表示できます。 詳細については「[アップグレードURLについて](#about-upgrade-urls)」を参照してください。

{% note %}

**ノート:** `GET /marketplace_listing/plans/:id/accounts`を使って定期的に同期を行い、それぞれのアカウントに対してアプリケーションが正しいプラン、支払いサイクルの情報、ユニット数（ユニット単位の料金の場合）を保持していることを確認するようおすすめします。

{% endnote %}

### アップグレードの支払いの失敗

{% data reusables.marketplace.marketplace-failed-purchase-event %}

### アップグレードURLについて

アップグレードURLを使い、ユーザをアプリケーションのUIからGitHub上でのアップグレードへリダイレクトできます。

```
https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>
```

たとえば、顧客が5人のプランを使っていて、10人のプランに移行する必要があることに気づいた場合、アプリケーションのUIに「アップグレードの方法はこちら」というボタンを表示したり、アップグレードURLへのリンクを持つバナーを表示したりできます。 アップグレードURLは顧客をリストされたプランのアップグレードの確認ページへ移動させます。

顧客が購入したいであろうプランの`LISTING_PLAN_NUMBER`を使ってください。 新しい価格プランを作成すると、それらにはリスト内で各プランに対してユニークな`LISTING_PLAN_NUMBER`と、{% data variables.product.prodname_marketplace %}内で各プランに対してユニークな`LISTING_PLAN_ID`が与えられます。 [プランをリスト](/rest/reference/apps#list-plans)する際にはこれらの番号があり、リストの価格プランを特定できます。 `LISTING_PLAN_ID`と「[プランに対するアカウントのリスト](/rest/reference/apps#list-accounts-for-a-plan)」エンドポイントを使って、`CUSTOMER_ACCOUNT_ID`を取得してください。


{% note %}

**ノート:** 顧客が追加ユニット（シートなど）のアップグレードをした場合でも、顧客に購入に対する適切なプランを送信することはできますが、その時点で弊社は`unit_count`パラメータをサポートできません。

{% endnote %}
