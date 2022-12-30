---
title: 繰り返しフィールドについて
shortTitle: About iteration fields
intro: 今後の作業を計画し、アイテムをグループ化するために、繰り返しを作成できます。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-iterations
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-iteration-fields
type: tutorial
topics:
  - Projects
ms.openlocfilehash: ae598dc481c54adfb817e110794f43f0f80a7c16
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159895'
---
繰り返しフィールドを作成して、アイテムを特定の繰り返し時間ブロックに関連づけることができます。 繰り返しは任意の長さに設定でき、休憩を含められ、名前と日付の範囲を変更するために個別に編集できます。 プロジェクトでは、繰り返しでグループ化を行い、今後の作業のバランスを視覚化し、フィルタを使って繰り返しの1つに焦点を当て、繰り返しで並べ替えできます。

繰り返しをフィルター処理するには、特定の繰り返しの名前を指定するか、現在の繰り返しに `@current`、前の繰り返しに `@previous`、または次の繰り返しに `@next` を指定します。 `>`、`>=`、`<`、`<=`、`..` などの演算子を使用することもできます。  たとえば、`iteration:>"Iteration 4"` や `iteration:<@current`す。 詳細については、[プロジェクトのフィルター処理](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)に関するページを参照してください。

最初に繰り返しフィールドを作成すると、3回の繰り返しが自動的に作成されます。  プロジェクトの設定ページから、繰り返しを追加したり、他の変更をしたりできます。

![繰り返しフィールドの設定を表示しているスクリーンショット](/assets/images/help/issues/iterations-example.png)

## 繰り返しフィールドの追加

{% data reusables.projects.new-field %}
1. **[繰り返し]** を選びます。
   ![[繰り返し] オプションを示すスクリーンショット](/assets/images/help/projects-v2/new-field-iteration.png)
2. 必要に応じて、繰り返しを今日開始しない場合は、[開始日] の横にある予定表ドロップダウンを選び、新しい開始日を選びます。
   ![繰り返しの開始日を示すスクリーンショット](/assets/images/help/projects-v2/iteration-field-starts.png)
3. 各イテレーションの期間を変更するには、新しい数値を入力し、ドロップダウンを選択して、**日** または **週** のいずれかをクリックします。
   ![繰り返し期間を示すスクリーンショット](/assets/images/help/projects-v2/iteration-field-duration.png)
4. **[保存]** をクリックします。
   ![[保存] ボタンを示すスクリーンショット](/assets/images/help/projects-v2/new-field-save-and-create.png)

または、{% data variables.projects.command-palette-shortcut %} キーを押してプロジェクト コマンド パレットを開き、「Create new field」と入力し始めます。

## 新しい繰り返しの追加

{% data reusables.projects.project-settings %}
1. 調整したい繰り返しフィールドの名前をクリックしてください。
   !["繰り返し" フィールドを示すスクリーンショット](/assets/images/help/projects-v2/select-iteration-field.png)
1. 同じ期間の新しいイテレーションを追加するには、 **[Add iteration]\(イテレーションの追加\)** をクリックします。
   ![[繰り返しの追加] ボタンをスクリーンショット](/assets/images/help/projects-v2/add-iteration.png)
1. 必要に応じて、新しい繰り返しの期間と開始時点をカスタマイズするには、{% octicon "triangle-down" aria-label="The triangle icon" %} **[その他のオプション]** をクリックし、開始日と期間を選び、 **[追加]** をクリックします。
   !["繰り返しオプションの追加" フォームのスクリーンショット](/assets/images/help/projects-v2/add-iteration-options.png)
1. **[変更を保存]** をクリックします。
   ![[保存] ボタンのスクリーンショット](/assets/images/help/projects-v2/iteration-save.png)

## 繰り返しの編集

繰り返しは、プロジェクトの設定で編集できます。 繰り返しフィールドの設定には、フィールドの表の見出し内の {% octicon "triangle-down" aria-label="The triangle icon" %} をクリックして、 **[値の編集]** をクリックすることでもアクセスできます。

{% data reusables.projects.project-settings %}
1. 調整したい繰り返しフィールドの名前をクリックしてください。
   !["繰り返し" フィールドを示すスクリーンショット](/assets/images/help/projects-v2/select-iteration-field.png)
1. 繰り返しの名前を変更するには、名前をクリックして入力していってください。
   ![繰り返しの名前を変更するタイトル フィールドのスクリーンショット](/assets/images/help/projects-v2/iteration-rename.png)
1. 繰り返しの日付や期間を変更するには、日付をクリックしてカレンダーを開いてください。 開始日をクリックしてから、終了日をクリックし、 **[適用]** をクリックします。
   ![繰り返しの日付を示すスクリーンショット](/assets/images/help/projects-v2/iteration-date.png)
1. あるいは、繰り返しを削除したい場合は{% octicon "trash" aria-label="The trash icon" %}をクリックしてください。
   ![[削除] ボタンのスクリーンショット](/assets/images/help/projects-v2/iteration-delete.png)
2. **[変更を保存]** をクリックします。
   ![[保存] ボタンのスクリーンショット](/assets/images/help/projects-v2/iteration-save.png)

## 休憩の挿入

繰り返しには、スケジュールされた作業から離れることを知らせるために休憩を挿入できます。 新しい休憩期間のデフォルトは、直近に作成された繰り返しの長さです。

{% data reusables.projects.project-settings %}
1. 調整したい繰り返しフィールドの名前をクリックしてください。
   !["繰り返し" フィールドを示すスクリーンショット](/assets/images/help/projects-v2/select-iteration-field.png)
2. 繰り返しの上の分割線上の右で **[休憩の挿入]** をクリックします。
   ![[休憩の挿入] ボタンの場所を示すスクリーンショット](/assets/images/help/issues/iteration-insert-break.png)
3. あるいは、休憩の期間を変更するには、日付をクリックしてカレンダーを開いてください。 開始日をクリックしてから、終了日をクリックし、 **[適用]** をクリックします。
4. **[変更を保存]** をクリックします。
   ![[保存] ボタンのスクリーンショット](/assets/images/help/projects-v2/iteration-save.png)
