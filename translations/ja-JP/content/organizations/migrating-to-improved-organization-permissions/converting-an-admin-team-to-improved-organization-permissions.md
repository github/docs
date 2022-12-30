---
title: 管理者 Team を改善された Organization の権限に移行する
intro: 2015 年 9 月以降に作成された Organization の場合、Organization の権限モデルはデフォルトで改善されています。 2015 年 9 月より前に作成された Organization は、古いオーナーおよび管理者 Team から、改善された権限モデルに移行する必要があるかもしれません。 レガシーの管理者 Team は、改善された Organization 権限モデルに移行するまで、リポジトリの作成資格を自動的に維持します。
redirect_from:
  - /articles/converting-your-previous-admin-team-to-the-improved-organization-permissions
  - /articles/converting-an-admin-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-admin-team-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert admin team
ms.openlocfilehash: 183ccd5d1252265ed6ac94924703ceb75ed8adad
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125598'
---
レガシーの管理者 Team メンバーのために新しい Team を作成することで、レガシーの管理者 Team が持つリポジトリ作成の資格を削除できます。Team が Organization のリポジトリに対して必要なアクセスを持っていることを確認してから、レガシーの管理者 Teamを削除してください。

詳細については、「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。

{% warning %}

**警告:**
- レガシーの管理者 Team のメンバーが、他の Team のメンバーではない場合、そのメンバーは Team を削除すると Organization から削除されます。 Team を削除する前に、メンバーを Organization の直接メンバーにするか、必要なリポジトリに対するコラボレーターアクセスを持たせてください。
- レガシーの管理者 Team メンバーが作成したプライベートフォークを失わないために、レガシーの管理者 Teamを削除する前に、以下のステップ 1 - 3 に従う必要があります。
- "admin" は、Organization 内の [特定のリポジトリへの特定のアクセス権](/articles/repository-permission-levels-for-an-organization)を持つ Organization のメンバーの用語であるため、決定した Team 名ではその用語を避けることをお勧めします。

{% endwarning %}

1. [新しい Team を作成します](/articles/creating-a-team)。
2. 新しい Team にレガシ管理 Team の[各メンバーを追加します](/articles/adding-organization-members-to-a-team)。
3. 新しい Team に、レガシ Team がアクセスできる各リポジトリへの[同等のアクセス権を付与します](/articles/managing-team-access-to-an-organization-repository)。
4. [レガシ管理 Team を削除します](/articles/deleting-a-team)。
