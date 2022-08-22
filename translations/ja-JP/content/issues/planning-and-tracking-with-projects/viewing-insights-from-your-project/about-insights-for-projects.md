---
title: '{% data variables.product.prodname_projects_v2 %}のインサイトについて'
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

**ノート:** 履歴グラフは現在{% data variables.product.prodname_team %}を使用しているOrganizationでは機能プレビューとして利用でき、{% data variables.product.prodname_ghe_cloud %}を利用しているOrganizationでは一般利用可能です。

{% endnote %}

{% endif %}

 {% data variables.product.prodname_projects_v2 %}のインサイトを使い、プロジェクトに追加したアイテムをソースデータとして利用してグラフの表示、作成、カスタマイズができます。 デフォルトのグラフにフィルタを適用することも、独自のグラフを作成することもできます。 グラフを作成する際には、フィルタ、グラフの種類、表示される情報を設定します。そのグラフは、プロジェクトを見ることができる人なら誰でも利用できます。 現在のグラフと履歴グラフという2種類のグラフを生成できます。

 ### 現在のグラフについて

現在のグラフを作成して、プロジェクトのアイテムを可視化できます。 たとえば、各個人にいくつのアイテムが割り当てられているかを表示するグラフや、この先の繰り返しにいくつのIssueがアサインされているかを表示するグラフを作成できます。

グラフを構築する溜めに使われるデータを操作するために、フィルタを使うこともできます。 たとえば、この先の作業がいくつあるのかを示すグラフを作成し、ただしその結果を特定のラベルやアサインされた人に限定することができます。 詳しい情報については「[プロジェクトのフィルタリング](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)」を参照してください。

 ![各イテレーションのアイテムの種類を表示する積み上げ列グラフのスクリーンショット](/assets/images/help/issues/column-chart-example.png)

詳しい情報については「[グラフの作成](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)」を参照してください。

 ### 履歴グラフについて

 履歴グラフは時間ベースのグラフで、プロジェクトのトレンドと進捗を表示できます。 ステータスやその他のフィールドでグループ化されたアイテム数を、時間の経過とともに表示できます。

 デフォルトの「バーンアップ」グラフは、時間の経過に伴うアイテムのステータスを表示し、進捗を可視化して時間の経過にともなるパターンを特定できます。

![現在の繰り返しに対するデフォルトのバーンアップグラフの例を表示しているスクリーンショット](/assets/images/help/issues/burnup-example.png)

 履歴グラフを作成するには、グラフのX軸を"Time（時間）"に設定してください。 詳しい情報については「[グラフの作成](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)」及び「[グラフの設定](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/configuring-charts)」を参照してください。

## 参考リンク

- [{% data variables.product.prodname_projects_v2 %}について](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
- 「[Organizationでの{% data variables.product.prodname_projects_v2 %}のインサイトの無効化](/organizations/managing-organization-settings/disabling-insights-for-projects-in-your-organization)」
