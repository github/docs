---
title: '{% data variables.projects.project_v2 %} をチームに追加する'
shortTitle: 'Adding a {% data variables.projects.project_v2 %} to a team'
intro: プロジェクトをチームに追加することで、アクセス許可を管理し、プロジェクトの検出可能性を向上させることができます。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-add-to-team
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners or people with the team maintainer role and admin permissions on a project can add a project to a team.
ms.openlocfilehash: 21e0944c95949aedf9a0039ef7b576b8840635b1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108802'
---
## チームへのプロジェクトの追加について

プロジェクトをチームに追加することで、チームのコラボレーター全員がそれぞれのプロジェクトにアクセスできるようにすることができます。 プロジェクトをチームに追加すると、そのプロジェクトはチームのプロジェクト ページに一覧表示されます。これにより、メンバーは特定のチームが使用しているプロジェクトを簡単に識別できます。

チームがプロジェクトに追加されると、彼らにはそのプロジェクトに対する読み取りアクセス許可が付与されます。 このアクセス許可が、プロジェクトに対する、および個々のチーム メンバーに対する既存のアクセス許可に追加されると、より高いアクセス許可が確実に保持されます。 チームおよび個々の共同作成者用のアクセス許可の設定方法について詳しくは、「[プロジェクトへのアクセスの管理](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)」を参照してください。

## チームへのプロジェクトの追加

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
1. {% octicon "project" aria-label="The Projects icon" %} **[プロジェクト]** をクリックします。
   
   ![[チーム プロジェクト] タブを示すスクリーンショット](/assets/images/help/organizations/team-project-board-button.png)
   
1. **[プロジェクトの追加]** をクリックします。
   
   ![[プロジェクトの追加] ボタンを示すスクリーンショット](/assets/images/help/organizations/team-project-add-project.png)
   
1. 追加するプロジェクトの名前の入力を開始して、一覧から一致するプロジェクトを選びます。  
   
   {% note %}
   
   **注:** この変更により、チーム メンバーのプロジェクト アクセス許可が増える場合、{% data variables.product.product_name %} から選択を確認するように求められます。
   
   {% endnote %}
   
   ![[プロジェクトの追加] フォームを示すスクリーンショット。](/assets/images/help/organizations/team-project-search.png)
   

## チームからのプロジェクトの削除

{% data reusables.projects.project-settings %}
1. **[アクセスの管理]** をクリックします。
   
   ![[アクセスの管理] 項目を示すスクリーンショット](/assets/images/help/projects-v2/manage-access.png)
   
1. プロジェクトから削除するチームの横にある **[削除]** をクリックします。
   
   ![コラボレーターの削除を示すスクリーンショット](/assets/images/help/projects-v2/access-remove-member.png)
   

{% ifversion projects-v1 %}

## 参考資料

- [Organization の {% data variables.product.prodname_project_v1 %} への Team のアクセスを管理する](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)

{% endif %}
