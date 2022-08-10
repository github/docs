---
title: '{% data variables.product.prodname_projects_v2 %}のクイックスタート'
intro: 'このインタラクティブガイドでプロジェクトを作成して、{% data variables.product.prodname_projects_v2 %}のスピード、柔軟性、カスタマイズを体験してください。'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/quickstart
type: quick_start
topics:
  - Projects
---

## はじめに

このガイドは、作業を計画して追跡するための{% data variables.product.prodname_projects_v2 %}の使い方を紹介します。 このガイドでは、新しいプロジェクトを作成し、タスクの優先度を追跡するためにカスタムフィールドを追加します。 また、コラボレータと優先度や進捗について伝えるための役に立つ、保存されるビューも作成します。

## 必要な環境

Organizationプロジェクトもしくはユーザプロジェクトを作成できます。 Organizationプロジェクトを作成するには、{% data variables.product.prodname_dotcom %} Organizationが必要です。 Organizationの作成に関する詳しい情報については「[新しいOrganizationを最初から作成する](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) 」を参照してください。

このガイドでは、新しいプロジェクトに対して自分のOrganizationが所有するリポジトリから既存のIssueを追加する（Organizationプロジェクトの場合）か、自分が所有するリポジトリから追加（ユーザプロジェクトの場合）します。 Issueの作成に関する詳しい情報については「[Issueの作成](/issues/tracking-your-work-with-issues/creating-an-issue)」を参照してください。

## プロジェクトの作成

まず、Organizationプロジェクトもしくはユーザプロジェクトを作成してください。

### Organizationプロジェクトの作成

{% data reusables.projects.create-project %}

### ユーザプロジェクトの作成

{% data reusables.projects.create-user-project %}

## プロジェクトの説明とREADMEの設定

{% data reusables.projects.project-description %}

## プロジェクトへのIssueの追加

次に、いくつかのIssueをプロジェクトに追加してください。

{% data reusables.projects.add-item-via-paste %}

上記のステップを何回か繰り返し、複数のIssueをプロジェクトに追加してください。

プロジェクトにIssueを追加する他の方法、あるいはプロジェクトに追加できる他のアイテムに関する情報については、「[プロジェクトへのアイテムの追加](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)」を参照してください。

## プロジェクトへのドラフトIssueの追加

次に、プロジェクトにドラフトIssueを追加してください。

{% data reusables.projects.add-draft-issue %}

## 繰り返しフィールドの追加

次に、繰り返しフィールドを作成して、繰り返される時間のブロックに対して作業を計画して追跡できるようにしましょう。 繰り返しは、長さがカスタマイズ可能で休憩を挟むことがき、あなたとあなたのチームの作業に合わせて設定できます。

{% data reusables.projects.new-field %}
1. **Iteration（繰り返し）**を選択してください。 ![繰り返しのオプションを表示しているスクリーンショット](/assets/images/help/projects-v2/new-field-iteration.png)
3. それぞれの繰り返しの期間を変更するには、新しい数値を入力し、ドロップダウンを選択して**days（日）**もしくは**weeks（週）**をクリックしてください。 ![繰り返しの期間を表示しているスクリーンショット](/assets/images/help/projects-v2/iteration-field-duration.png)
4. [**Save**] をクリックします。 ![保存ボタンを表示しているスクリーンショット](/assets/images/help/projects-v2/new-field-save-and-create.png)

## 優先度を追跡するためのフィールドの作成

さあ、`High`、`Medium`、`Low`のいずれかの値を含む`Priority`という名前のカスタムフィールドを作成してください。

{% data reusables.projects.new-field %}
1. **Single select（単一選択）**を選択してください。 ![単一選択オプションを表示しているスクリーンショット](/assets/images/help/projects-v2/new-field-single-select.png)
1. "Options（オプション）"の下で、最初の選択肢の"High"を入力してください。 ![単一選択オプションを表示しているスクリーンショット](/assets/images/help/projects-v2/priority-example.png)
1. "Medium"と"Low"のためのフィールドを追加するため、**Add option（選択肢の追加）**をクリックしてください。
1. [**Save**] をクリックします。 ![保存ボタンを表示しているスクリーンショット](/assets/images/help/projects-v2/new-field-save.png)

プロジェクト中のすべてのIssueに優先度を指定してください。

![優先度の例](/assets/images/help/projects/priority_example.png)

## 優先度によるIssueのグループ化

次に、高優先度のアイテムに集中しやすくするために、プロジェクト中のすべてのアイテムを優先度でグループ化します。

