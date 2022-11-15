---
title: '{% data variables.projects.project_v2 %} からのアイテムのアーカイブ'
shortTitle: Archiving items
intro: アイテムをアーカイブし、復元に使用できるようにしておいたり、完全に削除したりすることができます。
miniTocMaxHeadingLevel: 2
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 2348805c920e456e2b8388c2ac41d4badd757703
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107718'
---
## アイテムのアーカイブ

アイテムをアーカイブして、そのアイテムに関するコンテキストをプロジェクト中に保持しながら、アイテムをプロジェクトのビューから削除できます。 {% ifversion projects-v2-auto-archive %}また、特定の条件を満たすアイテムを自動的にアーカイブするように、プロジェクトの組み込みワークフローを構成することもできます。 詳しくは、「[アイテムを自動的にアーカイブする](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically)」を参照してください。{% endif %}

{% data reusables.projects.select-an-item %} {% data reusables.projects.open-item-menu %}
1. **[アーカイブ]** をクリックします。
   ![[アーカイブ] オプションを示すスクリーンショット](/assets/images/help/projects-v2/archive-menu-item.png)
1. メッセージが表示されたら、 **[アーカイブ]** をクリックして選択を確定します。
   ![[アーカイブ] プロンプトを示すスクリーンショット](/assets/images/help/projects-v2/archive-item-prompt.png)

## アーカイブされたアイテムのリストア

1. プロジェクトにアクセスします。
1. 右上の {% octicon "kebab-horizontal" aria-label="The menu icon" %} をクリックして、メニューを開きます。
  ![メニュー アイコンを示すスクリーンショット](/assets/images/help/projects-v2/open-menu.png)
1. メニューで、[{% octicon "archive" aria-label="The archive icon" %} **アーカイブ済みアイテム]** をクリックします。
  ![[アーカイブ済みアイテム] メニュー項目を示すスクリーンショット](/assets/images/help/projects-v2/archived-items-menu-item.png)
1. 表示されるアーカイブされたアイテムをフィルター処理する必要がある場合は、アイテムの一覧の上にあるテキスト ボックスにフィルターを入力します。 使用可能なフィルターについて詳しくは、「[プロジェクトのフィルタリング](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)」をご覧ください。
   ![アーカイブされたアイテムをフィルター処理するためのフィールドを示すスクリーンショット](/assets/images/help/issues/filter-archived-items.png)   
1. 各アイテムのタイトルの左側で、復元するアイテムを選びます。
   ![アーカイブされたアイテムの横にあるチェック ボックスを示すスクリーンショット](/assets/images/help/issues/select-archived-item.png)   
1. 選んだアイテムを復元するには、アイテムの一覧の上にある **[復元]** をクリックします。 
   ![[復元] ボタンを示すスクリーンショット](/assets/images/help/issues/restore-archived-item-button.png)

## アイテムを削除する

アイテムを削除すれば、それをプロジェクトから完全に取り除くことができます。

{% data reusables.projects.select-an-item %} {% data reusables.projects.open-item-menu %}
1. **[プロジェクトから削除]** をクリックします。
   ![削除オプションを示すスクリーンショット](/assets/images/help/projects-v2/delete-menu-item.png)
1. メッセージが表示されたら、 **[削除]** をクリックして選択を確定します。
   ![[削除] プロンプトを示すスクリーンショット](/assets/images/help/projects-v2/delete-item-prompt.png)
