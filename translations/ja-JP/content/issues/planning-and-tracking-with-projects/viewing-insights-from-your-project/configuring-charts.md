---
title: グラフの構成
intro: グラフを構成し、プロジェクトからデータをフィルター処理する方法について学習します。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
product: '{% data reusables.gated-features.historical-insights-for-projects %}'
topics:
  - Projects
ms.openlocfilehash: dd8f97ac69beb90a511c36ddd0a51f0e16b2d4b3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109091'
---
{% ifversion fpt %}

{% note %}

**注:** 履歴グラフは現在、機能プレビューとして利用できます。

{% endnote %}

{% endif %}

{% data reusables.projects.access-insights %}
1. 左側のメニューで、構成するグラフをクリックします。
   ![カスタム グラフの選択を示すスクリーンショット](/assets/images/help/projects-v2/insights-select-a-chart.png)
1. ページの右側で **[構成]** をクリックします。 右側にパネルが開きます。
   ![[構成] ボタンを示すスクリーンショット](/assets/images/help/projects-v2/insights-configure.png)
1. グラフの種類を変更するには、 **[レイアウト]** ドロップダウンを選択し、使用するグラフの種類をクリックします。
   ![グラフ レイアウトの選択を示すスクリーンショット](/assets/images/help/projects-v2/insights-layout.png)
1. グラフの X 軸に使用するフィールドを変更するには、 **[X 軸]** ドロップダウンを選択し、使用するフィールドをクリックします。
   ![x 軸に表示する内容の選択を示すスクリーンショット](/assets/images/help/projects-v2/insights-x-axis.png)
1. 必要に応じて、X 軸のアイテムを別のフィールドでグループ化するには、 **[グループ化]** を選択して使用するフィールドをクリックするか、[なし] をクリックしてグループ化を無効にします。
   ![グループ化方法の選択を示すスクリーンショット](/assets/images/help/projects-v2/insights-group.png)
1. 必要に応じて、プロジェクトに数値フィールドが含まれており、Y 軸にそれらの数値フィールドの合計、平均、最小値、または最大値を表示する場合は、 **[Y 軸]** を選択し、オプションをクリックします。 次に、下に表示されるドロップダウンを選択し、使用する数値フィールドをクリックします。 
   ![y 軸に表示する内容の選択を示すスクリーンショット](/assets/images/help/projects-v2/insights-y-axis.png)
1. グラフを保存するには、 **[変更を保存]** をクリックします。
   ![保存ボタンを示すスクリーンショット](/assets/images/help/projects-v2/insights-save.png)