{% data reusables.projects.open-view-menu %}
1. {% octicon "rows" aria-label="the rows icon" %} **Group（グループ）**をクリックしてください。 ![グループメニューアイテムを表示しているスクリーンショット](/assets/images/help/projects-v2/group-menu-item.png)
1. **Priority（優先度）**をクリックしてください。 ![グループメニューを表示しているスクリーンショット](/assets/images/help/projects-v2/group-menu.png)

さあ、優先度を変更するために、Issueをグループ間で移動させてください。

1. Issueを選択してください。
2. Issueを様々な優先度のグループにドラッグアンドドロップしてください。 こうすると、Issueの優先度は新しいグループの優先度に変更されます。

![グループ間でのIssueの移動](/assets/images/help/projects/move_between_group.gif)

## 優先度ビューの保存

前のステップにおいて優先度でIssueをグループ化すると、プロジェクトはビューが変更されたことを示すインジケーターを表示します。 コラボレータも優先度でグループ化されたタスクを見ることができるように、これらの変更を保存してください。

{% data reusables.projects.save-view %}

全員がプロジェクトの優先度に合わせていられるよう、TeamとこのURLを共有できます。

ビューが保存されると、プロジェクトをオープンした人は誰でもこの保存されたビューを見ることができます。 ここでは優先度でグループ化していますが、ソート、フィルタ、レイアウトなどの他の修飾子を追加することもできます。 次に、レイアウトを変更した新しいビューを作成しましょう。

## ボードレイアウトの追加

プロジェクトのIssueの進捗状況を見るには、ボードレイアウトに切り替えることができます。

ボードレイアウトはstatusフィールドに基づくので、プロジェクト中の各Issueのステータスを指定してください。

![ステータスの例](/assets/images/help/projects/status_example.png)

続いて、新しいビューを作成してください。

{% data reusables.projects.new-view %}

次に、ボードレイアウトに切り替えてください。

{% data reusables.projects.open-view-menu %}
1. "Layout（レイアウト）"の下で、**Board（ボード）**をクリックしてください。 ![レイアウトオプションを表示しているスクリーンショット](/assets/images/help/projects-v2/table-or-board.png)

![優先度の例](/assets/images/help/projects/example_board.png)

レイアウトを変更すると、プロジェクトはそのビューが変更されたことを示すインジケーターを表示します。 このビューを保存して、あなたやコラボレータが将来簡単にアクセスできるようにしてください。

{% data reusables.projects.save-view %}

ビューの目的を示すために、分かりやすい名前を付けてください。

{% data reusables.projects.open-view-menu %}
1. {% octicon "pencil" aria-label="the pencil icon" %} **Rename view（ビューの名前の変更）**をクリックしてください。 ![名前の変更のメニューアイテムが表示されているスクリーンショット](/assets/images/help/projects-v2/rename-view.png)
1. ビューの新しい名前を入力してください。
1. 変更を保存するために<kbd>Return</kbd>を押してください。

![優先度の例](/assets/images/help/projects/project-view-switch.gif)

## 組み込みの自動化の設定

最後に、組み込みのワークフローを追加して、アイテムがプロジェクトに追加されたときにステータスが**Todo**に設定されるようにしてください。

1. 右上で{% octicon "kebab-horizontal" aria-label="The menu icon" %}をクリックしてメニューを開いてください。 ![メニューアイコンを表示しているスクリーンショット](/assets/images/help/projects-v2/open-menu.png)
1. メニューで{% octicon "workflow" aria-label="The workflow icon" %} **Workflows（ワークフロー）**をクリックしてください。 !['Workflows'メニューアイテムを表示しているスクリーンショット](/assets/images/help/projects-v2/workflows-menu-item.png)
1. **Default workflows（デフォルトのワークフロー）**の下で、**Item added to project（アイテムがプロジェクトに追加）**をクリックしてください。 ![デフォルトのワークフローを表示しているスクリーンショット](/assets/images/help/projects-v2/default-workflows.png)
1. **When（時期）**の隣で、`issues`と`pull requests`がどちらも選択されていることを確認してください。 ![ワークフローの"when"設定を表示しているスクリーンショット](/assets/images/help/projects-v2/workflow-when.png)
1. **Set（設定）**の隣で、**Status:Todo**を選択してください。 ![ワークフローの"set"設定を表示しているスクリーンショット](/assets/images/help/projects-v2/workflow-set.png)
1. **Disabled（無効）**トグルをクリックして、ワークフローを有効化してください。 ![ワークフローの"enable"コントロールを表示しているスクリーンショット](/assets/images/help/projects-v2/workflow-enable.png)

## 参考リンク

- 「[プロジェクトへのアイテムの追加](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)」
- 「[ビューのカスタマイズ](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)」
