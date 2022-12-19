---
title: チームの作成
intro: Team は Organization がメンバーのグループを作成し、リポジトリへのアクセスを制御できるようにします。 Team のメンバーには特定のリポジトリの読み取り、書き込み、管理権限を与えることができます。
redirect_from:
  - /enterprise/admin/user-management/creating-teams
  - /admin/user-management/creating-teams
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
ms.openlocfilehash: 83db75485e7967941fdcd3ab651e638aa1eabb3f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332337'
---
Team は、team @mentions のように適切なグループに入力や注目を求めたい場合に通知をするような、{% data variables.product.prodname_dotcom %} のコラボレーションの機能の多くにおいて中心的な役割を果たします。 詳細については、「[Organization のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。

Teamは、企業内のグループを表したり、特定の関心や専門分野を持つ人々を含めたりできます。 たとえば、{% data variables.product.product_location %} のアクセシビリティの専門家の Team は、さまざまな部署からの人々で構成されている可能性があります。 Teamは、企業の既存の部門階層を補完する機能的な関心事項を表します。

Organizationには、企業やグループの階層構造を反映させた入れ子チームを複数レベルで作成できます。 詳細については、「[Team について](/enterprise/user/articles/about-teams/#nested-teams)」を参照してください。

## Team の作成

Teamの良く考えられた組み合わせは、リポジトリへのアクセスを制御する強力な方法です。 たとえば、Organization で任意のリポジトリの既定のブランチにコードのプッシュすることを許可している場合、Organization のリポジトリに対する **管理者** 権限をリリース エンジニアリング チームの Team にのみ付与し、他のすべての Team に **読み取り** 権限を付与できます。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create-team-choose-parent %} {% data reusables.organizations.create_team %}

{% ifversion ghes %}

## LDAP Syncを有効化したTeamの作成

ユーザ認証にLDAPを使っているインスタンスでは、Teamのメンバー管理にLDAP Syncが使えます。 **[LDAP グループ]** フィールドにグループの **識別名** (DN) を設定すると、Team が LDAP サーバー上の LDAP グループにマップされます。 Team のメンバー管理に LDAP Sync を使う場合、{% data variables.product.product_location %} 内で Team を管理することはできません。 LADP Syncを有効化すると、マッピングされたTeamはそのメンバーをバックグラウンドで定期的に設定された間隔で同期します。 詳細については、「[LDAP Sync の有効化](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync)」を参照してください。

LDAP Sync を有効にして Team を作成するには、サイト管理者で Organization の所有者である必要があります。

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**注:**
- LDAP Sync は Team のメンバーリストだけを管理します。 Team のリポジトリと権限は {% data variables.product.prodname_ghe_server %} 内で管理しなければなりません。
- LDAP グループが削除されるなどして、DN への LDAP グループのマッピングが削除されたなら、すべてのメンバーは同期されている {% data variables.product.prodname_ghe_server %} Team から削除されます。 これを修正するには、Team を新しい DN にマップし、Team メンバーを再度追加して、[マッピングを手動で同期します](/enterprise/admin/authentication/using-ldap#manually-syncing-ldap-accounts)。
- LDAP Sync が有効化されていると、ある人がリポジトリから削除された場合、その人はアクセスを失いますが、その人のフォークは削除されません。 元々のOrganizationのリポジトリへのアクセスできるように3ヶ月以内にその人がTeamに追加されたなら、次回の同期の際にフォークへのアクセスは自動的に回復されます。

{% endwarning %}

1. [LDAP Sync が有効になっている](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync)ことを確認します。
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %}
6. TeamをマッピングするLDAPグループのDNを検索してください。 DNが分からないなら、LDAPグループの名前を入力してください。 {% data variables.product.prodname_ghe_server %} は検索を行い、マッチがあればオートコンプリートします。
![LDAP グループ DN へのマッピング](/assets/images/enterprise/orgs-and-teams/ldap-group-mapping.png) {% data reusables.organizations.team_description %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create-team-choose-parent %} {% data reusables.organizations.create_team %}

{% endif %}
