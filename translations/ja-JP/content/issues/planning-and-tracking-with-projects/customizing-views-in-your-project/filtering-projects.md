---
title: 'Filtering {% data variables.projects.projects_v2 %}'
intro: Use filters to choose which items appear in your project's views.
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

プロジェクトをフィルタするには、{% octicon "filter" aria-label="The Filter icon" %}をクリックし、フィルタリングしたいフィールドとその値を入力していってください。 入力していくと、利用できる値が表示されます。 You can also open the project command palette, by pressing {% data variables.projects.command-palette-shortcut %}, and type "Filter by" to choose from the available filters.

Using multiple filters will act as a logical AND filter. For example, `label:bug status:"In progress"` will return items with the `bug` label with the "In progress" status. {% data variables.product.prodname_projects_v2 %} does not currently support logical OR filters across multiple fields.

The same filters are available for charts you create using insights for {% data variables.product.prodname_projects_v2 %}, allowing you to filter the data used to create your charts. 詳しい情報については「[プロジェクトでのインサイトの利用](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects)」を参照してください。

## アイテムのフィルタリング

テーブルの上部にある{% octicon "filter" aria-label="the filter icon" %}をクリックして、"Filter by keyword or by field（キーワードもしくはフィールドでフィルタ）"バーを表示させてください。 フィルタに使いたいフィールド名及び値を入力し始めてください。 入力していくと、利用できる値が表示されます。

{% data reusables.projects.projects-filters %}

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Filter by."

ボードレイアウトでは、アイテムデータをクリックして、その値を持つアイテムにフィルタリングできます。 たとえば、アサインされた人をクリックして、そのアサインされた人のアイテムだけを表示させられます。 このフィルタを削除するには、そのアイテムデータをもう一度クリックします。
