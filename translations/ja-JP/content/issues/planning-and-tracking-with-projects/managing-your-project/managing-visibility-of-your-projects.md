---
title: '{% data variables.projects.projects_v2 %} の可視性の管理'
shortTitle: 'Managing {% data variables.projects.project_v2 %} visibility'
intro: '{% data variables.projects.project_v2 %} をプライベートまたはパブリックの可視性に設定する方法について学習します。'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners can manage the visibility of project boards in their organization. Organization owners can also allow collaborators with admin permissions to manage project visibility. Visibility of user projects can be managed by the owner of the project and collaborators with admin permissions.
ms.openlocfilehash: fbe4f0943010129b14ace21f6071b99e1160053b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109787'
---
## プロジェクトの可視性について

プロジェクトはパブリックまたはプライベートにすることができます。 パブリックプロジェクトでは、インターネット上の誰もがプロジェクトを見ることができます。 プライベートプロジェクトでは、最低でも読み取りアクセスを付与されたユーザだけがプロジェクトを見ることができます。

影響を受けるのはプロジェクトの可視性のみです。プロジェクト上のアイテムを見るには、アイテムが属する得リポジトリに対する必要な権限を持っていなければなりません。 プロジェクトにプライベートリポジトリのアイテムが含まれているなら、そのリポジトリのコラボレータではないユーザは、そのリポジトリのアイテムを見ることはできません。

![非表示のアイテムを持つプロジェクト](/assets/images/help/projects/hidden-items.png)

プロジェクト管理者と Organization 所有者は、プロジェクトの可視性を制御できます。 Organization 所有者{% ifversion project-visibility-policy %}とエンタープライズ所有者{% endif %}は、プロジェクトの可視性の変更を Organization の所有者のみに制限できます。

パブリックとプライベートのプロジェクトでは、分析情報は、そのプロジェクトの書き込みアクセス許可を持つユーザーにのみ表示されます。

Organizationが所有するプライベートのプロジェクトでは、プロジェクトを現在更新しているユーザのアバターがプロジェクトのUIに表示されます。

プロジェクトの管理者は、プロジェクトに対する書き込み及び管理アクセスの管理と、個々のユーザの読み取りアクセスの制御もできます。 詳しくは、「[プロジェクトへのアクセスの管理](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)」を参照してください。

## プロジェクトの可視性の変更

{% data reusables.projects.project-settings %}
1. [危険なゾーン] の **[可視性]** の横にある **[プライベート]** または **[パブリック]** を選びます。
   ![可視性の制御を示すスクリーンショット](/assets/images/help/projects-v2/visibility.png)

## 参考資料

- [Organization のプロジェクトの可視性の変更を許可する](/organizations/managing-organization-settings/allowing-project-visibility-changes-in-your-organization)
