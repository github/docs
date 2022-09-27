---
title: リポジトリでの操作を制限する
intro: パブリックリポジトリ上の特定のユーザに対して、一定期間アクティビティ制限を適用することができます。
redirect_from:
  - /articles/limiting-interactions-with-your-repository
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
permissions: 'People with admin permissions to a repository, and organization moderators, can temporarily limit interactions in that repository.'
topics:
  - Community
shortTitle: Limit interactions in repo
ms.openlocfilehash: 0b49e1bfdf29be5dc270a453512701c9369c5933
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067251'
---
## 一時的なインタラクションの制限について

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} 制限期間が過ぎると、ユーザはリポジトリで通常のアクティビティを再開できます。

{% data reusables.community.types-of-interaction-limits %}

個人アカウントまたは組織が所有するすべてのリポジトリでアクティビティ制限を有効にすることもできます。 ユーザ全体または Organization 全体の制限が有効になっている場合、そのアカウントが所有する個々のリポジトリのアクティビティを制限することはできません。 詳細については、「[個人アカウントの相互作用の制限](/communities/moderating-comments-and-conversations/limiting-interactions-for-your-personal-account)」および「[組織内の相互作用の制限](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)」を参照してください。

## リポジトリでの操作を制限する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. サイドバーで **[{% octicon "comment-discussion" aria-label="The comment-discussion icon" %} モデレーション オプション]** を選択し、 **[相互作用の制限]** をクリックします。
{% data reusables.community.set-interaction-limit %} ![一時的なインタラクションの制限オプション](/assets/images/help/repository/temporary-interaction-limits-options.png)

## 参考資料
- "[悪用あるいはスパムをレポートする](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- [Organization のリポジトリへの個人のアクセスを管理する](/articles/managing-an-individual-s-access-to-an-organization-repository)
- 「[個人用アカウントのリポジトリの権限レベル](/articles/permission-levels-for-a-user-account-repository)」
- 「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」
- [組織内のモデレーターの管理](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)
