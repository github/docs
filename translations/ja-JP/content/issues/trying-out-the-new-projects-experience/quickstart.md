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
---

{% data reusables.projects.projects-beta %}

## はじめに

このガイドは、プロジェクト（ベータ）を使って作業を計画し、追跡する方法を紹介します。 このガイドでは、新しいプロジェクトを作成し、タスクの優先度を追跡するためにカスタムフィールドを追加します。 また、コラボレータと優先度や進捗について伝えるための役に立つ、保存されるビューも作成します。

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

新しいプロジェクトが初期化されると、プロジェクトにアイテムを追加するよう求められます。 このビューを逃したり、Issueは後で追加したい場合には、カーソルをプロジェクトの下部の行の{% octicon "plus" aria-label="plus icon" %}の隣に持ってきてください。

1. `#`と入力してください。
2. Issueがあるリポジトリを選択してください。 リポジトリ名の一部を入力すれば、選択肢を狭めることができます。
3. Issueを選択してください。 Issueのタイトルの一部を入力していって、選択肢を狭めることができます。

上記のステップを何回か繰り返し、複数のIssueをプロジェクトに追加してください。

プロジェクトにIssueを追加する他の方法、あるいはプロジェクトに追加できる他のアイテムに関する情報については、「[プロジェクトの作成](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-items-to-your-project)」を参照してください。

## プロジェクトへのドラフトIssueの追加

次に、プロジェクトにドラフトIssueを追加してください。

1. カーソルをプロジェクトの最下行、{% octicon "plus" aria-label="plus icon" %}の隣に持ってきてください。
1. アイデアを入力し、**Enter**を押してください。
1. ドラフトIssueのタイトルをクリックしてください。 表示されるMarkdownの入力ボックスに、アイデアに関する情報をもう少し入力し、**Save（保存）**をクリックしてください。

## 優先度を追跡するためのフィールドの作成

次に、`High`、`Medium`、`Low`のいずれかの値を含む`Priority`というカスタムフィールドを作成してください。

1. {% data reusables.projects.open-command-palette %}
2. "Create new field"のどこかを入力し始めてください。
3. **Create new field**を選択してください。
4. 表示されるポップアップで、テキストボックスに`Priority`と入力してください。
5. ドロップダウンで**Single select（単一選択）**を選択してください。
6. `High`、`Medium`、`Low`という選択肢を追加してください。 選択肢には絵文字を含めることもできます。 ![新しい単一選択フィールドの例](/assets/images/help/projects/new-single-select-field.png)
7. [**Save**] をクリックします。

プロジェクト中のすべてのIssueに優先度を指定してください。

![優先度の例](/assets/images/help/projects/priority_example.png)

## 優先度によるIssueのグループ化

次に、高優先度のアイテムに集中しやすくするために、プロジェクト中のすべてのアイテムを優先度でグループ化します。

1. {% data reusables.projects.open-command-palette %}
2. "Group by"のどこかを入力し始めてください。
3. **Group by: Priority**を選択してください。

さあ、優先度を変更するために、Issueをグループ間で移動させてください。

1. Issueを選択してください。
2. Issueを様々な優先度のグループにドラッグアンドドロップしてください。 こうすると、Issueの優先度は新しいグループの優先度に変更されます。

![グループ間でのIssueの移動](/assets/images/help/projects/move_between_group.gif)

## 優先度ビューの保存

前のステップにおいて優先度でIssueをグループ化すると、プロジェクトはビューが変更されたことを示すインジケーターを表示します。 コラボレータも優先度でグループ化されたタスクを見ることができるように、これらの変更を保存してください。

1. ビュー名の隣のドロップダウンメニューを選択してください。
2. [**Save changes**] をクリックします。

ビューの目的を示すために、分かりやすい名前を付けてください。

1. 現在のビュー名の**View 1**にカーソルを置いてください。
2. 既存のテキストを、新しい名前の`Priorities`で置き換えてください。

全員がプロジェクトの優先度に合わせていられるよう、TeamとこのURLを共有できます。

ビューが保存されると、プロジェクトをオープンした人は誰でもこの保存されたビューを見ることができます。 ここでは優先度でグループ化していますが、ソート、フィルタ、レイアウトなどの他の修飾子を追加することもできます。 次に、レイアウトを変更した新しいビューを作成しましょう。

## ボードレイアウトの追加

プロジェクトのIssueの進捗状況を見るには、ボードレイアウトに切り替えることができます。

ボードレイアウトはstatusフィールドに基づくので、プロジェクト中の各Issueのステータスを指定してください。

![ステータスの例](/assets/images/help/projects/status_example.png)

続いて、新しいビューを作成してください。

1. 右端のビューの隣にある{% octicon "plus" aria-label="the plus icon" %} **New view（新しいビュー）**をクリックしてください。

次に、ボードレイアウトに切り替えてください。

1. {% data reusables.projects.open-command-palette %}
2. "Switch layout: Board"のどこかを入力し始めてください。
3. **Switch layout: Board**を選択してください。 ![優先度の例](/assets/images/help/projects/example_board.png)

レイアウトを変更すると、プロジェクトはそのビューが変更されたことを示すインジケーターを表示します。 このビューを保存して、あなたやコラボレータが将来簡単にアクセスできるようにしてください。

1. ビュー名の隣のドロップダウンメニューを選択してください。
2. [**Save changes**] をクリックします。

ビューの目的を示すために、分かりやすい名前を付けてください。

1. 現在のビュー名の**View 2**にカーソルを置いてください。
2. 既存のテキストを、新しい名前の`Progress`で置き換えてください。

![優先度の例](/assets/images/help/projects/project-view-switch.gif)

## 組み込みの自動化の設定

最後に、組み込みのワークフローを追加して、アイテムがプロジェクトに追加されたときにステータスが**Todo**に設定されるようにしてください。

1. プロジェクトで{% octicon "workflow" aria-label="the workflow icon" %}をクリックしてください。
2. **Default workflows（デフォルトのワークフロー）**の下で、**Item added to project（アイテムがプロジェクトに追加）**をクリックしてください。
3. **When（時期）**の隣で、`issues`と`pull requests`がどちらも選択されていることを確認してください。
4. **Set（設定）**の隣で、**Status:Todo**を選択してください。
5. **Disabled（無効）**トグルをクリックして、ワークフローを有効化してください。

## 次のステップ

プロジェクトは、幅広い目的で利用できます。 例:

- リリースの作業の追跡
- スプリントの計画
- バックログの優先順位付け

{% data variables.product.prodname_github_issues %} で次のステップに進む際に役立つ、以下のようなリソースを参照してください。

- プロジェクト（ベータ）の体験のフィードバックを提供するには、[GitHubフィードバックリポジトリ](https://github.com/github/feedback/discussions/categories/issues-feedback)にアクセスしてください。
- プロジェクトがどのように計画や追跡に役立つかをさらに学ぶには、「[プロジェクトについて](/issues/trying-out-the-new-projects-experience/about-projects)」を参照してください。
- フィールドと、プロジェクトに追加できるアイテムについてさらに学ぶには、「[プロジェクトの作成](/issues/trying-out-the-new-projects-experience/creating-a-project)」を参照してください。
- 必要な情報を表示させる方法についてさらに学ぶには、「[プロジェクトのビューのカスタマイズ](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)」を参照してください。
