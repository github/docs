---
title: Issue の削除
intro: リポジトリの管理者権限がある人は、リポジトリから Issue を完全に削除できます。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/deleting-an-issue
  - /articles/deleting-an-issue
  - /github/managing-your-work-on-github/deleting-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/deleting-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 140bd1fdb272dd3203b993cf5f5f7038963fafe2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146774573'
---
イシューを削除する機能は、リポジトリが個人用アカウントに所有されているか、組織に所有されているかによって異なります。
- 個人用アカウントに所有されているリポジトリのイシューを削除できるアカウントは、そのアカウントのみです。
- 管理者または所有者のアクセス許可を持つアカウントのみが、組織に所有されているリポジトリのイシューを削除できます。

  組織に所有されているリポジトリのイシューを削除するには、組織の所有者がその組織のリポジトリに対するイシューの削除を有効にする必要があります。 詳細については、「[Organization 内の Issue の削除を許可する](/articles/allowing-people-to-delete-issues-in-your-organization)」と「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。

イシューが削除されても、コラボレーターには通知されません。 コラボレーターが削除されたイシューの URL にアクセスすると、Web ページが見つからないことを示すメッセージが表示されます (ただし、API を使ってそれが削除されたことを判断できます)。 リポジトリの管理者権限かオーナー権限を持っている人にはさらに、Issue を削除した人のユーザ名と、いつ削除されたのかが表示されます。

1. 削除対象の Issue に移動します。
2. 右側のバーの [通知] の下で、 **[Issue の削除]** をクリックします。
![[Issue] ページ右側のバーの下で強調表示されている "Issue の削除" テキスト](/assets/images/help/issues/delete-issue.png)
4. 削除を確認するには、 **[この Issue を削除]** をクリックします。

## 参考資料

- 「[Pull Request を Issue にリンクする](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)」
