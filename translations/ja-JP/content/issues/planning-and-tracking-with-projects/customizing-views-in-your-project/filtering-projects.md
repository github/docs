---
title: '{% data variables.projects.projects_v2 %}のフィルタリング'
intro: フィルタを使ってプロジェクトのビューに表示されるアイテムを選択してください。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/filtering-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

Issueにアサインされた人やラベルといったアイテムのメタデータやプロジェクトのフィールドに対するフィルタを使って、ビューをカスタマイズできます。 フィルタを組み合わせて、ビューとして保存できます。 詳しい情報については「[プロジェクトのビューのカスタマイズ](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)」を参照してください。

プロジェクトをフィルタするには、{% octicon "filter" aria-label="The Filter icon" %}をクリックし、フィルタリングしたいフィールドとその値を入力していってください。 入力していくと、利用できる値が表示されます。 {% data variables.projects.command-palette-shortcut %}を押してプロジェクトのコマンドパレットをオープンし、"Filter by" と入力して利用可能なフィルターから選択することもできます。

複数のフィルタを使用すると、論理ANDのフィルタとして働きます。 たとえば、`label:bug status:"In progress"`は`bug`ラベルを持ち、"In progress"ステータスのアイテムを返します。 {% data variables.product.prodname_projects_v2 %}は、現在のところ複数のフィールドでの論理ORのフィルタをサポートしていません。

同じフィルタが、{% data variables.product.prodname_projects_v2 %}のインサイトを使って作成しているグラフでも利用でき、グラフを作成するために使われるデータをフィルタリングできます。 詳しい情報については「[プロジェクトでのインサイトの利用](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects)」を参照してください。

## アイテムのフィルタリング

テーブルの上部にある{% octicon "filter" aria-label="the filter icon" %}をクリックして、"Filter by keyword or by field（キーワードもしくはフィールドでフィルタ）"バーを表示させてください。 フィルタに使いたいフィールド名及び値を入力し始めてください。 入力していくと、利用できる値が表示されます。

{% data reusables.projects.projects-filters %}

または、{% data variables.projects.command-palette-shortcut %}を押してプロジェクトのコマンドパレットをオープンし、"Filter by"と入力していってください。

ボードレイアウトでは、アイテムデータをクリックして、その値を持つアイテムにフィルタリングできます。 たとえば、アサインされた人をクリックして、そのアサインされた人のアイテムだけを表示させられます。 このフィルタを削除するには、そのアイテムデータをもう一度クリックします。
