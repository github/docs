---
title: Organization での操作を制限する
intro: Organization が所有するすべてのパブリックリポジトリ内の特定のユーザに対して、一定期間アクティビティ制限を適用することができます。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
  - /github/building-a-strong-community/limiting-interactions-in-your-organization
versions:
  fpt: '*'
  ghec: '*'
permissions: Organization owners and moderators can limit interactions in an organization.
topics:
  - Community
shortTitle: Limit interactions in org
ms.openlocfilehash: 03bfad7a0da3386b6205517deb66e6b923de8386
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066683'
---
## 一時的なインタラクションの制限について

Organization 内のインタラクションを制限すると、Organization が所有するすべてのパブリックリポジトリに対して一時的なインタラクション制限が有効になります。 {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} 制限期間が過ぎると、Organization はパブリックリポジトリで通常のアクティビティを再開できます。

{% data reusables.community.types-of-interaction-limits %}

Organization のメンバーは、いずれの制限タイプの影響も受けません。

Organization 全体でアクティビティ制限を有効にした場合、個々のリポジトリに対して操作制限を有効化または無効化することはできません。 個々のリポジトリのアクティビティの制限の詳細については、「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」を参照してください。

Organization のオーナーとモデレーターは、特定の期間だけユーザーをブロックすることもできます。 ブロックの期間が過ぎると、自動的にユーザのブロックは解除されます。 詳細については、「[Organization からのユーザーのブロック](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)」を参照してください。

## Organization での操作を制限する


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. _Organization のオーナーの場合:_ サイドバーの [アクセス] セクションで、 **[{% octicon "report" aria-label="The report icon" %} モデレート]** を選択してから、 **[インタラクションの制限]** をクリックします。

   _Organization のモデレーターの場合:_ サイドバーで **[インタラクションの制限]** をクリックします。

{% data reusables.community.set-interaction-limit %} ![一時的なインタラクションの制限オプション](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

## 参考資料
- "[悪用あるいはスパムをレポートする](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- [Organization のリポジトリへの個人のアクセスを管理する](/articles/managing-an-individual-s-access-to-an-organization-repository)
- 「[個人用アカウントのリポジトリの権限レベル](/articles/permission-levels-for-a-user-account-repository)」
- 「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」
- [組織内のモデレーターの管理](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)
