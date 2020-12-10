---
title: 目標の管理
intro: 目標を使って、主要なメトリクスについてターゲットを設定し、それらのターゲットに到達する成功を計測できます。
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/creating-and-managing-goals
permissions: '{% data variables.product.prodname_insights %}にアクセスできる人は、目標を管理できます。'
versions:
  enterprise-server: '*'
---

### 目標について

目標は、主要なメトリクスに対して設定し、チームの成功度合いを計測できるターゲットです。 主要なメトリクスに目標を設定すると、グラフ上の目標ラインと成功レートメトリクスを使い、チームのパフォーマンスを目標と比較してみることができます。 たとえば`code review turnaround time`の目標を4時間に設定できます。 主要なメトリクスのグラフ上の目標ラインは、この目標を達成したコードレビューと達成しなかったコードレビューを示してくれます。 チームがコードレビューの半分を4時間以内に終えているなら、`success rate`は50%になります。

目標は、主要なメトリクスでのみ利用できます。 レポートの中には、たとえば個々のプルリクエストなど、どういった作業が目標を満たさなかったかを示してくれるものがあります。 詳しい情報については「[主要なメトリクスとレポートの表示](/insights/exploring-your-usage-of-github-enterprise/viewing-key-metrics-and-reports)」を参照してください。

目標は作成したり削除したりできません。 目標を編集すると、同じ{% data variables.product.prodname_insights %}アプリケーションを使っている全員に新しい目標が適用されます。

### 目標の編集

{% data reusables.github-insights.navigate-to-key-metrics %}
{% data reusables.github-insights.choose-key-metric %}
1. 目標の右で{% octicon "gear" aria-label="The gear icon" %}をクリックしてください。 ![目標を編集するためのギアアイコン](/assets/images/help/insights/edit-goal.png)
2. テキストフィールドに、新しい目標値を入力してください。 ![目標値フィールド](/assets/images/help/insights/input-goal.png)
3. [**Save**] をクリックします。 ![目標の保存](/assets/images/help/insights/save-goal.png)
