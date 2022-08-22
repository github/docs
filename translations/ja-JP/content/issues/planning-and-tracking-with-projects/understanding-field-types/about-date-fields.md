---
title: 日付フィールドについて
shortTitle: 日付フィールドについて
intro: 日付を入力するか、カレンダーを使って設定できるカスタムの日付フィールドを作成できます。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
---

日付の値を、たとえば`date:2022-07-01`のような`YYYY-MM-DD`という形式を使ってフィルタリングできます。 `>`、`>=`、`<`、`<=`、`..`といった演算子を使うこともできます。 たとえば`date:>2022-07-01`や`date:2022-07-01..2022-07-31`のようにです。 `@today`としてフィルタ中で今日の日付を示すこともできます。 詳しい情報については「[プロジェクトのフィルタリング](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)」を参照してください。

## 日付フィールドの追加

{% data reusables.projects.new-field %}
1. **Date（日付）**を選択してください。 ![日付のオプションを表示しているスクリーンショット](/assets/images/help/projects-v2/new-field-date.png)
1. [**Save**] をクリックします。 ![保存ボタンを表示しているスクリーンショット](/assets/images/help/projects-v2/new-field-save.png)

または、{% data variables.projects.command-palette-shortcut %}を押してプロジェクトのコマンドパレットをオープンし、"Create new field"と入力していってください。
