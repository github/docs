---
title: 外部のコラボレータを Organization のリポジトリに追加する
intro: Organizationのメンバーではないユーザに、Organizationが所有するリポジトリへのアクセスを許可できます。
redirect_from:
- /articles/adding-outside-collaborators-to-repositories-in-your-organization
- /github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Add outside collaborator
permissions: People with admin access to a repository can add an outside collaborator to the repository.
ms.openlocfilehash: caac79aba845f433effd3a3461e739d07cee135b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145130736"
---
## 外部のコラボレータについて

外部のコラボレータは、Organizationのメンバーではないものの、Organizationの1つ以上のリポジトリにアクセスできるユーザです。 付与するアクセスレベルは、外部のコラボレータごとに選択できます。 {% data reusables.organizations.outside_collaborator_forks %}

{% data reusables.organizations.outside-collaborators-use-seats %}

{% ifversion fpt %} {% data variables.product.prodname_ghe_cloud %} を使う Organization は、コラボレーターの招待機能を制限できます。 詳細については、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[外部コラボレーターを追加するためのアクセス許可の設定](/enterprise-cloud@latest/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)」を参照してください。
{% else %} Organozation の所有者は、コラボレーターを招待する機能を制限できます。 詳細については、「[外部のコラボレーターを追加するための権限を設定する](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)」を参照してください。
{% endif %}

{% ifversion ghes %} リポジトリに外部コラボレーターとして誰かを追加するには、そのユーザーが {% data variables.product.product_location %} に個人アカウントを持っている必要があります。 EnterpriseがSAMLやLDAPのような外部の認証システムを使っているなら、アカウントを作成するためには追加したい人はそのシステムを通じてサインインしなければなりません。 そのユーザーがその認証システムにアクセスできないものの、Enterprise ではビルトイン認証が有効にされている場合、サイト管理者がそのユーザーにアカウントを作成することができます。 詳しくは、「[ビルトイン認証を構成する](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)」を参照してください。
{% endif %}

{% ifversion not ghae %} Organization で 2 要素認証が必要な場合、すべての外部コラボレーターは、リポジトリで共同作業を行うための招待を受け入れる前に、2 要素認証を有効にする必要があります。 詳細については、「[Organization で 2 要素認証を要求する](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)」を参照してください。
{% endif %}

## リポジトリへの外部のコラボレータの追加

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} 外部コラボレーターにリポジトリ設定のリポジトリへのアクセス権を付与できます。 詳細については、「[リポジトリへのアクセス権を持つ Team と人を管理する](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person)」を参照してください。 {% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
5. 左側のサイドバーで、 **[コラボレーターと Team]** をクリックします。
  ![コラボレーターと Team が強調表示されたリポジトリ設定のサイドバー](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. [コラボレーター] の下で、リポジトリへのアクセスを許可したい人の名前を入力し、 **[コラボレーターの追加]** をクリックします。
![Octocat のユーザー名が検索フィールドに入力されている [コラボレーター] セクション](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. 新しいコラボレータの名前の隣で、ドロップダウンメニューを使って適切なアクセスレベルを選択してください。
![リポジトリのアクセス許可ピッカー](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png) {% endif %}
