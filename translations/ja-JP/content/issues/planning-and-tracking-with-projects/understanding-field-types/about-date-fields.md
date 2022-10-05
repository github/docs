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
ms.openlocfilehash: e5cdcbdfbc2e51949c22c27fb1071b6e931ee59a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147424101'
---
`YYYY-MM-DD` 形式 (`date:2022-07-01` など) を使用して、日付値をフィルター処理できます。 `>`、`>=`、`<`、`<=`、`..` などの演算子を使用することもできます。 たとえば、`date:>2022-07-01` や `date:2022-07-01..2022-07-31`す。 `@today` を指定して、フィルターで現在の日付を表すこともできます。 詳細については、[プロジェクトのフィルター処理](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)に関するページを参照してください。

## 日付フィールドの追加

{% data reusables.projects.new-field %}
1. **[日付]** を選びます
   ![[日付] オプションを示すスクリーンショット](/assets/images/help/projects-v2/new-field-date.png)
1. **[保存]** をクリックします。
   ![[保存] ボタンを示すスクリーンショット](/assets/images/help/projects-v2/new-field-save.png)

または、{% data variables.projects.command-palette-shortcut %} キーを押してプロジェクト コマンド パレットを開き、「Create new field」と入力し始めます。
