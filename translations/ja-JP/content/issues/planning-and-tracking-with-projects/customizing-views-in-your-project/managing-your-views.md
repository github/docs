---
title: ビューの管理
intro: プロジェクトビューの作成、保存、管理の方法を学んでください。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
---


## プロジェクトビューの作成

プロジェクトビューを使うと、プロジェクトの特定の側面を素早く見ることができます。 それぞれのビューは、プロジェクト内の個別のタブに表示されます。

たとえば、以下のようなビューを持つことができます:
- まだ開始されていないすべてのアイテムを表示するビュー（"Status"でフィルタ）。
- 各チームの作業負荷を表示するビュー（カスタムの"Team"フィールドでグループ化）。
- 最短のターゲット出荷日を持つアイテムを表示するビュー（日付フィールドでソート）。

新しいビューは以下のように追加します:

{% data reusables.projects.new-view %}

または、{% data variables.projects.command-palette-shortcut %}を押してプロジェクトのコマンドパレットをオープンし、"New view"と入力していってください。

新しいビューは自動的に保存されます。

## ビューの複製

既存のビューを複製し、さらに変更を加えるための基盤として利用できます。

1. 複製したいビューに切り替えます。
{% data reusables.projects.open-view-menu %}
1. {% octicon "versions" aria-label="the versions icon" %} **Duplicate view（ビューの複製）**をクリックしてください。 ![複製メニューアイテムが表示されているスクリーンショット](/assets/images/help/projects-v2/duplicate-view.png)

## ビューへの変更の保存

ビューのデータのソート、並び替え、フィルタリング、グループ化など、ビューに変更を加えた場合、ビュー名の隣にはドットが表示され、保存されていない変更があることを示します。

![未保存の変更インジケータ](/assets/images/help/projects/unsaved-changes.png)

変更を保存したくなければ、この表示は無視してかまいません。 この変更は他のユーザには見えません。

{% data reusables.projects.save-view %}

または、{% data variables.projects.command-palette-shortcut %}を押してプロジェクトのコマンドパレットをオープンし、"Save view"と入力していってください。

## 保存されたビューの並び替え

保存されたビューを含むタブの順序を変更するには、タブをクリックして新しい場所へドラッグします。 新しいタブの順序は自動的に保存されます。

## 保存されたビューの名前の変更

保存したビューの名前を変更できます。 名前の変更は自動的に保存されます。

1. 名前を変更したいビューに切り替えます。
{% data reusables.projects.open-view-menu %}
1. {% octicon "pencil" aria-label="the pencil icon" %} **Rename view（ビューの名前の変更）**をクリックしてください。 ![名前の変更のメニューアイテムが表示されているスクリーンショット](/assets/images/help/projects-v2/rename-view.png)
1. ビューの新しい名前を入力してください。
1. 変更を保存するには<kbd>Return</kbd>を押してください。

## 保存されたビューの削除

1. 削除したいビューに切り替えます。
{% data reusables.projects.open-view-menu %}
1. {% octicon "trash" aria-label="the trasj icon" %} **Delete view（ビューの削除）**をクリックしてください。 ![削除アイテムを表示しているスクリーンショット](/assets/images/help/projects-v2/delete-view.png)

または、{% data variables.projects.command-palette-shortcut %}を押してプロジェクトのコマンドパレットをオープンし、"Delete view"と入力していってください。
