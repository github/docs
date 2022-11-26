---
title: '{% data variables.projects.projects_v2 %} へのアクセスの管理'
shortTitle: 'Managing {% data variables.projects.project_v2 %} access'
intro: '{% data variables.projects.project_v2 %} へのチームと個人のアクセスを管理する方法について学習します。'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-access-to-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 9c414ab3bfbbd9bbf488a73e5dd2600458074914
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109260'
---
## プロジェクトへのアクセスについて

Organizationレベルのプロジェクトの管理者は、Organization全体、Team、個々のOrganizationのメンバー、外部のコラボレータのアクセスを管理できます。 

ユーザレベルのプロジェクトの管理者は、個々のコラボレータを招待し、そのアクセスを管理できます。

プロジェクトの管理者は、インターネット上のすべての人々に対するプロジェクトの可視性も制御できます。 詳細については、「[プロジェクトの可視性の管理](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)」を参照してください。

## Organizationレベルのプロジェクトのアクセス管理

### Organization内の全員に対するアクセス管理

既定の基本ロールは `write` であり、これは Organization 内の誰もがプロジェクトを表示して編集できるということです。 この基本ロールを変更すれば、Organizationの全員に対するプロジェクトのアクセスを変更できます。 基本ロールへの変更は、Organizationのオーナーではなく、個別にアクセス権を付与されていないOrganizaitonのメンバーにだけ影響します。

{% data reusables.projects.project-settings %}
1. **[アクセスの管理]** をクリックします。
   ![[アクセスの管理] 項目を示すスクリーンショット](/assets/images/help/projects-v2/manage-access.png)
2. **[基本ロール]** で、既定のロールを選択します。
   ![[基本ロール] メニューを示すスクリーンショット](/assets/images/help/projects-v2/base-role.png)
   - **アクセス無し**: Organization のオーナーと、個別にアクセス権を付与されたユーザーだけがプロジェクトを表示できます。 Organizationのオーナーは、プロジェクトの管理者でもあります。
   - **読み取り**: 組織内のすべてのユーザーがプロジェクトを表示できます。 Organizationのオーナーは、プロジェクトの管理者でもあります。
   - **書き込み**: 組織内のすべてのユーザーがプロジェクトを表示して編集できます。 Organizationのオーナーは、プロジェクトの管理者でもあります。
   - **管理者**: 組織内のすべてのユーザーがプロジェクトの管理者です。

### Team及びOrganizationの個々のメンバーのアクセス管理

Organizationレベルのプロジェクトには、Team、外部のコラボレータ、個々のOrganizationのメンバーをコラボレータとして追加することもできます。 詳細については、「[Team について](/organizations/organizing-members-into-teams/about-teams)」を参照してください。

{% ifversion projects-v2-add-to-team %}

プロジェクトに対する読み取り以上のアクセス許可をチームに付与すると、そのプロジェクトはチームのプロジェクト ページにも表示されます。 また、チームのプロジェクト ページでチームにプロジェクトを追加することもできます。 詳しくは、「[チームへのプロジェクトの追加](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team)」を参照してください。  

{% endif %}

個人ユーザが既にOrganizationのメンバーになっているか、Organizationの少なくとも1つのリポジトリで外部のコラボレータになっている場合にのみ、Organizationレベルのプロジェクトに共同作業をするように招待できます。

{% data reusables.projects.project-settings %}
1. **[アクセスの管理]** をクリックします。
   ![[アクセスの管理] 項目を示すスクリーンショット](/assets/images/help/projects-v2/manage-access.png)
2. **[コラボレーターの招待]** で、招待するチームまたは個人ユーザーを検索します。
   ![コラボレーターの検索を示すスクリーンショット](/assets/images/help/projects-v2/access-search.png)
3. コラボレータのロールを選択してください。
   ![ロールの選択を示すスクリーンショット](/assets/images/help/projects-v2/access-role.png)
   - **読み取り**: そのチームまたは個人がプロジェクトを表示できます。
   - **書き込み**: そのチームまたは個人がプロジェクトを表示して編集できます。
   - **管理者**: そのチームまたは個人が、プロジェクトの表示、編集、新しいコラボレーターの追加が可能です。
