---
title: GitHub Marketplaceについて
intro: 'アプリケーションやアクションを全{% data variables.product.product_name %}ユーザと共有できる{% data variables.product.prodname_marketplace %}について学びましょう。'
redirect_from:
  - /apps/marketplace/getting-started
  - /marketplace/getting-started
  - /developers/github-marketplace/about-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: 5a722d35fb74607b9200a1fe30d804df44330cea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145089728'
---
[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) は、{% data variables.product.prodname_dotcom %} ワークフローの拡張および改善を望んでいる開発者とあなたをつなぎます。 {% data variables.product.prodname_marketplace %}で利用する、開発者のための無料及び有料のツールをリストできます。 {% data variables.product.prodname_marketplace %}は、開発者に{% data variables.product.prodname_actions %}とアプリケーションという2種類のツールを提供します。それぞれのツールは、{% data variables.product.prodname_marketplace %}への追加に際して異なるステップを必要とします。

## GitHub のアクション

{% data reusables.actions.actions-not-verified %}

{% data variables.product.prodname_marketplace %} で {% data variables.product.prodname_actions %} の公開の詳細については、[GitHub Marketplace でのアクションの公開](/actions/creating-actions/publishing-actions-in-github-marketplace)に関するページを参照してください。

## アプリケーション

誰でも他のユーザと{% data variables.product.prodname_marketplace %}で無料でアプリケーションを共有できますが、販売できるのはOrganizationが所有するアプリケーションのみです。 

アプリケーションの有料プランを公開し、Marketplaceバッジを表示するには、パブリッシャー検証プロセスを完了する必要があります。 詳細については、「[Organization のパブリッシャー検証プロセスを申請する](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)」または「[アプリケーションのリストのための要件](/developers/github-marketplace/requirements-for-listing-an-app)」を参照してください。

Organizationが要件を満たすと、Organizationでオーナー権限を持つユーザは、権限が及ぶあらゆるアプリケーションで有料プランを公開できます。 有料プランのある各アプリケーションについては、支払いを可能にするため、財務オンボーディングプロセスも実施します。

Freeプランのアプリケーションを公開するために必要なことは、アプリケーション掲載の一般的な要件を満たすだけです。 詳細については、「[すべての GitHub Marketplace リストの要件](/developers/github-marketplace/requirements-for-listing-an-app#requirements-for-all-github-marketplace-listings)」を参照してください。

### アプリケーションは初めてですか?

{% data variables.product.prodname_marketplace %}のアプリケーション作成に関心があり、{% data variables.product.prodname_github_apps %}や{% data variables.product.prodname_oauth_apps %}に慣れていない場合は、「[{% data variables.product.prodname_github_apps %} を構築する](/developers/apps/building-github-apps)」や「[{% data variables.product.prodname_oauth_apps %} を構築する](/developers/apps/building-oauth-apps)」を参照してください。

### {% data variables.product.prodname_github_apps %} vs. {% data variables.product.prodname_oauth_apps %}

{% data reusables.marketplace.github_apps_preferred %}、{% data variables.product.prodname_marketplace %}ではOAuthと{% data variables.product.prodname_github_apps %}をどちらもリストできます。 詳細については、「[{% data variables.product.prodname_github_apps %} と {% data variables.product.prodname_oauth_apps %} の違い](/apps/differences-between-apps/)」および [{% data variables.product.prodname_oauth_apps %} の {% data variables.product.prodname_github_apps %} への移行](/apps/migrating-oauth-apps-to-github-apps/)に関するページを参照してください。

## {% data variables.product.prodname_marketplace %} にアプリケーションを公開する手順の要約

アプリケーションを作成したら、{% data variables.product.prodname_marketplace %}に公開して他のユーザと共有できます。 その手順を要約すると以下の通りです。

1. 他のリポジトリで期待通りに動作するよう、またベストプラクティスのガイドラインに沿うよう、アプリケーションをよく確認します。 詳細については、「[アプリケーションのセキュリティ ベスト プラクティス](/developers/github-marketplace/security-best-practices-for-apps)」と「[アプリケーションのリストのための要件](/developers/github-marketplace/requirements-for-listing-an-app#best-practice-for-customer-experience)」を参照してください。

1. ユーザの支払いリクエストを追跡するため、アプリケーションにwebhookイベントを追加します。 {% data variables.product.prodname_marketplace %} API、webhook イベント、課金要求の詳細については、「[アプリケーション内での {% data variables.product.prodname_marketplace %} API の使用](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)」を参照してください。

1. ドラフトの{% data variables.product.prodname_marketplace %}リストを作成します。 詳細については、「[アプリケーションのリストのドラフト](/developers/github-marketplace/drafting-a-listing-for-your-app)」を参照してください。

1. 価格プランを追加します。 詳細については、「[リストに対する価格プランの設定](/developers/github-marketplace/setting-pricing-plans-for-your-listing)」を参照してください。

1. 「[{% data variables.product.prodname_marketplace %} 開発者同意書](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement)」の条項を読んで同意します。

1. {% data variables.product.prodname_marketplace %} に公開するリストをサブミットします。 詳細については、「[公開のためのリストのサブミット](/developers/github-marketplace/submitting-your-listing-for-publication)」を参照してください。

## アプリケーションの実績を確認する

掲載されているアプリケーションのメトリクスや取引情報にアクセスできます。 詳細については、次を参照してください。

- 「[リストのメトリクスの参照](/developers/github-marketplace/viewing-metrics-for-your-listing)」
- 「[リストの取引の表示](/developers/github-marketplace/viewing-transactions-for-your-listing)」

## サポートへの連絡 

{% data variables.product.prodname_marketplace %}に関する質問がある場合は、{% data variables.contact.contact_support %}に直接お問い合わせください。
