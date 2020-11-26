---
title: アプリをテストする
intro: 'リストを{% data variables.product.prodname_marketplace %}にサブミットする前に、APIとwebhookを使ってアプリケーションをテストし、顧客に理想的な体験を提供できるようにすることをGitHubはおすすめします。 {% data variables.product.prodname_marketplace %}オンボーディングチームによる承認の前に、アプリケーションは[支払いフロー](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows)を十分に処理できなければなりません。'
redirect_from:
  - /apps/marketplace/testing-apps-apis-and-webhooks/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/
  - /marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
versions:
  free-pro-team: '*'
---



### アプリケーションのテスト

[ドラフトの{% data variables.product.prodname_marketplace %}リスト](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)を使って、各[支払いフロー](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows)をシミュレートできます。 リストがドラフト状態にあるということは、まだそれが承認のためにサブミットされていないということです。 ドラフトの{% data variables.product.prodname_marketplace %}リストを使って行った購入は、実際の取引には_ならず_、GitHubはクレジットカードへの課金をしません。

#### 変更のテストのために開発アプリケーションをドラフトリストと使用する

{% data variables.product.prodname_marketplace %}リストは、1つのアプリケーションの登録とのみ関連づけることができ、それぞれのアプリケーションは自身の{% data variables.product.prodname_marketplace %}リストにのみアクセスできます。 そのため、プロダクションのアプリケーションと同じ設定で別個の開発アプリケーションを設定し、テストに使用できる_ドラフト_の{% data variables.product.prodname_marketplace %}リストを作成することをおすすめします。 ドラフトの{% data variables.product.prodname_marketplace %}リストを使えば、プロダクションのアプリケーションのアクティブなユーザに影響することなく変更をテストできます。 開発の{% data variables.product.prodname_marketplace %}リストはテストにのみ使われるので、サブミットする必要はありません。

ドラフトの{% data variables.product.prodname_marketplace %}リストは公開アプリケーションに対してのみ作成できるので、開発アプリケーションは公開しなければなりません。 公開アプリケーションは、アプリケーションのURLを共有しないかぎり、公開された{% data variables.product.prodname_marketplace %}リスト外で見つかることはありません。 ドラフト状態のMarketplaceリストは、アプリケーションの所有者にしか見えません。

ドラフトリストと共に開発アプリケーションができたら、{% data variables.product.prodname_marketplace %} APIやwebhookと統合しながらそれを使ってアプリケーションの変更をテストできます。

{% warning %}

{% data variables.product.prodname_marketplace %}で公開されているアプリケーションでは、購入のテストを行わないでください。

{% endwarning %}

#### Marketplaceの購入イベントのシミュレーション

テストのシナリオでは、無料トライアルを提供するリストプランをセットアップし、無料と有料のサブスクリプション間の切り替えが必要になるかもしれません。 ダウングレードやキャンセルは、次回の支払いサイクルまでは有効にならないので、GitHubは開発者のみの機能として、`changed`及び`cancelled`のプランアクションを強制的にすぐに有効にする「保留中の変更の適用」機能を提供しています。 _ドラフト_Marketplaceリストのアプリケーションのための**保留中の変更の適用**には、https://github.com/settings/billing#pending-cycleでアクセスできます。

![保留中の変更の適用](/assets/images/github-apps/github-apps-apply-pending-changes.png)

### APIのテスト

ほとんどの{% data variables.product.prodname_marketplace %} APIエンドポイントに対しては、テストに利用できるハードコーディングされた偽のデータを返すスタブのAPIエンドポイントも提供されています。 スタブのデータを受信するには、ルートに`/stubbed`を含むスタブURL（たとえば`/user/marketplace_purchases/stubbed`）を指定してください。 スタブデータのアプローチをサポートしているエンドポイントのリストは、[{% data variables.product.prodname_marketplace %}エンドポイント](/v3/apps/marketplace/#github-marketplace)を参照してください。

### webhookのテスト

GitHubは、デプロイされたペイロードをテストするためのツールを提供しています。 詳しい情報については「[webhookのテスト](/webhooks/testing/)」を参照してください。
