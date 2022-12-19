---
title: 'Organization の {% data variables.product.prodname_project_v1 %} への Team のアクセスを管理する'
intro: 'Organization オーナーまたは {% data variables.projects.projects_v1_board %} 管理者は、Organization が所有する {% data variables.projects.projects_v1_board %} へのアクセス権を Team に付与できます。'
redirect_from:
  - /articles/managing-team-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team access
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c49fab76bbf286f865e3845356213bc1af18b20a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109459'
---
{% data reusables.projects.project_boards_old %}

{% warning %}

**警告:**
- Team が {% data variables.projects.projects_v1_board %} に直接アクセスできる場合、そのチームのアクセス許可レベルを変更できます。 {% data variables.projects.projects_v1_board %} への Team のアクセスが親 Team から継承された場合、{% data variables.projects.projects_v1_board %} への親 Team のアクセスを変更する必要があります。
- 親 Team の {% data variables.projects.projects_v1_board %} へのアクセスを追加または削除した場合、その親の各子 Team も {% data variables.projects.projects_v1_board %} へのアクセスを受け取るか、または失います。 詳細については、「[Team について](/articles/about-teams)」を参照してください。

{% endwarning %}

## {% data variables.projects.projects_v1_board %} へのアクセス権を Team に付与する

{% data variables.projects.projects_v1_board %} への同じアクセス許可レベルを Team 全体に付与できます。

{% note %}

**注:** {% data reusables.project-management.cascading-permissions %} たとえば、Organization オーナーが {% data variables.projects.projects_v1_board %} への読み取りアクセス許可をチームに付与しており、{% data variables.projects.projects_v1_board %} 管理者が個別のコラボレーターとしてそのボードへの管理者アクセス許可を Team メンバーの 1 人に付与した場合、そのメンバーは {% data variables.projects.projects_v1_board %} への管理者アクセス許可を持つことになります。 詳しい情報については、「[Organization の {% data variables.product.prodname_project_v1_caps %} へのアクセス許可](/articles/project-board-permissions-for-an-organization)」を参照してください。

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. **[Project (classic)]** をクリックします{% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
8. 左側のサイドバーで、 **[Team]** をクリックします。
9. Team を追加するには、 **[Team の追加: Team の選択]** をクリックします。 次に、ドロップダウン メニューからチームを選択するか、追加したいチームを検索します。
 ![Organization の Team のリストが表示されている [Team の追加] ドロップダウン メニュー](/assets/images/help/projects/add-a-team.png)
10. Team 名の横にあるドロップダウン メニューを使用して、目的の権限レベル (**読み取り**、**書き込み**、または **管理者**) を選択します。![読み取り、書き込み、管理者オプションを含む [Team のアクセス許可] ドロップダウン メニュー](/assets/images/help/projects/org-project-team-choose-permissions.png)

## {% data variables.projects.projects_v1_board %} への Team のアクセスを構成する

{% data variables.projects.projects_v1_board %} への Team のアクセスが親 Team から継承された場合、子 Team へのアクセスを更新するには、{% data variables.projects.projects_v1_board %} への親 Team のアクセスを変更する必要があります。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
4. Team の会話の上の、{% octicon "project" aria-label="The Projects icon" %} **[プロジェクト]** をクリックします。
  ![Team の [リポジトリ] タブ](/assets/images/help/organizations/team-project-board-button.png)
5. アクセス許可レベルを変更するには、更新する {% data variables.projects.projects_v1_board %} の右側にあるドロップダウンを使用します。 {% data variables.projects.projects_v1_board %} を削除するには、 **{% octicon "trash" aria-label="The trash icon" %}** をクリックします。
  ![Team からプロジェクト ボードを削除するごみ箱ボタン](/assets/images/help/organizations/trash-button.png)

{% ifversion projects-v2-add-to-team %}

## 参考資料

- [チームへのプロジェクトの追加](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team)


{% endif %}
