---
title: プロジェクト（ベータ）のクイックスタート
intro: このインタラクティブガイドでプロジェクトを作成して、プロジェクト（ベータ）のスピード、柔軟性、カスタマイズを体験してください。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
- Projects
ms.openlocfilehash: 3baf341d38b59e20e6fe1e677e338d6bec1d57da
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145130939"
---
{% data reusables.projects.projects-beta %}

## <a name="introduction"></a>はじめに

このガイドは、プロジェクト（ベータ）を使って作業を計画し、追跡する方法を紹介します。 このガイドでは、新しいプロジェクトを作成し、タスクの優先度を追跡するためにカスタムフィールドを追加します。 また、コラボレータと優先度や進捗について伝えるための役に立つ、保存されるビューも作成します。

## <a name="prerequisites"></a>前提条件

Organizationプロジェクトもしくはユーザプロジェクトを作成できます。 Organizationプロジェクトを作成するには、{% data variables.product.prodname_dotcom %} Organizationが必要です。 Organization の作成の詳細については、「[新しい Organization をゼロから作成](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)」を参照してください。

このガイドでは、新しいプロジェクトに対して自分のOrganizationが所有するリポジトリから既存のIssueを追加する（Organizationプロジェクトの場合）か、自分が所有するリポジトリから追加（ユーザプロジェクトの場合）します。 Issue の作成の詳細については、「[Issue の作成](/issues/tracking-your-work-with-issues/creating-an-issue)」を参照してください。

## <a name="creating-a-project"></a>プロジェクトを作成する

まず、Organizationプロジェクトもしくはユーザプロジェクトを作成してください。

### <a name="creating-an-organization-project"></a>Organizationプロジェクトの作成

{% data reusables.projects.create-project %}

### <a name="creating-a-user-project"></a>ユーザプロジェクトの作成

{% data reusables.projects.create-user-project %}

## <a name="setting-your-project-description-and-readme"></a>プロジェクトの説明とREADMEの設定

{% data reusables.projects.project-description %}

## <a name="adding-issues-to-your-project"></a>プロジェクトへのIssueの追加

次に、いくつかのIssueをプロジェクトに追加してください。

新しいプロジェクトが初期化されると、プロジェクトにアイテムを追加するよう求められます。 このビューを逃したり、Issueは後で追加したい場合には、カーソルをプロジェクトの下部の行の{% octicon "plus" aria-label="plus icon" %}の隣に持ってきてください。

1. 「`#`.
2. Issueがあるリポジトリを選択してください。 リポジトリ名の一部を入力すれば、選択肢を狭めることができます。
3. Issueを選択してください。 Issueのタイトルの一部を入力していって、選択肢を狭めることができます。

上記のステップを何回か繰り返し、複数のIssueをプロジェクトに追加してください。

プロジェクトに Issue を追加するその他の方法、またはプロジェクトに追加できるその他のアイテムの詳細については、「[プロジェクトの作成](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-items-to-your-project)」を参照してください。

## <a name="adding-draft-issues-to-your-project"></a>プロジェクトへのドラフトIssueの追加

次に、プロジェクトにドラフトIssueを追加してください。

1. カーソルをプロジェクトの最下行、{% octicon "plus" aria-label="plus icon" %}の隣に持ってきてください。
1. アイデアを入力し、**Enter** キーを押します。
1. ドラフトIssueのタイトルをクリックしてください。 表示されるマークダウンの入力ボックスに、アイデアに関する情報をもう少し入力し、 **[保存]** をクリックします。

## <a name="creating-a-field-to-track-priority"></a>優先度を追跡するためのフィールドの作成

次に、値 `High`、`Medium`、`Low` を格納するために呼び出される `Priority` というカスタム フィールドを作成します。

1. {% data reusables.projects.open-command-palette %}
2. "Create new field"のどこかを入力し始めてください。
3. **[新しいルールの作成]** を選択します。
4. 表示されるポップアップで、テキスト ボックスに `Priority` を入力します。
5. ドロップダウンで **[単一選択]** を選択します。
6. オプションとして `High`、`Medium`、`Low` を追加します。 選択肢には絵文字を含めることもできます。
   ![新しい単一選択フィールドの例](/assets/images/help/projects/new-single-select-field.png)
7. **[保存]** をクリックします。

プロジェクト中のすべてのIssueに優先度を指定してください。

![優先度の例](/assets/images/help/projects/priority_example.png)

## <a name="grouping-issues-by-priority"></a>優先度によるIssueのグループ化

次に、高優先度のアイテムに集中しやすくするために、プロジェクト中のすべてのアイテムを優先度でグループ化します。

