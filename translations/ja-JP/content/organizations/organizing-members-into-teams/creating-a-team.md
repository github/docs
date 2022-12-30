---
title: Team の作成
intro: 独立 Team や入れ子 Team を作成してリポジトリの権限およびグループへのメンションを管理できます。
redirect_from:
  - /articles/creating-a-team-early-access-program
  - /articles/creating-a-team
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: c4ffe03e1108caae9bfed1171b08d8a046caeb76
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125526'
---
Organization のオーナーと親チームのメンテナだけが親の下に新しく子チームを作成できます。 オーナーは Organization 内の全チームについて作成許可を制限することもできます。 詳細については、「[Organization のチーム作成権限を設定する](/articles/setting-team-creation-permissions-in-your-organization)」を参照してください。

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %} {% data reusables.organizations.create-team-choose-parent %} {% ifversion ghec %}
1. あるいは、OrganizationあるいはEnterpriseアカウントがTeam同期を使っているか、Enterpriseが{% data variables.product.prodname_emus %}を使っているなら、アイデンティティプロバイダのグループをTeamに接続してください。
    * Enterpriseが{% data variables.product.prodname_emus %}を使っているなら、"Identity Provider Groups（アイデンティティプロバイダグループ）"ドロップダウンメニューを使い、新しいTeamに接続する1つのアイデンティティプロバイダグループを選択してください。 詳細については、「[ID プロバイダー グループを使用した Team メンバーシップの管理](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)」を参照してください。
    * OrganizationもしくはEnterpriseアカウントがTeam同期を使っているなら、"Identity Provider Groups（アイデンティティプロバイダグループ）"ドロップダウンメニューを使い、新しいTeamに接続するアイデンティティプロバイダグループを最大で5つまで選択してください。 詳細については、「[Team を ID プロバイダー グループと同期する](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)」を参照してください。
    ![ID プロバイダー グループを選択するドロップダウン メニュー](/assets/images/help/teams/choose-an-idp-group.png) {% endif %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create_team %}
1. 必要に応じて、[Team に Organization リポジトリへのアクセス権を付与します](/articles/managing-team-access-to-an-organization-repository)。

## 参考資料

- 「[Team について](/articles/about-teams)」
- 「[Team の可視性の変更](/articles/changing-team-visibility)」
- 「[Organization 階層内で Team を移動する](/articles/moving-a-team-in-your-organization-s-hierarchy)」
