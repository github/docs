---
title: アプリケーションのテスト
intro: 'リストを{% data variables.product.prodname_marketplace %}にサブミットする前に、APIとwebhookを使ってアプリケーションをテストし、顧客に理想的な体験を提供できるようにすることをGitHubはおすすめします。 オンボーディングの専門家の検証前に、アプリケーションは支払いフローを適切に処理しなければなりません。'
redirect_from:
  - /apps/marketplace/testing-apps-apis-and-webhooks
  - /apps/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
  - /marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
  - /developers/github-marketplace/testing-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: c542f5bd46e4555a4459c669e2f9d75e29b63ffe
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145112493'
---
## アプリケーションのテスト

ドラフトの{% data variables.product.prodname_marketplace %}リストを使って、それぞれの支払いフローをシミュレートできます。 リストがドラフト状態にあるということは、まだそれが承認のためにサブミットされていないということです。 ドラフトの {% data variables.product.prodname_marketplace %} リストを使用して購入しても、実際のトランザクションは作成 _されず_、GitHub がクレジット カードに請求することはありません。 シミュレートできるのはドラフトのリストに掲載されているプランの購入のみであり、ドラフトのプラン購入はシミュレートできません。 詳細については、「[アプリケーションのリストのドラフト](/developers/github-marketplace/drafting-a-listing-for-your-app)」と「[アプリ内での {% data variables.product.prodname_marketplace %} API の使用](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)」を参照してください。

### 変更のテストのために開発アプリケーションをドラフトリストと使用する

{% data variables.product.prodname_marketplace %}リストは、1つのアプリケーションの登録とのみ関連づけることができ、それぞれのアプリケーションは自身の{% data variables.product.prodname_marketplace %}リストにのみアクセスできます。 そのため、運用アプリと同じ設定で別個の開発アプリを設定し、テストに使用できる _ドラフト_ の{% data variables.product.prodname_marketplace %} リストを作成することをお勧めします。 ドラフトの{% data variables.product.prodname_marketplace %}リストを使えば、プロダクションのアプリケーションのアクティブなユーザに影響することなく変更をテストできます。 開発の{% data variables.product.prodname_marketplace %}リストはテストにのみ使われるので、サブミットする必要はありません。

ドラフトの{% data variables.product.prodname_marketplace %}リストは公開アプリケーションに対してのみ作成できるので、開発アプリケーションは公開しなければなりません。 公開アプリケーションは、アプリケーションのURLを共有しないかぎり、公開された{% data variables.product.prodname_marketplace %}リスト外で見つかることはありません。 ドラフト状態のMarketplaceリストは、アプリケーションの所有者にしか見えません。

ドラフトリストと共に開発アプリケーションができたら、{% data variables.product.prodname_marketplace %} APIやwebhookと統合しながらそれを使ってアプリケーションの変更をテストできます。

{% warning %}

{% data variables.product.prodname_marketplace %}で公開されているアプリケーションでは、購入のテストを行わないでください。

{% endwarning %}

### Marketplaceの購入イベントのシミュレーション

テストのシナリオでは、無料トライアルを提供するリストプランをセットアップし、無料と有料のサブスクリプション間の切り替えが必要になるかもしれません。 ダウングレードやキャンセルは、次回の請求期間までは有効にならないため、GitHub は開発者のみの機能として、`changed` および `cancelled` のプラン アクションを強制的にすぐに有効にする [保留中の変更の適用] 機能を提供しています。 https://github.com/settings/billing#pending-cycle: で、**ドラフト** Marketplace のリストがあるアプリの _[保留中の変更の適用]_ にアクセスできます。

![保留中の変更の適用](/assets/images/github-apps/github-apps-apply-pending-changes.png)

## API のテスト

ほとんどの{% data variables.product.prodname_marketplace %} APIエンドポイントに対しては、テストに利用できるハードコーディングされた偽のデータを返すスタブのAPIエンドポイントも提供されています。 スタブ データを受信するには、ルートに `/stubbed` を含むスタブ URL を指定する必要があります (例: `/user/marketplace_purchases/stubbed`)。 このスタブ データのアプローチをサポートするエンドポイントのリストについては、[{% data variables.product.prodname_marketplace %} エンドポイント](/rest/reference/apps#github-marketplace)に関するページを参照してください。

## webhookのテスト

GitHubは、デプロイされたペイロードをテストするためのツールを提供しています。 詳細については、「[Webhook のテスト](/webhooks/testing/)」を参照してください。