4. **[招待]** をクリックします。
   ![[招待] ボタンを示すスクリーンショット](/assets/images/help/projects-v2/access-invite.png)

### プロジェクトの既存のコラボレータのアクセス管理

{% data reusables.projects.project-settings %}
1. **[アクセスの管理]** をクリックします。
   ![[アクセスの管理] 項目を示すスクリーンショット](/assets/images/help/projects-v2/manage-access.png)
1. **[アクセスの管理]** で、権限を変更するコラボレーターを見つけます。

   **[種類]** ドロップダウン メニューと **[ロール]** ドロップダウン メニューを使用して、アクセス リストをフィルター処理できます。
   ![コラボレーターを示すスクリーンショット](/assets/images/help/projects-v2/access-find-member.png)

1. コラボレーターのロールを編集します。
   ![コラボレーターのロールの変更を示すスクリーンショット](/assets/images/help/projects-v2/access-change-role.png)
1. 必要に応じて、 **[削除]** をクリックしてコラボレーターを削除します。
   ![コラボレーターの削除を示すスクリーンショット](/assets/images/help/projects-v2/access-remove-member.png)

## ユーザレベルプロジェクトのアクセス管理

### プロジェクトへのコラボレータのアクセスの付与

{% note %}

これはプロジェクトのコラボレータにのみ影響し、プロジェクトのリポジトリには影響しません。 プロジェクト上のアイテムを見るためには、ユーザはアイテムが属するリポジトリに対する必要な権限を持っていなければなりません。 プロジェクトにプライベートリポジトリのアイテムが含まれているなら、そのリポジトリのコラボレータではないユーザは、そのリポジトリのアイテムを見ることはできません。 詳細については、「[リポジトリの可視性を設定する](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)」および「[リポジトリへのアクセス権を持つチームと人を管理する](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)」を参照してください。

{% endnote %}

{% data reusables.projects.project-settings %}
1. **[アクセスの管理]** をクリックします。
   ![[アクセスの管理] 項目を示すスクリーンショット](/assets/images/help/projects-v2/manage-access.png)
2. **[コラボレーターの招待]** で、招待するユーザーを検索します。
   ![コラボレーターの検索を示すスクリーンショット](/assets/images/help/projects-v2/access-search.png)
3. コラボレータのロールを選択してください。
   ![ロールの選択を示すスクリーンショット](/assets/images/help/projects-v2/access-role.png)
   - **読み取り**: その個人がプロジェクトを表示できます。
   - **書き込み**: その個人がプロジェクトを表示して編集できます。
   - **管理者**: その個人が、プロジェクトの表示、編集、新しいコラボレーターの追加が可能です。
4. **[招待]** をクリックします。
   ![[招待] ボタンを示すスクリーンショット](/assets/images/help/projects-v2/access-invite.png)

### プロジェクトの既存のコラボレータのアクセス管理

{% data reusables.projects.project-settings %}
1. **[アクセスの管理]** をクリックします。
   ![[アクセスの管理] 項目を示すスクリーンショット](/assets/images/help/projects-v2/manage-access.png)
1. **[アクセスの管理]** で、権限を変更するコラボレーターを見つけます。

   **[種類]** ドロップダウン メニューと **[ロール]** ドロップダウン メニューを使用して、アクセス リストをフィルター処理できます。
   ![コラボレーターを示すスクリーンショット](/assets/images/help/projects-v2/access-find-member.png)

1. コラボレーターのロールを編集します。
   ![コラボレーターのロールの変更を示すスクリーンショット](/assets/images/help/projects-v2/access-change-role.png)
1. 必要に応じて、 **[削除]** をクリックしてコラボレーターを削除します。
   ![コラボレーターの削除を示すスクリーンショット](/assets/images/help/projects-v2/access-remove-member.png)
