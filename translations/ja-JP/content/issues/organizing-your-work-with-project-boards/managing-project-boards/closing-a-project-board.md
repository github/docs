---
title: '{% data variables.product.prodname_project_v1 %} を閉じる'
intro: '{% data variables.projects.projects_v1_board %} のタスクをすべて完了した場合、または {% data variables.projects.projects_v1_board %} を使う必要がなくなった場合は、{% data variables.projects.projects_v1_board %} を閉じることができます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/closing-a-project-board
  - /articles/closing-a-project
  - /articles/closing-a-project-board
  - /github/managing-your-work-on-github/closing-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 21dfb0c6837f97d567f19168cd7f343aac06a4c0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109703'
---
{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_board %} を閉じると、構成されているワークフローの自動化は既定で一時停止します。

{% data variables.projects.projects_v1_board %} をもう一度開く場合は、自動化を "同期" することができます。これにより、ボードに対して構成されている自動化設定に従って、ボード上のカードの位置が更新されます。 詳しくは、「[閉じた {% data variables.product.prodname_project_v1 %} を再度開く](/articles/reopening-a-closed-project-board)」または「[{% data variables.product.prodname_projects_v1 %} の自動化について](/articles/about-automation-for-project-boards)」をご覧ください。

1. リポジトリまたは Organization 内の、または自分の個人アカウントによって所有されている、{% data variables.projects.projects_v1_boards %} の一覧に移動します。
2. プロジェクトの一覧で、閉じる {% data variables.projects.projects_v1_board %} の横にある {% octicon "chevron-down" aria-label="The chevron icon" %} をクリックします。
![プロジェクト ボードの名前の右にあるシェブロン アイコン](/assets/images/help/projects/project-list-action-chevron.png)
3. **[閉じる]** をクリックします。
![プロジェクト ボードのドロップダウン メニューにある [閉じる] 項目](/assets/images/help/projects/close-project.png)

## 参考資料

- [{% data variables.product.prodname_projects_v1 %} について](/articles/about-project-boards)
- [{% data variables.product.prodname_project_v1 %} の削除](/articles/deleting-a-project-board)
- [リポジトリで {% data variables.product.prodname_projects_v1 %} を無効にする](/articles/disabling-project-boards-in-a-repository)
- [Organization で {% data variables.product.prodname_projects_v1 %} を無効にする](/articles/disabling-project-boards-in-your-organization)
- [Organization の {% data variables.product.prodname_project_v1_caps %} へのアクセス許可](/articles/project-board-permissions-for-an-organization)
