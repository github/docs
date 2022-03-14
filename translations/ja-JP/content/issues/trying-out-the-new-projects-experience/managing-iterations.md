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
---

{% data reusables.projects.projects-beta %}

## 繰り返しについて

繰り返しフィールドを作成して、アイテムを特定の繰り返し時間ブロックに関連づけることができます。 繰り返しは任意の長さに設定でき、休憩を含められ、名前と日付の範囲を変更するために個別に編集できます。 プロジェクトでは、繰り返しでグループ化を行い、今後の作業のバランスを視覚化し、フィルタを使って繰り返しの1つに焦点を当て、繰り返しで並べ替えできます。

最初に繰り返しフィールドを作成すると、3回の繰り返しが自動的に作成されます。  プロジェクトの設定ページから、繰り返しを追加したり、他の変更をしたりできます。

![Screenshot showing the settings for an iteration field](/assets/images/help/issues/iterations-example.png)

## 繰り返しフィールの作成

コマンドパレットを使って、あるいはプロジェクトのインターフェースを通じて繰り返しフィールドを作成できます。

1. {% data reusables.projects.open-command-palette %} "Create new field"のどこかを入力し始めてください。 コマンドパレットに"Create new field"が表示されたら、選択してください。

   あるいは、右端のフィールドヘッダの{% octicon "plus" aria-label="the plus icon" %}をクリックしてください。 プロジェクトのフィールドのドロップダウンメニューが表示されます。 **New field（新規フィールド）**をクリックしてください。
1. テキストボックスに新しい繰り返しフィールドの名前を入力してください。
1. 下のドロップダウンメニューを選択し、**Iteration（繰り返し）**を選択してください。
1. あるいは、開始日を現在の日付から変更したい場合には、"Starts on（開始）"の隣のカレンダードロップダウンを選択し、新しい開始日をクリックしてください。
2. それぞれの繰り返しの期間を変更するには、新しい数値を入力し、ドロップダウンを選択して**days（日）**もしくは**weeks（週）**をクリックしてください。
3. **Save & create（保存して作成）**をクリックしてください。

## 新しい繰り返しの追加

{% data reusables.projects.project-settings %}
1. 調整したい繰り返しフィールドの名前をクリックしてください。
1. 同じ期間の新しい繰り返しを追加したいなら、**Add iteration（繰り返しの追加）**をクリックしてください。
1. あるいは、新しい繰り返しの期間と開始時点をカスタマイズしたいなら、"Add iteration（繰り返しの追加）"の隣の{% octicon "triangle-down" aria-label="The triangle icon" %}をクリックし、開始日と期間を選択し、**Add（追加）**をクリックしてください。
1. [**Save changes**] をクリックします。

## 繰り返しの編集

繰り返しは、プロジェクトの設定で編集できます。 繰り返しフィールドの設定には、フィールドの表ヘッダ内の{% octicon "triangle-down" aria-label="The triangle icon" %}をクリックし、**Edit values（値の編集）**をクリックしてもアクセスできます。

{% data reusables.projects.project-settings %}
1. 調整したい繰り返しフィールドの名前をクリックしてください。
1. 繰り返しの名前を変更するには、名前をクリックして入力していってください。
1. To change the date or duration of an iteration, click on the date to open the calendar. Click on the start day, then click the end day, and then click **Apply**.
1. Optionally, to delete an iteration, click {% octicon "trash" aria-label="The trash icon" %}.
1. [**Save changes**] をクリックします。

## Inserting a break

You can insert breaks into your iterations to communicate when you are taking time away from scheduled work. The duration of a new break defaults to the length of the most recently created iteration.

{% data reusables.projects.project-settings %}
1. 調整したい繰り返しフィールドの名前をクリックしてください。
2. On the dividing line above an iteration and to the right, click **Insert break**. ![Screenshot showing location of "Insert break" button](/assets/images/help/issues/iteration-insert-break.png)
3. Optionally, to change the duration of the break, click on the date to open the calendar. Click on the start day, then click the end day, and then click **Apply**.
4. [**Save changes**] をクリックします。
