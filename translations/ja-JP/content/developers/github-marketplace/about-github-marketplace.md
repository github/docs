---
title: GitHub Marketplaceについて
intro: '{% data variables.product.prodname_marketplace %}に参加する前に、アプリケーションをレビューに備えるための基本を学んでください。'
redirect_from:
  - /apps/marketplace/getting-started/
  - /marketplace/getting-started
versions:
  free-pro-team: '*'
---

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace)は、{% data variables.product.prodname_dotcom %}のワークフローを拡張し、改善したい開発者とあなたをつなぎます。 {% data variables.product.prodname_marketplace %}で利用する、開発者のための無料及び有料のツールをリストできます。 {% data variables.product.prodname_marketplace %}は、開発者に{% data variables.product.prodname_actions %}とアプリケーションという2種類のツールを提供します。それぞれのツールは、{% data variables.product.prodname_marketplace %}への追加に際して異なるステップを必要とします。

### GitHub Actions

{% data reusables.actions.actions-not-verified %}

{% data variables.product.prodname_marketplace %}での{% data variables.product.prodname_actions %}の公開について学ぶには、「[GitHub Marketplaceでのactionsの公開](/actions/creating-actions/publishing-actions-in-github-marketplace)」を参照してください。

### アプリケーション

{% data variables.product.prodname_marketplace %}において、検証済み及び未検証のアプリケーションをリストできます。 未検証のアプリケーションは、検証済みのアプリケーションに{% data variables.product.prodname_dotcom %}が求めるセキュリティ、テスト、検証のサイクルを通っていません。

検証済みのアプリケーションは、{% data variables.product.prodname_marketplace %}で緑のバッジが付きます。 未検証のアプリケーションは、リストの隣に灰色のバッジが付き、無料のアプリケーションとしてのみ利用できます。

![検証済みの緑と未検証の灰色のバッジ](/assets/images/marketplace/marketplace_verified_badges.png)

{% data variables.product.prodname_marketplace %}のアプリケーションの作成に関心があるものの、{% data variables.product.prodname_github_apps %}や{% data variables.product.prodname_oauth_app %}については初心者なら、「[アプリケーションの構築](/apps/)」を参照してください。

{% data reusables.marketplace.github_apps_preferred %}、{% data variables.product.prodname_marketplace %}ではOAuthと{% data variables.product.prodname_github_app %}をどちらもリストできます。 詳細については「[GitHubとOAuthのアプリケーションの違い](/apps/differences-between-apps/)」を参照してください。 OAuthから{% data variables.product.prodname_github_apps %}への切り替えについてさらに学ぶには、[OAuth Appsから{% data variables.product.prodname_github_app %}への移行](/apps/migrating-oauth-apps-to-github-apps/)を参照してください。

{% data variables.product.prodname_marketplace %}に関する質問がある場合は、{% data variables.contact.contact_support %}に直接お問い合わせください。

#### 未検証のアプリケーション

未検証のアプリケーションは、「[{% data variables.product.prodname_marketplace %}でのアプリケーションのリストの要件](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)」を満たしていたり、「[セキュリティレビューのプロセス](/marketplace/getting-started/security-review-process/)」を通る必要はありません。

{% data reusables.marketplace.unverified-apps %} 有料プランを公開すると、未検証のアプリケーションはサブミットできなくなります。 未検証のアプリケーションを公開する前には、有料プランを削除するか、有料プランをドラフトモードにしておかなければなりません。

{% data variables.product.prodname_marketplace %}で未検証のアプリケションをリストするには、「[{% data variables.product.prodname_marketplace %}上でリスト](/marketplace/listing-on-github-marketplace/)」を作成し、それを未検証のリストとしてサブミットするだけです。

{% data reusables.marketplace.launch-with-free %}

#### 検証済みアプリケーション

すでにアプリケーションを構築済みで、{% data variables.product.prodname_marketplace %}に検証済みのリストをサブミットしたい場合には、以下から始めてください。

1. [{% data variables.product.prodname_marketplace %}を始める](/marketplace/getting-started/)<br/>要件、ガイドライン、アプリケーションのサブミットのプロセスについて学んでください。

1. [{% data variables.product.prodname_marketplace %} APIとのインテグレーション](/marketplace/integrating-with-the-github-marketplace-api/)<br/>アプリケーションを{% data variables.product.prodname_marketplace %}でリストできるようにするには、{% data variables.product.prodname_marketplace %} APIとwebhookイベントを使って支払いフローをインテグレーションしなければなりません。

1. [{% data variables.product.prodname_marketplace %}でのリスト](/marketplace/listing-on-github-marketplace/)<br/>ドラフトの{% data variables.product.prodname_marketplace %}のリストを作成し、webhookを設定し、価格プランをセットアップします。

1. [アプリケーションの販売](/marketplace/selling-your-app/)<br/>価格プラン、支払いサイクル、アプリケーションに対する{% data variables.product.prodname_dotcom %}カラの支払いの受け取り方を学んでください。

1. [{% data variables.product.prodname_marketplace %}のインサイト](/marketplace/github-marketplace-insights/)<br/>{% data variables.product.prodname_marketplace %}でのアプリケーションのパフォーマンスを見てください。 {% data variables.product.prodname_dotcom %}が収集したメトリクスを使ってマーケティングキャンペーンを導き、{% data variables.product.prodname_marketplace %}で成功してください。

1. [{% data variables.product.prodname_marketplace %}のトランザクション](/marketplace/github-marketplace-transactions/)<br/>{% data variables.product.prodname_marketplace %}のリストからトランザクションデータをダウンロードして見てください。

### アプリケーションのレビュー

弊社は、{% data variables.product.prodname_marketplace %}から提供されているアプリケーションが安全であり、十分テストされていることを確実にしたいと考えています。 {% data variables.product.prodname_marketplace %}のオンボーディングスペシャリストがアプリケーションをレビューし、すべての要件を満たしていることを確認します。 アプリケーションをサブミットする前に、以下の記事のガイドラインに従ってください。


* [{% data variables.product.prodname_marketplace %}でのアプリケーションのリストに対する要件](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)
* [セキュリティレビュープロセス](/marketplace/getting-started/security-review-process/)
