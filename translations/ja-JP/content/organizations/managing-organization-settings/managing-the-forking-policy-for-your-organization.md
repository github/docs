---
title: Organization のフォークポリシーを管理する
intro: 'Organization が所有するプライベート{% ifversion ghes or ghae or ghec %}および内部{% endif %}リポジトリのフォークを許可または禁止できます。'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization
permissions: Organization owners can manage the forking policy for an organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage forking policy
ms.openlocfilehash: 11aad8ee3c08b62f6bc352f91b6d804f35eee6e6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145119301'
---
既定では、新しい組織はプライベート{% ifversion ghes or ghec or ghae %}および内部{% endif %}リポジトリのフォークを禁止するように構成されます。

組織レベルでプライベート{% ifversion ghes or ghec or ghae %}および内部{% endif %}リポジトリのフォークを許可する場合は、特定のプライベート{% ifversion ghes or ghec or ghae %}または内部{% endif %}リポジトリをフォークする機能を構成することもできます。 詳細については、「[リポジトリのフォーク ポリシーを管理する](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)」を参照してください。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. [リポジトリのフォーク] の下で、 **[プライベート{% ifversion ghec or ghes or ghae %}および内部{% endif %}リポジトリのフォークを許可する]** を選択します。

   {%- ifversion fpt %} ![組織でのフォークを許可または禁止するためのチェックボックス](/assets/images/help/repository/allow-disable-forking-fpt.png) {%- elsif ghes or ghec or ghae %} ![組織でのフォークを許可または禁止するためのチェックボックス](/assets/images/help/repository/allow-disable-forking-organization.png) {%- endif %}
6. **[保存]** をクリックします。

## 参考資料

- 「[フォークについて](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)」
- 「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」
