---
title: アプリケーションのリストのための要件
intro: '{% data variables.product.prodname_marketplace %}上のアプリケーションは、弊社の{% data variables.product.prodname_marketplace %}オンボーディングスペシャリストがリストを承認する前に、このページに記載されている要件概要を満たしていなければなりません。'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/getting-started-with-github-marketplace-listings/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/
  - /marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
versions:
  free-pro-team: '*'
---



レビューのためにアプリケーションをサブミットする前に、「[{% data variables.product.prodname_marketplace %}開発者契約](/articles/github-marketplace-developer-agreement/)」の条項を読んで同意しなければなりません。 {% data variables.product.product_name %}上の[ドラフトリスト](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)内の条項に同意しなければなりません。 アプリケーションをサブミットすると、オンボーディングプロセスに関するさらなる情報と共に{% data variables.product.prodname_marketplace %}オンボーディングスペシャリストの一人から連絡があり、アプリケーションをレビューして以下の要件を満たしていることを確認してくれます。

### ユーザー体験

- {% data variables.product.prodname_github_app %}は、最低でも100個のインストールが必要です。
- {% data variables.product.prodname_oauth_app %}は最低200ユーザが必要です。
- アプリケーションは顧客に価値を提供し、認証以外の方法でプラットフォームと統合されていなければなりません
- アプリケーションケーションは{% data variables.product.prodname_marketplace %}で公開されなければならず、ベータや招待のみでの利用であってはなりません。
- アプリケーションはユーザを{% data variables.product.product_name %}から積極的に離れさせるようにしてはなりません。
- アプリケーションのマーケティング資料は、アプリケーションの動作を正確に表現していなければなりません。
- アプリケーションは、アプリケーションのセットアップと利用の方法を述べたユーザ向けのドキュメンテーションへのリンクを含まなければなりません。
- 顧客がアプリケーションを購入し、GitHubがそのユーザをアプリケーションのインストールURLにリダイレクトしたなら、アプリケーションはすぐにOAuthフローを開始しなければなりません。 詳細については「[新規購入や無料トライアルの取り扱い](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/#step-3-authorization)」を参照してください。

- 顧客はアプリケーションをインストールし、個人及びOrganization双方のアカウント上のリポジトリを選択できなければなりません。 顧客はそれらのアカウントを個別に表示及び管理できなければなりません。

### ブランドとリスト

- GitHubを使うアプリケーションは、「[{% data variables.product.product_name %} ロゴと利用](https://github.com/logos)」ガイドラインに従わなければなりません。
- アプリケーションは、「[{% data variables.product.prodname_marketplace %}リストの説明の作成](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)」にある推奨事項を満たすロゴ、機能カード、スクリーンショット画像を持っていなければなりません。
- リストには、十分に書かれた文法上の誤りがない説明が含まれていなければなりません。 リストの作成のガイダンスとしては、「[{% data variables.product.prodname_marketplace %}リストの説明の作成](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)」を参照してください。

### セキュリティ

アプリケーションは、{% data variables.product.prodname_marketplace %}にリストされる前にセキュリティレビューを経ることになります。 レビューが成功するためには、「[セキュリティレビュープロセス](/marketplace/getting-started/security-review-process/)」にリストされている要件を満たし、セキュリティのベストプラクティスにしたがっていなければなりません。 レビュープロセスに関する情報については、[marketplace@github.com](mailto:marketplace@github.com)までお問い合わせください。

### 支払いのフロー

アプリケーションは、[{% data variables.product.prodname_marketplace %} webhookイベント](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)を使って[支払いフロー](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows)を統合していなければなりません。

#### 無料アプリケーション

{% data reusables.marketplace.free-apps-encouraged %}無料アプリケーションをリストするなら、以下の要件を満たさなければなりません。

- 顧客はアプリケーションの支払い、プロフィール、アカウント設定のセクションで、無料プランがあるのを見ることができなければなりません。
- 顧客がアプリケーションをキャンセルする際には、[プランのキャンセル](/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans/)のためのフローに従わなければなりません。

#### 有料アプリケーション

アプリケーションを有料サービスとして提供するためには、{% data variables.product.prodname_marketplace %}上でアプリケーションをリストする上で以下の要件を満たさなければなりません。

- {% data variables.product.prodname_marketplace %}でアプリケーションを販売するには、GitHubの支払いシステムを使わなければなりません。 アプリケーションは支払いを処理する必要はありませんが、「[{% data variables.product.prodname_marketplace %} 購入イベント](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)」を使って新規の購入、アップグレード、ダウングレード、キャンセル、無料トライアルを管理しなければなりません。 これらのイベントをアプリケーションに統合する方法を学ぶには、「[支払いフロー](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows)」を参照してください。 GitHubの支払いシステムを使えば、顧客はGitHubを離れることなくアプリケーションを購入し、自分の{% data variables.product.product_name %}アカウントにすでに結合されている支払い方法でサービスに対する支払いを行えます。
- アプリケーションは、有料のサブスクリプションの購入について、月次及び年次の支払いをサポートしなければなりません。
- リストは、無料及び有料プランの任意の組み合わせを提供できます。 無料プランはオプションですが、推奨されます。 詳しい情報については「[{% data variables.product.prodname_marketplace %}リストの価格プランの設定](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)」を参照してください。
{% data reusables.marketplace.marketplace-billing-ui-requirements %}
