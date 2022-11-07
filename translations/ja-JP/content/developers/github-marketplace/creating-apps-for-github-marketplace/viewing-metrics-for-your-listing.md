---
title: リストのメトリクスの参照
intro: '{% data variables.product.prodname_marketplace %} Insightsのページは、{% data variables.product.prodname_github_app %}のメトリクスを表示します。 このメトリクスを使って{% data variables.product.prodname_github_app %}のパフォーマンスを追跡し、価格、プラン、無料トライアル、マーケティングキャンペーンの効果の可視化の方法に関する判断を、より多くの情報に基づいて行えます。'
redirect_from:
  - /apps/marketplace/managing-github-marketplace-listings/viewing-performance-metrics-for-a-github-marketplace-listing
  - /apps/marketplace/viewing-performance-metrics-for-a-github-marketplace-listing
  - /apps/marketplace/github-marketplace-insights
  - /marketplace/github-marketplace-insights
  - /developers/github-marketplace/viewing-metrics-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: View listing metrics
ms.openlocfilehash: 92fde52b0edbc7c11ac22d641bc4d9c4bd02709f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145089751'
---
過去の日（24時間）、週、月、あるいは{% data variables.product.prodname_github_app %}がリストされた期間全体に対するメトリクスを見ることができます。

{% note %}

**注:** データの集計には時間がかかるので、表示される日付には若干の遅れが生じます。 期間を選択すると、ページの上部にそのメトリクスの正確な日付が表示されます。

{% endnote %}

## パフォーマンス メトリック

Insightsページには、選択された期間に対する以下のパフォーマンスメトリクスが表示されます。

* **Subscription value (サブスクリプション値):** サブスクリプションで可能な合計収入 (米ドル)。 この値は、プランや無料トライアルがまったくキャンセルされず、すべてのクレジット取引が成功した場合に可能な収入を示します。 subscription valueには、選択された期間内に無料トライアルで始まったプランの全額が、仮にその期間に金銭取引がなかったとしても含まれます。 subscription valueには、選択された期間内にアップグレードされたプランの全額も含まれますが、日割り計算の文は含まれません。 個々のトランザクションの表示とダウンロードについては、[GitHub Marketplace トランザクション](/marketplace/github-marketplace-transactions/)に関するページを参照してください。
* **Visitors (訪問者):** GitHub アプリのリスト内のページを見た人数。 この数字には、ログインした訪問者とログアウトした訪問者がどちらも含まれます。
* **Pageviews (ページビュー):** GitHub アプリのリスト内のページが閲覧された回数。 1 人の訪問者が複数のページ ビューを生成する可能性があります。

{% note %}

**注:** サブスクリプション値の見積もりは、この期間に処理されたトランザクション数よりもはるかに高くなることがあります。 

{% endnote %}

### コンバージョンパフォーマンス

* **Unique visitors to landing page (ランディング ページの一意の訪問者数):** GitHub アプリのランディング ページを閲覧した人数。
* **Unique visitors to checkout page (チェックアウト ページの一意の訪問者数):** GitHub アプリのチェックアウト ページのいずれかを閲覧した人数。
* **Checkout page to new subscriptions (チェックアウト ページから新しいサブスクリプション):** 有料サブスクリプション、無料試用版、無料サブスクリプションの合計数。 それぞれの種類のサブスクリプションの特定の数値については「合計サブスクリプションの内訳」を参照してください。

![Marketplace の分析情報](/assets/images/marketplace/marketplace_insights.png)

{% data variables.product.prodname_marketplace %} Insightsには以下のようにしてアクセスしてください。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.marketplace_apps %}
4. Insightを表示させる{% data variables.product.prodname_github_app %}を選択します。
{% data reusables.user-settings.edit_marketplace_listing %}
6. **[Insights]\(分析情報\)** タブをクリックします。
7. Insightsページの右上にあるPeriod（期間）ドロップダウンをクリックして、異なる期間を選択することもできます。
![Marketplace の期間](/assets/images/marketplace/marketplace_insights_time_period.png)
