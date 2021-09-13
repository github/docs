---
title: アプリケーションのリストのための要件
intro: '{% data variables.product.prodname_marketplace %}上のアプリケーションは、リストを公開する前にこのページに概要がある要件を満たさなければなりません。'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/getting-started-with-github-marketplace-listings/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/
  - /marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
  - /developers/github-marketplace/requirements-for-listing-an-app
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---

<!--UI-LINK: Displayed as a link on the https://github.com/marketplace/new page.-->

{% data variables.product.prodname_marketplace %}上にアプリケーションをリストするための要件は、提供するのが無料なのか有料アプリケーションなのかによって変わります。

### すべての{% data variables.product.prodname_marketplace %}リストの要件

{% data variables.product.prodname_marketplace %}上のすべてのリストは、{% data variables.product.product_name %}コミュニティに価値を提供するツールのためのものでなければなりません。 公開のためにリストをサブミットする際には、[{% data variables.product.prodname_marketplace %}開発者契約](/articles/github-marketplace-developer-agreement/)の条項を読んで同意しなければなりません。

#### すべてのアプリケーションに対するユーザ体験の要件

すべてのリストは、無料のアプリケーションのためのものか、有料アプリケーションのためのものであるかにかかわらず、以下の要件を満たさなければなりません。

- リストはユーザを積極的に{% data variables.product.product_name %}から離れさせようとしてはなりません。
- リストは、パブリッシャーの有効な連絡先の情報を含んでいなければなりません。
- リストには、アプリケーションの適切な説明がなければなりません。
- リストは価格プランを指定しなければなりません。
- アプリケーションは顧客に価値を提供し、認証以外の方法でプラットフォームと統合されていなければなりません
- アプリケーションケーションは{% data variables.product.prodname_marketplace %}で公開されなければならず、ベータや招待のみでの利用であってはなりません。
- アプリケーションは、{% data variables.product.prodname_marketplace %} APIを使ってプランの変更やキャンセルがあったことをパブリッシャーに知らせるために、webhookイベントがセットアップされていなければなりません。 詳しい情報については「[アプリケーションでの{% data variables.product.prodname_marketplace %} APIの利用](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)」を参照してください。

優れた顧客体験を提供することに関する詳細な情報については、「[アプリケーションの顧客体験のベストプラクティス](/developers/github-marketplace/customer-experience-best-practices-for-apps)」を参照してください。

#### すべてのアプリケーションに対するブランドとリストの要件

- GitHubのログを使用するアプリケーションは、{% data variables.product.company_short %}ガイドラインに従わなければなりません。 詳しい情報については「[{% data variables.product.company_short %}ロゴと利用](https://github.com/logos)」を参照してください。
- アプリケーションは、「[{% data variables.product.prodname_marketplace %}リストの説明の作成](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)」にある推奨事項を満たすロゴ、機能カード、スクリーンショット画像を持っていなければなりません。
- リストには、十分に書かれた文法上の誤りがない説明が含まれていなければなりません。 リストの作成のガイダンスとしては、「[{% data variables.product.prodname_marketplace %}リストの説明の作成](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)」を参照してください。

顧客を保護するために、セキュリティのベストプラクティスにも従うことをおすすめします。 詳しい情報については「[アプリケーションのセキュリティのベストプラクティス](/developers/github-marketplace/security-best-practices-for-apps)」を参照してください。

### 無料アプリケーションに関する留意点

{% data reusables.marketplace.free-apps-encouraged %}

### 有料アプリケーションの要件

To publish a paid plan for your app on {% data variables.product.prodname_marketplace %}, your app must be owned by an organization that is a verified publisher. For more information about the verification process or transferring ownership of your app, see "[Applying for publisher verification for your organization](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)."

If your app is already published and you're a verified publisher, then you can publish a new paid plan from the pricing plan editor. 詳しい情報については、「[リストに対する価格プランの設定](/developers/github-marketplace/setting-pricing-plans-for-your-listing)」を参照してください。

To publish a paid app (or an app that offers a paid plan), you must also meet the following requirements:

- {% data variables.product.prodname_github_app %}は、最低でも100個のインストールが必要です。
- {% data variables.product.prodname_oauth_app %}は最低200ユーザが必要です。
- すべての有料アプリケーションは、新規購入、アップグレード、ダウングレード、キャンセル、無料トライアルの{% data variables.product.prodname_marketplace %}購入イベントを処理できなければなりません。 詳しい情報については、以下の「[有料アプリケーションの支払い要件](#billing-requirements-for-paid-apps)」を参照してください。

When you are ready to publish the app on {% data variables.product.prodname_marketplace %} you must request verification for the app listing.

{% note %}

**Note:** {% data reusables.marketplace.app-transfer-to-org-for-verification %} For information on how to transfer an app to an organization, see: "[Submitting your listing for publication](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)."

{% endnote %}

### 有料アプリケーションの支払い要件

アプリケーションは支払いを処理する必要はありませんが、{% data variables.product.prodname_marketplace %}購入イベントを使って新規の購入、アップグレード、ダウングレード、キャンセル、無料トライアルを管理できなければなりません。 これらのイベントをアプリケーションに統合する方法については、「[アプリケーションでの{% data variables.product.prodname_marketplace %} APIの利用](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)」を参照してください。

GitHubの支払いAPIを使えば、顧客はGitHubを離れることなくアプリケーションを購入し、自分の{% data variables.product.product_name %}アカウントにすでに結合されている支払い方法でサービスに対する支払いを行えます。

- アプリケーションは、有料のサブスクリプションの購入について、月次及び年次の支払いをサポートしなければなりません。
- リストは、無料及び有料プランの任意の組み合わせを提供できます。 無料プランはオプションですが、推奨されます。 詳しい情報については「[{% data variables.product.prodname_marketplace %}リストの価格プランの設定](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)」を参照してください。
