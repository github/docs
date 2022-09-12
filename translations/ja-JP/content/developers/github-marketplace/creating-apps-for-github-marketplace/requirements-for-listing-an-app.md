---
title: アプリケーションのリストのための要件
intro: '{% data variables.product.prodname_marketplace %}上のアプリケーションは、リストを公開する前にこのページに概要がある要件を満たさなければなりません。'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started-with-github-marketplace-listings/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
  - /marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
  - /developers/github-marketplace/requirements-for-listing-an-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Listing requirements
ms.openlocfilehash: 58112d935a77119325dab4ad72c87561d0c00e47
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089775'
---
<!--UI-LINK: Displayed as a link on the https://github.com/marketplace/new page.-->

{% data variables.product.prodname_marketplace %}上にアプリケーションをリストするための要件は、提供するのが無料なのか有料アプリケーションなのかによって変わります。

## すべての{% data variables.product.prodname_marketplace %}リストの要件

{% data variables.product.prodname_marketplace %}上のすべてのリストは、{% data variables.product.product_name %}コミュニティに価値を提供するツールのためのものでなければなりません。 公開用のリストを提出する場合は、「[{% data variables.product.prodname_marketplace %} 開発者同意書](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement)」の条項を読み、同意する必要があります。

### すべてのアプリケーションに対するユーザ体験の要件

すべてのリストは、無料のアプリケーションのためのものか、有料アプリケーションのためのものであるかにかかわらず、以下の要件を満たさなければなりません。

- リストはユーザを積極的に{% data variables.product.product_name %}から離れさせようとしてはなりません。
- リストは、パブリッシャーの有効な連絡先の情報を含んでいなければなりません。
- リストには、アプリケーションの適切な説明がなければなりません。
- リストは価格プランを指定しなければなりません。
- アプリケーションは顧客に価値を提供し、認証以外の方法でプラットフォームと統合されていなければなりません
- アプリケーションケーションは{% data variables.product.prodname_marketplace %}で公開されなければならず、ベータや招待のみでの利用であってはなりません。
- アプリケーションは、{% data variables.product.prodname_marketplace %} APIを使ってプランの変更やキャンセルがあったことをパブリッシャーに知らせるために、webhookイベントがセットアップされていなければなりません。 詳細については、「[アプリ内での {% data variables.product.prodname_marketplace %} API の使用](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)」を参照してください。

適切なカスタマー エクスペリエンスの提供については、「[アプリケーションの顧客体験のベスト プラクティス](/developers/github-marketplace/customer-experience-best-practices-for-apps)」を参照してください。

### すべてのアプリケーションに対するブランドとリストの要件

- GitHubのログを使用するアプリケーションは、{% data variables.product.company_short %}ガイドラインに従わなければなりません。 詳細については、「[{% data variables.product.company_short %} のロゴと使用](https://github.com/logos)」を参照してください。
- アプリには、「[{% data variables.product.prodname_marketplace %} のリストの説明を書く](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)」に記載されている推奨事項を満たすロゴ、機能カード、スクリーンショット画像が必要です。
- リストには、十分に書かれた文法上の誤りがない説明が含まれていなければなりません。 リストを作成する際のガイダンスについては、「[{% data variables.product.prodname_marketplace %}リストの説明を書く](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)」を参照してください。

顧客を保護するために、セキュリティのベストプラクティスにも従うことをおすすめします。 詳細については、「[アプリケーションのセキュリティ ベスト プラクティス](/developers/github-marketplace/security-best-practices-for-apps)」を参照してください。

## 無料アプリケーションに関する留意点

{% data reusables.marketplace.free-apps-encouraged %} 

## 有料アプリケーションの要件

{% data variables.product.prodname_marketplace %}でアプリケーションの有料プランを公開するには、そのアプリケーションが検証済みパブリッシャーであるOrganizationの所有である必要があります。 アプリの検証プロセスまたは所有権の譲渡の詳細については、「[組織のパブリッシャー検証プロセスを申請する](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)」を参照してください。

アプリケーションが既に公開されており、あなたが検証済みパブリッシャーである場合は、価格プランエディタから新しく有料プランを公開できます。 詳細については、「[リストに対する価格プランの設定](/developers/github-marketplace/setting-pricing-plans-for-your-listing)」を参照してください。

有料アプリケーション (または有料プランを提供するアプリケーション) を公開するには、以下の要件も満たす必要があります。

- {% data variables.product.prodname_github_apps %}は最低100件のインストールが必要です。
- {% data variables.product.prodname_oauth_apps %}は最低200ユーザが必要です。
- すべての有料アプリケーションは、新規購入、アップグレード、ダウングレード、キャンセル、無料トライアルの{% data variables.product.prodname_marketplace %}購入イベントを処理できなければなりません。 詳細については、「[有料アプリの課金に関する要件](#billing-requirements-for-paid-apps)」を参照してください。

アプリケーションを{% data variables.product.prodname_marketplace %}上で公開する準備ができたら、アプリケーション掲載のために検証をリクエストする必要があります。

{% note %}

**注:** {% data reusables.marketplace.app-transfer-to-org-for-verification %} アプリを組織に譲渡する方法については、「[公開のためのリストのサブミット](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)」を参照してください。

{% endnote %}

## 有料アプリケーションの支払い要件

アプリケーションは支払いを処理する必要はありませんが、{% data variables.product.prodname_marketplace %}購入イベントを使って新規の購入、アップグレード、ダウングレード、キャンセル、無料トライアルを管理できなければなりません。 これらのイベントをアプリに統合する方法については、「[アプリケーション内での {% data variables.product.prodname_marketplace %} API の使用](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)」を参照してください。

GitHubの支払いAPIを使えば、顧客はGitHubを離れることなくアプリケーションを購入し、自分の{% data variables.product.product_location %}のアカウントにすでに結合されている支払い方法でサービスに対する支払いを行えます。

- アプリケーションは、有料のサブスクリプションの購入について、月次及び年次の支払いをサポートしなければなりません。
- リストは、無料及び有料プランの任意の組み合わせを提供できます。 無料プランはオプションですが、推奨されます。 詳細については、「[{% data variables.product.prodname_marketplace %} リストの価格プランの設定](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)」を参照してください。
