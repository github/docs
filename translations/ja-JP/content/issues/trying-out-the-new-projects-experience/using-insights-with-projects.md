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
ms.openlocfilehash: b2e8f2bc76c584d4de33fe00da1fd95982f9d091
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "147064707"
---
{% data reusables.projects.insights-alpha %}

## <a name="about-insights"></a>インサイトについて

インサイトを使って、プロジェクトに追加されたアイテムをソースデータとして利用し、グラフを表示及びカスタマイズできます。 既定の "バーンアップ" グラフは、時間の経過に伴うアイテムの状態を表示し、時間の経過に沿って進行状況を可視化することができます。 

![現在の繰り返しに対するデフォルトのバーンアップグラフの例を表示しているスクリーンショット](/assets/images/help/issues/burnup-example.png)

既定のグラフにフィルターを適用し、独自のグラフを作成することもできます。 グラフを作成するときは、フィルター、グラフの種類、表示される情報を設定します。グラフは、プロジェクトを表示できるすべてのユーザーが使用できます。

![各繰り返しのアイテムの種類を示す積み上げ縦棒グラフを示すスクリーンショット](/assets/images/help/issues/column-chart-example.png)

## <a name="creating-a-chart"></a>グラフの作成

{% data reusables.projects.access-insights %}
3. 左側のメニューで **[新しいグラフ]** をクリックします。
4. 必要に応じて、新しいグラフの名前を変更するには{% octicon "triangle-down" aria-label="The triangle icon" %} をクリックし、新しい名前を入力し、<kbd>Return</kbd> を押します。
5. グラフの上で、グラフを構築するのに使われたデータを変更するフィルタを入力してください。 詳細については、[プロジェクトのフィルター処理](/issues/trying-out-the-new-projects-experience/filtering-projects)に関するページを参照してください。
6. フィルター テキスト ボックスの右側にある **[変更を保存]** をクリックします。

## <a name="configuring-a-chart"></a>グラフの構成

{% data reusables.projects.access-insights %}
1. 左側のメニューで、構成するグラフをクリックします。
1. ページの右側で **[構成]** をクリックします。 右側にパネルが開きます。
1. グラフの種類を変更するには、 **[レイアウト]** ドロップダウンを選択し、使用するグラフの種類をクリックします。
1. グラフの X 軸に使用するフィールドを変更するには、 **[X 軸]** ドロップダウンを選択し、使用するフィールドをクリックします。
1. 必要に応じて、X 軸のアイテムを別のフィールドでグループ化するには、 **[グループ化]** を選択して使用するフィールドをクリックするか、[なし] をクリックしてグループ化を無効にします。
1. 必要に応じて、プロジェクトに数値フィールドが含まれており、Y 軸にそれらの数値フィールドの合計、平均、最小値、または最大値を表示する場合は、 **[Y 軸]** を選択し、オプションをクリックします。 次に、下に表示されるドロップダウンを選択し、使用する数値フィールドをクリックします。 
1. グラフを保存するには、 **[変更を保存]** をクリックします。
