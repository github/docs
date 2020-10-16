---
title: スポンサーとスポンサーシップを表示する
intro: スポンサーとスポンサーシップについて、詳細情報と分析を表示し、エクスポートすることができます。
redirect_from:
  - /articles/viewing-your-sponsors-and-sponsorships
versions:
  free-pro-team: '*'
---

現在と過去のスポンサーシップについての分析、スポンサーから受領した支払い、キャンセルなどのイベント、スポンサーシップのスポンサー層の変更を表示できます。 新しいスポンサーシップ、スポンサーシップの変更、スポンサーシップのキャンセルといったアクティビティも確認できます。 アクティビティのリストは、日付でフィルタリングできます。 表示しているアカウントのスポンサーシップデータを CSV または JSON 形式でエクスポートすることもできます。

この情報すべてには、スポンサーダッシュボードからアクセスします。

### スポンサーダッシュボードを表示する

1. 任意のページの右上隅で、プロフィール画像をクリックし、続いて [**{% data variables.product.prodname_sponsors %}**] をクリックします。 ![{% data variables.product.prodname_sponsors %}ボタン](/assets/images/help/sponsors/access-github-sponsors-dashboard.png)
2. 表示されたリストで、スポンサーダッシュボードを表示したいアカウントまたは Organization の右にある [**Dashboard**] をクリックします。 ![開発者スポンサーダッシュボードボタン](/assets/images/help/sponsors/dev-sponsors-dashboard-button.png)

### スポンサーとスポンサーシップを表示する

1. スポンサーダッシュボードにアクセスし、[[Viewing your Sponsors dashboard](#viewing-your-sponsors-dashboard)] を確認します。
{% data reusables.sponsors.navigate-to-sponsors-tab %}
1. あるいは、スポンサーを層によってフィルタリングするには、**Filter（フィルター）**ドロップダウンメニューで、**Active tiers（アクティブな層）**または**Retired tiers（リタイアした層）**をクリックしてから、層を選択します。 ![層によってフィルタリングするドロップダウンメニュー](/assets/images/help/sponsors/filter-drop-down.png)

### 最近のスポンサーシップアクティビティを表示する

1. スポンサーダッシュボードにアクセスし、[[Viewing your Sponsors dashboard](#viewing-your-sponsors-dashboard)] を確認します。
1. 左のサイドバーで**Activity（アクティビティ）**をクリックしてください。 ![アクティビティタブ](/assets/images/help/sponsors/activity-tab.png)

### スポンサーシップデータをエクスポートする

1. スポンサーダッシュボードにアクセスし、[[Viewing your Sponsors dashboard](#viewing-your-sponsors-dashboard)] を確認します。
{% data reusables.sponsors.navigate-to-sponsors-tab %}
1. [**Export all**] をクリックします。 ![[Export all] ボタン](/assets/images/help/sponsors/export-all.png)

   スポンサーが存在しない場合、このボタンは表示されません。

1. エクスポートしたいデータの時間枠と形式を選択し、[**Start export**] をクリックします。 ![データエクスポートのオプション](/assets/images/help/sponsors/export-your-sponsors.png)

  {% data variables.product.prodname_dotcom %} で、選択した月のスポンサーすべてのデータがエクスポートされます。 すぐに、データの入ったファイルがファイルが添付されたメールが届きます。 エクスポートが完了したら、別の月のデータをエクスポートできます。 スポンサード Organization またはユーザアカウントごとに、1 時間に 10 セットまでのデータをエクスポートできます。
