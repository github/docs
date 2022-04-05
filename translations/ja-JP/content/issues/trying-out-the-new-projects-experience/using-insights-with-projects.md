---
title: プロジェクト（ベータ）のインサイトの利用
intro: プロジェクトのデータから構築されたグラフを表示させ、カスタマイズできます。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
---

{% data reusables.projects.insights-alpha %}

## インサイトについて

インサイトを使って、プロジェクトに追加されたアイテムをソースデータとして利用し、グラフを表示及びカスタマイズできます。 The default "Burn up" chart shows item status over time, allowing you to visualize progress and spot patterns over time.

![現在の繰り返しに対するデフォルトのバーンアップグラフの例を表示しているスクリーンショット](/assets/images/help/issues/burnup-example.png)

You can apply filters to the default chart and also create your own charts. When you create a chart, you set the filters, chart type, and the information displayed, and the chart is available to anyone that can view the project.

![Screenshot showing an stacked column chart showing item types for each iteration](/assets/images/help/issues/column-chart-example.png)

## グラフの作成

{% data reusables.projects.access-insights %}
3. 左のメニューで**New chart（新規グラフ）**をクリックしてください。
4. あるいは、新しいグラフの名前を変更するには{% octicon "triangle-down" aria-label="The triangle icon" %}をクリックし、新しい名前を入力し、<kbd>Return</kbd>を押してください。
5. グラフの上で、グラフを構築するのに使われたデータを変更するフィルタを入力してください。 詳しい情報については「[プロジェクトのフィルタリング](/issues/trying-out-the-new-projects-experience/filtering-projects)」を参照してください。
6. フィルタのテキストボックスの右で、**Save changes（変更を保存）**をクリックしてください。

## Configuring a chart

{% data reusables.projects.access-insights %}
1. In the menu on the left, click on the chart you would like to configure.
1. On the right side of the page, click **Configure**. A panel will open on the right.
2. To change the type of chart, select the **Layout** dropdown and click on the chart type you want to use.
3. To change the field used for your chart's X-axis, select the **X-axis** dropdown and click the field you want to use. If you select "Time", "Group by" will change to "Status" and "Y-Axis" will change to "Count of items."
4. Optionally, to group the items on your X-axis by another field, select **Group by** and click on the field you want to use, or click "None" to disable grouping.
5. Optionally, if your project contains number fields and you want the Y-axis to display the sum, average, minimum, or maximum of one of those number fields, select **Y-axis** and click an option. Then, select the dropdown that appears beneath and click on the number field you want to use.
6. To save your chart, click **Save changes**.
