---
title: 削除された Organization の復元
intro: '{% data variables.product.product_location %} 上の過去に削除された組織を部分的に復元することができます。'
versions:
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Restore organization
permissions: 'Site administers can restore an organization on {% data variables.product.product_name %}.'
ms.openlocfilehash: 1963b1e55a9c8047c19bafd087162caa8d5085f2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063755'
---
## Organization の復元について

監査ログ Elasticsearch インデックスに `org.delete` イベントのデータが含まれている限り、以前に削除された {% data variables.product.product_location %} 上の Organization を、サイト管理者ダッシュボードを使用して、復元できます。

Organization を復元した直後は、Organization は削除前とまったく同じではありません。 Organization が所有していたリポジトリを手動で復元する必要があります。 詳細については、「[削除されたリポジトリの復元](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)」を参照してください。

監査ログを使用して、Team と Organization のメンバーを手動で再追加することもできます。 詳細については、「[メンバーと Team の復元](#restoring-members-and-teams)」を参照してください。

## Organization の復元

{% data reusables.enterprise_site_admin_settings.access-settings %}
1. [ユーザー、Organization、Enterprise、Team、リポジトリ、gists、アプリケーションを検索する] で、Organization を検索します。

  ![[検索] フィールドと [検索] ボタンのスクリーンショット](/assets/images/enterprise/stafftools/search-field.png)

1. [削除されたアカウント] で、復元する Organization の右側にある {% octicon "kebab-horizontal" aria-label="The edit icon" %} ドロップダウン メニューを選択し、 **[再作成]** をクリックします。

   ![削除された Organization のドロップダウン メニューのスクリーンショット](/assets/images/enterprise/stafftools/recreate-organization.png)

## メンバーと Team の復元

監査ログを使用して、Organization の以前のメンバーと Team のリストを見つけ、手動で再作成できます。 監査ログの使用の詳細については、「[Enterprise にわたるユーザーの監査](/admin/user-management/managing-users-in-your-enterprise/auditing-users-across-your-enterprise)」を参照してください。

以下のすべての検索語句で、ORGANIZATION を Organization の名前に、TEAM を Team の名前に置き換えてください。

### Organization メンバーの復元

1. Organization に追加および削除されたすべてのユーザーを検索するには、監査ログで、`action:org.add_member org:ORGANIZATION` と `action:org.remove_member org:ORGANIZATION` を検索します。
1. 引き続きメンバーである必要がある各ユーザーを Organization に手動で追加します。 詳細については、「[Organization への人の追加](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)」を参照してください。

### Team の復元

1. 各 Team 名を検索するには、監査ログで `action:team.create org:ORGANIZATION` を検索します。
1. 手動で Teamを再作成します。 詳細については、「[チームを作成する](/organizations/organizing-members-into-teams/creating-a-team)」を参照してください。
1. 各 Team に追加されたメンバーを検索するには、`action:team.add_member team:"ORGANIZATION/TEAM"` を検索します。
1. Team メンバーを手動で再追加します。 詳細については、「[Team への Organization メンバーの追加](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)」を参照してください。
1. Team にアクセス権が付与されたリポジトリを検索するには、`action:team.add_repository team:"ORGANIZATION/TEAM"` を検索します。
1. 各リポジトリに対して Team に付与されたアクセス レベルを見つけるには、`action:team.update_repository_permission team:"ORGANIZATION/TEAM"` を検索します。
1. 手動で Team にもう一度アクセス権を付与します。 詳細については、「[Organization リポジトリへの Team のアクセスを管理する](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)」を参照してください。
