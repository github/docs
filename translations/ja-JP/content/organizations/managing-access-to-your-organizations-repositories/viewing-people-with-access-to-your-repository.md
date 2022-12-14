---
title: 自分のリポジトリにアクセスできる人を表示する
intro: Organization内のリポジトリにアクセスできる人のリストを表示{% ifversion ghec or ghes or ghae %}及びエクスポート{% endif %}できます。
redirect_from:
- /articles/viewing-people-with-access-to-your-repository
- /github/setting-up-and-managing-organizations-and-teams/viewing-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: View people with access
permissions: Organization owners can view people with access to a repository.
ms.openlocfilehash: 01ee5b1844e32b4ba631fda67babaa9e9f8a982e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "147066635"
---
## リポジトリにアクセスできる人のリストについて

この情報は、外部の人の支援、コンプライアンスのデータ収集、その他の一般的なセキュリティチェックに利用できます。 

{% ifversion fpt %} {% data variables.product.prodname_ghe_cloud %} を使用する Organization は、リポジトリへのアクセス権を持つ人の CSV リストをエクスポートすることもできます。 詳細については、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest/organizations/managing-access-to-your-organizations-repositories/viewing-people-with-access-to-your-repository)を参照してください。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} ![アクセス管理の概要](/assets/images/help/repository/manage-access-overview.png) {% else %} ![リポジトリ ユーザーのアクセス許可リスト](/assets/images/help/repository/repository-permissions-list.png) {% endif %}
## 自分のリポジトリにアクセスできる人を表示する

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} リポジトリ設定で、リポジトリにアクセスできる Team とユーザーの概要を組み合わせて確認できます。 詳細については、「[リポジトリへのアクセス権を持つ Team と人を管理する](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories)」を参照してください。 {% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.accessing-repository-people %} {% endif %}

{% ifversion ghec or ghes or ghae %}
## リポジトリへのアクセス権を持つ人のリストをエクスポートする

{% ifversion ghec %} {% note %}

**注:** {% data variables.product.prodname_ghe_cloud %} を使用する Organization だけが、リポジトリにアクセスできる人のリストをエクスポートできます。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.accessing-repository-people %}
4. **[CSV にエクスポート]** をクリックします。
  ![リポジトリ サイドバーの [ユーザー] タブ](/assets/images/help/repository/export-repository-permissions.png) {% endif %}
