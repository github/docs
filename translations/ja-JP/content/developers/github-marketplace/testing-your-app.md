---
title: アプリをテストする
intro: 'リストを{% data variables.product.prodname_marketplace %}にサブミットする前に、APIとwebhookを使ってアプリケーションをテストし、顧客に理想的な体験を提供できるようにすることをGitHubはおすすめします。 Before an onboarding expert approves your app, it must adequately handle the billing flows.'
redirect_from:
  - /apps/marketplace/testing-apps-apis-and-webhooks/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/
  - /marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
versions:
  free-pro-team: '*'
---



### アプリケーションのテスト

You can use a draft {% data variables.product.prodname_marketplace %} listing to simulate each of the billing flows. リストがドラフト状態にあるということは、まだそれが承認のためにサブミットされていないということです。 ドラフトの{% data variables.product.prodname_marketplace %}リストを使って行った購入は、実際の取引には_ならず_、GitHubはクレジットカードへの課金をしません。 For more information, see "[Drafting a listing for your app](/developers/github-marketplace/drafting-a-listing-for-your-app)" and "[Using the {% data variables.product.prodname_marketplace %} API in your app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)."

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

ほとんどの{% data variables.product.prodname_marketplace %} APIエンドポイントに対しては、テストに利用できるハードコーディングされた偽のデータを返すスタブのAPIエンドポイントも提供されています。 スタブのデータを受信するには、ルートに`/stubbed`を含むスタブURL（たとえば`/user/marketplace_purchases/stubbed`）を指定してください。 スタブデータのアプローチをサポートしているエンドポイントのリストは、[{% data variables.product.prodname_marketplace %}エンドポイント](/rest/reference/apps#github-marketplace)を参照してください。

### webhookのテスト

GitHubは、デプロイされたペイロードをテストするためのツールを提供しています。 詳しい情報については「[webhookのテスト](/webhooks/testing/)」を参照してください。
