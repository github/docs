---
title: プロジェクト（ベータ）での繰り返しの管理
intro: 今後の作業を計画し、アイテムをグループ化するために、繰り返しを作成できます。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: e64eb3e29efe513578984bc0c198ac8743803287
ms.sourcegitcommit: 95e6f3d3aba8c637a3f72b571a6beacaa38d367f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/11/2022
ms.locfileid: "147067571"
---
{% data reusables.projects.projects-beta %}

## <a name="about-iterations"></a>繰り返しについて

繰り返しフィールドを作成して、アイテムを特定の繰り返し時間ブロックに関連づけることができます。 繰り返しは任意の長さに設定でき、休憩を含められ、名前と日付の範囲を変更するために個別に編集できます。 プロジェクトでは、繰り返しでグループ化を行い、今後の作業のバランスを視覚化し、フィルタを使って繰り返しの1つに焦点を当て、繰り返しで並べ替えできます。

最初に繰り返しフィールドを作成すると、3回の繰り返しが自動的に作成されます。  プロジェクトの設定ページから、繰り返しを追加したり、他の変更をしたりできます。

![繰り返しフィールドの設定を表示しているスクリーンショット](/assets/images/help/issues/iterations-example.png)

## <a name="creating-an-iteration-field"></a>繰り返しフィールの作成

コマンドパレットを使って、あるいはプロジェクトのインターフェースを通じて繰り返しフィールドを作成できます。

1. {% data reusables.projects.open-command-palette %} "Create new field"のどこかを入力し始めてください。 コマンドパレットに"Create new field"が表示されたら、選択してください。

   あるいは、右端のフィールドヘッダの{% octicon "plus" aria-label="the plus icon" %}をクリックしてください。 プロジェクトのフィールドのドロップダウンメニューが表示されます。 **[新しいフィールド]** をクリックします。
1. テキストボックスに新しい繰り返しフィールドの名前を入力してください。
1. 下のドロップダウン メニューを選択して、 **[イテレーション]** をクリックします。
1. あるいは、開始日を現在の日付から変更したい場合には、"Starts on（開始）"の隣のカレンダードロップダウンを選択し、新しい開始日をクリックしてください。
2. 各イテレーションの期間を変更するには、新しい数値を入力し、ドロップダウンを選択して、**日** または **週** のいずれかをクリックします。
3. **[保存して作成]** をクリックします。
  
## <a name="adding-new-iterations"></a>新しい繰り返しの追加

{% data reusables.projects.project-settings %}
1. 調整したい繰り返しフィールドの名前をクリックしてください。
1. 同じ期間の新しいイテレーションを追加するには、 **[Add iteration]\(イテレーションの追加\)** をクリックします。
1. 必要に応じて、新しい繰り返しの期間と開始時点をカスタマイズするには、[繰り返しの追加] の隣の {% octicon "triangle-down" aria-label="The triangle icon" %} をクリックし、開始日と期間を選択して、 **[追加]** をクリックします。
1. **[変更を保存]** をクリックします。

## <a name="editing-an-iteration"></a>繰り返しの編集

繰り返しは、プロジェクトの設定で編集できます。 繰り返しフィールドの設定には、フィールドの表の見出し内の {% octicon "triangle-down" aria-label="The triangle icon" %} をクリックして、 **[値の編集]** をクリックすることでもアクセスできます。

{% data reusables.projects.project-settings %}
1. 調整したい繰り返しフィールドの名前をクリックしてください。
1. 繰り返しの名前を変更するには、名前をクリックして入力していってください。
1. 繰り返しの日付や期間を変更するには、日付をクリックしてカレンダーを開いてください。 開始日をクリックしてから、終了日をクリックし、 **[適用]** をクリックします。
1. あるいは、繰り返しを削除したい場合は{% octicon "trash" aria-label="The trash icon" %}をクリックしてください。
1. **[変更を保存]** をクリックします。

## <a name="inserting-a-break"></a>休憩の挿入

繰り返しには、スケジュールされた作業から離れることを知らせるために休憩を挿入できます。 新しい休憩期間のデフォルトは、直近に作成された繰り返しの長さです。

{% data reusables.projects.project-settings %}
1. 調整したい繰り返しフィールドの名前をクリックしてください。
2. 繰り返しの上の分割線上の右で **[休憩の挿入]** をクリックします。
   ![[休憩の挿入] ボタンの場所を示すスクリーンショット](/assets/images/help/issues/iteration-insert-break.png)
3. あるいは、休憩の期間を変更するには、日付をクリックしてカレンダーを開いてください。 開始日をクリックしてから、終了日をクリックし、 **[適用]** をクリックします。
4. **[変更を保存]** をクリックします。
