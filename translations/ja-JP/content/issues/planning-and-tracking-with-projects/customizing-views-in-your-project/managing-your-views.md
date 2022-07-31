---
title: Managing your views
intro: 'Learn how to create, save, and manage your project views.'
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

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "New view."

新しいビューは自動的に保存されます。

## Duplicating a view

You can duplicate an existing view and use it as a base to make further changes.

1. Switch to the view you want to duplicate.
{% data reusables.projects.open-view-menu %}
1. Click {% octicon "versions" aria-label="the versions icon" %} **Duplicate view**. ![Screenshot showing the duplicate menu item](/assets/images/help/projects-v2/duplicate-view.png)

## ビューへの変更の保存

ビューのデータのソート、並び替え、フィルタリング、グループ化など、ビューに変更を加えた場合、ビュー名の隣にはドットが表示され、保存されていない変更があることを示します。

![未保存の変更インジケータ](/assets/images/help/projects/unsaved-changes.png)

変更を保存したくなければ、この表示は無視してかまいません。 この変更は他のユーザには見えません。

{% data reusables.projects.save-view %}

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Save view."

## 保存されたビューの並び替え

保存されたビューを含むタブの順序を変更するには、タブをクリックして新しい場所へドラッグします。 新しいタブの順序は自動的に保存されます。

## 保存されたビューの名前の変更

You can rename your saved views. 名前の変更は自動的に保存されます。

1. Switch to the view you want to rename.
{% data reusables.projects.open-view-menu %}
1. Click {% octicon "pencil" aria-label="the pencil icon" %} **Rename view**. ![Screenshot showing the rename menu item](/assets/images/help/projects-v2/rename-view.png)
1. Type the new name for your view.
1. To save your changes, press <kbd>Return</kbd>.

## 保存されたビューの削除

1. Switch to the view you want to delete.
{% data reusables.projects.open-view-menu %}
1. Click {% octicon "trash" aria-label="the trasj icon" %} **Delete view**. ![Screenshot showing the rename delete item](/assets/images/help/projects-v2/delete-view.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Delete view."
