---
title: 'Organization メンバーの {% data variables.product.prodname_project_v1 %} へのアクセスを管理する'
intro: 'Organization オーナーまたは {% data variables.projects.projects_v1_board %} 管理者は、すべての Organization メンバーの {% data variables.projects.projects_v1_board %} に対する既定のアクセス許可レベルを設定できます。'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
  - /github/setting-up-and-managing-organizations-and-teams/managing-access-to-a-project-board-for-organization-members
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage access for members
allowTitleToDifferFromFilename: true
ms.openlocfilehash: fe9d8ebee09d4eb6278545b5561b9691a0468bf5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880783'
---
{% data reusables.projects.project_boards_old %}

既定では、Organization オーナーまたは {% data variables.projects.projects_v1_board %} 管理者が特定の {% data variables.projects.projects_v1_boards %} に対して別のアクセス許可を設定しない限り、Organization メンバーは、その Organization の {% data variables.projects.projects_v1_boards %} に対する書き込みアクセス権が付与されます。

## Organization のすべてのメンバーに対して標準の権限レベルを設定する

{% tip %}

**ヒント:** Organization メンバーに、{% data variables.projects.projects_v1_board %} に対するより高いアクセス許可を付与できます。 詳細については、「[Organization のプロジェクト ボード権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. **[Project (classic)]** をクリックします{% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
8. [Organization メンバーのアクセス許可] で、すべての Organization メンバーの基準の権限レベル (**読み取り**、**書き込み**、**管理者**、**なし** のいずれか) を選択します。
![Organization のすべてのメンバーのプロジェクト ボードに対する基準の権限オプション](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. **[保存]** をクリックします。

## 参考資料

- 「[Organization の {% data variables.product.prodname_project_v1 %} への個人のアクセスを管理する](/articles/managing-an-individual-s-access-to-an-organization-project-board)」
- 「[Organization の {% data variables.product.prodname_project_v1 %} への Team のアクセスを管理する](/articles/managing-team-access-to-an-organization-project-board)」
- 「[Organization の {% data variables.product.prodname_project_v1_caps %} へのアクセス許可](/articles/project-board-permissions-for-an-organization)」
