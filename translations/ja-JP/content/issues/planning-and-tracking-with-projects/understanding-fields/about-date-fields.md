---
title: 日付フィールドについて
shortTitle: About date fields
intro: 日付を入力するか、カレンダーを使用して設定できるカスタム日付フィールドを作成できます。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-date-fields
ms.openlocfilehash: d6057212941db8d20ed49f240052e5ad0fc8eb80
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160096'
---
`YYYY-MM-DD` 形式 (`date:2022-07-01` など) を使用して、日付値をフィルター処理できます。 `>`、`>=`、`<`、`<=`、`..` などの演算子を使用することもできます。 たとえば、`date:>2022-07-01` や `date:2022-07-01..2022-07-31`す。 `@today` を指定して、フィルターで現在の日付を表すこともできます。 詳細については、[プロジェクトのフィルター処理](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)に関するページを参照してください。

## 日付フィールドの追加

{% data reusables.projects.new-field %}
1. **[日付]** を選びます
   ![[日付] オプションを示すスクリーンショット](/assets/images/help/projects-v2/new-field-date.png)
1. **[保存]** をクリックします。
   ![[保存] ボタンを示すスクリーンショット](/assets/images/help/projects-v2/new-field-save.png)

または、{% data variables.projects.command-palette-shortcut %} キーを押してプロジェクト コマンド パレットを開き、「Create new field」と入力し始めます。
