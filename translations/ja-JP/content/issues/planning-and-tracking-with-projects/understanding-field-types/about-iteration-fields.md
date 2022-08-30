---
title: 繰り返しフィールドについて
shortTitle: 繰り返しフィールドについて
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

繰り返しの名前もしくは現在の繰り返しとして`@current`、前の繰り返しとして`@previous`、次の繰り返しとして`@next`を指定して、繰り返しをフィルタリングできます。 `>`、`>=`、`<`、`<=`、`..`といった演算子を使うこともできます。  たとえば`iteration:>"Iteration 4"`や`iteration:<@current`とできます。 詳しい情報については「[プロジェクトのフィルタリング](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)」を参照してください。

最初に繰り返しフィールドを作成すると、3回の繰り返しが自動的に作成されます。  プロジェクトの設定ページから、繰り返しを追加したり、他の変更をしたりできます。

![繰り返しフィールドの設定を表示しているスクリーンショット](/assets/images/help/issues/iterations-example.png)

## 繰り返しフィールドの追加

{% data reusables.projects.new-field %}
1. **Iteration（繰り返し）**を選択してください。 ![繰り返しのオプションを表示しているスクリーンショット](/assets/images/help/projects-v2/new-field-iteration.png)
2. あるいは、繰り返しを今日始めたくない場合は、"Starts on（開始）"の隣のカレンダードロップダウンを選択し、新しい開始日を選択してください。 ![繰り返しの開始日を表示しているスクリーンショット](/assets/images/help/projects-v2/iteration-field-starts.png)
3. それぞれの繰り返しの期間を変更するには、新しい数値を入力し、ドロップダウンを選択して**days（日）**もしくは**weeks（週）**をクリックしてください。 ![繰り返しの期間を表示しているスクリーンショット](/assets/images/help/projects-v2/iteration-field-duration.png)
4. [**Save**] をクリックします。 ![保存ボタンを表示しているスクリーンショット](/assets/images/help/projects-v2/new-field-save-and-create.png)

または、{% data variables.projects.command-palette-shortcut %}を押してプロジェクトのコマンドパレットをオープンし、"Create new field"と入力していってください。

## 新しい繰り返しの追加

{% data reusables.projects.project-settings %}
1. 調整したい繰り返しフィールドの名前をクリックしてください。 ![繰り返しフィールドを表示しているスクリーンショット](/assets/images/help/projects-v2/select-iteration-field.png)
1. 同じ期間の新しい繰り返しを追加したいなら、**Add iteration（繰り返しの追加）**をクリックしてください。 !["add iteration"ボタンのスクリーンショット](/assets/images/help/projects-v2/add-iteration.png)
1. あるいは、新しい繰り返しの期間と開始時点をカスタマイズしたいなら、{% octicon "triangle-down" aria-label="The triangle icon" %} **More options（追加のオプション）**をクリックし、開始日と期間を選択し、**Add（追加）**をクリックしてください。 ![繰り返しの追加オプションフォームのスクリーンショット](/assets/images/help/projects-v2/add-iteration-options.png)
1. [**Save changes**] をクリックします。 ![保存ボタンのスクリーンショット](/assets/images/help/projects-v2/iteration-save.png)

## 繰り返しの編集

繰り返しは、プロジェクトの設定で編集できます。 繰り返しフィールドの設定には、フィールドの表ヘッダ内の{% octicon "triangle-down" aria-label="The triangle icon" %}をクリックし、**Edit values（値の編集）**をクリックしてもアクセスできます。

{% data reusables.projects.project-settings %}
1. 調整したい繰り返しフィールドの名前をクリックしてください。 ![繰り返しフィールドを表示しているスクリーンショット](/assets/images/help/projects-v2/select-iteration-field.png)
1. 繰り返しの名前を変更するには、名前をクリックして入力していってください。 ![繰り返しの名前を変更するタイトルフィールドのスクリーンショット](/assets/images/help/projects-v2/iteration-rename.png)
1. 繰り返しの日付や期間を変更するには、日付をクリックしてカレンダーを開いてください。 開始日をクリックし、続いて終了日をクリックし、そして**Apply（適用）**をクリックしてください。 ![繰り返しの日付を表示しているスクリーンショット](/assets/images/help/projects-v2/iteration-date.png)
1. あるいは、繰り返しを削除したい場合は{% octicon "trash" aria-label="The trash icon" %}をクリックしてください。 ![削除ボタンのスクリーンショット](/assets/images/help/projects-v2/iteration-delete.png)
2. [**Save changes**] をクリックします。 ![保存ボタンのスクリーンショット](/assets/images/help/projects-v2/iteration-save.png)

## 休憩の挿入

繰り返しには、スケジュールされた作業から離れることを知らせるために休憩を挿入できます。 新しい休憩期間のデフォルトは、直近に作成された繰り返しの長さです。

{% data reusables.projects.project-settings %}
1. 調整したい繰り返しフィールドの名前をクリックしてください。 ![繰り返しフィールドを表示しているスクリーンショット](/assets/images/help/projects-v2/select-iteration-field.png)
2. 繰り返しの上の分割線上の右で**Insert break（休憩の挿入）**をクリックしてください。 !["休憩の挿入"ボタンの場所を表示しているスクリーンショット](/assets/images/help/issues/iteration-insert-break.png)
3. あるいは、休憩の期間を変更するには、日付をクリックしてカレンダーを開いてください。 開始日をクリックし、続いて終了日をクリックし、そして**Apply（適用）**をクリックしてください。
4. [**Save changes**] をクリックします。 ![保存ボタンのスクリーンショット](/assets/images/help/projects-v2/iteration-save.png)
