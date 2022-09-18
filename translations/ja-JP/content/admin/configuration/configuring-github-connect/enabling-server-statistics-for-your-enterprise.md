---
title: 自社でサーバー統計を有効にする
intro: '{% data variables.product.prodname_server_statistics %} を有効にすることで、{% data variables.product.prodname_ghe_server %} からの独自の集計データを分析し、{% data variables.product.company_short %} 製品の改善に役立てることができます。'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics/enabling-server-statistics
topics:
  - Enterprise
shortTitle: Server Statistics
ms.openlocfilehash: badfdb8abfbe468768ef9a32e183f67633915b54
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409004'
---
## {% data variables.product.prodname_server_statistics %}について

{% data variables.product.prodname_server_statistics %}は、{% data variables.product.product_location %} から集計された使用状況データを収集します。これを使用すると、Organization のニーズをより適切に予測し、チームのしくみを理解し、{% data variables.product.prodname_ghe_server %} から得られる価値を確認できます。 

{% data variables.product.prodname_server_statistics %}では、リポジトリ、Issue、pull request、およびその他の機能の特定の集計メトリックのみが収集されます。コード、Issue、コメント、pull request のコンテンツなどの {% data variables.product.prodname_dotcom %} コンテンツは収集されません。 詳しい情報については、「[{% data variables.product.prodname_server_statistics %}について](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics)」を参照してください。

{% data variables.product.prodname_server_statistics %}を有効にすると、{% data variables.product.company_short %}の改善にも役立ちます。 お客様から提供された集計データは、お客様が {% data variables.product.prodname_dotcom %} をどのように使っているかを把握し、より適切な情報に基づいた製品の意思決定を行う助けとなり、最終的にはお客様の利益になります。

## {% data variables.product.prodname_server_statistics %}の有効化

{% data variables.product.prodname_server_statistics %}を有効にする前に、まず {% data variables.product.prodname_ghe_server %} インスタンスを {% data variables.product.prodname_github_connect %} を使って {% data variables.product.prodname_dotcom_the_website %} に接続する必要があります。 詳細については、「[{% data variables.product.prodname_ghe_cloud %} への {% data variables.product.prodname_ghe_server %} の接続](/enterprise-server@3.1/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud)」を参照してください。

{% data variables.product.prodname_server_statistics %} は {% data variables.product.prodname_ghe_server %} からいつでも無効にできます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
4. [GitHub.com でサーバー統計を共有する] でドロップダウン メニューを選び、 **[有効]** または **[無効]** をクリックします。
  ![無効または有効のオプションがある {% data variables.product.prodname_server_statistics %} ドロップダウン メニューのスクリーンショット](/assets/images/help/server-statistics/server-statistics-enable-disable-options.png)
