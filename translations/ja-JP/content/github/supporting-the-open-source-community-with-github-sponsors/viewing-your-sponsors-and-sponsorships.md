---
title: スポンサーとスポンサーシップを表示する
intro: スポンサーとスポンサーシップについて、詳細情報と分析を表示し、エクスポートすることができます。
redirect_from:
  - /articles/viewing-your-sponsors-and-sponsorships
versions:
  free-pro-team: '*'
topics:
  - sponsors
---

### スポンサーとスポンサーシップについて

現在と過去のスポンサーシップについての分析、スポンサーから受領した支払い、キャンセルなどのイベント、スポンサーシップのスポンサー層の変更を表示できます。 新しいスポンサーシップ、スポンサーシップの変更、スポンサーシップのキャンセルといったアクティビティも確認できます。 アクティビティのリストは、日付でフィルタリングできます。 表示しているアカウントのスポンサーシップデータを CSV または JSON 形式でエクスポートすることもできます。

### スポンサーとスポンサーシップを表示する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
1. あるいは、スポンサーを層によってフィルタリングするには、**Filter（フィルター）**ドロップダウンメニューで、**Active tiers（アクティブな層）**または**Retired tiers（リタイアした層）**をクリックしてから、層を選択します。 ![層によってフィルタリングするドロップダウンメニュー](/assets/images/help/sponsors/filter-drop-down.png)

### 最近のスポンサーシップアクティビティを表示する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.activity-tab %}

### スポンサーシップデータをエクスポートする

スポンサーシップのトランザクションは 月単位でエクスポートできます。 {% data variables.product.company_short %} で、選択した月のスポンサーすべてのトランザクションデータがメールでエクスポートされます。 エクスポートが完了したら、別の月のデータをエクスポートできます。 スポンサードアカウントごとに、1 時間に 10 セットまでのデータをエクスポートできます。

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.activity-tab %}
1. {% octicon "download" aria-label="The download icon" %}[**Export**] をクリックします。 ![エクスポートボタン](/assets/images/help/sponsors/export-all.png)
1. エクスポートしたいデータの時間枠と形式を選択し、[**Start export**] をクリックします。 ![データエクスポートのオプション](/assets/images/help/sponsors/export-your-sponsors.png)
