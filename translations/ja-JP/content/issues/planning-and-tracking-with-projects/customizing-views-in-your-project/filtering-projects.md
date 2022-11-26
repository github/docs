---
title: '{% data variables.projects.projects_v2 %}のフィルター処理'
intro: フィルターを使用して、プロジェクトのビューに表示する項目を選びます。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/filtering-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: b1c04738a3c03d892b360c3b23def694d202ee0c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109025'
---
Issueにアサインされた人やラベルといったアイテムのメタデータやプロジェクトのフィールドに対するフィルタを使って、ビューをカスタマイズできます。 フィルタを組み合わせて、ビューとして保存できます。 詳しくは、「[プロジェクトのビューのカスタマイズ](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)」をご覧ください。

プロジェクトをフィルタするには、{% octicon "filter" aria-label="The Filter icon" %}をクリックし、フィルタリングしたいフィールドとその値を入力していってください。 入力していくと、利用できる値が表示されます。 また、{% data variables.projects.command-palette-shortcut %} キーを押してプロジェクト コマンド パレットを開き、「Filter by」と入力して、使用可能なフィルターから選ぶこともできます。

複数のフィルターを使用すると、論理 AND フィルターとして機能します。 たとえば、`label:bug status:"In progress"` とすると、"進行中" 状態の `bug` ラベルの付いた項目が返されます。 現在、{% data variables.product.prodname_projects_v2 %} で複数のフィールドにわたる論理 OR フィルターはサポートされていません。

{% data variables.product.prodname_projects_v2 %} の分析情報を使用して作成するグラフでも同じフィルターを使用でき、グラフの作成に使用するデータをフィルター処理できます。 詳しくは、「[プロジェクトのインサイトの利用](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects)」をご覧ください。

## アイテムのフィルタリング

テーブルの上部にある{% octicon "filter" aria-label="the filter icon" %}をクリックして、"Filter by keyword or by field（キーワードもしくはフィールドでフィルタ）"バーを表示させてください。 フィルタに使いたいフィールド名及び値を入力し始めてください。 入力していくと、利用できる値が表示されます。

{% data reusables.projects.projects-filters %}

または、{% data variables.projects.command-palette-shortcut %} キーを押してプロジェクト コマンド パレットを開き、「Filter by」と入力を始めます。

ボードレイアウトでは、アイテムデータをクリックして、その値を持つアイテムにフィルタリングできます。 たとえば、アサインされた人をクリックして、そのアサインされた人のアイテムだけを表示させられます。 このフィルタを削除するには、そのアイテムデータをもう一度クリックします。
