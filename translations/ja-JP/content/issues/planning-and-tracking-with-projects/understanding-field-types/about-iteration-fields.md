---
title: About iteration fields
shortTitle: About iteration fields
intro: 今後の作業を計画し、アイテムをグループ化するために、繰り返しを作成できます。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-iterations
type: tutorial
topics:
  - Projects
---

繰り返しフィールドを作成して、アイテムを特定の繰り返し時間ブロックに関連づけることができます。 繰り返しは任意の長さに設定でき、休憩を含められ、名前と日付の範囲を変更するために個別に編集できます。 プロジェクトでは、繰り返しでグループ化を行い、今後の作業のバランスを視覚化し、フィルタを使って繰り返しの1つに焦点を当て、繰り返しで並べ替えできます。

You can filter for iterations by specifying the iteration name or `@current` for the current iteration, `@previous` for the previous iteration, or `@next` for the next iteration. You can also use operators such as `>`, `>=`, `<`, `<=`, and `..`.  For example, `iteration:>"Iteration 4"` and `iteration:<@current`. 詳しい情報については「[プロジェクトのフィルタリング](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)」を参照してください。

最初に繰り返しフィールドを作成すると、3回の繰り返しが自動的に作成されます。  プロジェクトの設定ページから、繰り返しを追加したり、他の変更をしたりできます。

![繰り返しフィールドの設定を表示しているスクリーンショット](/assets/images/help/issues/iterations-example.png)

## Adding an iteration field

{% data reusables.projects.new-field %}
1. Select **Iteration** ![Screenshot showing the iteration option](/assets/images/help/projects-v2/new-field-iteration.png)
2. Optionally, if you don't want the iteration to start today, select the calendar dropdown next to "Starts on" and choose a new start date. ![Screenshot showing the iteration start date](/assets/images/help/projects-v2/iteration-field-starts.png)
3. それぞれの繰り返しの期間を変更するには、新しい数値を入力し、ドロップダウンを選択して**days（日）**もしくは**weeks（週）**をクリックしてください。 ![Screenshot showing the iteration duration](/assets/images/help/projects-v2/iteration-field-duration.png)
4. [**Save**] をクリックします。 ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save-and-create.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Create new field."

## 新しい繰り返しの追加

{% data reusables.projects.project-settings %}
1. Click the name of the iteration field you want to adjust. ![Screenshot showing an iteration field](/assets/images/help/projects-v2/select-iteration-field.png)
1. 同じ期間の新しい繰り返しを追加したいなら、**Add iteration（繰り返しの追加）**をクリックしてください。 ![Screenshot the "add iteration" button](/assets/images/help/projects-v2/add-iteration.png)
1. Optionally, to customize the duration of the new iteration and when it will start, click {% octicon "triangle-down" aria-label="The triangle icon" %} **More options**, select a starting date and duration, and click **Add**. ![Screenshot the add iteration options form](/assets/images/help/projects-v2/add-iteration-options.png)
1. [**Save changes**] をクリックします。 ![Screenshot the save button](/assets/images/help/projects-v2/iteration-save.png)

## 繰り返しの編集

繰り返しは、プロジェクトの設定で編集できます。 繰り返しフィールドの設定には、フィールドの表ヘッダ内の{% octicon "triangle-down" aria-label="The triangle icon" %}をクリックし、**Edit values（値の編集）**をクリックしてもアクセスできます。

{% data reusables.projects.project-settings %}
1. Click the name of the iteration field you want to adjust. ![Screenshot showing an iteration field](/assets/images/help/projects-v2/select-iteration-field.png)
1. To change the name of an iteration, click on the name and start typing. ![Screenshot an title field to rename an iteration](/assets/images/help/projects-v2/iteration-rename.png)
1. 繰り返しの日付や期間を変更するには、日付をクリックしてカレンダーを開いてください。 開始日をクリックし、続いて終了日をクリックし、そして**Apply（適用）**をクリックしてください。 ![Screenshot showing iteration dates](/assets/images/help/projects-v2/iteration-date.png)
1. Optionally, to delete an iteration, click {% octicon "trash" aria-label="The trash icon" %}. ![Screenshot the delete button](/assets/images/help/projects-v2/iteration-delete.png)
2. [**Save changes**] をクリックします。 ![Screenshot the save button](/assets/images/help/projects-v2/iteration-save.png)

## 休憩の挿入

繰り返しには、スケジュールされた作業から離れることを知らせるために休憩を挿入できます。 新しい休憩期間のデフォルトは、直近に作成された繰り返しの長さです。

{% data reusables.projects.project-settings %}
1. Click the name of the iteration field you want to adjust. ![Screenshot showing an iteration field](/assets/images/help/projects-v2/select-iteration-field.png)
2. 繰り返しの上の分割線上の右で**Insert break（休憩の挿入）**をクリックしてください。 !["休憩の挿入"ボタンの場所を表示しているスクリーンショット](/assets/images/help/issues/iteration-insert-break.png)
3. あるいは、休憩の期間を変更するには、日付をクリックしてカレンダーを開いてください。 開始日をクリックし、続いて終了日をクリックし、そして**Apply（適用）**をクリックしてください。
4. [**Save changes**] をクリックします。 ![Screenshot the save button](/assets/images/help/projects-v2/iteration-save.png)
