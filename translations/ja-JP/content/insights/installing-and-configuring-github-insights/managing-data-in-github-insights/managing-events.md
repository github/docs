---
title: イベントの管理
intro: '{% data reusables.github-insights.events %}'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/creating-and-managing-events
  - /insights/installing-and-configuring-github-insights/managing-events
permissions: 'People with admin permissions to {% data variables.product.prodname_insights %} can manage events.'
versions:
  enterprise-server: '*'
---
### イベントについて

イベントはコンテキストをメトリクスに追加します。 たとえば、休日やリリース日は作業のパターンに変化をもたらすので、それらのイベントが生じたことを把握すれば、メトリクスの評価が変わるかもしれません。 Teamの再編成、新しい従業員の勤務開始日、Teamのスコープの変化、あるいはTeamの作業に影響するその他のあらゆることに対して、イベントを作成できます。

{% data variables.product.prodname_insights %}でイベントを作成した後は、誰でもそのイベントをメトリクス内のアノテーションとして見ることができます。 詳しい情報については「[主要なメトリクスとレポートの表示](/insights/exploring-your-usage-of-github-enterprise/viewing-key-metrics-and-reports)」を参照してください。

### イベントの作成

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.events-tab %}
2. **Add Event（イベントの追加）**をクリックしてください。 ![イベントの追加ボタン](/assets/images/help/insights/add-event.png)
3. "Title（タイトル）"の下で、イベントを説明する名前を入力してください。 ![Title フィールド](/assets/images/help/insights/title-field.png)
4. "Start Date（開始日）"ドロップダウンメニューを使い、イベントの開始日を選択してください。 ![開始日のドロップダウンメニュー](/assets/images/help/insights/start-date.png)
5. "End Date（終了日）"ドロップダウンメニューを使い、イベントの終了日を選択してください。 ![終了日のドロップダウンメニュー](/assets/images/help/insights/end-date.png)
6. [**Save**] をクリックします。

### イベントの削除

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.events-tab %}
3. 削除したいイベントの右で、**{% octicon "trashcan" aria-label="The trashcan icon" %}**をクリックしてください。 ![ゴミ箱ボタン](/assets/images/help/insights/trashcan-button.png)
4. **Confirm（確認）**を削除してください。
