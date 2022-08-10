---
title: 単一選択フィールドについて
shortTitle: 単一選択フィールドについて
intro: ドロップダウンメニューから選択できる定義済みの選択肢で単一選択フィールドを作成できます。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
---

単一選択フィールドは、たとえば`fieldname:option`のようにオプションを指定してフィルタリングできます。 たとえば`fieldname:option,option`というように、カンマ区切りのリストのオプションを渡すことで、複数の値に対してフィルタリングできます。 詳しい情報については「[プロジェクトのフィルタリング](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)」を参照してください。

単一選択フィールドは、最大で50個の選択肢を含むことができます。

## 単一選択フィールドの追加

{% data reusables.projects.new-field %}
1. **Single select（単一選択）**を選択してください。 ![単一選択の選択肢を表示しているスクリーンショット](/assets/images/help/projects-v2/new-field-single-select.png)
1. "Options（選択肢）"の下で、最初の選択肢を入力してください。 ![単一選択の選択肢を表示しているスクリーンショット](/assets/images/help/projects-v2/single-select-create-with-options.png)
   - 選択肢を追加するには**Add option（選択肢の追加）**をクリックしてください。
1. [**Save**] をクリックします。 ![保存ボタンを表示しているスクリーンショット](/assets/images/help/projects-v2/new-field-save.png)

または、{% data variables.projects.command-palette-shortcut %}を押してプロジェクトのコマンドパレットをオープンし、"Create new field"と入力していってください。

## 単一選択フィールドの編集

{% data reusables.projects.project-settings %}
1. 調整したい単一選択フィールドの名前をクリックしてください。 ![単一選択フィールドを表示しているスクリーンショット](/assets/images/help/projects-v2/select-single-select.png)
1. 既存の選択肢を編集するか、**Add option（選択肢の追加）**をクリックしてください。 ![単一選択の選択肢を表示しているスクリーンショット](/assets/images/help/projects-v2/single-select-edit-options.png)
1. あるいは、選択肢を削除したい場合は{% octicon "x" aria-label="The x icon" %}をクリックしてください。 ![削除ボタンを表示しているスクリーンショット](/assets/images/help/projects-v2/single-select-delete.png)
1. **Save options（選択肢の保存）**をクリックしてください。 ![保存ボタンを表示しているスクリーンショット](/assets/images/help/projects-v2/save-options.png)
