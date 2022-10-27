---
title: ビューの管理
intro: プロジェクト ビューを作成、保存、管理する方法について説明します。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 9b3d7f4b12210841a0c55f3b0b7356da9b225416
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109563'
---
## プロジェクトビューの作成

プロジェクトビューを使うと、プロジェクトの特定の側面を素早く見ることができます。 それぞれのビューは、プロジェクト内の個別のタブに表示されます。 

たとえば、以下のようなビューを持つことができます:
- まだ開始されていないすべてのアイテムを表示するビュー（"Status"でフィルタ）。
- 各チームの作業負荷を表示するビュー（カスタムの"Team"フィールドでグループ化）。
- 最短のターゲット出荷日を持つアイテムを表示するビュー（日付フィールドでソート）。

新しいビューは以下のように追加します:

{% data reusables.projects.new-view %}

または、{% data variables.projects.command-palette-shortcut %} キーを押してプロジェクト コマンド パレットを開き、「New view」と入力を始めます。

新しいビューは自動的に保存されます。

## ビューの複製

既存のビューを複製し、それをベースとして使用して、さらに変更を加えることができます。

1. 複製するビューに切り替えます。
{% data reusables.projects.open-view-menu %}
1. [{% octicon "versions" aria-label="the versions icon" %} **ビューの複製**] をクリックします。
   ![複製のメニュー項目を示すスクリーンショット](/assets/images/help/projects-v2/duplicate-view.png)

## ビューへの変更の保存

ビューのデータのソート、並び替え、フィルタリング、グループ化など、ビューに変更を加えた場合、ビュー名の隣にはドットが表示され、保存されていない変更があることを示します。 

![未保存の変更インジケータ](/assets/images/help/projects/unsaved-changes.png)

変更を保存したくなければ、この表示は無視してかまいません。 この変更は他のユーザには見えません。

{% data reusables.projects.save-view %}

または、{% data variables.projects.command-palette-shortcut %} キーを押してプロジェクト コマンド パレットを開き、「Save view」と入力を始めます。

## 保存されたビューの並び替え

保存されたビューを含むタブの順序を変更するには、タブをクリックして新しい場所へドラッグします。 新しいタブの順序は自動的に保存されます。

## 保存されたビューの名前の変更

保存したビューの名前を変更できます。 名前の変更は自動的に保存されます。

1. 名前を変更するビューに切り替えます。
{% data reusables.projects.open-view-menu %}
1. [{% octicon "pencil" aria-label="the pencil icon" %} **ビューの名前変更**] をクリックします。
   ![名前変更のメニュー項目を示すスクリーンショット](/assets/images/help/projects-v2/rename-view.png)
1. ビューの新しい名前を入力します。
1. 変更を保存するには、<kbd>Return</kbd> キーを押します。

## 保存されたビューの削除

1. 削除するテナントに切り替えます。
{% data reusables.projects.open-view-menu %}
1. [{% octicon "trash" aria-label="the trasj icon" %} **ビューの削除**] をクリックします。
   ![項目の名前変更、削除を示すスクリーンショット](/assets/images/help/projects-v2/delete-view.png)

または、{% data variables.projects.command-palette-shortcut %} キーを押してプロジェクト コマンド パレットを開き、「Delete view」と入力を始めます。
