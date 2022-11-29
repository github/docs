---
title: '{% data variables.product.prodname_projects_v1 %} の自動化を構成する'
intro: '指定したイベントが発生したら issue や pull request を {% data variables.projects.projects_v1_board %} の列に移動するように、自動ワークフローを設定できます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/configuring-automation-for-project-boards
  - /articles/configuring-automation-for-project-boards
  - /github/managing-your-work-on-github/configuring-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
  - Projects
  - Issues
  - Project management
shortTitle: Configure automation
type: how_to
allowTitleToDifferFromFilename: true
ms.openlocfilehash: faf559c3423178b43f3b524bbf3cdc41acd18a92
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109698'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %}詳しくは、「[{% data variables.product.prodname_projects_v1 %} の自動化について](/articles/about-automation-for-project-boards)」をご覧ください。

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.resync-automation %}

{% tip %}

**参考**: 自動化が既に構成されている列を編集するには、列の下にある **[管理]** をクリックします。

{% endtip %}

1. 自動化する {% data variables.projects.projects_v1_board %} に移動します。
2. 自動化する列で [{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}] をクリックします。
![[編集] アイコン](/assets/images/help/projects/edit-column-button.png)
3. **[自動化の管理]** をクリックします。
![[自動化の管理] ボタン](/assets/images/help/projects/manage-automation-button.png)
4. [Preset] ドロップダウンメニューで、自動化のプリセットを 1 つ選びます。
![メニューから自動化のプリセットを選択](/assets/images/help/projects/select-automation.png)
5. 列に設定したいワークフロー自動化を選択します。
![列の自動化オプションのリスト](/assets/images/help/projects/select-automation-options-existing-column.png)
6. **[自動化の更新]** をクリックします。

## 参考資料
- [{% data variables.product.prodname_projects_v1 %} の自動化について](/articles/about-automation-for-project-boards)
