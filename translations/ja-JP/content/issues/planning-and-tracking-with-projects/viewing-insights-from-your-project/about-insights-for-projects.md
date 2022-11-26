---
title: '{% data variables.product.prodname_projects_v2 %} の分析情報について'
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
ms.openlocfilehash: 89f93ace53547fccd69ffb7e6d7b666a6cb48991
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109096'
---
{% ifversion fpt %}

{% note %}

**注:** 履歴グラフは現在、{% data variables.product.prodname_team %} を使用している Organization の機能プレビューとして利用でき、{% data variables.product.prodname_ghe_cloud %} を使用している Organization に一般提供されています。

{% endnote %}

{% endif %}

 {% data variables.product.prodname_projects_v2 %} の分析情報を使って、プロジェクトにソースデータとして追加された項目を使うグラフを表示、作成、カスタマイズすることができます。 既定のグラフにフィルターを適用し、独自のグラフを作成することもできます。 グラフを作成するときは、フィルター、グラフの種類、表示される情報を設定します。グラフは、プロジェクトを表示できるすべてのユーザーが使用できます。 現在のグラフと履歴グラフの 2 種類のグラフを生成できます。

 ### 現在のグラフについて

現在のグラフを作成して、プロジェクト項目を視覚化できます。 たとえば、グラフを作成して、各個人に割り当てられている項目の数や、今後の繰り返しごとに割り当てられている issue の数を示すことができます。

フィルターを使用して、グラフの作成に使用するデータを操作することもできます。 たとえば、今後の作業量を示すグラフを作成し、それらの結果を特定のラベルまたは担当者に限定することができます。 詳細については、[プロジェクトのフィルター処理](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)に関するページを参照してください。

 ![各繰り返しのアイテムの種類を示す積み上げ縦棒グラフを示すスクリーンショット](/assets/images/help/issues/column-chart-example.png)

詳しくは、「[グラフの作成](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)」を参照してください。

 ### 履歴グラフについて

 履歴グラフは、プロジェクトの傾向と進行状況を表示できる時間ベースのグラフです。 項目の数は、時間の経過に伴い、状態やその他のフィールドでグループ化して表示できます。
 
 既定の "バーンアップ" グラフは、時間の経過に伴うアイテムの状態を表示し、時間の経過に沿って進行状況を可視化することができます。 

![現在の繰り返しに対するデフォルトのバーンアップグラフの例を表示しているスクリーンショット](/assets/images/help/issues/burnup-example.png)

 履歴グラフを作成するには、グラフの X 軸を "時間" に設定します。 詳しくは、「[グラフの作成](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)」および「[グラフの構成](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/configuring-charts)」を参照してください。

## 参考資料

- [{% data variables.product.prodname_projects_v2 %} について](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
- [Organization で {% data variables.product.prodname_projects_v2 %} の分析情報を無効にする](/organizations/managing-organization-settings/disabling-insights-for-projects-in-your-organization)
