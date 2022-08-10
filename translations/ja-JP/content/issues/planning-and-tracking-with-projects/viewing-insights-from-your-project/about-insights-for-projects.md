---
title: 'About insights for {% data variables.product.prodname_projects_v2 %}'
intro: プロジェクトのデータから構築されたグラフを表示させ、カスタマイズできます。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/using-insights-with-projects
type: tutorial
product: '{% data reusables.gated-features.historical-insights-for-projects %}'
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

{% ifversion fpt %}

{% note %}

**Note:** Historical charts are currently available as a feature preview for organizations using {% data variables.product.prodname_team %} and are generally available for organizations using {% data variables.product.prodname_ghe_cloud %}.

{% endnote %}

{% endif %}

 You can use insights for {% data variables.product.prodname_projects_v2 %} to view, create, and customize charts that use the items added to your project as their source data. デフォルトのグラフにフィルタを適用することも、独自のグラフを作成することもできます。 When you create a chart, you set the filters, chart type, the information displayed, and the chart is available to anyone that can view the project. You can generate two types of chart: current charts and historical charts.

 ### About current charts

You can create current charts to visualize your project items. For example, you can create charts to show how many items are assigned to each individual, or how many issues are assigned to each upcoming iteration.

You can also use filters to manipulate the data used to build your chart. For example, you can create a chart showing how much upcoming work you have, but limit those results to particular labels or assignees. 詳しい情報については「[プロジェクトのフィルタリング](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)」を参照してください。

 ![各イテレーションのアイテムの種類を表示する積み上げ列グラフのスクリーンショット](/assets/images/help/issues/column-chart-example.png)

For more information, see "[Creating charts](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)."

 ### About historical charts

 Historical charts are time-based charts that allow you to view your project's trends and progress. You can view the number of items, grouped by status and other fields, over time.

 デフォルトの「バーンアップ」グラフは、時間の経過に伴うアイテムのステータスを表示し、進捗を可視化して時間の経過にともなるパターンを特定できます。

![現在の繰り返しに対するデフォルトのバーンアップグラフの例を表示しているスクリーンショット](/assets/images/help/issues/burnup-example.png)

 To create a historical chart, set your chart's X-axis to "Time." For more information, see "[Creating charts](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)" and "[Configuring charts](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/configuring-charts)."

## 参考リンク

- [{% data variables.product.prodname_projects_v2 %}について](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
- "[Disabling insights for {% data variables.product.prodname_projects_v2 %} in your organization](/organizations/managing-organization-settings/disabling-insights-for-projects-in-your-organization)"
