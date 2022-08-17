---
title: テキスト及び数値フィールドについて
shortTitle: テキスト及び数値フィールドについて
intro: プロジェクトに、カスタムのテキスト及び数値フィールドを追加できます。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
---

テキストフィールドを使ってノートやその他の自由形式のテキストをプロジェクトに含めることができます。

テキストフィールドは、たとえば`field:"exact text"`というようにフィルタで使うことができます。 テキストフィールドとアイテムのタイトルは、フィールドを指定せずにテキストに対してフィルタを掛けた場合にも使われます。

数値フィールドもフィルタで利用できます。 `>`、`>=`、`<`、`<=`、`..`といった範囲修飾子を数値フィールドでのフィルタリングのために利用できます。 たとえば`field:5..15`あるいは`field:>=20`といったようにできます。 詳しい情報については「[プロジェクトのフィルタリング](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)」を参照してください。

## テキストフィールドの追加

{% data reusables.projects.new-field %}
1. **Text（テキスト）**を選択してください。 ![テキストのオプションを表示しているスクリーンショット](/assets/images/help/projects-v2/new-field-text.png)
1. **Save（保存）**をクリックします。 ![保存ボタンを表示しているスクリーンショット](/assets/images/help/projects-v2/new-field-save.png)

または、{% data variables.projects.command-palette-shortcut %}を押してプロジェクトのコマンドパレットをオープンし、"Create new field"と入力していってください。

## 数値フィールドの追加

{% data reusables.projects.new-field %}
1. **Number（数値）**を選択してください。 ![数値のオプションを表示しているスクリーンショット](/assets/images/help/projects-v2/new-field-number.png)
1. **Save（保存）**をクリックします。 ![保存ボタンを表示しているスクリーンショット](/assets/images/help/projects-v2/new-field-save.png)

または、{% data variables.projects.command-palette-shortcut %}を押してプロジェクトのコマンドパレットをオープンし、"Create new field"と入力していってください。
