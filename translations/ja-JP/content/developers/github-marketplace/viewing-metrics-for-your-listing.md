---
title: リストのメトリクスの参照
intro: '{% data variables.product.prodname_marketplace %} Insightsのページは、{% data variables.product.prodname_github_app %}のメトリクスを表示します。 このメトリクスを使って{% data variables.product.prodname_github_app %}のパフォーマンスを追跡し、価格、プラン、無料トライアル、マーケティングキャンペーンの効果の可視化の方法に関する判断を、より多くの情報に基づいて行えます。'
redirect_from:
  - /apps/marketplace/managing-github-marketplace-listings/viewing-performance-metrics-for-a-github-marketplace-listing/
  - /apps/marketplace/viewing-performance-metrics-for-a-github-marketplace-listing/
  - /apps/marketplace/github-marketplace-insights/
  - /marketplace/github-marketplace-insights
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---



過去の日（24時間）、週、月、あるいは{% data variables.product.prodname_github_app %}がリストされた期間全体に対するメトリクスを見ることができます。

{% note %}

**ノート:** データの集計には時間がかかるので、表示される日付には若干の遅れが生じます。 期間を選択すると、ページの上部にそのメトリクスの正確な日付が表示されます。

{% endnote %}

### パフォーマンスメトリクス

Insightsページには、選択された期間に対する以下のパフォーマンスメトリクスが表示されます。

* **Subscription value:** サブスクリプションで可能な合計収入（米ドル）。 この値は、プランや無料トライアルがまったくキャンセルされず、すべてのクレジット取引が成功した場合に可能な収入を示します。 subscription valueには、選択された期間内に無料トライアルで始まったプランの全額が、仮にその期間に金銭取引がなかったとしても含まれます。 subscription valueには、選択された期間内にアップグレードされたプランの全額も含まれますが、日割り計算の文は含まれません。 個別の取引を見てダウンロードするには、「[GitHub Marketplaceの取引](/marketplace/github-marketplace-transactions/)」を参照してください。
* **Visitors:** GitHub Appのリスト内のページを見た人数。 この数字には、ログインした訪問者とログアウトした訪問者がどちらも含まれます。
* **Pageviews:** GitHub Appのリスト内のページが受けた閲覧数です。 一人の訪問者が複数のページビューを生成できます。

{% note %}

**ノート:** 推定されたsubscription valueは、その期間に処理された取引よりもはるかに高くなることがあります。

{% endnote %}

#### コンバージョンパフォーマンス

* **Unique visitors to landing page:** GitHub Appのランディングページを閲覧した人数。
* **Unique visitors to checkout page:** GitHub Appのチェックアウトページのいずれかを閲覧した人数。
* **Checkout page to new subscriptions:** 有料サブスクリプション、無料トライアル、無料サブスクリプションの総数。 それぞれの種類のサブスクリプションの特定の数値については「合計サブスクリプションの内訳」を参照してください。

![Marketplace insights](/assets/images/marketplace/marketplace_insights.png)

{% data variables.product.prodname_marketplace %} Insightsには以下のようにしてアクセスしてください。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.marketplace_apps %}
4. Insightを表示させたい{% data variables.product.prodname_github_app %}を選択してください。
{% data reusables.user-settings.edit_marketplace_listing %}
6. **Insights**タブをクリックしてください。
7. Insightsページの右上にあるPeriod（期間）ドロップダウンをクリックして、異なる期間を選択することもできます。 ![Marketplaceの期間](/assets/images/marketplace/marketplace_insights_time_period.png)
