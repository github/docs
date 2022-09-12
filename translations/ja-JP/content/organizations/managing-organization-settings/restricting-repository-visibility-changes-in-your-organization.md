---
title: Organization 内でリポジトリの可視性の変更を制限する
intro: Organization のデータを保護するために、Organization 内でリポジトリの可視性を変更するための権限を設定できます。
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set visibility changes policy
permissions: Organization owners can restrict repository visibility changes for an organization.
ms.openlocfilehash: e404d8dea2e188ff5b0b0a8b15c9767374269436
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145119246'
---
Organization のリポジトリの表示または非表示を変更できるユーザーを制限できます。たとえば、リポジトリをプライベートからパブリックに変更できます。 リポジトリの表示について詳しくは、「[リポジトリについて](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)」を参照してください。 

Organization 所有者だけにリポジトリが表示されるように制限できます。あるいは、リポジトリへの管理者アクセスを持つユーザーに表示変更を許可できます。

{% warning %}

**警告**: この設定を有効にすると、管理者アクセスを持つユーザーは、その種類のリポジトリ作成を許可していない場合でも、既存リポジトリの表示を選べます。 作成時のリポジトリの表示制限について詳しくは、「[Organization 内でリポジトリの作成を制限する](/articles/restricting-repository-creation-in-your-organization)」を参照してください。

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. [リポジトリの表示設定の変更] の下で、 **[この Organizaton の表示の変更をメンバーに許可する]** の選択を解除します。
![リポジトリ可視性変更をメンバーに許可するチェックボックス](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. **[保存]** をクリックします。
