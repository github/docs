---
title: チームへのユーザーの追加
redirect_from:
  - /enterprise/admin/articles/adding-teams
  - /enterprise/admin/articles/adding-or-inviting-people-to-teams
  - /enterprise/admin/guides/user-management/adding-or-inviting-people-to-teams
  - /enterprise/admin/user-management/adding-people-to-teams
  - /admin/user-management/adding-people-to-teams
intro: 'チームが作成されると、組織の管理者はユーザーを {% data variables.product.product_location %} からチームに追加し、どのリポジトリにアクセスできるようにするかを決定できます。'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
ms.openlocfilehash: 1246641db416630d0faed75821078618a4399eb8
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884254'
---
各 Team には、[Organization が所有するリポジトリに対する個別に定義されたアクセス許可があります](/articles/permission-levels-for-an-organization)。

- オーナー権限を持つメンバーは、すべてのTeamから既存のOrganizationのメンバーを追加したり削除したりできます。
- 管理者権限を与えるTeamのメンバーは、TeamのメンバーシップとそのTeamのリポジトリだけを変更できます。

## チームのセットアップ

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.invite_to_team %} {% data reusables.organizations.review-team-repository-access %}

{% ifversion ghes %}

## TeamのLDAPグループへのマッピング（たとえばLDAP Syncをユーザ認証に使って）

{% data reusables.enterprise_management_console.badge_indicator %}

LDAPグループに同期されているTeamに新しいメンバーを追加するには、そのユーザをLDAPグループのメンバーとして追加するか、LDAPの管理者に連絡してください。

{% endif %}
