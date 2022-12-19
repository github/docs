---
title: Organization のプロジェクトの可視性の変更を許可する
intro: 'Organization 所有者は、管理者権限を持つメンバーがその Organization の{% data variables.projects.projects_v2_and_v1 %}の可視性を調整することを許可できます。'
versions:
  feature: classic-project-visibility-permissions-or-projects-v2
topics:
  - Organizations
  - Projects
shortTitle: Project visibility permissions
allowTitleToDifferFromFilename: true
permissions: 'Organization owners can allow {% data variables.projects.project_v2_and_v1 %} visibility changes for an organization.'
ms.openlocfilehash: 5f8963e8c03e2c0a62586964b6331ec7b3d945b5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109539'
---
## プロジェクトの可視性の変更について

Organization の{% data variables.projects.projects_v2_and_v1 %}の可視性を変更できるユーザーを制限できます。たとえば、{% data variables.projects.projects_v2_and_v1 %}をプライベートからパブリックに変更することをメンバーに制限できます。 

Organization 所有者だけに{% data variables.projects.project_v2_and_v1 %}の可視性を変更できるように制限したり、プロジェクトの管理者権限を持つすべてのユーザーに可視性の変更を許可することができます。

{% ifversion project-visibility-policy %} このオプションは、エンタープライズ所有者がエンタープライズ レベルで{% data variables.projects.projects_v2_and_v1 %}の可視性の変更を制限している場合、使用できない場合があります。 詳しくは、[エンタープライズ内でプロジェクトにポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise)ことに関する説明を参照してください。
{% endif %}

## メンバーがプロジェクトの可視性を変更できるようにする

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. サイドバーの [コード、計画、自動化] セクションで、 **[{% octicon "table" aria-label="The table icon" %} プロジェクト]** をクリックします。
1. メンバーがプロジェクトの可視性を調整できるようにするには、 **[この Organizaton のプロジェクトの可視性の変更をメンバーに許可する]** を選びます。
  ![可視性の変更を設定するチェック ボックスを示すスクリーンショット](/assets/images/help/projects-v2/visibility-change-checkbox.png)
1. **[保存]** をクリックします。

## 参考資料

{% ifversion projects-v2 %}
- [{% data variables.projects.projects_v2 %}の可視性を管理する](/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects) {%- endif %}{%- ifversion projects-v1 %}
- [{% data variables.product.prodname_project_v1 %}の可視性を変更する](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility){% endif %}
