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
versions:
  free-pro-team: '*'
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

上記のすべてのアプリケーションに関する要件に加え、{% data variables.product.prodname_marketplace %}上で有料サービスとして提供するアプリケーションは、以下の要件も満たさなければなりません。

- {% data variables.product.prodname_github_app %}は、最低でも100個のインストールが必要です。
- {% data variables.product.prodname_oauth_app %}は最低200ユーザが必要です。
- すべての有料アプリケーションは、新規購入、アップグレード、ダウングレード、キャンセル、無料トライアルの{% data variables.product.prodname_marketplace %}購入イベントを処理できなければなりません。 詳しい情報については、以下の「[有料アプリケーションの支払い要件](#billing-requirements-for-paid-apps)」を参照してください。
- 公開するOrganizationは、検証済みドメインを持っていなければならず、2要素認証を有効化しなければなりません。 詳しい情報については [Organization で 2 要素認証を要求する](/github/setting-up-and-managing-organizations-and-teams/requiring-two-factor-authentication-in-your-organization)を参照してください。

アプリケーションを{% data variables.product.prodname_marketplace %}上で公開する準備ができたら、リストのための検証をリクエストしなければなりません。

{% note %}

検証プロセスは、Organizationに対して開かれています。 {% data reusables.marketplace.app-transfer-to-org-for-verification %} これを行う方法については「[公開のためのリストのサブミット](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)」を参照してください。

{% endnote %}

### 有料アプリケーションの支払い要件

アプリケーションは支払いを処理する必要はありませんが、{% data variables.product.prodname_marketplace %}購入イベントを使って新規の購入、アップグレード、ダウングレード、キャンセル、無料トライアルを管理できなければなりません。 これらのイベントをアプリケーションに統合する方法については、「[アプリケーションでの{% data variables.product.prodname_marketplace %} APIの利用](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)」を参照してください。

GitHubの支払いAPIを使えば、顧客はGitHubを離れることなくアプリケーションを購入し、自分の{% data variables.product.product_name %}アカウントにすでに結合されている支払い方法でサービスに対する支払いを行えます。

- アプリケーションは、有料のサブスクリプションの購入について、月次及び年次の支払いをサポートしなければなりません。
- リストは、無料及び有料プランの任意の組み合わせを提供できます。 無料プランはオプションですが、推奨されます。 詳しい情報については「[{% data variables.product.prodname_marketplace %}リストの価格プランの設定](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)」を参照してください。
