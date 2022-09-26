---
title: Enterprise でのアクションの使用について
intro: '{% data variables.product.product_name %} には、ほとんどの {% data variables.product.prodname_dotcom %} 作成のアクションが含まれ、{% data variables.product.prodname_dotcom_the_website %} および {% data variables.product.prodname_marketplace %} からの他のアクションへのアクセスを有効にするためのオプションがあります。'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-in-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
shortTitle: About actions in your enterprise
ms.openlocfilehash: 2e18b932548aa7ad9b65c090b6a5418762bcb501
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139009'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## {% data variables.product.product_name %} に対するアクションについて

{% data variables.product.prodname_actions %} ワークフローでは ''_アクション_'' を使用できます。これらは、ジョブを作成してワークフローをカスタマイズするために組み合わせることができる個々のタスクです。 独自のアクションの作成、または {% data variables.product.prodname_dotcom %} コミュニティによって共有されるアクションの使用やカスタマイズができます。

{% data reusables.actions.enterprise-no-internet-actions %} 開発者が {% data variables.product.product_location %} に格納されているアクションを使用するように制限できます。これには、ほとんどの公式な {% data variables.product.company_short %} で作成されたアクションと、開発者が作成するすべてのアクションが含まれます。 また、開発者が業界のリーダーやオープン ソース コミュニティによって作成されたアクションの完全なエコシステムの利点を得られるように、{% data variables.product.prodname_dotcom_the_website %} から他のアクションへのアクセスを構成することもできます。 

{% data variables.product.prodname_dotcom_the_website %} からのすべてのアクションへの自動アクセスを許可することをお勧めします。 {% ifversion ghes %}しかし、{% data variables.product.prodname_dotcom_the_website %} への送信接続を行うには、{% data variables.product.product_name %} が必要です。 これらの接続を許可しない場合、またはエンタープライズで使用されるアクションをより細かく制御する{% else %}場合{% endif %}は、{% data variables.product.prodname_dotcom_the_website %} から特定のアクションを手動で同期することができます。

## Enterprise インスタンスにバンドルされている公式アクション

{% data reusables.actions.actions-bundled-with-ghes %}

バンドルされた公式アクションには、主に次のようなものがあります。
- `actions/checkout`
- `actions/upload-artifact`
- `actions/download-artifact`
- `actions/labeler`
- さまざまな `actions/setup-` アクション

エンタープライズ インスタンスに含まれるすべての公式アクションを確認する場合は、インスタンスの `actions` 組織 (<code>https://<em>HOSTNAME</em>/actions</code>) を参照してください。

これらのアクションを使用するために、{% data variables.product.product_location %} と {% data variables.product.prodname_dotcom_the_website %} の間に接続は必要ありません。

各アクションは `actions` 組織内のリポジトリであり、各アクション リポジトリには、ワークフローでアクションを参照するために使用できる必要なタグ、ブランチ、およびコミット SHA が含まれています。 バンドルされた公式アクションを更新する方法については、「[公式バンドル アクションの最新バージョンの使用](/admin/github-actions/using-the-latest-version-of-the-official-bundled-actions)」を参照してください。

{% note %}

**注:** 
- {% data variables.product.product_name %} でセルフホスト ランナーと合わせてセットアップ アクション (`actions/setup-LANGUAGE` など) を使用するときに、インターネットにアクセスできないランナー上にツール キャッシュを設定する必要がある場合があります。 詳細については、「[インターネットにアクセスできないセルフホスト ランナーにツール キャッシュを設定する](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)」を参照してください。
- {% data variables.product.product_name %} が更新されると、バンドルされたアクションはアップグレード パッケージの既定のバージョンに自動的に置き換えられます。

{% endnote %}

## {% data variables.product.prodname_dotcom_the_website %} でアクションへのアクセスを設定する

{% data reusables.actions.access-actions-on-dotcom %}

推奨されるアプローチは、{% data variables.product.prodname_dotcom_the_website %} からのすべてのアクションへの自動アクセスを有効化することです。 これを行うには、{% data variables.product.prodname_github_connect %} を使用して {% data variables.product.product_name %} と {% data variables.product.prodname_ghe_cloud %} を統合します。 詳細については、「[{% data variables.product.prodname_github_connect %} を使用した {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスの有効化](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)」を参照してください。 

{% ifversion ghes %} {% note %}

**注:** {% data variables.product.prodname_dotcom_the_website %} に対するアクションへのアクセスを構成する前に、{% data variables.product.prodname_actions %} を使用するように {% data variables.product.product_location %} を構成する必要があります。 詳細については、「[GitHub Enterprise Server の {% data variables.product.prodname_actions %} の概要](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)」を参照してください。


{% endnote %} {% endif %}

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

{% data reusables.actions.enterprise-limit-actions-use %}

または、エンタープライズで許可されるアクションをより厳密に制御する場合、あるいは {% data variables.product.prodname_dotcom_the_website %} への送信接続を許可しない場合は、`actions-sync` ツールを使用してアクションを手動でダウンロードしてエンタープライズ インスタンスに同期できます。 詳細については、「[{% data variables.product.prodname_dotcom_the_website %} からアクションを手動で同期する](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)」を参照してください。
