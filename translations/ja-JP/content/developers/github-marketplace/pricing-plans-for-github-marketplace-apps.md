---
title: GitHub Marketplaceアプリケーションの価格プラン
intro: '価格プランを利用して、様々なレベルのサービスやリソースと共にアプリケーションを提供できます。 {% data variables.product.prodname_marketplace %}のリストでは、最大で10個の価格プランを提供できます。'
redirect_from:
  - /apps/marketplace/selling-your-app/github-marketplace-pricing-plans/
  - /marketplace/selling-your-app/github-marketplace-pricing-plans
versions:
  free-pro-team: '*'
---



{% data variables.product.prodname_marketplace %}の価格プランは、無料、定額料金、ユニット単位にすることができ、GitHubは価格を米ドルでリストします。 顧客はGitHub.comを離れることなく、{% data variables.product.product_name %}アカウントに添付された支払い方法を使ってアプリケーションを購入します。 支払い処理を行うためのコードを書く必要はありませんが、購入イベントのための[支払いフロー](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows)は処理しなければなりません。

{% data variables.product.prodname_marketplace %}上でリストしているアプリケーションが複数のプランのオプションを持っているなら、対応する価格プランをセットアップできます。 たとえばアプリケーションが2つのプランの選択肢としてオープンソースプランとプロプランを持っているなら、オープンソースプランに対して無料価格プランを、そしてプロプランに対して定額料金プランをセットアップできます。 それぞれの{% data variables.product.prodname_marketplace %}リストには、リストされたすべてのプランに対して年間及び月間の価格がなければなりません。

価格プランの作成方法に関する詳しい情報については「[{% data variables.product.prodname_marketplace %}リストの価格プランの設定](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)」を参照してください。

{% note %}

**ノート:**{% data variables.product.prodname_marketplace %}上でアプリケーションをリストする場合、{% data variables.product.prodname_marketplace %}の外部で有料サービスを提供しているなら無料プランでアプリケーションをリストすることはできません。

{% endnote %}

### 価格プランの種類

**無料プラン**は、完全に無料です。 無料プランをセットアップした場合、アプリケーションを利用するために無料プランを選択したユーザに課金することはできません。 リストでは無料と有料のプランをどちらも作成できます。 未検証の無料アプリケーションは、支払いフローを実装する必要はありません。 GitHubによって検証される無料アプリケーションは、新規の購入とキャンセルのための支払いフローを実装しなければなりませんが、無料トライアル、アップグレード、ダウングレードの支払いフローを実装する必要はありません。 無料のサービスとして{% data variables.product.prodname_marketplace %}にリスト済みのアプリケーションに有料プランを追加する場合は、そのアプリケーションをレビューのために再度サブミットしなければなりません。

**定額料金プラン**は、月単位及び年単位で設定された料金を課金します。

**ユニット単位の価格プラン**は、月単位あるいは年単位で、指定した単位に基づいて設定された料金を課金します。 「ユニット」には好きなもの（たとえばユーザ、シート、あるいは人）を指定できます。

**Marketplace無料トライアル**は、OAuthあるいはGitHubアプリケーションを顧客に対して14日間の無料トライアルを提供します。 [Marketplaceの価格プランをセットアップ](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)する際に、このオプションを選択して定額料金あるいはユニット単位の価格プランに対して無料トライアルを提供できます。

### 無料トライアル

顧客はMarketplaceのリスト上の利用可能な任意の有料プランに対して無料トライアルを開始できますが、1つのMarketplace製品に対して複数の無料トライアルを作成することはできません。

無料トライアルの期間は固定の14日間です。 顧客はトライアル期間の終了の4日前（無料トライアルの11日目）に、プランがアップグレードされるという通知を受け取ります。 顧客は、キャンセルしないかぎり、無料トライアルの終わりにトライアルを行っていたプランに自動的に登録されます。

アプリケーションで無料トライアルを処理する方法の詳細については「[新規の購入と無料トライアル](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/)」を参照してください。

{% note %}

**ノート:** GitHubは、キャンセルされたトライアルのすべてのプライベートな顧客データが、キャンセルイベントの受け付け開始から30日以内に削除されるものと期待します。

{% endnote %}