1. {% data reusables.projects.open-command-palette %}
2. "Group by"のどこかを入力し始めてください。
3. **[グループ化: 優先順位]** を選択します。

さあ、優先度を変更するために、Issueをグループ間で移動させてください。

1. Issueを選択してください。
2. Issueを様々な優先度のグループにドラッグアンドドロップしてください。 こうすると、Issueの優先度は新しいグループの優先度に変更されます。

![グループ間でのIssueの移動](/assets/images/help/projects/move_between_group.gif)

## <a name="saving-the-priority-view"></a>優先度ビューの保存

前のステップにおいて優先度でIssueをグループ化すると、プロジェクトはビューが変更されたことを示すインジケーターを表示します。 コラボレータも優先度でグループ化されたタスクを見ることができるように、これらの変更を保存してください。

1. ビュー名の隣のドロップダウンメニューを選択してください。
2. **[変更を保存]** をクリックします。

ビューの目的を示すために、分かりやすい名前を付けてください。

1. 現在のビュー名である **[View 1]** にカーソルを置きます。
2. 既存のテキストを新しい名前 `Priorities`に置き換えます。

全員がプロジェクトの優先度に合わせていられるよう、TeamとこのURLを共有できます。

ビューが保存されると、プロジェクトをオープンした人は誰でもこの保存されたビューを見ることができます。 ここでは優先度でグループ化していますが、ソート、フィルタ、レイアウトなどの他の修飾子を追加することもできます。 次に、レイアウトを変更した新しいビューを作成しましょう。

## <a name="adding-a-board-layout"></a>ボードレイアウトの追加

プロジェクトのIssueの進捗状況を見るには、ボードレイアウトに切り替えることができます。

ボードレイアウトはstatusフィールドに基づくので、プロジェクト中の各Issueのステータスを指定してください。

![ステータスの例](/assets/images/help/projects/status_example.png)

続いて、新しいビューを作成してください。

1. 右端のビューの隣にある {% octicon "plus" aria-label="the plus icon" %} **[新しいビュー]** をクリックします。

次に、ボードレイアウトに切り替えてください。

1. {% data reusables.projects.open-command-palette %}
2. "Switch layout: Board"のどこかを入力し始めてください。
3. **[レイアウトの切り替え: ボード]** を選択します。
   ![優先順位の例](/assets/images/help/projects/example_board.png)

レイアウトを変更すると、プロジェクトはそのビューが変更されたことを示すインジケーターを表示します。 このビューを保存して、あなたやコラボレータが将来簡単にアクセスできるようにしてください。

1. ビュー名の隣のドロップダウンメニューを選択してください。
2. **[変更を保存]** をクリックします。

ビューの目的を示すために、分かりやすい名前を付けてください。

1. 現在のビュー名である **[View 2]** にカーソルを置きます。
2. 既存のテキストを新しい名前 `Progress`に置き換えます。

![優先度の例](/assets/images/help/projects/project-view-switch.gif)

## <a name="configure-built-in-automation"></a>組み込みの自動化の設定

最後に、組み込みのワークフローを追加して、アイテムがプロジェクトに追加されたときに状態が **Todo** に設定されるようにします。

1. プロジェクトで{% octicon "workflow" aria-label="the workflow icon" %}をクリックしてください。
2. **[既定のワークフロー]** で、 **[プロジェクトに追加されたアイテム]** をクリックします。
3. **[タイミング]** の横で、`issues` と `pull requests` が両方選択されていることを確認します。
4. **[設定]** の横にある **[状態:Todo]** を選択します。
5. **[無効]** トグルをクリックしてワークフローを有効にします。

## <a name="next-steps"></a>次のステップ

プロジェクトは、幅広い目的で利用できます。 次に例を示します。

- リリースの作業の追跡
- スプリントの計画
- バックログの優先順位付け

{% data variables.product.prodname_github_issues %} で次のステップを実行するための役立つリソースを、いくつか次に示します。

- プロジェクト (ベータ) エクスペリエンスに関するフィードバックをお送りいただくには、[GitHub フィードバック リポジトリ](https://github.com/github/feedback/discussions/categories/issues-feedback)に移動してください。
- プロジェクトが計画と追跡に役立つしくみの詳細については、「[プロジェクトについて](/issues/trying-out-the-new-projects-experience/about-projects)」を参照してください。
- プロジェクトに追加できるフィールドとアイテムの詳細については、「[プロジェクトの作成](/issues/trying-out-the-new-projects-experience/creating-a-project)」を参照してください。
- 必要な情報を表示する方法の詳細については、「[プロジェクト ビューのカスタマイズ](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)」を参照してください。
