---
title: 'Quickstart for {% data variables.product.prodname_projects_v2 %}'
intro: 'Experience the speed, flexibility, and customization of {% data variables.product.prodname_projects_v2 %} by creating a project in this interactive guide.'
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

This guide demonstrates how to use {% data variables.product.prodname_projects_v2 %} to plan and track work. このガイドでは、新しいプロジェクトを作成し、タスクの優先度を追跡するためにカスタムフィールドを追加します。 また、コラボレータと優先度や進捗について伝えるための役に立つ、保存されるビューも作成します。

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

For more information and other ways to add issues to your project, or about other items you can add to your project, see "[Adding items to your project](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)."

## プロジェクトへのドラフトIssueの追加

次に、プロジェクトにドラフトIssueを追加してください。

{% data reusables.projects.add-draft-issue %}

## Adding an iteration field

Next, create an iteration field so you can plan and track your work over repeating blocks of time. Iterations can be configured to suit how you and your team works, with customizable lengths and the ability to insert breaks.

{% data reusables.projects.new-field %}
1. Select **Iteration** ![Screenshot showing the iteration option](/assets/images/help/projects-v2/new-field-iteration.png)
3. それぞれの繰り返しの期間を変更するには、新しい数値を入力し、ドロップダウンを選択して**days（日）**もしくは**weeks（週）**をクリックしてください。 ![Screenshot showing the iteration duration](/assets/images/help/projects-v2/iteration-field-duration.png)
4. [**Save**] をクリックします。 ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save-and-create.png)

## 優先度を追跡するためのフィールドの作成

Now, create a custom field named `Priority` and containing the values: `High`, `Medium`, or `Low`.

{% data reusables.projects.new-field %}
1. Select **Single select** ![Screenshot showing the single select option](/assets/images/help/projects-v2/new-field-single-select.png)
1. Below "Options", type the first option, "High". ![Screenshot showing the single select option](/assets/images/help/projects-v2/priority-example.png)
1. To add additional fields, for "Medium" and "Low", click **Add option**.
1. [**Save**] をクリックします。 ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save.png)

プロジェクト中のすべてのIssueに優先度を指定してください。

![優先度の例](/assets/images/help/projects/priority_example.png)

## 優先度によるIssueのグループ化

次に、高優先度のアイテムに集中しやすくするために、プロジェクト中のすべてのアイテムを優先度でグループ化します。

{% data reusables.projects.open-view-menu %}
1. Click {% octicon "rows" aria-label="the rows icon" %} **Group**. ![Screenshot showing the group menu item](/assets/images/help/projects-v2/group-menu-item.png)
1. Click **Priority**. ![Screenshot showing the group menu](/assets/images/help/projects-v2/group-menu.png)

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
1. Under "Layout", click **Board**. ![Screenshot showing layout option](/assets/images/help/projects-v2/table-or-board.png)

![優先度の例](/assets/images/help/projects/example_board.png)

レイアウトを変更すると、プロジェクトはそのビューが変更されたことを示すインジケーターを表示します。 このビューを保存して、あなたやコラボレータが将来簡単にアクセスできるようにしてください。

{% data reusables.projects.save-view %}

ビューの目的を示すために、分かりやすい名前を付けてください。

{% data reusables.projects.open-view-menu %}
1. Click {% octicon "pencil" aria-label="the pencil icon" %} **Rename view**. ![Screenshot showing the rename menu item](/assets/images/help/projects-v2/rename-view.png)
1. Type the new name for your view.
1. To save changes, press <kbd>Return</kbd>.

![優先度の例](/assets/images/help/projects/project-view-switch.gif)

## 組み込みの自動化の設定

最後に、組み込みのワークフローを追加して、アイテムがプロジェクトに追加されたときにステータスが**Todo**に設定されるようにしてください。

1. In the top-right, click {% octicon "kebab-horizontal" aria-label="The menu icon" %} to open the menu. ![Screenshot showing the menu icon](/assets/images/help/projects-v2/open-menu.png)
1. In the menu, click {% octicon "workflow" aria-label="The workflow icon" %} **Workflows**. ![Screenshot showing the 'Workflows' menu item](/assets/images/help/projects-v2/workflows-menu-item.png)
1. **Default workflows（デフォルトのワークフロー）**の下で、**Item added to project（アイテムがプロジェクトに追加）**をクリックしてください。 ![Screenshot showing default workflows](/assets/images/help/projects-v2/default-workflows.png)
1. **When（時期）**の隣で、`issues`と`pull requests`がどちらも選択されていることを確認してください。 ![Screenshot showing the "when" configuration for a workflow](/assets/images/help/projects-v2/workflow-when.png)
1. **Set（設定）**の隣で、**Status:Todo**を選択してください。 ![Screenshot showing the "set" configuration for a workflow](/assets/images/help/projects-v2/workflow-set.png)
1. **Disabled（無効）**トグルをクリックして、ワークフローを有効化してください。 ![Screenshot showing the "enable" control for a workflow](/assets/images/help/projects-v2/workflow-enable.png)

## 参考リンク

- "[Adding items to your project](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)"
- "[Customizing a view](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)"
