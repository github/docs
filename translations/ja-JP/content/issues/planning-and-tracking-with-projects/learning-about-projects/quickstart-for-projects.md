---
title: '{% data variables.product.prodname_projects_v2 %} のクイック スタート'
intro: 'この対話型ガイドでプロジェクトを作成し、{% data variables.product.prodname_projects_v2 %} の速度、柔軟性、カスタマイズを体験します。'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/quickstart
type: quick_start
topics:
  - Projects
ms.openlocfilehash: 39798565419acaa831a996a0c86cc62f367f4bb7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109685'
---
## はじめに

このガイドでは、{% data variables.product.prodname_projects_v2 %} を使って作業を計画して追跡する方法を示します。 このガイドでは、新しいプロジェクトを作成し、タスクの優先度を追跡するためにカスタムフィールドを追加します。 また、コラボレータと優先度や進捗について伝えるための役に立つ、保存されるビューも作成します。

## 前提条件

Organizationプロジェクトもしくはユーザプロジェクトを作成できます。 Organizationプロジェクトを作成するには、{% data variables.product.prodname_dotcom %} Organizationが必要です。 Organization の作成の詳細については、「[新しい Organization をゼロから作成](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)」を参照してください。

このガイドでは、新しいプロジェクトに対して自分のOrganizationが所有するリポジトリから既存のIssueを追加する（Organizationプロジェクトの場合）か、自分が所有するリポジトリから追加（ユーザプロジェクトの場合）します。 Issue の作成の詳細については、「[Issue の作成](/issues/tracking-your-work-with-issues/creating-an-issue)」を参照してください。

## プロジェクトを作成する

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

プロジェクトに issue を追加するその他の方法、またはプロジェクトに追加できるその他のアイテムについて詳しくは、「[プロジェクトへのアイテムの追加](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)」を参照してください。

## プロジェクトへのドラフトIssueの追加

次に、プロジェクトにドラフトIssueを追加してください。

{% data reusables.projects.add-draft-issue %}

## 繰り返しフィールドの追加

次に、繰り返しフィールドを作成し、繰り返し時間ブロックで作業を計画して追跡できるようにします。 繰り返しは、自分とチームの作業に合わせて構成でき、長さをカスタマイズしたり、休憩を挿入することができます。

{% data reusables.projects.new-field %}
1. **[繰り返し]** を選びます
   ![[繰り返し] オプションを示すスクリーンショット](/assets/images/help/projects-v2/new-field-iteration.png)
3. 各イテレーションの期間を変更するには、新しい数値を入力し、ドロップダウンを選択して、**日** または **週** のいずれかをクリックします。
   ![繰り返し期間を示すスクリーンショット](/assets/images/help/projects-v2/iteration-field-duration.png)
4. **[保存]** をクリックします。
   ![[保存] ボタンを示すスクリーンショット](/assets/images/help/projects-v2/new-field-save-and-create.png)

## 優先度を追跡するためのフィールドの作成

次に、値 `High`、`Medium`、または `Low` を含む `Priority` という名前のカスタム フィールドを作成します。

{% data reusables.projects.new-field %}
1. **[単一選択]** を選びます
   ![[単一選択] オプションを示すスクリーンショット](/assets/images/help/projects-v2/new-field-single-select.png)
1. [オプション] の下に、最初のオプション [High] を入力します。
   ![[単一選択] オプションを示すスクリーンショット](/assets/images/help/projects-v2/priority-example.png)
1. フィールドをさらに追加するには、[Medium] と [Low] の **[オプションの追加]** をクリックします。
1. **[保存]** をクリックします。
   ![[保存] ボタンを示すスクリーンショット](/assets/images/help/projects-v2/new-field-save.png)

プロジェクト中のすべてのIssueに優先度を指定してください。

![優先度の例](/assets/images/help/projects/priority_example.png)

## 優先度によるIssueのグループ化

次に、高優先度のアイテムに集中しやすくするために、プロジェクト中のすべてのアイテムを優先度でグループ化します。

{% data reusables.projects.open-view-menu %}
1. [{% octicon "rows" aria-label="the rows icon" %} **グループ**] をクリックします。
   ![グループ メニュー項目を示すスクリーンショット](/assets/images/help/projects-v2/group-menu-item.png)
1. **[優先順位]** をクリックします。
   ![グループ メニューを示すスクリーンショット](/assets/images/help/projects-v2/group-menu.png)

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
1. [レイアウト] で、 **[ボード]** をクリックします。
   ![[レイアウト] オプションを示すスクリーンショット](/assets/images/help/projects-v2/table-or-board.png)

![優先度の例](/assets/images/help/projects/example_board.png)

レイアウトを変更すると、プロジェクトはそのビューが変更されたことを示すインジケーターを表示します。 このビューを保存して、あなたやコラボレータが将来簡単にアクセスできるようにしてください。

{% data reusables.projects.save-view %}

ビューの目的を示すために、分かりやすい名前を付けてください。

{% data reusables.projects.open-view-menu %}
1. [{% octicon "pencil" aria-label="the pencil icon" %} **ビューの名前変更**] をクリックします。
   ![名前変更のメニュー項目を示すスクリーンショット](/assets/images/help/projects-v2/rename-view.png)
1. ビューの新しい名前を入力します。
1. 変更を保存するには、<kbd>Return</kbd> キーを押します。

![優先度の例](/assets/images/help/projects/project-view-switch.gif)

## 組み込みの自動化の設定

最後に、組み込みのワークフローを追加して、アイテムがプロジェクトに追加されたときに状態が **Todo** に設定されるようにします。

1. 右上の {% octicon "kebab-horizontal" aria-label="The menu icon" %} をクリックして、メニューを開きます。
  ![メニュー アイコンを示すスクリーンショット](/assets/images/help/projects-v2/open-menu.png)
1. メニューで {% octicon "workflow" aria-label="The workflow icon" %} **[ワークフロー]** をクリックします。
  ![[ワークフロー] メニュー項目を示すスクリーンショット](/assets/images/help/projects-v2/workflows-menu-item.png)
1. **[既定のワークフロー]** で、 **[プロジェクトに追加されたアイテム]** をクリックします。
  ![[既定のワークフロー] を示すスクリーンショット](/assets/images/help/projects-v2/default-workflows.png)
1. **[タイミング]** の横で、`issues` と `pull requests` が両方選択されていることを確認します。
  ![ワークフローの [タイミング] 構成を示すスクリーンショット](/assets/images/help/projects-v2/workflow-when.png)
1. **[設定]** の横にある **[状態:Todo]** を選択します。
  ![ワークフローの [設定] 構成を示すスクリーンショット](/assets/images/help/projects-v2/workflow-set.png)
1. **[無効]** トグルをクリックしてワークフローを有効にします。
  ![ワークフローの [有効化] コントロールを示すスクリーンショット](/assets/images/help/projects-v2/workflow-enable.png)

## 参考資料

- [プロジェクトへのアイテムの追加](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)
- [ビューのカスタマイズ](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)
