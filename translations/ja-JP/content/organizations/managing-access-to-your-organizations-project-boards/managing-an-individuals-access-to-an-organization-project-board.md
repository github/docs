---
title: 'Organization の {% data variables.product.prodname_project_v1 %} への個人のアクセスを管理する'
intro: 'Organization オーナーまたは {% data variables.projects.projects_v1_board %} 管理者は、Organization が所有する {% data variables.projects.projects_v1_board %} への個々のメンバーのアクセス権を管理できます。'
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-project-board
  - /articles/managing-an-individuals-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage individual access
allowTitleToDifferFromFilename: true
ms.openlocfilehash: ceecfd317322f65541591f833c04f86d5b483c0e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109532'
---
{% data reusables.projects.project_boards_old %}

{% note %}

**注:** {% data reusables.project-management.cascading-permissions %} 詳しい情報については、「[Organization の {% data variables.product.prodname_project_v1_caps %} へのアクセス許可](/articles/project-board-permissions-for-an-organization)」を参照してください。 

{% endnote %}

## {% data variables.projects.projects_v1_board %} へのアクセス権を Organization メンバーに付与する

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. **[Project (classic)]** をクリックします{% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
9. [Search by username, full name or email address] で、コラボレーターの名前、ユーザ名、または {% data variables.product.prodname_dotcom %} メールを入力します。
   ![Octocat のユーザー名が検索フィールドに入力されている [コラボレーター] セクション](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %} {% data reusables.project-management.collaborator-permissions %}

## {% data variables.projects.projects_v1_board %} への Organization メンバーのアクセス権を変更する

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. **[Project (classic)]** をクリックします{% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.collaborator-permissions %}

## {% data variables.projects.projects_v1_board %} への Organization メンバーのアクセス権を削除する

コラボレーターを {% data variables.projects.projects_v1_board %} から削除しても、コラボレーターは引き続き他のロールに対するアクセス許可に基づいてボードにアクセスできる場合があります。 {% data variables.projects.projects_v1_board %} へのアクセス権を完全に削除するには、そのユーザーが持つ各ロールのアクセス権を削除する必要があります。 たとえば、ユーザーは、Organization メンバーまたは Team メンバーとして {% data variables.projects.projects_v1_board %} にアクセスできます。 詳しい情報については、「[Organization の {% data variables.product.prodname_project_v1_caps %} へのアクセス許可](/articles/project-board-permissions-for-an-organization)」を参照してください。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. **[Project (classic)]** をクリックします{% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}

## 参考資料

- 「[Organization の {% data variables.product.prodname_project_v1_caps %} へのアクセス許可](/articles/project-board-permissions-for-an-organization)」
