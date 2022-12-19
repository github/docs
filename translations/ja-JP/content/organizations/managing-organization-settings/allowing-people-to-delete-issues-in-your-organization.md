---
title: Organization 内の Issue の削除を許可する
intro: Organization のオーナーは、Organization が所有するリポジトリ内の Issue の削除を許可できます。
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Allow issue deletion
ms.openlocfilehash: 6396b54d7a6e7113344935e4229843f580c246b6
ms.sourcegitcommit: 219fb805abddaef3e5547638bd798da890020bfd
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878447'
---
デフォルトでは、Organization 内の Issue は削除できません。 Organization のオーナーは、まず Organization の全リポジトリでこの機能を有効化しなければなりません。

有効化されると、Organizationのオーナー、そしてOrganizationが所有するリポジトリに管理アクセスを持つ人は、Issueを削除できるようになります。 リポジトリの管理アクセスを持つ人には、管理アクセスを付与されたOrganizationメンバーや外部コラボレーターが含まれます。 詳細については、「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」および「[Issue の削除](/articles/deleting-an-issue)」を参照してください。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. [Issue の削除] で、 **[この Organization の Issue の削除をメンバーに許可する]** を選択します。
![Issue の削除をメンバーに許可するチェックボックス](/assets/images/help/settings/issue-deletion.png)
6. **[保存]** をクリックします。
