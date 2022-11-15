---
title: テキストと数値フィールドについて
shortTitle: About text and number fields
intro: プロジェクトにカスタムのテキストと数値フィールドを追加できます。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-text-and-number-fields
ms.openlocfilehash: 531931f74afd1d4fdc206002742d8d27bca67dc4
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160088'
---
テキスト フィールドを使用して、プロジェクトに注釈やその他のフリーフォーム テキストを含めることができます。

テキスト フィールドは、`field:"exact text"` のようにフィルターで使用できます。 フィールドを指定せずにテキストをフィルター処理する場合は、テキスト フィールドと項目タイトルも使用されます。 

数値フィールドもフィルターで使用できます。 `>`、`>=`、`<`、`<=`、`..` 範囲クエリを使用して、数値フィールドでフィルター処理できます。 たとえば、`field:5..15` や `field:>=20` などです。 詳細については、[プロジェクトのフィルター処理](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)に関するページを参照してください。

## テキスト フィールドの追加

{% data reusables.projects.new-field %}
1. **[テキスト]** を選びます
   ![[テキスト] オプションを示すスクリーンショット](/assets/images/help/projects-v2/new-field-text.png)
1. **[保存]** をクリックします。
   ![[保存] ボタンを示すスクリーンショット](/assets/images/help/projects-v2/new-field-save.png)

または、{% data variables.projects.command-palette-shortcut %} キーを押してプロジェクト コマンド パレットを開き、「Create new field」と入力し始めます。

## 数値フィールドの追加

{% data reusables.projects.new-field %}
1. **[数値]** を選びます
   ![[数値] オプションを示すスクリーンショット](/assets/images/help/projects-v2/new-field-number.png)
1. **[保存]** をクリックします。
   ![[保存] ボタンを示すスクリーンショット](/assets/images/help/projects-v2/new-field-save.png)

または、{% data variables.projects.command-palette-shortcut %} キーを押してプロジェクト コマンド パレットを開き、「Create new field」と入力し始めます。
