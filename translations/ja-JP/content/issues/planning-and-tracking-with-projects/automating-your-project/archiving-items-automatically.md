---
title: アイテムを自動的にアーカイブする
shortTitle: Archiving automatically
intro: 特定の条件を満たすアイテムを自動的にアーカイブするように、プロジェクトの組み込みワークフローを構成できます。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-auto-archive
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 75346021f51cb8cc373b4a50aef43e0b5c7646dc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107222'
---
{% note %}

**注:** 組み込みのワークフローは、制限付きベータの一部として利用できます。

{% endnote %}

## アイテムの自動アーカイブについて

アイテムを自動的にアーカイブするように、プロジェクトの組み込みワークフローを構成できます。 アイテムをアーカイブすると、各プロジェクトでの {% data variables.projects.item_limit %} アイテム数の制限を超えないようにするのに役立ちます。

`is`、`reason`、`last-updated` フィルターを使って、アイテムをアーカイブするタイミングを指定できます。

issue または pull request の自動アーカイブを有効にすると、プロジェクト内の既に条件を満たしているアイテムもアーカイブされます。 既に条件を満たしている多数のアイテムのアーカイブでは、若干の遅延が発生する可能性があります。

プロジェクトには、含むことができるアーカイブ済みアイテムの数に関する制限もあります。 プロジェクトは、アーカイブされたアイテムを最大 {% data variables.projects.archived_item_limit %} まで含むことができます。 アイテムの完全な削除について詳しくは、「[アイテムを削除する](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project#deleting-items)」をご覧ください。

## プロジェクトで自動アーカイブを構成する

{% data reusables.projects.access-workflows %}
1. [既定のワークフロー] の一覧で、 **[アイテムの自動アーカイブ]** をクリックします。
   
   ![自動アーカイブ ワークフローを示すスクリーンショット](/assets/images/help/projects-v2/archive-workflows.png)
   
1. **[いつ]** の横で、自動的にアーカイブするアイテムの種類をオンにします。
   
   ![ワークフローの [タイミング] 構成を示すスクリーンショット](/assets/images/help/projects-v2/workflow-when-archive.png)

1. {% octicon "filter" aria-label="The filter icon" %} の横に、アイテムの自動アーカイブに使うフィルター条件を入力します。 使用できるのは、`is`、`reason`、`last-updated` フィルターのみです。 フィルターの構文について詳しくは、「[projects のフィルター処理](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)」をご覧ください。
   
   ![フィルター テキスト領域を示すスクリーンショット](/assets/images/help/projects-v2/auto-archive-filter.png)
   
1. ワークフローが無効になっている場合は、 **[オフ]** の横にあるトグルをクリックしてワークフローを有効にします。
   
   ![ワークフローの "オン/オフ" コントロールを示すスクリーンショット](/assets/images/help/projects-v2/workflow-enable.png)
   

## 参考資料

* [プロジェクトからアイテムをアーカイブする](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project)
* [組み込みの自動化の使用](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)
