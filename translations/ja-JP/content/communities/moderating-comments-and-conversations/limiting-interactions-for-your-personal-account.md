---
title: 個人アカウントの操作の制限
intro: 個人アカウントが所有するすべてのパブリック リポジトリ内の特定のユーザーに対して、一定期間アクティビティ制限を適用することができます。
versions:
  fpt: '*'
  ghec: '*'
permissions: Anyone can limit interactions for their own personal account.
redirect_from:
  - /github/building-a-strong-community/limiting-interactions-for-your-user-account
  - /communities/moderating-comments-and-conversations/limiting-interactions-for-your-user-account
topics:
  - Community
shortTitle: Limit interactions in account
ms.openlocfilehash: df83b19880347dacb18e2e5bf048e6478ba0e61b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164850'
---
## 一時的なインタラクションの制限について

個人アカウントのインタラクションを制限すると、個人アカウントが所有するすべてのパブリック リポジトリの一時的なインタラクション制限が有効になります。 {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} 制限期間が過ぎると、ユーザはパブリックリポジトリで通常のアクティビティを再開できます。

{% data reusables.community.types-of-interaction-limits %}

ユーザ全体でアクティビティ制限を有効にした場合、個々のリポジトリに対して操作制限を有効化または無効化することはできません。 個々のリポジトリのアクティビティの制限の詳細については、「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」を参照してください。

ユーザをブロックすることもできます 詳細については、「[個人アカウントからのユーザーのブロック](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)」を参照してください。 

## 個人アカウントの操作の制限

{% data reusables.user-settings.access_settings %}
1. サイドバーの [アクセス] セクションで、 **[{% octicon "report" aria-label="The report icon" %} モデレート]** を選択し、 **[Interaction limits]\(インタラクションの制限\)** をクリックします。
{% data reusables.community.set-interaction-limit %} ![一時的なインタラクションの制限オプション](/assets/images/help/settings/user-account-temporary-interaction-limits-options.png)
