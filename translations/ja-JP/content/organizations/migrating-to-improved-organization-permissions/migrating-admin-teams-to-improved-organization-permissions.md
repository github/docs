---
title: 管理者 Team を改善された Organization の権限に移行する
intro: 2015 年 9 月以降に作成された Organization の場合、Organization の権限モデルはデフォルトで改善されています。 2015 年 9 月より前に作成された Organization は、古いオーナーおよび管理者 Team から、改善された権限モデルに移行する必要があるかもしれません。 レガシーの管理者 Team は、改善された Organization 権限モデルに移行するまで、リポジトリの作成資格を自動的に維持します。
redirect_from:
  - /articles/migrating-your-previous-admin-teams-to-the-improved-organization-permissions
  - /articles/migrating-admin-teams-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/migrating-admin-teams-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Migrate admin team
ms.openlocfilehash: 32a3bd684d2ed81d1ba492b4e343af3e03390364
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125589'
---
デフォルトでは、Organization のすべてのメンバーがリポジトリを作成できます。 [リポジトリの作成アクセス許可](/articles/restricting-repository-creation-in-your-organization)を Organization の所有者に制限し、Organization が従来の Organization のアクセス許可構造で作成された場合でも、レガシ管理 Team のメンバーはリポジトリを作成できます。

レガシーの管理者 Team とは、レガシーの Organization の権限構造で、管理者権限レベルを使用して作成された Team のことです。 この Team のメンバーは、Organization のリポジトリを作成できました。改善された Organization 権限構造でも、その機能は維持されています。

レガシーの 管理者 Team を改善された Organization の権限に移行すれば、この機能をなくすことができます。

詳細については、「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。

{% warning %}

**警告:** Organization ですべてのメンバーの [リポジトリ作成アクセス許可](/articles/restricting-repository-creation-in-your-organization)を無効にしている場合、レガシ管理 Team の一部のメンバーがリポジトリ作成アクセス許可を失う可能性があります。 Organization でメンバーよるリポジトリ作成を有効にしている場合は、レガシーの管理者 Team を改善された Organization の権限に移行しても、チームメンバーのリポジトリ作成機能は影響されません。

{% endwarning %}

## Organization のレガシーの管理者 Team をすべて移行する

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.teams_sidebar %}
1. Organization のレガシ管理 Team を確認し、 **[すべての Team の移行]** をクリックします。
  ![[すべての Team の移行] ボタン](/assets/images/help/teams/migrate-all-legacy-admin-teams.png)
1. これらの Team のメンバーに対して可能なアクセス許可の変更に関する情報を読み、 **[すべての Team の移行]** をクリックします。
  ![[移行の確認] ボタン](/assets/images/help/teams/confirm-migrate-all-legacy-admin-teams.png)

## 1 つの管理者 Team を移行する

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
1. Team の説明ボックスで、 **[Team の移行]** をクリックします。
  ![[Team の移行] ボタン](/assets/images/help/teams/migrate-a-legacy-admin-team.png)
