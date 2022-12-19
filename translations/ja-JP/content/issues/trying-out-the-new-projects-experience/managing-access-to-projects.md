---
title: プロジェクト（ベータ）へのアクセス管理
intro: プロジェクトを表示、編集、管理できるユーザを制御できます。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 2c50343bfe8e3fd4e65a9a39b798f355cf0f13bb
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145130959"
---
{% data reusables.projects.projects-beta %}

## <a name="about-project-access"></a>プロジェクトへのアクセスについて

Organizationレベルのプロジェクトの管理者は、Organization全体、Team、個々のOrganizationのメンバー、外部のコラボレータのアクセスを管理できます。 

ユーザレベルのプロジェクトの管理者は、個々のコラボレータを招待し、そのアクセスを管理できます。

プロジェクトの管理者は、インターネット上のすべての人々に対するプロジェクトの可視性も制御できます。 詳細については、「[プロジェクトの可視性の管理](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)」を参照してください。

## <a name="managing-access-for-organization-level-projects"></a>Organizationレベルのプロジェクトのアクセス管理

### <a name="managing-access-for-everyone-in-your-organization"></a>Organization内の全員に対するアクセス管理

既定の基本ロールは `write` であり、これは Organization 内の誰もがプロジェクトを表示して編集できるということです。 この基本ロールを変更すれば、Organizationの全員に対するプロジェクトのアクセスを変更できます。 基本ロールへの変更は、Organizationのオーナーではなく、個別にアクセス権を付与されていないOrganizaitonのメンバーにだけ影響します。

{% data reusables.projects.project-settings %}
1. **[アクセスの管理]** をクリックします。
2. **[基本ロール]** で、既定のロールを選択します。
   - **アクセス無し**: Organization のオーナーと、個別にアクセス権を付与されたユーザーだけがプロジェクトを表示できます。 Organizationのオーナーは、プロジェクトの管理者でもあります。
   - **読み取り**: 組織内のすべてのユーザーがプロジェクトを表示できます。 Organizationのオーナーは、プロジェクトの管理者でもあります。
   - **書き込み**: 組織内のすべてのユーザーがプロジェクトを表示して編集できます。 Organizationのオーナーは、プロジェクトの管理者でもあります。
   - **管理者**: 組織内のすべてのユーザーがプロジェクトの管理者です。

### <a name="managing-access-for-teams-and-individual-members-of-your-organization"></a>Team及びOrganizationの個々のメンバーのアクセス管理

Organizationレベルのプロジェクトには、Team、外部のコラボレータ、個々のOrganizationのメンバーをコラボレータとして追加することもできます。 詳細については、「[Team について](/organizations/organizing-members-into-teams/about-teams)」を参照してください。

個人ユーザが既にOrganizationのメンバーになっているか、Organizationの少なくとも1つのリポジトリで外部のコラボレータになっている場合にのみ、Organizationレベルのプロジェクトに共同作業をするように招待できます。

{% data reusables.projects.project-settings %}
1. **[アクセスの管理]** をクリックします。
2. **[コラボレーターの招待]** で、招待するチームまたは個人ユーザーを検索します。
3. コラボレータのロールを選択してください。
   - **読み取り**: そのチームまたは個人がプロジェクトを表示できます。
   - **書き込み**: そのチームまたは個人がプロジェクトを表示して編集できます。
   - **管理者**: そのチームまたは個人が、プロジェクトの表示、編集、新しいコラボレーターの追加が可能です。
4. **[招待]** をクリックします。

### <a name="managing-access-of-an-existing-collaborator-on-your-project"></a>プロジェクトの既存のコラボレータのアクセス管理

{% data reusables.projects.project-settings %}
1. **[アクセスの管理]** をクリックします。
1. **[アクセスの管理]** で、権限を変更するコラボレーターを見つけます。

   **[種類]** ドロップダウン メニューと **[ロール]** ドロップダウン メニューを使用して、アクセス リストをフィルター処理できます。

1. コラボレータのロールを編集するか、{% octicon "trash" aria-label="the trash icon" %}をクリックしてコラボレータを削除してください。

## <a name="managing-access-for-user-level-projects"></a>ユーザレベルプロジェクトのアクセス管理

### <a name="granting-a-collaborator-access-to-your-project"></a>プロジェクトへのコラボレータのアクセスの付与

{% note %}

これはプロジェクトのコラボレータにのみ影響し、プロジェクトのリポジトリには影響しません。 プロジェクト上のアイテムを見るためには、ユーザはアイテムが属するリポジトリに対する必要な権限を持っていなければなりません。 プロジェクトにプライベートリポジトリのアイテムが含まれているなら、そのリポジトリのコラボレータではないユーザは、そのリポジトリのアイテムを見ることはできません。 詳細については、「[リポジトリの可視性を設定する](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)」および「[リポジトリへのアクセス権を持つチームと人を管理する](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)」を参照してください。

{% endnote %}

{% data reusables.projects.project-settings %}
1. **[アクセスの管理]** をクリックします。
2. **[コラボレーターの招待]** で、招待するユーザーを検索します。
3. コラボレータのロールを選択してください。
   - **読み取り**: その個人がプロジェクトを表示できます。
   - **書き込み**: その個人がプロジェクトを表示して編集できます。
   - **管理者**: その個人が、プロジェクトの表示、編集、新しいコラボレーターの追加が可能です。
4. **[招待]** をクリックします。

### <a name="managing-access-of-an-existing-collaborator-on-your-project"></a>プロジェクトの既存のコラボレータのアクセス管理

{% data reusables.projects.project-settings %}
1. **[アクセスの管理]** をクリックします。
1. **[アクセスの管理]** で、権限を変更するコラボレーターを見つけます。

   **[ロール]** ドロップダウン メニューを使用して、アクセス リストをフィルター処理できます。

1. コラボレータのロールを編集するか、{% octicon "trash" aria-label="the trash icon" %}をクリックしてコラボレータを削除してください。
