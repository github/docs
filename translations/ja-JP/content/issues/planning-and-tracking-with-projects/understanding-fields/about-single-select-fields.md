---
title: 単一選択フィールドについて
shortTitle: About single select fields
intro: ドロップダウン メニューから選べる定義済みのオプションを指定して、単一選択フィールドを作成できます。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-single-select-fields
ms.openlocfilehash: b401f11502185527444cd72fa3264fda51465116
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160283'
---
オプション (`fieldname:option` など) を指定して、単一選択フィールドでフィルター処理することができます。 オプションのコンマ区切りリスト (`fieldname:option,option` など) を指定して、複数の値をフィルター処理できます。 詳細については、[プロジェクトのフィルター処理](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)に関するページを参照してください。

単一選択フィールドには、最大 50 個のオプションを含めることができます。 

## 単一選択フィールドの追加

{% data reusables.projects.new-field %}
1. **[単一選択]** を選びます
   ![[単一選択] オプションを示すスクリーンショット](/assets/images/help/projects-v2/new-field-single-select.png)
1. [オプション] の下に、最初のオプションを入力します。
   ![単一選択オプションを示すスクリーンショット](/assets/images/help/projects-v2/single-select-create-with-options.png)
   - オプションをさらに追加するには、 **[オプションの追加]** をクリックします。
1. **[保存]** をクリックします。
   ![[保存] ボタンを示すスクリーンショット](/assets/images/help/projects-v2/new-field-save.png)

または、{% data variables.projects.command-palette-shortcut %} キーを押してプロジェクト コマンド パレットを開き、「Create new field」と入力し始めます。

## 単一選択フィールドの編集

{% data reusables.projects.project-settings %}
1. 調整する単一選択フィールドの名前をクリックします。
   ![単一選択フィールドを示すスクリーンショット](/assets/images/help/projects-v2/select-single-select.png)
1. 既存のオプションを編集するか、 **[オプションの追加]** をクリックします。
   ![単一選択オプションを示すスクリーンショット](/assets/images/help/projects-v2/single-select-edit-options.png)
1. 必要に応じて、オプションを削除するには、{% octicon "x" aria-label="The x icon" %} をクリックします。
   ![削除ボタンを示すスクリーンショット](/assets/images/help/projects-v2/single-select-delete.png)
1. **[オプションの保存]** をクリックします。
   ![保存ボタンを示すスクリーンショット](/assets/images/help/projects-v2/save-options.png)
